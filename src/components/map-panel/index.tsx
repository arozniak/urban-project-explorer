import SceneView from "@arcgis/core/views/SceneView";
import Polygon from "@arcgis/core/geometry/Polygon";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import UniqueValueRenderer from "@arcgis/core/renderers/UniqueValueRenderer";
import PolygonSymbol3D from "@arcgis/core/symbols/PolygonSymbol3D";
import FillSymbol3DLayer from "@arcgis/core/symbols/FillSymbol3DLayer";
import Map from "@arcgis/core/Map";
import Graphic from "@arcgis/core/Graphic";

import { useEffect, useRef } from "react";
import * as Styled from "./styles";
import "@arcgis/core/assets/esri/css/view.css";

import { useGetProjectsQuery } from "../../generated/graphql.d";
import { useAppSelector } from "../../store/hooks";
import { getNeighborhoodRings } from "../../services/data-fetch/index";
import { ProjectStatusColor } from "../constants/colors";

import { MODEL_ID } from "../../services/constants/api";
import { StatusType, statusTypeDetails } from "../constants/statusTypes";

let view: SceneView;
let map: Map;
let projectsLayer: FeatureLayer;
let neighborhoodLayer: FeatureLayer;

function adjustExtent(extent: any, margin: number) {
  extent.xmin -= margin;
  extent.ymin -= margin;
  extent.xmax += margin;
  extent.ymax += margin;
}

export function zoomToProject(projectID: string) {
  const query = projectsLayer.createQuery();
  query.where = `GlobalID = '${projectID}'`;
  projectsLayer.queryExtent(query).then((results) => {
    let zoomExtent = results.extent;
    adjustExtent(zoomExtent, 500);
    view.goTo(zoomExtent);
  });
}

export function zoomToNeighborhood(neighborhood: string) {
  const query = projectsLayer.createQuery();
  query.where = `Neighborhood = '${neighborhood}'`;
  projectsLayer.queryExtent(query).then((results) => {
    let zoomExtent = results.extent;
    adjustExtent(zoomExtent, 2000);
    view.goTo(zoomExtent);
  });
}

const MapPanel: React.FC<{}> = () => {
  const neighborhoodData = useAppSelector((state) => state.neighborhoods);

  const componentRef = useRef(null);

  // fetch data
  const [{ data, fetching, error }, _] = useGetProjectsQuery({
    variables: { modelId: MODEL_ID },
  });
  const filter = useAppSelector((state) => state.projectsFilter);
  useEffect(() => {
    const loadMapView = async () => {
      let preset: "low" | "medium" | "high" | undefined = "medium";
      const viewSettings = {
        qualityProfile: preset,
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
        center: [-71.0589, 42.3601],
        scale: 50000,
      };

      map = new Map({
        basemap: "gray-vector",
      });

      view = new SceneView({
        container: "mapView",
        ...viewSettings,
        map,
      });
    };

    loadMapView();
  }, []);

  // draw neighborhoods
  useEffect(() => {
    const neighborhoodFeatures = getNeighborhoodRings();

    const graphics = neighborhoodFeatures.map((feature) => {
      return new Graphic({
        attributes: {},
        geometry: new Polygon({
          rings: feature,
          spatialReference: {
            wkid: 4326,
          },
        }),
      });
    });

    neighborhoodLayer = new FeatureLayer({
      source: graphics,
      objectIdField: "ObjectId",
      fields: [
        {
          name: "ObjectId",
          type: "oid",
        },
      ],
      renderer: {
        type: "simple",
        symbol: {
          type: "simple-fill",
          color: [255, 255, 255, 0.05],
          style: "solid",
          outline: {
            color: "grey",
            width: 1,
          },
        },
      } as __esri.RendererProperties,
    });

    map.add(neighborhoodLayer);
  }, []);

  // draw projects
  useEffect(() => {
    if (fetching || !neighborhoodData.loaded) return;
    if (error) return;

    const projects = data?.urbanModel?.urbanDatabase?.projects!;

    const graphics = projects
      .filter((project) => !!project && !!project.geometry)
      .map((project) => {
        const neighborhood =
          neighborhoodData.neighborhoods.find(
            (entry) => entry.id === project?.attributes.GlobalID
          )?.name ?? "";
        const attributes = {
          status: project?.statusType?.attributes.Icon as string,
          GlobalID: project?.attributes.GlobalID as string,
          Neighborhood: neighborhood,
        };

        return new Graphic({
          attributes: attributes,
          geometry: new Polygon({
            rings: project!.geometry!.rings,
            spatialReference: {
              wkid: 3857,
            },
          }),
          symbol: new PolygonSymbol3D({
            symbolLayers: [
              new FillSymbol3DLayer({
                material: {
                  color: ProjectStatusColor.Blue,
                },
              }),
            ],
          }),
        });
      });

    let renderer = new UniqueValueRenderer({
      field: "status",
      defaultSymbol: new PolygonSymbol3D({
        symbolLayers: [
          new FillSymbol3DLayer({
            material: {
              color: "yellow",
            },
          }),
        ],
      }),
      uniqueValueInfos: Object.values(StatusType).map((statusType) => ({
        value: statusType,
        symbol: new PolygonSymbol3D({
          symbolLayers: [
            new FillSymbol3DLayer({
              material: {
                color: statusTypeDetails[statusType].color,
              },
            }),
          ],
        }),
      })),
    });

    projectsLayer = new FeatureLayer({
      source: graphics,
      objectIdField: "ObjectId",
      fields: [
        {
          name: "ObjectId",
          type: "oid",
        },
        {
          name: "GlobalID",
          type: "string",
        },
        {
          name: "status",
          type: "string",
        },
        {
          name: "Neighborhood",
          type: "string",
        },
      ],
      renderer,
    });

    map.add(projectsLayer);
  }, [data, error, fetching, neighborhoodData]);

  useEffect(() => {
    if (projectsLayer) {
      if (filter.currentFilter === "None") {
        projectsLayer.definitionExpression = `1=1`;
      } else {
        projectsLayer.definitionExpression = `status = '${filter.currentFilter}'`;
      }
    }
  }, [filter]);

  return <Styled.Wrapper id="mapView" ref={componentRef}></Styled.Wrapper>;
};

export default MapPanel;

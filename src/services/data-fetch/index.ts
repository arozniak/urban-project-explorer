import { Position } from "geojson";
import { GetProjectsInGeometryDocument } from "../../generated/graphql.d";
import { AppDispatch } from "../../store";
import { setNeighborhoods } from "../../store/slices/neighborhoods-slice";
import { APIClient } from "../graphql/api-client";
import * as neighborhoods from "./Boston_Neighborhoods.json";
import { buildGeometryFilterFromCoordinates } from "./helpers";

import { MODEL_ID } from "../constants/api";

export function getNeighborhoodData(): GeoJSON.FeatureCollection {
  // should fetch neighborhoods from a service
  // static geojson for now
  const data = neighborhoods as GeoJSON.GeoJSON;
  if (data.type !== "FeatureCollection") {
    throw new Error("Expected Feature Collection");
  }
  return data;
}

export const fetchNeighborhoods = async (
  dispatch: AppDispatch,
  client: typeof APIClient
) => {
  const neighborhoods = getNeighborhoodData();

  const neighborhoodData = await Promise.all(
    neighborhoods.features.map(async (neighborhood) => {
      const filter = buildGeometryFilterFromCoordinates(neighborhood.geometry);
      var result = await client
        .query(GetProjectsInGeometryDocument, {
          geoFilter: filter,
          modelId: MODEL_ID,
        })
        .toPromise();
      if (result.error) throw new Error("Error during fetching...");
      var fetchedProjects = result.data.urbanModel.urbanDatabase.projects;
      return {
        neighborhood: neighborhood.properties!["Name"],
        projects: fetchedProjects,
      };
    })
  );

  let mappedNeighborhoods: { name: string; id: string }[] = [];

  neighborhoodData.forEach((tuple) => {
    tuple.projects.forEach((project: any) => {
      mappedNeighborhoods.push({
        name: tuple.neighborhood as string,
        id: project.attributes.GlobalID as string,
      });
    });
  });

  dispatch(setNeighborhoods(mappedNeighborhoods));
};

export function getNeighborhoodRings(): Position[][][] {
  const neighborhoods = getNeighborhoodData();
  let neighborhoodGeometries: Position[][][] = [];

  neighborhoods.features.forEach((neighborhood) => {
    if (neighborhood.geometry.type === "Polygon") {
      neighborhoodGeometries.push([neighborhood.geometry.coordinates[0]]);
    }
    if (neighborhood.geometry.type === "MultiPolygon") {
      neighborhoodGeometries.push(neighborhood.geometry.coordinates[0]);
    }
  });

  return neighborhoodGeometries;
}

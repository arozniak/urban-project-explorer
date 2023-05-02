import {
  GeometryFilterInput,
  SpatialRelationship,
} from "../../generated/graphql.d";
import { GEOJSON_SPATIAL_REFERENCE } from "../constants/spatial-reference";

export function buildGeometryFilterFromCoordinates(
  geometry: GeoJSON.Geometry
): GeometryFilterInput {
  const spatialReference = { wkid: GEOJSON_SPATIAL_REFERENCE };
  switch (geometry.type) {
    case "Point":
      return {
        point: {
          spatialReference,
          x: geometry.coordinates[0],
          y: geometry.coordinates[1],
        },
        relationship: SpatialRelationship.Touches,
      };
    case "Polygon":
      return {
        polygon: {
          spatialReference,
          // TODO: fix / check assumption that GeometryFilterInput only supports an outer ring without inner rings, if not, this would have to change
          rings: [geometry.coordinates[0]],
        },
        relationship: SpatialRelationship.Intersects,
      };
    case "MultiPolygon":
      return {
        polygon: {
          spatialReference,
          // TODO: fix / check assumption that GeometryFilterInput only supports an outer ring without inner rings, if not, this would have to change
          rings: geometry.coordinates[0],
        },
        relationship: SpatialRelationship.Intersects,
      };
    default:
      throw new Error("POC -> not implemented");
  }
}

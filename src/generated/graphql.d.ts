import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   *
   * Examples: #FF22AA, #ff22aa, #f2a
   *
   * Needs to match /(^#[0-9a-f]{6}$)|(^#[0-9a-f]{3}$)/i
   *
   */
  Color: any;
  /**
   * Geographic extent given as a ring: the minimum and maximum longitude (X) and latitude (Y) of a bounding box. [[X, Y][X, Y]]
   *
   *   Coordinates should be specified using the WGS84 (wkid: 4326) spatial reference.
   */
  Extent: any;
  /**
   *
   * The unique identifier of a feature in an urban database or urban design database.
   *
   * Example: 2a71c012-abbb-43dc-81c4-c5d55d4604c7
   *
   * Needs to match /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
   *
   */
  GlobalID: any;
  /**
   *
   * The unique identifier of an organization in the ArcGIS portal.
   *
   * Example: r0I0JKe3OLRdkKyK
   *
   * Needs to match /^[0-9a-zA-Z]{16}$/
   *
   */
  OrganizationId: any;
  /**
   *
   * The unique identifier of an item in the ArcGIS portal.
   *
   * Example: d8a87a34620e4182a1cabf0f0fae0728
   *
   * Needs to match /^[0-9a-f]{12}4[0-9a-f]{3}[89ab][0-9a-f]{15}$/
   *
   */
  PortalItemId: any;
  /** The javascript `Date` as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: any;
};

export type ApiInfo = {
  __typename?: 'APIInfo';
  /** Version of the API. */
  apiVersion: Scalars['String'];
  /** Version of the data schema. */
  schemaVersion: Scalars['String'];
};

/**
 * **Organization**: All members of the organization have access.
 * **Private**: Owner of the item has access.
 * **Public**: People outside the organization have access.
 * **Shared**: People of specific groups have access.
 * **Unknown**: Access level is unknown.
 */
export enum AccessLevel {
  Organization = 'Organization',
  Private = 'Private',
  Public = 'Public',
  Shared = 'Shared',
  Unknown = 'Unknown'
}

/** JSON object with space use type reference and target distribution. */
export type AllowedSpaceUseType = {
  __typename?: 'AllowedSpaceUseType';
  /** ID of the space use type that is allowed in the zoning type. */
  spaceUseTypeID: Scalars['GlobalID'];
  /** Target distribution of the space use type. */
  targetDistribution?: Maybe<Scalars['Float']>;
};

export type AllowedSpaceUseTypeInput = {
  /** ID of the space use type that is allowed in the zoning type. */
  spaceUseTypeID: Scalars['GlobalID'];
  /**
   * Target distribution of the space use type.
   *
   * Minimum value: 0.001
   * Maximum value: 1
   */
  targetDistribution?: InputMaybe<Scalars['Float']>;
};

/** A branch is a design scenario in a plan or project. */
export type Branch = {
  __typename?: 'Branch';
  attributes: BranchAttributes;
};

/** Attributes of the branch. */
export type BranchAttributes = {
  __typename?: 'BranchAttributes';
  /** Name of the branch. */
  BranchName: Scalars['String'];
  /** The order of the branch. */
  BranchOrder: Scalars['Int'];
  /** Portal item id of a web scene whose layers are shown as design context layers when editing scenarios (only visible in the scenario). */
  ContextWebsceneItemId?: Maybe<Scalars['PortalItemId']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: Maybe<Scalars['String']>;
  /** Description for the branch shown in the scenario switcher. */
  Description?: Maybe<Scalars['String']>;
  /** If `true`, the branch represents existing conditions. */
  Existing: Scalars['Boolean'];
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /**
   * If `true`, the branch cannot be edited by others.
   * @deprecated No longer supported. (Removal date: 2024-02-28)
   */
  Locked: Scalars['Boolean'];
  /** A polygon masking out existing buildings and existing trees. */
  MaskingGeometry?: Maybe<Polygon>;
  /** Metric values stored on a branch for projects and public plans. */
  MetricValues: Array<BranchMetricValue>;
  /** Modal split coefficients. */
  ModalSplit?: Maybe<ModalSplit>;
  /**
   * ArcGIS account username of the user who has created the branch.
   * @deprecated No longer supported. (Removal date: 2024-03-27)
   */
  OwnerName: Scalars['String'];
  /** ID of the urban event (plan or project) the branch (scenario) belongs to. */
  UrbanEventID: Scalars['GlobalID'];
  /** Portal item id of a web scene whose layers are added as design visualization. The portal item can also be a single layer (e.g., SceneLayer). */
  WebsceneItemId?: Maybe<Scalars['PortalItemId']>;
};

export type BranchFilterInput = {
  branchOrders?: InputMaybe<Array<Scalars['Int']>>;
  globalIDs?: InputMaybe<Array<Scalars['GlobalID']>>;
};

/** Metric value stored for a metric. */
export type BranchMetricValue = {
  __typename?: 'BranchMetricValue';
  /** ID of the metric that the data points to. */
  metricID: Scalars['GlobalID'];
  /** Stores the value for the metric. */
  value: Scalars['Float'];
};

export type BranchMetricValueInput = {
  /** ID of the metric that the data points to. */
  metricID: Scalars['GlobalID'];
  /** Stores the value for the metric. */
  value: Scalars['Float'];
};

export enum BranchSortBy {
  BranchName = 'BranchName',
  BranchOrder = 'BranchOrder',
  /** @deprecated No longer supported. (Removal date: 2024-03-27) */
  OwnerName = 'OwnerName'
}

export type BranchSortInput = {
  direction?: InputMaybe<SortDirection>;
  sortBy: BranchSortBy;
};

/**
 * **Front**: Building is aligned to front edge(s) of the parcel.
 * **Side**: Building is aligned to side edge(s) of the parcel.
 * **Rear**: Building is aligned to rear edge(s) of the parcel.
 */
export enum BuildingAlignment {
  Front = 'Front',
  Rear = 'Rear',
  Side = 'Side'
}

/** Configuration of the building part such as space use and floor ranges. */
export type BuildingPart = {
  __typename?: 'BuildingPart';
  /** If `true`, the spaces in the building part should be excluded from GFA / FAR calculations. */
  gfaIgnore: Scalars['Boolean'];
  /** The floor range of the building part. */
  numFloors: NumFloors;
  /** ID of the space use type that is assigned to the building part. */
  spaceUseTypeID: Scalars['GlobalID'];
};

export type BuildingPartInput = {
  /** If `true`, the spaces in the building part should be excluded from GFA / FAR calculations. */
  gfaIgnore?: Scalars['Boolean'];
  /** The floor range of the building part. */
  numFloors: NumFloorsInput;
  /** ID of the space use type that is assigned to the building part. */
  spaceUseTypeID: Scalars['GlobalID'];
};

/** A building type is a template used to build out future buildings respecting the zoning code in plans. */
export type BuildingType = {
  __typename?: 'BuildingType';
  attributes: BuildingTypeAttributes;
};

/** Attributes of the building type. */
export type BuildingTypeAttributes = {
  __typename?: 'BuildingTypeAttributes';
  /** List of parcel edges that the building is aligned to. */
  Alignment?: Maybe<Array<BuildingAlignment>>;
  /** Building parts above ground. */
  BuildingParts?: Maybe<Array<BuildingPart>>;
  /** Building parts below ground. */
  BuildingSubParts?: Maybe<Array<BuildingPart>>;
  /** Name of the building type. */
  BuildingTypeName: Scalars['String'];
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: Maybe<Scalars['String']>;
  /** Minimal floor area for the generated floors in [m2]. */
  FloorAreaMin?: Maybe<Scalars['Float']>;
  /** Maximum length of the generated footprint in [m]. */
  FootprintLengthMax?: Maybe<Scalars['Float']>;
  /** Shape of the generated floors. */
  FootprintShape: FootprintShape;
  /** Maximum width of the generated footprint in [m]. */
  FootprintWidthMax?: Maybe<Scalars['Float']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /** Number of dwelling units per area for parcels with multiple buildings in [units/m2]. */
  MultipleBuildingsDensity?: Maybe<Scalars['Float']>;
  /** Distance between dwelling units for parcels with multiple buildings in [m]. */
  MultipleBuildingsDistance?: Maybe<Scalars['Float']>;
  /** If `true`, multiple buildings per parcel area enabled. */
  MultipleBuildingsEnabled: Scalars['Boolean'];
  /** If `true`, the building type is proposed in the plan. */
  Proposal: Scalars['Boolean'];
  /** Minimum length of the generated building segments in [m]. */
  SegmentLengthMin?: Maybe<Scalars['Float']>;
  /** Minimum width of the generated building segments in [m]. */
  SegmentWidthMin?: Maybe<Scalars['Float']>;
  /** Index of the part where tower massing starts. */
  TowerIndex?: Maybe<Scalars['Int']>;
  /** ID of the urban event (plan) the building type belongs to. */
  UrbanEventID?: Maybe<Scalars['GlobalID']>;
};

export type BuildingTypeFilterInput = {
  globalIDs?: InputMaybe<Array<Scalars['GlobalID']>>;
};

export type BuildingTypesMeta = FeaturesMeta & {
  __typename?: 'BuildingTypesMeta';
  /** The number of building types. */
  count?: Maybe<Scalars['Int']>;
};

/**
 * **NumberChart**: Metric is visualized as a number.
 * **StackedBarChart**: Metric is visualized in a stacked bar chart.
 * **HorizontalBarChart**: Metric is visualized in a horizontal bar chart.
 * **VerticalBarChart**: Metric is visualized in a vertical bar chart.
 * **DoughnutChart**: Metric is visualized in a doughnut chart.
 * **SortedListChart**: Metric is visualized in a sorted list
 */
export enum ChartStyle {
  DoughnutChart = 'DoughnutChart',
  HorizontalBarChart = 'HorizontalBarChart',
  NumberChart = 'NumberChart',
  SortedListChart = 'SortedListChart',
  StackedBarChart = 'StackedBarChart',
  VerticalBarChart = 'VerticalBarChart'
}

/** Layer configuration for context layers. */
export type ContextLayerSettings = {
  __typename?: 'ContextLayerSettings';
  /** If `true`, the layer is visible. */
  visible: Scalars['Boolean'];
};

export type ContextLayerSettingsInput = {
  /** If `true`, the layer is visible. */
  visible: Scalars['Boolean'];
};

/** OverlayType configuration for CoverageMax. */
export type CoverageMax = {
  __typename?: 'CoverageMax';
  /** Overlay method that gets applied to the parcel zoning parameters when redeveloping. */
  method: OverlayTypeMethod;
};

export type CoverageMaxInput = {
  /** Overlay method that gets applied to the parcel zoning parameters when redeveloping. */
  method?: OverlayTypeMethod;
};

/** Input attributes for creating a new branch. */
export type CreateBranchAttributesInput = {
  /**
   * Name of the branch.
   *
   * Minimum length: 1
   * Maximum length: 200
   */
  BranchName: Scalars['String'];
  /** The order of the branch. */
  BranchOrder: Scalars['Int'];
  /**
   * Portal item id of a web scene whose layers are shown as design context layers when editing scenarios (only visible in the scenario).
   *
   * Maximum length: 32
   */
  ContextWebsceneItemId?: InputMaybe<Scalars['PortalItemId']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /**
   * Description for the branch shown in the scenario switcher.
   *
   * Maximum length: 700
   */
  Description?: InputMaybe<Scalars['String']>;
  /** If `true`, the branch represents existing conditions. */
  Existing?: Scalars['Boolean'];
  /** Unique identifier (UUID) of the feature. */
  GlobalID?: InputMaybe<Scalars['GlobalID']>;
  /** If `true`, the branch cannot be edited by others. */
  Locked?: InputMaybe<Scalars['Boolean']>;
  /** A polygon masking out existing buildings and existing trees. */
  MaskingGeometry?: InputMaybe<PolygonInput>;
  /** Metric values stored on a branch for projects and public plans. */
  MetricValues?: InputMaybe<Array<BranchMetricValueInput>>;
  /** Modal split coefficients. */
  ModalSplit?: InputMaybe<ModalSplitInput>;
  /** ArcGIS account username of the user who has created the branch. */
  OwnerName?: InputMaybe<Scalars['String']>;
  /** ID of the urban event (plan or project) the branch (scenario) belongs to. */
  UrbanEventID: Scalars['GlobalID'];
  /**
   * Portal item id of a web scene whose layers are added as design visualization. The portal item can also be a single layer (e.g., SceneLayer).
   *
   * Maximum length: 32
   */
  WebsceneItemId?: InputMaybe<Scalars['PortalItemId']>;
};

export type CreateBranchInput = {
  attributes: CreateBranchAttributesInput;
};

/** Input attributes for creating a new building type. */
export type CreateBuildingTypeAttributesInput = {
  /** List of parcel edges that the building is aligned to. */
  Alignment?: InputMaybe<Array<BuildingAlignment>>;
  /** Building parts above ground. */
  BuildingParts?: InputMaybe<Array<BuildingPartInput>>;
  /** Building parts below ground. */
  BuildingSubParts?: InputMaybe<Array<BuildingPartInput>>;
  /**
   * Name of the building type.
   *
   * Minimum length: 1
   * Maximum length: 50
   */
  BuildingTypeName: Scalars['String'];
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /**
   * Minimal floor area for the generated floors in [m2].
   *
   * Minimum value: 0
   */
  FloorAreaMin?: InputMaybe<Scalars['Float']>;
  /**
   * Maximum length of the generated footprint in [m].
   *
   * Minimum value: 0
   */
  FootprintLengthMax?: InputMaybe<Scalars['Float']>;
  /** Shape of the generated floors. */
  FootprintShape?: FootprintShape;
  /**
   * Maximum width of the generated footprint in [m].
   *
   * Minimum value: 0
   */
  FootprintWidthMax?: InputMaybe<Scalars['Float']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID?: InputMaybe<Scalars['GlobalID']>;
  /**
   * Number of dwelling units per area for parcels with multiple buildings in [units/m2].
   *
   * Minimum value: 0
   */
  MultipleBuildingsDensity?: InputMaybe<Scalars['Float']>;
  /**
   * Distance between dwelling units for parcels with multiple buildings in [m].
   *
   * Minimum value: 0
   */
  MultipleBuildingsDistance?: InputMaybe<Scalars['Float']>;
  /** If `true`, multiple buildings per parcel area enabled. */
  MultipleBuildingsEnabled?: InputMaybe<Scalars['Boolean']>;
  /** If `true`, the building type is proposed in the plan. */
  Proposal?: InputMaybe<Scalars['Boolean']>;
  /**
   * Minimum length of the generated building segments in [m].
   *
   * Minimum value: 0
   */
  SegmentLengthMin?: InputMaybe<Scalars['Float']>;
  /**
   * Minimum width of the generated building segments in [m].
   *
   * Minimum value: 0
   */
  SegmentWidthMin?: InputMaybe<Scalars['Float']>;
  /**
   * Index of the part where tower massing starts.
   *
   * Minimum value: 0
   */
  TowerIndex?: InputMaybe<Scalars['Int']>;
  /** ID of the urban event (plan) the building type belongs to. */
  UrbanEventID?: InputMaybe<Scalars['GlobalID']>;
};

export type CreateBuildingTypeInput = {
  attributes: CreateBuildingTypeAttributesInput;
};

/** Input attributes for creating a new criterion. */
export type CreateCriterionAttributesInput = {
  /** Name of the criterion. */
  CriterionName: Scalars['String'];
  /** Type of the criterion. */
  CriterionType?: CriterionType;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /** Whether the criterion is enabled in the calculation. When disabled, this criterion will not count towards the final score. */
  Enabled?: InputMaybe<Scalars['Boolean']>;
  /** Portal item id of an external layer. */
  ExternalLayerItemId?: InputMaybe<Scalars['String']>;
  /** Attribute field to be used for the criterion. */
  Field: Scalars['String'];
  /** Unique identifier (UUID) of the feature. */
  GlobalID?: InputMaybe<Scalars['GlobalID']>;
  /** GlobalID of the model. */
  ModelID: Scalars['GlobalID'];
  /** Whether reclassification is enabled on this criterion. When enabled, numeric values will be reclassified with ReclassificationIntervals, while string and null values will be reclassified with ReclassificationMappings. When disabled, scores will be copied directly from the input features. */
  ReclassificationEnabled?: InputMaybe<Scalars['Boolean']>;
  /** Reclassification intervals used in this criterion to reclassify numeric values. */
  ReclassificationIntervals?: InputMaybe<Array<ReclassificationIntervalInput>>;
  /** Map of (value, score) pairs used in this criterion to reclassify string and null values to a score. */
  ReclassificationMappings?: InputMaybe<Array<ReclassificationMappingInput>>;
  /** Sampling geometry used to extract the criterion. */
  SamplingGeometry?: InputMaybe<SamplingGeometry>;
  /** When sampling values to calculate the final score, a parcel might match multiple input features resulting in multiple records. This field configures the method to combine multiple records on one parcel. */
  SamplingMethod?: InputMaybe<SamplingMethod>;
  /** ID of the urban event (plan) the criteria belongs to. */
  UrbanEventID?: InputMaybe<Scalars['GlobalID']>;
  /**
   * Weight of the criterion.
   *
   * Minimum value: 0
   */
  Weight?: InputMaybe<Scalars['Float']>;
};

export type CreateCriterionInput = {
  attributes: CreateCriterionAttributesInput;
};

/** Input attributes for creating a new feedback category. */
export type CreateFeedbackCategoryAttributesInput = {
  /** Order of the category. */
  CategoryOrder?: InputMaybe<Scalars['Int']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /** Description of the category. */
  Description?: InputMaybe<Scalars['String']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID?: InputMaybe<Scalars['GlobalID']>;
  /** Reference to the icon of the category that contains an image path and a color. */
  Icon: FeedbackCategoryIcon;
  /**
   * Label of the category.
   *
   * Minimum length: 1
   * Maximum length: 20
   */
  Label: Scalars['String'];
};

export type CreateFeedbackCategoryInput = {
  attributes: CreateFeedbackCategoryAttributesInput;
};

/** Input attributes for creating a new indicator. */
export type CreateIndicatorAttributesInput = {
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /**
   * Portal item id of an ArcGIS Dashboard which will be embedded in the detail card of the indicator.
   *
   * Maximum length: 32
   */
  DashboardItemId?: InputMaybe<Scalars['PortalItemId']>;
  /** Description of the indicator (markdown enabled). */
  Description?: InputMaybe<Scalars['String']>;
  /** End date of the lifespan of the indicator. */
  EndDate: Scalars['Timestamp'];
  /** If `true`, the indicator is featured and appears at the top of the list in the overview. */
  Featured?: InputMaybe<Scalars['Boolean']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID?: InputMaybe<Scalars['GlobalID']>;
  /**
   * Name of the indicator.
   *
   * Minimum length: 1
   */
  IndicatorName: Scalars['String'];
  /** Type of the indicator. */
  IndicatorType?: IndicatorType;
  /** Configuration of which layers are shown together with indicators and how. */
  LayerSettings?: InputMaybe<LayerSettingsInput>;
  /** If `true`, the indicator cannot be edited by others. */
  Locked?: InputMaybe<Scalars['Boolean']>;
  /** ArcGIS account username of the user who has created the indicator. */
  OwnerName?: InputMaybe<Scalars['String']>;
  /** Start date of the lifespan of the indicator. */
  StartDate: Scalars['Timestamp'];
  /**
   * URL to a webpage. Shown in the detail card of the indicator.
   *
   * Maximum length: 255
   */
  WebpageUrl?: InputMaybe<Scalars['String']>;
  /**
   * Portal item id of a web scene whose layers are added as visualization. The portal item can also be a single layer (e.g., SceneLayer).
   *
   * Maximum length: 32
   */
  WebsceneItemId?: InputMaybe<Scalars['PortalItemId']>;
};

export type CreateIndicatorInput = {
  attributes: CreateIndicatorAttributesInput;
};

/** Input attributes for creating a new lod1 building. */
export type CreateLod1BuildingAttributesInput = {
  /** ID of the branch the building belongs to. */
  BranchID?: InputMaybe<Scalars['GlobalID']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID?: InputMaybe<Scalars['GlobalID']>;
  /** The extrusion height of the building in [m]. */
  Height?: InputMaybe<Scalars['Float']>;
};

export type CreateLod1BuildingInput = {
  attributes: CreateLod1BuildingAttributesInput;
  /** 3d geometry (xyz coordinates) */
  geometry: PolygonInput;
};

/** Input attributes for creating a new metric. */
export type CreateMetricAttributesInput = {
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /**
   * Description of the metric.
   *
   * Maximum length: 700
   */
  Description?: InputMaybe<Scalars['String']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID?: InputMaybe<Scalars['GlobalID']>;
  /** The x coordinate of the metric node on the metrics dependency graph. */
  GraphX?: InputMaybe<Scalars['Float']>;
  /** The y coordinate of the metric node on the metrics dependency graph. */
  GraphY?: InputMaybe<Scalars['Float']>;
  /**
   * Name of the metric.
   *
   * Minimum length: 1
   * Maximum length: 100
   */
  MetricName: Scalars['String'];
  /** The rounding method to use when rounding this metric. */
  NumberRoundingMethod?: InputMaybe<NumberRoundingMethod>;
  /** Operation of the metric on how to aggregate the source metrics. */
  Operation?: Operation;
  /** If `true`, the metric is proposed in the plan. */
  Proposal?: InputMaybe<Scalars['Boolean']>;
  /** Unit type of the metric. */
  UnitType?: UnitType;
  /** ID of the urban event (plan or project) the metric belongs to. */
  UrbanEventID?: InputMaybe<Scalars['GlobalID']>;
};

export type CreateMetricInput = {
  attributes: CreateMetricAttributesInput;
};

/** Input attributes for creating a new metric source. */
export type CreateMetricSourceAttributesInput = {
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID?: InputMaybe<Scalars['GlobalID']>;
  /** ID of the metric that the metric source belongs to. */
  MetricID: Scalars['GlobalID'];
  /** ID of the metric that the source points to if the source type is 'Metric'. Otherwise, this field is ignored. */
  SourceMetricID?: InputMaybe<Scalars['GlobalID']>;
  /**
   * Name of the metric source if the source type is anything other than 'Metric'. If source type is 'Metric', this field is ignored.
   *
   * Maximum length: 100
   */
  SourceName?: InputMaybe<Scalars['String']>;
  /** Type of the metric source. */
  SourceType?: SourceType;
  /** ID of the urban event (plan) the metric source belongs to. */
  UrbanEventID?: InputMaybe<Scalars['GlobalID']>;
  /** Indicates whether the weight is applied as an inverse (1/n) in the calculation or as the actual number (n). */
  WeightInverted?: InputMaybe<Scalars['Boolean']>;
  /**
   * Name of the parameter that is used as a weight. If type is 'Constant', this field is ignored.
   *
   * Maximum length: 100
   */
  WeightName?: InputMaybe<Scalars['String']>;
  /** Type of weight that is used for the metric calculation. */
  WeightType?: WeightType;
  /** Value for the parameter if the weight type is 'Constant'. */
  WeightValue?: InputMaybe<Scalars['Float']>;
};

export type CreateMetricSourceInput = {
  attributes: CreateMetricSourceAttributesInput;
};

/** Input attributes for creating a new metric value. */
export type CreateMetricValueAttributesInput = {
  /** ID of the branch the metric value belongs to. */
  BranchID?: InputMaybe<Scalars['GlobalID']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID?: InputMaybe<Scalars['GlobalID']>;
  /** ID of the metric that the value is saved for to retrieve the unit type and name. */
  MetricID: Scalars['GlobalID'];
  /** Metric value that is stored on the point. */
  Value: Scalars['Float'];
};

export type CreateMetricValueInput = {
  attributes: CreateMetricValueAttributesInput;
  /** 3d geometry (xyz coordinates) */
  geometry: PointInput;
};

/** Input attributes for creating a new overlay. */
export type CreateOverlayAttributesInput = {
  /** ID of the branch the overlay belongs to. */
  BranchID?: InputMaybe<Scalars['GlobalID']>;
  /**
   * Maximum allowed coverage in percentage.
   *
   * Minimum value: 0
   * Maximum value: 1
   */
  CoverageMax?: InputMaybe<Scalars['Float']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /** Description of the overlay. */
  Description?: InputMaybe<Scalars['String']>;
  /**
   * Maximum allowed dwelling units per area in [units/m2].
   *
   * Minimum value: 0
   * Maximum value: 200000
   */
  DwellingUnitsPerAreaMax?: InputMaybe<Scalars['Float']>;
  /**
   * Maximum allowed floor area ratio.
   *
   * Minimum value: 0
   * Maximum value: 500
   */
  FARMax?: InputMaybe<Scalars['Float']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID?: InputMaybe<Scalars['GlobalID']>;
  /**
   * Maximum allowed height in [m].
   *
   * Minimum value: 0
   * Maximum value: 1000
   */
  HeightMax?: InputMaybe<Scalars['Float']>;
  /** Label of the overlay. */
  Label?: InputMaybe<Scalars['String']>;
  /**
   * Maximum allowed number of floors.
   *
   * Minimum value: 0
   * Maximum value: 200
   */
  NumFloorsMax?: InputMaybe<Scalars['Int']>;
  /** ID of the overlay type the overlay belongs to. */
  OverlayTypeID: Scalars['GlobalID'];
  /** Array containing skyplanes. */
  Skyplanes?: InputMaybe<Array<SkyplaneInput>>;
  /**
   * Maximum allowed substructure depth in [m].
   *
   * Minimum value: 0
   * Maximum value: 1000
   */
  SubstructureDepthMax?: InputMaybe<Scalars['Float']>;
  /** An array of tiers and their allowed setbacks in [m]. */
  Tiers?: InputMaybe<Array<TierInput>>;
};

export type CreateOverlayInput = {
  attributes: CreateOverlayAttributesInput;
  /** 2d geometry (xy coordinates) */
  geometry: PolygonInput;
};

/** Input attributes for creating a new overlay type. */
export type CreateOverlayTypeAttributesInput = {
  /** Hex color of the zone type or overlay. */
  Color?: InputMaybe<Scalars['Color']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /** JSON object containing the configuration of the overlay types. */
  FieldsConfig: FieldsConfigInput;
  /** Fill style of the zone type or overlay. */
  FillStyle?: InputMaybe<FillStyle>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID?: InputMaybe<Scalars['GlobalID']>;
  /** Label shown on the overlay geometry. */
  Label?: InputMaybe<OverlayTypeLabel>;
  /** Outline style of the zone type or overlay. */
  OutlineStyle?: InputMaybe<OutlineStyle>;
  /** Name of the overlay type. */
  OverlayTypeName: Scalars['String'];
  /** The order of the overlay type. Defines the order in which the overlay types are displayed in the legend (and applied if relevant). */
  OverlayTypeOrder?: Scalars['Int'];
  /** If `true`, the overlay type is proposed in the plan. */
  Proposal?: InputMaybe<Scalars['Boolean']>;
  /** ID of the urban event (plan) the overlay type belongs to. */
  UrbanEventID?: InputMaybe<Scalars['GlobalID']>;
};

export type CreateOverlayTypeInput = {
  attributes: CreateOverlayTypeAttributesInput;
};

/** Input attributes for creating a new parcel. */
export type CreateParcelAttributesInput = {
  /** ID of the branch the parcel belongs to. */
  BranchID?: InputMaybe<Scalars['GlobalID']>;
  /** ID of the building type the parcel is assigned to for the generation of future buildings. */
  BuildingTypeID?: InputMaybe<Scalars['GlobalID']>;
  /**
   * Maximum allowed coverage in percentage.
   *
   * Minimum value: 0
   * Maximum value: 1
   */
  CoverageMax?: InputMaybe<Scalars['Float']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /** If `true`, the parcel is being demolished. */
  Demolish?: InputMaybe<Scalars['Boolean']>;
  /** If `true`, the parcel is being demolished. */
  Develop?: InputMaybe<Scalars['Boolean']>;
  /** The type of development on the parcel. */
  DevelopmentType?: InputMaybe<DevelopmentType>;
  /**
   * Maximum allowed dwelling units per area in [units/m2].
   *
   * Minimum value: 0
   * Maximum value: 200000
   */
  DwellingUnitsPerAreaMax?: InputMaybe<Scalars['Float']>;
  /** An array of parcel edges and their edge information. */
  EdgeInfos?: InputMaybe<Array<EdgeInfoInput>>;
  /**
   * Maximum allowed floor area ratio.
   *
   * Minimum value: 0
   * Maximum value: 500
   */
  FARMax?: InputMaybe<Scalars['Float']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID?: InputMaybe<Scalars['GlobalID']>;
  /**
   * Maximum allowed height in [m].
   *
   * Minimum value: 0
   * Maximum value: 1000
   */
  HeightMax?: InputMaybe<Scalars['Float']>;
  /**
   * Maximum allowed number of floors.
   *
   * Minimum value: 0
   * Maximum value: 200
   */
  NumFloorsMax?: InputMaybe<Scalars['Int']>;
  /** If `true`, zoning envelopes are generated for the parcel. */
  ShowZoningEnvelopes?: InputMaybe<Scalars['Boolean']>;
  /** Array containing skyplanes. */
  Skyplanes?: InputMaybe<Array<SkyplaneInput>>;
  /**
   * Maximum allowed substructure depth in [m].
   *
   * Minimum value: 0
   * Maximum value: 1000
   */
  SubstructureDepthMax?: InputMaybe<Scalars['Float']>;
  /**
   * General score of how suitable a parcel is for redevelopment.
   *
   * Minimum value: 0
   * Maximum value: 10
   */
  SuitabilityScore?: InputMaybe<Scalars['Float']>;
  /** Additional value for the suitability of parcels for redevelopment. */
  SuitabilityValue1?: InputMaybe<Scalars['Float']>;
  /** Additional value for the suitability of parcels for redevelopment. */
  SuitabilityValue2?: InputMaybe<Scalars['Float']>;
  /** Additional value for the suitability of parcels for redevelopment. */
  SuitabilityValue3?: InputMaybe<Scalars['Float']>;
  /** An array of tiers and their allowed setbacks in [m]. */
  Tiers?: InputMaybe<Array<TierInput>>;
};

export type CreateParcelInput = {
  attributes: CreateParcelAttributesInput;
  /** 2d geometry (xy coordinates) */
  geometry: PolygonInput;
};

/** Input attributes for creating a new plan. */
export type CreatePlanAttributesInput = {
  /** Address of the urban event. */
  Address?: InputMaybe<Scalars['String']>;
  /**
   * Portal item id of a web scene whose layers are shown as design context layers when editing a plan (visible for all scenarios).
   *
   * Maximum length: 32
   */
  ContextWebsceneItemId?: InputMaybe<Scalars['PortalItemId']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /** Description of the urban event (markdown enabled). */
  Description?: InputMaybe<Scalars['String']>;
  /** End date of the urban event. */
  EndDate: Scalars['Timestamp'];
  /**
   * Name of the urban event.
   *
   * Minimum length: 1
   */
  EventName: Scalars['String'];
  /** If `true`, the urban event is featured and appears at the top of the list in the overview. */
  Featured?: InputMaybe<Scalars['Boolean']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID?: InputMaybe<Scalars['GlobalID']>;
  /** If `true`, the urban event cannot be edited by others. */
  Locked?: InputMaybe<Scalars['Boolean']>;
  /** Settings for the charts in the metrics dashboard. */
  MetricsDashboardCharts?: InputMaybe<Array<MetricsDashboardChartInput>>;
  /** ArcGIS account username of the user who created the urban event. */
  OwnerName?: InputMaybe<Scalars['String']>;
  /** The planning method of the plan. */
  PlanningMethod: UrbanEventPlanningMethod;
  /** If `true`, public comments are visible and adding new comments is enabled until the public feedback end date. */
  PublicFeedbackEnabled?: InputMaybe<Scalars['Boolean']>;
  /** The date until new feedback comments can be added. */
  PublicFeedbackEndDate?: InputMaybe<Scalars['Timestamp']>;
  /**
   * Start date of the urban event.
   *
   * Minimum value: 0
   */
  StartDate: Scalars['Timestamp'];
  /** ID of the status type associated with the urban event. */
  Status?: InputMaybe<Scalars['GlobalID']>;
  /** Image (blob) to be displayed in the overview card. */
  Thumbnail?: InputMaybe<Scalars['String']>;
  /**
   * URL to a webpage. Shown in the detail card of the urban event.
   *
   * Maximum length: 255
   */
  WebpageUrl?: InputMaybe<Scalars['String']>;
};

export type CreatePlanInput = {
  attributes: CreatePlanAttributesInput;
  /** 2d geometry (xy coordinates) */
  geometry: PolygonInput;
};

/** Input attributes for creating a new point symbol. */
export type CreatePointSymbolAttributesInput = {
  /** ID of the branch the symbol belongs to. */
  BranchID?: InputMaybe<Scalars['GlobalID']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /** The depth of the symbol in [m]. */
  Depth: Scalars['Float'];
  /** Unique identifier (UUID) of the feature. */
  GlobalID?: InputMaybe<Scalars['GlobalID']>;
  /** The heading of the symbol in [deg]. */
  Heading: Scalars['Float'];
  /** The height of the symbol in [m]. */
  Height: Scalars['Float'];
  /** URL of the symbol. */
  ResourceHref: Scalars['String'];
  /** Style of the symbol. */
  SymbolStyle: PointSymbolStyle;
  /** The width of the symbol in [m]. */
  Width: Scalars['Float'];
};

export type CreatePointSymbolInput = {
  attributes: CreatePointSymbolAttributesInput;
  /** 2d geometry (xy coordinates) */
  geometry: PointInput;
};

/** Input attributes for creating a new polygon symbol. */
export type CreatePolygonSymbolAttributesInput = {
  /** ID of the branch the symbol belongs to. */
  BranchID?: InputMaybe<Scalars['GlobalID']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID?: InputMaybe<Scalars['GlobalID']>;
  /** Style of the symbol. */
  SymbolStyle: PolygonSymbolStyle;
};

export type CreatePolygonSymbolInput = {
  attributes: CreatePolygonSymbolAttributesInput;
  /** 2d geometry (xy coordinates) */
  geometry: PolygonInput;
};

/** Input attributes for creating a new project. */
export type CreateProjectAttributesInput = {
  /** Address of the urban event. */
  Address?: InputMaybe<Scalars['String']>;
  /**
   * Portal item id of a web scene whose layers are shown as design context layers when editing a plan (visible for all scenarios).
   *
   * Maximum length: 32
   */
  ContextWebsceneItemId?: InputMaybe<Scalars['PortalItemId']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /** Description of the urban event (markdown enabled). */
  Description?: InputMaybe<Scalars['String']>;
  /** End date of the urban event. */
  EndDate: Scalars['Timestamp'];
  /**
   * Name of the urban event.
   *
   * Minimum length: 1
   */
  EventName: Scalars['String'];
  /** If `true`, the urban event is featured and appears at the top of the list in the overview. */
  Featured?: InputMaybe<Scalars['Boolean']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID?: InputMaybe<Scalars['GlobalID']>;
  /** If `true`, the urban event cannot be edited by others. */
  Locked?: InputMaybe<Scalars['Boolean']>;
  /** Settings for the charts in the metrics dashboard. */
  MetricsDashboardCharts?: InputMaybe<Array<MetricsDashboardChartInput>>;
  /** ArcGIS account username of the user who created the urban event. */
  OwnerName?: InputMaybe<Scalars['String']>;
  /** If `true`, public comments are visible and adding new comments is enabled until the public feedback end date. */
  PublicFeedbackEnabled?: InputMaybe<Scalars['Boolean']>;
  /** The date until new feedback comments can be added. */
  PublicFeedbackEndDate?: InputMaybe<Scalars['Timestamp']>;
  /**
   * Start date of the urban event.
   *
   * Minimum value: 0
   */
  StartDate: Scalars['Timestamp'];
  /** ID of the status type associated with the urban event. */
  Status?: InputMaybe<Scalars['GlobalID']>;
  /** Image (blob) to be displayed in the overview card. */
  Thumbnail?: InputMaybe<Scalars['String']>;
  /**
   * URL to a webpage. Shown in the detail card of the urban event.
   *
   * Maximum length: 255
   */
  WebpageUrl?: InputMaybe<Scalars['String']>;
};

export type CreateProjectInput = {
  attributes: CreateProjectAttributesInput;
  /** 2d geometry (xy coordinates) */
  geometry: PolygonInput;
};

/** Input attributes for creating a new space. */
export type CreateSpaceAttributesInput = {
  /** ID of the branch the space belongs to. */
  BranchID?: InputMaybe<Scalars['GlobalID']>;
  /** Building number the space belongs to. */
  BuildingNumber?: InputMaybe<Scalars['Int']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /**
   * Floor height of the space in [m].
   *
   * Minimum value: 0
   */
  FloorHeight?: InputMaybe<Scalars['Float']>;
  /** Floor number the space belongs to. */
  FloorNumber?: InputMaybe<Scalars['Int']>;
  /** If `true`, the space should be excluded from GFA / FAR calculations. */
  GFAIgnore?: InputMaybe<Scalars['Boolean']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID?: InputMaybe<Scalars['GlobalID']>;
  /** Metric values stored on a space of public plans for visualization in the overview. This field is not populated and ignored for spaces in design plans. */
  MetricValues?: InputMaybe<Array<SpaceMetricValueInput>>;
  /**
   * Factor that reduces the total floor area used for capacity indicator calculations.
   *
   * Minimum value: 0
   * Maximum value: 1
   */
  NetAreaFactor?: InputMaybe<Scalars['Float']>;
  /** ID of the parcel the space belongs to. */
  ParcelID: Scalars['GlobalID'];
  /**
   * Type of space.
   *
   * Maximum length: 100
   */
  SpaceType?: SpaceType;
  /** ID of the space use type that is assigned to the space. This is used for coloring the space, aggregating space use areas, and calculating capacity metrics. */
  SpaceUseTypeID: Scalars['GlobalID'];
};

export type CreateSpaceInput = {
  attributes: CreateSpaceAttributesInput;
  /** 3d geometry (xyz coordinates) */
  geometry: PolygonInput;
};

/** Input attributes for creating a new space use type. */
export type CreateSpaceUseTypeAttributesInput = {
  /**
   * Gross floor area taken up by an average household in the space use type, used for assessing the size of a dwelling unit in [m2].
   *
   * Minimum value: 0.01
   */
  AreaPerHousehold?: InputMaybe<Scalars['Float']>;
  /** Hex color of the space use type. */
  Color: Scalars['Color'];
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /**
   * Floor height of the space use type in [m].
   *
   * Minimum value: 0
   */
  FloorHeight?: Scalars['Float'];
  /** Unique identifier (UUID) of the feature. */
  GlobalID?: InputMaybe<Scalars['GlobalID']>;
  /**
   * Label of the space use type.
   *
   * Minimum length: 1
   * Maximum length: 10
   */
  Label: Scalars['String'];
  /** Metric parameter values (e.g., weights) for a Metric that uses spaces as a data source. */
  MetricParameters?: InputMaybe<Array<MetricParameterInput>>;
  /**
   * Factor that reduces the total floor area used for capacity indicator calculations.
   *
   * Minimum value: 0
   * Maximum value: 1
   */
  NetAreaFactor?: Scalars['Float'];
  /** If `true`, the space use type is proposed in the plan. */
  Proposal?: InputMaybe<Scalars['Boolean']>;
  /** If `true`, the space use type is residential and therefore can be used in dwelling units. */
  SingleUseOnly?: InputMaybe<Scalars['Boolean']>;
  /**
   * Name of the space use type.
   *
   * Minimum length: 1
   * Maximum length: 100
   */
  SpaceUseTypeName: Scalars['String'];
  /** ID of the urban event (plan) the space use type belongs to. */
  UrbanEventID?: InputMaybe<Scalars['GlobalID']>;
};

export type CreateSpaceUseTypeInput = {
  attributes: CreateSpaceUseTypeAttributesInput;
};

/** Input attributes for creating a new status type. */
export type CreateStatusTypeAttributesInput = {
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /** Description of the status. */
  Description?: InputMaybe<Scalars['String']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID?: InputMaybe<Scalars['GlobalID']>;
  /** Reference to the icon of the status that contains an image path and a color. */
  Icon: StatusTypeIcon;
  /**
   * Label of the status.
   *
   * Minimum length: 1
   * Maximum length: 20
   */
  Label: Scalars['String'];
  /** Order of the status. */
  StatusOrder?: InputMaybe<Scalars['Int']>;
};

export type CreateStatusTypeInput = {
  attributes: CreateStatusTypeAttributesInput;
};

/** Input attributes for creating a new suitability model. */
export type CreateSuitabilityModelAttributesInput = {
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID?: InputMaybe<Scalars['GlobalID']>;
  /** Name of the model. */
  ModelName: Scalars['String'];
  /** If `true`, the model is proposed in the plan. */
  Proposal?: InputMaybe<Scalars['Boolean']>;
  /** ID of the urban event (plan) the model belongs to. */
  UrbanEventID?: InputMaybe<Scalars['GlobalID']>;
};

export type CreateSuitabilityModelInput = {
  attributes: CreateSuitabilityModelAttributesInput;
};

/** Input attributes for creating a new viewpoint. */
export type CreateViewpointAttributesInput = {
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID?: InputMaybe<Scalars['GlobalID']>;
  /**
   * Heading of the camera.
   *
   * Minimum value: 0
   * Maximum value: 360
   */
  Heading: Scalars['Float'];
  /**
   * Tilt of the camera.
   *
   * Minimum value: 0
   * Maximum value: 180
   */
  Tilt: Scalars['Float'];
  /** ID of the urban event (plan or project) the viewpoint belongs to. */
  UrbanEventID?: InputMaybe<Scalars['GlobalID']>;
  /**
   * Name of the viewpoint.
   *
   * Minimum length: 1
   */
  ViewpointName: Scalars['String'];
  /** The order of the viewpoint. */
  ViewpointOrder: Scalars['Int'];
};

export type CreateViewpointInput = {
  attributes: CreateViewpointAttributesInput;
  /** 3d geometry (xyz coordinates) */
  geometry: PointInput;
};

/** Input attributes for creating a new zone. */
export type CreateZoneAttributesInput = {
  /** ID of the branch the zone belongs to. */
  BranchID?: InputMaybe<Scalars['GlobalID']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID?: InputMaybe<Scalars['GlobalID']>;
  /** The planning horizon of the zone. */
  PlanningHorizon: ZonePlanningHorizon;
  /** The planning method of the zone. */
  PlanningMethod: ZonePlanningMethod;
  /** ID of the zone type the zone is assigned to. */
  ZoneTypeID: Scalars['GlobalID'];
};

export type CreateZoneInput = {
  attributes: CreateZoneAttributesInput;
  /** 2d geometry (xy coordinates) */
  geometry: PolygonInput;
};

/** Input attributes for creating a new zone type. */
export type CreateZoneTypeAttributesInput = {
  /** An array of allowed space use types and their distributions. */
  AllowedSpaceUseTypes?: InputMaybe<Array<AllowedSpaceUseTypeInput>>;
  /** Hex color of the zone type or overlay. */
  Color: Scalars['Color'];
  /**
   * Maximum allowed coverage in percentage.
   *
   * Minimum value: 0
   * Maximum value: 1
   */
  CoverageMax?: InputMaybe<Scalars['Float']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /** Description of the zone type. */
  Description: Scalars['String'];
  /**
   * Maximum allowed dwelling units per area in [units/m2].
   *
   * Minimum value: 0
   * Maximum value: 200000
   */
  DwellingUnitsPerAreaMax?: InputMaybe<Scalars['Float']>;
  /**
   * Maximum allowed floor area ratio.
   *
   * Minimum value: 0
   * Maximum value: 500
   */
  FARMax?: InputMaybe<Scalars['Float']>;
  /** Fill style of the zone type or overlay. */
  FillStyle?: InputMaybe<FillStyle>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID?: InputMaybe<Scalars['GlobalID']>;
  /**
   * Maximum allowed height in [m].
   *
   * Minimum value: 0
   * Maximum value: 1000
   */
  HeightMax?: InputMaybe<Scalars['Float']>;
  /**
   * Label of the zone type.
   *
   * Minimum length: 1
   * Maximum length: 20
   */
  Label: Scalars['String'];
  /**
   * Factor that reduces the total zone area used for capacity indicator calculations.
   *
   * Minimum value: 0
   * Maximum value: 1
   */
  NetAreaFactor?: InputMaybe<Scalars['Float']>;
  /**
   * Maximum allowed number of floors.
   *
   * Minimum value: 0
   * Maximum value: 200
   */
  NumFloorsMax?: InputMaybe<Scalars['Int']>;
  /** Outline style of the zone type or overlay. */
  OutlineStyle?: InputMaybe<OutlineStyle>;
  /** The planning method of the zone type. */
  PlanningMethod: ZoneTypePlanningMethod;
  /** If `true`, the zone type is proposed in the plan. */
  Proposal?: InputMaybe<Scalars['Boolean']>;
  /** Array containing skyplanes. */
  Skyplanes?: InputMaybe<Array<SkyplaneInput>>;
  /**
   * Maximum allowed substructure depth in [m].
   *
   * Minimum value: 0
   * Maximum value: 1000
   */
  SubstructureDepthMax?: InputMaybe<Scalars['Float']>;
  /** An array of tiers and their allowed setbacks in [m]. */
  Tiers?: InputMaybe<Array<TierInput>>;
  /** ID of the urban event (plan) the zone type belongs to. */
  UrbanEventID?: InputMaybe<Scalars['GlobalID']>;
  /** Name of the zone type. */
  ZoneTypeName?: InputMaybe<Scalars['String']>;
  /** The order of the zone type. Defines the order in which the zone types are displayed in the legend. */
  ZoneTypeOrder?: InputMaybe<Scalars['Int']>;
};

export type CreateZoneTypeInput = {
  attributes: CreateZoneTypeAttributesInput;
};

export type CriteriaMeta = FeaturesMeta & {
  __typename?: 'CriteriaMeta';
  /** The number of criteria. */
  count?: Maybe<Scalars['Int']>;
};

/** A criterion is a collection of properties configured to calculate a suitability score. */
export type Criterion = {
  __typename?: 'Criterion';
  attributes: CriterionAttributes;
};

/** Attributes of the criterion. */
export type CriterionAttributes = {
  __typename?: 'CriterionAttributes';
  /** Name of the criterion. */
  CriterionName: Scalars['String'];
  /** Type of the criterion. */
  CriterionType: CriterionType;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: Maybe<Scalars['String']>;
  /** Whether the criterion is enabled in the calculation. When disabled, this criterion will not count towards the final score. */
  Enabled: Scalars['Boolean'];
  /** Portal item id of an external layer. */
  ExternalLayerItemId?: Maybe<Scalars['String']>;
  /** Attribute field to be used for the criterion. */
  Field: Scalars['String'];
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /** GlobalID of the model. */
  ModelID: Scalars['GlobalID'];
  /** Whether reclassification is enabled on this criterion. When enabled, numeric values will be reclassified with ReclassificationIntervals, while string and null values will be reclassified with ReclassificationMappings. When disabled, scores will be copied directly from the input features. */
  ReclassificationEnabled: Scalars['Boolean'];
  /** Reclassification intervals used in this criterion to reclassify numeric values. */
  ReclassificationIntervals: Array<ReclassificationInterval>;
  /** Map of (value, score) pairs used in this criterion to reclassify string and null values to a score. */
  ReclassificationMappings: Array<ReclassificationMapping>;
  /** Sampling geometry used to extract the criterion. */
  SamplingGeometry: SamplingGeometry;
  /** When sampling values to calculate the final score, a parcel might match multiple input features resulting in multiple records. This field configures the method to combine multiple records on one parcel. */
  SamplingMethod: SamplingMethod;
  /** ID of the urban event (plan) the criteria belongs to. */
  UrbanEventID?: Maybe<Scalars['GlobalID']>;
  /** Weight of the criterion. */
  Weight: Scalars['Float'];
};

export type CriterionFilterInput = {
  globalIDs?: InputMaybe<Array<Scalars['GlobalID']>>;
};

/**
 * **ParcelInformation**: Criterion based on a parcel information parameter.
 * **ZoningRegulation**: Criterion based on a zoning regulation parameter.
 * **ExternalLayer**: Criterion based on an external layer.
 */
export enum CriterionType {
  ExternalLayer = 'ExternalLayer',
  ParcelInformation = 'ParcelInformation',
  ZoningRegulation = 'ZoningRegulation'
}

export type DeleteResult = {
  __typename?: 'DeleteResult';
  attributes: DeleteResultAttributes;
};

export type DeleteResultAttributes = {
  __typename?: 'DeleteResultAttributes';
  GlobalID?: Maybe<Scalars['GlobalID']>;
};

export type DeleteUrbanDesignDatabaseResult = {
  __typename?: 'DeleteUrbanDesignDatabaseResult';
  success?: Maybe<Scalars['Boolean']>;
  urbanDesignDatabaseId?: Maybe<Scalars['PortalItemId']>;
};

/**
 * **None**: No new spaces: either leave unchanged or demolish the existing building.
 * **BuildingType**: New spaces have been generated procedurally with a building type.
 * **Custom**: New spaces have been custom drawn.
 */
export enum DevelopmentType {
  BuildingType = 'BuildingType',
  Custom = 'Custom',
  None = 'None'
}

/** Display configuration for types and layers. */
export type DisplayConfig = {
  __typename?: 'DisplayConfig';
  /** Display configuration of parcel information. */
  parcels?: Maybe<ParcelsDisplayConfig>;
};

export type DisplayConfigInput = {
  /** Display configuration of parcel information. */
  parcels?: InputMaybe<ParcelsDisplayConfigInput>;
};

/** OverlayType configuration for DwellingUnitsPerAreaMax. */
export type DwellingUnitsPerAreaMax = {
  __typename?: 'DwellingUnitsPerAreaMax';
  /** Overlay method that gets applied to the parcel zoning parameters when redeveloping. */
  method: OverlayTypeMethod;
};

export type DwellingUnitsPerAreaMaxInput = {
  /** Overlay method that gets applied to the parcel zoning parameters when redeveloping. */
  method?: OverlayTypeMethod;
};

/** JSON object with information about adjacency of the parcel edge. */
export type EdgeAdjacency = {
  __typename?: 'EdgeAdjacency';
  /** The category of the adjacency. */
  category?: Maybe<Scalars['String']>;
  /** What object the edge is adjacent to. */
  type: EdgeAdjacencyType;
  /** The width of the adjacent object in [m]. */
  width: Scalars['Float'];
};

export type EdgeAdjacencyInput = {
  /** The category of the adjacency. */
  category?: InputMaybe<Scalars['String']>;
  /** What object the edge is adjacent to. */
  type: EdgeAdjacencyType;
  /** The width of the adjacent object in [m]. */
  width?: Scalars['Float'];
};

/** **Street**: The edge is adjacent to a street. */
export enum EdgeAdjacencyType {
  Street = 'Street'
}

/** JSON object with edge information for a parcel edge. */
export type EdgeInfo = {
  __typename?: 'EdgeInfo';
  /** An array of all adjacencies of the parcel edge. */
  adjacencies: Array<EdgeAdjacency>;
  /** Orientation of the parcel edge. */
  orientation: EdgeOrientation;
};

export type EdgeInfoInput = {
  /** An array of all adjacencies of the parcel edge. */
  adjacencies: Array<EdgeAdjacencyInput>;
  /** Orientation of the parcel edge. */
  orientation: EdgeOrientation;
};

/**
 * **Front**: Edge is oriented to the front.
 * **Side**: Edge is oriented to the side.
 * **Rear**: Edge is oriented to the back.
 */
export enum EdgeOrientation {
  Front = 'Front',
  Rear = 'Rear',
  Side = 'Side'
}

/** Layer configuration for existing buildings. */
export type ExistingBuildingsLayerSettings = {
  __typename?: 'ExistingBuildingsLayerSettings';
  /** If `true`, the layer is set to transparent. */
  opacity: Scalars['Float'];
  /** If `true`, the layer is visible. */
  visible: Scalars['Boolean'];
};

export type ExistingBuildingsLayerSettingsInput = {
  /**
   * If `true`, the layer is set to transparent.
   *
   * Minimum value: 0
   * Maximum value: 1
   */
  opacity: Scalars['Float'];
  /** If `true`, the layer is visible. */
  visible: Scalars['Boolean'];
};

/** Layer configuration for existing trees. */
export type ExistingTreesLayerSettings = {
  __typename?: 'ExistingTreesLayerSettings';
  /** If `true`, the layer is visible. */
  visible: Scalars['Boolean'];
};

export type ExistingTreesLayerSettingsInput = {
  /** If `true`, the layer is visible. */
  visible: Scalars['Boolean'];
};

/** OverlayType configuration for FARMax. */
export type FarMax = {
  __typename?: 'FARMax';
  /** Overlay method that gets applied to the parcel zoning parameters when redeveloping. */
  method: OverlayTypeMethod;
};

export type FarMaxInput = {
  /** Overlay method that gets applied to the parcel zoning parameters when redeveloping. */
  method?: OverlayTypeMethod;
};

/** Counts, aggregates, and other meta-information about the respective object type. */
export type FeaturesMeta = {
  /** The number of features of a given type and parent, with an optional query filter applied. */
  count?: Maybe<Scalars['Int']>;
};

export type FeedbackCategoriesMeta = FeaturesMeta & {
  __typename?: 'FeedbackCategoriesMeta';
  /** The number of feedback categories. */
  count?: Maybe<Scalars['Int']>;
};

/** A feedback category provides additional context to a public or internal feedback comment. */
export type FeedbackCategory = {
  __typename?: 'FeedbackCategory';
  attributes: FeedbackCategoryAttributes;
};

/** Attributes of the feedback category. */
export type FeedbackCategoryAttributes = {
  __typename?: 'FeedbackCategoryAttributes';
  /** Order of the category. */
  CategoryOrder?: Maybe<Scalars['Int']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: Maybe<Scalars['String']>;
  /** Description of the category. */
  Description?: Maybe<Scalars['String']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /** Reference to the icon of the category that contains an image path and a color. */
  Icon: FeedbackCategoryIcon;
  /** Label of the category. */
  Label: Scalars['String'];
};

export type FeedbackCategoryFilterInput = {
  globalIDs?: InputMaybe<Array<Scalars['GlobalID']>>;
};

export enum FeedbackCategoryIcon {
  SpeechBubbleBike = 'SpeechBubbleBike',
  SpeechBubbleBlank = 'SpeechBubbleBlank',
  SpeechBubbleBook = 'SpeechBubbleBook',
  SpeechBubbleBuilding = 'SpeechBubbleBuilding',
  SpeechBubbleBulb = 'SpeechBubbleBulb',
  SpeechBubbleBus = 'SpeechBubbleBus',
  SpeechBubbleCar = 'SpeechBubbleCar',
  SpeechBubbleCheck = 'SpeechBubbleCheck',
  SpeechBubbleCommunity = 'SpeechBubbleCommunity',
  SpeechBubbleCross = 'SpeechBubbleCross',
  SpeechBubbleCulture = 'SpeechBubbleCulture',
  SpeechBubbleDemolish = 'SpeechBubbleDemolish',
  SpeechBubbleDislike = 'SpeechBubbleDislike',
  SpeechBubbleDrop = 'SpeechBubbleDrop',
  SpeechBubbleEconomy = 'SpeechBubbleEconomy',
  SpeechBubbleHealth = 'SpeechBubbleHealth',
  SpeechBubbleHeart = 'SpeechBubbleHeart',
  SpeechBubbleLike = 'SpeechBubbleLike',
  SpeechBubbleOther = 'SpeechBubbleOther',
  SpeechBubblePlay = 'SpeechBubblePlay',
  SpeechBubbleQuestion = 'SpeechBubbleQuestion',
  SpeechBubbleRecycle = 'SpeechBubbleRecycle',
  SpeechBubbleSnow = 'SpeechBubbleSnow',
  SpeechBubbleStar = 'SpeechBubbleStar',
  SpeechBubbleSun = 'SpeechBubbleSun',
  SpeechBubbleTool = 'SpeechBubbleTool',
  SpeechBubbleTree = 'SpeechBubbleTree',
  SpeechBubbleWalking = 'SpeechBubbleWalking',
  SpeechBubbleWarning = 'SpeechBubbleWarning',
  SpeechBubbleWind = 'SpeechBubbleWind',
  Unknown = 'Unknown'
}

/** JSON object containing the configuration of the overlay types. */
export type FieldsConfig = {
  __typename?: 'FieldsConfig';
  /** OverlayType configuration for CoverageMax. */
  CoverageMax: CoverageMax;
  /** OverlayType configuration for DwellingUnitsPerAreaMax. */
  DwellingUnitsPerAreaMax: DwellingUnitsPerAreaMax;
  /** OverlayType configuration for FARMax. */
  FARMax: FarMax;
  /** OverlayType configuration for HeightMax. */
  HeightMax: HeightMax;
  /** OverlayType configuration for NumFloorsMax. */
  NumFloorsMax: NumFloorsMax;
  /**
   * OverlayType configuration for Skyplanes
   * @deprecated Configuration of Tiers and Skyplanes is no longer supported. (Removal date: 2023-06-29)
   */
  Skyplanes: Skyplanes;
  /** OverlayType configuration for SubstructureDepthMax. */
  SubstructureDepthMax: SubstructureDepthMax;
  /**
   * OverlayType configuration for Tiers
   * @deprecated Configuration of Tiers and Skyplanes is no longer supported. (Removal date: 2023-06-29)
   */
  Tiers: Tiers;
};

export type FieldsConfigInput = {
  /** OverlayType configuration for CoverageMax. */
  CoverageMax: CoverageMaxInput;
  /** OverlayType configuration for DwellingUnitsPerAreaMax. */
  DwellingUnitsPerAreaMax: DwellingUnitsPerAreaMaxInput;
  /** OverlayType configuration for FARMax. */
  FARMax: FarMaxInput;
  /** OverlayType configuration for HeightMax. */
  HeightMax: HeightMaxInput;
  /** OverlayType configuration for NumFloorsMax. */
  NumFloorsMax: NumFloorsMaxInput;
  /** OverlayType configuration for Skyplanes */
  Skyplanes?: InputMaybe<SkyplanesInput>;
  /** OverlayType configuration for SubstructureDepthMax. */
  SubstructureDepthMax: SubstructureDepthMaxInput;
  /** OverlayType configuration for Tiers */
  Tiers?: InputMaybe<TiersInput>;
};

/**
 * **None**: The zone or overlay has no fill.
 * **Solid**: The zone or overlay has a solid fill.
 * **BackwardDiagonal**: The zone or overlay has a backward diagonal lines fill pattern.
 * **Cross**: The zone or overlay has a cross lines fill pattern.
 * **DiagonalCross**: The zone or overlay has a diagonal cross lines fill pattern.
 * **ForwardDiagonal**: The zone or overlay has a forward diagonal lines fill pattern.
 * **Horizontal**: The zone or overlay has a horizontal lines fill pattern.
 * **Vertical**: The zone or overlay has a vertical lines fill pattern.
 */
export enum FillStyle {
  BackwardDiagonal = 'BackwardDiagonal',
  Cross = 'Cross',
  DiagonalCross = 'DiagonalCross',
  ForwardDiagonal = 'ForwardDiagonal',
  Horizontal = 'Horizontal',
  None = 'None',
  Solid = 'Solid',
  Vertical = 'Vertical'
}

/**
 * **Auto**: Footprint shape is assessed based on what results in a more optimal shape.
 * **Parcel**: Footprint shape follows the parcel boundary.
 * **Rectangle**: Footprint shape is rectangular.
 */
export enum FootprintShape {
  Auto = 'Auto',
  Parcel = 'Parcel',
  Rectangle = 'Rectangle'
}

/** Setback value in [m] applied to a Front edge. */
export type FrontInteriorSetback = {
  __typename?: 'FrontInteriorSetback';
  /** Setback value in [m]. */
  value: Scalars['Float'];
};

export type FrontInteriorSetbackInput = {
  /**
   * Setback value in [m].
   *
   * Minimum value: 0
   */
  value: Scalars['Float'];
};

/** Minimum allowed setbacks at the Front edge of a parcel. */
export type FrontSetback = {
  __typename?: 'FrontSetback';
  /** Setback value in [m] applied to a Front edge. */
  interior: FrontInteriorSetback;
  /** Setback value in [m] applied to a Front edge adjacent to a street. */
  street: FrontStreetSetback;
};

export type FrontSetbackInput = {
  /** Setback value in [m] applied to a Front edge. */
  interior: FrontInteriorSetbackInput;
  /** Setback value in [m] applied to a Front edge adjacent to a street. */
  street: FrontStreetSetbackInput;
};

/** Setback value in [m] applied to a Front edge adjacent to a street. */
export type FrontStreetSetback = {
  __typename?: 'FrontStreetSetback';
  /** Setback value in [m]. */
  value: Scalars['Float'];
};

export type FrontStreetSetbackInput = {
  /**
   * Setback value in [m].
   *
   * Minimum value: 0
   */
  value: Scalars['Float'];
};

/** Layer configuration for future buildings. */
export type FutureBuildingsLayerSettings = {
  __typename?: 'FutureBuildingsLayerSettings';
  /** If `true`, the layer is set to transparent. */
  opacity: Scalars['Float'];
  /** If `true`, the layer is visible. */
  visible: Scalars['Boolean'];
};

export type FutureBuildingsLayerSettingsInput = {
  /**
   * If `true`, the layer is set to transparent.
   *
   * Minimum value: 0
   * Maximum value: 1
   */
  opacity: Scalars['Float'];
  /** If `true`, the layer is visible. */
  visible: Scalars['Boolean'];
};

export type GeometryFilterInput = {
  /** The line geometry to apply as the spatial filter. */
  line?: InputMaybe<LineInput>;
  /** The point geometry to apply as the spatial filter. */
  point?: InputMaybe<PointInput>;
  /** The polygon geometry to apply as the spatial filter. */
  polygon?: InputMaybe<PolygonInput>;
  /**
   * The spatial relationship to be used for the filter geometry.
   * See: [https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-FeatureFilter.html#spatialRelationship](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-FeatureFilter.html#spatialRelationship)
   */
  relationship: SpatialRelationship;
};

/** OverlayType configuration for HeightMax. */
export type HeightMax = {
  __typename?: 'HeightMax';
  /** Overlay method that gets applied to the parcel zoning parameters when redeveloping. */
  method: OverlayTypeMethod;
};

export type HeightMaxInput = {
  /** Overlay method that gets applied to the parcel zoning parameters when redeveloping. */
  method?: OverlayTypeMethod;
};

export enum Icon {
  Bike = 'Bike',
  Blank = 'Blank',
  Book = 'Book',
  Building = 'Building',
  Bulb = 'Bulb',
  Bus = 'Bus',
  Car = 'Car',
  Check = 'Check',
  Community = 'Community',
  Cross = 'Cross',
  Culture = 'Culture',
  Demolish = 'Demolish',
  Dislike = 'Dislike',
  Drop = 'Drop',
  Economy = 'Economy',
  Health = 'Health',
  Heart = 'Heart',
  Like = 'Like',
  None = 'None',
  Other = 'Other',
  Play = 'Play',
  Question = 'Question',
  Recycle = 'Recycle',
  Snow = 'Snow',
  Star = 'Star',
  Sun = 'Sun',
  Tool = 'Tool',
  Tree = 'Tree',
  Walking = 'Walking',
  Warning = 'Warning',
  Wind = 'Wind'
}

/** An indicator represents an external data source for visualizing GIS data. */
export type Indicator = {
  __typename?: 'Indicator';
  attributes: IndicatorAttributes;
};

/** Attributes of the indicator. */
export type IndicatorAttributes = {
  __typename?: 'IndicatorAttributes';
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: Maybe<Scalars['String']>;
  /** Portal item id of an ArcGIS Dashboard which will be embedded in the detail card of the indicator. */
  DashboardItemId?: Maybe<Scalars['PortalItemId']>;
  /** Description of the indicator (markdown enabled). */
  Description?: Maybe<Scalars['String']>;
  /** End date of the lifespan of the indicator. */
  EndDate: Scalars['Timestamp'];
  /** If `true`, the indicator is featured and appears at the top of the list in the overview. */
  Featured: Scalars['Boolean'];
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /** Name of the indicator. */
  IndicatorName: Scalars['String'];
  /** Type of the indicator. */
  IndicatorType: IndicatorType;
  /** Configuration of which layers are shown together with indicators and how. */
  LayerSettings?: Maybe<LayerSettings>;
  /**
   * If `true`, the indicator cannot be edited by others.
   * @deprecated No longer supported. (Removal date: 2024-02-28)
   */
  Locked: Scalars['Boolean'];
  /**
   * ArcGIS account username of the user who has created the indicator.
   * @deprecated No longer supported. (Removal date: 2024-03-27)
   */
  OwnerName: Scalars['String'];
  /** Start date of the lifespan of the indicator. */
  StartDate: Scalars['Timestamp'];
  /** URL to a webpage. Shown in the detail card of the indicator. */
  WebpageUrl?: Maybe<Scalars['String']>;
  /** Portal item id of a web scene whose layers are added as visualization. The portal item can also be a single layer (e.g., SceneLayer). */
  WebsceneItemId?: Maybe<Scalars['PortalItemId']>;
};

export type IndicatorFilterInput = {
  globalIDs?: InputMaybe<Array<Scalars['GlobalID']>>;
};

/**
 * **LivingAtlas**: Built-in indicator based on a Living Atlas dataset.
 * **Custom**: A custom indicator configured by the user.
 */
export enum IndicatorType {
  Custom = 'Custom',
  LivingAtlas = 'LivingAtlas'
}

export type IndicatorsMeta = FeaturesMeta & {
  __typename?: 'IndicatorsMeta';
  /** The number of indicators. */
  count?: Maybe<Scalars['Int']>;
};

/** The initial camera viewpoint. */
export type InitialCamera = {
  __typename?: 'InitialCamera';
  /** The camera heading. */
  heading: Scalars['Float'];
  /** The camera position. */
  position: Position;
  /** The camera tilt. */
  tilt: Scalars['Float'];
};

export type InitialCameraInput = {
  /** The camera heading. */
  heading: Scalars['Float'];
  /** The camera position. */
  position: PositionInput;
  /** The camera tilt. */
  tilt: Scalars['Float'];
};

/**
 * **Schematic**: Schematic visualization.
 * **Satellite**: Satellite visualization.
 */
export enum InitialVisualizationStyle {
  Satellite = 'Satellite',
  Schematic = 'Schematic'
}

/** A LOD1 building is a low level of detail building in a project scenario and is shown in the overview as an extruded polygon. */
export type Lod1Building = {
  __typename?: 'LOD1Building';
  attributes: Lod1BuildingAttributes;
  /** 3d geometry (xyz coordinates) */
  geometry?: Maybe<Polygon>;
};

/** Attributes of the lod1 building. */
export type Lod1BuildingAttributes = {
  __typename?: 'LOD1BuildingAttributes';
  /** ID of the branch the building belongs to. */
  BranchID?: Maybe<Scalars['GlobalID']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: Maybe<Scalars['String']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /** The extrusion height of the building in [m]. */
  Height?: Maybe<Scalars['Float']>;
};

export type Lod1BuildingFilterInput = {
  globalIDs?: InputMaybe<Array<Scalars['GlobalID']>>;
};

export type Lod1BuildingsMeta = FeaturesMeta & {
  __typename?: 'LOD1BuildingsMeta';
  /** The number of LOD1 buildings. */
  count?: Maybe<Scalars['Int']>;
};

/** Configuration of which layers are shown together with indicators and how. */
export type LayerSettings = {
  __typename?: 'LayerSettings';
  /** Layer configuration for context layers. */
  context: ContextLayerSettings;
  /** Layer configuration for existing buildings. */
  existingBuildings: ExistingBuildingsLayerSettings;
  /** Layer configuration for existing trees. */
  existingTrees: ExistingTreesLayerSettings;
  /** Layer configuration for future buildings. */
  futureBuildings: FutureBuildingsLayerSettings;
  /** Layer configuration for plans. */
  plans: PlansLayerSettings;
  /** Layer configuration for projects. */
  projects: ProjectsLayerSettings;
};

export type LayerSettingsInput = {
  /** Layer configuration for context layers. */
  context: ContextLayerSettingsInput;
  /** Layer configuration for existing buildings. */
  existingBuildings: ExistingBuildingsLayerSettingsInput;
  /** Layer configuration for existing trees. */
  existingTrees: ExistingTreesLayerSettingsInput;
  /** Layer configuration for future buildings. */
  futureBuildings: FutureBuildingsLayerSettingsInput;
  /** Layer configuration for plans. */
  plans: PlansLayerSettingsInput;
  /** Layer configuration for projects. */
  projects: ProjectsLayerSettingsInput;
};

export type LineInput = {
  /**
   * Array of coordinate pairs.
   * [[x, y][x, y]]
   */
  path: Array<Array<Scalars['Float']>>;
  spatialReference: SpatialReferenceInput;
};

/** A metric describes the properties and configuration of a metric calculation. */
export type Metric = {
  __typename?: 'Metric';
  attributes: MetricAttributes;
  sources: Array<MetricSource>;
};

/** Attributes of the metric. */
export type MetricAttributes = {
  __typename?: 'MetricAttributes';
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: Maybe<Scalars['String']>;
  /** Description of the metric. */
  Description?: Maybe<Scalars['String']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /** The x coordinate of the metric node on the metrics dependency graph. */
  GraphX?: Maybe<Scalars['Float']>;
  /** The y coordinate of the metric node on the metrics dependency graph. */
  GraphY?: Maybe<Scalars['Float']>;
  /** Name of the metric. */
  MetricName: Scalars['String'];
  /** The rounding method to use when rounding this metric. */
  NumberRoundingMethod: NumberRoundingMethod;
  /** Operation of the metric on how to aggregate the source metrics. */
  Operation: Operation;
  /** If `true`, the metric is proposed in the plan. */
  Proposal: Scalars['Boolean'];
  /** Unit type of the metric. */
  UnitType: UnitType;
  /** ID of the urban event (plan or project) the metric belongs to. */
  UrbanEventID?: Maybe<Scalars['GlobalID']>;
};

export type MetricFilterInput = {
  globalIDs?: InputMaybe<Array<Scalars['GlobalID']>>;
};

/** Metric parameter values on the space use type. */
export type MetricParameter = {
  __typename?: 'MetricParameter';
  /** ID of the MetricSource of the Metric that the parameter is assigned to. */
  metricSourceID: Scalars['GlobalID'];
  /** Stores the parameter value (e.g., weight) for the source metric that uses spaces as a data source. */
  value: Scalars['Float'];
};

export type MetricParameterInput = {
  /** ID of the MetricSource of the Metric that the parameter is assigned to. */
  metricSourceID: Scalars['GlobalID'];
  /** Stores the parameter value (e.g., weight) for the source metric that uses spaces as a data source. */
  value: Scalars['Float'];
};

/** A metric source is used in a metric calculation and can be either another metric or the net area of a building or surface space. */
export type MetricSource = {
  __typename?: 'MetricSource';
  attributes: MetricSourceAttributes;
};

/** Attributes of the metric source. */
export type MetricSourceAttributes = {
  __typename?: 'MetricSourceAttributes';
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: Maybe<Scalars['String']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /** ID of the metric that the metric source belongs to. */
  MetricID: Scalars['GlobalID'];
  /** ID of the metric that the source points to if the source type is 'Metric'. Otherwise, this field is ignored. */
  SourceMetricID?: Maybe<Scalars['GlobalID']>;
  /** Name of the metric source if the source type is anything other than 'Metric'. If source type is 'Metric', this field is ignored. */
  SourceName?: Maybe<Scalars['String']>;
  /** Type of the metric source. */
  SourceType: SourceType;
  /** ID of the urban event (plan) the metric source belongs to. */
  UrbanEventID?: Maybe<Scalars['GlobalID']>;
  /** Indicates whether the weight is applied as an inverse (1/n) in the calculation or as the actual number (n). */
  WeightInverted: Scalars['Boolean'];
  /** Name of the parameter that is used as a weight. If type is 'Constant', this field is ignored. */
  WeightName?: Maybe<Scalars['String']>;
  /** Type of weight that is used for the metric calculation. */
  WeightType: WeightType;
  /** Value for the parameter if the weight type is 'Constant'. */
  WeightValue?: Maybe<Scalars['Float']>;
};

export type MetricSourceFilterInput = {
  globalIDs?: InputMaybe<Array<Scalars['GlobalID']>>;
};

export type MetricSourcesMeta = FeaturesMeta & {
  __typename?: 'MetricSourcesMeta';
  /** The number of metric sources. */
  count?: Maybe<Scalars['Int']>;
};

/** A metric value is an existing value stored for a metric. */
export type MetricValue = {
  __typename?: 'MetricValue';
  attributes: MetricValueAttributes;
  /** 3d geometry (xyz coordinates) */
  geometry?: Maybe<Point>;
  metric?: Maybe<Metric>;
};

/** Attributes of the metric value. */
export type MetricValueAttributes = {
  __typename?: 'MetricValueAttributes';
  /** ID of the branch the metric value belongs to. */
  BranchID?: Maybe<Scalars['GlobalID']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: Maybe<Scalars['String']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /** ID of the metric that the value is saved for to retrieve the unit type and name. */
  MetricID: Scalars['GlobalID'];
  /** Metric value that is stored on the point. */
  Value: Scalars['Float'];
};

export type MetricValueFilterInput = {
  globalIDs?: InputMaybe<Array<Scalars['GlobalID']>>;
};

export type MetricValuesMeta = FeaturesMeta & {
  __typename?: 'MetricValuesMeta';
  /** The number of branches in the project. */
  count?: Maybe<Scalars['Int']>;
};

/** Setting for an individual metric chart in a dashboard. */
export type MetricsDashboardChart = {
  __typename?: 'MetricsDashboardChart';
  /** Chart style of the metric. */
  chartStyle: ChartStyle;
  /** Reference to the icon to be shown together with the metric. */
  icon: Icon;
  /** ID of the metric. */
  metricID: Scalars['GlobalID'];
  /** If `true`, the metric is visible in the UI. */
  visible: Scalars['Boolean'];
};

export type MetricsDashboardChartInput = {
  /** Chart style of the metric. */
  chartStyle?: ChartStyle;
  /** Reference to the icon to be shown together with the metric. */
  icon?: Icon;
  /** ID of the metric. */
  metricID: Scalars['GlobalID'];
  /** If `true`, the metric is visible in the UI. */
  visible?: Scalars['Boolean'];
};

export type MetricsMeta = FeaturesMeta & {
  __typename?: 'MetricsMeta';
  /** The number of metrics. */
  count?: Maybe<Scalars['Int']>;
};

/** Modal split coefficients. */
export type ModalSplit = {
  __typename?: 'ModalSplit';
  /** Trips done by bike in percentage. */
  cycling: Scalars['Float'];
  /** Trips done by private motorized vehicles in percentage. */
  privateMotorVehicle: Scalars['Float'];
  /** Trips done by public transport in percentage. */
  publicTransport: Scalars['Float'];
  /** Trips done by foot in percentage. */
  walking: Scalars['Float'];
};

export type ModalSplitInput = {
  /** Trips done by bike in percentage. */
  cycling?: Scalars['Float'];
  /** Trips done by private motorized vehicles in percentage. */
  privateMotorVehicle?: Scalars['Float'];
  /** Trips done by public transport in percentage. */
  publicTransport?: Scalars['Float'];
  /** Trips done by foot in percentage. */
  walking?: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create new branches (scenarios) in a plan or project inside an urban database or urban design database. */
  createBranches?: Maybe<Array<Branch>>;
  /** Create new building types in an urban database or in a plan inside an urban design database. */
  createBuildingTypes?: Maybe<Array<BuildingType>>;
  /** Create new suitability criteria in a plan inside an urban design database. */
  createCriteria?: Maybe<Array<Criterion>>;
  /** Create new feedback categories in an urban database. */
  createFeedbackCategories?: Maybe<Array<FeedbackCategory>>;
  /** Create new indicators in an urban database. */
  createIndicators?: Maybe<Array<Indicator>>;
  /** Create new LOD1 buildings in a branch (scenario) of a project inside an urban database or an urban design database. */
  createLOD1Buildings?: Maybe<Array<Lod1Building>>;
  /** Create new metric sources in an urban database or in a plan inside an urban design database. */
  createMetricSources?: Maybe<Array<MetricSource>>;
  /** Create new metric values in an urban database or in a branch (scenario) of a plan inside an urban design database. */
  createMetricValues?: Maybe<Array<MetricValue>>;
  /** Create new metrics in an urban database or in a plan or project inside an urban design database. */
  createMetrics?: Maybe<Array<Metric>>;
  /** Create new overlay types in an urban database or in a plan inside an urban design database. */
  createOverlayTypes?: Maybe<Array<OverlayType>>;
  /** Create new overlays in an urban database or in a branch (scenario) of a plan inside an urban design database. */
  createOverlays?: Maybe<Array<Overlay>>;
  /** Create new parcels in an urban database or in a branch (scenario) of a plan inside an urban design database. */
  createParcels?: Maybe<Array<Parcel>>;
  /** Create new plans in an urban database or urban design database. */
  createPlans?: Maybe<Array<Plan>>;
  /** Create new point symbols in a branch (scenario) of a project inside an urban design database. */
  createPointSymbols?: Maybe<Array<PointSymbol>>;
  /** Create new polygon symbols in a branch (scenario) of a project inside an urban design database. */
  createPolygonSymbols?: Maybe<Array<PolygonSymbol>>;
  /** Create new projects in an urban database or urban design database. */
  createProjects?: Maybe<Array<Project>>;
  /** Create new space use types in an urban database or in a plan inside an urban design database. */
  createSpaceUseTypes?: Maybe<Array<SpaceUseType>>;
  /** Create new spaces in a branch (scenario) of a plan inside an urban design database. */
  createSpaces?: Maybe<Array<Space>>;
  /** Create new status types in an urban database. */
  createStatusTypes?: Maybe<Array<StatusType>>;
  /** Create new suitability models in a plan inside an urban design database. */
  createSuitabilityModels?: Maybe<Array<SuitabilityModel>>;
  /**
   * Create a new urban design database.
   * This operation might take a while.
   */
  createUrbanDesignDatabase?: Maybe<Scalars['PortalItemId']>;
  /**
   * Create a new urban model with its urban database and urban database (view).
   * This operation might take a while.
   * Requires an Urban license.
   */
  createUrbanModel?: Maybe<Scalars['PortalItemId']>;
  /** Create new viewpoints in a plan or project inside an urban design database. */
  createViewpoints?: Maybe<Array<Viewpoint>>;
  /** Create new zone types in an urban database or in a plan inside an urban design database. */
  createZoneTypes?: Maybe<Array<ZoneType>>;
  /** Create new zones in an urban database or in a branch (scenario) of a plan inside an urban design database. */
  createZones?: Maybe<Array<Zone>>;
  /** Delete branches. */
  deleteBranches?: Maybe<Array<DeleteResult>>;
  /** Delete building types. */
  deleteBuildingTypes?: Maybe<Array<DeleteResult>>;
  /** Delete criteria. */
  deleteCriteria?: Maybe<Array<DeleteResult>>;
  /** Delete feedback categories. */
  deleteFeedbackCategories?: Maybe<Array<DeleteResult>>;
  /** Delete indicators. */
  deleteIndicators?: Maybe<Array<DeleteResult>>;
  /** Delete lod1 buildings. */
  deleteLOD1Buildings?: Maybe<Array<DeleteResult>>;
  /** Delete metric sources. */
  deleteMetricSources?: Maybe<Array<DeleteResult>>;
  /** Delete metric values. */
  deleteMetricValues?: Maybe<Array<DeleteResult>>;
  /** Delete metrics. */
  deleteMetrics?: Maybe<Array<DeleteResult>>;
  /** Delete overlay types. */
  deleteOverlayTypes?: Maybe<Array<DeleteResult>>;
  /** Delete overlays. */
  deleteOverlays?: Maybe<Array<DeleteResult>>;
  /** Delete parcels. */
  deleteParcels?: Maybe<Array<DeleteResult>>;
  /** Delete plans. */
  deletePlans?: Maybe<Array<DeleteResult>>;
  /** Delete point symbols. */
  deletePointSymbols?: Maybe<Array<DeleteResult>>;
  /** Delete polygon symbols. */
  deletePolygonSymbols?: Maybe<Array<DeleteResult>>;
  /** Delete projects. */
  deleteProjects?: Maybe<Array<DeleteResult>>;
  /** Delete space use types. */
  deleteSpaceUseTypes?: Maybe<Array<DeleteResult>>;
  /** Delete spaces. */
  deleteSpaces?: Maybe<Array<DeleteResult>>;
  /** Delete status types. */
  deleteStatusTypes?: Maybe<Array<DeleteResult>>;
  /** Delete suitability models. */
  deleteSuitabilityModels?: Maybe<Array<DeleteResult>>;
  deleteUrbanDesignDatabase?: Maybe<DeleteUrbanDesignDatabaseResult>;
  /** Delete viewpoints. */
  deleteViewpoints?: Maybe<Array<DeleteResult>>;
  /** Delete zone types. */
  deleteZoneTypes?: Maybe<Array<DeleteResult>>;
  /** Delete zones. */
  deleteZones?: Maybe<Array<DeleteResult>>;
  /** Update existing branches. */
  updateBranches?: Maybe<Array<Branch>>;
  /** Update existing building types. */
  updateBuildingTypes?: Maybe<Array<BuildingType>>;
  /** Update existing criteria. */
  updateCriteria?: Maybe<Array<Criterion>>;
  /** Update existing feedback categories. */
  updateFeedbackCategories?: Maybe<Array<FeedbackCategory>>;
  /** Update existing indicators. */
  updateIndicators?: Maybe<Array<Indicator>>;
  /** Update existing lod1 buildings. */
  updateLOD1Buildings?: Maybe<Array<Lod1Building>>;
  /** Update existing metric sources. */
  updateMetricSources?: Maybe<Array<MetricSource>>;
  /** Update existing metric values. */
  updateMetricValues?: Maybe<Array<MetricValue>>;
  /** Update existing metrics. */
  updateMetrics?: Maybe<Array<Metric>>;
  /** Update existing overlay types. */
  updateOverlayTypes?: Maybe<Array<OverlayType>>;
  /** Update existing overlays. */
  updateOverlays?: Maybe<Array<Overlay>>;
  /** Update existing parcels. */
  updateParcels?: Maybe<Array<Parcel>>;
  /** Update existing plans. */
  updatePlans?: Maybe<Array<Plan>>;
  /** Update existing point symbols. */
  updatePointSymbols?: Maybe<Array<PointSymbol>>;
  /** Update existing polygon symbols. */
  updatePolygonSymbols?: Maybe<Array<PolygonSymbol>>;
  /** Update existing projects. */
  updateProjects?: Maybe<Array<Project>>;
  /** Update existing space use types. */
  updateSpaceUseTypes?: Maybe<Array<SpaceUseType>>;
  /** Update existing spaces. */
  updateSpaces?: Maybe<Array<Space>>;
  /** Update existing status types. */
  updateStatusTypes?: Maybe<Array<StatusType>>;
  /** Update existing suitability models. */
  updateSuitabilityModels?: Maybe<Array<SuitabilityModel>>;
  updateUrbanModelConfig?: Maybe<UrbanModelConfig>;
  /** Update existing viewpoints. */
  updateViewpoints?: Maybe<Array<Viewpoint>>;
  /** Update existing zone types. */
  updateZoneTypes?: Maybe<Array<ZoneType>>;
  /** Update existing zones. */
  updateZones?: Maybe<Array<Zone>>;
  /**
   * Upgrade an urban design database by adding missing layers/tables.
   * This operation might take a while.
   */
  upgradeUrbanDesignDatabase: UpgradeUrbanDesignDatabaseResult;
  /**
   * Upgrade an urban model by adding missing layers/tables to the urban database and urban database (view).
   * This operation might take a while.
   */
  upgradeUrbanModel: UpgradeUrbanModelResult;
};


export type MutationCreateBranchesArgs = {
  branches: Array<CreateBranchInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationCreateBuildingTypesArgs = {
  buildingTypes: Array<CreateBuildingTypeInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationCreateCriteriaArgs = {
  criteria: Array<CreateCriterionInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationCreateFeedbackCategoriesArgs = {
  feedbackCategories: Array<CreateFeedbackCategoryInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationCreateIndicatorsArgs = {
  indicators: Array<CreateIndicatorInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationCreateLod1BuildingsArgs = {
  lod1Buildings: Array<CreateLod1BuildingInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationCreateMetricSourcesArgs = {
  metricSources: Array<CreateMetricSourceInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationCreateMetricValuesArgs = {
  metricValues: Array<CreateMetricValueInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationCreateMetricsArgs = {
  metrics: Array<CreateMetricInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationCreateOverlayTypesArgs = {
  overlayTypes: Array<CreateOverlayTypeInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationCreateOverlaysArgs = {
  overlays: Array<CreateOverlayInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationCreateParcelsArgs = {
  parcels: Array<CreateParcelInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationCreatePlansArgs = {
  plans: Array<CreatePlanInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationCreatePointSymbolsArgs = {
  pointSymbols: Array<CreatePointSymbolInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationCreatePolygonSymbolsArgs = {
  polygonSymbols: Array<CreatePolygonSymbolInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationCreateProjectsArgs = {
  projects: Array<CreateProjectInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationCreateSpaceUseTypesArgs = {
  spaceUseTypes: Array<CreateSpaceUseTypeInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationCreateSpacesArgs = {
  spaces: Array<CreateSpaceInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationCreateStatusTypesArgs = {
  statusTypes: Array<CreateStatusTypeInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationCreateSuitabilityModelsArgs = {
  suitabilityModels: Array<CreateSuitabilityModelInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationCreateUrbanDesignDatabaseArgs = {
  async?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  extent?: InputMaybe<Scalars['Extent']>;
  folderId?: InputMaybe<Scalars['PortalItemId']>;
  title: Scalars['String'];
  urbanModelId: Scalars['PortalItemId'];
};


export type MutationCreateUrbanModelArgs = {
  async?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  extent?: InputMaybe<Scalars['Extent']>;
  folderId?: InputMaybe<Scalars['PortalItemId']>;
  title: Scalars['String'];
};


export type MutationCreateViewpointsArgs = {
  urbanDatabaseId: Scalars['PortalItemId'];
  viewpoints: Array<CreateViewpointInput>;
};


export type MutationCreateZoneTypesArgs = {
  urbanDatabaseId: Scalars['PortalItemId'];
  zoneTypes: Array<CreateZoneTypeInput>;
};


export type MutationCreateZonesArgs = {
  urbanDatabaseId: Scalars['PortalItemId'];
  zones: Array<CreateZoneInput>;
};


export type MutationDeleteBranchesArgs = {
  cascade?: InputMaybe<Scalars['Boolean']>;
  globalIDs: Array<Scalars['GlobalID']>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationDeleteBuildingTypesArgs = {
  cascade?: InputMaybe<Scalars['Boolean']>;
  globalIDs: Array<Scalars['GlobalID']>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationDeleteCriteriaArgs = {
  cascade?: InputMaybe<Scalars['Boolean']>;
  globalIDs: Array<Scalars['GlobalID']>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationDeleteFeedbackCategoriesArgs = {
  cascade?: InputMaybe<Scalars['Boolean']>;
  globalIDs: Array<Scalars['GlobalID']>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationDeleteIndicatorsArgs = {
  cascade?: InputMaybe<Scalars['Boolean']>;
  globalIDs: Array<Scalars['GlobalID']>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationDeleteLod1BuildingsArgs = {
  cascade?: InputMaybe<Scalars['Boolean']>;
  globalIDs: Array<Scalars['GlobalID']>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationDeleteMetricSourcesArgs = {
  cascade?: InputMaybe<Scalars['Boolean']>;
  globalIDs: Array<Scalars['GlobalID']>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationDeleteMetricValuesArgs = {
  cascade?: InputMaybe<Scalars['Boolean']>;
  globalIDs: Array<Scalars['GlobalID']>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationDeleteMetricsArgs = {
  cascade?: InputMaybe<Scalars['Boolean']>;
  globalIDs: Array<Scalars['GlobalID']>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationDeleteOverlayTypesArgs = {
  cascade?: InputMaybe<Scalars['Boolean']>;
  globalIDs: Array<Scalars['GlobalID']>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationDeleteOverlaysArgs = {
  cascade?: InputMaybe<Scalars['Boolean']>;
  globalIDs: Array<Scalars['GlobalID']>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationDeleteParcelsArgs = {
  cascade?: InputMaybe<Scalars['Boolean']>;
  globalIDs: Array<Scalars['GlobalID']>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationDeletePlansArgs = {
  cascade?: InputMaybe<Scalars['Boolean']>;
  globalIDs: Array<Scalars['GlobalID']>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationDeletePointSymbolsArgs = {
  cascade?: InputMaybe<Scalars['Boolean']>;
  globalIDs: Array<Scalars['GlobalID']>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationDeletePolygonSymbolsArgs = {
  cascade?: InputMaybe<Scalars['Boolean']>;
  globalIDs: Array<Scalars['GlobalID']>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationDeleteProjectsArgs = {
  cascade?: InputMaybe<Scalars['Boolean']>;
  globalIDs: Array<Scalars['GlobalID']>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationDeleteSpaceUseTypesArgs = {
  cascade?: InputMaybe<Scalars['Boolean']>;
  globalIDs: Array<Scalars['GlobalID']>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationDeleteSpacesArgs = {
  cascade?: InputMaybe<Scalars['Boolean']>;
  globalIDs: Array<Scalars['GlobalID']>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationDeleteStatusTypesArgs = {
  cascade?: InputMaybe<Scalars['Boolean']>;
  globalIDs: Array<Scalars['GlobalID']>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationDeleteSuitabilityModelsArgs = {
  cascade?: InputMaybe<Scalars['Boolean']>;
  globalIDs: Array<Scalars['GlobalID']>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationDeleteUrbanDesignDatabaseArgs = {
  urbanDesignDatabaseId: Scalars['PortalItemId'];
};


export type MutationDeleteViewpointsArgs = {
  cascade?: InputMaybe<Scalars['Boolean']>;
  globalIDs: Array<Scalars['GlobalID']>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationDeleteZoneTypesArgs = {
  cascade?: InputMaybe<Scalars['Boolean']>;
  globalIDs: Array<Scalars['GlobalID']>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationDeleteZonesArgs = {
  cascade?: InputMaybe<Scalars['Boolean']>;
  globalIDs: Array<Scalars['GlobalID']>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationUpdateBranchesArgs = {
  branches: Array<UpdateBranchInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationUpdateBuildingTypesArgs = {
  buildingTypes: Array<UpdateBuildingTypeInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationUpdateCriteriaArgs = {
  criteria: Array<UpdateCriterionInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationUpdateFeedbackCategoriesArgs = {
  feedbackCategories: Array<UpdateFeedbackCategoryInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationUpdateIndicatorsArgs = {
  indicators: Array<UpdateIndicatorInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationUpdateLod1BuildingsArgs = {
  lod1Buildings: Array<UpdateLod1BuildingInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationUpdateMetricSourcesArgs = {
  metricSources: Array<UpdateMetricSourceInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationUpdateMetricValuesArgs = {
  metricValues: Array<UpdateMetricValueInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationUpdateMetricsArgs = {
  metrics: Array<UpdateMetricInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationUpdateOverlayTypesArgs = {
  overlayTypes: Array<UpdateOverlayTypeInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationUpdateOverlaysArgs = {
  overlays: Array<UpdateOverlayInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationUpdateParcelsArgs = {
  parcels: Array<UpdateParcelInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationUpdatePlansArgs = {
  plans: Array<UpdatePlanInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationUpdatePointSymbolsArgs = {
  pointSymbols: Array<UpdatePointSymbolInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationUpdatePolygonSymbolsArgs = {
  polygonSymbols: Array<UpdatePolygonSymbolInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationUpdateProjectsArgs = {
  projects: Array<UpdateProjectInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationUpdateSpaceUseTypesArgs = {
  spaceUseTypes: Array<UpdateSpaceUseTypeInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationUpdateSpacesArgs = {
  spaces: Array<UpdateSpaceInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationUpdateStatusTypesArgs = {
  statusTypes: Array<UpdateStatusTypeInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationUpdateSuitabilityModelsArgs = {
  suitabilityModels: Array<UpdateSuitabilityModelInput>;
  urbanDatabaseId: Scalars['PortalItemId'];
};


export type MutationUpdateUrbanModelConfigArgs = {
  urbanModelConfig: UpdateUrbanModelConfigInput;
  urbanModelId: Scalars['PortalItemId'];
};


export type MutationUpdateViewpointsArgs = {
  urbanDatabaseId: Scalars['PortalItemId'];
  viewpoints: Array<UpdateViewpointInput>;
};


export type MutationUpdateZoneTypesArgs = {
  urbanDatabaseId: Scalars['PortalItemId'];
  zoneTypes: Array<UpdateZoneTypeInput>;
};


export type MutationUpdateZonesArgs = {
  urbanDatabaseId: Scalars['PortalItemId'];
  zones: Array<UpdateZoneInput>;
};


export type MutationUpgradeUrbanDesignDatabaseArgs = {
  async?: InputMaybe<Scalars['Boolean']>;
  urbanDesignDatabaseId: Scalars['PortalItemId'];
};


export type MutationUpgradeUrbanModelArgs = {
  async?: InputMaybe<Scalars['Boolean']>;
  urbanModelId: Scalars['PortalItemId'];
};

/** The floor range of the building part. */
export type NumFloors = {
  __typename?: 'NumFloors';
  /** The maximum number of floors of the building part. */
  max: Scalars['Float'];
  /** The minimum number of floors of the building part. */
  min: Scalars['Float'];
};

export type NumFloorsInput = {
  /**
   * The maximum number of floors of the building part.
   *
   * Maximum value: 200
   */
  max: Scalars['Float'];
  /**
   * The minimum number of floors of the building part.
   *
   * Minimum value: 0
   */
  min: Scalars['Float'];
};

/** OverlayType configuration for NumFloorsMax. */
export type NumFloorsMax = {
  __typename?: 'NumFloorsMax';
  /** Overlay method that gets applied to the parcel zoning parameters when redeveloping. */
  method: OverlayTypeMethod;
};

export type NumFloorsMaxInput = {
  /** Overlay method that gets applied to the parcel zoning parameters when redeveloping. */
  method?: OverlayTypeMethod;
};

/**
 * **None**: No rounding
 * **Nearest**: Round the metric value to the nearest integer for each parcel.
 * **Up**: Round the metric value to the first higher integer for each parcel.
 * **Down**: Round the metric value to the first lower integer for each parcel.
 */
export enum NumberRoundingMethod {
  Down = 'Down',
  Nearest = 'Nearest',
  None = 'None',
  Up = 'Up'
}

/** **WeightedSum**: Weighted sum of one or more data points. */
export enum Operation {
  WeightedSum = 'WeightedSum'
}

/**
 * **None**: The zone or overlay has no outline.
 * **Solid**: The zone or overlay has a solid outline.
 * **Dash**: The zone or overlay has a dashed outline.
 * **Dot**: The zone or overlay has a dotted outline.
 */
export enum OutlineStyle {
  Dash = 'Dash',
  Dot = 'Dot',
  None = 'None',
  Solid = 'Solid'
}

/** An overlay is a boundary with attributes that override zoning parameters. */
export type Overlay = {
  __typename?: 'Overlay';
  attributes: OverlayAttributes;
  /** 2d geometry (xy coordinates) */
  geometry?: Maybe<Polygon>;
  overlayType?: Maybe<OverlayType>;
};

/** Attributes of the overlay. */
export type OverlayAttributes = {
  __typename?: 'OverlayAttributes';
  /** ID of the branch the overlay belongs to. */
  BranchID?: Maybe<Scalars['GlobalID']>;
  /** Maximum allowed coverage in percentage. */
  CoverageMax?: Maybe<Scalars['Float']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: Maybe<Scalars['String']>;
  /** Description of the overlay. */
  Description?: Maybe<Scalars['String']>;
  /** Maximum allowed dwelling units per area in [units/m2]. */
  DwellingUnitsPerAreaMax?: Maybe<Scalars['Float']>;
  /** Maximum allowed floor area ratio. */
  FARMax?: Maybe<Scalars['Float']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /** Maximum allowed height in [m]. */
  HeightMax?: Maybe<Scalars['Float']>;
  /** Label of the overlay. */
  Label?: Maybe<Scalars['String']>;
  /** Maximum allowed number of floors. */
  NumFloorsMax?: Maybe<Scalars['Int']>;
  /** ID of the overlay type the overlay belongs to. */
  OverlayTypeID: Scalars['GlobalID'];
  /** Array containing skyplanes. */
  Skyplanes?: Maybe<Array<Skyplane>>;
  /** Maximum allowed substructure depth in [m]. */
  SubstructureDepthMax?: Maybe<Scalars['Float']>;
  /** An array of tiers and their allowed setbacks in [m]. */
  Tiers?: Maybe<Array<Tier>>;
};

export type OverlayFilterInput = {
  globalIDs?: InputMaybe<Array<Scalars['GlobalID']>>;
};

/** An overlay type is used to configure overlays that override zoning parameters. */
export type OverlayType = {
  __typename?: 'OverlayType';
  attributes: OverlayTypeAttributes;
};

/** Attributes of the overlay type. */
export type OverlayTypeAttributes = {
  __typename?: 'OverlayTypeAttributes';
  /** Hex color of the zone type or overlay. */
  Color: Scalars['Color'];
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: Maybe<Scalars['String']>;
  /** JSON object containing the configuration of the overlay types. */
  FieldsConfig: FieldsConfig;
  /** Fill style of the zone type or overlay. */
  FillStyle: FillStyle;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /** Label shown on the overlay geometry. */
  Label?: Maybe<OverlayTypeLabel>;
  /** Outline style of the zone type or overlay. */
  OutlineStyle: OutlineStyle;
  /** Name of the overlay type. */
  OverlayTypeName: Scalars['String'];
  /** The order of the overlay type. Defines the order in which the overlay types are displayed in the legend (and applied if relevant). */
  OverlayTypeOrder: Scalars['Int'];
  /** If `true`, the overlay type is proposed in the plan. */
  Proposal: Scalars['Boolean'];
  /** ID of the urban event (plan) the overlay type belongs to. */
  UrbanEventID?: Maybe<Scalars['GlobalID']>;
};

export type OverlayTypeFilterInput = {
  globalIDs?: InputMaybe<Array<Scalars['GlobalID']>>;
};

/**
 * **None**: No label is shown.
 * **HeightMax**: Label contains maximum height value in [m].
 * **NumFloorsMax**: Label contains maximum number of floors value.
 * **FARMax**: Label contains maximum FAR value.
 * **CoverageMax**: Label contains maximum coverage value in percentage.
 * **SubstructureDepthMax**: Label contains maximum substructure depth value in [m].
 * **DwellingUnitsPerAreaMax**: Label contains maximum dwelling units per area value in [units/ha].
 */
export enum OverlayTypeLabel {
  CoverageMax = 'CoverageMax',
  DwellingUnitsPerAreaMax = 'DwellingUnitsPerAreaMax',
  FarMax = 'FARMax',
  HeightMax = 'HeightMax',
  None = 'None',
  NumFloorsMax = 'NumFloorsMax',
  SubstructureDepthMax = 'SubstructureDepthMax'
}

/**
 * **None**: No method is applied.
 * **Replace**: Override underlying zoning value.
 * **Max**: Override underlying zoning value if overlay value is larger.
 * **Min**: Override underlying zoning value if overlay value is smaller.
 * **Add**: Add overlay value to underlying zoning value.
 * **Subtract**: Subtract overlay value from underlying zoning value.
 */
export enum OverlayTypeMethod {
  Add = 'Add',
  Max = 'Max',
  Min = 'Min',
  /** @deprecated The None option is no longer supported. (Removal date: 2023-06-29) */
  None = 'None',
  Replace = 'Replace',
  Subtract = 'Subtract'
}

/**
 * **None**: No method is applied.
 * **Replace**: Override underlying zoning value.
 */
export enum OverlayTypeMethodSkyplanes {
  None = 'None',
  Replace = 'Replace'
}

/**
 * **None**: No method is applied.
 * **Replace**: Override underlying zoning value.
 */
export enum OverlayTypeMethodTiers {
  None = 'None',
  Replace = 'Replace'
}

export type OverlayTypesMeta = FeaturesMeta & {
  __typename?: 'OverlayTypesMeta';
  /** The number of overlay types. */
  count?: Maybe<Scalars['Int']>;
};

export type OverlaysMeta = FeaturesMeta & {
  __typename?: 'OverlaysMeta';
  /** The number of overlays. */
  count?: Maybe<Scalars['Int']>;
};

export type PagingInput = {
  /**
   * Maximum number of results to return.
   *
   * Minimum value: 1
   * Maximum value: 1000
   */
  limit?: InputMaybe<Scalars['Int']>;
  /**
   * Number of results to skip.
   * Can be used in combination with limit to achieve paging.
   */
  offset?: InputMaybe<Scalars['Int']>;
};

/** A parcel is a boundary with parcel attributes. */
export type Parcel = {
  __typename?: 'Parcel';
  attributes: ParcelAttributes;
  buildingType?: Maybe<BuildingType>;
  /** 2d geometry (xy coordinates) */
  geometry?: Maybe<Polygon>;
  spaces?: Maybe<Array<Space>>;
  spacesMeta: SpacesMeta;
  zoningRegulation: ZoningRegulation;
};


/** A parcel is a boundary with parcel attributes. */
export type ParcelSpacesArgs = {
  filter?: InputMaybe<SpaceFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


/** A parcel is a boundary with parcel attributes. */
export type ParcelSpacesMetaArgs = {
  filter?: InputMaybe<SpaceFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
};

/** Attributes of the parcel. */
export type ParcelAttributes = {
  __typename?: 'ParcelAttributes';
  /** ID of the branch the parcel belongs to. */
  BranchID?: Maybe<Scalars['GlobalID']>;
  /** ID of the building type the parcel is assigned to for the generation of future buildings. */
  BuildingTypeID?: Maybe<Scalars['GlobalID']>;
  /** Maximum allowed coverage in percentage. */
  CoverageMax?: Maybe<Scalars['Float']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: Maybe<Scalars['String']>;
  /** If `true`, the parcel is being demolished. */
  Demolish: Scalars['Boolean'];
  /**
   * If `true`, the parcel is being demolished.
   * @deprecated Use the Demolish field instead. (Removal date: 2024-02-28)
   */
  Develop: Scalars['Boolean'];
  /** The type of development on the parcel. */
  DevelopmentType: DevelopmentType;
  /** Maximum allowed dwelling units per area in [units/m2]. */
  DwellingUnitsPerAreaMax?: Maybe<Scalars['Float']>;
  /** An array of parcel edges and their edge information. */
  EdgeInfos?: Maybe<Array<EdgeInfo>>;
  /** Maximum allowed floor area ratio. */
  FARMax?: Maybe<Scalars['Float']>;
  /** Geodetic/geodesic shape area of the parcel, measured on the earth's surface, i.e. on the spheroid (ellipsoid) in [m2]. */
  GeodeticShapeArea: Scalars['Float'];
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /** Maximum allowed height in [m]. */
  HeightMax?: Maybe<Scalars['Float']>;
  /** Maximum allowed number of floors. */
  NumFloorsMax?: Maybe<Scalars['Int']>;
  /**
   * If `true`, zoning envelopes are generated for the parcel.
   * @deprecated This field is no longer used. After improving the zoning workflow in the Urban web app, manually turning envelopes on and off for individual parcels will no longer be available. (Removal date: 2024-02-22)
   */
  ShowZoningEnvelopes: Scalars['Boolean'];
  /** Array containing skyplanes. */
  Skyplanes?: Maybe<Array<Skyplane>>;
  /** Maximum allowed substructure depth in [m]. */
  SubstructureDepthMax?: Maybe<Scalars['Float']>;
  /**
   * General score of how suitable a parcel is for redevelopment.
   * @deprecated This field has been superceded by Models of type Suitability (Removal date: 2023-07-31)
   */
  SuitabilityScore?: Maybe<Scalars['Float']>;
  /**
   * Additional value for the suitability of parcels for redevelopment.
   * @deprecated This field has been superceded by Models of type Suitability (Removal date: 2023-07-31)
   */
  SuitabilityValue1?: Maybe<Scalars['Float']>;
  /**
   * Additional value for the suitability of parcels for redevelopment.
   * @deprecated This field has been superceded by Models of type Suitability (Removal date: 2023-07-31)
   */
  SuitabilityValue2?: Maybe<Scalars['Float']>;
  /**
   * Additional value for the suitability of parcels for redevelopment.
   * @deprecated This field has been superceded by Models of type Suitability (Removal date: 2023-07-31)
   */
  SuitabilityValue3?: Maybe<Scalars['Float']>;
  /** An array of tiers and their allowed setbacks in [m]. */
  Tiers?: Maybe<Array<Tier>>;
};

export type ParcelFilterInput = {
  globalIDs?: InputMaybe<Array<Scalars['GlobalID']>>;
};

export enum ParcelSortBy {
  SuitabilityScore = 'SuitabilityScore'
}

export type ParcelSortInput = {
  direction?: InputMaybe<SortDirection>;
  sortBy: ParcelSortBy;
};

/** Display configuration of parcel information. */
export type ParcelsDisplayConfig = {
  __typename?: 'ParcelsDisplayConfig';
  /** Label associated with parcel CustomID. */
  customIDLabel?: Maybe<Scalars['String']>;
};

export type ParcelsDisplayConfigInput = {
  /** Label associated with parcel CustomID. */
  customIDLabel?: InputMaybe<Scalars['String']>;
};

export type ParcelsMeta = FeaturesMeta & {
  __typename?: 'ParcelsMeta';
  /** The number of parcels. */
  count?: Maybe<Scalars['Int']>;
};

/** A plan is used for long-term (10–50 years) urban planning on a large scale. */
export type Plan = {
  __typename?: 'Plan';
  attributes: PlanAttributes;
  /**
   * Branches (scenarios) in the plan.
   *
   * See [Work with plan scenarios](https://doc.arcgis.com/en/urban/help/help-scenarios.htm).
   */
  branches: Array<Maybe<PlanBranch>>;
  branchesMeta: PlanBranchesMeta;
  /**
   * Buildings types in the plan.
   *
   * See [Building types](https://doc.arcgis.com/en/urban/data/data-manager-types.htm#ESRI_SECTION1_BB8E3A8E309C4F45B6F837A07E9D2453).
   */
  buildingTypes: Array<Maybe<BuildingType>>;
  buildingTypesMeta: BuildingTypesMeta;
  /**
   * Criteria defined in the plan.
   *
   * See [Suitability](https://doc.arcgis.com/en/urban/help/help-suitability.htm).
   */
  criteria: Array<Maybe<Criterion>>;
  criteriaMeta: CriteriaMeta;
  /** 2d geometry (xy coordinates) */
  geometry?: Maybe<Polygon>;
  /**
   * Sources for metrics in the plan.
   *
   * See [Manage metrics](https://doc.arcgis.com/en/urban/data/data-manager-metrics.htm).
   */
  metricSources: Array<Maybe<MetricSource>>;
  metricSourcesMeta: MetricSourcesMeta;
  /**
   * Metrics defined in the plan.
   *
   * See [Manage metrics](https://doc.arcgis.com/en/urban/data/data-manager-metrics.htm).
   */
  metrics: Array<Maybe<Metric>>;
  metricsMeta: MetricsMeta;
  /**
   * Overlay types in the plan.
   *
   * See [Create an overlay](https://doc.arcgis.com/en/urban/help/help-create-zoning-overlay.htm).
   */
  overlayTypes: Array<Maybe<OverlayType>>;
  overlayTypesMeta: OverlayTypesMeta;
  /**
   * Space-use types in the plan.
   *
   * See [Space-use types](https://doc.arcgis.com/en/urban/data/data-manager-types.htm#ESRI_SECTION1_C30D73392D964D51A8B606128A8A6E8F).
   */
  spaceUseTypes: Array<Maybe<SpaceUseType>>;
  spaceUseTypesMeta: SpaceUseTypesMeta;
  /**
   * Suitability models defined in the plan.
   *
   * See [Suitability](https://doc.arcgis.com/en/urban/help/help-suitability.htm).
   */
  suitabilityModels: Array<Maybe<SuitabilityModel>>;
  suitabilityModelsMeta: SuitabilityModelsMeta;
  /**
   * Viewpoints defined in the plan.
   *
   * See [Viewpoints](https://doc.arcgis.com/en/urban/help/help-viewpoints.htm).
   */
  viewpoints: Array<Maybe<Viewpoint>>;
  viewpointsMeta: ViewpointsMeta;
  /**
   * Zoning types in the plan.
   *
   * See [Zoning types](https://doc.arcgis.com/en/urban/data/data-manager-types.htm#ESRI_SECTION1_87E11F381BC94CC38639042C7B1331A0).
   */
  zoneTypes: Array<Maybe<ZoneType>>;
  zoneTypesMeta: ZoneTypesMeta;
};


/** A plan is used for long-term (10–50 years) urban planning on a large scale. */
export type PlanBranchesArgs = {
  filter?: InputMaybe<BranchFilterInput>;
  paging?: InputMaybe<PagingInput>;
  sort?: InputMaybe<Array<BranchSortInput>>;
};


/** A plan is used for long-term (10–50 years) urban planning on a large scale. */
export type PlanBranchesMetaArgs = {
  filter?: InputMaybe<BranchFilterInput>;
};


/** A plan is used for long-term (10–50 years) urban planning on a large scale. */
export type PlanBuildingTypesArgs = {
  filter?: InputMaybe<BuildingTypeFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


/** A plan is used for long-term (10–50 years) urban planning on a large scale. */
export type PlanBuildingTypesMetaArgs = {
  filter?: InputMaybe<BuildingTypeFilterInput>;
};


/** A plan is used for long-term (10–50 years) urban planning on a large scale. */
export type PlanCriteriaArgs = {
  filter?: InputMaybe<CriterionFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


/** A plan is used for long-term (10–50 years) urban planning on a large scale. */
export type PlanCriteriaMetaArgs = {
  filter?: InputMaybe<CriterionFilterInput>;
};


/** A plan is used for long-term (10–50 years) urban planning on a large scale. */
export type PlanMetricSourcesArgs = {
  filter?: InputMaybe<MetricSourceFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


/** A plan is used for long-term (10–50 years) urban planning on a large scale. */
export type PlanMetricSourcesMetaArgs = {
  filter?: InputMaybe<MetricSourceFilterInput>;
};


/** A plan is used for long-term (10–50 years) urban planning on a large scale. */
export type PlanMetricsArgs = {
  filter?: InputMaybe<MetricFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


/** A plan is used for long-term (10–50 years) urban planning on a large scale. */
export type PlanMetricsMetaArgs = {
  filter?: InputMaybe<MetricFilterInput>;
};


/** A plan is used for long-term (10–50 years) urban planning on a large scale. */
export type PlanOverlayTypesArgs = {
  filter?: InputMaybe<OverlayTypeFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


/** A plan is used for long-term (10–50 years) urban planning on a large scale. */
export type PlanOverlayTypesMetaArgs = {
  filter?: InputMaybe<OverlayTypeFilterInput>;
};


/** A plan is used for long-term (10–50 years) urban planning on a large scale. */
export type PlanSpaceUseTypesArgs = {
  filter?: InputMaybe<SpaceUseTypeFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


/** A plan is used for long-term (10–50 years) urban planning on a large scale. */
export type PlanSpaceUseTypesMetaArgs = {
  filter?: InputMaybe<SpaceUseTypeFilterInput>;
};


/** A plan is used for long-term (10–50 years) urban planning on a large scale. */
export type PlanSuitabilityModelsArgs = {
  filter?: InputMaybe<SuitabilityModelFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


/** A plan is used for long-term (10–50 years) urban planning on a large scale. */
export type PlanSuitabilityModelsMetaArgs = {
  filter?: InputMaybe<SuitabilityModelFilterInput>;
};


/** A plan is used for long-term (10–50 years) urban planning on a large scale. */
export type PlanViewpointsArgs = {
  filter?: InputMaybe<ViewpointFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


/** A plan is used for long-term (10–50 years) urban planning on a large scale. */
export type PlanViewpointsMetaArgs = {
  filter?: InputMaybe<ViewpointFilterInput>;
};


/** A plan is used for long-term (10–50 years) urban planning on a large scale. */
export type PlanZoneTypesArgs = {
  filter?: InputMaybe<ZoneTypeFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


/** A plan is used for long-term (10–50 years) urban planning on a large scale. */
export type PlanZoneTypesMetaArgs = {
  filter?: InputMaybe<ZoneTypeFilterInput>;
};

/** Attributes of the plan. */
export type PlanAttributes = {
  __typename?: 'PlanAttributes';
  /** Address of the urban event. */
  Address?: Maybe<Scalars['String']>;
  /** Portal item id of a web scene whose layers are shown as design context layers when editing a plan (visible for all scenarios). */
  ContextWebsceneItemId?: Maybe<Scalars['PortalItemId']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: Maybe<Scalars['String']>;
  /** Description of the urban event (markdown enabled). */
  Description?: Maybe<Scalars['String']>;
  /** End date of the urban event. */
  EndDate: Scalars['Timestamp'];
  /** Name of the urban event. */
  EventName: Scalars['String'];
  /** If `true`, the urban event is featured and appears at the top of the list in the overview. */
  Featured: Scalars['Boolean'];
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /**
   * If `true`, the urban event cannot be edited by others.
   * @deprecated No longer supported. (Removal date: 2024-02-28)
   */
  Locked: Scalars['Boolean'];
  /** Settings for the charts in the metrics dashboard. */
  MetricsDashboardCharts: Array<MetricsDashboardChart>;
  /**
   * ArcGIS account username of the user who created the urban event.
   * @deprecated No longer supported. (Removal date: 2024-03-27)
   */
  OwnerName: Scalars['String'];
  /** The planning method of the plan. */
  PlanningMethod: UrbanEventPlanningMethod;
  /** If `true`, public comments are visible and adding new comments is enabled until the public feedback end date. */
  PublicFeedbackEnabled: Scalars['Boolean'];
  /** The date until new feedback comments can be added. */
  PublicFeedbackEndDate?: Maybe<Scalars['Timestamp']>;
  /** Start date of the urban event. */
  StartDate: Scalars['Timestamp'];
  /** ID of the status type associated with the urban event. */
  Status?: Maybe<Scalars['GlobalID']>;
  /** Image (blob) to be displayed in the overview card. */
  Thumbnail?: Maybe<Scalars['String']>;
  /** URL to a webpage. Shown in the detail card of the urban event. */
  WebpageUrl?: Maybe<Scalars['String']>;
};

/** A plan branch is a design scenario in a plan. */
export type PlanBranch = {
  __typename?: 'PlanBranch';
  attributes: BranchAttributes;
  /**
   * Metric values in the branch of the plan.
   *
   * See [Work with metrics](https://doc.arcgis.com/en/urban/help/help-analyze-plan.htm).
   */
  metricValues: Array<Maybe<MetricValue>>;
  metricValuesMeta: MetricValuesMeta;
  /**
   * Overlays in the branch of the plan.
   *
   * See [Create an overlay](https://doc.arcgis.com/en/urban/help/help-create-zoning-overlay.htm).
   */
  overlays: Array<Maybe<Overlay>>;
  overlaysMeta: OverlaysMeta;
  /**
   * Parcels in the branch of the plan.
   *
   * See [Add and edit parcels](https://doc.arcgis.com/en/urban/help/help-edit-parcels.htm).
   */
  parcels: Array<Maybe<Parcel>>;
  parcelsMeta: ParcelsMeta;
  /**
   * Spaces in the branch of the plan.
   *
   * See [Work with spaces and surfaces](https://doc.arcgis.com/en/urban/help/help-parcel-redevelopment.htm#ESRI_SECTION1_B18118FDBF3E48E8AE4DC4B7EBB72395).
   */
  spaces: Array<Maybe<Space>>;
  spacesMeta: SpacesMeta;
  /**
   * Zones in the branch of the plan.
   *
   * See [Work with zoning and land-use types](https://doc.arcgis.com/en/urban/help/help-assign-new-zoning.htm).
   */
  zones: Array<Maybe<Zone>>;
  zonesMeta: ZonesMeta;
};


/** A plan branch is a design scenario in a plan. */
export type PlanBranchMetricValuesArgs = {
  filter?: InputMaybe<MetricValueFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


/** A plan branch is a design scenario in a plan. */
export type PlanBranchMetricValuesMetaArgs = {
  filter?: InputMaybe<MetricValueFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
};


/** A plan branch is a design scenario in a plan. */
export type PlanBranchOverlaysArgs = {
  filter?: InputMaybe<OverlayFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


/** A plan branch is a design scenario in a plan. */
export type PlanBranchOverlaysMetaArgs = {
  filter?: InputMaybe<OverlayFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
};


/** A plan branch is a design scenario in a plan. */
export type PlanBranchParcelsArgs = {
  filter?: InputMaybe<ParcelFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


/** A plan branch is a design scenario in a plan. */
export type PlanBranchParcelsMetaArgs = {
  filter?: InputMaybe<ParcelFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
};


/** A plan branch is a design scenario in a plan. */
export type PlanBranchSpacesArgs = {
  filter?: InputMaybe<SpaceFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


/** A plan branch is a design scenario in a plan. */
export type PlanBranchSpacesMetaArgs = {
  filter?: InputMaybe<SpaceFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
};


/** A plan branch is a design scenario in a plan. */
export type PlanBranchZonesArgs = {
  filter?: InputMaybe<ZoneFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


/** A plan branch is a design scenario in a plan. */
export type PlanBranchZonesMetaArgs = {
  filter?: InputMaybe<ZoneFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
};

export type PlanBranchesMeta = FeaturesMeta & {
  __typename?: 'PlanBranchesMeta';
  /** The number of branches in the plan. */
  count?: Maybe<Scalars['Int']>;
};

export type PlanFilterInput = {
  globalIDs?: InputMaybe<Array<Scalars['GlobalID']>>;
};

export enum PlanSortBy {
  EndDate = 'EndDate',
  EventName = 'EventName',
  /** @deprecated No longer supported. (Removal date: 2024-03-27) */
  OwnerName = 'OwnerName',
  StartDate = 'StartDate'
}

export type PlanSortInput = {
  direction?: InputMaybe<SortDirection>;
  sortBy: PlanSortBy;
};

/** Layer configuration for plans. */
export type PlansLayerSettings = {
  __typename?: 'PlansLayerSettings';
  /** If `true`, the layer is visible. */
  visible: Scalars['Boolean'];
};

export type PlansLayerSettingsInput = {
  /** If `true`, the layer is visible. */
  visible: Scalars['Boolean'];
};

export type PlansMeta = FeaturesMeta & {
  __typename?: 'PlansMeta';
  /** The number of plans. */
  count?: Maybe<Scalars['Int']>;
};

export type Point = {
  __typename?: 'Point';
  spatialReference: SpatialReference;
  /** x coordinate of the point. */
  x: Scalars['Float'];
  /** y coordinate of the point. */
  y: Scalars['Float'];
  /**
   * z coordinate of the point.
   *
   * Returns null if the point is of type 2d.
   */
  z?: Maybe<Scalars['Float']>;
};

export type PointInput = {
  spatialReference: SpatialReferenceInput;
  /** x coordinate of the point. */
  x: Scalars['Float'];
  /** y coordinate of the point. */
  y: Scalars['Float'];
  /**
   * z coordinate of the point.
   *
   * Valid only if defined as 3d geometry in the geometry field documentation (otherwise not required).
   */
  z?: InputMaybe<Scalars['Float']>;
};

/** A point symbol is a point geometry in a project scenario with a specific style. */
export type PointSymbol = {
  __typename?: 'PointSymbol';
  attributes: PointSymbolAttributes;
  /** 2d geometry (xy coordinates) */
  geometry?: Maybe<Point>;
};

/** Attributes of the point symbol. */
export type PointSymbolAttributes = {
  __typename?: 'PointSymbolAttributes';
  /** ID of the branch the symbol belongs to. */
  BranchID?: Maybe<Scalars['GlobalID']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: Maybe<Scalars['String']>;
  /** The depth of the symbol in [m]. */
  Depth: Scalars['Float'];
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /** The heading of the symbol in [deg]. */
  Heading: Scalars['Float'];
  /** The height of the symbol in [m]. */
  Height: Scalars['Float'];
  /** URL of the symbol. */
  ResourceHref: Scalars['String'];
  /** Style of the symbol. */
  SymbolStyle: PointSymbolStyle;
  /** The width of the symbol in [m]. */
  Width: Scalars['Float'];
};

export type PointSymbolFilterInput = {
  globalIDs?: InputMaybe<Array<Scalars['GlobalID']>>;
};

/**
 * **Trees**: Point represents a tree.
 * **Vehicles**: Point represents a vehicle.
 * **Furniture**: Point represents street furniture.
 */
export enum PointSymbolStyle {
  Furniture = 'Furniture',
  Trees = 'Trees',
  Vehicles = 'Vehicles'
}

export type PointSymbolsMeta = FeaturesMeta & {
  __typename?: 'PointSymbolsMeta';
  /** The number of point symbols. */
  count?: Maybe<Scalars['Int']>;
};

export type Polygon = {
  __typename?: 'Polygon';
  /**
   * Array of rings, a single ring is understood as a list of coordinate 2d pairs [x, y], or 3d triplets [x, y, z].
   *
   * [[[x, y][x, y]][[x, y][x, y]]]
   *
   * Rings are assumed to be 2d unless specified otherwise in the geometry field documentation.
   */
  rings: Array<Array<Array<Scalars['Float']>>>;
  spatialReference: SpatialReference;
};

export type PolygonInput = {
  /**
   * Array of rings, a single ring is understood as a list of coordinate 2d pairs [x, y], or 3d triplets [x, y, z].
   *
   * [[[x, y][x, y]][[x, y][x, y]]]
   *
   * Rings are assumed to be 2d unless specified otherwise in the geometry field documentation.
   */
  rings: Array<Array<Array<Scalars['Float']>>>;
  spatialReference: SpatialReferenceInput;
};

/** A polygon symbol is a 2D polygon in a project scenario with a specific style. */
export type PolygonSymbol = {
  __typename?: 'PolygonSymbol';
  attributes: PolygonSymbolAttributes;
  /** 2d geometry (xy coordinates) */
  geometry?: Maybe<Polygon>;
};

/** Attributes of the polygon symbol. */
export type PolygonSymbolAttributes = {
  __typename?: 'PolygonSymbolAttributes';
  /** ID of the branch the symbol belongs to. */
  BranchID?: Maybe<Scalars['GlobalID']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: Maybe<Scalars['String']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /** Style of the symbol. */
  SymbolStyle: PolygonSymbolStyle;
};

export type PolygonSymbolFilterInput = {
  globalIDs?: InputMaybe<Array<Scalars['GlobalID']>>;
};

/**
 * **Grass**: Polygon represents grass / open area.
 * **Concrete**: Polygon represents concrete / sealed area.
 * **Water**: Polygon represents water.
 */
export enum PolygonSymbolStyle {
  Concrete = 'Concrete',
  Grass = 'Grass',
  Water = 'Water'
}

export type PolygonSymbolsMeta = FeaturesMeta & {
  __typename?: 'PolygonSymbolsMeta';
  /** The number of polygon symbols. */
  count?: Maybe<Scalars['Int']>;
};

export enum PortalItemSortBy {
  Created = 'Created',
  Modified = 'Modified',
  Title = 'Title'
}

export type PortalItemSortInput = {
  direction?: InputMaybe<SortDirection>;
  sortBy: PortalItemSortBy;
};

/** The camera position. */
export type Position = {
  __typename?: 'Position';
  /** The spatial reference of the camera position. */
  spatialReference: SpatialReference;
  /** The x-coordinate of the camera position. */
  x: Scalars['Float'];
  /** The y-coordinate of the camera position. */
  y: Scalars['Float'];
  /** The z-coordinate of the camera position. */
  z: Scalars['Float'];
};

export type PositionInput = {
  /** The spatial reference of the camera position. */
  spatialReference: SpatialReferenceInput;
  /** The x-coordinate of the camera position. */
  x: Scalars['Float'];
  /** The y-coordinate of the camera position. */
  y: Scalars['Float'];
  /** The z-coordinate of the camera position. */
  z: Scalars['Float'];
};

/** A project is used for short-term (1-5 years) urban planning at the parcel level. */
export type Project = {
  __typename?: 'Project';
  attributes: ProjectAttributes;
  /**
   * Branches (scenarios) in the project.
   *
   * See [Work with project scenarios](https://doc.arcgis.com/en/urban/help/help-projects-scenarios.htm).
   */
  branches: Array<Maybe<ProjectBranch>>;
  branchesMeta: ProjectBranchesMeta;
  /** 2d geometry (xy coordinates) */
  geometry?: Maybe<Polygon>;
  /**
   * Project status types defined in the project.
   *
   * See [Project status types](https://doc.arcgis.com/en/urban/data/data-manager-types.htm#ESRI_SECTION1_B937885446E34EB381FFF216E56AAA70).
   */
  statusType: StatusType;
  /**
   * Viewpoints defined in the project.
   *
   * See [Viewpoints](https://doc.arcgis.com/en/urban/help/help-viewpoints.htm).
   */
  viewpoints: Array<Maybe<Viewpoint>>;
  viewpointsMeta: ViewpointsMeta;
};


/** A project is used for short-term (1-5 years) urban planning at the parcel level. */
export type ProjectBranchesArgs = {
  filter?: InputMaybe<BranchFilterInput>;
  paging?: InputMaybe<PagingInput>;
  sort?: InputMaybe<Array<BranchSortInput>>;
};


/** A project is used for short-term (1-5 years) urban planning at the parcel level. */
export type ProjectBranchesMetaArgs = {
  filter?: InputMaybe<BranchFilterInput>;
};


/** A project is used for short-term (1-5 years) urban planning at the parcel level. */
export type ProjectViewpointsArgs = {
  filter?: InputMaybe<ViewpointFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


/** A project is used for short-term (1-5 years) urban planning at the parcel level. */
export type ProjectViewpointsMetaArgs = {
  filter?: InputMaybe<ViewpointFilterInput>;
};

/** Attributes of the project. */
export type ProjectAttributes = {
  __typename?: 'ProjectAttributes';
  /** Address of the urban event. */
  Address?: Maybe<Scalars['String']>;
  /** Portal item id of a web scene whose layers are shown as design context layers when editing a plan (visible for all scenarios). */
  ContextWebsceneItemId?: Maybe<Scalars['PortalItemId']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: Maybe<Scalars['String']>;
  /** Description of the urban event (markdown enabled). */
  Description?: Maybe<Scalars['String']>;
  /** End date of the urban event. */
  EndDate: Scalars['Timestamp'];
  /** Name of the urban event. */
  EventName: Scalars['String'];
  /** If `true`, the urban event is featured and appears at the top of the list in the overview. */
  Featured: Scalars['Boolean'];
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /**
   * If `true`, the urban event cannot be edited by others.
   * @deprecated No longer supported. (Removal date: 2024-02-28)
   */
  Locked: Scalars['Boolean'];
  /** Settings for the charts in the metrics dashboard. */
  MetricsDashboardCharts: Array<MetricsDashboardChart>;
  /**
   * ArcGIS account username of the user who created the urban event.
   * @deprecated No longer supported. (Removal date: 2024-03-27)
   */
  OwnerName: Scalars['String'];
  /** If `true`, public comments are visible and adding new comments is enabled until the public feedback end date. */
  PublicFeedbackEnabled: Scalars['Boolean'];
  /** The date until new feedback comments can be added. */
  PublicFeedbackEndDate?: Maybe<Scalars['Timestamp']>;
  /** Start date of the urban event. */
  StartDate: Scalars['Timestamp'];
  /** ID of the status type associated with the urban event. */
  Status?: Maybe<Scalars['GlobalID']>;
  /** Image (blob) to be displayed in the overview card. */
  Thumbnail?: Maybe<Scalars['String']>;
  /** URL to a webpage. Shown in the detail card of the urban event. */
  WebpageUrl?: Maybe<Scalars['String']>;
};

/** A project branch is a design scenario in a project. */
export type ProjectBranch = {
  __typename?: 'ProjectBranch';
  attributes: BranchAttributes;
  /**
   * Low level of detail (LOD1) schematic buildings in the branch of the project.
   *
   * See [Draw buildings](https://doc.arcgis.com/en/urban/help/help-edit-project.htm#ESRI_SECTION1_81D7BE94C40741CF85BAEB6A4CA53A1E).
   */
  lod1Buildings: Array<Maybe<Lod1Building>>;
  lod1BuildingsMeta: Lod1BuildingsMeta;
  /**
   * Point symbols representing trees, vehicles, and other urban furniture in the branch of the project.
   *
   * See [Edit a project](https://doc.arcgis.com/en/urban/help/help-edit-project.htm).
   */
  pointSymbols: Array<Maybe<PointSymbol>>;
  pointSymbolsMeta: PointSymbolsMeta;
  /**
   * Polygon symbols representing grass, concrete, water, or other surface layers in the branch of the project.
   *
   * See [Edit a project](https://doc.arcgis.com/en/urban/help/help-edit-project.htm).
   */
  polygonSymbols: Array<Maybe<PolygonSymbol>>;
  polygonSymbolsMeta: PolygonSymbolsMeta;
};


/** A project branch is a design scenario in a project. */
export type ProjectBranchLod1BuildingsArgs = {
  filter?: InputMaybe<Lod1BuildingFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


/** A project branch is a design scenario in a project. */
export type ProjectBranchLod1BuildingsMetaArgs = {
  filter?: InputMaybe<Lod1BuildingFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
};


/** A project branch is a design scenario in a project. */
export type ProjectBranchPointSymbolsArgs = {
  filter?: InputMaybe<PointSymbolFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


/** A project branch is a design scenario in a project. */
export type ProjectBranchPointSymbolsMetaArgs = {
  filter?: InputMaybe<PointSymbolFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
};


/** A project branch is a design scenario in a project. */
export type ProjectBranchPolygonSymbolsArgs = {
  filter?: InputMaybe<PolygonSymbolFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


/** A project branch is a design scenario in a project. */
export type ProjectBranchPolygonSymbolsMetaArgs = {
  filter?: InputMaybe<PolygonSymbolFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
};

export type ProjectBranchesMeta = FeaturesMeta & {
  __typename?: 'ProjectBranchesMeta';
  /** The number of branches in the project. */
  count?: Maybe<Scalars['Int']>;
};

export type ProjectFilterInput = {
  globalIDs?: InputMaybe<Array<Scalars['GlobalID']>>;
};

export enum ProjectSortBy {
  EndDate = 'EndDate',
  EventName = 'EventName',
  /** @deprecated No longer supported. (Removal date: 2024-03-27) */
  OwnerName = 'OwnerName',
  StartDate = 'StartDate'
}

export type ProjectSortInput = {
  direction?: InputMaybe<SortDirection>;
  sortBy: ProjectSortBy;
};

/** Layer configuration for projects. */
export type ProjectsLayerSettings = {
  __typename?: 'ProjectsLayerSettings';
  /** If `true`, the layer is visible. */
  visible: Scalars['Boolean'];
};

export type ProjectsLayerSettingsInput = {
  /** If `true`, the layer is visible. */
  visible: Scalars['Boolean'];
};

export type ProjectsMeta = FeaturesMeta & {
  __typename?: 'ProjectsMeta';
  /** The number of projects. */
  count?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  /**
   * Query the information about the API.
   * @deprecated No longer supported. (Removal date: 2023-08-01)
   */
  apiInfo: ApiInfo;
  /** Query an urban design database by id. */
  urbanDesignDatabase?: Maybe<UrbanDesignDatabase>;
  /** Query multiple urban design databases. If no filters are specified in a query, entries limited by the default limit argument will be returned. */
  urbanDesignDatabases?: Maybe<Array<UrbanDesignDatabase>>;
  /** Query an urban model by id. */
  urbanModel?: Maybe<UrbanModel>;
  /** Query multiple urban models. If no filters are specified in a query, entries limited by the default limit argument will be returned. */
  urbanModels?: Maybe<Array<UrbanModel>>;
};


export type QueryUrbanDesignDatabaseArgs = {
  urbanDesignDatabaseId: Scalars['PortalItemId'];
};


export type QueryUrbanDesignDatabasesArgs = {
  extent?: InputMaybe<Scalars['Extent']>;
  groupIds?: InputMaybe<Array<Scalars['PortalItemId']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  organizationId?: InputMaybe<Scalars['OrganizationId']>;
  owners?: InputMaybe<Array<Scalars['String']>>;
  sort?: InputMaybe<PortalItemSortInput>;
  urbanModelId?: InputMaybe<Scalars['PortalItemId']>;
};


export type QueryUrbanModelArgs = {
  urbanModelId: Scalars['PortalItemId'];
};


export type QueryUrbanModelsArgs = {
  extent?: InputMaybe<Scalars['Extent']>;
  groupIds?: InputMaybe<Array<Scalars['PortalItemId']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  organizationId?: InputMaybe<Scalars['OrganizationId']>;
  owners?: InputMaybe<Array<Scalars['String']>>;
  sort?: InputMaybe<PortalItemSortInput>;
};

/** Setback value in [m] applied to a Rear edge. */
export type RearInteriorSetback = {
  __typename?: 'RearInteriorSetback';
  /** Setback value in [m]. */
  value: Scalars['Float'];
};

export type RearInteriorSetbackInput = {
  /**
   * Setback value in [m].
   *
   * Minimum value: 0
   */
  value: Scalars['Float'];
};

/** Minimum allowed setbacks at the Rear edge of a parcel. */
export type RearSetback = {
  __typename?: 'RearSetback';
  /** Setback value in [m] applied to a Rear edge. */
  interior: RearInteriorSetback;
  /** Setback value in [m] applied to a Rear edge adjacent to a street. */
  street: RearStreetSetback;
};

export type RearSetbackInput = {
  /** Setback value in [m] applied to a Rear edge. */
  interior: RearInteriorSetbackInput;
  /** Setback value in [m] applied to a Rear edge adjacent to a street. */
  street: RearStreetSetbackInput;
};

/** Setback value in [m] applied to a Rear edge adjacent to a street. */
export type RearStreetSetback = {
  __typename?: 'RearStreetSetback';
  /** Setback value in [m]. */
  value: Scalars['Float'];
};

export type RearStreetSetbackInput = {
  /**
   * Setback value in [m].
   *
   * Minimum value: 0
   */
  value: Scalars['Float'];
};

/** Reclassification interval. */
export type ReclassificationInterval = {
  __typename?: 'ReclassificationInterval';
  /** Ending value (exclusive) of the interval. */
  end: Scalars['Float'];
  /** Whether this value causes the parcel to be excluded from the score calculation. Parcels that match excluded intervals on at least one criterion are excluded from the entire rest of the calculation. */
  exclude: Scalars['Boolean'];
  /** Score of the interval. */
  score: Scalars['Float'];
  /** Starting value (inclusive) of the interval. */
  start: Scalars['Float'];
};

export type ReclassificationIntervalInput = {
  /** Ending value (exclusive) of the interval. */
  end: Scalars['Float'];
  /** Whether this value causes the parcel to be excluded from the score calculation. Parcels that match excluded intervals on at least one criterion are excluded from the entire rest of the calculation. */
  exclude?: Scalars['Boolean'];
  /**
   * Score of the interval.
   *
   * Minimum value: 0
   * Maximum value: 10
   */
  score: Scalars['Float'];
  /** Starting value (inclusive) of the interval. */
  start: Scalars['Float'];
};

/** Reclassification mapping. */
export type ReclassificationMapping = {
  __typename?: 'ReclassificationMapping';
  /** Whether this value causes the parcel to be excluded from the score calculation. Parcels that match excluded values on at least one criterion are excluded from the entire rest of the calculation. */
  exclude: Scalars['Boolean'];
  /** Score of the interval. */
  score: Scalars['Float'];
  /** Value of the field. */
  value?: Maybe<Scalars['String']>;
};

export type ReclassificationMappingInput = {
  /** Whether this value causes the parcel to be excluded from the score calculation. Parcels that match excluded values on at least one criterion are excluded from the entire rest of the calculation. */
  exclude?: Scalars['Boolean'];
  /**
   * Score of the interval.
   *
   * Minimum value: 0
   * Maximum value: 10
   */
  score: Scalars['Float'];
  /** Value of the field. */
  value?: InputMaybe<Scalars['String']>;
};

/**
 * **ParcelCentroid**: Parcel centroid
 * **ParcelGeometry**: Parcel geometry
 */
export enum SamplingGeometry {
  ParcelCentroid = 'ParcelCentroid',
  ParcelGeometry = 'ParcelGeometry'
}

/**
 * **Any**: Use the value from any matching feature.
 * **Sum**: Use the sum of the values over all matching features.
 * **Average**: Use the average of the values over all matching features.
 * **Minimum**: Use the minimum value from all matching features.
 * **Maximum**: Use the maximum value from all matching features.
 */
export enum SamplingMethod {
  Any = 'Any',
  Average = 'Average',
  Maximum = 'Maximum',
  Minimum = 'Minimum',
  Sum = 'Sum'
}

/** Setback value in [m] applied to a Side edge. */
export type SideInteriorSetback = {
  __typename?: 'SideInteriorSetback';
  /** Setback value in [m]. */
  value: Scalars['Float'];
};

export type SideInteriorSetbackInput = {
  /**
   * Setback value in [m].
   *
   * Minimum value: 0
   */
  value: Scalars['Float'];
};

/** Minimum allowed setbacks at the Side edge of a parcel. */
export type SideSetback = {
  __typename?: 'SideSetback';
  /** Setback value in [m] applied to a Side edge. */
  interior: SideInteriorSetback;
  /** Setback value in [m] applied to a Side edge adjacent to a street. */
  street: SideStreetSetback;
};

export type SideSetbackInput = {
  /** Setback value in [m] applied to a Side edge. */
  interior: SideInteriorSetbackInput;
  /** Setback value in [m] applied to a Side edge adjacent to a street. */
  street: SideStreetSetbackInput;
};

/** Setback value in [m] applied to a Side edge adjacent to a street. */
export type SideStreetSetback = {
  __typename?: 'SideStreetSetback';
  /** Setback value in [m]. */
  value: Scalars['Float'];
};

export type SideStreetSetbackInput = {
  /**
   * Setback value in [m].
   *
   * Minimum value: 0
   */
  value: Scalars['Float'];
};

/** JSON object containing information about a skyplane. */
export type Skyplane = {
  __typename?: 'Skyplane';
  /** The adjacency of the skyplane */
  adjacency: SkyplaneAdjacency;
  /** Skyplane angle relative to the ground in [deg]. */
  angle: Scalars['Float'];
  /** Horizontal offset of the skyplane relative to the parcel edge in [m]. */
  horizontalOffset: Scalars['Float'];
  /** The orientation of the skyplane */
  orientation: SkyplaneOrientation;
  /** Vertical offset of the skyplane relative to the parcel edge in [m]. */
  verticalOffset: Scalars['Float'];
};

/**
 * **Street**: Skyplane is oriented to the street.
 * **Interior**: Skyplane is oriented to the interior.
 */
export enum SkyplaneAdjacency {
  Interior = 'Interior',
  Street = 'Street'
}

export type SkyplaneInput = {
  /** The adjacency of the skyplane */
  adjacency: SkyplaneAdjacency;
  /**
   * Skyplane angle relative to the ground in [deg].
   *
   * Minimum value: 0
   * Maximum value: 90
   */
  angle?: Scalars['Float'];
  /** Horizontal offset of the skyplane relative to the parcel edge in [m]. */
  horizontalOffset?: Scalars['Float'];
  /** The orientation of the skyplane */
  orientation: SkyplaneOrientation;
  /** Vertical offset of the skyplane relative to the parcel edge in [m]. */
  verticalOffset?: Scalars['Float'];
};

/**
 * **Front**: Skyplane is oriented to the front.
 * **Side**: Skyplane is oriented to the side.
 * **Rear**: Skyplane is oriented to the back.
 */
export enum SkyplaneOrientation {
  Front = 'Front',
  Rear = 'Rear',
  Side = 'Side'
}

/** OverlayType configuration for Skyplanes */
export type Skyplanes = {
  __typename?: 'Skyplanes';
  /** Overlay method that gets applied to the parcel skyplanes when redeveloping. */
  method?: Maybe<OverlayTypeMethodSkyplanes>;
};

export type SkyplanesInput = {
  /** Overlay method that gets applied to the parcel skyplanes when redeveloping. */
  method?: InputMaybe<OverlayTypeMethodSkyplanes>;
};

/**
 * **ASC**: Ascending order.
 * **DESC**: Descending order.
 */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/**
 * **SpaceArea**: Area of a space is used as a data point for the metric.
 * **Metric**: Another metric is used as a data point for the metric.
 */
export enum SourceType {
  Metric = 'Metric',
  SpaceArea = 'SpaceArea'
}

/** A space is a boundary with attributes used for building spaces and surface spaces. */
export type Space = {
  __typename?: 'Space';
  attributes: SpaceAttributes;
  /** 3d geometry (xyz coordinates) */
  geometry?: Maybe<Polygon>;
  spaceUseType?: Maybe<SpaceUseType>;
};

/** Attributes of the space. */
export type SpaceAttributes = {
  __typename?: 'SpaceAttributes';
  /** ID of the branch the space belongs to. */
  BranchID?: Maybe<Scalars['GlobalID']>;
  /** Building number the space belongs to. */
  BuildingNumber?: Maybe<Scalars['Int']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: Maybe<Scalars['String']>;
  /** Floor height of the space in [m]. */
  FloorHeight?: Maybe<Scalars['Float']>;
  /** Floor number the space belongs to. */
  FloorNumber?: Maybe<Scalars['Int']>;
  /** If `true`, the space should be excluded from GFA / FAR calculations. */
  GFAIgnore: Scalars['Boolean'];
  /** Geodetic/geodesic shape area of the space, measured on the earth's surface, i.e. on the spheroid (ellipsoid) in [m2]. */
  GeodeticShapeArea: Scalars['Float'];
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /** Metric values stored on a space of public plans for visualization in the overview. This field is not populated and ignored for spaces in design plans. */
  MetricValues: Array<SpaceMetricValue>;
  /**
   * Factor that reduces the total floor area used for capacity indicator calculations.
   * @deprecated This field is no longer used (Removal date: 2023-06-29)
   */
  NetAreaFactor: Scalars['Float'];
  /** ID of the parcel the space belongs to. */
  ParcelID: Scalars['GlobalID'];
  /** Type of space. */
  SpaceType: SpaceType;
  /** ID of the space use type that is assigned to the space. This is used for coloring the space, aggregating space use areas, and calculating capacity metrics. */
  SpaceUseTypeID: Scalars['GlobalID'];
};

export type SpaceFilterInput = {
  globalIDs?: InputMaybe<Array<Scalars['GlobalID']>>;
};

/** Metric value stored for a metric. */
export type SpaceMetricValue = {
  __typename?: 'SpaceMetricValue';
  /** ID of the metric that the data points to. */
  metricID: Scalars['GlobalID'];
  /** Stores the value for the metric. */
  value: Scalars['Float'];
};

export type SpaceMetricValueInput = {
  /** ID of the metric that the data points to. */
  metricID: Scalars['GlobalID'];
  /** Stores the value for the metric. */
  value: Scalars['Float'];
};

/**
 * **Building**: The space is part of a building.
 * **Surface**: The space is not part of a building and draped to the surface.
 */
export enum SpaceType {
  Building = 'Building',
  Surface = 'Surface'
}

/** A space use type is used to configure a space in a building or a surface. */
export type SpaceUseType = {
  __typename?: 'SpaceUseType';
  attributes: SpaceUseTypeAttributes;
};

/** Attributes of the space use type. */
export type SpaceUseTypeAttributes = {
  __typename?: 'SpaceUseTypeAttributes';
  /** Gross floor area taken up by an average household in the space use type, used for assessing the size of a dwelling unit in [m2]. */
  AreaPerHousehold?: Maybe<Scalars['Float']>;
  /** Hex color of the space use type. */
  Color: Scalars['Color'];
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: Maybe<Scalars['String']>;
  /** Floor height of the space use type in [m]. */
  FloorHeight: Scalars['Float'];
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /** Label of the space use type. */
  Label: Scalars['String'];
  /** Metric parameter values (e.g., weights) for a Metric that uses spaces as a data source. */
  MetricParameters: Array<MetricParameter>;
  /** Factor that reduces the total floor area used for capacity indicator calculations. */
  NetAreaFactor: Scalars['Float'];
  /** If `true`, the space use type is proposed in the plan. */
  Proposal: Scalars['Boolean'];
  /** If `true`, the space use type is residential and therefore can be used in dwelling units. */
  SingleUseOnly: Scalars['Boolean'];
  /** Name of the space use type. */
  SpaceUseTypeName: Scalars['String'];
  /** ID of the urban event (plan) the space use type belongs to. */
  UrbanEventID?: Maybe<Scalars['GlobalID']>;
};

export type SpaceUseTypeFilterInput = {
  globalIDs?: InputMaybe<Array<Scalars['GlobalID']>>;
};

export type SpaceUseTypesMeta = FeaturesMeta & {
  __typename?: 'SpaceUseTypesMeta';
  /** The number of space use types. */
  count?: Maybe<Scalars['Int']>;
};

export type SpacesMeta = FeaturesMeta & {
  __typename?: 'SpacesMeta';
  /** The number of spaces. */
  count?: Maybe<Scalars['Int']>;
};

/**
 * Spatial reference used for the data's horizontal (xy) coordinates.
 *
 * See: [https://developers.arcgis.com/rest/services-reference/using-spatial-references.htm](https://developers.arcgis.com/rest/services-reference/using-spatial-references.htm)
 *
 * By default, Urban uses a gravity-related height model for the data's vertical (z) coordinate.
 *
 * See: [https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-HeightModelInfo.html#heightModel](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-HeightModelInfo.html#heightModel).
 *
 * Other vertical spatial references are currently not supported in Urban.
 */
export type SpatialReference = {
  __typename?: 'SpatialReference';
  /**
   * Well-known ID (wkid) is a unique number assigned to a coordinate system.
   *
   * This field returns the most recent and official identifier for the coordinate system (if there is one). It may or may not be the same as the identifier assigned to the spatial reference during its creation.
   */
  wkid: Scalars['Int'];
};

export type SpatialReferenceInput = {
  wkid: Scalars['Int'];
};

/**
 * **Intersects**: Returns results that intersect the filter geometry.
 * **EnvelopeIntersects**: Returns results that intersect the envelope (or extent) of the filter geometry.
 * **Contains**: Returns results that are completely contained by the filter geometry.
 * **Crosses**: Returns results when the interior of a filter geometry comes into contact with the interior or boundary of a geometry. In other words, the geometries share some interior area, but not all interior area.
 * **Overlaps**: Returns results that overlap the filter geometry. Only features of the same geometry can be compared.
 * **Touches**: Returns results that touch the filter geometry. The boundaries of the geometries intersect, but not their interiors.
 * **Within**: Returns results that completely contain the filter geometry. In other words, the filter geometry is completely within the features in the layer view. It is the opposite of contains.
 */
export enum SpatialRelationship {
  Contains = 'Contains',
  Crosses = 'Crosses',
  EnvelopeIntersects = 'EnvelopeIntersects',
  Intersects = 'Intersects',
  Overlaps = 'Overlaps',
  Touches = 'Touches',
  Within = 'Within'
}

/** A status type is used to describe the status of a project. */
export type StatusType = {
  __typename?: 'StatusType';
  attributes: StatusTypeAttributes;
};

/** Attributes of the status type. */
export type StatusTypeAttributes = {
  __typename?: 'StatusTypeAttributes';
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: Maybe<Scalars['String']>;
  /** Description of the status. */
  Description?: Maybe<Scalars['String']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /** Reference to the icon of the status that contains an image path and a color. */
  Icon: StatusTypeIcon;
  /** Label of the status. */
  Label: Scalars['String'];
  /** Order of the status. */
  StatusOrder?: Maybe<Scalars['Int']>;
};

export type StatusTypeFilterInput = {
  globalIDs?: InputMaybe<Array<Scalars['GlobalID']>>;
};

export enum StatusTypeIcon {
  ProjectApprovedBlue = 'ProjectApprovedBlue',
  ProjectApprovedCyan = 'ProjectApprovedCyan',
  ProjectApprovedGreen = 'ProjectApprovedGreen',
  ProjectApprovedPurple = 'ProjectApprovedPurple',
  ProjectApprovedRed = 'ProjectApprovedRed',
  ProjectApprovedYellow = 'ProjectApprovedYellow',
  ProjectConstructionCompleteBlue = 'ProjectConstructionCompleteBlue',
  ProjectConstructionCompleteCyan = 'ProjectConstructionCompleteCyan',
  ProjectConstructionCompleteGreen = 'ProjectConstructionCompleteGreen',
  ProjectConstructionCompletePurple = 'ProjectConstructionCompletePurple',
  ProjectConstructionCompleteRed = 'ProjectConstructionCompleteRed',
  ProjectConstructionCompleteYellow = 'ProjectConstructionCompleteYellow',
  ProjectLetterOfIntentBlue = 'ProjectLetterOfIntentBlue',
  ProjectLetterOfIntentCyan = 'ProjectLetterOfIntentCyan',
  ProjectLetterOfIntentGreen = 'ProjectLetterOfIntentGreen',
  ProjectLetterOfIntentPurple = 'ProjectLetterOfIntentPurple',
  ProjectLetterOfIntentRed = 'ProjectLetterOfIntentRed',
  ProjectLetterOfIntentYellow = 'ProjectLetterOfIntentYellow',
  ProjectPrefileBlue = 'ProjectPrefileBlue',
  ProjectPrefileCyan = 'ProjectPrefileCyan',
  ProjectPrefileGreen = 'ProjectPrefileGreen',
  ProjectPrefilePurple = 'ProjectPrefilePurple',
  ProjectPrefileRed = 'ProjectPrefileRed',
  ProjectPrefileYellow = 'ProjectPrefileYellow',
  ProjectUnderConstruction2Blue = 'ProjectUnderConstruction2Blue',
  ProjectUnderConstruction2Cyan = 'ProjectUnderConstruction2Cyan',
  ProjectUnderConstruction2Green = 'ProjectUnderConstruction2Green',
  ProjectUnderConstruction2Purple = 'ProjectUnderConstruction2Purple',
  ProjectUnderConstruction2Red = 'ProjectUnderConstruction2Red',
  ProjectUnderConstruction2Yellow = 'ProjectUnderConstruction2Yellow',
  ProjectUnderConstructionBlue = 'ProjectUnderConstructionBlue',
  ProjectUnderConstructionCyan = 'ProjectUnderConstructionCyan',
  ProjectUnderConstructionGreen = 'ProjectUnderConstructionGreen',
  ProjectUnderConstructionPurple = 'ProjectUnderConstructionPurple',
  ProjectUnderConstructionRed = 'ProjectUnderConstructionRed',
  ProjectUnderConstructionYellow = 'ProjectUnderConstructionYellow',
  ProjectUnderReviewBlue = 'ProjectUnderReviewBlue',
  ProjectUnderReviewCyan = 'ProjectUnderReviewCyan',
  ProjectUnderReviewGreen = 'ProjectUnderReviewGreen',
  ProjectUnderReviewPurple = 'ProjectUnderReviewPurple',
  ProjectUnderReviewRed = 'ProjectUnderReviewRed',
  ProjectUnderReviewYellow = 'ProjectUnderReviewYellow',
  ProjectWrenchBlue = 'ProjectWrenchBlue',
  ProjectWrenchCyan = 'ProjectWrenchCyan',
  ProjectWrenchGreen = 'ProjectWrenchGreen',
  ProjectWrenchPurple = 'ProjectWrenchPurple',
  ProjectWrenchRed = 'ProjectWrenchRed',
  ProjectWrenchYellow = 'ProjectWrenchYellow',
  Unknown = 'Unknown'
}

export type StatusTypesMeta = FeaturesMeta & {
  __typename?: 'StatusTypesMeta';
  /** The number of status types. */
  count?: Maybe<Scalars['Int']>;
};

/** Street-view configuration. */
export type Streetview = {
  __typename?: 'Streetview';
  /** Mapillary API key to access the street-view mode. */
  apiKey: Scalars['String'];
  /** Mapillary image filter key to filter images by username. */
  filterKey?: Maybe<Scalars['String']>;
  /** The street-view image provider. */
  provider: StreetviewProvider;
};

export type StreetviewInput = {
  /** Mapillary API key to access the street-view mode. */
  apiKey: Scalars['String'];
  /** Mapillary image filter key to filter images by username. */
  filterKey?: InputMaybe<Scalars['String']>;
  /** The street-view image provider. */
  provider: StreetviewProvider;
};

/** **MAPILLARY**: Mapillary street-view image provider. */
export enum StreetviewProvider {
  Mapillary = 'MAPILLARY'
}

/** OverlayType configuration for SubstructureDepthMax. */
export type SubstructureDepthMax = {
  __typename?: 'SubstructureDepthMax';
  /** Overlay method that gets applied to the parcel zoning parameters when redeveloping. */
  method: OverlayTypeMethod;
};

export type SubstructureDepthMaxInput = {
  /** Overlay method that gets applied to the parcel zoning parameters when redeveloping. */
  method?: OverlayTypeMethod;
};

/** A suitability model stores settings such as suitability criteria belonging to the model and the name of the suitability model. */
export type SuitabilityModel = {
  __typename?: 'SuitabilityModel';
  attributes: SuitabilityModelAttributes;
  criteria: Array<Criterion>;
};

/** Attributes of the suitability model. */
export type SuitabilityModelAttributes = {
  __typename?: 'SuitabilityModelAttributes';
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: Maybe<Scalars['String']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /** Name of the model. */
  ModelName: Scalars['String'];
  /** If `true`, the model is proposed in the plan. */
  Proposal: Scalars['Boolean'];
  /** ID of the urban event (plan) the model belongs to. */
  UrbanEventID?: Maybe<Scalars['GlobalID']>;
};

export type SuitabilityModelFilterInput = {
  globalIDs?: InputMaybe<Array<Scalars['GlobalID']>>;
};

export type SuitabilityModelsMeta = FeaturesMeta & {
  __typename?: 'SuitabilityModelsMeta';
  /** The number of suitability models. */
  count?: Maybe<Scalars['Int']>;
};

/**
 * **Small**: 200px wide.
 * **Medium**: 400px wide.
 * **Large**: 800px wide.
 * **Huge**: 2400px wide.
 */
export enum ThumbnailSize {
  Huge = 'Huge',
  Large = 'Large',
  Medium = 'Medium',
  Small = 'Small'
}

/** JSON object containing information about setback values. */
export type Tier = {
  __typename?: 'Tier';
  /** Information about setback values for different parcel edge orientations and adjacencies. */
  setbacks: TierSetbacks;
  /** The start height of the tier in [m]. */
  startHeight: Scalars['Float'];
};

export type TierInput = {
  /** Information about setback values for different parcel edge orientations and adjacencies. */
  setbacks: TierSetbacksInput;
  /**
   * The start height of the tier in [m].
   *
   * Minimum value: 0
   * Maximum value: 0
   */
  startHeight: Scalars['Float'];
};

/** Information about setback values for different parcel edge orientations and adjacencies. */
export type TierSetbacks = {
  __typename?: 'TierSetbacks';
  /** Minimum allowed setbacks at the Front edge of a parcel. */
  front: FrontSetback;
  /** Minimum allowed setbacks at the Rear edge of a parcel. */
  rear: RearSetback;
  /** Minimum allowed setbacks at the Side edge of a parcel. */
  side: SideSetback;
};

export type TierSetbacksInput = {
  /** Minimum allowed setbacks at the Front edge of a parcel. */
  front: FrontSetbackInput;
  /** Minimum allowed setbacks at the Rear edge of a parcel. */
  rear: RearSetbackInput;
  /** Minimum allowed setbacks at the Side edge of a parcel. */
  side: SideSetbackInput;
};

/** OverlayType configuration for Tiers */
export type Tiers = {
  __typename?: 'Tiers';
  /** Overlay method that gets applied to the parcel tiers and setbacks when redeveloping. */
  method?: Maybe<OverlayTypeMethodTiers>;
};

export type TiersInput = {
  /** Overlay method that gets applied to the parcel tiers and setbacks when redeveloping. */
  method?: InputMaybe<OverlayTypeMethodTiers>;
};

/**
 * **Number**: No unit type.
 * **NumberPerDay**: Unit of type number per day [/d].
 * **Length**: Unit of type length [m].
 * **Area**: Unit of type area [m2].
 * **LandArea**: Unit of type area [m2].
 * **Density**: Unit of type density [/m2].
 * **LandDensity**: Unit of type density [/m2].
 * **Concentration**: Unit of type concentration.
 * **Angle**: Unit of type angle [degree].
 * **EnergyPerDay**: Unit of type energy per day [W/d].
 * **Power**: Unit of type power [W].
 * **MassPerDay**: Unit of type mass per day [kg/d].
 * **Mass**: Unit of type mass [kg].
 * **VolumePerDay**: Unit of type volume per day [m3/d].
 * **Volume**: Unit of type volume [m3].
 */
export enum UnitType {
  Angle = 'Angle',
  Area = 'Area',
  Concentration = 'Concentration',
  Density = 'Density',
  EnergyPerDay = 'EnergyPerDay',
  LandArea = 'LandArea',
  LandDensity = 'LandDensity',
  Length = 'Length',
  Mass = 'Mass',
  MassPerDay = 'MassPerDay',
  Number = 'Number',
  NumberPerDay = 'NumberPerDay',
  Power = 'Power',
  Volume = 'Volume',
  VolumePerDay = 'VolumePerDay'
}

/** Input attributes for updating an existing branch. */
export type UpdateBranchAttributesInput = {
  /**
   * Name of the branch.
   *
   * Minimum length: 1
   * Maximum length: 200
   */
  BranchName?: InputMaybe<Scalars['String']>;
  /** The order of the branch. */
  BranchOrder?: InputMaybe<Scalars['Int']>;
  /**
   * Portal item id of a web scene whose layers are shown as design context layers when editing scenarios (only visible in the scenario).
   *
   * Maximum length: 32
   */
  ContextWebsceneItemId?: InputMaybe<Scalars['PortalItemId']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /**
   * Description for the branch shown in the scenario switcher.
   *
   * Maximum length: 700
   */
  Description?: InputMaybe<Scalars['String']>;
  /** If `true`, the branch represents existing conditions. */
  Existing?: InputMaybe<Scalars['Boolean']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /** If `true`, the branch cannot be edited by others. */
  Locked?: InputMaybe<Scalars['Boolean']>;
  /** A polygon masking out existing buildings and existing trees. */
  MaskingGeometry?: InputMaybe<PolygonInput>;
  /** Metric values stored on a branch for projects and public plans. */
  MetricValues?: InputMaybe<Array<BranchMetricValueInput>>;
  /** Modal split coefficients. */
  ModalSplit?: InputMaybe<ModalSplitInput>;
  /** ArcGIS account username of the user who has created the branch. */
  OwnerName?: InputMaybe<Scalars['String']>;
  /** ID of the urban event (plan or project) the branch (scenario) belongs to. */
  UrbanEventID?: InputMaybe<Scalars['GlobalID']>;
  /**
   * Portal item id of a web scene whose layers are added as design visualization. The portal item can also be a single layer (e.g., SceneLayer).
   *
   * Maximum length: 32
   */
  WebsceneItemId?: InputMaybe<Scalars['PortalItemId']>;
};

export type UpdateBranchInput = {
  attributes: UpdateBranchAttributesInput;
};

/** Input attributes for updating an existing building type. */
export type UpdateBuildingTypeAttributesInput = {
  /** List of parcel edges that the building is aligned to. */
  Alignment?: InputMaybe<Array<BuildingAlignment>>;
  /** Building parts above ground. */
  BuildingParts?: InputMaybe<Array<BuildingPartInput>>;
  /** Building parts below ground. */
  BuildingSubParts?: InputMaybe<Array<BuildingPartInput>>;
  /**
   * Name of the building type.
   *
   * Minimum length: 1
   * Maximum length: 50
   */
  BuildingTypeName?: InputMaybe<Scalars['String']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /**
   * Minimal floor area for the generated floors in [m2].
   *
   * Minimum value: 0
   */
  FloorAreaMin?: InputMaybe<Scalars['Float']>;
  /**
   * Maximum length of the generated footprint in [m].
   *
   * Minimum value: 0
   */
  FootprintLengthMax?: InputMaybe<Scalars['Float']>;
  /** Shape of the generated floors. */
  FootprintShape?: InputMaybe<FootprintShape>;
  /**
   * Maximum width of the generated footprint in [m].
   *
   * Minimum value: 0
   */
  FootprintWidthMax?: InputMaybe<Scalars['Float']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /**
   * Number of dwelling units per area for parcels with multiple buildings in [units/m2].
   *
   * Minimum value: 0
   */
  MultipleBuildingsDensity?: InputMaybe<Scalars['Float']>;
  /**
   * Distance between dwelling units for parcels with multiple buildings in [m].
   *
   * Minimum value: 0
   */
  MultipleBuildingsDistance?: InputMaybe<Scalars['Float']>;
  /** If `true`, multiple buildings per parcel area enabled. */
  MultipleBuildingsEnabled?: InputMaybe<Scalars['Boolean']>;
  /** If `true`, the building type is proposed in the plan. */
  Proposal?: InputMaybe<Scalars['Boolean']>;
  /**
   * Minimum length of the generated building segments in [m].
   *
   * Minimum value: 0
   */
  SegmentLengthMin?: InputMaybe<Scalars['Float']>;
  /**
   * Minimum width of the generated building segments in [m].
   *
   * Minimum value: 0
   */
  SegmentWidthMin?: InputMaybe<Scalars['Float']>;
  /**
   * Index of the part where tower massing starts.
   *
   * Minimum value: 0
   */
  TowerIndex?: InputMaybe<Scalars['Int']>;
  /** ID of the urban event (plan) the building type belongs to. */
  UrbanEventID?: InputMaybe<Scalars['GlobalID']>;
};

export type UpdateBuildingTypeInput = {
  attributes: UpdateBuildingTypeAttributesInput;
};

/** Input attributes for updating an existing criterion. */
export type UpdateCriterionAttributesInput = {
  /** Name of the criterion. */
  CriterionName?: InputMaybe<Scalars['String']>;
  /** Type of the criterion. */
  CriterionType?: InputMaybe<CriterionType>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /** Whether the criterion is enabled in the calculation. When disabled, this criterion will not count towards the final score. */
  Enabled?: InputMaybe<Scalars['Boolean']>;
  /** Portal item id of an external layer. */
  ExternalLayerItemId?: InputMaybe<Scalars['String']>;
  /** Attribute field to be used for the criterion. */
  Field?: InputMaybe<Scalars['String']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /** GlobalID of the model. */
  ModelID?: InputMaybe<Scalars['GlobalID']>;
  /** Whether reclassification is enabled on this criterion. When enabled, numeric values will be reclassified with ReclassificationIntervals, while string and null values will be reclassified with ReclassificationMappings. When disabled, scores will be copied directly from the input features. */
  ReclassificationEnabled?: InputMaybe<Scalars['Boolean']>;
  /** Reclassification intervals used in this criterion to reclassify numeric values. */
  ReclassificationIntervals?: InputMaybe<Array<ReclassificationIntervalInput>>;
  /** Map of (value, score) pairs used in this criterion to reclassify string and null values to a score. */
  ReclassificationMappings?: InputMaybe<Array<ReclassificationMappingInput>>;
  /** Sampling geometry used to extract the criterion. */
  SamplingGeometry?: InputMaybe<SamplingGeometry>;
  /** When sampling values to calculate the final score, a parcel might match multiple input features resulting in multiple records. This field configures the method to combine multiple records on one parcel. */
  SamplingMethod?: InputMaybe<SamplingMethod>;
  /** ID of the urban event (plan) the criteria belongs to. */
  UrbanEventID?: InputMaybe<Scalars['GlobalID']>;
  /**
   * Weight of the criterion.
   *
   * Minimum value: 0
   */
  Weight?: InputMaybe<Scalars['Float']>;
};

export type UpdateCriterionInput = {
  attributes: UpdateCriterionAttributesInput;
};

/** Input attributes for updating an existing feedback category. */
export type UpdateFeedbackCategoryAttributesInput = {
  /** Order of the category. */
  CategoryOrder?: InputMaybe<Scalars['Int']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /** Description of the category. */
  Description?: InputMaybe<Scalars['String']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /** Reference to the icon of the category that contains an image path and a color. */
  Icon?: InputMaybe<FeedbackCategoryIcon>;
  /**
   * Label of the category.
   *
   * Minimum length: 1
   * Maximum length: 20
   */
  Label?: InputMaybe<Scalars['String']>;
};

export type UpdateFeedbackCategoryInput = {
  attributes: UpdateFeedbackCategoryAttributesInput;
};

/** Input attributes for updating an existing indicator. */
export type UpdateIndicatorAttributesInput = {
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /**
   * Portal item id of an ArcGIS Dashboard which will be embedded in the detail card of the indicator.
   *
   * Maximum length: 32
   */
  DashboardItemId?: InputMaybe<Scalars['PortalItemId']>;
  /** Description of the indicator (markdown enabled). */
  Description?: InputMaybe<Scalars['String']>;
  /** End date of the lifespan of the indicator. */
  EndDate?: InputMaybe<Scalars['Timestamp']>;
  /** If `true`, the indicator is featured and appears at the top of the list in the overview. */
  Featured?: InputMaybe<Scalars['Boolean']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /**
   * Name of the indicator.
   *
   * Minimum length: 1
   */
  IndicatorName?: InputMaybe<Scalars['String']>;
  /** Type of the indicator. */
  IndicatorType?: InputMaybe<IndicatorType>;
  /** Configuration of which layers are shown together with indicators and how. */
  LayerSettings?: InputMaybe<LayerSettingsInput>;
  /** If `true`, the indicator cannot be edited by others. */
  Locked?: InputMaybe<Scalars['Boolean']>;
  /** ArcGIS account username of the user who has created the indicator. */
  OwnerName?: InputMaybe<Scalars['String']>;
  /** Start date of the lifespan of the indicator. */
  StartDate?: InputMaybe<Scalars['Timestamp']>;
  /**
   * URL to a webpage. Shown in the detail card of the indicator.
   *
   * Maximum length: 255
   */
  WebpageUrl?: InputMaybe<Scalars['String']>;
  /**
   * Portal item id of a web scene whose layers are added as visualization. The portal item can also be a single layer (e.g., SceneLayer).
   *
   * Maximum length: 32
   */
  WebsceneItemId?: InputMaybe<Scalars['PortalItemId']>;
};

export type UpdateIndicatorInput = {
  attributes: UpdateIndicatorAttributesInput;
};

/** Input attributes for updating an existing lod1 building. */
export type UpdateLod1BuildingAttributesInput = {
  /** ID of the branch the building belongs to. */
  BranchID?: InputMaybe<Scalars['GlobalID']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /** The extrusion height of the building in [m]. */
  Height?: InputMaybe<Scalars['Float']>;
};

export type UpdateLod1BuildingInput = {
  attributes: UpdateLod1BuildingAttributesInput;
  /** 3d geometry (xyz coordinates) */
  geometry?: InputMaybe<PolygonInput>;
};

/** Input attributes for updating an existing metric. */
export type UpdateMetricAttributesInput = {
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /**
   * Description of the metric.
   *
   * Maximum length: 700
   */
  Description?: InputMaybe<Scalars['String']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /** The x coordinate of the metric node on the metrics dependency graph. */
  GraphX?: InputMaybe<Scalars['Float']>;
  /** The y coordinate of the metric node on the metrics dependency graph. */
  GraphY?: InputMaybe<Scalars['Float']>;
  /**
   * Name of the metric.
   *
   * Minimum length: 1
   * Maximum length: 100
   */
  MetricName?: InputMaybe<Scalars['String']>;
  /** The rounding method to use when rounding this metric. */
  NumberRoundingMethod?: InputMaybe<NumberRoundingMethod>;
  /** Operation of the metric on how to aggregate the source metrics. */
  Operation?: InputMaybe<Operation>;
  /** If `true`, the metric is proposed in the plan. */
  Proposal?: InputMaybe<Scalars['Boolean']>;
  /** Unit type of the metric. */
  UnitType?: InputMaybe<UnitType>;
  /** ID of the urban event (plan or project) the metric belongs to. */
  UrbanEventID?: InputMaybe<Scalars['GlobalID']>;
};

export type UpdateMetricInput = {
  attributes: UpdateMetricAttributesInput;
};

/** Input attributes for updating an existing metric source. */
export type UpdateMetricSourceAttributesInput = {
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /** ID of the metric that the metric source belongs to. */
  MetricID?: InputMaybe<Scalars['GlobalID']>;
  /** ID of the metric that the source points to if the source type is 'Metric'. Otherwise, this field is ignored. */
  SourceMetricID?: InputMaybe<Scalars['GlobalID']>;
  /**
   * Name of the metric source if the source type is anything other than 'Metric'. If source type is 'Metric', this field is ignored.
   *
   * Maximum length: 100
   */
  SourceName?: InputMaybe<Scalars['String']>;
  /** Type of the metric source. */
  SourceType?: InputMaybe<SourceType>;
  /** ID of the urban event (plan) the metric source belongs to. */
  UrbanEventID?: InputMaybe<Scalars['GlobalID']>;
  /** Indicates whether the weight is applied as an inverse (1/n) in the calculation or as the actual number (n). */
  WeightInverted?: InputMaybe<Scalars['Boolean']>;
  /**
   * Name of the parameter that is used as a weight. If type is 'Constant', this field is ignored.
   *
   * Maximum length: 100
   */
  WeightName?: InputMaybe<Scalars['String']>;
  /** Type of weight that is used for the metric calculation. */
  WeightType?: InputMaybe<WeightType>;
  /** Value for the parameter if the weight type is 'Constant'. */
  WeightValue?: InputMaybe<Scalars['Float']>;
};

export type UpdateMetricSourceInput = {
  attributes: UpdateMetricSourceAttributesInput;
};

/** Input attributes for updating an existing metric value. */
export type UpdateMetricValueAttributesInput = {
  /** ID of the branch the metric value belongs to. */
  BranchID?: InputMaybe<Scalars['GlobalID']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /** ID of the metric that the value is saved for to retrieve the unit type and name. */
  MetricID?: InputMaybe<Scalars['GlobalID']>;
  /** Metric value that is stored on the point. */
  Value?: InputMaybe<Scalars['Float']>;
};

export type UpdateMetricValueInput = {
  attributes: UpdateMetricValueAttributesInput;
  /** 3d geometry (xyz coordinates) */
  geometry?: InputMaybe<PointInput>;
};

/** Input attributes for updating an existing overlay. */
export type UpdateOverlayAttributesInput = {
  /** ID of the branch the overlay belongs to. */
  BranchID?: InputMaybe<Scalars['GlobalID']>;
  /**
   * Maximum allowed coverage in percentage.
   *
   * Minimum value: 0
   * Maximum value: 1
   */
  CoverageMax?: InputMaybe<Scalars['Float']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /** Description of the overlay. */
  Description?: InputMaybe<Scalars['String']>;
  /**
   * Maximum allowed dwelling units per area in [units/m2].
   *
   * Minimum value: 0
   * Maximum value: 200000
   */
  DwellingUnitsPerAreaMax?: InputMaybe<Scalars['Float']>;
  /**
   * Maximum allowed floor area ratio.
   *
   * Minimum value: 0
   * Maximum value: 500
   */
  FARMax?: InputMaybe<Scalars['Float']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /**
   * Maximum allowed height in [m].
   *
   * Minimum value: 0
   * Maximum value: 1000
   */
  HeightMax?: InputMaybe<Scalars['Float']>;
  /** Label of the overlay. */
  Label?: InputMaybe<Scalars['String']>;
  /**
   * Maximum allowed number of floors.
   *
   * Minimum value: 0
   * Maximum value: 200
   */
  NumFloorsMax?: InputMaybe<Scalars['Int']>;
  /** ID of the overlay type the overlay belongs to. */
  OverlayTypeID?: InputMaybe<Scalars['GlobalID']>;
  /** Array containing skyplanes. */
  Skyplanes?: InputMaybe<Array<SkyplaneInput>>;
  /**
   * Maximum allowed substructure depth in [m].
   *
   * Minimum value: 0
   * Maximum value: 1000
   */
  SubstructureDepthMax?: InputMaybe<Scalars['Float']>;
  /** An array of tiers and their allowed setbacks in [m]. */
  Tiers?: InputMaybe<Array<TierInput>>;
};

export type UpdateOverlayInput = {
  attributes: UpdateOverlayAttributesInput;
  /** 2d geometry (xy coordinates) */
  geometry?: InputMaybe<PolygonInput>;
};

/** Input attributes for updating an existing overlay type. */
export type UpdateOverlayTypeAttributesInput = {
  /** Hex color of the zone type or overlay. */
  Color?: InputMaybe<Scalars['Color']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /** JSON object containing the configuration of the overlay types. */
  FieldsConfig?: InputMaybe<FieldsConfigInput>;
  /** Fill style of the zone type or overlay. */
  FillStyle?: InputMaybe<FillStyle>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /** Label shown on the overlay geometry. */
  Label?: InputMaybe<OverlayTypeLabel>;
  /** Outline style of the zone type or overlay. */
  OutlineStyle?: InputMaybe<OutlineStyle>;
  /** Name of the overlay type. */
  OverlayTypeName?: InputMaybe<Scalars['String']>;
  /** The order of the overlay type. Defines the order in which the overlay types are displayed in the legend (and applied if relevant). */
  OverlayTypeOrder?: InputMaybe<Scalars['Int']>;
  /** If `true`, the overlay type is proposed in the plan. */
  Proposal?: InputMaybe<Scalars['Boolean']>;
  /** ID of the urban event (plan) the overlay type belongs to. */
  UrbanEventID?: InputMaybe<Scalars['GlobalID']>;
};

export type UpdateOverlayTypeInput = {
  attributes: UpdateOverlayTypeAttributesInput;
};

/** Input attributes for updating an existing parcel. */
export type UpdateParcelAttributesInput = {
  /** ID of the branch the parcel belongs to. */
  BranchID?: InputMaybe<Scalars['GlobalID']>;
  /** ID of the building type the parcel is assigned to for the generation of future buildings. */
  BuildingTypeID?: InputMaybe<Scalars['GlobalID']>;
  /**
   * Maximum allowed coverage in percentage.
   *
   * Minimum value: 0
   * Maximum value: 1
   */
  CoverageMax?: InputMaybe<Scalars['Float']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /** If `true`, the parcel is being demolished. */
  Demolish?: InputMaybe<Scalars['Boolean']>;
  /** If `true`, the parcel is being demolished. */
  Develop?: InputMaybe<Scalars['Boolean']>;
  /** The type of development on the parcel. */
  DevelopmentType?: InputMaybe<DevelopmentType>;
  /**
   * Maximum allowed dwelling units per area in [units/m2].
   *
   * Minimum value: 0
   * Maximum value: 200000
   */
  DwellingUnitsPerAreaMax?: InputMaybe<Scalars['Float']>;
  /** An array of parcel edges and their edge information. */
  EdgeInfos?: InputMaybe<Array<EdgeInfoInput>>;
  /**
   * Maximum allowed floor area ratio.
   *
   * Minimum value: 0
   * Maximum value: 500
   */
  FARMax?: InputMaybe<Scalars['Float']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /**
   * Maximum allowed height in [m].
   *
   * Minimum value: 0
   * Maximum value: 1000
   */
  HeightMax?: InputMaybe<Scalars['Float']>;
  /**
   * Maximum allowed number of floors.
   *
   * Minimum value: 0
   * Maximum value: 200
   */
  NumFloorsMax?: InputMaybe<Scalars['Int']>;
  /** If `true`, zoning envelopes are generated for the parcel. */
  ShowZoningEnvelopes?: InputMaybe<Scalars['Boolean']>;
  /** Array containing skyplanes. */
  Skyplanes?: InputMaybe<Array<SkyplaneInput>>;
  /**
   * Maximum allowed substructure depth in [m].
   *
   * Minimum value: 0
   * Maximum value: 1000
   */
  SubstructureDepthMax?: InputMaybe<Scalars['Float']>;
  /**
   * General score of how suitable a parcel is for redevelopment.
   *
   * Minimum value: 0
   * Maximum value: 10
   */
  SuitabilityScore?: InputMaybe<Scalars['Float']>;
  /** Additional value for the suitability of parcels for redevelopment. */
  SuitabilityValue1?: InputMaybe<Scalars['Float']>;
  /** Additional value for the suitability of parcels for redevelopment. */
  SuitabilityValue2?: InputMaybe<Scalars['Float']>;
  /** Additional value for the suitability of parcels for redevelopment. */
  SuitabilityValue3?: InputMaybe<Scalars['Float']>;
  /** An array of tiers and their allowed setbacks in [m]. */
  Tiers?: InputMaybe<Array<TierInput>>;
};

export type UpdateParcelInput = {
  attributes: UpdateParcelAttributesInput;
  /** 2d geometry (xy coordinates) */
  geometry?: InputMaybe<PolygonInput>;
};

/** Input attributes for updating an existing plan. */
export type UpdatePlanAttributesInput = {
  /** Address of the urban event. */
  Address?: InputMaybe<Scalars['String']>;
  /**
   * Portal item id of a web scene whose layers are shown as design context layers when editing a plan (visible for all scenarios).
   *
   * Maximum length: 32
   */
  ContextWebsceneItemId?: InputMaybe<Scalars['PortalItemId']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /** Description of the urban event (markdown enabled). */
  Description?: InputMaybe<Scalars['String']>;
  /** End date of the urban event. */
  EndDate?: InputMaybe<Scalars['Timestamp']>;
  /**
   * Name of the urban event.
   *
   * Minimum length: 1
   */
  EventName?: InputMaybe<Scalars['String']>;
  /** If `true`, the urban event is featured and appears at the top of the list in the overview. */
  Featured?: InputMaybe<Scalars['Boolean']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /** If `true`, the urban event cannot be edited by others. */
  Locked?: InputMaybe<Scalars['Boolean']>;
  /** Settings for the charts in the metrics dashboard. */
  MetricsDashboardCharts?: InputMaybe<Array<MetricsDashboardChartInput>>;
  /** ArcGIS account username of the user who created the urban event. */
  OwnerName?: InputMaybe<Scalars['String']>;
  /** The planning method of the plan. */
  PlanningMethod?: InputMaybe<UrbanEventPlanningMethod>;
  /** If `true`, public comments are visible and adding new comments is enabled until the public feedback end date. */
  PublicFeedbackEnabled?: InputMaybe<Scalars['Boolean']>;
  /** The date until new feedback comments can be added. */
  PublicFeedbackEndDate?: InputMaybe<Scalars['Timestamp']>;
  /**
   * Start date of the urban event.
   *
   * Minimum value: 0
   */
  StartDate?: InputMaybe<Scalars['Timestamp']>;
  /** ID of the status type associated with the urban event. */
  Status?: InputMaybe<Scalars['GlobalID']>;
  /** Image (blob) to be displayed in the overview card. */
  Thumbnail?: InputMaybe<Scalars['String']>;
  /**
   * URL to a webpage. Shown in the detail card of the urban event.
   *
   * Maximum length: 255
   */
  WebpageUrl?: InputMaybe<Scalars['String']>;
};

export type UpdatePlanInput = {
  attributes: UpdatePlanAttributesInput;
  /** 2d geometry (xy coordinates) */
  geometry?: InputMaybe<PolygonInput>;
};

/** Input attributes for updating an existing point symbol. */
export type UpdatePointSymbolAttributesInput = {
  /** ID of the branch the symbol belongs to. */
  BranchID?: InputMaybe<Scalars['GlobalID']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /** The depth of the symbol in [m]. */
  Depth?: InputMaybe<Scalars['Float']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /** The heading of the symbol in [deg]. */
  Heading?: InputMaybe<Scalars['Float']>;
  /** The height of the symbol in [m]. */
  Height?: InputMaybe<Scalars['Float']>;
  /** URL of the symbol. */
  ResourceHref?: InputMaybe<Scalars['String']>;
  /** Style of the symbol. */
  SymbolStyle?: InputMaybe<PointSymbolStyle>;
  /** The width of the symbol in [m]. */
  Width?: InputMaybe<Scalars['Float']>;
};

export type UpdatePointSymbolInput = {
  attributes: UpdatePointSymbolAttributesInput;
  /** 2d geometry (xy coordinates) */
  geometry?: InputMaybe<PointInput>;
};

/** Input attributes for updating an existing polygon symbol. */
export type UpdatePolygonSymbolAttributesInput = {
  /** ID of the branch the symbol belongs to. */
  BranchID?: InputMaybe<Scalars['GlobalID']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /** Style of the symbol. */
  SymbolStyle?: InputMaybe<PolygonSymbolStyle>;
};

export type UpdatePolygonSymbolInput = {
  attributes: UpdatePolygonSymbolAttributesInput;
  /** 2d geometry (xy coordinates) */
  geometry?: InputMaybe<PolygonInput>;
};

/** Input attributes for updating an existing project. */
export type UpdateProjectAttributesInput = {
  /** Address of the urban event. */
  Address?: InputMaybe<Scalars['String']>;
  /**
   * Portal item id of a web scene whose layers are shown as design context layers when editing a plan (visible for all scenarios).
   *
   * Maximum length: 32
   */
  ContextWebsceneItemId?: InputMaybe<Scalars['PortalItemId']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /** Description of the urban event (markdown enabled). */
  Description?: InputMaybe<Scalars['String']>;
  /** End date of the urban event. */
  EndDate?: InputMaybe<Scalars['Timestamp']>;
  /**
   * Name of the urban event.
   *
   * Minimum length: 1
   */
  EventName?: InputMaybe<Scalars['String']>;
  /** If `true`, the urban event is featured and appears at the top of the list in the overview. */
  Featured?: InputMaybe<Scalars['Boolean']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /** If `true`, the urban event cannot be edited by others. */
  Locked?: InputMaybe<Scalars['Boolean']>;
  /** Settings for the charts in the metrics dashboard. */
  MetricsDashboardCharts?: InputMaybe<Array<MetricsDashboardChartInput>>;
  /** ArcGIS account username of the user who created the urban event. */
  OwnerName?: InputMaybe<Scalars['String']>;
  /** If `true`, public comments are visible and adding new comments is enabled until the public feedback end date. */
  PublicFeedbackEnabled?: InputMaybe<Scalars['Boolean']>;
  /** The date until new feedback comments can be added. */
  PublicFeedbackEndDate?: InputMaybe<Scalars['Timestamp']>;
  /**
   * Start date of the urban event.
   *
   * Minimum value: 0
   */
  StartDate?: InputMaybe<Scalars['Timestamp']>;
  /** ID of the status type associated with the urban event. */
  Status?: InputMaybe<Scalars['GlobalID']>;
  /** Image (blob) to be displayed in the overview card. */
  Thumbnail?: InputMaybe<Scalars['String']>;
  /**
   * URL to a webpage. Shown in the detail card of the urban event.
   *
   * Maximum length: 255
   */
  WebpageUrl?: InputMaybe<Scalars['String']>;
};

export type UpdateProjectInput = {
  attributes: UpdateProjectAttributesInput;
  /** 2d geometry (xy coordinates) */
  geometry?: InputMaybe<PolygonInput>;
};

/** Input attributes for updating an existing space. */
export type UpdateSpaceAttributesInput = {
  /** ID of the branch the space belongs to. */
  BranchID?: InputMaybe<Scalars['GlobalID']>;
  /** Building number the space belongs to. */
  BuildingNumber?: InputMaybe<Scalars['Int']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /**
   * Floor height of the space in [m].
   *
   * Minimum value: 0
   */
  FloorHeight?: InputMaybe<Scalars['Float']>;
  /** Floor number the space belongs to. */
  FloorNumber?: InputMaybe<Scalars['Int']>;
  /** If `true`, the space should be excluded from GFA / FAR calculations. */
  GFAIgnore?: InputMaybe<Scalars['Boolean']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /** Metric values stored on a space of public plans for visualization in the overview. This field is not populated and ignored for spaces in design plans. */
  MetricValues?: InputMaybe<Array<SpaceMetricValueInput>>;
  /**
   * Factor that reduces the total floor area used for capacity indicator calculations.
   *
   * Minimum value: 0
   * Maximum value: 1
   */
  NetAreaFactor?: InputMaybe<Scalars['Float']>;
  /** ID of the parcel the space belongs to. */
  ParcelID?: InputMaybe<Scalars['GlobalID']>;
  /**
   * Type of space.
   *
   * Maximum length: 100
   */
  SpaceType?: InputMaybe<SpaceType>;
  /** ID of the space use type that is assigned to the space. This is used for coloring the space, aggregating space use areas, and calculating capacity metrics. */
  SpaceUseTypeID?: InputMaybe<Scalars['GlobalID']>;
};

export type UpdateSpaceInput = {
  attributes: UpdateSpaceAttributesInput;
  /** 3d geometry (xyz coordinates) */
  geometry?: InputMaybe<PolygonInput>;
};

/** Input attributes for updating an existing space use type. */
export type UpdateSpaceUseTypeAttributesInput = {
  /**
   * Gross floor area taken up by an average household in the space use type, used for assessing the size of a dwelling unit in [m2].
   *
   * Minimum value: 0.01
   */
  AreaPerHousehold?: InputMaybe<Scalars['Float']>;
  /** Hex color of the space use type. */
  Color?: InputMaybe<Scalars['Color']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /**
   * Floor height of the space use type in [m].
   *
   * Minimum value: 0
   */
  FloorHeight?: InputMaybe<Scalars['Float']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /**
   * Label of the space use type.
   *
   * Minimum length: 1
   * Maximum length: 10
   */
  Label?: InputMaybe<Scalars['String']>;
  /** Metric parameter values (e.g., weights) for a Metric that uses spaces as a data source. */
  MetricParameters?: InputMaybe<Array<MetricParameterInput>>;
  /**
   * Factor that reduces the total floor area used for capacity indicator calculations.
   *
   * Minimum value: 0
   * Maximum value: 1
   */
  NetAreaFactor?: InputMaybe<Scalars['Float']>;
  /** If `true`, the space use type is proposed in the plan. */
  Proposal?: InputMaybe<Scalars['Boolean']>;
  /** If `true`, the space use type is residential and therefore can be used in dwelling units. */
  SingleUseOnly?: InputMaybe<Scalars['Boolean']>;
  /**
   * Name of the space use type.
   *
   * Minimum length: 1
   * Maximum length: 100
   */
  SpaceUseTypeName?: InputMaybe<Scalars['String']>;
  /** ID of the urban event (plan) the space use type belongs to. */
  UrbanEventID?: InputMaybe<Scalars['GlobalID']>;
};

export type UpdateSpaceUseTypeInput = {
  attributes: UpdateSpaceUseTypeAttributesInput;
};

/** Input attributes for updating an existing status type. */
export type UpdateStatusTypeAttributesInput = {
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /** Description of the status. */
  Description?: InputMaybe<Scalars['String']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /** Reference to the icon of the status that contains an image path and a color. */
  Icon?: InputMaybe<StatusTypeIcon>;
  /**
   * Label of the status.
   *
   * Minimum length: 1
   * Maximum length: 20
   */
  Label?: InputMaybe<Scalars['String']>;
  /** Order of the status. */
  StatusOrder?: InputMaybe<Scalars['Int']>;
};

export type UpdateStatusTypeInput = {
  attributes: UpdateStatusTypeAttributesInput;
};

/** Input attributes for updating an existing suitability model. */
export type UpdateSuitabilityModelAttributesInput = {
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /** Name of the model. */
  ModelName?: InputMaybe<Scalars['String']>;
  /** If `true`, the model is proposed in the plan. */
  Proposal?: InputMaybe<Scalars['Boolean']>;
  /** ID of the urban event (plan) the model belongs to. */
  UrbanEventID?: InputMaybe<Scalars['GlobalID']>;
};

export type UpdateSuitabilityModelInput = {
  attributes: UpdateSuitabilityModelAttributesInput;
};

export type UpdateUrbanModelConfigInput = {
  /** Portal item id of a web scene containing custom baselayers. */
  customBaselayersItemId?: InputMaybe<Scalars['PortalItemId']>;
  /** Portal item id of a Web Map containing a custom basemap. */
  customBasemapItemId?: InputMaybe<Scalars['PortalItemId']>;
  /** Portal item id of an Elevation Layer. */
  customElevationLayerItemId?: InputMaybe<Scalars['PortalItemId']>;
  /** Portal item id of a Web Map containing a custom satellite basemap. */
  customSatelliteBasemapItemId?: InputMaybe<Scalars['PortalItemId']>;
  /** Display configuration for types and layers. */
  displayConfig?: InputMaybe<DisplayConfigInput>;
  /** Portal item id of a Scene Layer containing existing buildings. */
  existingBuildingsLayerItemId?: InputMaybe<Scalars['PortalItemId']>;
  /** Portal item id of a Scene Layer containing existing buildings with realistic textures. */
  existingSatelliteBuildingsLayerItemId?: InputMaybe<Scalars['PortalItemId']>;
  /** Portal item id of a Scene Layer containing realistic existing trees to be used in imagery visualization. */
  existingSatelliteTreesLayerItemId?: InputMaybe<Scalars['PortalItemId']>;
  /** Portal item id of a Scene Layer containing existing trees. */
  existingTreesLayerItemId?: InputMaybe<Scalars['PortalItemId']>;
  /** The Hub annotation layer that contains public feedback. */
  hubAnnotationsLayerItemId?: InputMaybe<Scalars['PortalItemId']>;
  /** The initial camera viewpoint. */
  initialCamera?: InputMaybe<InitialCameraInput>;
  /** Type of visualization of the basemap and the existing buildings that is used on initial load of the application. */
  initialVisualizationStyle?: InputMaybe<InitialVisualizationStyle>;
  /** URL to the city logo. */
  logoUrl?: InputMaybe<Scalars['String']>;
  /** Name of the city. */
  name?: InputMaybe<Scalars['String']>;
  /** Street-view configuration. */
  streetview?: InputMaybe<StreetviewInput>;
};

/** Input attributes for updating an existing viewpoint. */
export type UpdateViewpointAttributesInput = {
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /**
   * Heading of the camera.
   *
   * Minimum value: 0
   * Maximum value: 360
   */
  Heading?: InputMaybe<Scalars['Float']>;
  /**
   * Tilt of the camera.
   *
   * Minimum value: 0
   * Maximum value: 180
   */
  Tilt?: InputMaybe<Scalars['Float']>;
  /** ID of the urban event (plan or project) the viewpoint belongs to. */
  UrbanEventID?: InputMaybe<Scalars['GlobalID']>;
  /**
   * Name of the viewpoint.
   *
   * Minimum length: 1
   */
  ViewpointName?: InputMaybe<Scalars['String']>;
  /** The order of the viewpoint. */
  ViewpointOrder?: InputMaybe<Scalars['Int']>;
};

export type UpdateViewpointInput = {
  attributes: UpdateViewpointAttributesInput;
  /** 3d geometry (xyz coordinates) */
  geometry?: InputMaybe<PointInput>;
};

/** Input attributes for updating an existing zone. */
export type UpdateZoneAttributesInput = {
  /** ID of the branch the zone belongs to. */
  BranchID?: InputMaybe<Scalars['GlobalID']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /** The planning horizon of the zone. */
  PlanningHorizon?: InputMaybe<ZonePlanningHorizon>;
  /** The planning method of the zone. */
  PlanningMethod?: InputMaybe<ZonePlanningMethod>;
  /** ID of the zone type the zone is assigned to. */
  ZoneTypeID?: InputMaybe<Scalars['GlobalID']>;
};

export type UpdateZoneInput = {
  attributes: UpdateZoneAttributesInput;
  /** 2d geometry (xy coordinates) */
  geometry?: InputMaybe<PolygonInput>;
};

/** Input attributes for updating an existing zone type. */
export type UpdateZoneTypeAttributesInput = {
  /** An array of allowed space use types and their distributions. */
  AllowedSpaceUseTypes?: InputMaybe<Array<AllowedSpaceUseTypeInput>>;
  /** Hex color of the zone type or overlay. */
  Color?: InputMaybe<Scalars['Color']>;
  /**
   * Maximum allowed coverage in percentage.
   *
   * Minimum value: 0
   * Maximum value: 1
   */
  CoverageMax?: InputMaybe<Scalars['Float']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: InputMaybe<Scalars['String']>;
  /** Description of the zone type. */
  Description?: InputMaybe<Scalars['String']>;
  /**
   * Maximum allowed dwelling units per area in [units/m2].
   *
   * Minimum value: 0
   * Maximum value: 200000
   */
  DwellingUnitsPerAreaMax?: InputMaybe<Scalars['Float']>;
  /**
   * Maximum allowed floor area ratio.
   *
   * Minimum value: 0
   * Maximum value: 500
   */
  FARMax?: InputMaybe<Scalars['Float']>;
  /** Fill style of the zone type or overlay. */
  FillStyle?: InputMaybe<FillStyle>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /**
   * Maximum allowed height in [m].
   *
   * Minimum value: 0
   * Maximum value: 1000
   */
  HeightMax?: InputMaybe<Scalars['Float']>;
  /**
   * Label of the zone type.
   *
   * Minimum length: 1
   * Maximum length: 20
   */
  Label?: InputMaybe<Scalars['String']>;
  /**
   * Factor that reduces the total zone area used for capacity indicator calculations.
   *
   * Minimum value: 0
   * Maximum value: 1
   */
  NetAreaFactor?: InputMaybe<Scalars['Float']>;
  /**
   * Maximum allowed number of floors.
   *
   * Minimum value: 0
   * Maximum value: 200
   */
  NumFloorsMax?: InputMaybe<Scalars['Int']>;
  /** Outline style of the zone type or overlay. */
  OutlineStyle?: InputMaybe<OutlineStyle>;
  /** The planning method of the zone type. */
  PlanningMethod?: InputMaybe<ZoneTypePlanningMethod>;
  /** If `true`, the zone type is proposed in the plan. */
  Proposal?: InputMaybe<Scalars['Boolean']>;
  /** Array containing skyplanes. */
  Skyplanes?: InputMaybe<Array<SkyplaneInput>>;
  /**
   * Maximum allowed substructure depth in [m].
   *
   * Minimum value: 0
   * Maximum value: 1000
   */
  SubstructureDepthMax?: InputMaybe<Scalars['Float']>;
  /** An array of tiers and their allowed setbacks in [m]. */
  Tiers?: InputMaybe<Array<TierInput>>;
  /** ID of the urban event (plan) the zone type belongs to. */
  UrbanEventID?: InputMaybe<Scalars['GlobalID']>;
  /** Name of the zone type. */
  ZoneTypeName?: InputMaybe<Scalars['String']>;
  /** The order of the zone type. Defines the order in which the zone types are displayed in the legend. */
  ZoneTypeOrder?: InputMaybe<Scalars['Int']>;
};

export type UpdateZoneTypeInput = {
  attributes: UpdateZoneTypeAttributesInput;
};

export type UpgradeInfo = {
  __typename?: 'UpgradeInfo';
  /** Additional message providing more detail about the upgrade status. */
  message?: Maybe<Scalars['String']>;
  /** Status of the upgrade. */
  upgradeStatus: UpgradeStatus;
};

/**
 * **Ready**: The urban model or urban design database is up to date. An upgrade is not required.
 * **InProgress**: The urban model or urban design database is currently being upgraded. The status will change to `Ready` once the upgrade is finished.
 * **UpgradeAvailable**: An upgrade is available.
 * **ServiceUnavailable**: The upgrade failed due to a server error. The `message` field might contain additional information.
 * **Invalid**: The urban model or urban design database cannot be upgraded. The `message` field might contain additional information.
 */
export enum UpgradeStatus {
  InProgress = 'InProgress',
  Invalid = 'Invalid',
  Ready = 'Ready',
  ServiceUnavailable = 'ServiceUnavailable',
  UpgradeAvailable = 'UpgradeAvailable'
}

export type UpgradeUrbanDesignDatabaseResult = {
  __typename?: 'UpgradeUrbanDesignDatabaseResult';
  upgradeInfo: UpgradeInfo;
};

export type UpgradeUrbanModelResult = {
  __typename?: 'UpgradeUrbanModelResult';
  upgradeInfo: UpgradeInfo;
};

export type UrbanDatabase = {
  __typename?: 'UrbanDatabase';
  /** Sharing level of the urban database item. */
  access: AccessLevel;
  /**
   * Buildings types in the urban database.
   *
   * See [Building types](https://doc.arcgis.com/en/urban/data/data-manager-types.htm#ESRI_SECTION1_BB8E3A8E309C4F45B6F837A07E9D2453).
   */
  buildingTypes: Array<Maybe<BuildingType>>;
  /** Counts, aggregates, and other information about the building types in the urban database. */
  buildingTypesMeta: BuildingTypesMeta;
  /**
   * Categories for feedback comments.
   *
   * See [Feedback categories](https://doc.arcgis.com/en/urban/data/data-manager-types.htm#ESRI_SECTION1_ADD83BFD80F541559960A47C0706C7A3).
   */
  feedbackCategories: Array<Maybe<FeedbackCategory>>;
  /** Counts, aggregates, and other information about the feedback categories in the urban database. */
  feedbackCategoriesMeta: FeedbackCategoriesMeta;
  /** Portal item id of the urban database (view). Provides read-only access to the data. Use this id to query the data. */
  id: Scalars['PortalItemId'];
  /**
   * Indicators in the urban database.
   *
   * See [Work with indicators](https://doc.arcgis.com/en/urban/help/help-custom-indicators.htm).
   */
  indicators: Array<Maybe<Indicator>>;
  /** Counts, aggregates, and other information about the indicators in the urban database. */
  indicatorsMeta: IndicatorsMeta;
  /**
   * Low level of detail (LOD1) schematic buildings in the urban database.
   *
   * See [Develop a parcel](https://doc.arcgis.com/en/urban/help/help-parcel-redevelopment.htm).
   */
  lod1Buildings: Array<Maybe<Lod1Building>>;
  /** Counts, aggregates, and other information about the low level-of-detail buildings in the urban database. */
  lod1BuildingsMeta: Lod1BuildingsMeta;
  /**
   * Sources for metrics in the urban database.
   *
   * See [Manage metrics](https://doc.arcgis.com/en/urban/data/data-manager-metrics.htm).
   */
  metricSources: Array<Maybe<MetricSource>>;
  /** Counts, aggregates, and other information about the metric sources in the urban database. */
  metricSourcesMeta: MetricSourcesMeta;
  /**
   * Metric values in the urban database.
   *
   * See [Manage metrics](https://doc.arcgis.com/en/urban/data/data-manager-metrics.htm).
   */
  metricValues: Array<Maybe<MetricValue>>;
  /** Counts, aggregates, and other information about the metric values in the urban database. */
  metricValuesMeta: MetricValuesMeta;
  /**
   * Metrics defined in the urban database.
   *
   * See [Manage metrics](https://doc.arcgis.com/en/urban/data/data-manager-metrics.htm).
   */
  metrics: Array<Maybe<Metric>>;
  /** Counts, aggregates, and other information about the metrics in the urban database. */
  metricsMeta: MetricsMeta;
  /**
   * Overlay types in the urban database.
   *
   * See [Create an overlay](https://doc.arcgis.com/en/urban/help/help-create-zoning-overlay.htm).
   */
  overlayTypes: Array<Maybe<OverlayType>>;
  /** Counts, aggregates, and other information about the overlay types in the urban database. */
  overlayTypesMeta: OverlayTypesMeta;
  /**
   * Overlays in the urban database.
   *
   * See [Create an overlay](https://doc.arcgis.com/en/urban/help/help-create-zoning-overlay.htm).
   */
  overlays: Array<Maybe<Overlay>>;
  /** Counts, aggregates, and other information about the overlays in the urban database. */
  overlaysMeta: OverlaysMeta;
  /** ArcGIS account username of the user who owns the urban database. */
  owner: Scalars['String'];
  /**
   * Parcels in the urban database.
   *
   * See [Add and edit parcels](https://doc.arcgis.com/en/urban/help/help-edit-parcels.htm).
   */
  parcels: Array<Maybe<Parcel>>;
  /** Counts, aggregates, and other information about the parcels in the urban database. */
  parcelsMeta: ParcelsMeta;
  /**
   * Plans in the urban database.
   *
   * See [Create a plan](https://doc.arcgis.com/en/urban/help/help-create-plan.htm).
   */
  plans: Array<Maybe<Plan>>;
  /** Counts, aggregates, and other information about the plans in the urban database. */
  plansMeta: PlansMeta;
  /**
   * Point symbols representing trees, vehicles, and other urban furniture in the urban database.
   *
   * See [Edit a project](https://doc.arcgis.com/en/urban/help/help-edit-project.htm).
   */
  pointSymbols: Array<Maybe<PointSymbol>>;
  /** Counts, aggregates, and other information about point symbols in the urban database. */
  pointSymbolsMeta: PointSymbolsMeta;
  /**
   * Polygon symbols representing grass, concrete, water, or other surface layers in the urban database.
   *
   * See [Edit a project](https://doc.arcgis.com/en/urban/help/help-edit-project.htm).
   */
  polygonSymbols: Array<Maybe<PolygonSymbol>>;
  /** Counts, aggregates, and other information about the polygon symbols in the urban database. */
  polygonSymbolsMeta: PolygonSymbolsMeta;
  /**
   * Projects in the urban database.
   *
   * See [Create a project](https://doc.arcgis.com/en/urban/help/help-create-project.htm).
   */
  projects: Array<Maybe<Project>>;
  /** Counts, aggregates, and other information about the projects in the urban database. */
  projectsMeta: ProjectsMeta;
  /**
   * Space-use types in the urban database.
   *
   * See [Space-use types](https://doc.arcgis.com/en/urban/data/data-manager-types.htm#ESRI_SECTION1_C30D73392D964D51A8B606128A8A6E8F).
   */
  spaceUseTypes: Array<Maybe<SpaceUseType>>;
  /** Counts, aggregates, and other information about the space-use types in the urban database. */
  spaceUseTypesMeta: SpaceUseTypesMeta;
  /**
   * Project status types defined in the urban database.
   *
   * See [Project status types](https://doc.arcgis.com/en/urban/data/data-manager-types.htm#ESRI_SECTION1_B937885446E34EB381FFF216E56AAA70).
   */
  statusTypes: Array<Maybe<StatusType>>;
  /** Counts, aggregates, and other information about the project status types in the urban database. */
  statusTypesMeta: StatusTypesMeta;
  /** Source URL for the feature service. */
  url: Scalars['String'];
  /**
   * Zoning types in the urban database.
   *
   * See [Zoning Types](https://doc.arcgis.com/en/urban/data/data-manager-types.htm#ESRI_SECTION1_87E11F381BC94CC38639042C7B1331A0).
   */
  zoneTypes: Array<Maybe<ZoneType>>;
  /** Counts, aggregates, and other information about the zoning types in the urban database. */
  zoneTypesMeta: ZoneTypesMeta;
  /**
   * Zones in the urban database.
   *
   * See [Zoning types](https://doc.arcgis.com/en/urban/data/data-manager-types.htm#ESRI_SECTION1_87E11F381BC94CC38639042C7B1331A0).
   */
  zones: Array<Maybe<Zone>>;
  /** Counts, aggregates, and other information about the zones in the urban database. */
  zonesMeta: ZonesMeta;
};


export type UrbanDatabaseBuildingTypesArgs = {
  filter?: InputMaybe<BuildingTypeFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


export type UrbanDatabaseBuildingTypesMetaArgs = {
  filter?: InputMaybe<BuildingTypeFilterInput>;
};


export type UrbanDatabaseFeedbackCategoriesArgs = {
  filter?: InputMaybe<FeedbackCategoryFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


export type UrbanDatabaseFeedbackCategoriesMetaArgs = {
  filter?: InputMaybe<FeedbackCategoryFilterInput>;
};


export type UrbanDatabaseIndicatorsArgs = {
  filter?: InputMaybe<IndicatorFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


export type UrbanDatabaseIndicatorsMetaArgs = {
  filter?: InputMaybe<IndicatorFilterInput>;
};


export type UrbanDatabaseLod1BuildingsArgs = {
  filter?: InputMaybe<Lod1BuildingFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


export type UrbanDatabaseLod1BuildingsMetaArgs = {
  filter?: InputMaybe<Lod1BuildingFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
};


export type UrbanDatabaseMetricSourcesArgs = {
  filter?: InputMaybe<MetricSourceFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


export type UrbanDatabaseMetricSourcesMetaArgs = {
  filter?: InputMaybe<MetricSourceFilterInput>;
};


export type UrbanDatabaseMetricValuesArgs = {
  filter?: InputMaybe<MetricValueFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


export type UrbanDatabaseMetricValuesMetaArgs = {
  filter?: InputMaybe<MetricValueFilterInput>;
};


export type UrbanDatabaseMetricsArgs = {
  filter?: InputMaybe<MetricFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


export type UrbanDatabaseMetricsMetaArgs = {
  filter?: InputMaybe<MetricFilterInput>;
};


export type UrbanDatabaseOverlayTypesArgs = {
  filter?: InputMaybe<OverlayTypeFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


export type UrbanDatabaseOverlayTypesMetaArgs = {
  filter?: InputMaybe<OverlayTypeFilterInput>;
};


export type UrbanDatabaseOverlaysArgs = {
  filter?: InputMaybe<OverlayFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


export type UrbanDatabaseOverlaysMetaArgs = {
  filter?: InputMaybe<OverlayFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
};


export type UrbanDatabaseParcelsArgs = {
  filter?: InputMaybe<ParcelFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


export type UrbanDatabaseParcelsMetaArgs = {
  filter?: InputMaybe<ParcelFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
};


export type UrbanDatabasePlansArgs = {
  filter?: InputMaybe<PlanFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
  paging?: InputMaybe<PagingInput>;
  sort?: InputMaybe<Array<PlanSortInput>>;
};


export type UrbanDatabasePlansMetaArgs = {
  filter?: InputMaybe<PlanFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
};


export type UrbanDatabasePointSymbolsArgs = {
  filter?: InputMaybe<PointSymbolFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


export type UrbanDatabasePointSymbolsMetaArgs = {
  filter?: InputMaybe<PointSymbolFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
};


export type UrbanDatabasePolygonSymbolsArgs = {
  filter?: InputMaybe<PolygonSymbolFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


export type UrbanDatabasePolygonSymbolsMetaArgs = {
  filter?: InputMaybe<PolygonSymbolFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
};


export type UrbanDatabaseProjectsArgs = {
  filter?: InputMaybe<ProjectFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
  paging?: InputMaybe<PagingInput>;
  sort?: InputMaybe<Array<ProjectSortInput>>;
};


export type UrbanDatabaseProjectsMetaArgs = {
  filter?: InputMaybe<ProjectFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
};


export type UrbanDatabaseSpaceUseTypesArgs = {
  filter?: InputMaybe<SpaceUseTypeFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


export type UrbanDatabaseSpaceUseTypesMetaArgs = {
  filter?: InputMaybe<SpaceUseTypeFilterInput>;
};


export type UrbanDatabaseStatusTypesArgs = {
  filter?: InputMaybe<StatusTypeFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


export type UrbanDatabaseStatusTypesMetaArgs = {
  filter?: InputMaybe<StatusTypeFilterInput>;
};


export type UrbanDatabaseZoneTypesArgs = {
  filter?: InputMaybe<ZoneTypeFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


export type UrbanDatabaseZoneTypesMetaArgs = {
  filter?: InputMaybe<ZoneTypeFilterInput>;
};


export type UrbanDatabaseZonesArgs = {
  filter?: InputMaybe<ZoneFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
  paging?: InputMaybe<PagingInput>;
};


export type UrbanDatabaseZonesMetaArgs = {
  filter?: InputMaybe<ZoneFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
};

/** A design that planners are currently working on. Stored as a feature service in the portal. Contains a plan or a project. */
export type UrbanDesignDatabase = {
  __typename?: 'UrbanDesignDatabase';
  /** Sharing level of the urban design database item. */
  access: AccessLevel;
  /** Creation date of the urban design database. */
  created: Scalars['Timestamp'];
  /** Description of the urban design database. */
  description?: Maybe<Scalars['String']>;
  /** Geographic extent of the urban design database.  */
  extent?: Maybe<Scalars['Extent']>;
  /** Id of the folder in which the urban design database is stored. */
  folderId?: Maybe<Scalars['PortalItemId']>;
  /** Id of the urban design database. */
  id: Scalars['PortalItemId'];
  /** Date of the last urban design database modification. */
  modified: Scalars['Timestamp'];
  /** Number of views. */
  numViews: Scalars['Int'];
  /** ArcGIS account username of the user who owns the urban design database. */
  owner: Scalars['String'];
  /**
   * Plans in the urban design database.
   *
   * See [Create a plan](https://doc.arcgis.com/en/urban/help/help-create-plan.htm).
   */
  plans?: Maybe<Array<Maybe<Plan>>>;
  /** Counts, aggregates, and other information about plans in the urban design database. */
  plansMeta: PlansMeta;
  /**
   * Projects in the urban design database.
   *
   * See [Create a project](https://doc.arcgis.com/en/urban/help/help-create-project.htm).
   */
  projects?: Maybe<Array<Maybe<Project>>>;
  /** Counts, aggregates, and other information about projects in the urban design database. */
  projectsMeta: ProjectsMeta;
  /**
   * Spatial reference used for the data's horizontal (xy) coordinates.
   *
   * See: [https://developers.arcgis.com/rest/services-reference/using-spatial-references.htm](https://developers.arcgis.com/rest/services-reference/using-spatial-references.htm)
   *
   * By default, Urban uses a gravity-related height model for the data's vertical (z) coordinate.
   *
   * See: [https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-HeightModelInfo.html#heightModel](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-HeightModelInfo.html#heightModel).
   *
   * Other vertical spatial references are currently not supported in Urban.
   */
  spatialReference?: Maybe<SpatialReference>;
  /** URL of an image suitable for display, for example overview cards. */
  thumbnail?: Maybe<Scalars['String']>;
  /** Title of the urban design database. */
  title: Scalars['String'];
  /** Information about the upgrade status of the urban design database. */
  upgradeInfo?: Maybe<UpgradeInfo>;
  /** Id of the urban model to which the urban design database belongs. */
  urbanModelId?: Maybe<Scalars['PortalItemId']>;
  /** URL of the urban design database feature service. */
  url: Scalars['String'];
  /** Version of the urban design database. */
  version?: Maybe<Scalars['String']>;
};


/** A design that planners are currently working on. Stored as a feature service in the portal. Contains a plan or a project. */
export type UrbanDesignDatabasePlansArgs = {
  filter?: InputMaybe<PlanFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
  paging?: InputMaybe<PagingInput>;
  sort?: InputMaybe<Array<PlanSortInput>>;
};


/** A design that planners are currently working on. Stored as a feature service in the portal. Contains a plan or a project. */
export type UrbanDesignDatabasePlansMetaArgs = {
  filter?: InputMaybe<PlanFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
};


/** A design that planners are currently working on. Stored as a feature service in the portal. Contains a plan or a project. */
export type UrbanDesignDatabaseProjectsArgs = {
  filter?: InputMaybe<ProjectFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
  paging?: InputMaybe<PagingInput>;
  sort?: InputMaybe<Array<ProjectSortInput>>;
};


/** A design that planners are currently working on. Stored as a feature service in the portal. Contains a plan or a project. */
export type UrbanDesignDatabaseProjectsMetaArgs = {
  filter?: InputMaybe<ProjectFilterInput>;
  geometryFilter?: InputMaybe<GeometryFilterInput>;
};


/** A design that planners are currently working on. Stored as a feature service in the portal. Contains a plan or a project. */
export type UrbanDesignDatabaseThumbnailArgs = {
  size?: InputMaybe<ThumbnailSize>;
};

/**
 * **Zoning**: Planning method of the plan is zoning.
 * **LandUse**: Planning method of the plan is land use.
 */
export enum UrbanEventPlanningMethod {
  LandUse = 'LandUse',
  Zoning = 'Zoning'
}

/** An urban model represents a city. Stored as an Urban Model item in the portal. */
export type UrbanModel = {
  __typename?: 'UrbanModel';
  /** Sharing level of the urban model item. */
  access: AccessLevel;
  /** Configuration settings stored for the urban model. */
  config?: Maybe<UrbanModelConfig>;
  /** Creation date of the urban model. */
  created: Scalars['Timestamp'];
  /** Description of the urban model. */
  description?: Maybe<Scalars['String']>;
  /** Geographic extent of the urban model.  */
  extent?: Maybe<Scalars['Extent']>;
  /** Id of the folder in which the urban model is stored. */
  folderId?: Maybe<Scalars['PortalItemId']>;
  /** Id of the urban model. */
  id: Scalars['PortalItemId'];
  /** Date of the last urban model modification. */
  modified: Scalars['Timestamp'];
  /** Number of views. */
  numViews: Scalars['Int'];
  /** ArcGIS account username of the user who owns the urban model. */
  owner: Scalars['String'];
  /**
   * Spatial reference used for the data's horizontal (xy) coordinates.
   *
   * See: [https://developers.arcgis.com/rest/services-reference/using-spatial-references.htm](https://developers.arcgis.com/rest/services-reference/using-spatial-references.htm)
   *
   * By default, Urban uses a gravity-related height model for the data's vertical (z) coordinate.
   *
   * See: [https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-HeightModelInfo.html#heightModel](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-HeightModelInfo.html#heightModel).
   *
   * Other vertical spatial references are currently not supported in Urban.
   */
  spatialReference?: Maybe<SpatialReference>;
  /** URL of an image suitable for display, for example overview cards. */
  thumbnail?: Maybe<Scalars['String']>;
  /** Title of the urban model. */
  title: Scalars['String'];
  /** Information about the upgrade status of the urban model. */
  upgradeInfo?: Maybe<UpgradeInfo>;
  /** Urban database of the urban model. */
  urbanDatabase?: Maybe<UrbanDatabase>;
  /** Id of the urban database. Provides write access to the data. Use this id to create, update, or delete the data through mutations. */
  urbanDatabaseId?: Maybe<Scalars['PortalItemId']>;
  /** Id of the urban database (view). Provides read-only access to the data. Use this id to query the data. */
  urbanDatabaseViewId?: Maybe<Scalars['PortalItemId']>;
  /** Urban design databases of the urban model. */
  urbanDesignDatabases?: Maybe<Array<UrbanDesignDatabase>>;
  /** Version of the urban model. */
  version?: Maybe<Scalars['String']>;
};


/** An urban model represents a city. Stored as an Urban Model item in the portal. */
export type UrbanModelThumbnailArgs = {
  size?: InputMaybe<ThumbnailSize>;
};


/** An urban model represents a city. Stored as an Urban Model item in the portal. */
export type UrbanModelUrbanDatabaseArgs = {
  admin?: InputMaybe<Scalars['Boolean']>;
};


/** An urban model represents a city. Stored as an Urban Model item in the portal. */
export type UrbanModelUrbanDesignDatabasesArgs = {
  extent?: InputMaybe<Scalars['Extent']>;
  groupIds?: InputMaybe<Array<Scalars['PortalItemId']>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  organizationId?: InputMaybe<Scalars['OrganizationId']>;
  owners?: InputMaybe<Array<Scalars['String']>>;
  sort?: InputMaybe<PortalItemSortInput>;
};

/** Configuration settings stored for the urban model. */
export type UrbanModelConfig = {
  __typename?: 'UrbanModelConfig';
  /** Portal item id of a web scene containing custom baselayers. */
  customBaselayersItemId?: Maybe<Scalars['PortalItemId']>;
  /** Portal item id of a Web Map containing a custom basemap. */
  customBasemapItemId?: Maybe<Scalars['PortalItemId']>;
  /** Portal item id of an Elevation Layer. */
  customElevationLayerItemId?: Maybe<Scalars['PortalItemId']>;
  /** Portal item id of a Web Map containing a custom satellite basemap. */
  customSatelliteBasemapItemId?: Maybe<Scalars['PortalItemId']>;
  /** Display configuration for types and layers. */
  displayConfig?: Maybe<DisplayConfig>;
  /** Portal item id of a Scene Layer containing existing buildings. */
  existingBuildingsLayerItemId?: Maybe<Scalars['PortalItemId']>;
  /** Portal item id of a Scene Layer containing existing buildings with realistic textures. */
  existingSatelliteBuildingsLayerItemId?: Maybe<Scalars['PortalItemId']>;
  /** Portal item id of a Scene Layer containing realistic existing trees to be used in imagery visualization. */
  existingSatelliteTreesLayerItemId?: Maybe<Scalars['PortalItemId']>;
  /** Portal item id of a Scene Layer containing existing trees. */
  existingTreesLayerItemId?: Maybe<Scalars['PortalItemId']>;
  /** The Hub annotation layer that contains public feedback. */
  hubAnnotationsLayerItemId?: Maybe<Scalars['PortalItemId']>;
  /** The initial camera viewpoint. */
  initialCamera?: Maybe<InitialCamera>;
  /** Type of visualization of the basemap and the existing buildings that is used on initial load of the application. */
  initialVisualizationStyle: InitialVisualizationStyle;
  /** URL to the city logo. */
  logoUrl?: Maybe<Scalars['String']>;
  /** Name of the city. */
  name?: Maybe<Scalars['String']>;
  /** Street-view configuration. */
  streetview?: Maybe<Streetview>;
};

/** A viewpoint is a 3D point with a title and a camera position. */
export type Viewpoint = {
  __typename?: 'Viewpoint';
  attributes: ViewpointAttributes;
  /** 3d geometry (xyz coordinates) */
  geometry?: Maybe<Point>;
};

/** Attributes of the viewpoint. */
export type ViewpointAttributes = {
  __typename?: 'ViewpointAttributes';
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: Maybe<Scalars['String']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /** Heading of the camera. */
  Heading: Scalars['Float'];
  /** Tilt of the camera. */
  Tilt: Scalars['Float'];
  /** ID of the urban event (plan or project) the viewpoint belongs to. */
  UrbanEventID?: Maybe<Scalars['GlobalID']>;
  /** Name of the viewpoint. */
  ViewpointName: Scalars['String'];
  /** The order of the viewpoint. */
  ViewpointOrder: Scalars['Int'];
};

export type ViewpointFilterInput = {
  globalIDs?: InputMaybe<Array<Scalars['GlobalID']>>;
};

export type ViewpointsMeta = FeaturesMeta & {
  __typename?: 'ViewpointsMeta';
  /** The number of viewpoints. */
  count?: Maybe<Scalars['Int']>;
};

/**
 * **SpaceUseTypeParameter**: Space use type parameter is used as a weight.
 * **Constant**: A constant value is used as a weight
 */
export enum WeightType {
  Constant = 'Constant',
  SpaceUseTypeParameter = 'SpaceUseTypeParameter'
}

/** A zone is a boundary that references a zone type. The zone is used for zoning and land use. */
export type Zone = {
  __typename?: 'Zone';
  attributes: ZoneAttributes;
  /** 2d geometry (xy coordinates) */
  geometry?: Maybe<Polygon>;
  zoneType?: Maybe<ZoneType>;
};

/** Attributes of the zone. */
export type ZoneAttributes = {
  __typename?: 'ZoneAttributes';
  /** ID of the branch the zone belongs to. */
  BranchID?: Maybe<Scalars['GlobalID']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: Maybe<Scalars['String']>;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /** The planning horizon of the zone. */
  PlanningHorizon: ZonePlanningHorizon;
  /** The planning method of the zone. */
  PlanningMethod: ZonePlanningMethod;
  /** ID of the zone type the zone is assigned to. */
  ZoneTypeID: Scalars['GlobalID'];
};

export type ZoneFilterInput = {
  globalIDs?: InputMaybe<Array<Scalars['GlobalID']>>;
};

/**
 * **Existing**: Zone boundary shows existing conditions.
 * **Future**: Zone boundary represents future intentions.
 */
export enum ZonePlanningHorizon {
  Existing = 'Existing',
  Future = 'Future'
}

/**
 * **Zoning**: Zone boundary is used for zoning planning.
 * **LandUse**: Zone boundary is used for land use planning.
 */
export enum ZonePlanningMethod {
  LandUse = 'LandUse',
  Zoning = 'Zoning'
}

/** A zone type is used to configure the zoning parameters of a zone. */
export type ZoneType = {
  __typename?: 'ZoneType';
  attributes: ZoneTypeAttributes;
};

/** Attributes of the zone type. */
export type ZoneTypeAttributes = {
  __typename?: 'ZoneTypeAttributes';
  /** An array of allowed space use types and their distributions. */
  AllowedSpaceUseTypes?: Maybe<Array<AllowedSpaceUseType>>;
  /** Hex color of the zone type or overlay. */
  Color: Scalars['Color'];
  /** Maximum allowed coverage in percentage. */
  CoverageMax?: Maybe<Scalars['Float']>;
  /** Custom ID of the feature. Used to join fields in the data manager. */
  CustomID?: Maybe<Scalars['String']>;
  /** Description of the zone type. */
  Description: Scalars['String'];
  /** Maximum allowed dwelling units per area in [units/m2]. */
  DwellingUnitsPerAreaMax?: Maybe<Scalars['Float']>;
  /** Maximum allowed floor area ratio. */
  FARMax?: Maybe<Scalars['Float']>;
  /** Fill style of the zone type or overlay. */
  FillStyle: FillStyle;
  /** Unique identifier (UUID) of the feature. */
  GlobalID: Scalars['GlobalID'];
  /** Maximum allowed height in [m]. */
  HeightMax?: Maybe<Scalars['Float']>;
  /** Label of the zone type. */
  Label: Scalars['String'];
  /** Factor that reduces the total zone area used for capacity indicator calculations. */
  NetAreaFactor?: Maybe<Scalars['Float']>;
  /** Maximum allowed number of floors. */
  NumFloorsMax?: Maybe<Scalars['Int']>;
  /** Outline style of the zone type or overlay. */
  OutlineStyle: OutlineStyle;
  /** The planning method of the zone type. */
  PlanningMethod: ZoneTypePlanningMethod;
  /** If `true`, the zone type is proposed in the plan. */
  Proposal: Scalars['Boolean'];
  /** Array containing skyplanes. */
  Skyplanes?: Maybe<Array<Skyplane>>;
  /** Maximum allowed substructure depth in [m]. */
  SubstructureDepthMax?: Maybe<Scalars['Float']>;
  /** An array of tiers and their allowed setbacks in [m]. */
  Tiers?: Maybe<Array<Tier>>;
  /** ID of the urban event (plan) the zone type belongs to. */
  UrbanEventID?: Maybe<Scalars['GlobalID']>;
  /** Name of the zone type. */
  ZoneTypeName?: Maybe<Scalars['String']>;
  /** The order of the zone type. Defines the order in which the zone types are displayed in the legend. */
  ZoneTypeOrder: Scalars['Int'];
};

export type ZoneTypeFilterInput = {
  globalIDs?: InputMaybe<Array<Scalars['GlobalID']>>;
};

/**
 * **Zoning**: Zone type is used for zoning planning.
 * **LandUse**: Zone type is used for land use planning.
 */
export enum ZoneTypePlanningMethod {
  LandUse = 'LandUse',
  Zoning = 'Zoning'
}

export type ZoneTypesMeta = FeaturesMeta & {
  __typename?: 'ZoneTypesMeta';
  /** The number of zone types. */
  count?: Maybe<Scalars['Int']>;
};

export type ZonesMeta = FeaturesMeta & {
  __typename?: 'ZonesMeta';
  /** The number of zones. */
  count?: Maybe<Scalars['Int']>;
};

/** Zoning regulation with overlays and parcel overrides applied. */
export type ZoningRegulation = {
  __typename?: 'ZoningRegulation';
  attributes: ZoningRegulationAttributes;
};

export type ZoningRegulationAttributes = {
  __typename?: 'ZoningRegulationAttributes';
  AllowedSpaceUseTypes?: Maybe<Array<AllowedSpaceUseType>>;
  CoverageMax?: Maybe<Scalars['Float']>;
  DwellingUnitsPerAreaMax?: Maybe<Scalars['Float']>;
  FARMax?: Maybe<Scalars['Float']>;
  HeightMax?: Maybe<Scalars['Float']>;
  NumFloorsMax?: Maybe<Scalars['Int']>;
  Skyplanes?: Maybe<Array<Skyplane>>;
  SubstructureDepthMax?: Maybe<Scalars['Float']>;
  Tiers?: Maybe<Array<Tier>>;
};

export type GetProjectsQueryVariables = Exact<{
  modelId: Scalars['PortalItemId'];
}>;


export type GetProjectsQuery = { __typename?: 'Query', urbanModel?: { __typename?: 'UrbanModel', urbanDatabase?: { __typename?: 'UrbanDatabase', projects: Array<{ __typename?: 'Project', attributes: { __typename?: 'ProjectAttributes', GlobalID: any, Address?: string | null, ContextWebsceneItemId?: any | null, CustomID?: string | null, Description?: string | null, EndDate: any, EventName: string, Featured: boolean, Locked: boolean, OwnerName: string, PublicFeedbackEnabled: boolean, PublicFeedbackEndDate?: any | null, StartDate: any, Status?: any | null, Thumbnail?: string | null, WebpageUrl?: string | null }, geometry?: { __typename?: 'Polygon', rings: Array<Array<Array<number>>>, spatialReference: { __typename?: 'SpatialReference', wkid: number } } | null, statusType: { __typename?: 'StatusType', attributes: { __typename?: 'StatusTypeAttributes', Label: string, Icon: StatusTypeIcon } } } | null> } | null } | null };

export type GetProjectsInGeometryQueryVariables = Exact<{
  geoFilter?: InputMaybe<GeometryFilterInput>;
  modelId: Scalars['PortalItemId'];
}>;


export type GetProjectsInGeometryQuery = { __typename?: 'Query', urbanModel?: { __typename?: 'UrbanModel', urbanDatabase?: { __typename?: 'UrbanDatabase', projects: Array<{ __typename?: 'Project', attributes: { __typename?: 'ProjectAttributes', GlobalID: any } } | null> } | null } | null };


declare module '*/queries.graphql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const GetProjects: DocumentNode;
export const GetProjectsInGeometry: DocumentNode;

  export default defaultDocument;
}
    

export const GetProjects = gql`
    query GetProjects($modelId: PortalItemId!) {
  urbanModel(urbanModelId: $modelId) {
    urbanDatabase {
      projects(paging: {limit: 200}) {
        attributes {
          GlobalID
          Address
          ContextWebsceneItemId
          CustomID
          Description
          EndDate
          EventName
          Featured
          Locked
          OwnerName
          PublicFeedbackEnabled
          PublicFeedbackEndDate
          StartDate
          Status
          Thumbnail
          WebpageUrl
        }
        geometry {
          rings
          spatialReference {
            wkid
          }
        }
        statusType {
          attributes {
            Label
            Icon
          }
        }
      }
    }
  }
}
    `;
export const GetProjectsInGeometry = gql`
    query GetProjectsInGeometry($geoFilter: GeometryFilterInput, $modelId: PortalItemId!) {
  urbanModel(urbanModelId: $modelId) {
    urbanDatabase {
      projects(geometryFilter: $geoFilter) {
        attributes {
          GlobalID
        }
      }
    }
  }
}
    `;

export const GetProjectsDocument = gql`
    query GetProjects($modelId: PortalItemId!) {
  urbanModel(urbanModelId: $modelId) {
    urbanDatabase {
      projects(paging: {limit: 200}) {
        attributes {
          GlobalID
          Address
          ContextWebsceneItemId
          CustomID
          Description
          EndDate
          EventName
          Featured
          Locked
          OwnerName
          PublicFeedbackEnabled
          PublicFeedbackEndDate
          StartDate
          Status
          Thumbnail
          WebpageUrl
        }
        geometry {
          rings
          spatialReference {
            wkid
          }
        }
        statusType {
          attributes {
            Label
            Icon
          }
        }
      }
    }
  }
}
    `;

export function useGetProjectsQuery(options: Omit<Urql.UseQueryArgs<GetProjectsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetProjectsQuery>({ query: GetProjectsDocument, ...options });
};
export const GetProjectsInGeometryDocument = gql`
    query GetProjectsInGeometry($geoFilter: GeometryFilterInput, $modelId: PortalItemId!) {
  urbanModel(urbanModelId: $modelId) {
    urbanDatabase {
      projects(geometryFilter: $geoFilter) {
        attributes {
          GlobalID
        }
      }
    }
  }
}
    `;

export function useGetProjectsInGeometryQuery(options: Omit<Urql.UseQueryArgs<GetProjectsInGeometryQueryVariables>, 'query'>) {
  return Urql.useQuery<GetProjectsInGeometryQuery>({ query: GetProjectsInGeometryDocument, ...options });
};
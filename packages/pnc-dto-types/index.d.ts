export interface Artifact {
    id: string;
    identifier: string;
    artifactQuality?: "NEW" | "VERIFIED" | "TESTED" | "DEPRECATED" | "BLACKLISTED" | "DELETED" | "TEMPORARY";
    md5?: string;
    sha1?: string;
    sha256?: string;
    filename?: string;
    deployPath?: string;
    importDate?: number; // int64
    originUrl?: string;
    size?: number; // int64
    deployUrl?: string;
    publicUrl?: string;
    targetRepository?: TargetRepository;
    build?: Build;
}
export interface ArtifactImportError {
    artifactId?: string;
    errorMessage?: string;
}
export interface ArtifactPage {
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalPages?: number; // int32
    totalHits?: number; // int32
    content?: Artifact[];
}
export interface Banner {
    banner?: string;
}
export interface Build {
    id: string;
    submitTime?: number; // int64
    startTime?: number; // int64
    endTime?: number; // int64
    progress?: "PENDING" | "IN_PROGRESS" | "FINISHED";
    status?: "SUCCESS" | "FAILED" | "NO_REBUILD_REQUIRED" | "WAITING_FOR_DEPENDENCIES" | "BUILDING" | "REJECTED" | "REJECTED_FAILED_DEPENDENCIES" | "CANCELLED" | "SYSTEM_ERROR" | "NEW";
    buildContentId?: string;
    temporaryBuild?: boolean;
    scmUrl?: string;
    scmRevision?: string;
    scmTag?: string;
    buildOutputChecksum?: string;
    project?: ProjectRef;
    scmRepository?: SCMRepository;
    environment?: Environment;
    attributes?: {
        [name: string]: string;
    };
    user?: User;
    buildConfigRevision?: BuildConfigurationRevisionRef;
    productMilestone?: ProductMilestoneRef;
    groupBuild?: GroupBuildRef;
}
export interface BuildConfigCreationResponse {
    taskId?: number; // int32
    buildConfig?: BuildConfiguration;
}
export interface BuildConfigPage {
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalPages?: number; // int32
    totalHits?: number; // int32
    content?: BuildConfiguration[];
}
export interface BuildConfigRevisionPage {
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalPages?: number; // int32
    totalHits?: number; // int32
    content?: BuildConfigurationRevision[];
}
export interface BuildConfigWithSCMRequest {
    scmUrl: string;
    preBuildSyncEnabled?: boolean;
    buildConfig?: BuildConfiguration;
}
export interface BuildConfiguration {
    id: string;
    name: string; // ^[a-zA-Z0-9_.][a-zA-Z0-9_.-]*(?<!\.git)$
    description?: string;
    buildScript?: string;
    scmRevision?: string;
    creationTime?: number; // int64
    modificationTime?: number; // int64
    archived?: boolean;
    buildType: "MVN" | "NPM" | "GRADLE";
    scmRepository?: SCMRepository;
    project?: ProjectRef;
    environment?: Environment;
    dependencies?: {
        [name: string]: BuildConfigurationRef;
    };
    productVersion?: ProductVersionRef;
    groupConfigs?: {
        [name: string]: GroupConfigurationRef;
    };
    parameters?: {
        [name: string]: string;
    };
}
export interface BuildConfigurationRef {
    id: string;
    name: string; // ^[a-zA-Z0-9_.][a-zA-Z0-9_.-]*(?<!\.git)$
    description?: string;
    buildScript?: string;
    scmRevision?: string;
    creationTime?: number; // int64
    modificationTime?: number; // int64
    archived?: boolean;
    buildType: "MVN" | "NPM" | "GRADLE";
}
export interface BuildConfigurationRevision {
    id: string;
    rev?: number; // int32
    name?: string;
    description?: string;
    buildScript?: string;
    scmRevision?: string;
    creationTime?: number; // int64
    modificationTime?: number; // int64
    buildType?: "MVN" | "NPM" | "GRADLE";
    scmRepository?: SCMRepository;
    project?: ProjectRef;
    environment?: Environment;
    parameters?: {
        [name: string]: string;
    };
}
export interface BuildConfigurationRevisionRef {
    id: string;
    rev?: number; // int32
    name?: string;
    description?: string;
    buildScript?: string;
    scmRevision?: string;
    creationTime?: number; // int64
    modificationTime?: number; // int64
    buildType?: "MVN" | "NPM" | "GRADLE";
}
export interface BuildEnvironmentPage {
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalPages?: number; // int32
    totalHits?: number; // int32
    content?: Environment[];
}
export interface BuildPage {
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalPages?: number; // int32
    totalHits?: number; // int32
    content?: Build[];
}
export interface BuildPushRequest {
    tagPrefix?: string;
    reimport?: boolean;
}
export interface BuildPushResult {
    id: string;
    buildId: string;
    status: "ACCEPTED" | "SUCCESS" | "REJECTED" | "FAILED" | "SYSTEM_ERROR" | "CANCELED";
    log: string;
    artifactImportErrors?: ArtifactImportError[];
    brewBuildId?: number; // int32
    brewBuildUrl?: string;
}
export interface BuildPushResultPage {
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalPages?: number; // int32
    totalHits?: number; // int32
    content?: BuildPushResult[];
}
export interface BuildsGraph {
    vertices?: {
        [name: string]: VertexBuild;
    };
    edges?: EdgeBuild[];
    metadata?: {
        [name: string]: string;
    };
}
export interface CreateAndSyncSCMRequest {
    scmUrl: string;
    preBuildSyncEnabled?: boolean;
}
export interface EdgeBuild {
    source?: string;
    target?: string;
    cost?: number; // int32
}
export interface Environment {
    id: string;
    name?: string;
    description?: string;
    systemImageRepositoryUrl?: string;
    systemImageId: string;
    attributes?: {
        [name: string]: string;
    };
    systemImageType: "DOCKER_IMAGE" | "VIRTUAL_MACHINE_RAW" | "VIRTUAL_MACHINE_QCOW2" | "LOCAL_WORKSPACE";
    deprecated?: boolean;
}
export interface ErrorResponse {
    errorType?: string;
    errorMessage?: string;
    details?: {
    };
}
export interface GraphBuild {
    vertices?: {
        [name: string]: VertexBuild;
    };
    edges?: EdgeBuild[];
    metadata?: {
        [name: string]: string;
    };
}
export interface GroupBuild {
    id: string;
    startTime?: number; // int64
    endTime?: number; // int64
    status?: "SUCCESS" | "FAILED" | "NO_REBUILD_REQUIRED" | "WAITING_FOR_DEPENDENCIES" | "BUILDING" | "REJECTED" | "REJECTED_FAILED_DEPENDENCIES" | "CANCELLED" | "SYSTEM_ERROR" | "NEW";
    temporaryBuild?: boolean;
    groupConfig?: GroupConfigurationRef;
    user?: User;
    productVersion?: ProductVersionRef;
}
export interface GroupBuildPage {
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalPages?: number; // int32
    totalHits?: number; // int32
    content?: GroupBuild[];
}
export interface GroupBuildPushRequest {
    tagPrefix?: string;
}
export interface GroupBuildRef {
    id: string;
    startTime?: number; // int64
    endTime?: number; // int64
    status?: "SUCCESS" | "FAILED" | "NO_REBUILD_REQUIRED" | "WAITING_FOR_DEPENDENCIES" | "BUILDING" | "REJECTED" | "REJECTED_FAILED_DEPENDENCIES" | "CANCELLED" | "SYSTEM_ERROR" | "NEW";
    temporaryBuild?: boolean;
}
export interface GroupBuildRequest {
    buildConfigurationRevisions?: BuildConfigurationRevisionRef[];
}
export interface GroupConfigPage {
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalPages?: number; // int32
    totalHits?: number; // int32
    content?: GroupConfiguration[];
}
export interface GroupConfiguration {
    id: string;
    name: string;
    productVersion?: ProductVersionRef;
    buildConfigs?: {
        [name: string]: BuildConfigurationRef;
    };
}
export interface GroupConfigurationRef {
    id: string;
    name: string;
}
export interface MilestoneInfo {
    productId?: string;
    productName?: string;
    productVersionId?: string;
    productVersionVersion?: string;
    milestoneId?: string;
    milestoneVersion?: string;
    milestoneEndDate?: number; // int64
    releaseId?: string;
    releaseVersion?: string;
    releaseReleaseDate?: number; // int64
    built?: boolean;
}
export interface MilestoneInfoPage {
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalPages?: number; // int32
    totalHits?: number; // int32
    content?: MilestoneInfo[];
}
export interface PageArtifact {
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalPages?: number; // int32
    totalHits?: number; // int32
    content?: Artifact[];
}
export interface PageBuild {
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalPages?: number; // int32
    totalHits?: number; // int32
    content?: Build[];
}
export interface PageBuildConfiguration {
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalPages?: number; // int32
    totalHits?: number; // int32
    content?: BuildConfiguration[];
}
export interface PageBuildConfigurationRevision {
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalPages?: number; // int32
    totalHits?: number; // int32
    content?: BuildConfigurationRevision[];
}
export interface PageEnvironment {
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalPages?: number; // int32
    totalHits?: number; // int32
    content?: Environment[];
}
export interface PageGroupBuild {
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalPages?: number; // int32
    totalHits?: number; // int32
    content?: GroupBuild[];
}
export interface PageGroupConfiguration {
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalPages?: number; // int32
    totalHits?: number; // int32
    content?: GroupConfiguration[];
}
export interface PageMilestoneInfo {
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalPages?: number; // int32
    totalHits?: number; // int32
    content?: MilestoneInfo[];
}
export interface PageProduct {
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalPages?: number; // int32
    totalHits?: number; // int32
    content?: Product[];
}
export interface PageProductMilestone {
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalPages?: number; // int32
    totalHits?: number; // int32
    content?: ProductMilestone[];
}
export interface PageProductRelease {
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalPages?: number; // int32
    totalHits?: number; // int32
    content?: ProductRelease[];
}
export interface PageProductVersion {
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalPages?: number; // int32
    totalHits?: number; // int32
    content?: ProductVersion[];
}
export interface PageProject {
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalPages?: number; // int32
    totalHits?: number; // int32
    content?: Project[];
}
export interface PageSCMRepository {
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalPages?: number; // int32
    totalHits?: number; // int32
    content?: SCMRepository[];
}
export interface Parameter {
    name?: string;
    description?: string;
}
export namespace Parameters {
    export type Attribute = string[];
    export type BuildDependencies = boolean;
    export type BuildType = string;
    export type Callback = string;
    export type ConfigId = string;
    export type DepId = string;
    export type Id = string;
    export type KeepPodOnFailure = boolean;
    export type Key = string;
    export type Latest = boolean;
    export type Md5 = string;
    export type PageIndex = number; // int32
    export type PageSize = number; // int32
    export type Q = string;
    export type RebuildMode = "IMPLICIT_DEPENDENCY_CHECK" | "EXPLICIT_DEPENDENCY_CHECK" | "FORCE";
    export type Rev = number; // int32
    export type Running = boolean;
    export type Search = string;
    export type SearchUrl = string;
    export type Sha1 = string;
    export type Sha256 = string;
    export type Sort = string;
    export type Status = "SUCCESS" | "FAILED" | "NO_REBUILD_REQUIRED" | "WAITING_FOR_DEPENDENCIES" | "BUILDING" | "REJECTED" | "REJECTED_FAILED_DEPENDENCIES" | "CANCELLED" | "SYSTEM_ERROR" | "NEW";
    export type TemporaryBuild = boolean;
    export type TimestampAlignment = boolean;
    export type Url = string;
    export type Value = string;
}
export interface PathParameters {
    id: Parameters.Id;
}
export interface Product {
    id: string;
    name?: string;
    description?: string;
    abbreviation: string; // [a-zA-Z0-9-]+
    productCode?: string;
    pgmSystemName?: string;
    productVersions?: {
        [name: string]: ProductVersionRef;
    };
}
export interface ProductMilestone {
    id: string;
    version: string; // ^[0-9]+\.[0-9]+(\.\w[\w-]*)+$
    endDate?: number; // int64
    startingDate?: number; // int64
    plannedEndDate?: number; // int64
    downloadUrl?: string;
    issueTrackerUrl?: string;
    productVersion?: ProductVersionRef;
    productRelease?: ProductReleaseRef;
}
export interface ProductMilestonePage {
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalPages?: number; // int32
    totalHits?: number; // int32
    content?: ProductMilestone[];
}
export interface ProductMilestoneRef {
    id: string;
    version: string; // ^[0-9]+\.[0-9]+(\.\w[\w-]*)+$
    endDate?: number; // int64
    startingDate?: number; // int64
    plannedEndDate?: number; // int64
    downloadUrl?: string;
    issueTrackerUrl?: string;
}
export interface ProductPage {
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalPages?: number; // int32
    totalHits?: number; // int32
    content?: Product[];
}
export interface ProductRef {
    id: string;
    name?: string;
    description?: string;
    abbreviation: string; // [a-zA-Z0-9-]+
    productCode?: string;
    pgmSystemName?: string;
}
export interface ProductRelease {
    id: string;
    version?: string;
    supportLevel?: "UNRELEASED" | "EARLYACCESS" | "SUPPORTED" | "EXTENDED_SUPPORT" | "EOL";
    releaseDate?: number; // int64
    downloadUrl?: string;
    issueTrackerUrl?: string;
    productVersion?: ProductVersionRef;
    productMilestone?: ProductMilestoneRef;
}
export interface ProductReleasePage {
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalPages?: number; // int32
    totalHits?: number; // int32
    content?: ProductRelease[];
}
export interface ProductReleaseRef {
    id: string;
    version?: string;
    supportLevel?: "UNRELEASED" | "EARLYACCESS" | "SUPPORTED" | "EXTENDED_SUPPORT" | "EOL";
    releaseDate?: number; // int64
    downloadUrl?: string;
    issueTrackerUrl?: string;
}
export interface ProductVersion {
    id: string;
    version: string; // ^[0-9]+\.[0-9]+$
    attributes?: {
        [name: string]: string;
    };
    product?: ProductRef;
    currentProductMilestone?: ProductMilestoneRef;
    productMilestones?: {
        [name: string]: ProductMilestoneRef;
    };
    productReleases?: {
        [name: string]: ProductReleaseRef;
    };
    groupConfigs?: {
        [name: string]: GroupConfigurationRef;
    };
    buildConfigs?: {
        [name: string]: BuildConfigurationRef;
    };
}
export interface ProductVersionPage {
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalPages?: number; // int32
    totalHits?: number; // int32
    content?: ProductVersion[];
}
export interface ProductVersionRef {
    id: string;
    version: string; // ^[0-9]+\.[0-9]+$
    attributes?: {
        [name: string]: string;
    };
}
export interface Project {
    id: string;
    name?: string;
    description?: string;
    issueTrackerUrl?: string;
    projectUrl?: string;
    buildConfigs?: {
        [name: string]: BuildConfigurationRef;
    };
}
export interface ProjectPage {
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalPages?: number; // int32
    totalHits?: number; // int32
    content?: Project[];
}
export interface ProjectRef {
    id: string;
    name?: string;
    description?: string;
    issueTrackerUrl?: string;
    projectUrl?: string;
}
export interface QueryParameters {
    pageIndex?: Parameters.PageIndex; // int32
    pageSize?: Parameters.PageSize; // int32
    sort?: Parameters.Sort;
    q?: Parameters.Q;
    latest?: Parameters.Latest;
    running?: Parameters.Running;
}
export interface RepositoryCreationResponse {
    taskId?: number; // int32
    repository?: SCMRepository;
}
export type RequestBody = CreateAndSyncSCMRequest;
export namespace Responses {
    export type $200 = User;
    export type $201 = Project;
    export type $202 = RepositoryCreationResponse;
    export type $400 = ErrorResponse;
    export type $409 = ErrorResponse;
    export type $500 = ErrorResponse;
}
export interface SCMRepository {
    id: string;
    internalUrl: string;
    externalUrl?: string;
    preBuildSyncEnabled?: boolean;
}
export interface SCMRepositoryPage {
    pageIndex?: number; // int32
    pageSize?: number; // int32
    totalPages?: number; // int32
    totalHits?: number; // int32
    content?: SCMRepository[];
}
export interface SSHCredentials {
    command?: string;
    password?: string;
}
export interface TargetRepository {
    id: string;
    temporaryRepo: boolean;
    identifier: string;
    repositoryType: "MAVEN" | "NPM" | "COCOA_POD" | "GENERIC_PROXY";
    repositoryPath: string;
}
export interface User {
    id: string;
    username?: string;
}
export interface VertexBuild {
    name?: string;
    dataType?: string;
    data?: Build;
}

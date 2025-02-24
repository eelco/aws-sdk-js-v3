// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { TimestreamWriteServiceException as __BaseException } from "./TimestreamWriteServiceException";

/**
 * <p>You are not authorized to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

export enum BatchLoadDataFormat {
  CSV = "CSV",
}

/**
 * <p>Details about the progress of a batch load task.</p>
 */
export interface BatchLoadProgressReport {
  /**
   * <p></p>
   */
  RecordsProcessed?: number;

  /**
   * <p></p>
   */
  RecordsIngested?: number;

  /**
   * <p></p>
   */
  ParseFailures?: number;

  /**
   * <p></p>
   */
  RecordIngestionFailures?: number;

  /**
   * <p></p>
   */
  FileFailures?: number;

  /**
   * <p></p>
   */
  BytesMetered?: number;
}

export enum BatchLoadStatus {
  CREATED = "CREATED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  PENDING_RESUME = "PENDING_RESUME",
  PROGRESS_STOPPED = "PROGRESS_STOPPED",
  SUCCEEDED = "SUCCEEDED",
}

/**
 * <p>Details about a batch load task.</p>
 */
export interface BatchLoadTask {
  /**
   * <p>The ID of the batch load task.</p>
   */
  TaskId?: string;

  /**
   * <p>Status of the batch load task.</p>
   */
  TaskStatus?: BatchLoadStatus | string;

  /**
   * <p>Database name for the database into which a batch load task loads data.</p>
   */
  DatabaseName?: string;

  /**
   * <p>Table name for the table into which a batch load task loads data.</p>
   */
  TableName?: string;

  /**
   * <p>The time when the Timestream batch load task was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time when the Timestream batch load task was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>
   *       </p>
   */
  ResumableUntil?: Date;
}

/**
 * <p></p>
 */
export interface DimensionMapping {
  /**
   * <p></p>
   */
  SourceColumn?: string;

  /**
   * <p>
   *       </p>
   */
  DestinationColumn?: string;
}

export enum MeasureValueType {
  BIGINT = "BIGINT",
  BOOLEAN = "BOOLEAN",
  DOUBLE = "DOUBLE",
  MULTI = "MULTI",
  TIMESTAMP = "TIMESTAMP",
  VARCHAR = "VARCHAR",
}

export enum ScalarMeasureValueType {
  BIGINT = "BIGINT",
  BOOLEAN = "BOOLEAN",
  DOUBLE = "DOUBLE",
  TIMESTAMP = "TIMESTAMP",
  VARCHAR = "VARCHAR",
}

/**
 * <p></p>
 */
export interface MultiMeasureAttributeMapping {
  /**
   * <p></p>
   */
  SourceColumn: string | undefined;

  /**
   * <p></p>
   */
  TargetMultiMeasureAttributeName?: string;

  /**
   * <p></p>
   */
  MeasureValueType?: ScalarMeasureValueType | string;
}

/**
 * <p></p>
 */
export interface MixedMeasureMapping {
  /**
   * <p></p>
   */
  MeasureName?: string;

  /**
   * <p></p>
   */
  SourceColumn?: string;

  /**
   * <p></p>
   */
  TargetMeasureName?: string;

  /**
   * <p></p>
   */
  MeasureValueType: MeasureValueType | string | undefined;

  /**
   * <p></p>
   */
  MultiMeasureAttributeMappings?: MultiMeasureAttributeMapping[];
}

/**
 * <p></p>
 */
export interface MultiMeasureMappings {
  /**
   * <p></p>
   */
  TargetMultiMeasureName?: string;

  /**
   * <p></p>
   */
  MultiMeasureAttributeMappings: MultiMeasureAttributeMapping[] | undefined;
}

export enum TimeUnit {
  MICROSECONDS = "MICROSECONDS",
  MILLISECONDS = "MILLISECONDS",
  NANOSECONDS = "NANOSECONDS",
  SECONDS = "SECONDS",
}

/**
 * <p>Data model for a batch load task.</p>
 */
export interface DataModel {
  /**
   * <p>Source column to be mapped to time.</p>
   */
  TimeColumn?: string;

  /**
   * <p> The granularity of the timestamp unit. It indicates if the time value is in seconds,
   *          milliseconds, nanoseconds, or other supported values. Default is <code>MILLISECONDS</code>.
   *       </p>
   */
  TimeUnit?: TimeUnit | string;

  /**
   * <p>Source to target mappings for dimensions.</p>
   */
  DimensionMappings: DimensionMapping[] | undefined;

  /**
   * <p>Source to target mappings for multi-measure records.</p>
   */
  MultiMeasureMappings?: MultiMeasureMappings;

  /**
   * <p>Source to target mappings for measures.</p>
   */
  MixedMeasureMappings?: MixedMeasureMapping[];

  /**
   * <p></p>
   */
  MeasureNameColumn?: string;
}

/**
 * <p></p>
 */
export interface DataModelS3Configuration {
  /**
   * <p></p>
   */
  BucketName?: string;

  /**
   * <p></p>
   */
  ObjectKey?: string;
}

/**
 * <p></p>
 */
export interface DataModelConfiguration {
  /**
   * <p></p>
   */
  DataModel?: DataModel;

  /**
   * <p></p>
   */
  DataModelS3Configuration?: DataModelS3Configuration;
}

/**
 * <p>A delimited data format where the column separator can be a comma and the record
 *          separator is a newline character.</p>
 */
export interface CsvConfiguration {
  /**
   * <p>Column separator can be one of comma (','), pipe ('|), semicolon (';'), tab('/t'), or
   *          blank space (' '). </p>
   */
  ColumnSeparator?: string;

  /**
   * <p>Escape character can be one of </p>
   */
  EscapeChar?: string;

  /**
   * <p>Can be single quote (') or double quote (").</p>
   */
  QuoteChar?: string;

  /**
   * <p>Can be blank space (' ').</p>
   */
  NullValue?: string;

  /**
   * <p>Specifies to trim leading and trailing white space.</p>
   */
  TrimWhiteSpace?: boolean;
}

/**
 * <p>
 *       </p>
 */
export interface DataSourceS3Configuration {
  /**
   * <p>The bucket name of the customer S3 bucket.</p>
   */
  BucketName: string | undefined;

  /**
   * <p>
   *       </p>
   */
  ObjectKeyPrefix?: string;
}

/**
 * <p>Defines configuration details about the data source.</p>
 */
export interface DataSourceConfiguration {
  /**
   * <p>Configuration of an S3 location for a file which contains data to load.</p>
   */
  DataSourceS3Configuration: DataSourceS3Configuration | undefined;

  /**
   * <p>A delimited data format where the column separator can be a comma and the record
   *          separator is a newline character.</p>
   */
  CsvConfiguration?: CsvConfiguration;

  /**
   * <p>This is currently CSV.</p>
   */
  DataFormat: BatchLoadDataFormat | string | undefined;
}

export enum S3EncryptionOption {
  SSE_KMS = "SSE_KMS",
  SSE_S3 = "SSE_S3",
}

/**
 * <p></p>
 */
export interface ReportS3Configuration {
  /**
   * <p></p>
   */
  BucketName: string | undefined;

  /**
   * <p></p>
   */
  ObjectKeyPrefix?: string;

  /**
   * <p></p>
   */
  EncryptionOption?: S3EncryptionOption | string;

  /**
   * <p></p>
   */
  KmsKeyId?: string;
}

/**
 * <p>Report configuration for a batch load task. This contains details about where error reports are stored.</p>
 */
export interface ReportConfiguration {
  /**
   * <p>Configuration of an S3 location to write error reports and events for a batch
   *          load.</p>
   */
  ReportS3Configuration?: ReportS3Configuration;
}

/**
 * <p>Details about a batch load task.</p>
 */
export interface BatchLoadTaskDescription {
  /**
   * <p>The ID of the batch load task.</p>
   */
  TaskId?: string;

  /**
   * <p></p>
   */
  ErrorMessage?: string;

  /**
   * <p>Configuration details about the data source for a batch load task.</p>
   */
  DataSourceConfiguration?: DataSourceConfiguration;

  /**
   * <p></p>
   */
  ProgressReport?: BatchLoadProgressReport;

  /**
   * <p>Report configuration for a batch load task. This contains details about where error reports are stored.</p>
   */
  ReportConfiguration?: ReportConfiguration;

  /**
   * <p>Data model configuration for a batch load task. This contains details about where a data model for a batch load task is stored.</p>
   */
  DataModelConfiguration?: DataModelConfiguration;

  /**
   * <p></p>
   */
  TargetDatabaseName?: string;

  /**
   * <p></p>
   */
  TargetTableName?: string;

  /**
   * <p>Status of the batch load task.</p>
   */
  TaskStatus?: BatchLoadStatus | string;

  /**
   * <p></p>
   */
  RecordVersion?: number;

  /**
   * <p>The time when the Timestream batch load task was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time when the Timestream batch load task was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>
   *       </p>
   */
  ResumableUntil?: Date;
}

/**
 * <p>Timestream was unable to process this request because it contains resource that
 *          already exists.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
  }
}

export interface CreateBatchLoadTaskRequest {
  /**
   * <p></p>
   */
  ClientToken?: string;

  /**
   * <p></p>
   */
  DataModelConfiguration?: DataModelConfiguration;

  /**
   * <p>Defines configuration details about the data source for a batch load task.</p>
   */
  DataSourceConfiguration: DataSourceConfiguration | undefined;

  /**
   * <p>Report configuration for a batch load task. This contains details about where error reports are stored.</p>
   */
  ReportConfiguration: ReportConfiguration | undefined;

  /**
   * <p>Target Timestream database for a batch load task.</p>
   */
  TargetDatabaseName: string | undefined;

  /**
   * <p>Target Timestream table for a batch load task.</p>
   */
  TargetTableName: string | undefined;

  /**
   * <p></p>
   */
  RecordVersion?: number;
}

export interface CreateBatchLoadTaskResponse {
  /**
   * <p>The ID of the batch load task.</p>
   */
  TaskId: string | undefined;
}

/**
 * <p>
 *          Timestream was unable to fully process this request because of an internal server
 *          error.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The requested endpoint was not valid.</p>
 */
export class InvalidEndpointException extends __BaseException {
  readonly name: "InvalidEndpointException" = "InvalidEndpointException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidEndpointException, __BaseException>) {
    super({
      name: "InvalidEndpointException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidEndpointException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The operation tried to access a nonexistent resource. The resource might not be
 *          specified correctly, or its status might not be ACTIVE.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p> The instance quota of resource exceeded for this account.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p> Too many requests were made by a user and they exceeded the service quotas. The request
 *          was throttled.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p> An invalid or malformed request.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p> A tag is a label that you assign to a Timestream database and/or table. Each
 *          tag consists of a key and an optional value, both of which you define. With tags, you can
 *          categorize databases and/or tables, for example, by purpose, owner, or environment. </p>
 */
export interface Tag {
  /**
   * <p> The key of the tag. Tag keys are case sensitive. </p>
   */
  Key: string | undefined;

  /**
   * <p> The value of the tag. Tag values are case-sensitive and can be null. </p>
   */
  Value: string | undefined;
}

export interface CreateDatabaseRequest {
  /**
   * <p>The name of the Timestream database.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The KMS key for the database. If the KMS key is not
   *          specified, the database will be encrypted with a Timestream managed KMS key located in your account. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">Amazon Web Services managed keys</a>.</p>
   */
  KmsKeyId?: string;

  /**
   * <p> A list of key-value pairs to label the table. </p>
   */
  Tags?: Tag[];
}

/**
 * <p>A top-level container for a table. Databases and tables are the fundamental management
 *          concepts in Amazon Timestream. All tables in a database are encrypted with the
 *          same KMS key.</p>
 */
export interface Database {
  /**
   * <p>The Amazon Resource Name that uniquely identifies this database.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the Timestream database.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The total number of tables found within a Timestream database. </p>
   */
  TableCount?: number;

  /**
   * <p>The identifier of the KMS key used to encrypt the data stored in the
   *          database.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The time when the database was created, calculated from the Unix epoch time.</p>
   */
  CreationTime?: Date;

  /**
   * <p> The last time that this database was updated. </p>
   */
  LastUpdatedTime?: Date;
}

export interface CreateDatabaseResponse {
  /**
   * <p>The newly created Timestream database.</p>
   */
  Database?: Database;
}

/**
 * <p>The configuration that specifies an S3 location.</p>
 */
export interface S3Configuration {
  /**
   * <p>The bucket name of the customer S3 bucket.</p>
   */
  BucketName?: string;

  /**
   * <p>The object key preview for the customer S3 location.</p>
   */
  ObjectKeyPrefix?: string;

  /**
   * <p>The encryption option for the customer S3 location. Options are S3 server-side
   *          encryption with an S3 managed key or Amazon Web Services managed key.</p>
   */
  EncryptionOption?: S3EncryptionOption | string;

  /**
   * <p>The KMS key ID for the customer S3 location when encrypting with an
   *             Amazon Web Services managed key.</p>
   */
  KmsKeyId?: string;
}

/**
 * <p>The location to write error reports for records rejected, asynchronously, during
 *          magnetic store writes.</p>
 */
export interface MagneticStoreRejectedDataLocation {
  /**
   * <p>Configuration of an S3 location to write error reports for records rejected,
   *          asynchronously, during magnetic store writes.</p>
   */
  S3Configuration?: S3Configuration;
}

/**
 * <p>The set of properties on a table for configuring magnetic store writes.</p>
 */
export interface MagneticStoreWriteProperties {
  /**
   * <p>A flag to enable magnetic store writes.</p>
   */
  EnableMagneticStoreWrites: boolean | undefined;

  /**
   * <p>The location to write error reports for records rejected asynchronously during magnetic
   *          store writes.</p>
   */
  MagneticStoreRejectedDataLocation?: MagneticStoreRejectedDataLocation;
}

/**
 * <p>Retention properties contain the duration for which your time-series data must be stored
 *          in the magnetic store and the memory store. </p>
 */
export interface RetentionProperties {
  /**
   * <p>The duration for which data must be stored in the memory store. </p>
   */
  MemoryStoreRetentionPeriodInHours: number | undefined;

  /**
   * <p>The duration for which data must be stored in the magnetic store. </p>
   */
  MagneticStoreRetentionPeriodInDays: number | undefined;
}

export interface CreateTableRequest {
  /**
   * <p>The name of the Timestream database.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the Timestream table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The duration for which your time-series data must be stored in the memory store and the
   *          magnetic store.</p>
   */
  RetentionProperties?: RetentionProperties;

  /**
   * <p> A list of key-value pairs to label the table. </p>
   */
  Tags?: Tag[];

  /**
   * <p>Contains properties to set on the table when enabling magnetic store writes.</p>
   */
  MagneticStoreWriteProperties?: MagneticStoreWriteProperties;
}

export enum TableStatus {
  ACTIVE = "ACTIVE",
  DELETING = "DELETING",
  RESTORING = "RESTORING",
}

/**
 * <p>Represents a database table in Timestream. Tables contain one or more related
 *          time series. You can modify the retention duration of the memory store and the magnetic
 *          store for a table. </p>
 */
export interface Table {
  /**
   * <p>The Amazon Resource Name that uniquely identifies this table.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the Timestream table.</p>
   */
  TableName?: string;

  /**
   * <p>The name of the Timestream database that contains this table.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The current state of the table:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DELETING</code> - The table is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - The table is ready for use.</p>
   *             </li>
   *          </ul>
   */
  TableStatus?: TableStatus | string;

  /**
   * <p>The retention duration for the memory store and magnetic store.</p>
   */
  RetentionProperties?: RetentionProperties;

  /**
   * <p>The time when the Timestream table was created. </p>
   */
  CreationTime?: Date;

  /**
   * <p>The time when the Timestream table was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>Contains properties to set on the table when enabling magnetic store writes.</p>
   */
  MagneticStoreWriteProperties?: MagneticStoreWriteProperties;
}

export interface CreateTableResponse {
  /**
   * <p>The newly created Timestream table.</p>
   */
  Table?: Table;
}

export interface DeleteDatabaseRequest {
  /**
   * <p>The name of the Timestream database to be deleted.</p>
   */
  DatabaseName: string | undefined;
}

export interface DeleteTableRequest {
  /**
   * <p>The name of the database where the Timestream database is to be deleted.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the Timestream table to be deleted.</p>
   */
  TableName: string | undefined;
}

export interface DescribeBatchLoadTaskRequest {
  /**
   * <p>The ID of the batch load task.</p>
   */
  TaskId: string | undefined;
}

export interface DescribeBatchLoadTaskResponse {
  /**
   * <p>Description of the batch load task.</p>
   */
  BatchLoadTaskDescription: BatchLoadTaskDescription | undefined;
}

export interface DescribeDatabaseRequest {
  /**
   * <p>The name of the Timestream database.</p>
   */
  DatabaseName: string | undefined;
}

export interface DescribeDatabaseResponse {
  /**
   * <p>The name of the Timestream table.</p>
   */
  Database?: Database;
}

export interface DescribeEndpointsRequest {}

/**
 * <p>Represents an available endpoint against which to make API calls against, as well as the
 *          TTL for that endpoint.</p>
 */
export interface Endpoint {
  /**
   * <p>An endpoint address.</p>
   */
  Address: string | undefined;

  /**
   * <p>The TTL for the endpoint, in minutes.</p>
   */
  CachePeriodInMinutes: number | undefined;
}

export interface DescribeEndpointsResponse {
  /**
   * <p>An <code>Endpoints</code> object is returned when a <code>DescribeEndpoints</code>
   *          request is made.</p>
   */
  Endpoints: Endpoint[] | undefined;
}

export interface DescribeTableRequest {
  /**
   * <p>The name of the Timestream database.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the Timestream table.</p>
   */
  TableName: string | undefined;
}

export interface DescribeTableResponse {
  /**
   * <p>The Timestream table.</p>
   */
  Table?: Table;
}

export enum DimensionValueType {
  VARCHAR = "VARCHAR",
}

/**
 * <p>Represents the metadata attributes of the time series. For example, the name and
 *          Availability Zone of an EC2 instance or the name of the manufacturer of a wind turbine are
 *          dimensions. </p>
 */
export interface Dimension {
  /**
   * <p> Dimension represents the metadata attributes of the time series. For example, the name
   *          and Availability Zone of an EC2 instance or the name of the manufacturer of a wind turbine
   *          are dimensions. </p>
   *          <p>For constraints on dimension names, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html#limits.naming">Naming
   *             Constraints</a>.</p>
   */
  Name: string | undefined;

  /**
   * <p>The value of the dimension.</p>
   */
  Value: string | undefined;

  /**
   * <p>The data type of the dimension for the time-series data point.</p>
   */
  DimensionValueType?: DimensionValueType | string;
}

export interface ListBatchLoadTasksRequest {
  /**
   * <p>A token to specify where to start paginating. This is the NextToken from a previously
   *          truncated response.</p>
   */
  NextToken?: string;

  /**
   * <p>The total number of items to return in the output. If the total number of items
   *          available is more than the value specified, a NextToken is provided in the output. To
   *          resume pagination, provide the NextToken value as argument of a subsequent API
   *          invocation.</p>
   */
  MaxResults?: number;

  /**
   * <p>Status of the batch load task.</p>
   */
  TaskStatus?: BatchLoadStatus | string;
}

export interface ListBatchLoadTasksResponse {
  /**
   * <p>A token to specify where to start paginating. Provide the next
   *          ListBatchLoadTasksRequest.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of batch load task details.</p>
   */
  BatchLoadTasks?: BatchLoadTask[];
}

export interface ListDatabasesRequest {
  /**
   * <p>The pagination token. To resume pagination, provide the NextToken value as argument of a
   *          subsequent API invocation.</p>
   */
  NextToken?: string;

  /**
   * <p>The total number of items to return in the output. If the total number of items
   *          available is more than the value specified, a NextToken is provided in the output. To
   *          resume pagination, provide the NextToken value as argument of a subsequent API
   *          invocation.</p>
   */
  MaxResults?: number;
}

export interface ListDatabasesResponse {
  /**
   * <p>A list of database names.</p>
   */
  Databases?: Database[];

  /**
   * <p>The pagination token. This parameter is returned when the response is truncated.</p>
   */
  NextToken?: string;
}

export interface ListTablesRequest {
  /**
   * <p>The name of the Timestream database.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The pagination token. To resume pagination, provide the NextToken value as argument of a
   *          subsequent API invocation.</p>
   */
  NextToken?: string;

  /**
   * <p>The total number of items to return in the output. If the total number of items
   *          available is more than the value specified, a NextToken is provided in the output. To
   *          resume pagination, provide the NextToken value as argument of a subsequent API
   *          invocation.</p>
   */
  MaxResults?: number;
}

export interface ListTablesResponse {
  /**
   * <p>A list of tables.</p>
   */
  Tables?: Table[];

  /**
   * <p>A token to specify where to start paginating. This is the NextToken from a previously
   *          truncated response.</p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p> The Timestream resource with tags to be listed. This value is an Amazon
   *          Resource Name (ARN). </p>
   */
  ResourceARN: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p> The tags currently associated with the Timestream resource. </p>
   */
  Tags?: Tag[];
}

/**
 * <p> Represents the data attribute of the time series. For example, the CPU utilization of
 *          an EC2 instance or the RPM of a wind turbine are measures. MeasureValue has both name and
 *          value. </p>
 *          <p> MeasureValue is only allowed for type <code>MULTI</code>. Using <code>MULTI</code>
 *          type, you can pass multiple data attributes associated with the same time series in a
 *          single record </p>
 */
export interface MeasureValue {
  /**
   * <p> The name of the MeasureValue. </p>
   *          <p> For constraints on MeasureValue names, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html#limits.naming"> Naming Constraints</a> in the Amazon Timestream Developer Guide.</p>
   */
  Name: string | undefined;

  /**
   * <p> The value for the MeasureValue. </p>
   */
  Value: string | undefined;

  /**
   * <p>Contains the data type of the MeasureValue for the time-series data point.</p>
   */
  Type: MeasureValueType | string | undefined;
}

/**
 * <p>Represents a time-series data point being written into Timestream. Each record
 *          contains an array of dimensions. Dimensions represent the metadata attributes of a
 *          time-series data point, such as the instance name or Availability Zone of an EC2 instance.
 *          A record also contains the measure name, which is the name of the measure being collected
 *          (for example, the CPU utilization of an EC2 instance). Additionally, a record contains the
 *          measure value and the value type, which is the data type of the measure value. Also, the
 *          record contains the timestamp of when the measure was collected and the timestamp unit,
 *          which represents the granularity of the timestamp. </p>
 *          <p> Records have a <code>Version</code> field, which is a 64-bit <code>long</code> that you
 *          can use for updating data points. Writes of a duplicate record with the same dimension,
 *          timestamp, and measure name but different measure value will only succeed if the
 *             <code>Version</code> attribute of the record in the write request is higher than that of
 *          the existing record. Timestream defaults to a <code>Version</code> of
 *             <code>1</code> for records without the <code>Version</code> field. </p>
 */
export interface _Record {
  /**
   * <p>Contains the list of dimensions for time-series data points.</p>
   */
  Dimensions?: Dimension[];

  /**
   * <p>Measure represents the data attribute of the time series. For example, the CPU
   *          utilization of an EC2 instance or the RPM of a wind turbine are measures. </p>
   */
  MeasureName?: string;

  /**
   * <p> Contains the measure value for the time-series data point. </p>
   */
  MeasureValue?: string;

  /**
   * <p> Contains the data type of the measure value for the time-series data point. Default
   *          type is <code>DOUBLE</code>. </p>
   */
  MeasureValueType?: MeasureValueType | string;

  /**
   * <p> Contains the time at which the measure value for the data point was collected. The time
   *          value plus the unit provides the time elapsed since the epoch. For example, if the time
   *          value is <code>12345</code> and the unit is <code>ms</code>, then <code>12345 ms</code>
   *          have elapsed since the epoch. </p>
   */
  Time?: string;

  /**
   * <p> The granularity of the timestamp unit. It indicates if the time value is in seconds,
   *          milliseconds, nanoseconds, or other supported values. Default is <code>MILLISECONDS</code>.
   *       </p>
   */
  TimeUnit?: TimeUnit | string;

  /**
   * <p>64-bit attribute used for record updates. Write requests for duplicate data with a
   *          higher version number will update the existing measure value and version. In cases where
   *          the measure value is the same, <code>Version</code> will still be updated. Default value is
   *             <code>1</code>.</p>
   *          <note>
   *             <p>
   *                <code>Version</code> must be <code>1</code> or greater, or you will receive a
   *                <code>ValidationException</code> error.</p>
   *          </note>
   */
  Version?: number;

  /**
   * <p> Contains the list of MeasureValue for time-series data points. </p>
   *          <p> This is only allowed for type <code>MULTI</code>. For scalar values, use
   *             <code>MeasureValue</code> attribute of the record directly. </p>
   */
  MeasureValues?: MeasureValue[];
}

/**
 * <p>Information on the records ingested by this request.</p>
 */
export interface RecordsIngested {
  /**
   * <p>Total count of successfully ingested records.</p>
   */
  Total?: number;

  /**
   * <p>Count of records ingested into the memory store.</p>
   */
  MemoryStore?: number;

  /**
   * <p>Count of records ingested into the magnetic store.</p>
   */
  MagneticStore?: number;
}

/**
 * <p> Represents records that were not successfully inserted into Timestream due to
 *          data validation issues that must be resolved before reinserting time-series data into the
 *          system. </p>
 */
export interface RejectedRecord {
  /**
   * <p> The index of the record in the input request for WriteRecords. Indexes begin with 0.
   *       </p>
   */
  RecordIndex?: number;

  /**
   * <p> The reason why a record was not successfully inserted into Timestream.
   *          Possible causes of failure include: </p>
   *          <ul>
   *             <li>
   *                <p>Records with duplicate data where there are multiple records with the same
   *                dimensions, timestamps, and measure names but: </p>
   *                <ul>
   *                   <li>
   *                      <p>Measure values are different</p>
   *                   </li>
   *                   <li>
   *                      <p>Version is not present in the request, <i>or</i> the value of
   *                      version in the new record is equal to or lower than the existing value</p>
   *                   </li>
   *                </ul>
   *                <p>If Timestream rejects data for this case, the
   *                   <code>ExistingVersion</code> field in the <code>RejectedRecords</code> response
   *                will indicate the current record’s version. To force an update, you can resend the
   *                request with a version for the record set to a value greater than the
   *                   <code>ExistingVersion</code>.</p>
   *             </li>
   *             <li>
   *                <p> Records with timestamps that lie outside the retention duration of the memory
   *                store. </p>
   *                <note>
   *                   <p>When the retention window is updated, you will receive a
   *                      <code>RejectedRecords</code> exception if you immediately try to ingest data
   *                   within the new window. To avoid a <code>RejectedRecords</code> exception, wait
   *                   until the duration of the new window to ingest new data. For further information,
   *                   see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/best-practices.html#configuration"> Best
   *                      Practices for Configuring Timestream</a> and <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/storage.html">the
   *                      explanation of how storage works in Timestream</a>.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p> Records with dimensions or measures that exceed the Timestream defined
   *                limits. </p>
   *             </li>
   *          </ul>
   *          <p> For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the
   *             Timestream Developer Guide. </p>
   */
  Reason?: string;

  /**
   * <p>The existing version of the record. This value is populated in scenarios where an
   *          identical record exists with a higher version than the version in the write request.</p>
   */
  ExistingVersion?: number;
}

/**
 * <p> WriteRecords would throw this exception in the following cases: </p>
 *          <ul>
 *             <li>
 *                <p>Records with duplicate data where there are multiple records with the same
 *                dimensions, timestamps, and measure names but: </p>
 *                <ul>
 *                   <li>
 *                      <p>Measure values are different</p>
 *                   </li>
 *                   <li>
 *                      <p>Version is not present in the request <i>or</i> the value of
 *                      version in the new record is equal to or lower than the existing value</p>
 *                   </li>
 *                </ul>
 *                <p> In this case, if Timestream rejects data, the
 *                   <code>ExistingVersion</code> field in the <code>RejectedRecords</code> response
 *                will indicate the current record’s version. To force an update, you can resend the
 *                request with a version for the record set to a value greater than the
 *                   <code>ExistingVersion</code>.</p>
 *             </li>
 *             <li>
 *                <p> Records with timestamps that lie outside the retention duration of the memory
 *                store. </p>
 *             </li>
 *             <li>
 *                <p> Records with dimensions or measures that exceed the Timestream defined
 *                limits. </p>
 *             </li>
 *          </ul>
 *          <p> For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Quotas</a> in the Amazon Timestream Developer Guide. </p>
 */
export class RejectedRecordsException extends __BaseException {
  readonly name: "RejectedRecordsException" = "RejectedRecordsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>
   *       </p>
   */
  RejectedRecords?: RejectedRecord[];
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RejectedRecordsException, __BaseException>) {
    super({
      name: "RejectedRecordsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RejectedRecordsException.prototype);
    this.Message = opts.Message;
    this.RejectedRecords = opts.RejectedRecords;
  }
}

export interface ResumeBatchLoadTaskRequest {
  /**
   * <p>The ID of the batch load task to resume.</p>
   */
  TaskId: string | undefined;
}

export interface ResumeBatchLoadTaskResponse {}

export interface TagResourceRequest {
  /**
   * <p> Identifies the Timestream resource to which tags should be added. This value
   *          is an Amazon Resource Name (ARN). </p>
   */
  ResourceARN: string | undefined;

  /**
   * <p> The tags to be assigned to the Timestream resource. </p>
   */
  Tags: Tag[] | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p> The Timestream resource that the tags will be removed from. This value is an
   *          Amazon Resource Name (ARN). </p>
   */
  ResourceARN: string | undefined;

  /**
   * <p> A list of tags keys. Existing tags of the resource whose keys are members of this list
   *          will be removed from the Timestream resource. </p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateDatabaseRequest {
  /**
   * <p> The name of the database. </p>
   */
  DatabaseName: string | undefined;

  /**
   * <p> The identifier of the new KMS key (<code>KmsKeyId</code>) to be used to
   *          encrypt the data stored in the database. If the <code>KmsKeyId</code> currently registered
   *          with the database is the same as the <code>KmsKeyId</code> in the request, there will not
   *          be any update. </p>
   *          <p>You can specify the <code>KmsKeyId</code> using any of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN:
   *                   <code>arn:aws:kms:us-east-1:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias name: <code>alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Alias ARN:
   *                <code>arn:aws:kms:us-east-1:111122223333:alias/ExampleAlias</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  KmsKeyId: string | undefined;
}

export interface UpdateDatabaseResponse {
  /**
   * <p>A top-level container for a table. Databases and tables are the fundamental management
   *          concepts in Amazon Timestream. All tables in a database are encrypted with the
   *          same KMS key.</p>
   */
  Database?: Database;
}

export interface UpdateTableRequest {
  /**
   * <p>The name of the Timestream database.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the Timestream table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The retention duration of the memory store and the magnetic store.</p>
   */
  RetentionProperties?: RetentionProperties;

  /**
   * <p>Contains properties to set on the table when enabling magnetic store writes.</p>
   */
  MagneticStoreWriteProperties?: MagneticStoreWriteProperties;
}

export interface UpdateTableResponse {
  /**
   * <p>The updated Timestream table.</p>
   */
  Table?: Table;
}

export interface WriteRecordsRequest {
  /**
   * <p>The name of the Timestream database.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the Timestream table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A record that contains the common measure, dimension, time, and version attributes
   *          shared across all the records in the request. The measure and dimension attributes
   *          specified will be merged with the measure and dimension attributes in the records object
   *          when the data is written into Timestream. Dimensions may not overlap, or a
   *             <code>ValidationException</code> will be thrown. In other words, a record must contain
   *          dimensions with unique names. </p>
   */
  CommonAttributes?: _Record;

  /**
   * <p>An array of records that contain the unique measure, dimension, time, and version
   *          attributes for each time-series data point. </p>
   */
  Records: _Record[] | undefined;
}

export interface WriteRecordsResponse {
  /**
   * <p>Information on the records ingested by this request.</p>
   */
  RecordsIngested?: RecordsIngested;
}

/**
 * @internal
 */
export const BatchLoadProgressReportFilterSensitiveLog = (obj: BatchLoadProgressReport): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchLoadTaskFilterSensitiveLog = (obj: BatchLoadTask): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DimensionMappingFilterSensitiveLog = (obj: DimensionMapping): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MultiMeasureAttributeMappingFilterSensitiveLog = (obj: MultiMeasureAttributeMapping): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MixedMeasureMappingFilterSensitiveLog = (obj: MixedMeasureMapping): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MultiMeasureMappingsFilterSensitiveLog = (obj: MultiMeasureMappings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataModelFilterSensitiveLog = (obj: DataModel): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataModelS3ConfigurationFilterSensitiveLog = (obj: DataModelS3Configuration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataModelConfigurationFilterSensitiveLog = (obj: DataModelConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CsvConfigurationFilterSensitiveLog = (obj: CsvConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataSourceS3ConfigurationFilterSensitiveLog = (obj: DataSourceS3Configuration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataSourceConfigurationFilterSensitiveLog = (obj: DataSourceConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReportS3ConfigurationFilterSensitiveLog = (obj: ReportS3Configuration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReportConfigurationFilterSensitiveLog = (obj: ReportConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchLoadTaskDescriptionFilterSensitiveLog = (obj: BatchLoadTaskDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBatchLoadTaskRequestFilterSensitiveLog = (obj: CreateBatchLoadTaskRequest): any => ({
  ...obj,
  ...(obj.ClientToken && { ClientToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateBatchLoadTaskResponseFilterSensitiveLog = (obj: CreateBatchLoadTaskResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDatabaseRequestFilterSensitiveLog = (obj: CreateDatabaseRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatabaseFilterSensitiveLog = (obj: Database): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDatabaseResponseFilterSensitiveLog = (obj: CreateDatabaseResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ConfigurationFilterSensitiveLog = (obj: S3Configuration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MagneticStoreRejectedDataLocationFilterSensitiveLog = (obj: MagneticStoreRejectedDataLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MagneticStoreWritePropertiesFilterSensitiveLog = (obj: MagneticStoreWriteProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RetentionPropertiesFilterSensitiveLog = (obj: RetentionProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTableRequestFilterSensitiveLog = (obj: CreateTableRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TableFilterSensitiveLog = (obj: Table): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTableResponseFilterSensitiveLog = (obj: CreateTableResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDatabaseRequestFilterSensitiveLog = (obj: DeleteDatabaseRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTableRequestFilterSensitiveLog = (obj: DeleteTableRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBatchLoadTaskRequestFilterSensitiveLog = (obj: DescribeBatchLoadTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBatchLoadTaskResponseFilterSensitiveLog = (obj: DescribeBatchLoadTaskResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDatabaseRequestFilterSensitiveLog = (obj: DescribeDatabaseRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDatabaseResponseFilterSensitiveLog = (obj: DescribeDatabaseResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEndpointsRequestFilterSensitiveLog = (obj: DescribeEndpointsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EndpointFilterSensitiveLog = (obj: Endpoint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEndpointsResponseFilterSensitiveLog = (obj: DescribeEndpointsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTableRequestFilterSensitiveLog = (obj: DescribeTableRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTableResponseFilterSensitiveLog = (obj: DescribeTableResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DimensionFilterSensitiveLog = (obj: Dimension): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBatchLoadTasksRequestFilterSensitiveLog = (obj: ListBatchLoadTasksRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBatchLoadTasksResponseFilterSensitiveLog = (obj: ListBatchLoadTasksResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDatabasesRequestFilterSensitiveLog = (obj: ListDatabasesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDatabasesResponseFilterSensitiveLog = (obj: ListDatabasesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTablesRequestFilterSensitiveLog = (obj: ListTablesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTablesResponseFilterSensitiveLog = (obj: ListTablesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MeasureValueFilterSensitiveLog = (obj: MeasureValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const _RecordFilterSensitiveLog = (obj: _Record): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecordsIngestedFilterSensitiveLog = (obj: RecordsIngested): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RejectedRecordFilterSensitiveLog = (obj: RejectedRecord): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResumeBatchLoadTaskRequestFilterSensitiveLog = (obj: ResumeBatchLoadTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResumeBatchLoadTaskResponseFilterSensitiveLog = (obj: ResumeBatchLoadTaskResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDatabaseRequestFilterSensitiveLog = (obj: UpdateDatabaseRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDatabaseResponseFilterSensitiveLog = (obj: UpdateDatabaseResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateTableRequestFilterSensitiveLog = (obj: UpdateTableRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateTableResponseFilterSensitiveLog = (obj: UpdateTableResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WriteRecordsRequestFilterSensitiveLog = (obj: WriteRecordsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WriteRecordsResponseFilterSensitiveLog = (obj: WriteRecordsResponse): any => ({
  ...obj,
});

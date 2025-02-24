// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListBatchLoadTasksCommand,
  ListBatchLoadTasksCommandInput,
  ListBatchLoadTasksCommandOutput,
} from "../commands/ListBatchLoadTasksCommand";
import { TimestreamWrite } from "../TimestreamWrite";
import { TimestreamWriteClient } from "../TimestreamWriteClient";
import { TimestreamWritePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: TimestreamWriteClient,
  input: ListBatchLoadTasksCommandInput,
  ...args: any
): Promise<ListBatchLoadTasksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBatchLoadTasksCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: TimestreamWrite,
  input: ListBatchLoadTasksCommandInput,
  ...args: any
): Promise<ListBatchLoadTasksCommandOutput> => {
  // @ts-ignore
  return await client.listBatchLoadTasks(input, ...args);
};
export async function* paginateListBatchLoadTasks(
  config: TimestreamWritePaginationConfiguration,
  input: ListBatchLoadTasksCommandInput,
  ...additionalArguments: any
): Paginator<ListBatchLoadTasksCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBatchLoadTasksCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof TimestreamWrite) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof TimestreamWriteClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected TimestreamWrite | TimestreamWriteClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}

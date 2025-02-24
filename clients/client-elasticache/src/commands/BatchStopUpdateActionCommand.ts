// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import {
  BatchStopUpdateActionMessage,
  BatchStopUpdateActionMessageFilterSensitiveLog,
  UpdateActionResultsMessage,
  UpdateActionResultsMessageFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryBatchStopUpdateActionCommand,
  serializeAws_queryBatchStopUpdateActionCommand,
} from "../protocols/Aws_query";

/**
 * The input for {@link BatchStopUpdateActionCommand}.
 */
export interface BatchStopUpdateActionCommandInput extends BatchStopUpdateActionMessage {}
/**
 * The output of {@link BatchStopUpdateActionCommand}.
 */
export interface BatchStopUpdateActionCommandOutput extends UpdateActionResultsMessage, __MetadataBearer {}

/**
 * <p>Stop the service update. For more information on service updates and stopping them, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/stopping-self-service-updates.html">Stopping Service Updates</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, BatchStopUpdateActionCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, BatchStopUpdateActionCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new BatchStopUpdateActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchStopUpdateActionCommandInput} for command's `input` shape.
 * @see {@link BatchStopUpdateActionCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 */
export class BatchStopUpdateActionCommand extends $Command<
  BatchStopUpdateActionCommandInput,
  BatchStopUpdateActionCommandOutput,
  ElastiCacheClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: BatchStopUpdateActionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElastiCacheClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchStopUpdateActionCommandInput, BatchStopUpdateActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchStopUpdateActionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElastiCacheClient";
    const commandName = "BatchStopUpdateActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchStopUpdateActionMessageFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateActionResultsMessageFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchStopUpdateActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryBatchStopUpdateActionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchStopUpdateActionCommandOutput> {
    return deserializeAws_queryBatchStopUpdateActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

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

import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import {
  ListAnomalyGroupSummariesRequest,
  ListAnomalyGroupSummariesRequestFilterSensitiveLog,
  ListAnomalyGroupSummariesResponse,
  ListAnomalyGroupSummariesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListAnomalyGroupSummariesCommand,
  serializeAws_restJson1ListAnomalyGroupSummariesCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link ListAnomalyGroupSummariesCommand}.
 */
export interface ListAnomalyGroupSummariesCommandInput extends ListAnomalyGroupSummariesRequest {}
/**
 * The output of {@link ListAnomalyGroupSummariesCommand}.
 */
export interface ListAnomalyGroupSummariesCommandOutput extends ListAnomalyGroupSummariesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of anomaly groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, ListAnomalyGroupSummariesCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, ListAnomalyGroupSummariesCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new ListAnomalyGroupSummariesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAnomalyGroupSummariesCommandInput} for command's `input` shape.
 * @see {@link ListAnomalyGroupSummariesCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for LookoutMetricsClient's `config` shape.
 *
 */
export class ListAnomalyGroupSummariesCommand extends $Command<
  ListAnomalyGroupSummariesCommandInput,
  ListAnomalyGroupSummariesCommandOutput,
  LookoutMetricsClientResolvedConfig
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

  constructor(readonly input: ListAnomalyGroupSummariesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutMetricsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAnomalyGroupSummariesCommandInput, ListAnomalyGroupSummariesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAnomalyGroupSummariesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutMetricsClient";
    const commandName = "ListAnomalyGroupSummariesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAnomalyGroupSummariesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListAnomalyGroupSummariesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAnomalyGroupSummariesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAnomalyGroupSummariesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAnomalyGroupSummariesCommandOutput> {
    return deserializeAws_restJson1ListAnomalyGroupSummariesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

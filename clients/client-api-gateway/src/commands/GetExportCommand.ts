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

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import {
  ExportResponse,
  ExportResponseFilterSensitiveLog,
  GetExportRequest,
  GetExportRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetExportCommand,
  serializeAws_restJson1GetExportCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link GetExportCommand}.
 */
export interface GetExportCommandInput extends GetExportRequest {}
/**
 * The output of {@link GetExportCommand}.
 */
export interface GetExportCommandOutput extends ExportResponse, __MetadataBearer {}

/**
 * <p>Exports a deployed version of a RestApi in a specified format.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetExportCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetExportCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetExportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetExportCommandInput} for command's `input` shape.
 * @see {@link GetExportCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 */
export class GetExportCommand extends $Command<
  GetExportCommandInput,
  GetExportCommandOutput,
  APIGatewayClientResolvedConfig
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

  constructor(readonly input: GetExportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetExportCommandInput, GetExportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetExportCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "GetExportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetExportRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ExportResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetExportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetExportCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetExportCommandOutput> {
    return deserializeAws_restJson1GetExportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

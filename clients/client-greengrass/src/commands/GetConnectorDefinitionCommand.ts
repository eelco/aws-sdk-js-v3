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

import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import {
  GetConnectorDefinitionRequest,
  GetConnectorDefinitionRequestFilterSensitiveLog,
  GetConnectorDefinitionResponse,
  GetConnectorDefinitionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetConnectorDefinitionCommand,
  serializeAws_restJson1GetConnectorDefinitionCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link GetConnectorDefinitionCommand}.
 */
export interface GetConnectorDefinitionCommandInput extends GetConnectorDefinitionRequest {}
/**
 * The output of {@link GetConnectorDefinitionCommand}.
 */
export interface GetConnectorDefinitionCommandOutput extends GetConnectorDefinitionResponse, __MetadataBearer {}

/**
 * Retrieves information about a connector definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetConnectorDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetConnectorDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetConnectorDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetConnectorDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetConnectorDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 */
export class GetConnectorDefinitionCommand extends $Command<
  GetConnectorDefinitionCommandInput,
  GetConnectorDefinitionCommandOutput,
  GreengrassClientResolvedConfig
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

  constructor(readonly input: GetConnectorDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetConnectorDefinitionCommandInput, GetConnectorDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetConnectorDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "GetConnectorDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetConnectorDefinitionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetConnectorDefinitionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetConnectorDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetConnectorDefinitionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetConnectorDefinitionCommandOutput> {
    return deserializeAws_restJson1GetConnectorDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

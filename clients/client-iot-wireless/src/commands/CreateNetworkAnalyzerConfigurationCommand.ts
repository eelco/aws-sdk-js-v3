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

import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  CreateNetworkAnalyzerConfigurationRequest,
  CreateNetworkAnalyzerConfigurationRequestFilterSensitiveLog,
  CreateNetworkAnalyzerConfigurationResponse,
  CreateNetworkAnalyzerConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateNetworkAnalyzerConfigurationCommand,
  serializeAws_restJson1CreateNetworkAnalyzerConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link CreateNetworkAnalyzerConfigurationCommand}.
 */
export interface CreateNetworkAnalyzerConfigurationCommandInput extends CreateNetworkAnalyzerConfigurationRequest {}
/**
 * The output of {@link CreateNetworkAnalyzerConfigurationCommand}.
 */
export interface CreateNetworkAnalyzerConfigurationCommandOutput
  extends CreateNetworkAnalyzerConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Creates a new network analyzer configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, CreateNetworkAnalyzerConfigurationCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, CreateNetworkAnalyzerConfigurationCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new CreateNetworkAnalyzerConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNetworkAnalyzerConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkAnalyzerConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 */
export class CreateNetworkAnalyzerConfigurationCommand extends $Command<
  CreateNetworkAnalyzerConfigurationCommandInput,
  CreateNetworkAnalyzerConfigurationCommandOutput,
  IoTWirelessClientResolvedConfig
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

  constructor(readonly input: CreateNetworkAnalyzerConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTWirelessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateNetworkAnalyzerConfigurationCommandInput, CreateNetworkAnalyzerConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateNetworkAnalyzerConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "CreateNetworkAnalyzerConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateNetworkAnalyzerConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateNetworkAnalyzerConfigurationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateNetworkAnalyzerConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateNetworkAnalyzerConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateNetworkAnalyzerConfigurationCommandOutput> {
    return deserializeAws_restJson1CreateNetworkAnalyzerConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

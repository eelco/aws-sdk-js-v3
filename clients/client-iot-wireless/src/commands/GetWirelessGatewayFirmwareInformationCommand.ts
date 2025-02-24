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
  GetWirelessGatewayFirmwareInformationRequest,
  GetWirelessGatewayFirmwareInformationRequestFilterSensitiveLog,
  GetWirelessGatewayFirmwareInformationResponse,
  GetWirelessGatewayFirmwareInformationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetWirelessGatewayFirmwareInformationCommand,
  serializeAws_restJson1GetWirelessGatewayFirmwareInformationCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link GetWirelessGatewayFirmwareInformationCommand}.
 */
export interface GetWirelessGatewayFirmwareInformationCommandInput
  extends GetWirelessGatewayFirmwareInformationRequest {}
/**
 * The output of {@link GetWirelessGatewayFirmwareInformationCommand}.
 */
export interface GetWirelessGatewayFirmwareInformationCommandOutput
  extends GetWirelessGatewayFirmwareInformationResponse,
    __MetadataBearer {}

/**
 * <p>Gets the firmware version and other information about a wireless gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetWirelessGatewayFirmwareInformationCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetWirelessGatewayFirmwareInformationCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new GetWirelessGatewayFirmwareInformationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetWirelessGatewayFirmwareInformationCommandInput} for command's `input` shape.
 * @see {@link GetWirelessGatewayFirmwareInformationCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 */
export class GetWirelessGatewayFirmwareInformationCommand extends $Command<
  GetWirelessGatewayFirmwareInformationCommandInput,
  GetWirelessGatewayFirmwareInformationCommandOutput,
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

  constructor(readonly input: GetWirelessGatewayFirmwareInformationCommandInput) {
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
  ): Handler<GetWirelessGatewayFirmwareInformationCommandInput, GetWirelessGatewayFirmwareInformationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetWirelessGatewayFirmwareInformationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "GetWirelessGatewayFirmwareInformationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetWirelessGatewayFirmwareInformationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetWirelessGatewayFirmwareInformationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetWirelessGatewayFirmwareInformationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetWirelessGatewayFirmwareInformationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetWirelessGatewayFirmwareInformationCommandOutput> {
    return deserializeAws_restJson1GetWirelessGatewayFirmwareInformationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

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

import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import {
  RejectInputDeviceTransferRequest,
  RejectInputDeviceTransferRequestFilterSensitiveLog,
  RejectInputDeviceTransferResponse,
  RejectInputDeviceTransferResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1RejectInputDeviceTransferCommand,
  serializeAws_restJson1RejectInputDeviceTransferCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link RejectInputDeviceTransferCommand}.
 */
export interface RejectInputDeviceTransferCommandInput extends RejectInputDeviceTransferRequest {}
/**
 * The output of {@link RejectInputDeviceTransferCommand}.
 */
export interface RejectInputDeviceTransferCommandOutput extends RejectInputDeviceTransferResponse, __MetadataBearer {}

/**
 * Reject the transfer of the specified input device to your AWS account.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, RejectInputDeviceTransferCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, RejectInputDeviceTransferCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new RejectInputDeviceTransferCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectInputDeviceTransferCommandInput} for command's `input` shape.
 * @see {@link RejectInputDeviceTransferCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 */
export class RejectInputDeviceTransferCommand extends $Command<
  RejectInputDeviceTransferCommandInput,
  RejectInputDeviceTransferCommandOutput,
  MediaLiveClientResolvedConfig
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

  constructor(readonly input: RejectInputDeviceTransferCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RejectInputDeviceTransferCommandInput, RejectInputDeviceTransferCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RejectInputDeviceTransferCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "RejectInputDeviceTransferCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RejectInputDeviceTransferRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RejectInputDeviceTransferResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RejectInputDeviceTransferCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RejectInputDeviceTransferCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RejectInputDeviceTransferCommandOutput> {
    return deserializeAws_restJson1RejectInputDeviceTransferCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

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

import {
  VerifyOTPMessageRequest,
  VerifyOTPMessageRequestFilterSensitiveLog,
  VerifyOTPMessageResponse,
  VerifyOTPMessageResponseFilterSensitiveLog,
} from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import {
  deserializeAws_restJson1VerifyOTPMessageCommand,
  serializeAws_restJson1VerifyOTPMessageCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link VerifyOTPMessageCommand}.
 */
export interface VerifyOTPMessageCommandInput extends VerifyOTPMessageRequest {}
/**
 * The output of {@link VerifyOTPMessageCommand}.
 */
export interface VerifyOTPMessageCommandOutput extends VerifyOTPMessageResponse, __MetadataBearer {}

/**
 * <p>Verify an OTP</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, VerifyOTPMessageCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, VerifyOTPMessageCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new VerifyOTPMessageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link VerifyOTPMessageCommandInput} for command's `input` shape.
 * @see {@link VerifyOTPMessageCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 */
export class VerifyOTPMessageCommand extends $Command<
  VerifyOTPMessageCommandInput,
  VerifyOTPMessageCommandOutput,
  PinpointClientResolvedConfig
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

  constructor(readonly input: VerifyOTPMessageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<VerifyOTPMessageCommandInput, VerifyOTPMessageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, VerifyOTPMessageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "VerifyOTPMessageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: VerifyOTPMessageRequestFilterSensitiveLog,
      outputFilterSensitiveLog: VerifyOTPMessageResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: VerifyOTPMessageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1VerifyOTPMessageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<VerifyOTPMessageCommandOutput> {
    return deserializeAws_restJson1VerifyOTPMessageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

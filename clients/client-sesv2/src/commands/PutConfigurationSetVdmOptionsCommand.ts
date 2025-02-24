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
  PutConfigurationSetVdmOptionsRequest,
  PutConfigurationSetVdmOptionsRequestFilterSensitiveLog,
  PutConfigurationSetVdmOptionsResponse,
  PutConfigurationSetVdmOptionsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutConfigurationSetVdmOptionsCommand,
  serializeAws_restJson1PutConfigurationSetVdmOptionsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * The input for {@link PutConfigurationSetVdmOptionsCommand}.
 */
export interface PutConfigurationSetVdmOptionsCommandInput extends PutConfigurationSetVdmOptionsRequest {}
/**
 * The output of {@link PutConfigurationSetVdmOptionsCommand}.
 */
export interface PutConfigurationSetVdmOptionsCommandOutput
  extends PutConfigurationSetVdmOptionsResponse,
    __MetadataBearer {}

/**
 * <p>Specify VDM preferences for email that you send using the configuration set.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutConfigurationSetVdmOptionsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutConfigurationSetVdmOptionsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new PutConfigurationSetVdmOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutConfigurationSetVdmOptionsCommandInput} for command's `input` shape.
 * @see {@link PutConfigurationSetVdmOptionsCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 */
export class PutConfigurationSetVdmOptionsCommand extends $Command<
  PutConfigurationSetVdmOptionsCommandInput,
  PutConfigurationSetVdmOptionsCommandOutput,
  SESv2ClientResolvedConfig
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

  constructor(readonly input: PutConfigurationSetVdmOptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutConfigurationSetVdmOptionsCommandInput, PutConfigurationSetVdmOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutConfigurationSetVdmOptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "PutConfigurationSetVdmOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutConfigurationSetVdmOptionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutConfigurationSetVdmOptionsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutConfigurationSetVdmOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutConfigurationSetVdmOptionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PutConfigurationSetVdmOptionsCommandOutput> {
    return deserializeAws_restJson1PutConfigurationSetVdmOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

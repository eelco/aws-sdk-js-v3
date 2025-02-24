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
  UpdateConfigurationSetSendingEnabledRequest,
  UpdateConfigurationSetSendingEnabledRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryUpdateConfigurationSetSendingEnabledCommand,
  serializeAws_queryUpdateConfigurationSetSendingEnabledCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * The input for {@link UpdateConfigurationSetSendingEnabledCommand}.
 */
export interface UpdateConfigurationSetSendingEnabledCommandInput extends UpdateConfigurationSetSendingEnabledRequest {}
/**
 * The output of {@link UpdateConfigurationSetSendingEnabledCommand}.
 */
export interface UpdateConfigurationSetSendingEnabledCommandOutput extends __MetadataBearer {}

/**
 * <p>Enables or disables email sending for messages sent using a specific configuration set
 *             in a given AWS Region. You can use this operation in conjunction with Amazon CloudWatch alarms
 *             to temporarily pause email sending for a configuration set when the reputation metrics
 *             for that configuration set (such as your bounce on complaint rate) exceed certain
 *             thresholds.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, UpdateConfigurationSetSendingEnabledCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, UpdateConfigurationSetSendingEnabledCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new UpdateConfigurationSetSendingEnabledCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateConfigurationSetSendingEnabledCommandInput} for command's `input` shape.
 * @see {@link UpdateConfigurationSetSendingEnabledCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 */
export class UpdateConfigurationSetSendingEnabledCommand extends $Command<
  UpdateConfigurationSetSendingEnabledCommandInput,
  UpdateConfigurationSetSendingEnabledCommandOutput,
  SESClientResolvedConfig
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

  constructor(readonly input: UpdateConfigurationSetSendingEnabledCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateConfigurationSetSendingEnabledCommandInput, UpdateConfigurationSetSendingEnabledCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateConfigurationSetSendingEnabledCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "UpdateConfigurationSetSendingEnabledCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateConfigurationSetSendingEnabledRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateConfigurationSetSendingEnabledCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryUpdateConfigurationSetSendingEnabledCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateConfigurationSetSendingEnabledCommandOutput> {
    return deserializeAws_queryUpdateConfigurationSetSendingEnabledCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

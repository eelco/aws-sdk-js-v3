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

import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  StopGUISessionRequest,
  StopGUISessionRequestFilterSensitiveLog,
  StopGUISessionResult,
  StopGUISessionResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1StopGUISessionCommand,
  serializeAws_json1_1StopGUISessionCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link StopGUISessionCommand}.
 */
export interface StopGUISessionCommandInput extends StopGUISessionRequest {}
/**
 * The output of {@link StopGUISessionCommand}.
 */
export interface StopGUISessionCommandOutput extends StopGUISessionResult, __MetadataBearer {}

/**
 * <p>Terminates a web-based NICE DCV session that’s used to access a virtual computer’s
 *       operating system or application. The session will close and any unsaved data will be lost.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, StopGUISessionCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, StopGUISessionCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new StopGUISessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopGUISessionCommandInput} for command's `input` shape.
 * @see {@link StopGUISessionCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 */
export class StopGUISessionCommand extends $Command<
  StopGUISessionCommandInput,
  StopGUISessionCommandOutput,
  LightsailClientResolvedConfig
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

  constructor(readonly input: StopGUISessionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopGUISessionCommandInput, StopGUISessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopGUISessionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "StopGUISessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopGUISessionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StopGUISessionResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopGUISessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopGUISessionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopGUISessionCommandOutput> {
    return deserializeAws_json1_1StopGUISessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

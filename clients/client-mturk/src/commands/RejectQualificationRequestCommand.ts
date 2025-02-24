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
  RejectQualificationRequestRequest,
  RejectQualificationRequestRequestFilterSensitiveLog,
  RejectQualificationRequestResponse,
  RejectQualificationRequestResponseFilterSensitiveLog,
} from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import {
  deserializeAws_json1_1RejectQualificationRequestCommand,
  serializeAws_json1_1RejectQualificationRequestCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link RejectQualificationRequestCommand}.
 */
export interface RejectQualificationRequestCommandInput extends RejectQualificationRequestRequest {}
/**
 * The output of {@link RejectQualificationRequestCommand}.
 */
export interface RejectQualificationRequestCommandOutput extends RejectQualificationRequestResponse, __MetadataBearer {}

/**
 * <p>
 *             The
 *             <code>RejectQualificationRequest</code>
 *             operation rejects a user's request for a Qualification.
 *         </p>
 *         <p> You can provide a text message explaining why the request was
 *             rejected. The Worker who made the request can see this message.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, RejectQualificationRequestCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, RejectQualificationRequestCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new RejectQualificationRequestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RejectQualificationRequestCommandInput} for command's `input` shape.
 * @see {@link RejectQualificationRequestCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 */
export class RejectQualificationRequestCommand extends $Command<
  RejectQualificationRequestCommandInput,
  RejectQualificationRequestCommandOutput,
  MTurkClientResolvedConfig
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

  constructor(readonly input: RejectQualificationRequestCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RejectQualificationRequestCommandInput, RejectQualificationRequestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RejectQualificationRequestCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "RejectQualificationRequestCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RejectQualificationRequestRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RejectQualificationRequestResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RejectQualificationRequestCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RejectQualificationRequestCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RejectQualificationRequestCommandOutput> {
    return deserializeAws_json1_1RejectQualificationRequestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

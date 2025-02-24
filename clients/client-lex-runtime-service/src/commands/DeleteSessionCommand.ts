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
  LexRuntimeServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexRuntimeServiceClient";
import {
  DeleteSessionRequest,
  DeleteSessionRequestFilterSensitiveLog,
  DeleteSessionResponse,
  DeleteSessionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteSessionCommand,
  serializeAws_restJson1DeleteSessionCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link DeleteSessionCommand}.
 */
export interface DeleteSessionCommandInput extends DeleteSessionRequest {}
/**
 * The output of {@link DeleteSessionCommand}.
 */
export interface DeleteSessionCommandOutput extends DeleteSessionResponse, __MetadataBearer {}

/**
 * <p>Removes session information for a specified bot, alias, and user ID.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeServiceClient, DeleteSessionCommand } from "@aws-sdk/client-lex-runtime-service"; // ES Modules import
 * // const { LexRuntimeServiceClient, DeleteSessionCommand } = require("@aws-sdk/client-lex-runtime-service"); // CommonJS import
 * const client = new LexRuntimeServiceClient(config);
 * const command = new DeleteSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSessionCommandInput} for command's `input` shape.
 * @see {@link DeleteSessionCommandOutput} for command's `response` shape.
 * @see {@link LexRuntimeServiceClientResolvedConfig | config} for LexRuntimeServiceClient's `config` shape.
 *
 */
export class DeleteSessionCommand extends $Command<
  DeleteSessionCommandInput,
  DeleteSessionCommandOutput,
  LexRuntimeServiceClientResolvedConfig
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

  constructor(readonly input: DeleteSessionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexRuntimeServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteSessionCommandInput, DeleteSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteSessionCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexRuntimeServiceClient";
    const commandName = "DeleteSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSessionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteSessionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteSessionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSessionCommandOutput> {
    return deserializeAws_restJson1DeleteSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

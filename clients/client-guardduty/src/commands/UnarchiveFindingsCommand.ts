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

import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import {
  UnarchiveFindingsRequest,
  UnarchiveFindingsRequestFilterSensitiveLog,
  UnarchiveFindingsResponse,
  UnarchiveFindingsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UnarchiveFindingsCommand,
  serializeAws_restJson1UnarchiveFindingsCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link UnarchiveFindingsCommand}.
 */
export interface UnarchiveFindingsCommandInput extends UnarchiveFindingsRequest {}
/**
 * The output of {@link UnarchiveFindingsCommand}.
 */
export interface UnarchiveFindingsCommandOutput extends UnarchiveFindingsResponse, __MetadataBearer {}

/**
 * <p>Unarchives GuardDuty findings specified by the <code>findingIds</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, UnarchiveFindingsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, UnarchiveFindingsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new UnarchiveFindingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnarchiveFindingsCommandInput} for command's `input` shape.
 * @see {@link UnarchiveFindingsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 */
export class UnarchiveFindingsCommand extends $Command<
  UnarchiveFindingsCommandInput,
  UnarchiveFindingsCommandOutput,
  GuardDutyClientResolvedConfig
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

  constructor(readonly input: UnarchiveFindingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UnarchiveFindingsCommandInput, UnarchiveFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UnarchiveFindingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "UnarchiveFindingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UnarchiveFindingsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UnarchiveFindingsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UnarchiveFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UnarchiveFindingsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UnarchiveFindingsCommandOutput> {
    return deserializeAws_restJson1UnarchiveFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

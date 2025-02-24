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

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import {
  PutApprovalResultInput,
  PutApprovalResultInputFilterSensitiveLog,
  PutApprovalResultOutput,
  PutApprovalResultOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1PutApprovalResultCommand,
  serializeAws_json1_1PutApprovalResultCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link PutApprovalResultCommand}.
 */
export interface PutApprovalResultCommandInput extends PutApprovalResultInput {}
/**
 * The output of {@link PutApprovalResultCommand}.
 */
export interface PutApprovalResultCommandOutput extends PutApprovalResultOutput, __MetadataBearer {}

/**
 * <p>Provides the response to a manual approval request to AWS CodePipeline. Valid
 *             responses include Approved and Rejected.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PutApprovalResultCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PutApprovalResultCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new PutApprovalResultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutApprovalResultCommandInput} for command's `input` shape.
 * @see {@link PutApprovalResultCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for CodePipelineClient's `config` shape.
 *
 */
export class PutApprovalResultCommand extends $Command<
  PutApprovalResultCommandInput,
  PutApprovalResultCommandOutput,
  CodePipelineClientResolvedConfig
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

  constructor(readonly input: PutApprovalResultCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodePipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutApprovalResultCommandInput, PutApprovalResultCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutApprovalResultCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "PutApprovalResultCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutApprovalResultInputFilterSensitiveLog,
      outputFilterSensitiveLog: PutApprovalResultOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutApprovalResultCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutApprovalResultCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutApprovalResultCommandOutput> {
    return deserializeAws_json1_1PutApprovalResultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

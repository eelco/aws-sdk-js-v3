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

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import {
  BatchGetBuildBatchesInput,
  BatchGetBuildBatchesInputFilterSensitiveLog,
  BatchGetBuildBatchesOutput,
  BatchGetBuildBatchesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1BatchGetBuildBatchesCommand,
  serializeAws_json1_1BatchGetBuildBatchesCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link BatchGetBuildBatchesCommand}.
 */
export interface BatchGetBuildBatchesCommandInput extends BatchGetBuildBatchesInput {}
/**
 * The output of {@link BatchGetBuildBatchesCommand}.
 */
export interface BatchGetBuildBatchesCommandOutput extends BatchGetBuildBatchesOutput, __MetadataBearer {}

/**
 * <p>Retrieves information about one or more batch builds.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, BatchGetBuildBatchesCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, BatchGetBuildBatchesCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new BatchGetBuildBatchesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchGetBuildBatchesCommandInput} for command's `input` shape.
 * @see {@link BatchGetBuildBatchesCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 */
export class BatchGetBuildBatchesCommand extends $Command<
  BatchGetBuildBatchesCommandInput,
  BatchGetBuildBatchesCommandOutput,
  CodeBuildClientResolvedConfig
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

  constructor(readonly input: BatchGetBuildBatchesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeBuildClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetBuildBatchesCommandInput, BatchGetBuildBatchesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetBuildBatchesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "BatchGetBuildBatchesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetBuildBatchesInputFilterSensitiveLog,
      outputFilterSensitiveLog: BatchGetBuildBatchesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchGetBuildBatchesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchGetBuildBatchesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetBuildBatchesCommandOutput> {
    return deserializeAws_json1_1BatchGetBuildBatchesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

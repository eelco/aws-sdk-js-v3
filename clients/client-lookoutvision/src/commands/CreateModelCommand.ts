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

import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient";
import {
  CreateModelRequest,
  CreateModelRequestFilterSensitiveLog,
  CreateModelResponse,
  CreateModelResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateModelCommand,
  serializeAws_restJson1CreateModelCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link CreateModelCommand}.
 */
export interface CreateModelCommandInput extends CreateModelRequest {}
/**
 * The output of {@link CreateModelCommand}.
 */
export interface CreateModelCommandOutput extends CreateModelResponse, __MetadataBearer {}

/**
 * <p>Creates a new version of a model within an an Amazon Lookout for Vision project.
 *       <code>CreateModel</code> is an asynchronous operation in which Amazon Lookout for Vision trains, tests,
 *        and evaluates a new version of a model. </p>
 *          <p>To get the current status, check the <code>Status</code> field returned
 *       in the response from <a>DescribeModel</a>.</p>
 *          <p>If the project has a single dataset, Amazon Lookout for Vision internally splits the dataset
 *        to create a training and a test dataset.
 *        If the project has a training and a test dataset, Lookout for Vision uses the respective datasets to train and test
 *        the model. </p>
 *          <p>After training completes, the evaluation metrics are stored at the location specified in
 *         <code>OutputConfig</code>.  </p>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:CreateModel</code> operation. If you want to tag your model, you also require
 *          permission to the <code>lookoutvision:TagResource</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, CreateModelCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, CreateModelCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * const client = new LookoutVisionClient(config);
 * const command = new CreateModelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateModelCommandInput} for command's `input` shape.
 * @see {@link CreateModelCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for LookoutVisionClient's `config` shape.
 *
 */
export class CreateModelCommand extends $Command<
  CreateModelCommandInput,
  CreateModelCommandOutput,
  LookoutVisionClientResolvedConfig
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

  constructor(readonly input: CreateModelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutVisionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateModelCommandInput, CreateModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateModelCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutVisionClient";
    const commandName = "CreateModelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateModelRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateModelResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateModelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateModelCommandOutput> {
    return deserializeAws_restJson1CreateModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

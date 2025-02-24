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

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import {
  DescribeFlywheelRequest,
  DescribeFlywheelRequestFilterSensitiveLog,
  DescribeFlywheelResponse,
  DescribeFlywheelResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeFlywheelCommand,
  serializeAws_json1_1DescribeFlywheelCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link DescribeFlywheelCommand}.
 */
export interface DescribeFlywheelCommandInput extends DescribeFlywheelRequest {}
/**
 * The output of {@link DescribeFlywheelCommand}.
 */
export interface DescribeFlywheelCommandOutput extends DescribeFlywheelResponse, __MetadataBearer {}

/**
 * <p>Provides configuration information about the flywheel. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html">
 *       Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DescribeFlywheelCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DescribeFlywheelCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new DescribeFlywheelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFlywheelCommandInput} for command's `input` shape.
 * @see {@link DescribeFlywheelCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 */
export class DescribeFlywheelCommand extends $Command<
  DescribeFlywheelCommandInput,
  DescribeFlywheelCommandOutput,
  ComprehendClientResolvedConfig
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

  constructor(readonly input: DescribeFlywheelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeFlywheelCommandInput, DescribeFlywheelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFlywheelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "DescribeFlywheelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFlywheelRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeFlywheelResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFlywheelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeFlywheelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFlywheelCommandOutput> {
    return deserializeAws_json1_1DescribeFlywheelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

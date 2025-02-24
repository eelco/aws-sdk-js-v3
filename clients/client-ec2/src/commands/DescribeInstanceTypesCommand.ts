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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DescribeInstanceTypesRequest,
  DescribeInstanceTypesRequestFilterSensitiveLog,
  DescribeInstanceTypesResult,
  DescribeInstanceTypesResultFilterSensitiveLog,
} from "../models/models_4";
import {
  deserializeAws_ec2DescribeInstanceTypesCommand,
  serializeAws_ec2DescribeInstanceTypesCommand,
} from "../protocols/Aws_ec2";

/**
 * The input for {@link DescribeInstanceTypesCommand}.
 */
export interface DescribeInstanceTypesCommandInput extends DescribeInstanceTypesRequest {}
/**
 * The output of {@link DescribeInstanceTypesCommand}.
 */
export interface DescribeInstanceTypesCommandOutput extends DescribeInstanceTypesResult, __MetadataBearer {}

/**
 * <p>Describes the details of the instance types that are offered in a location. The results can be filtered by the
 *    attributes of the instance types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInstanceTypesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInstanceTypesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeInstanceTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstanceTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceTypesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DescribeInstanceTypesCommand extends $Command<
  DescribeInstanceTypesCommandInput,
  DescribeInstanceTypesCommandOutput,
  EC2ClientResolvedConfig
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

  constructor(readonly input: DescribeInstanceTypesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeInstanceTypesCommandInput, DescribeInstanceTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeInstanceTypesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeInstanceTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeInstanceTypesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeInstanceTypesResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeInstanceTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeInstanceTypesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeInstanceTypesCommandOutput> {
    return deserializeAws_ec2DescribeInstanceTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

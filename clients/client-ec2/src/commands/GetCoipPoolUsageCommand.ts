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
  GetCoipPoolUsageRequest,
  GetCoipPoolUsageRequestFilterSensitiveLog,
  GetCoipPoolUsageResult,
  GetCoipPoolUsageResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2GetCoipPoolUsageCommand,
  serializeAws_ec2GetCoipPoolUsageCommand,
} from "../protocols/Aws_ec2";

/**
 * The input for {@link GetCoipPoolUsageCommand}.
 */
export interface GetCoipPoolUsageCommandInput extends GetCoipPoolUsageRequest {}
/**
 * The output of {@link GetCoipPoolUsageCommand}.
 */
export interface GetCoipPoolUsageCommandOutput extends GetCoipPoolUsageResult, __MetadataBearer {}

/**
 * <p>Describes the allocations from the specified customer-owned address pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetCoipPoolUsageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetCoipPoolUsageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetCoipPoolUsageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCoipPoolUsageCommandInput} for command's `input` shape.
 * @see {@link GetCoipPoolUsageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class GetCoipPoolUsageCommand extends $Command<
  GetCoipPoolUsageCommandInput,
  GetCoipPoolUsageCommandOutput,
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

  constructor(readonly input: GetCoipPoolUsageCommandInput) {
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
  ): Handler<GetCoipPoolUsageCommandInput, GetCoipPoolUsageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCoipPoolUsageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "GetCoipPoolUsageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCoipPoolUsageRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetCoipPoolUsageResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCoipPoolUsageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2GetCoipPoolUsageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCoipPoolUsageCommandOutput> {
    return deserializeAws_ec2GetCoipPoolUsageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

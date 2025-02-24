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
  DescribeNodeConfigurationOptionsMessage,
  DescribeNodeConfigurationOptionsMessageFilterSensitiveLog,
  NodeConfigurationOptionsMessage,
  NodeConfigurationOptionsMessageFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryDescribeNodeConfigurationOptionsCommand,
  serializeAws_queryDescribeNodeConfigurationOptionsCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * The input for {@link DescribeNodeConfigurationOptionsCommand}.
 */
export interface DescribeNodeConfigurationOptionsCommandInput extends DescribeNodeConfigurationOptionsMessage {}
/**
 * The output of {@link DescribeNodeConfigurationOptionsCommand}.
 */
export interface DescribeNodeConfigurationOptionsCommandOutput
  extends NodeConfigurationOptionsMessage,
    __MetadataBearer {}

/**
 * <p>Returns properties of possible node configurations such as node type, number of nodes, and
 *             disk usage for the specified action type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeNodeConfigurationOptionsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeNodeConfigurationOptionsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeNodeConfigurationOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNodeConfigurationOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeNodeConfigurationOptionsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class DescribeNodeConfigurationOptionsCommand extends $Command<
  DescribeNodeConfigurationOptionsCommandInput,
  DescribeNodeConfigurationOptionsCommandOutput,
  RedshiftClientResolvedConfig
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

  constructor(readonly input: DescribeNodeConfigurationOptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeNodeConfigurationOptionsCommandInput, DescribeNodeConfigurationOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeNodeConfigurationOptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeNodeConfigurationOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeNodeConfigurationOptionsMessageFilterSensitiveLog,
      outputFilterSensitiveLog: NodeConfigurationOptionsMessageFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeNodeConfigurationOptionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeNodeConfigurationOptionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeNodeConfigurationOptionsCommandOutput> {
    return deserializeAws_queryDescribeNodeConfigurationOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

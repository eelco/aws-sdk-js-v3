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
  ClusterDbRevisionsMessage,
  ClusterDbRevisionsMessageFilterSensitiveLog,
  DescribeClusterDbRevisionsMessage,
  DescribeClusterDbRevisionsMessageFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeClusterDbRevisionsCommand,
  serializeAws_queryDescribeClusterDbRevisionsCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * The input for {@link DescribeClusterDbRevisionsCommand}.
 */
export interface DescribeClusterDbRevisionsCommandInput extends DescribeClusterDbRevisionsMessage {}
/**
 * The output of {@link DescribeClusterDbRevisionsCommand}.
 */
export interface DescribeClusterDbRevisionsCommandOutput extends ClusterDbRevisionsMessage, __MetadataBearer {}

/**
 * <p>Returns an array of <code>ClusterDbRevision</code> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeClusterDbRevisionsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeClusterDbRevisionsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeClusterDbRevisionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeClusterDbRevisionsCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterDbRevisionsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class DescribeClusterDbRevisionsCommand extends $Command<
  DescribeClusterDbRevisionsCommandInput,
  DescribeClusterDbRevisionsCommandOutput,
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

  constructor(readonly input: DescribeClusterDbRevisionsCommandInput) {
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
  ): Handler<DescribeClusterDbRevisionsCommandInput, DescribeClusterDbRevisionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeClusterDbRevisionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DescribeClusterDbRevisionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeClusterDbRevisionsMessageFilterSensitiveLog,
      outputFilterSensitiveLog: ClusterDbRevisionsMessageFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeClusterDbRevisionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeClusterDbRevisionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeClusterDbRevisionsCommandOutput> {
    return deserializeAws_queryDescribeClusterDbRevisionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

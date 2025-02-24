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
  RevokeVpcEndpointAccessRequest,
  RevokeVpcEndpointAccessRequestFilterSensitiveLog,
  RevokeVpcEndpointAccessResponse,
  RevokeVpcEndpointAccessResponseFilterSensitiveLog,
} from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import {
  deserializeAws_restJson1RevokeVpcEndpointAccessCommand,
  serializeAws_restJson1RevokeVpcEndpointAccessCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link RevokeVpcEndpointAccessCommand}.
 */
export interface RevokeVpcEndpointAccessCommandInput extends RevokeVpcEndpointAccessRequest {}
/**
 * The output of {@link RevokeVpcEndpointAccessCommand}.
 */
export interface RevokeVpcEndpointAccessCommandOutput extends RevokeVpcEndpointAccessResponse, __MetadataBearer {}

/**
 * <p>Revokes access to an Amazon OpenSearch Service domain that was provided through an interface
 *    VPC endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, RevokeVpcEndpointAccessCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, RevokeVpcEndpointAccessCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const command = new RevokeVpcEndpointAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeVpcEndpointAccessCommandInput} for command's `input` shape.
 * @see {@link RevokeVpcEndpointAccessCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 */
export class RevokeVpcEndpointAccessCommand extends $Command<
  RevokeVpcEndpointAccessCommandInput,
  RevokeVpcEndpointAccessCommandOutput,
  OpenSearchClientResolvedConfig
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

  constructor(readonly input: RevokeVpcEndpointAccessCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RevokeVpcEndpointAccessCommandInput, RevokeVpcEndpointAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RevokeVpcEndpointAccessCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "RevokeVpcEndpointAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RevokeVpcEndpointAccessRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RevokeVpcEndpointAccessResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RevokeVpcEndpointAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RevokeVpcEndpointAccessCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RevokeVpcEndpointAccessCommandOutput> {
    return deserializeAws_restJson1RevokeVpcEndpointAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

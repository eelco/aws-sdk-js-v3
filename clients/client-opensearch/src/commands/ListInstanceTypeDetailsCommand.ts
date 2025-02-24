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
  ListInstanceTypeDetailsRequest,
  ListInstanceTypeDetailsRequestFilterSensitiveLog,
  ListInstanceTypeDetailsResponse,
  ListInstanceTypeDetailsResponseFilterSensitiveLog,
} from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import {
  deserializeAws_restJson1ListInstanceTypeDetailsCommand,
  serializeAws_restJson1ListInstanceTypeDetailsCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link ListInstanceTypeDetailsCommand}.
 */
export interface ListInstanceTypeDetailsCommandInput extends ListInstanceTypeDetailsRequest {}
/**
 * The output of {@link ListInstanceTypeDetailsCommand}.
 */
export interface ListInstanceTypeDetailsCommandOutput extends ListInstanceTypeDetailsResponse, __MetadataBearer {}

/**
 * <p>Lists all instance types and available features for a given OpenSearch or Elasticsearch
 *    version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, ListInstanceTypeDetailsCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, ListInstanceTypeDetailsCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const command = new ListInstanceTypeDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInstanceTypeDetailsCommandInput} for command's `input` shape.
 * @see {@link ListInstanceTypeDetailsCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 */
export class ListInstanceTypeDetailsCommand extends $Command<
  ListInstanceTypeDetailsCommandInput,
  ListInstanceTypeDetailsCommandOutput,
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

  constructor(readonly input: ListInstanceTypeDetailsCommandInput) {
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
  ): Handler<ListInstanceTypeDetailsCommandInput, ListInstanceTypeDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListInstanceTypeDetailsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "ListInstanceTypeDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListInstanceTypeDetailsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListInstanceTypeDetailsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListInstanceTypeDetailsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListInstanceTypeDetailsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListInstanceTypeDetailsCommandOutput> {
    return deserializeAws_restJson1ListInstanceTypeDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

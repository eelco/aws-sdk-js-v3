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
  IoT1ClickProjectsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoT1ClickProjectsClient";
import {
  ListProjectsRequest,
  ListProjectsRequestFilterSensitiveLog,
  ListProjectsResponse,
  ListProjectsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListProjectsCommand,
  serializeAws_restJson1ListProjectsCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link ListProjectsCommand}.
 */
export interface ListProjectsCommandInput extends ListProjectsRequest {}
/**
 * The output of {@link ListProjectsCommand}.
 */
export interface ListProjectsCommandOutput extends ListProjectsResponse, __MetadataBearer {}

/**
 * <p>Lists the AWS IoT 1-Click project(s) associated with your AWS account and region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickProjectsClient, ListProjectsCommand } from "@aws-sdk/client-iot-1click-projects"; // ES Modules import
 * // const { IoT1ClickProjectsClient, ListProjectsCommand } = require("@aws-sdk/client-iot-1click-projects"); // CommonJS import
 * const client = new IoT1ClickProjectsClient(config);
 * const command = new ListProjectsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProjectsCommandInput} for command's `input` shape.
 * @see {@link ListProjectsCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickProjectsClientResolvedConfig | config} for IoT1ClickProjectsClient's `config` shape.
 *
 */
export class ListProjectsCommand extends $Command<
  ListProjectsCommandInput,
  ListProjectsCommandOutput,
  IoT1ClickProjectsClientResolvedConfig
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

  constructor(readonly input: ListProjectsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoT1ClickProjectsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListProjectsCommandInput, ListProjectsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListProjectsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoT1ClickProjectsClient";
    const commandName = "ListProjectsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListProjectsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListProjectsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListProjectsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListProjectsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListProjectsCommandOutput> {
    return deserializeAws_restJson1ListProjectsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

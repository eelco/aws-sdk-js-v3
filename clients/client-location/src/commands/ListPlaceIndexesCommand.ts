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

import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import {
  ListPlaceIndexesRequest,
  ListPlaceIndexesRequestFilterSensitiveLog,
  ListPlaceIndexesResponse,
  ListPlaceIndexesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListPlaceIndexesCommand,
  serializeAws_restJson1ListPlaceIndexesCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link ListPlaceIndexesCommand}.
 */
export interface ListPlaceIndexesCommandInput extends ListPlaceIndexesRequest {}
/**
 * The output of {@link ListPlaceIndexesCommand}.
 */
export interface ListPlaceIndexesCommandOutput extends ListPlaceIndexesResponse, __MetadataBearer {}

/**
 * <p>Lists place index resources in your Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, ListPlaceIndexesCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, ListPlaceIndexesCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const command = new ListPlaceIndexesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPlaceIndexesCommandInput} for command's `input` shape.
 * @see {@link ListPlaceIndexesCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 */
export class ListPlaceIndexesCommand extends $Command<
  ListPlaceIndexesCommandInput,
  ListPlaceIndexesCommandOutput,
  LocationClientResolvedConfig
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

  constructor(readonly input: ListPlaceIndexesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LocationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPlaceIndexesCommandInput, ListPlaceIndexesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPlaceIndexesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LocationClient";
    const commandName = "ListPlaceIndexesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPlaceIndexesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListPlaceIndexesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPlaceIndexesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPlaceIndexesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPlaceIndexesCommandOutput> {
    return deserializeAws_restJson1ListPlaceIndexesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

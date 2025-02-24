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
  GetReadSetMetadataRequest,
  GetReadSetMetadataRequestFilterSensitiveLog,
  GetReadSetMetadataResponse,
  GetReadSetMetadataResponseFilterSensitiveLog,
} from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import {
  deserializeAws_restJson1GetReadSetMetadataCommand,
  serializeAws_restJson1GetReadSetMetadataCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link GetReadSetMetadataCommand}.
 */
export interface GetReadSetMetadataCommandInput extends GetReadSetMetadataRequest {}
/**
 * The output of {@link GetReadSetMetadataCommand}.
 */
export interface GetReadSetMetadataCommandOutput extends GetReadSetMetadataResponse, __MetadataBearer {}

/**
 * <p>Gets details about a read set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetReadSetMetadataCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetReadSetMetadataCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const command = new GetReadSetMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetReadSetMetadataCommandInput} for command's `input` shape.
 * @see {@link GetReadSetMetadataCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 */
export class GetReadSetMetadataCommand extends $Command<
  GetReadSetMetadataCommandInput,
  GetReadSetMetadataCommandOutput,
  OmicsClientResolvedConfig
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

  constructor(readonly input: GetReadSetMetadataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OmicsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetReadSetMetadataCommandInput, GetReadSetMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetReadSetMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OmicsClient";
    const commandName = "GetReadSetMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetReadSetMetadataRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetReadSetMetadataResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetReadSetMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetReadSetMetadataCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetReadSetMetadataCommandOutput> {
    return deserializeAws_restJson1GetReadSetMetadataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

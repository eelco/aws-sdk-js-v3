// smithy-typescript generated code
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

import { TimestampFormatHeadersIO, TimestampFormatHeadersIOFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restXmlTimestampFormatHeadersCommand,
  serializeAws_restXmlTimestampFormatHeadersCommand,
} from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * The input for {@link TimestampFormatHeadersCommand}.
 */
export interface TimestampFormatHeadersCommandInput extends TimestampFormatHeadersIO {}
/**
 * The output of {@link TimestampFormatHeadersCommand}.
 */
export interface TimestampFormatHeadersCommandOutput extends TimestampFormatHeadersIO, __MetadataBearer {}

/**
 * The example tests how timestamp request and response headers are serialized.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, TimestampFormatHeadersCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, TimestampFormatHeadersCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const command = new TimestampFormatHeadersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TimestampFormatHeadersCommandInput} for command's `input` shape.
 * @see {@link TimestampFormatHeadersCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 */
export class TimestampFormatHeadersCommand extends $Command<
  TimestampFormatHeadersCommandInput,
  TimestampFormatHeadersCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: TimestampFormatHeadersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RestXmlProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<TimestampFormatHeadersCommandInput, TimestampFormatHeadersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "TimestampFormatHeadersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TimestampFormatHeadersIOFilterSensitiveLog,
      outputFilterSensitiveLog: TimestampFormatHeadersIOFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TimestampFormatHeadersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlTimestampFormatHeadersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TimestampFormatHeadersCommandOutput> {
    return deserializeAws_restXmlTimestampFormatHeadersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

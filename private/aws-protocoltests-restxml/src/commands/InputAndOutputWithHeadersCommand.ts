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

import { InputAndOutputWithHeadersIO, InputAndOutputWithHeadersIOFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restXmlInputAndOutputWithHeadersCommand,
  serializeAws_restXmlInputAndOutputWithHeadersCommand,
} from "../protocols/Aws_restXml";
import { RestXmlProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestXmlProtocolClient";

/**
 * The input for {@link InputAndOutputWithHeadersCommand}.
 */
export interface InputAndOutputWithHeadersCommandInput extends InputAndOutputWithHeadersIO {}
/**
 * The output of {@link InputAndOutputWithHeadersCommand}.
 */
export interface InputAndOutputWithHeadersCommandOutput extends InputAndOutputWithHeadersIO, __MetadataBearer {}

/**
 * The example tests how requests and responses are serialized when there is
 * no input or output payload but there are HTTP header bindings.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestXmlProtocolClient, InputAndOutputWithHeadersCommand } from "@aws-sdk/aws-protocoltests-restxml"; // ES Modules import
 * // const { RestXmlProtocolClient, InputAndOutputWithHeadersCommand } = require("@aws-sdk/aws-protocoltests-restxml"); // CommonJS import
 * const client = new RestXmlProtocolClient(config);
 * const command = new InputAndOutputWithHeadersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InputAndOutputWithHeadersCommandInput} for command's `input` shape.
 * @see {@link InputAndOutputWithHeadersCommandOutput} for command's `response` shape.
 * @see {@link RestXmlProtocolClientResolvedConfig | config} for RestXmlProtocolClient's `config` shape.
 *
 */
export class InputAndOutputWithHeadersCommand extends $Command<
  InputAndOutputWithHeadersCommandInput,
  InputAndOutputWithHeadersCommandOutput,
  RestXmlProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: InputAndOutputWithHeadersCommandInput) {
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
  ): Handler<InputAndOutputWithHeadersCommandInput, InputAndOutputWithHeadersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestXmlProtocolClient";
    const commandName = "InputAndOutputWithHeadersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InputAndOutputWithHeadersIOFilterSensitiveLog,
      outputFilterSensitiveLog: InputAndOutputWithHeadersIOFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: InputAndOutputWithHeadersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlInputAndOutputWithHeadersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<InputAndOutputWithHeadersCommandOutput> {
    return deserializeAws_restXmlInputAndOutputWithHeadersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

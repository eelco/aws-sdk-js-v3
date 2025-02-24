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

import {
  deserializeAws_restJson1UnitInputAndOutputCommand,
  serializeAws_restJson1UnitInputAndOutputCommand,
} from "../protocols/Aws_restJson1";
import { RestJsonProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RestJsonProtocolClient";

/**
 * The input for {@link UnitInputAndOutputCommand}.
 */
export interface UnitInputAndOutputCommandInput {}
/**
 * The output of {@link UnitInputAndOutputCommand}.
 */
export interface UnitInputAndOutputCommandOutput extends __MetadataBearer {}

/**
 * This test is similar to NoInputAndNoOutput, but uses explicit Unit types.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RestJsonProtocolClient, UnitInputAndOutputCommand } from "@aws-sdk/aws-protocoltests-restjson"; // ES Modules import
 * // const { RestJsonProtocolClient, UnitInputAndOutputCommand } = require("@aws-sdk/aws-protocoltests-restjson"); // CommonJS import
 * const client = new RestJsonProtocolClient(config);
 * const command = new UnitInputAndOutputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnitInputAndOutputCommandInput} for command's `input` shape.
 * @see {@link UnitInputAndOutputCommandOutput} for command's `response` shape.
 * @see {@link RestJsonProtocolClientResolvedConfig | config} for RestJsonProtocolClient's `config` shape.
 *
 */
export class UnitInputAndOutputCommand extends $Command<
  UnitInputAndOutputCommandInput,
  UnitInputAndOutputCommandOutput,
  RestJsonProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UnitInputAndOutputCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RestJsonProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UnitInputAndOutputCommandInput, UnitInputAndOutputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RestJsonProtocolClient";
    const commandName = "UnitInputAndOutputCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UnitInputAndOutputCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UnitInputAndOutputCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UnitInputAndOutputCommandOutput> {
    return deserializeAws_restJson1UnitInputAndOutputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

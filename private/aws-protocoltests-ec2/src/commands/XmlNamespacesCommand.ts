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

import { EC2ProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2ProtocolClient";
import { XmlNamespacesOutput, XmlNamespacesOutputFilterSensitiveLog } from "../models/models_0";
import { deserializeAws_ec2XmlNamespacesCommand, serializeAws_ec2XmlNamespacesCommand } from "../protocols/Aws_ec2";

/**
 * The input for {@link XmlNamespacesCommand}.
 */
export interface XmlNamespacesCommandInput {}
/**
 * The output of {@link XmlNamespacesCommand}.
 */
export interface XmlNamespacesCommandOutput extends XmlNamespacesOutput, __MetadataBearer {}

export class XmlNamespacesCommand extends $Command<
  XmlNamespacesCommandInput,
  XmlNamespacesCommandOutput,
  EC2ProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: XmlNamespacesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<XmlNamespacesCommandInput, XmlNamespacesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2ProtocolClient";
    const commandName = "XmlNamespacesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: XmlNamespacesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: XmlNamespacesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2XmlNamespacesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<XmlNamespacesCommandOutput> {
    return deserializeAws_ec2XmlNamespacesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

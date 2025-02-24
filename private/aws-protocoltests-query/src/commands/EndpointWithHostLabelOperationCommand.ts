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

import { HostLabelInput, HostLabelInputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_queryEndpointWithHostLabelOperationCommand,
  serializeAws_queryEndpointWithHostLabelOperationCommand,
} from "../protocols/Aws_query";
import { QueryProtocolClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QueryProtocolClient";

/**
 * The input for {@link EndpointWithHostLabelOperationCommand}.
 */
export interface EndpointWithHostLabelOperationCommandInput extends HostLabelInput {}
/**
 * The output of {@link EndpointWithHostLabelOperationCommand}.
 */
export interface EndpointWithHostLabelOperationCommandOutput extends __MetadataBearer {}

export class EndpointWithHostLabelOperationCommand extends $Command<
  EndpointWithHostLabelOperationCommandInput,
  EndpointWithHostLabelOperationCommandOutput,
  QueryProtocolClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EndpointWithHostLabelOperationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: QueryProtocolClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EndpointWithHostLabelOperationCommandInput, EndpointWithHostLabelOperationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "QueryProtocolClient";
    const commandName = "EndpointWithHostLabelOperationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: HostLabelInputFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: EndpointWithHostLabelOperationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryEndpointWithHostLabelOperationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EndpointWithHostLabelOperationCommandOutput> {
    return deserializeAws_queryEndpointWithHostLabelOperationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

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

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import {
  GetSipMediaApplicationRequest,
  GetSipMediaApplicationRequestFilterSensitiveLog,
  GetSipMediaApplicationResponse,
  GetSipMediaApplicationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetSipMediaApplicationCommand,
  serializeAws_restJson1GetSipMediaApplicationCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link GetSipMediaApplicationCommand}.
 */
export interface GetSipMediaApplicationCommandInput extends GetSipMediaApplicationRequest {}
/**
 * The output of {@link GetSipMediaApplicationCommand}.
 */
export interface GetSipMediaApplicationCommandOutput extends GetSipMediaApplicationResponse, __MetadataBearer {}

export class GetSipMediaApplicationCommand extends $Command<
  GetSipMediaApplicationCommandInput,
  GetSipMediaApplicationCommandOutput,
  ChimeSDKVoiceClientResolvedConfig
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

  constructor(readonly input: GetSipMediaApplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKVoiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSipMediaApplicationCommandInput, GetSipMediaApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSipMediaApplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKVoiceClient";
    const commandName = "GetSipMediaApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSipMediaApplicationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetSipMediaApplicationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSipMediaApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSipMediaApplicationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSipMediaApplicationCommandOutput> {
    return deserializeAws_restJson1GetSipMediaApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

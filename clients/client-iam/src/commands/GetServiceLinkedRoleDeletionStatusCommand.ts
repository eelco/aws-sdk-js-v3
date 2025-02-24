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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import {
  GetServiceLinkedRoleDeletionStatusRequest,
  GetServiceLinkedRoleDeletionStatusRequestFilterSensitiveLog,
  GetServiceLinkedRoleDeletionStatusResponse,
  GetServiceLinkedRoleDeletionStatusResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryGetServiceLinkedRoleDeletionStatusCommand,
  serializeAws_queryGetServiceLinkedRoleDeletionStatusCommand,
} from "../protocols/Aws_query";

/**
 * The input for {@link GetServiceLinkedRoleDeletionStatusCommand}.
 */
export interface GetServiceLinkedRoleDeletionStatusCommandInput extends GetServiceLinkedRoleDeletionStatusRequest {}
/**
 * The output of {@link GetServiceLinkedRoleDeletionStatusCommand}.
 */
export interface GetServiceLinkedRoleDeletionStatusCommandOutput
  extends GetServiceLinkedRoleDeletionStatusResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the status of your service-linked role deletion. After you use <a>DeleteServiceLinkedRole</a> to submit a service-linked role for deletion,
 *             you can use the <code>DeletionTaskId</code> parameter in
 *                 <code>GetServiceLinkedRoleDeletionStatus</code> to check the status of the deletion.
 *             If the deletion fails, this operation returns the reason that it failed, if that
 *             information is returned by the service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetServiceLinkedRoleDeletionStatusCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetServiceLinkedRoleDeletionStatusCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetServiceLinkedRoleDeletionStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetServiceLinkedRoleDeletionStatusCommandInput} for command's `input` shape.
 * @see {@link GetServiceLinkedRoleDeletionStatusCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 */
export class GetServiceLinkedRoleDeletionStatusCommand extends $Command<
  GetServiceLinkedRoleDeletionStatusCommandInput,
  GetServiceLinkedRoleDeletionStatusCommandOutput,
  IAMClientResolvedConfig
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

  constructor(readonly input: GetServiceLinkedRoleDeletionStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetServiceLinkedRoleDeletionStatusCommandInput, GetServiceLinkedRoleDeletionStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetServiceLinkedRoleDeletionStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GetServiceLinkedRoleDeletionStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetServiceLinkedRoleDeletionStatusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetServiceLinkedRoleDeletionStatusResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetServiceLinkedRoleDeletionStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryGetServiceLinkedRoleDeletionStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetServiceLinkedRoleDeletionStatusCommandOutput> {
    return deserializeAws_queryGetServiceLinkedRoleDeletionStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

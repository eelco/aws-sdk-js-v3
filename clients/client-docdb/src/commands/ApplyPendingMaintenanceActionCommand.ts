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

import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import {
  ApplyPendingMaintenanceActionMessage,
  ApplyPendingMaintenanceActionMessageFilterSensitiveLog,
  ApplyPendingMaintenanceActionResult,
  ApplyPendingMaintenanceActionResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryApplyPendingMaintenanceActionCommand,
  serializeAws_queryApplyPendingMaintenanceActionCommand,
} from "../protocols/Aws_query";

/**
 * The input for {@link ApplyPendingMaintenanceActionCommand}.
 */
export interface ApplyPendingMaintenanceActionCommandInput extends ApplyPendingMaintenanceActionMessage {}
/**
 * The output of {@link ApplyPendingMaintenanceActionCommand}.
 */
export interface ApplyPendingMaintenanceActionCommandOutput
  extends ApplyPendingMaintenanceActionResult,
    __MetadataBearer {}

/**
 * <p>Applies a pending maintenance action to a resource (for example,
 *             to an Amazon DocumentDB instance).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, ApplyPendingMaintenanceActionCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, ApplyPendingMaintenanceActionCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new ApplyPendingMaintenanceActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ApplyPendingMaintenanceActionCommandInput} for command's `input` shape.
 * @see {@link ApplyPendingMaintenanceActionCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 */
export class ApplyPendingMaintenanceActionCommand extends $Command<
  ApplyPendingMaintenanceActionCommandInput,
  ApplyPendingMaintenanceActionCommandOutput,
  DocDBClientResolvedConfig
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

  constructor(readonly input: ApplyPendingMaintenanceActionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DocDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ApplyPendingMaintenanceActionCommandInput, ApplyPendingMaintenanceActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ApplyPendingMaintenanceActionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBClient";
    const commandName = "ApplyPendingMaintenanceActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ApplyPendingMaintenanceActionMessageFilterSensitiveLog,
      outputFilterSensitiveLog: ApplyPendingMaintenanceActionResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ApplyPendingMaintenanceActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryApplyPendingMaintenanceActionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ApplyPendingMaintenanceActionCommandOutput> {
    return deserializeAws_queryApplyPendingMaintenanceActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

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

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import {
  ListBackupPlanTemplatesInput,
  ListBackupPlanTemplatesInputFilterSensitiveLog,
  ListBackupPlanTemplatesOutput,
  ListBackupPlanTemplatesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListBackupPlanTemplatesCommand,
  serializeAws_restJson1ListBackupPlanTemplatesCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link ListBackupPlanTemplatesCommand}.
 */
export interface ListBackupPlanTemplatesCommandInput extends ListBackupPlanTemplatesInput {}
/**
 * The output of {@link ListBackupPlanTemplatesCommand}.
 */
export interface ListBackupPlanTemplatesCommandOutput extends ListBackupPlanTemplatesOutput, __MetadataBearer {}

/**
 * <p>Returns metadata of your saved backup plan templates, including the template ID, name,
 *          and the creation and deletion dates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListBackupPlanTemplatesCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListBackupPlanTemplatesCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new ListBackupPlanTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBackupPlanTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListBackupPlanTemplatesCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 */
export class ListBackupPlanTemplatesCommand extends $Command<
  ListBackupPlanTemplatesCommandInput,
  ListBackupPlanTemplatesCommandOutput,
  BackupClientResolvedConfig
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

  constructor(readonly input: ListBackupPlanTemplatesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListBackupPlanTemplatesCommandInput, ListBackupPlanTemplatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListBackupPlanTemplatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "ListBackupPlanTemplatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBackupPlanTemplatesInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListBackupPlanTemplatesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListBackupPlanTemplatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListBackupPlanTemplatesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBackupPlanTemplatesCommandOutput> {
    return deserializeAws_restJson1ListBackupPlanTemplatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

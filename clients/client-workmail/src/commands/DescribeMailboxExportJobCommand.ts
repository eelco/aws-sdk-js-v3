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
  DescribeMailboxExportJobRequest,
  DescribeMailboxExportJobRequestFilterSensitiveLog,
  DescribeMailboxExportJobResponse,
  DescribeMailboxExportJobResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeMailboxExportJobCommand,
  serializeAws_json1_1DescribeMailboxExportJobCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * The input for {@link DescribeMailboxExportJobCommand}.
 */
export interface DescribeMailboxExportJobCommandInput extends DescribeMailboxExportJobRequest {}
/**
 * The output of {@link DescribeMailboxExportJobCommand}.
 */
export interface DescribeMailboxExportJobCommandOutput extends DescribeMailboxExportJobResponse, __MetadataBearer {}

/**
 * <p>Describes the current status of a mailbox export job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DescribeMailboxExportJobCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DescribeMailboxExportJobCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new DescribeMailboxExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMailboxExportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeMailboxExportJobCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 */
export class DescribeMailboxExportJobCommand extends $Command<
  DescribeMailboxExportJobCommandInput,
  DescribeMailboxExportJobCommandOutput,
  WorkMailClientResolvedConfig
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

  constructor(readonly input: DescribeMailboxExportJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeMailboxExportJobCommandInput, DescribeMailboxExportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeMailboxExportJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "DescribeMailboxExportJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeMailboxExportJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeMailboxExportJobResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeMailboxExportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeMailboxExportJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeMailboxExportJobCommandOutput> {
    return deserializeAws_json1_1DescribeMailboxExportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

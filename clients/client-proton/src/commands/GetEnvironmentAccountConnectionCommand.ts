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
  GetEnvironmentAccountConnectionInput,
  GetEnvironmentAccountConnectionInputFilterSensitiveLog,
  GetEnvironmentAccountConnectionOutput,
  GetEnvironmentAccountConnectionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0GetEnvironmentAccountConnectionCommand,
  serializeAws_json1_0GetEnvironmentAccountConnectionCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * The input for {@link GetEnvironmentAccountConnectionCommand}.
 */
export interface GetEnvironmentAccountConnectionCommandInput extends GetEnvironmentAccountConnectionInput {}
/**
 * The output of {@link GetEnvironmentAccountConnectionCommand}.
 */
export interface GetEnvironmentAccountConnectionCommandOutput
  extends GetEnvironmentAccountConnectionOutput,
    __MetadataBearer {}

/**
 * <p>In an environment account, get the detailed data for an environment account connection.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html">Environment account
 *         connections</a> in the <i>Proton User guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, GetEnvironmentAccountConnectionCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, GetEnvironmentAccountConnectionCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const command = new GetEnvironmentAccountConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEnvironmentAccountConnectionCommandInput} for command's `input` shape.
 * @see {@link GetEnvironmentAccountConnectionCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 */
export class GetEnvironmentAccountConnectionCommand extends $Command<
  GetEnvironmentAccountConnectionCommandInput,
  GetEnvironmentAccountConnectionCommandOutput,
  ProtonClientResolvedConfig
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

  constructor(readonly input: GetEnvironmentAccountConnectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ProtonClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEnvironmentAccountConnectionCommandInput, GetEnvironmentAccountConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetEnvironmentAccountConnectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "GetEnvironmentAccountConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEnvironmentAccountConnectionInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetEnvironmentAccountConnectionOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetEnvironmentAccountConnectionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0GetEnvironmentAccountConnectionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetEnvironmentAccountConnectionCommandOutput> {
    return deserializeAws_json1_0GetEnvironmentAccountConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  ImportClientVpnClientCertificateRevocationListRequest,
  ImportClientVpnClientCertificateRevocationListRequestFilterSensitiveLog,
  ImportClientVpnClientCertificateRevocationListResult,
  ImportClientVpnClientCertificateRevocationListResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2ImportClientVpnClientCertificateRevocationListCommand,
  serializeAws_ec2ImportClientVpnClientCertificateRevocationListCommand,
} from "../protocols/Aws_ec2";

/**
 * The input for {@link ImportClientVpnClientCertificateRevocationListCommand}.
 */
export interface ImportClientVpnClientCertificateRevocationListCommandInput
  extends ImportClientVpnClientCertificateRevocationListRequest {}
/**
 * The output of {@link ImportClientVpnClientCertificateRevocationListCommand}.
 */
export interface ImportClientVpnClientCertificateRevocationListCommandOutput
  extends ImportClientVpnClientCertificateRevocationListResult,
    __MetadataBearer {}

/**
 * <p>Uploads a client certificate revocation list to the specified Client VPN endpoint. Uploading a client certificate revocation list overwrites the existing client certificate revocation list.</p>
 *          <p>Uploading a client certificate revocation list resets existing client connections.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ImportClientVpnClientCertificateRevocationListCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ImportClientVpnClientCertificateRevocationListCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ImportClientVpnClientCertificateRevocationListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportClientVpnClientCertificateRevocationListCommandInput} for command's `input` shape.
 * @see {@link ImportClientVpnClientCertificateRevocationListCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class ImportClientVpnClientCertificateRevocationListCommand extends $Command<
  ImportClientVpnClientCertificateRevocationListCommandInput,
  ImportClientVpnClientCertificateRevocationListCommandOutput,
  EC2ClientResolvedConfig
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

  constructor(readonly input: ImportClientVpnClientCertificateRevocationListCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    ImportClientVpnClientCertificateRevocationListCommandInput,
    ImportClientVpnClientCertificateRevocationListCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        ImportClientVpnClientCertificateRevocationListCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ImportClientVpnClientCertificateRevocationListCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportClientVpnClientCertificateRevocationListRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ImportClientVpnClientCertificateRevocationListResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ImportClientVpnClientCertificateRevocationListCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2ImportClientVpnClientCertificateRevocationListCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ImportClientVpnClientCertificateRevocationListCommandOutput> {
    return deserializeAws_ec2ImportClientVpnClientCertificateRevocationListCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

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

import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import {
  CheckoutBorrowLicenseRequest,
  CheckoutBorrowLicenseRequestFilterSensitiveLog,
  CheckoutBorrowLicenseResponse,
  CheckoutBorrowLicenseResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CheckoutBorrowLicenseCommand,
  serializeAws_json1_1CheckoutBorrowLicenseCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link CheckoutBorrowLicenseCommand}.
 */
export interface CheckoutBorrowLicenseCommandInput extends CheckoutBorrowLicenseRequest {}
/**
 * The output of {@link CheckoutBorrowLicenseCommand}.
 */
export interface CheckoutBorrowLicenseCommandOutput extends CheckoutBorrowLicenseResponse, __MetadataBearer {}

/**
 * <p>Checks out the specified license for offline use.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CheckoutBorrowLicenseCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CheckoutBorrowLicenseCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new CheckoutBorrowLicenseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CheckoutBorrowLicenseCommandInput} for command's `input` shape.
 * @see {@link CheckoutBorrowLicenseCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 */
export class CheckoutBorrowLicenseCommand extends $Command<
  CheckoutBorrowLicenseCommandInput,
  CheckoutBorrowLicenseCommandOutput,
  LicenseManagerClientResolvedConfig
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

  constructor(readonly input: CheckoutBorrowLicenseCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LicenseManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CheckoutBorrowLicenseCommandInput, CheckoutBorrowLicenseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CheckoutBorrowLicenseCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerClient";
    const commandName = "CheckoutBorrowLicenseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CheckoutBorrowLicenseRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CheckoutBorrowLicenseResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CheckoutBorrowLicenseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CheckoutBorrowLicenseCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CheckoutBorrowLicenseCommandOutput> {
    return deserializeAws_json1_1CheckoutBorrowLicenseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

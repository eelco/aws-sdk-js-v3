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

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import {
  DetectPiiEntitiesRequest,
  DetectPiiEntitiesRequestFilterSensitiveLog,
  DetectPiiEntitiesResponse,
  DetectPiiEntitiesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DetectPiiEntitiesCommand,
  serializeAws_json1_1DetectPiiEntitiesCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link DetectPiiEntitiesCommand}.
 */
export interface DetectPiiEntitiesCommandInput extends DetectPiiEntitiesRequest {}
/**
 * The output of {@link DetectPiiEntitiesCommand}.
 */
export interface DetectPiiEntitiesCommandOutput extends DetectPiiEntitiesResponse, __MetadataBearer {}

/**
 * <p>Inspects the input text for entities that contain personally identifiable information
 *       (PII) and returns information about them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DetectPiiEntitiesCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DetectPiiEntitiesCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new DetectPiiEntitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetectPiiEntitiesCommandInput} for command's `input` shape.
 * @see {@link DetectPiiEntitiesCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 */
export class DetectPiiEntitiesCommand extends $Command<
  DetectPiiEntitiesCommandInput,
  DetectPiiEntitiesCommandOutput,
  ComprehendClientResolvedConfig
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

  constructor(readonly input: DetectPiiEntitiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetectPiiEntitiesCommandInput, DetectPiiEntitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DetectPiiEntitiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "DetectPiiEntitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectPiiEntitiesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DetectPiiEntitiesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetectPiiEntitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DetectPiiEntitiesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetectPiiEntitiesCommandOutput> {
    return deserializeAws_json1_1DetectPiiEntitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}

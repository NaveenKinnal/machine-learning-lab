/**
 * Contaxy API
 * Functionality to create and manage projects, services, jobs, and files.
 *
 * The version of the OpenAPI document: 0.0.10
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ProblemDetails model module.
 * @module model/ProblemDetails
 * @version 0.0.10
 */
class ProblemDetails {
  /**
   * Constructs a new <code>ProblemDetails</code>.
   * @alias module:model/ProblemDetails
   */
  constructor() {
    ProblemDetails.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>ProblemDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProblemDetails} obj Optional instance to populate.
   * @return {module:model/ProblemDetails} The populated <code>ProblemDetails</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProblemDetails();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'Number');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('explanation')) {
        obj['explanation'] = ApiClient.convertToType(
          data['explanation'],
          'String'
        );
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], Object);
      }
    }
    return obj;
  }
}

/**
 * The HTTP status code generated by the origin server for this occurrence of the problem.
 * @member {Number} code
 */
ProblemDetails.prototype['code'] = undefined;

/**
 * A developer-facing human-readable error message in English.
 * @member {String} message
 */
ProblemDetails.prototype['message'] = undefined;

/**
 * A human readable explanation specific to this error that is helpful to locate the problem and give advice on how to proceed.
 * @member {String} explanation
 */
ProblemDetails.prototype['explanation'] = undefined;

/**
 * A map of additional problem details.
 * @member {Object} details
 */
ProblemDetails.prototype['details'] = undefined;

export default ProblemDetails;

/**
 * Contaxy API
 * Functionality to create and manage projects, services, jobs, and files.
 *
 * The version of the OpenAPI document: 0.0.22
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UserRegistration model module.
 * @module model/UserRegistration
 * @version 0.0.22
 */
class UserRegistration {
  /**
   * Constructs a new <code>UserRegistration</code>.
   * @alias module:model/UserRegistration
   */
  constructor() {
    UserRegistration.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj) {}

  /**
   * Constructs a <code>UserRegistration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserRegistration} obj Optional instance to populate.
   * @return {module:model/UserRegistration} The populated <code>UserRegistration</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UserRegistration();

      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('disabled')) {
        obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
    }
    return obj;
  }
}

/**
 * A unique username on the system.
 * @member {String} username
 */
UserRegistration.prototype['username'] = undefined;

/**
 * User email address.
 * @member {String} email
 */
UserRegistration.prototype['email'] = undefined;

/**
 * Indicates that user is disabled. Disabling a user will prevent any access to user-accessible resources.
 * @member {Boolean} disabled
 * @default false
 */
UserRegistration.prototype['disabled'] = false;

/**
 * Password for the user. The password will be stored in as a hash.
 * @member {String} password
 */
UserRegistration.prototype['password'] = undefined;

export default UserRegistration;

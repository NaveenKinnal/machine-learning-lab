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
 * The BodyRegisterAdminUserSystemAdminPost model module.
 * @module model/BodyRegisterAdminUserSystemAdminPost
 * @version 0.0.10
 */
class BodyRegisterAdminUserSystemAdminPost {
  /**
   * Constructs a new <code>BodyRegisterAdminUserSystemAdminPost</code>.
   * @alias module:model/BodyRegisterAdminUserSystemAdminPost
   * @param password {String}
   * @param passwordConfirm {String}
   */
  constructor(password, passwordConfirm) {
    BodyRegisterAdminUserSystemAdminPost.initialize(
      this,
      password,
      passwordConfirm
    );
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, password, passwordConfirm) {
    obj['password'] = password;
    obj['password_confirm'] = passwordConfirm;
  }

  /**
   * Constructs a <code>BodyRegisterAdminUserSystemAdminPost</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BodyRegisterAdminUserSystemAdminPost} obj Optional instance to populate.
   * @return {module:model/BodyRegisterAdminUserSystemAdminPost} The populated <code>BodyRegisterAdminUserSystemAdminPost</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BodyRegisterAdminUserSystemAdminPost();

      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('password_confirm')) {
        obj['password_confirm'] = ApiClient.convertToType(
          data['password_confirm'],
          'String'
        );
      }
    }
    return obj;
  }
}

/**
 * @member {String} password
 */
BodyRegisterAdminUserSystemAdminPost.prototype['password'] = undefined;

/**
 * @member {String} password_confirm
 */
BodyRegisterAdminUserSystemAdminPost.prototype['password_confirm'] = undefined;

export default BodyRegisterAdminUserSystemAdminPost;

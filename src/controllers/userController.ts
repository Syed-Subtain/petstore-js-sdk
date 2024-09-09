/**
 * Swagger Petstore - OpenAPI 3.0Lib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  ContentTypeEnum,
  contentTypeEnumSchema,
} from '../models/contentTypeEnum';
import { User, userSchema } from '../models/user';
import { array, bigint, number, optional, string } from '../schema';
import { BaseController } from './baseController';
import { ApiError } from '@apimatic/core';

export class UserController extends BaseController {
  /**
   * This can only be done by the logged in user.
   *
   * @param contentType
   * @param id
   * @param username
   * @param firstName
   * @param lastName
   * @param email
   * @param password
   * @param phone
   * @param userStatus   User Status
   * @return Response from the API call
   */
  async createUser(
    contentType: ContentTypeEnum,
    id?: bigint,
    username?: string,
    firstName?: string,
    lastName?: string,
    email?: string,
    password?: string,
    phone?: string,
    userStatus?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<User>> {
    const req = this.createRequest('POST', '/user');
    const mapped = req.prepareArgs({
      contentType: [contentType, contentTypeEnumSchema],
      id: [id, optional(bigint())],
      username: [username, optional(string())],
      firstName: [firstName, optional(string())],
      lastName: [lastName, optional(string())],
      email: [email, optional(string())],
      password: [password, optional(string())],
      phone: [phone, optional(string())],
      userStatus: [userStatus, optional(number())],
    });
    req.header('Content-Type', mapped.contentType);
    req.form({
      id: mapped.id,
      username: mapped.username,
      firstName: mapped.firstName,
      lastName: mapped.lastName,
      email: mapped.email,
      password: mapped.password,
      phone: mapped.phone,
      userStatus: mapped.userStatus,
    });
    req.authenticate([]);
    return req.callAsJson(userSchema, requestOptions);
  }

  /**
   * Creates list of users with given input array
   *
   * @param body
   * @return Response from the API call
   */
  async createUsersWithListInput(
    body?: User[],
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<User>> {
    const req = this.createRequest('POST', '/user/createWithList');
    const mapped = req.prepareArgs({
      body: [body, optional(array(userSchema))],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.defaultToError(ApiError, 'successful operation');
    req.authenticate([]);
    return req.callAsJson(userSchema, requestOptions);
  }

  /**
   * Logs user into the system
   *
   * @param username The user name for login
   * @param password The password for login in clear text
   * @return Response from the API call
   */
  async loginUser(
    username?: string,
    password?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<string>> {
    const req = this.createRequest('GET', '/user/login');
    const mapped = req.prepareArgs({
      username: [username, optional(string())],
      password: [password, optional(string())],
    });
    req.query('username', mapped.username);
    req.query('password', mapped.password);
    req.throwOn(400, ApiError, 'Invalid username/password supplied');
    req.authenticate([]);
    return req.callAsText(requestOptions);
  }

  /**
   * Logs out current logged in user session
   *
   * @return Response from the API call
   */
  async logoutUser(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET', '/user/logout');
    req.authenticate([]);
    return req.call(requestOptions);
  }

  /**
   * Get user by user name
   *
   * @param name The name that needs to be fetched. Use user1 for testing.
   * @return Response from the API call
   */
  async getUserByName(
    name: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<User>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ name: [name, string()] });
    req.appendTemplatePath`/user/${mapped.name}`;
    req.throwOn(400, ApiError, 'Invalid username supplied');
    req.throwOn(404, ApiError, 'User not found');
    req.authenticate([]);
    return req.callAsJson(userSchema, requestOptions);
  }

  /**
   * This can only be done by the logged in user.
   *
   * @param name         name that need to be deleted
   * @param contentType
   * @param id
   * @param username
   * @param firstName
   * @param lastName
   * @param email
   * @param password
   * @param phone
   * @param userStatus   User Status
   * @return Response from the API call
   */
  async updateUser(
    name: string,
    contentType: ContentTypeEnum,
    id?: bigint,
    username?: string,
    firstName?: string,
    lastName?: string,
    email?: string,
    password?: string,
    phone?: string,
    userStatus?: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      name: [name, string()],
      contentType: [contentType, contentTypeEnumSchema],
      id: [id, optional(bigint())],
      username: [username, optional(string())],
      firstName: [firstName, optional(string())],
      lastName: [lastName, optional(string())],
      email: [email, optional(string())],
      password: [password, optional(string())],
      phone: [phone, optional(string())],
      userStatus: [userStatus, optional(number())],
    });
    req.header('Content-Type', mapped.contentType);
    req.form({
      id: mapped.id,
      username: mapped.username,
      firstName: mapped.firstName,
      lastName: mapped.lastName,
      email: mapped.email,
      password: mapped.password,
      phone: mapped.phone,
      userStatus: mapped.userStatus,
    });
    req.appendTemplatePath`/user/${mapped.name}`;
    req.authenticate([]);
    return req.call(requestOptions);
  }

  /**
   * This can only be done by the logged in user.
   *
   * @param name The name that needs to be deleted
   * @return Response from the API call
   */
  async deleteUser(
    name: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ name: [name, string()] });
    req.appendTemplatePath`/user/${mapped.name}`;
    req.throwOn(400, ApiError, 'Invalid username supplied');
    req.throwOn(404, ApiError, 'User not found');
    req.authenticate([]);
    return req.call(requestOptions);
  }
}

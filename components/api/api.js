import axios from "axios";
import { useState } from "react";

class ApiService {
  /** The currently logged-in user. */

  /** Prepare the service. */
  constructor() {}
  server = "https://api.reflekta.croonus.com/api/v1/";
  local = "http://192.168.1.192:8000/api/";
  /**
   * Execute the API call
   *
   * @param {"LIST","GET"|"PUT"|"POST"|"DELETE"} method The HTTP method to use.
   * @param {string} path The path to the API, without the domain and API version suffix.
   * @param {?{}} payload The payload to send in the request.
   *
   * @return {Promise<APIResponse>}
   */
  _execute(method, path, payload = null) {
    return new Promise((resolve, reject) => {
      axios({
        method: method,
        url: this.server + path.replace(/^\//, ""),
        headers: {},
        data: payload,
      })
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
  }

  /**
   * Execute the get API call
   *
   * @param {string} path The path to the API, without the domain and API version suffix.
   *
   * @return {Promise<APIResponse>}
   */
  get(path) {
    return this._execute("GET", path);
  }

  /**
   * Execute the post API call
   *
   * @param {string} path The path to the API, without the domain and API version suffix.
   * @param {?{}} payload The payload to send in the request.
   *
   * @return {Promise<APIResponse>}
   */
  post(path, payload) {
    return this._execute("POST", path, payload);
  }

  /**
   * Execute the list API call
   *
   * @param {string} path The path to the API, without the domain and API version suffix.
   * @param {?{}} payload The payload to send in the request.
   *
   * @return {Promise<APIResponse>}
   */
  list(path, payload) {
    return this._execute("LIST", path, payload);
  }

  /**
   * Execute the delete API call
   *
   * @param {string} path The path to the API, without the domain and API version suffix.
   *
   * @return {Promise<APIResponse>}
   */
  delete(path) {
    return this._execute("DELETE", path);
  }
}

/**
 * Get the reference to the API service.
 */
const useAPI = () => {
  return useState(new ApiService())[0];
};

export const apiHandler = () => {
  return new ApiService();
};

export default useAPI;

import { EAcceptedHttpMethods } from "./types";
import {
  UNSUPPORTED_METHOD_ERROR,
  EXPECTED_REQUEST_BODY_ERROR,
} from "./constants/errors";
import superagent from "superagent";

class APICall {
  private baseUrl: string;
  private url: string;
  private method: EAcceptedHttpMethods;
  private data?: object;
  private apiKey: string;

  constructor(
    baseUrl: string,
    url: string,
    method: EAcceptedHttpMethods,
    apiKey: string,
    data?: object
  ) {
    this.baseUrl = baseUrl;
    this.url = url;
    this.apiKey = apiKey;
    this.method = method;
    if (data) this.data = data;
  }

  async send() {
    if (this.method === EAcceptedHttpMethods.GET) {
      return superagent.get(`${this.baseUrl}${this.url}`);
    } else if (this.method === EAcceptedHttpMethods.POST) {
      if (!this.data) throw new Error(EXPECTED_REQUEST_BODY_ERROR);
      return superagent
        .post(`${this.baseUrl}${this.url}`)
        .send(this.data)
        .set({ "X-API-Key": this.apiKey });
    } else {
      throw new Error(UNSUPPORTED_METHOD_ERROR);
    }
  }
}

export default APICall;

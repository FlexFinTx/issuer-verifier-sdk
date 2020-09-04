import {
  IVerifiableCredential,
  EAcceptedHttpMethods,
  IVerifiablePresentation,
  IJsonLDFrame,
} from "./types";
import APICall from "./APICall";
import querystring from "querystring";
import { IFilterObject } from "./types/IFilterObject";
import { SuperAgentRequest } from "superagent";

class FlexSDK {
  private ivapiUrl: string;
  private apiKey: string;

  constructor(ivapiUrl: string, apiKey: string) {
    this.ivapiUrl = ivapiUrl;
    this.apiKey = apiKey;
  }

  async getIssuedCredentials(
    filterObj?: IFilterObject
  ): Promise<SuperAgentRequest> {
    let endpoint = "/credentials/savedCredentials";
    //filterObj can be of types: 1: id & 2: type; if no filters, returns all issued credentials
    if (filterObj) {
      endpoint = `?${querystring.stringify(filterObj)}`;
    }
    const request = new APICall(
      this.ivapiUrl,
      endpoint,
      EAcceptedHttpMethods.GET,
      this.apiKey
    );
    return request.send();
  }

  async issueNewCredential(
    credential: IVerifiableCredential
  ): Promise<SuperAgentRequest> {
    const request = new APICall(
      this.ivapiUrl,
      "/credentials/issueCredential",
      EAcceptedHttpMethods.POST,
      this.apiKey,
      credential
    );
    return request.send();
  }

  async verifySignedCredential(
    credential: IVerifiableCredential
  ): Promise<SuperAgentRequest> {
    const request = new APICall(
      this.ivapiUrl,
      "/verifier/credentials",
      EAcceptedHttpMethods.POST,
      this.apiKey,
      credential
    );
    return request.send();
  }

  async verifySignedPresentation(
    presentation: IVerifiablePresentation
  ): Promise<SuperAgentRequest> {
    const request = new APICall(
      this.ivapiUrl,
      "/verifier/presentations",
      EAcceptedHttpMethods.POST,
      this.apiKey,
      presentation
    );
    return request.send();
  }

  async generatePresentationRequest(
    callbackId: string,
    jsonldFrame: IJsonLDFrame
  ): Promise<SuperAgentRequest> {
    const objToSend = { callbackId: callbackId, jsonldFrame: jsonldFrame };
    const request = new APICall(
      this.ivapiUrl,
      "/verifier/presentationRequest",
      EAcceptedHttpMethods.POST,
      this.apiKey,
      objToSend
    );
    return request.send();
  }

  async getPresentationSubmission(
    callbackId: string
  ): Promise<SuperAgentRequest> {
    const request = new APICall(
      this.ivapiUrl,
      `/verifier/polling/${callbackId}`,
      EAcceptedHttpMethods.GET,
      this.apiKey
    );
    return request.send();
  }
}

export default FlexSDK;

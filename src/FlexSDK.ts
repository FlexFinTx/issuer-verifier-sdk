import { IVerifiableCredential, EAcceptedHttpMethods } from "./types";
import APICall from "./APICall";

class FlexSDK {
  private ivapiUrl: string;

  constructor(ivapiUrl: string) {
    this.ivapiUrl = ivapiUrl;
  }

  async issueNewCredential(credential: IVerifiableCredential) {
    const request = new APICall(
      this.ivapiUrl,
      "/credentials/issueCredential",
      EAcceptedHttpMethods.POST,
      credential
    );
    return request.send();
  }

  async getIssuedCredentials() {}

  async verifySignedCredential() {}

  async verifySignedPresentation() {}

  async generatePresentationRequest() {}

  async getPresentationSubmission() {}
}

export default FlexSDK;

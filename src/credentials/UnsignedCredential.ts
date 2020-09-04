import { IVerifiableCredential } from "../types";

export enum SupportedCredentialTypes {
  ComplianceCertificate = "ComplianceCertificateCard",
}

export abstract class UnsignedCredential {
  protected id: string;
  protected type: string[];
  protected receiverDid: string;
  protected contexts: string[];
  protected issuanceDate: string;

  constructor(id: string, type: SupportedCredentialTypes, receiverDid: string) {
    this.id = id;
    this.type = ["VerifiableCredential", type.toString()];
    this.contexts = [
      "https://www.w3.org/2018/credentials/v1",
      "https://w3c-ccg.github.io/ldp-bbs2020/context/v1",
    ];
    this.issuanceDate = new Date().toISOString();
    this.receiverDid = receiverDid;
  }

  abstract generate(): IVerifiableCredential;
}

import {
  UnsignedCredential,
  SupportedCredentialTypes,
} from "./UnsignedCredential";
import { IVerifiableCredential } from "../types";

export enum ComplianceLevelTypes {
  KYCLite = "KYC Lite",
  KYCFull = "KYC Full",
}

export class ComplianceCertificateCredential extends UnsignedCredential {
  private nationalId!: string;
  private givenName!: string;
  private familyName!: string;
  private gender!: string;
  private birthDate!: string;
  private address!: string;
  private complianceLevel!: ComplianceLevelTypes;
  private detailsSet = false;

  constructor(id: string, receiverDid: string) {
    super(id, SupportedCredentialTypes.ComplianceCertificate, receiverDid);
    this.contexts.push(
      "https://raw.githubusercontent.com/FlexFinTx/jsonld-contexts/master/contexts/complianceCertificate.jsonld"
    );
  }

  setCredentialDetails(
    nationalId: string,
    givenName: string,
    familyName: string,
    gender: string,
    birthDate: string,
    address: string,
    complianceLevel: ComplianceLevelTypes
  ): void {
    this.nationalId = nationalId;
    this.givenName = givenName;
    this.familyName = familyName;
    this.gender = gender;
    this.birthDate = birthDate;
    this.address = address;
    this.complianceLevel = complianceLevel;
    this.detailsSet = true;
  }

  generate(): IVerifiableCredential {
    if (!this.detailsSet) {
      throw new Error(
        "Error generating verifiable credential. You need to call setCredentialDetails(...) first"
      );
    }

    const vc: IVerifiableCredential = {
      "@context": this.contexts,
      id: this.id,
      type: this.type,
      credentialId: "ComplianceCertificate001",
      credentialName: "Compliance Certificate",
      description: "A certificate representing KYC compliance",
      illustration: "https://i.imgur.com/CYP1ohS.png",
      issuanceDate: this.issuanceDate,
      credentialSubject: {
        id: this.receiverDid,
        type: "ComplianceCertificateCredential",
        nationalId: this.nationalId,
        givenName: this.givenName,
        familyName: this.familyName,
        gender: this.gender,
        birthDate: this.birthDate,
        address: this.address,
        complianceLevel: this.complianceLevel.toString(),
      },
    };

    return vc;
  }
}

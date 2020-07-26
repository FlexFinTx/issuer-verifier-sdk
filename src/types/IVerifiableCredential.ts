import { IProof } from "./IProof";

export interface IVerifiableCredential {
  "@context": string[];
  id: string;
  type: string[];
  issuer?: string;
  issuanceDate: string;
  expirationDate?: string;
  credentialSubject: Record<string, unknown>;
  proof?: IProof;
}

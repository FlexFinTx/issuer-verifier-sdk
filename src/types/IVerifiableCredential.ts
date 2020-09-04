import { IProof } from "./IProof";

export interface IVerifiableCredential extends Record<string, unknown> {
  "@context": string[];
  id: string;
  type: string[];
  credentialId?: string;
  credentialName?: string;
  description?: string;
  illustration?: string;
  issuer?: string;
  issuanceDate: string;
  expirationDate?: string;
  credentialSubject: Record<string, unknown>;
  proof?: IProof;
}

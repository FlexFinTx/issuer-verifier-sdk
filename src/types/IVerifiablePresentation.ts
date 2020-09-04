import { IVerifiableCredential } from "./IVerifiableCredential";
import { IProof } from "./IProof";

export interface IVerifiablePresentation extends Record<string, unknown> {
  "@context": string[];
  type: string[];
  holder?: string;
  verifiableCredential: IVerifiableCredential[];
  proof: IProof;
}

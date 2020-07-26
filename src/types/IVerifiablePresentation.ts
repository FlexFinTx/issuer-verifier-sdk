import { IVerifiableCredential } from "./IVerifiableCredential";
import { IProof } from "./IProof";

export interface IVerifiablePresentation {
  "@context": string[];
  type: string[];
  holder?: string;
  verifiableCredential: IVerifiableCredential[];
  proof: IProof;
}

export interface IProof {
  type: string;
  created: string;
  verificationMethod: string;
  proofPurpose: string;
  signature?: string;
  proofValue?: string;
  nonce?: string;
  challenge?: string;
  domain?: string;
  jws?: string;
}

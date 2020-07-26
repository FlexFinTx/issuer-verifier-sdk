export interface IJsonLDFrame {
  "@context": string[];
  type: string[];
  credentialSubject: Record<string, unknown>;
}

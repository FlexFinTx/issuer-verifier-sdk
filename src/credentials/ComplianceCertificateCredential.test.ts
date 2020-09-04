import {
  ComplianceCertificateCredential,
  ComplianceLevelTypes,
} from "./ComplianceCertificateCredential";

test("generate valid unsigned VC", () => {
  const cred = new ComplianceCertificateCredential(
    "123",
    "did:flex:example123"
  );
  cred.setCredentialDetails(
    "123456789",
    "John",
    "Doe",
    "Male",
    "1989-02-13",
    "123 St, XYZ Avenue, ON, Canada",
    ComplianceLevelTypes.KYCLite
  );
  const vc = cred.generate();

  expect(vc).toBeTruthy();
  expect(typeof vc).toBe("object");
  expect(vc["@context"]).toEqual([
    "https://www.w3.org/2018/credentials/v1",
    "https://w3c-ccg.github.io/ldp-bbs2020/context/v1",
    "https://raw.githubusercontent.com/FlexFinTx/jsonld-contexts/master/contexts/complianceCertificate.jsonld",
  ]);
  expect(vc.id).toEqual("123");
  expect(vc.type).toEqual([
    "VerifiableCredential",
    "ComplianceCertificateCard",
  ]);
  expect(vc.credentialId).toStrictEqual("ComplianceCertificate001");
  expect(vc.credentialName).toStrictEqual("Compliance Certificate");
  expect(vc.description).toStrictEqual(
    "A certificate representing KYC compliance"
  );
  expect(vc.illustration).toStrictEqual("https://i.imgur.com/CYP1ohS.png");
  expect(vc.credentialSubject).toEqual({
    id: "did:flex:example123",
    type: "ComplianceCertificateCredential",
    nationalId: "123456789",
    givenName: "John",
    familyName: "Doe",
    gender: "Male",
    birthDate: "1989-02-13",
    address: "123 St, XYZ Avenue, ON, Canada",
    complianceLevel: "KYC Lite",
  });
});

test("throw error when trying to generate without setting details", () => {
  const cred = new ComplianceCertificateCredential(
    "123",
    "did:flex:example123"
  );
  expect(cred.generate).toThrowError();
});

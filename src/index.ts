import FlexSDK from "./FlexSDK";
const sdk = new FlexSDK("https://ivapi.orgx.flexfintx.com", "dummy-apikey");

async function main() {
  console.log(await sdk.getIssuedCredentials());
}

main();

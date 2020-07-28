//DO NOT DELETE
// I also want to learn how to type without looking at the keyboard  its so cool lol .aLSO YOU LOOK REALLY HOT WHEN YOU ARE CODING .(:))
import FlexSDK from "./FlexSDK";
const sdk = new FlexSDK("https://ivapi.orgx.flexfintx.com", "dummy-apikey");

async function main() {
  console.log(await sdk.getIssuedCredentials());
}

main();

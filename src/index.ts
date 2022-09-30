import BoxSDK from "box-node-sdk";
const sdk = new BoxSDK({
  clientID: "CLIENT_ID",
  clientSecret: "CLIENT_SECRET",
});
const client = sdk.getBasicClient("DEVELOPER_TOKEN");

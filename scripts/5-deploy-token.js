import  { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    // deploy a standard ERC-20 contract.
    const tokenAddress = await sdk.deployer.deployToken({
      name: "Lombok Blockchain Society Governance Token",
      symbol: "LBS",
      primary_sale_recipient: AddressZero,
    });

    console.log(
      "Berhasil deploy $LBS token, ke alamat: ",
      tokenAddress
    );

  } catch (error) {
    console.error("Ada error bang:", error);
  }
})();
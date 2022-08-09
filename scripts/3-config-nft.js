import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x6Ea01b5928c12Af82D7525F4f2D3713d8Ab49495");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Komunitas LBS #1",
        description: "This NFT will give you access to LBS DAO",
        image: readFileSync("scripts/assets/head-band.png"),
      }
    ]);

    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
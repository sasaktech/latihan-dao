import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x0Ffa0BD3eDaB5818f582B2f51EC4AeC5bf9dc579");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Komunitas LBS #1",
        description: "This NFT will give you access to LBS DAO",
        image: readFileSync("scripts/assets/lbs.png"),
      }
    ]);

    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
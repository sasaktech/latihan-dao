import sdk from "./1-initialize-sdk.js";

const tokenAddress = "0xE9f6d55371d574Ed77778F4a13985b664E4388B1"
const token = sdk.getToken(tokenAddress);

(async () => {
  try {
    // total suplay of token
    const amount = 1_000_000;

    // interact with your ERC-20
    await token.mintToSelf(amount);
    const totalSupply = await token.totalSupply();

    //print out how many of our token's are out there now!
    console.log("✅ There now is", totalSupply.displayValue, "$LBS");

  } catch (error) {
    console.error("ada error bang: ", error);
  }
})();
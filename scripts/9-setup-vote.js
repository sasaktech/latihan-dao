import sdk from "./1-initialize-sdk.js";

// this is our governance contract
const vote = sdk.getVote("0x77ef715497aA927BF0ae07ca714590f5F1286ead");

const token = sdk.getToken("0xE9f6d55371d574Ed77778F4a13985b664E4388B1");

(async () => {
  try {
    // berikan akses bendahara komunitas untuk mint token tambahan jika dibutuhkan
    await token.roles.grant("minter", vote.getAddress());

    console.log(
      "Successfully gave vote contract permissions to act on token contract"
    );
  } catch (error) {
    console.error("Ada error bang: ", error);
    process.exit(1);
  }

  try {
    // Grab our wallet's token balance, remember -- we hold basiclly the entire supply right now!
    const ownedTokenBalance = await token.balanceOf(
      process.env.WALLET_ADDRESS
    );

    // Grab 90% of the supply that we hold.
    const ownedAmount = ownedTokenBalance.displayValue;
    const percent90 = Number(ownedAmount) / 100 * 90;

    // transfer 90% of the supply to our voting contract.
    await token.transfer(
      vote.getAddress(),
      percent90
    );

    console.log("Successfully tranferred " + percent90 + " token to vote contract");
  } catch (error) {
    console.error("failed to transfer tokens to vote contract", error);
  }

})();
import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    const voteContractAddress = await sdk.deployer.deployVote({
      name: "Lombok Blockchain Society DAO",
      // Alamat contract token ERC-20
      voting_token_address: "0xE9f6d55371d574Ed77778F4a13985b664E4388B1",

      // There parameters are specified in number of blocks.
      // Assuming block time of around 13,14 seconds (for Ethereum)

      // After a proposal is created, when can member start voting
      // for new, we set this to immediately.
      voting_delay_in_blocks: 0,

      // How long do member have to vote on a proposal when it's created?
      // we will set it to 1 day = 6570 blocks
      voting_period_in_blocks: 6570,

      // The minimum % of the total supply that need to vote for
      // the proposal to be valid after the time for the proposal has ended.
      voting_quorum_fraction: 0,

      // What's the minimum # of tokens a user need to be allowed to create a proposal?
      // I set it to 0. Meaning no tokens are required for a user to be allowed to
      // create a proposal.
      proposal_token_threshold: 1,
    });

    console.log(
      "✅ Successfully deployed vote contract, address:",
      voteContractAddress
    );
  } catch (error) {
    console.error("Ada error bang", error);
  }
})();
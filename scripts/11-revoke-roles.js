import sdk from "./1-initialize-sdk.js";

const token = sdk.getToken("0xE9f6d55371d574Ed77778F4a13985b664E4388B1");

(async () => {
  try {
    // Log the current roles
    const allRoles = await token.roles.getAll();

    console.log("👀 Roles that exist right now: ", allRoles);

    // Hapus hak untuk minting kepada wallet admin/deployer
    await token.roles.setAll({ admin: [], minter: [] });
    console.log(
      "🎉 Roles after revoking ourselves",
      await token.roles.getAll()
    );

    console.log("✅ Successfully revoked our superpowers from the ERC-20 contract");
  } catch (error) {
    console.error("Failed to revoke ourselves from the DAO treasury", error);
  }
})();
import { useMetamask, useAddress, useEditionDrop} from '@thirdweb-dev/react';
import { useState, useEffect } from "react";

const App = () => {
  // use the hooks thridweb give us
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  console.log("Your Address: ", address);

  // Initialize our editionDrop contract
  const editionDrop = useEditionDrop("0x6Ea01b5928c12Af82D7525F4f2D3713d8Ab49495");
  // State variable for us to know if user has our NFT
  const [hasClaimedNFT, setHasClaimedNFT] = useState(false);
  // isClaiming let us easily keep a loading state
  const [isClaiming, setIsclaiming] = useState(false);


  useEffect(() => {
    // jika wallet belum konek
    if(!address) {
      return;
    }

    const checkBalance = async () => {
      try {
        const balance = await editionDrop.balanceOf(address, 0);
        if(balance.gt(0)) {
          setHasClaimedNFT(true);
          console.log("🌟 this user has a membership NFT!");
        } else {
          setHasClaimedNFT(false);
          console.log("😭 this user doesn't have a membership NFT.");
        }
      } catch (error) {
        console.error("Ada error bang! ", error);
      }
    };

    checkBalance();
  }, [address, editionDrop]);

  const mintNft = async () => {
    try {
      setIsclaiming(true);
      await editionDrop.claim("0", 1);
      console.log(`🌊 Successfully Minted! Check it out on OpenSea: https://testnets.opensea.io/assets/${editionDrop.getAddress()}/0`);
      setHasClaimedNFT(true);
    } catch (error) {
      setHasClaimedNFT(false);
      console.log("Ada error nih bang: ", error);
    } finally {
      setIsclaiming(false);
    }
  };

  if(!address) {
    return (
      <div className='landing'>
        <h1>Welcome to LBS DAO</h1>
        <button onClick={connectWithMetamask}
          className="btn-hero">Connect your wallet</button>
      </div>
    )
  }

  // show DAO dashboard
  if(hasClaimedNFT) {
    return (
      <div className='member-page'>
        <h1>DAO Member Page</h1>
        <p>Congratulations on being a member</p>
      </div>
    )
  }

  return (
    <div className="mint-nft">
      <h1>Mint your free 🍪DAO Membership NFT</h1>
      <button
        disabled={isClaiming}
        onClick={mintNft}
      >
        {isClaiming ? "Minting..." : "Mint your NFT (free)"}
      </button>
    </div>
  );
};

export default App;

import {userAddress, useMetamask, useAddress} from '@thirdweb-dev/react';

const App = () => {
  // use the hooks thridweb give us
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  console.log("Address: ", address);

  if(!address) {
    return (
      <div className='landing'>
        <h1>Welcome to LBS DAO</h1>
        <button onClick={connectWithMetamask}
          className="btn-hero">Connect your wallet</button>
      </div>
    )
  }

  return (
    <div className="landing">
      <h1>👀 wallet connected, now what!</h1>
    </div>
  );
};

export default App;

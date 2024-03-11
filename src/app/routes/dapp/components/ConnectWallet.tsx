import { memo, useState } from "react";

import { NetworkErrorMessage } from "./NetworkErrorMessage";

// This is the Hardhat Network id, you might change it in the hardhat.config.js
// Here's a list of network ids https://docs.metamask.io/guide/ethereum-provider.html#properties
// to use when deploying to other networks.
// https://hardhat.org/hardhat-network/docs/reference#chainid
const HARDHAT_NETWORK_ID = "11155111";
// const HARDHAT_NETWORK_ID = "31337";
// const HARDHAT_NETWORK_ID = "5";

// This method checks if Metamask selected network is Localhost:8545
const _checkNetwork = () => {
  console.log("*********** window.ethereum.networkVersion", window.ethereum.networkVersion);
  if (window.ethereum.networkVersion === HARDHAT_NETWORK_ID) {
    return {
      status: true,
    };
  }

  return {
    status: false,
    chainId: window.ethereum.networkVersion,
  };

  // this.setState({
  //   networkError: "Please connect Metamask to goerli",
  // });
};

const ConnectWallet = props => {
  const { onConnectWallet } = props;
  const [networkInfo, setNetworkInfo] = useState({
    status: true,
  });

  const _connectWallet = async () => {
    // This method is run when the user clicks the Connect. It connects the
    // dapp to the user's wallet, and initializes it.

    // To connect to the user's wallet, we have to run this method.
    // It returns a promise that will resolve to the user's address.
    const [selectedAddress] = await window.ethereum.request({ method: "eth_requestAccounts" });

    // Once we have the address, we can initialize the application.

    // First we check the network
    const _networkInfo = _checkNetwork();
    setNetworkInfo(_networkInfo);
    if (!_networkInfo.status) {
      return;
    }

    onConnectWallet(selectedAddress);

    // await this._initialize(selectedAddress);

    // TODO 账户改变事件监听&销毁
    // window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
    // We reinitialize it whenever the user changes their account.
    // window.ethereum.on("accountsChanged", ([newAddress]) => {
    //   // this._stopPollingData();
    //   // `accountsChanged` event can be triggered with an undefined newAddress.
    //   // This happens when the user removes the Dapp from the "Connected
    //   // list of sites allowed access to your addresses" (Metamask > Settings > Connections)
    //   // To avoid errors, we reset the dapp state
    //   // if (newAddress === undefined) {
    //   //   return this._resetState();
    //   // }

    //   // this._initialize(newAddress);
    //   onConnectWallet(newAddress);
    // });

    // TODO chainChanged事件监听&销毁
    // We reset the dapp state if the network is changed
    // window.ethereum.on("chainChanged", ([_chainId]) => {
    //   this._stopPollingData();
    //   this._resetState();
    // });
  };

  const dismiss = async () => {};

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-12 text-center">
          {/* Metamask network should be set to Localhost:8545. */}
          {!networkInfo.status && <NetworkErrorMessage message={networkInfo} dismiss={dismiss} />}
        </div>
        <div className="col-6 p-4 text-center">
          <p>Please connect to your wallet.</p>
          <button className="btn btn-warning" type="button" onClick={_connectWallet}>
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(ConnectWallet);

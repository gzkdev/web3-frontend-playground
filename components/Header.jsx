import React, { Suspense } from "react";
// import { ConnectButton } from "web3uikit";
// import { useWeb3Contract } from "react-moralis";
import { useEtherBalance, useEthers } from "@usedapp/core";
import { formatEther } from "ethers/lib/utils";

function Header() {
  // const {runContractFunction: enterRaffle} = useWeb3Contract({
  //     abi: ,
  //     contractAddress: ,
  //     functionName: ,
  //     params: {},
  //     msgValue: ,
  // })
  const { account, activateBrowserWallet, deactivate } = useEthers();
  const accountBalance = useEtherBalance(account);
  return (
    <div
      style={{
        width: "min(90%, 1000px)",
        margin: "0 auto",
        padding: "60px 0px",
      }}
    >
      <h1>Decentralized App</h1>
      {/* <ConnectButton moralisAuth={false} /> */}
      {/* <Suspense fallback={<div>Loading</div>}> */}
      {!account && (
        <button onClick={() => activateBrowserWallet()}>Connect</button>
      )}
      {account && (
        <div>
          {accountBalance && (
            <div>Account Balance: {formatEther(accountBalance)}</div>
          )}
          <br />
          Account Address <br />
          {account} <br />
          <button onClick={() => deactivate()}>Disconnect</button>
        </div>
      )}
      <br />
      {/* </Suspense> */}
    </div>
  );
}

export default Header;

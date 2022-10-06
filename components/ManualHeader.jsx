import { useEffect } from "react";
import { useMoralis } from "react-moralis";

function ManualHeader() {
  const {
    enableWeb3,
    account,
    isWeb3Enabled,
    Moralis,
    deactivateWeb3,
    isWeb3EnableLoading,
  } = useMoralis();

  useEffect(() => {
    if (isWeb3Enabled) return;
    let c = localStorage.getItem("connected");
    if (typeof window !== undefined) {
      if (c) {
        enableWeb3();
      }
    }
    // console.log(isWeb3Enabled);
  }, [isWeb3Enabled]);

  useEffect(() => {
    Moralis.onAccountChanged((account) => {
      console.log(`Account changed to ${account}`);
      if (account === null) {
        localStorage.removeItem("connected");
        deactivateWeb3();
        console.log("No account found");
      }
    });
  }, []);

  return (
    <div>
      <div>Web3 App</div>
      {account ? (
        <div>User - {account}</div>
      ) : (
        <button
          onClick={async () => {
            await enableWeb3();
            if (typeof window !== "undefined") {
              localStorage.setItem("connected", "injected");
            }
          }}
          disabled={isWeb3EnableLoading}
        >
          Connect
        </button>
      )}
    </div>
  );
}

export default ManualHeader;

import "../styles/globals.css";
// import { MoralisProvider } from "react-moralis";
// import { DAppProvider } from "@usedapp/core";
import { Mainnet, DAppProvider, Goerli } from "@usedapp/core";
import { getDefaultProvider } from "ethers";

const config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider("mainnet"),
    [Goerli.chainId]: getDefaultProvider("goerli"),
  },
};

function MyApp({ Component, pageProps }) {
  return (
    // <MoralisProvider initializeOnMount={false}>

    // </MoralisProvider>
    <DAppProvider config={config}>
      <Component {...pageProps} />
    </DAppProvider>
  );
}

export default MyApp;

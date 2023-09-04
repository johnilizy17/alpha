import "@/styles/assets/css/animate.css";
import "@/styles/assets/css/aos.css";
import "@/styles/assets/css/bootstrap.min.css";
import "@/styles/assets/css/default-css.css";
import "@/styles/assets/css/ico-moon-fonts.css";
import "@/styles/assets/css/magnific-popup.css";
import "@/styles/assets/css/main.css";
import "@/styles/assets/css/nice-select.css";
import "@/styles/assets/css/off-canvas.css";
import "@/styles/assets/css/owl.carousel.css";
import "@/styles/assets/css/owl.carousel.min.css";
import "@/styles/assets/css/owl.theme.default.css";
import "@/styles/assets/css/responsive.css";
import "@/styles/assets/css/sc-spacing.css";
import "@/styles/assets/css/slicknav.min.css";
import "@/styles/assets/css/style.css";
import "@/styles/assets/css/styles.css"
import "@/styles/assets/css/typography.css";
import { ChakraProvider } from '@chakra-ui/react'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { bscTestnet } from 'wagmi/chains'
import Head from 'next/head'

const chains = [bscTestnet]
const projectId = 'fef8ac1aafdd98a96a0ed53388f95372'

const { provider } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  provider
});
const ethereumClient = new EthereumClient(wagmiClient, chains)

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="https://unpkg.com/web3@1.6.0/dist/web3.min.js"></script>
        <script src="https://unpkg.com/@walletconnect/web3-provider@1.6.5/dist/umd/index.min.js"></script>
        <script src="../regiz_approve.js" />

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Itim" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Titan+One" />
      </Head>

      <WagmiConfig client={wagmiClient}>
        <ChakraProvider><Component {...pageProps} /> </ChakraProvider>
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}

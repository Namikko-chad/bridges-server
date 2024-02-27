import type { BridgeNetwork } from "./types";

// TODO: FIX need to control chain naming here
export default [
  {
    id: 1,
    displayName: "Polygon PoS Bridge",
    bridgeDbName: "polygon",
    iconLink: "chain:polygon",
    largeTxThreshold: 10000,
    url: "",
    chains: ["Ethereum", "Polygon"],
    destinationChain: "Polygon",
  },
  {
    id: 2,
    displayName: "Arbitrum Bridge",
    bridgeDbName: "arbitrum",
    iconLink: "chain:arbitrum",
    largeTxThreshold: 10000,
    url: "",
    chains: ["Ethereum", "Arbitrum"],
    destinationChain: "Arbitrum",
  },
  {
    id: 3,
    displayName: "Avalanche Bridge",
    bridgeDbName: "avalanche",
    iconLink: "chain:avalanche",
    largeTxThreshold: 10000,
    url: "",
    chains: ["Ethereum", "Avalanche"],
    destinationChain: "Avalanche",
  },
  {
    id: 4,
    displayName: "Optimism Gateway",
    bridgeDbName: "optimism",
    iconLink: "chain:optimism",
    largeTxThreshold: 10000,
    url: "",
    chains: ["Ethereum", "Optimism"],
  },
  {
    id: 5,
    displayName: "Multichain",
    bridgeDbName: "multichain",
    iconLink: "icons:multichain",
    largeTxThreshold: 10000,
    url: "",
    chains: [
      "Ethereum",
      "Polygon",
      "Fantom",
      "Avalanche",
      "Arbitrum",
      "Optimism",
      // "Gnosis",
      // "Celo",
      "BSC",
    ],
    chainMapping: {
      avalanche: "avax", // this is needed temporarily, need to fix and remove
      gnosis: "xdai",
    },
  },
  // {
  //   id: 6,
  //   displayName: "Poly Network",
  //   bridgeDbName: "polynetwork",
  //   iconLink: "icons:poly-network",
  //   largeTxThreshold: 10000,
  //   url: "",
  //   chains: [
  //     "Ethereum",
  //     "Polygon",
  //     "Fantom",
  //     "Avalanche",
  //     "Arbitrum",
  //     "Optimism",
  //     "Gnosis",
  //     // "Celo",
  //     "BSC",
  //   ],
  //   chainMapping: {
  //     avalanche: "avax",
  //     gnosis: "xdai",
  //   },
  // },
  // {
  //   id: 7,
  //   displayName: "Orbit Bridge",
  //   bridgeDbName: "orbitbridge",
  //   iconLink: "icons:orbit-bridge",
  //   largeTxThreshold: 10000,
  //   url: "",
  //   chains: [
  //     "Ethereum",
  //     "Polygon",
  //     "Fantom",
  //     "Avalanche",
  //     "Klaytn",
  //     "BSC",
  //     // "Celo" (disabled)
  //   ],
  //   chainMapping: {
  //     avalanche: "avax",
  //     gnosis: "xdai",
  //   },
  // },
  //  {
  //   id: 8,
  //  displayName: "ChainPort",
  //  bridgeDbName: "chainport",
  //  iconLink: "icons:chainport",
  // largeTxThreshold: 10000,
  //  url: "",
  // chains: ["Ethereum", "Polygon", "Fantom", "Avalanche", "Aurora", "BSC"],
  //  chainMapping: {
  //  avalanche: "avax",
  //  },
  // },
  {
    id: 9,
    displayName: "Portal by Wormhole",
    bridgeDbName: "portal",
    iconLink: "icons:portal",
    largeTxThreshold: 10000,
    url: "",
    chains: [
      "Ethereum",
      "Polygon",
      "Fantom",
      "Avalanche",
      "Aurora",
      "Celo",
      "Klaytn",
      "BSC",
      "Moonbeam",
      "Optimism",
      "Arbitrum",
      "Base",
      "Solana",
    ],
    chainMapping: {
      avalanche: "avax", // this is needed temporarily, need to fix and remove
    },
  },
  {
    id: 10,
    displayName: "Celer cBridge",
    bridgeDbName: "celer",
    iconLink: "icons:cbridge",
    largeTxThreshold: 10000,
    url: "",
    chains: [
      "Ethereum",
      "Polygon",
      "Fantom",
      "Avalanche",
      "Arbitrum",
      "Optimism",
      // "Gnosis",
      // "Aurora",
      // "Celo",
      // "Klaytn",
      "BSC",
      "Manta",
      "Base",
      "zkSync Era",
      "Polygon zkEVM",
      "Linea",
      "Scroll",
      "Moonbeam",
    ],
    chainMapping: {
      avalanche: "avax",
      gnosis: "xdai",
      "zksync era": "era",
      "polygon zkevm": "polygon_zkevm",
    },
  },
  {
    id: 11,
    displayName: "Synapse",
    bridgeDbName: "synapse",
    iconLink: "icons:synapse",
    largeTxThreshold: 10000,
    url: "",
    chains: [
      "Ethereum",
      "Polygon",
      "Fantom",
      "Avalanche",
      "Arbitrum",
      "Optimism",
      "Aurora",
      // "Klaytn",
      "BSC",
      "Metis",
      "Moonbeam",
      "Moonriver",
      "Base",
      // "Harmony",
      // "Dogechain",
      // "DFK Chain",
      // "Cronos",
      // "Canto",
      // "Boba",
    ],
    chainMapping: {
      avalanche: "avax",
    },
  },
  {
    id: 12,
    displayName: "Stargate",
    bridgeDbName: "stargate",
    iconLink: "icons:stargate",
    largeTxThreshold: 10000,
    url: "",
    chains: ["Ethereum", "Polygon", "Fantom", "Avalanche", "Arbitrum", "Optimism", "BSC"],
    chainMapping: {
      avalanche: "avax", // this is needed temporarily, need to fix and remove
    },
  },
  {
    id: 13,
    displayName: "Hop",
    bridgeDbName: "hop",
    iconLink: "icons:hop-protocol",
    largeTxThreshold: 10000,
    url: "",
    chains: ["Ethereum", "Polygon", "Arbitrum", "Optimism", "Gnosis", "Base", "Arbitrum Nova", "Polygon zkEVM"],
    chainMapping: {
      gnosis: "xdai", // this is needed temporarily, need to fix and remove
      "arbitrum nova": "arbitrum_nova",
      "polygon zkevm": "polygon_zkevm",
    },
  },
  /* breaking running adapters, disable temporarily
  {
    id: 14,
    displayName: "Binance-Peg Tokens",
    bridgeDbName: "binancepeg",
    iconLink: "chain:bsc",
    largeTxThreshold: 10000,
    url: "",
    chains: ["BSC"],
    destinationChain: "-",
  },
  */
  {
    id: 15,
    displayName: "Core Bitcoin Bridge",
    bridgeDbName: "avalanche-btc",
    iconLink: "chain:avalanche",
    largeTxThreshold: 10000,
    url: "",
    chains: ["Avalanche"],
    destinationChain: "-", // not sure the effect this will have, need to double-check everything works
    chainMapping: {
      avalanche: "avax", // this is needed temporarily, need to fix and remove
    },
  },
  {
    id: 16,
    displayName: "Gnosis Bridge",
    bridgeDbName: "xdai",
    iconLink: "chain:xdai",
    largeTxThreshold: 10000,
    url: "",
    chains: ["Ethereum", "Gnosis"],
    // destinationChain: "Gnosis",
    chainMapping: {
      gnosis: "xdai", // this is needed temporarily, need to fix and remove
    },
  },
  // {
  //   id: 17,
  //   displayName: "Axelar",
  //   bridgeDbName: "axelar",
  //   iconLink: "icons:axelar",
  //   largeTxThreshold: 10000,
  //   url: "",
  //   chains: ["Ethereum", "Polygon", "Avalanche", "BSC", "Fantom", "Arbitrum"],
  //   chainMapping: {
  //     avalanche: "avax", // this is needed temporarily, need to fix and remove
  //   },
  // },
  {
    id: 18,
    displayName: "Rainbow Bridge",
    bridgeDbName: "rainbowbridge",
    iconLink: "chain:aurora",
    largeTxThreshold: 10000,
    url: "",
    chains: ["Ethereum", "Aurora"],
    destinationChain: "Aurora",
  },
  {
    id: 19,
    displayName: "Across",
    bridgeDbName: "across",
    iconLink: "icons:across",
    largeTxThreshold: 10000,
    url: "",
    chains: ["Ethereum", "Polygon", "Arbitrum", "Optimism", "zkSync Era", "Base"],
    chainMapping: {
      "zksync era": "era",
    },
  },

  {
    id: 20,
    displayName: "DLN (Powered by deBridge)",
    bridgeDbName: "debridgedln",
    iconLink: "icons:debridgedln",
    largeTxThreshold: 10000,
    url: "",
    chains: ["Ethereum", "Polygon", "Arbitrum", "Avalanche", "BSC", "Fantom", "Optimism", "Linea", "Base"],
    chainMapping: {
      avalanche: "avax", // this is needed temporarily, need to fix and remove
    },
  },

  // {
  //   id: 21,
  //   displayName: "Optics",
  //   bridgeDbName: "optics",
  //   iconLink: "chain:celo",
  //   largeTxThreshold: 10000,
  //   url: "",
  //   chains: ["Ethereum", "Polygon", "Celo"],
  // },
  {
    id: 22,
    displayName: "Allbridge Core",
    bridgeDbName: "allbridge",
    iconLink: "icons:allbridge",
    largeTxThreshold: 10000,
    url: "",
    chains: ["Ethereum", "BSC", "Avalanche", "Fantom", "Polygon"],
    chainMapping: {
      avalanche: "avax", // this is needed temporarily, need to fix and remove
    },
  },

  {
    id: 23,
    displayName: "Polygon zkEVM Bridge",
    bridgeDbName: "polygon_zkevm",
    iconLink: "chain:polygon zkevm",
    largeTxThreshold: 10000,
    url: "",
    chainMapping: { "polygon zkevm": "polygon_zkevm" },
    chains: ["Ethereum", "Polygon zkEVM"],
    destinationChain: "Polygon zkEVM",
  },
  // {
  //   id: 23,
  //   displayName: "IBC",
  //   bridgeDbName: "ibc",
  //   iconLink: "chain:cosmos",
  //   largeTxThreshold: 10000,
  //   url: "",
  //   chains: [
  //     "Osmosis",
  //     "Secret",
  //     "Injective",
  //     "Terra Classic",
  //     "Crescent",
  //     "Cronos",
  //     "Evmos",
  //     "Juno",
  //     "Kujira",
  //     "Sifchain",
  //     "Stride",
  //     "Cosmos",
  //     "Canto",
  //   ],
  // },
  // {
  //   id: 24,
  //   displayName: "Meter Passport",
  //   bridgeDbName: "meter",
  //   iconLink: "icons:meter-passport",
  //   largeTxThreshold: 10000,
  //   url: "",
  //   chains: ["Ethereum", "BSC"],
  // },
  // {
  //   id: 25,
  //   displayName: "Beamer Bridge",
  //   bridgeDbName: "beamer",
  //   iconLink: "",
  //   largeTxThreshold: 10000,
  //   url: "",
  //   chains: ["Ethereum", "Arbitrum", "Optimism"]
  // },
  {
    id: 26,
    displayName: "zkSync Era Bridge",
    bridgeDbName: "zksync",
    iconLink: "chain:zksync era",
    largeTxThreshold: 10000,
    url: "",
    chains: ["Ethereum", "zkSync Era"],
    destinationChain: "zkSync Era",
  },
  {
    id: 27,
    displayName: "Symbiosis",
    bridgeDbName: "symbiosis",
    iconLink: "icons:symbiosis",
    largeTxThreshold: 10000,
    url: "",
    chains: [
      "Ethereum",
      "BSC",
      "Avalanche",
      "Polygon",
      "Telos",
      "Kava",
      "Boba",
      "Boba BNB",
      "zkSync Era",
      "Arbitrum",
      "Arbitrum Nova",
      "Optimism",
      "Polygon zkEVM",
      "Linea",
      "Base",
      "Mantle",
    ],
    chainMapping: {
      avalanche: "avax", // this is needed temporarily, need to fix and remove
      "boba bnb": "boba_bnb",
      "zksync era": "era",
      "arbitrum nova": "arbitrum_nova",
      "polygon zkevm": "polygon_zkevm",
    },
  },
  {
    id: 28,
    displayName: "Meson",
    bridgeDbName: "meson",
    iconLink: "icons:meson",
    largeTxThreshold: 10000,
    url: "",
    chains: [
      "Ethereum",
      "Polygon",
      "Fantom",
      "Avalanche",
      "Arbitrum",
      "Optimism",
      "Aurora",
      "BSC",
      "zkSync Era",
      "Kava",
      "Moonbeam",
      "Moonriver",
      "Cronos",
      "Polygon zkEVM",
      "Linea",
      "Base",
      "Metis",
      "Manta",
      "Mantle",
      "Scroll",
      "Celo",
      "Gnosis",
    ],
    chainMapping: {
      avalanche: "avax",
      "zksync era": "era",
      "polygon zkevm": "polygon_zkevm",
      gnosis: "xdai",
    },
  },
  {
    id: 29,
    displayName: "Base Bridge",
    bridgeDbName: "base",
    iconLink: "chain:base",
    largeTxThreshold: 10000,
    url: "",
    chains: ["Ethereum", "Base"],
    destinationChain: "Base",
  },
  {
    id: 30,
    displayName: "Mantle Bridge",
    bridgeDbName: "mantle",
    iconLink: "chain:mantle",
    largeTxThreshold: 10000,
    url: "",
    chains: ["Ethereum", "Mantle"],
    destinationChain: "Mantle",
  },
  {
    id: 34,
    displayName: "Satellite (Powered by Axelar)",
    bridgeDbName: "axelarsatellite",
    iconLink: "icons:axelar",
    largeTxThreshold: 10000,
    url: "",
    chains: [
      "Ethereum",
      "BSC",
      "Polygon",
      "Avalanche",
      "Fantom",
      "Arbitrum",
      "Optimism",
      "Base",
      "Linea",
      "Moonbeam",
      "Celo",
      "Kava",
      "Filecoin",
      "Mantle",
    ],
    chainMapping: {
      avalanche: "avax",
    },
  },
  {
    id: 37,
    displayName: "Manta Pacific Bridge",
    bridgeDbName: "manta",
    iconLink: "icons:manta-pacific-bridge",
    largeTxThreshold: 10000,
    url: "",
    chains: ["Ethereum", "Manta"],
    destinationChain: "Manta",
  },

  // {
  //   id: 31,
  //   displayName: "neuron🧠",
  //   bridgeDbName: "neuron",
  //   iconLink: "protocols:neuron",
  //   largeTxThreshold: 10000,
  //   url: "",
  //   chains: ["Arbitrum", "Linea", "Optimism", "Base"],
  // },
  {
    id: 32,
    displayName: "Squid (Powered by Axelar)",
    bridgeDbName: "squidrouter",
    iconLink: "icons:squid",
    largeTxThreshold: 10000,
    url: "",
    chains: [
      "Ethereum",
      "Polygon",
      "Avalanche",
      // "BSC",
      "Fantom",
      "Arbitrum",
      "Base",
      "Linea",
      "Celo",
      "Moonbeam",
      "Kava",
      "Optimism",
      "Mantle",
    ],
    chainMapping: {
      avalanche: "avax", // this is needed temporarily, need to fix and remove
    },
  },
  {
    id: 35,
    displayName: "Eywa",
    bridgeDbName: "eywa",
    iconLink: "icons:eywa",
    largeTxThreshold: 10000,
    url: "",
    chains: ["Ethereum", "Polygon", "Fantom", "Avalanche", "Arbitrum", "Optimism", "BSC"],
    chainMapping: {
      avalanche: "avax",
    },
  },
  {
    id: 39,
    displayName: "rhino.fi",
    bridgeDbName: "rhinofi",
    iconLink: "icons:rhino.fi",
    largeTxThreshold: 10000,
    url: "",
    chains: [
      "Arbitrum",
      "Arbitrum Nova",
      "BSC",
      "Polygon",
      "Optimism",
      "Base",
      "zkSync Era",
      "Polygon zkEVM",
      "Linea",
      "Scroll",
    ],
    chainMapping: {
      "arbitrum nova": "arbitrum_nova",
      "zksync era": "era",
      "polygon zkevm": "polygon_zkevm",
    },
  },
  // {
  //   id: 41,
  //   displayName: "WanBridge",
  //   bridgeDbName: "wanbridge",
  //   iconLink: "icons:wanbridge",
  //   largeTxThreshold: 10000,
  //   url: "https://bridge.wanchain.org",
  //   chains: [
  //     "Ethereum",
  //     "Polygon",
  //     "Fantom",
  //     "Avalanche",
  //     "Arbitrum",
  //     "Optimism",
  //     "BSC",
  //     "Moonbeam",
  //     "Moonriver",
  //     // "FunctionX",
  //     "Telos",
  //     // "Okexchain",
  //     // "Horizen",
  //     "Metis",
  //     "Astar",
  //     "Vinuchain",
  //     // "Tron",
  //     // "Wanchain",
  //     // "Clover",
  //     "Gather",
  //     "XDC",
  //   ],
  //   chainMapping: {
  //     avalanche: "avax",
  //     vinuchain: "vinu",
  //     // clover: "clv",
  //     gather: "gth",
  //   },
  // },
  {
    id: 42,
    displayName: "pNetwork",
    bridgeDbName: "pnetwork",
    iconLink: "icons:pnetwork",
    largeTxThreshold: 10000,
    url: "https://p.network",
    chains: ["Ethereum", "BSC"],
  },
  {
    id: 43,
    displayName: "PepeTeam Bridge",
    bridgeDbName: "pepeteam_bridge",
    iconLink: "protocols:pepeteam-bridge",
    largeTxThreshold: 10000,
    url: "https://bridge.pepe.team",
    chains: ["Ethereum", "BSC", "Polygon"],
    destinationChain: "Waves",
  },
  {
    id: 44,
    displayName: "Interport Finance",
    bridgeDbName: "interport",
    iconLink: "icons:interport-finance",
    largeTxThreshold: 10000,
    url: "https://app.interport.fi",
    chains: [
      "Ethereum",
      "Arbitrum",
      "BSC",
      "zkSync Era",
      "Base",
      "Scroll",
      "Linea",
      "Polygon",
      "Polygon zkEVM",
      "Optimism",
      "opBNB",
      "Avalanche",
      "EON",
      "Fantom",
    ],
    chainMapping: {
      "zksync era": "era",
      "polygon zkevm": "polygon_zkevm",
      avalanche: "avax",
      opbnb: "op_bnb",
    },
  },
  {
    id: 45,
    displayName: "Shimmer Bridge",
    bridgeDbName: "shimmerbridge",
    iconLink: "chain:shimmerevm",
    largeTxThreshold: 10000,
    url: "",
    chains: ["Ethereum", "BSC", "Polygon", "Avalanche", "Arbitrum", "Optimism", "Base", "Fantom", "ShimmerEVM"],
    chainMapping: {
      avalanche: "avax", // this is needed temporarily, need to fix and remove
    },
    destinationChain: "ShimmerEVM",
  },
  // {
  //   id: 46,
  //   displayName: "XY Finance",
  //   bridgeDbName: "xy",
  //   iconLink: "protocols:xy-finance",
  //   largeTxThreshold: 10000,
  //   url: "https://app.xy.finance",
  //   chains: [
  //     "Ethereum",
  //     "Scroll",
  //     "Mantle",
  //     "Linea",
  //     "Base",
  //     "Arbitrum",
  //     "zkSync Era",
  //     "BSC",
  //     "Polygon",
  //     "Klaytn",
  //     "Polygon zkEVM",
  //     "Avalanche",
  //     "Optimism",
  //     "Cronos",
  //     "Fantom",
  //     "Astar",
  //     "KCC",
  //     "Moonriver",
  //     "ThunderCore",
  //     // "Numbers",
  //   ],
  //   chainMapping: {
  //     "zksync era": "era",
  //     "polygon zkevm": "polygon_zkevm",
  //     avalanche: "avax",
  //   },
  // },
  // {
  //   id: 47,
  //   displayName: "Butter Network",
  //   bridgeDbName: "butternetwork",
  //   iconLink: "icons:butternetwork",
  //   largeTxThreshold: 10000,
  //   url: "",
  //   chains: ["Ethereum", "Polygon", "BSC", "MAP Relay Chain"],
  //   chainMapping: {
  //     "map relay chain": "map",
  //   },
  //   destinationChain: "MAP Relay Chain",
  // },

  {
    id: 48,
    displayName: "Rootstock Bridge",
    bridgeDbName: "rootstock",
    iconLink: "chain:rootstock",
    largeTxThreshold: 10000,
    url: "",
    chains: ["Rootstock", "Bitcoin"],
    chainMapping: {
      rootstock: "rsk",
    },
    destinationChain: "Bitcoin",
  },
  {
    id: 49,
    displayName: "Garden",
    bridgeDbName: "garden",
    iconLink: "protocols:garden",
    largeTxThreshold: 10000,
    url: "https://garden.finance",
    chains: ["Ethereum", "Arbitrum", "Bitcoin"],
    destinationChain: "Bitcoin",
  },
  {
    id: 50,
    displayName: "Mode Network",
    bridgeDbName: "mode",
    iconLink: "chain:mode",
    largeTxThreshold: 10000,
    url: "",
    chains: ["Ethereum", "Mode"],
    destinationChain: "Mode",
  },
  {
    id: 51,
    displayName: "Circle CCTP",
    bridgeDbName: "circle",
    iconLink: "protocols:circle_cctp",
    largeTxThreshold: 10000,
    url: "",
    chains: ["Ethereum", "Optimism", "Polygon", "Base", "Arbitrum", "Avalanche"],
    chainMapping: {
      avalanche: "avax",
    },
  },

  {
    id: 53,
    displayName: "Rootstock Token Bridge",
    bridgeDbName: "tokenbridge",
    iconLink: "chain:rootstock",
    largeTxThreshold: 10000,
    url: "https://tokenbridge.rsk.co/",
    chains: ["Rootstock", "Ethereum"],
    chainMapping: {
      rootstock: "rsk",
    },
    destinationChain: "Ethereum",
  },
  {
    id: 54,
    displayName: "Nitro (by Router)",
    bridgeDbName: "router",
    iconLink: "protocols:router-protocol",
    largeTxThreshold: 10000,
    url: "https://www.routerprotocol.com/",
    chains: [
      "Ethereum",
      "Avalanche",
      "BSC",
      "Fantom",
      "Linea",
      "Base",
      "Polygon",
      "Arbitrum",
      "Aurora",
      "Polygon zkEVM",
      "zkSync Era",
      "Manta",
      "Mantle",
      "Rootstock",
    ],
    chainMapping: {
      "zksync era": "era",
      "polygon zkevm": "polygon_zkevm",
      rootstock: "rsk",
      avalanche: "avax",
    },
  },
] as BridgeNetwork[];

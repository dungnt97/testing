"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// evm/index.ts
var evm_exports = {};
__export(evm_exports, {
  PairState: () => PairState,
  Route: () => Route,
  RouteType: () => RouteType,
  StableSwap: () => StableSwap,
  Trade: () => Trade4,
  createStableSwapPair: () => createStableSwapPair,
  getAllCommonPairs: () => getAllCommonPairs,
  getBestTradeExactIn: () => getBestTradeExactIn,
  getBestTradeExactOut: () => getBestTradeExactOut,
  isStableSwapPair: () => isStableSwapPair
});
module.exports = __toCommonJS(evm_exports);

// evm/getBestTrade.ts
var import_sdk19 = require("@pancakeswap/sdk");

// evm/getBestTradeFromV2.ts
var import_sdk10 = require("@pancakeswap/sdk");

// evm/constants/common.ts
var import_sdk = require("@pancakeswap/sdk");
var BIG_INT_TEN = import_sdk.JSBI.BigInt(10);
var BIPS_BASE = import_sdk.JSBI.BigInt(1e4);
var MIN_BNB = import_sdk.JSBI.exponentiate(BIG_INT_TEN, import_sdk.JSBI.BigInt(16));
var BETTER_TRADE_LESS_HOPS_THRESHOLD = new import_sdk.Percent(import_sdk.JSBI.BigInt(50), BIPS_BASE);

// evm/constants/exchange.ts
var import_sdk5 = require("@pancakeswap/sdk");

// ../tokens/src/common.ts
var import_sdk2 = require("@pancakeswap/sdk");
var CAKE_MAINNET = new import_sdk2.ERC20Token(import_sdk2.ChainId.BSC, "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", 18, "CAKE", "PancakeSwap Token", "https://pancakeswap.finance/");
var CAKE_TESTNET = new import_sdk2.ERC20Token(import_sdk2.ChainId.BSC_TESTNET, "0xFa60D973F7642B748046464e165A65B7323b0DEE", 18, "CAKE", "PancakeSwap Token", "https://pancakeswap.finance/");
var USDC_BSC = new import_sdk2.ERC20Token(import_sdk2.ChainId.BSC, "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", 18, "USDC", "Binance-Peg USD Coin", "https://www.centre.io/usdc");
var USDC_TESTNET = new import_sdk2.ERC20Token(import_sdk2.ChainId.BSC_TESTNET, "0x64544969ed7EBf5f083679233325356EbE738930", 18, "USDC", "Binance-Peg USD Coin", "https://www.centre.io/usdc");
var USDC_ETH = new import_sdk2.ERC20Token(import_sdk2.ChainId.ETHEREUM, "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", 6, "USDC", "USD Coin");
var USDC_GOERLI = new import_sdk2.ERC20Token(import_sdk2.ChainId.GOERLI, "0x07865c6E87B9F70255377e024ace6630C1Eaa37F", 6, "tUSDC", "test USD Coin");
var USDT_BSC = new import_sdk2.ERC20Token(import_sdk2.ChainId.BSC, "0x55d398326f99059fF775485246999027B3197955", 18, "USDT", "Tether USD", "https://tether.to/");
var USDT_ETH = new import_sdk2.ERC20Token(import_sdk2.ChainId.ETHEREUM, "0xdAC17F958D2ee523a2206206994597C13D831ec7", 6, "USDT", "Tether USD", "https://tether.to/");
var BUSD_BSC = new import_sdk2.ERC20Token(import_sdk2.ChainId.BSC, "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", 18, "BUSD", "Binance USD", "https://www.paxos.com/busd/");
var BUSD_TESTNET = new import_sdk2.ERC20Token(import_sdk2.ChainId.BSC_TESTNET, "0xaB1a4d4f1D656d2450692D237fdD6C7f9146e814", 18, "BUSD", "Binance USD", "https://www.paxos.com/busd/");
var BUSD_ETH = new import_sdk2.ERC20Token(import_sdk2.ChainId.ETHEREUM, "0x4Fabb145d64652a948d72533023f6E7A623C7C53", 18, "BUSD", "Binance USD", "https://www.paxos.com/busd/");
var BUSD_GOERLI = new import_sdk2.ERC20Token(import_sdk2.ChainId.GOERLI, "0xb809b9B2dc5e93CB863176Ea2D565425B03c0540", 18, "BUSD", "Binance USD", "https://www.paxos.com/busd/");
var BUSD = {
  [import_sdk2.ChainId.ETHEREUM]: BUSD_ETH,
  [import_sdk2.ChainId.GOERLI]: BUSD_GOERLI,
  [import_sdk2.ChainId.BSC]: BUSD_BSC,
  [import_sdk2.ChainId.BSC_TESTNET]: BUSD_TESTNET
};
var CAKE = {
  [import_sdk2.ChainId.BSC]: CAKE_MAINNET,
  [import_sdk2.ChainId.BSC_TESTNET]: CAKE_TESTNET
};
var USDC = {
  [import_sdk2.ChainId.BSC]: USDC_BSC,
  [import_sdk2.ChainId.BSC_TESTNET]: USDC_TESTNET,
  [import_sdk2.ChainId.ETHEREUM]: USDC_ETH,
  [import_sdk2.ChainId.GOERLI]: USDC_GOERLI
};
var USDT = {
  [import_sdk2.ChainId.BSC]: USDT_BSC,
  [import_sdk2.ChainId.ETHEREUM]: USDT_ETH
};
var WBTC_ETH = new import_sdk2.ERC20Token(import_sdk2.ChainId.ETHEREUM, "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", 8, "WBTC", "Wrapped BTC");

// ../tokens/src/56.ts
var import_sdk3 = require("@pancakeswap/sdk");
var bscTokens = {
  wbnb: import_sdk3.WBNB[import_sdk3.ChainId.BSC],
  bnb: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", 18, "BNB", "BNB", "https://www.binance.com/"),
  cake: CAKE_MAINNET,
  gmi: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x93D8d25E3C9A847a5Da79F79ecaC89461FEcA846", 18, "GMI", "Gamifi", "https://gamifi.gg/"),
  tlos: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xb6C53431608E626AC81a9776ac3e999c5556717c", 18, "TLOS", "Telos", "https://www.telos.net/"),
  beta: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xBe1a001FE942f96Eea22bA08783140B9Dcc09D28", 18, "BETA", "Beta Finance", "https://betafinance.org"),
  nft: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x1fC9004eC7E5722891f5f38baE7678efCB11d34D", 6, "NFT", "APENFT", "https://apenft.org"),
  stephero: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xE8176d414560cFE1Bf82Fd73B986823B89E4F545", 18, "HERO", "StepHero", "https://stephero.io/"),
  pros: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xEd8c8Aa8299C10f067496BB66f8cC7Fb338A3405", 18, "PROS", "Prosper", "https://prosper.so/"),
  qbt: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x17B7163cf1Dbd286E262ddc68b553D899B93f526", 18, "QBT", "Qubit Token", "https://qbt.fi/"),
  cvp: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x5Ec3AdBDae549Dce842e24480Eb2434769e22B2E", 18, "CVP", "Concentrated Voting Power Token", "https://powerpool.finance/"),
  bscdefi: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x40E46dE174dfB776BB89E04dF1C47d8a66855EB3", 18, "BSCDEFI", "ChainId.BSC Defi blue chips token", "https://powerpool.finance/"),
  busd: BUSD_BSC,
  dai: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3", 18, "DAI", "Dai Stablecoin", "https://www.makerdao.com/"),
  usdt: USDT_BSC,
  btcb: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c", 18, "BTCB", "Binance BTC", "https://bitcoin.org/"),
  ust: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x23396cF899Ca06c4472205fC903bDB4de249D6fC", 18, "UST", "Wrapped UST Token", "https://mirror.finance/"),
  eth: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x2170Ed0880ac9A755fd29B2688956BD959F933F8", 18, "ETH", "Binance-Peg Ethereum Token", "https://ethereum.org/en/"),
  usdc: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", 18, "USDC", "Binance-Peg USD Coin", "https://www.centre.io/usdc"),
  kalm: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x4BA0057f784858a48fe351445C672FF2a3d43515", 18, "KALM", "Kalmar Token", "https://kalmar.io/"),
  dkt: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x7Ceb519718A80Dd78a8545AD8e7f401dE4f2faA7", 18, "DKT", "Duelist King", "https://duelistking.com/"),
  hotcross: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x4FA7163E153419E0E1064e418dd7A99314Ed27b6", 18, "HOTCROSS", "Hotcross Token", "https://www.hotcross.com/"),
  belt: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f", 18, "BELT", "Belt Token", "https://beta.belt.fi/"),
  watch: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x7A9f28EB62C791422Aa23CeAE1dA9C847cBeC9b0", 18, "WATCH", "Yieldwatch Token", "https://yieldwatch.net/"),
  bry: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830", 18, "BRY", "Berry Token", "https://berrydata.co/"),
  wsote: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x541E619858737031A1244A5d0Cd47E5ef480342c", 18, "wSOTE", "Soteria Token", "https://soteria.finance/"),
  helmet: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8", 18, "Helmet", "Helmet Token", "https://www.helmet.insure/"),
  ten: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xdFF8cb622790b7F92686c722b02CaB55592f152C", 18, "TEN", "Tenet Token", "https://www.tenet.farm/"),
  ditto: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x233d91A0713155003fc4DcE0AFa871b508B3B715", 9, "DITTO", "Ditto Token", "https://ditto.money/"),
  blink: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x63870A18B6e42b01Ef1Ad8A2302ef50B7132054F", 6, "BLINK", "Blink Token", "https://blink.wink.org"),
  syrup: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x009cF7bC57584b7998236eff51b98A168DceA9B0", 18, "SYRUP", "SyrupBar Token", "https://pancakeswap.finance/"),
  pha: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x0112e557d400474717056C4e6D40eDD846F38351", 18, "PHA", "Phala Token", "https://phala.network"),
  babycake: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xdB8D30b74bf098aF214e862C90E647bbB1fcC58c", 18, "BABYCAKE", "Baby Cake Token", "https://babycake.app/"),
  bmon: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x08ba0619b1e7A582E0BCe5BBE9843322C954C340", 18, "BMON", "Binamon Token", "https://binamon.org/"),
  hero: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xD40bEDb44C081D2935eebA6eF5a3c8A31A1bBE13", 18, "HERO", "Metahero Token", "https://metahero.io/"),
  wsg: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xA58950F05FeA2277d2608748412bf9F802eA4901", 18, "WSG", "Wall Street Games Token", "https://wsg.gg/"),
  mcrn: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xacb2d47827C9813AE26De80965845D80935afd0B", 18, "MCRN", "Macaronswap Token", "https://www.macaronswap.finance/"),
  revv: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x833F307aC507D47309fD8CDD1F835BeF8D702a93", 18, "REVV", "REVV Token", "https://revvmotorsport.com/"),
  skill: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x154A9F9cbd3449AD22FDaE23044319D6eF2a1Fab", 18, "SKILL", "Cryptoblades Token", "https://www.cryptoblades.io/"),
  if: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xB0e1fc65C1a741b4662B813eB787d369b8614Af1", 18, "IF", "Impossible Finance Token", "https://impossible.finance/"),
  sps: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x1633b7157e7638C4d6593436111Bf125Ee74703F", 18, "SPS", "Splinterlands Token", "https://splinterlands.com"),
  chess: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x20de22029ab63cf9A7Cf5fEB2b737Ca1eE4c82A6", 18, "CHESS", "Chess Token", "https://tranchess.com/"),
  titan: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xe898EDc43920F357A93083F1d4460437dE6dAeC2", 18, "TITAN", "Titanswap Token", "https://titanswap.org"),
  harmony: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x03fF0ff224f904be3118461335064bB48Df47938", 18, "ONE", "Harmony ONE Token", "https://www.harmony.one/"),
  mask: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x2eD9a5C8C13b93955103B9a7C167B67Ef4d568a3", 18, "MASK", "Mask Token", "https://mask.io/"),
  dvi: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x758FB037A375F17c7e195CC634D77dA4F554255B", 18, "DVI", "Dvision Network Token", "https://dvision.network/"),
  adx: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x6bfF4Fb161347ad7de4A625AE5aa3A1CA7077819", 18, "ADX", "Adex Network Token", "https://www.adex.network"),
  bscpad: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x5A3010d4d8D3B5fB49f8B6E57FB9E48063f16700", 18, "BSCPAD", "Bscpad Token", "https://bscpad.com/"),
  rabbit: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x95a1199EBA84ac5f19546519e287d43D2F0E1b41", 18, "RABBIT", "Rabbit Finance Token", "https://rabbitfinance.io/earn"),
  form: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x25A528af62e56512A19ce8c3cAB427807c28CC19", 18, "FORM", "Formation Token", "https://formation.fi/"),
  txl: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x1FFD0b47127fdd4097E54521C9E2c7f0D66AafC5", 18, "TXL", "Tixl Token", "https://tixl.org/"),
  orbs: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xeBd49b26169e1b52c04cFd19FCf289405dF55F80", 18, "ORBS", "Orbs Token", "https://www.orbs.com/"),
  cos: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x96Dd399F9c3AFda1F194182F71600F1B65946501", 18, "COS", "Contentos Token", "https://www.contentos.io/"),
  bunny: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51", 18, "BUNNY", "Pancakebunny Token", "https://pancakebunny.finance/"),
  alice: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xAC51066d7bEC65Dc4589368da368b212745d63E8", 6, "ALICE", "My Neighbor Alice Token", "https://www.myneighboralice.com/"),
  for: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x658A109C5900BC6d2357c87549B651670E5b0539", 18, "FOR", "Fortube Token", "https://www.for.tube/home"),
  bux: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x211FfbE424b90e25a15531ca322adF1559779E45", 18, "BUX", "Bux Crypto Token", "https://getbux.com/bux-crypto/"),
  nuls: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x8CD6e29d3686d24d3C2018CEe54621eA0f89313B", 8, "NULS", "Nuls Token", "https://www.nuls.io/"),
  ramp: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x8519EA49c997f50cefFa444d240fB655e89248Aa", 18, "RAMP", "RAMP DEFI Token", "https://rampdefi.com/"),
  bfi: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x81859801b01764D4f0Fa5E64729f5a6C3b91435b", 18, "BFI", "bearn.fi Token", "https://bearn.fi/"),
  dexe: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x039cB485212f996A9DBb85A9a75d898F94d38dA6", 18, "DEXE", "DeXe Token", "https://dexe.network/"),
  bel: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x8443f091997f06a61670B735ED92734F5628692F", 18, "BEL", "Bella Protocol Token", "https://bella.fi/"),
  tpt: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xECa41281c24451168a37211F0bc2b8645AF45092", 4, "TPT", "Tokenpocket Token", "https://www.tokenpocket.pro/"),
  xmark: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x26A5dFab467d4f58fB266648CAe769503CEC9580", 9, "xMARK", "Benchmark Protocol Token", "https://benchmarkprotocol.finance/"),
  bmxx: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x4131b87F74415190425ccD873048C708F8005823", 18, "bMXX", "Multiplier Token", "https://multiplier.finance/"),
  iotx: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x9678E42ceBEb63F23197D726B29b1CB20d0064E5", 18, "IOTX", "Binance-Peg IoTeX Network Token", "https://iotex.io/"),
  bor: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x92D7756c60dcfD4c689290E8A9F4d263b3b32241", 18, "BOR", "BoringDAO Token", "https://www.boringdao.com/"),
  bopen: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xF35262a9d427F96d2437379eF090db986eaE5d42", 18, "bOPEN", "OPEN Governance Token", "https://opendao.io/"),
  dodo: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2", 18, "DODO", "Dodo Token", "https://dodoex.io/"),
  swingby: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x71DE20e0C4616E7fcBfDD3f875d568492cBE4739", 18, "SWINGBY", "Swingby Network Token", "https://swingby.network/"),
  zee: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x44754455564474A89358B2C2265883DF993b12F0", 18, "ZEE", "Zeroswap Token", "https://zeroswap.io/"),
  swgb: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xE40255C5d7fa7ceEc5120408C78C787CECB4cfdb", 18, "SWGb", "SWGb Token", "https://swirgepay.com/"),
  swg: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xe792f64C582698b8572AAF765bDC426AC3aEfb6B", 18, "SWG", "SWG Token", "https://swirgepay.com/"),
  sfp: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xD41FDb03Ba84762dD66a0af1a6C8540FF1ba5dfb", 18, "SFP", "Safepal Token", "https://www.safepal.io/"),
  lina: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x762539b45A1dCcE3D36d080F74d1AED37844b878", 18, "LINA", "Linear Finance Token", "https://linear.finance/"),
  lit: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xb59490aB09A0f526Cc7305822aC65f2Ab12f9723", 18, "LIT", "Litentry Token", "https://www.litentry.com/"),
  hget: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xC7d8D35EBA58a0935ff2D5a33Df105DD9f071731", 6, "HGET", "Hedget Token", "https://www.hedget.com/"),
  bdo: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454", 18, "BDO", "Bdollar Token", "https://bdollar.fi/"),
  egld: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xbF7c81FFF98BbE61B40Ed186e4AfD6DDd01337fe", 18, "EGLD", "Elrond Token", "https://elrond.com/"),
  front: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b", 18, "FRONT", "Frontier Token", "https://frontier.xyz/"),
  btcst: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x78650B139471520656b9E7aA7A5e9276814a38e9", 17, "BTCST", "StandardBTCHashrate Token", "https://www.1-b.tc/"),
  bscx: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x5Ac52EE5b2a633895292Ff6d8A89bB9190451587", 18, "BSCX", "BSCX Token", "https://bscex.org/"),
  balbt: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x72fAa679E1008Ad8382959FF48E392042A8b06f7", 18, "bALBT", "AllianceBlock Token", "https://allianceblock.io/"),
  asr: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x80D5f92C2c8C682070C95495313dDB680B267320", 2, "ASR", "AS Roma Token", "https://www.chiliz.com"),
  atm: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x25E9d05365c867E59C1904E7463Af9F312296f9E", 2, "ATM", "Athletico Madrid Token", "https://www.chiliz.com"),
  og: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xf05E45aD22150677a017Fbd94b84fBB63dc9b44c", 2, "OG", "OG Nice Token", "https://www.chiliz.com"),
  reef: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xF21768cCBC73Ea5B6fd3C687208a7c2def2d966e", 18, "REEF", "Reef.finance Token", "https://reef.finance/"),
  juv: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xC40C9A843E1c6D01b7578284a9028854f6683b1B", 2, "JUV", "Juventus Token", "https://www.chiliz.com"),
  psg: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xBc5609612b7C44BEf426De600B5fd1379DB2EcF1", 2, "PSG", "Paris Saint-Germain Token", "https://www.chiliz.com"),
  vai: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7", 18, "VAI", "VAI Stablecoin", "0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7"),
  unfi: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B", 18, "UNFI", "UNFI Token", "https://unifiprotocol.com"),
  twt: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x4B0F1812e5Df2A09796481Ff14017e6005508003", 18, "TWT", "Trust Wallet Token", "https://trustwallet.com/"),
  hard: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xf79037F6f6bE66832DE4E7516be52826BC3cBcc4", 6, "HARD", "HARD Token", "https://hard.kava.io"),
  broobee: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xE64F5Cb844946C1F102Bd25bBD87a5aB4aE89Fbe", 18, "bROOBEE", "ROOBEE Token", "https://roobee.io/"),
  stax: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x0Da6Ed8B13214Ff28e9Ca979Dd37439e8a88F6c4", 18, "STAX", "StableX Token", "https://stablexswap.com/"),
  nar: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xA1303E6199b319a891b79685F0537D289af1FC83", 18, "NAR", "Narwhalswap Token", "https://narwhalswap.org/"),
  nya: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xbFa0841F7a90c4CE6643f651756EE340991F99D5", 18, "NYA", "Nyanswop Token", "https://nyanswop.org/"),
  ctk: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xA8c2B8eec3d368C0253ad3dae65a5F2BBB89c929", 6, "CTK", "Certik Token", "https://www.certik.foundation/"),
  inj: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xa2B726B1145A4773F68593CF171187d8EBe4d495", 18, "INJ", "Injective Protocol Token", "https://injectiveprotocol.com/"),
  sxp: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A", 18, "SXP", "Swipe Token", "https://swipe.io/"),
  alpha: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xa1faa113cbE53436Df28FF0aEe54275c13B40975", 18, "ALPHA", "Alpha Finance Token", "https://alphafinance.io/"),
  xvs: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63", 18, "XVS", "Venus Token", "https://venus.io/"),
  sushi: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x947950BcC74888a40Ffa2593C5798F11Fc9124C4", 18, "SUSHI", "Binance-Peg SushiToken", "https://sushi.com/"),
  comp: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x52CE071Bd9b1C4B00A0b92D298c512478CaD67e8", 18, "COMP", "Compound Finance Token", "https://compound.finance/"),
  bifi: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xCa3F508B8e4Dd382eE878A314789373D80A5190A", 18, "BIFI", "Beefy Finance Token", "https://beefy.finance/"),
  dusk: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xB2BD0749DBE21f623d9BABa856D3B0f0e1BFEc9C", 18, "DUSK", "Dusk Network Token", "https://dusk.network/"),
  beth: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x250632378E573c6Be1AC2f97Fcdf00515d0Aa91B", 18, "BETH", "Binance Beacon ETH", "https://ethereum.org/en/eth2/beacon-chain/"),
  mamzn: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x3947B992DC0147D2D89dF0392213781b04B25075", 18, "mAMZN", "Wrapped Mirror AMZN Token", "https://mirror.finance/"),
  mgoogl: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x62D71B23bF15218C7d2D7E48DBbD9e9c650B173f", 18, "mGOOGL", "Wrapped Mirror GOOGL Token", "https://mirror.finance/"),
  mnflx: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xa04F060077D90Fe2647B61e4dA4aD1F97d6649dc", 18, "mNFLX", "Wrapped Mirror NFLX Token", "https://mirror.finance/"),
  mtsla: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xF215A127A196e3988C09d052e16BcFD365Cd7AA3", 18, "mTSLA", "Wrapped Mirror TSLA Token", "https://mirror.finance/"),
  ltc: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x4338665CBB7B2485A8855A139b75D5e34AB0DB94", 18, "LTC", "Binance-Peg Litecoin Token", "https://litecoin.org/"),
  ada: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47", 18, "ADA", "Binance-Peg Cardano Token", "https://www.cardano.org/"),
  band: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xAD6cAEb32CD2c308980a548bD0Bc5AA4306c6c18", 18, "BAND", "Binance-Peg Band Protocol Token", "https://bandprotocol.com/"),
  dot: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402", 18, "DOT", "Binance-Peg Polkadot Token", "https://polkadot.network/"),
  eos: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x56b6fB708fC5732DEC1Afc8D8556423A2EDcCbD6", 18, "EOS", "Binance-Peg EOS Token", "https://eos.io/"),
  link: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD", 18, "LINK", "Binance-Peg Chainlink Token", "https://chain.link/"),
  xrp: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE", 18, "XRP", "Binance-Peg XRP Token", "https://ripple.com/xrp/"),
  atom: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x0Eb3a705fc54725037CC9e008bDede697f62F335", 18, "ATOM", "Binance-Peg Cosmos Token", "https://cosmos.network/"),
  yfii: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x7F70642d88cf1C4a3a7abb072B53B929b653edA5", 18, "YFII", "Binance-Peg YFII.finance Token", "https://dfi.money/#/"),
  xtz: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x16939ef78684453bfDFb47825F8a5F714f12623a", 18, "XTZ", "Binance-Peg Tezos Token", "https://www.tezos.com/"),
  bch: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf", 18, "BCH", "Binance-Peg Bitcoin Cash Token", "https://bch.info/"),
  yfi: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x88f1A5ae2A3BF98AEAF342D26B30a79438c9142e", 18, "YFI", "Binance-Peg yearn.finance Token", "https://yearn.finance/"),
  uni: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xBf5140A22578168FD562DCcF235E5D43A02ce9B1", 18, "UNI", "Binance-Peg Uniswap Token", "https://uniswap.org/"),
  fil: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153", 18, "FIL", "Binance-Peg Filecoin Token", "https://filecoin.io/"),
  bake: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5", 18, "BAKE", "Bakeryswap Token", "https://www.bakeryswap.org/"),
  burger: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xAe9269f27437f0fcBC232d39Ec814844a51d6b8f", 18, "BURGER", "Burgerswap Token", "https://burgerswap.org/"),
  bdigg: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x5986D5c77c65e5801a5cAa4fAE80089f870A71dA", 18, "bDIGG", "Badger Sett Digg Token", "https://badger.finance/"),
  bbadger: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x1F7216fdB338247512Ec99715587bb97BBf96eae", 18, "bBadger", "Badger Sett Badger Token", "https://badger.finance/"),
  trade: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x7af173F350D916358AF3e218Bdf2178494Beb748", 18, "TRADE", "Unitrade Token", "https://unitrade.app/"),
  pnt: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xdaacB0Ab6Fb34d24E8a67BfA14BF4D95D4C7aF92", 18, "PNT", "pNetwork Token", "https://ptokens.io/"),
  mir: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x5B6DcF557E2aBE2323c48445E8CC948910d8c2c9", 18, "MIR", "Mirror Protocol Token", "https://mirror.finance/"),
  pbtc: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xeD28A457A5A76596ac48d87C0f577020F6Ea1c4C", 18, "pBTC", "pTokens BTC Token", "https://ptokens.io/"),
  lto: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x857B222Fc79e1cBBf8Ca5f78CB133d1b7CF34BBd", 18, "LTO", "LTO Network Token", "https://ltonetwork.com/"),
  pcws: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xbcf39F0EDDa668C58371E519AF37CA705f2bFcbd", 18, "pCWS", "PolyCrowns Token", "https://game.seascape.network/"),
  zil: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xb86AbCb37C3A4B64f74f59301AFF131a1BEcC787", 12, "ZIL", "Zilliqa Token", "https://www.zilliqa.com/"),
  lien: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x5d684ADaf3FcFe9CFb5ceDe3abf02F0Cdd1012E3", 8, "LIEN", "Lien Finance Token", "https://lien.finance/"),
  swth: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x250b211EE44459dAd5Cd3bCa803dD6a7EcB5d46C", 8, "SWTH", "Switcheo Network Token", "https://switcheo.network/"),
  dft: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x42712dF5009c20fee340B245b510c0395896cF6e", 18, "DFT", "Dfuture Token", "https://www.dfuture.com/home"),
  gum: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xc53708664b99DF348dd27C3Ac0759d2DA9c40462", 18, "GUM", "GourmetGalaxy Token", "https://gourmetgalaxy.io/"),
  dego: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x3FdA9383A84C05eC8f7630Fe10AdF1fAC13241CC", 18, "DEGO", "Dego Finance Token", "https://bsc.dego.finance/home"),
  nrv: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096", 18, "NRV", "Nerve Finance Token", "https://nerve.fi/"),
  easy: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x7C17c8bED8d14bAccE824D020f994F4880D6Ab3B", 18, "EASY", "EASY Token", "https://easyfi.network/"),
  oddz: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xCD40F2670CF58720b694968698A5514e924F742d", 18, "ODDZ", "Oddz Token", "https://oddz.fi/"),
  hoo: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xE1d1F66215998786110Ba0102ef558b22224C016", 8, "HOO", "Hoo Token", "https://hoo.com/"),
  apys: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x37dfACfaeDA801437Ff648A1559d73f4C40aAcb7", 18, "APYS", "APY Swap Token", "https://apyswap.com/"),
  bondly: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x96058f8C3e16576D9BD68766f3836d9A33158f89", 18, "BONDLY", "Bondly Token", "https://www.bondly.finance/"),
  tko: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x9f589e3eabe42ebC94A44727b3f3531C0c877809", 18, "TKO", "Tokocrypto Token", "https://www.tokocrypto.com/"),
  itam: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x04C747b40Be4D535fC83D09939fb0f626F32800B", 18, "ITAM", "Itam Network Token", "https://itam.network/"),
  arpa: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x6F769E65c14Ebd1f68817F5f1DcDb61Cfa2D6f7e", 18, "ARPA", "Arpachain Token", "https://arpachain.io/"),
  eps: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xA7f552078dcC247C2684336020c03648500C6d9F", 18, "EPS", "Ellipsis Finance Token", "https://ellipsis.finance/"),
  jgn: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xC13B7a43223BB9Bf4B69BD68Ab20ca1B79d81C75", 18, "JGN", "Juggernaut DeFi Token", "https://jgndefi.com/"),
  tlm: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x2222227E22102Fe3322098e4CBfE18cFebD57c95", 4, "TLM", "Alien Worlds Trilium Token", "https://alienworlds.io/"),
  perl: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x0F9E4D49f25de22c2202aF916B681FBB3790497B", 18, "PERL", "Perlin", "https://perlinx.finance/"),
  alpa: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xc5E6689C9c8B02be7C49912Ef19e79cF24977f03", 18, "ALPA", "AlpaToken", "https://bsc.alpaca.city/"),
  hzn: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xC0eFf7749b125444953ef89682201Fb8c6A917CD", 18, "HZN", "Horizon Protocol Token", "https://horizonprotocol.com/"),
  suter: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x4CfbBdfBd5BF0814472fF35C72717Bd095ADa055", 18, "SUTER", "Suterusu Token", "https://shield.suterusu.io/"),
  cgg: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x1613957159E9B0ac6c80e824F7Eea748a32a0AE2", 18, "CGG", "pTokens CGG Token", "https://chainguardians.io/"),
  mix: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xB67754f5b4C704A24d2db68e661b2875a4dDD197", 18, "MIX", "Mix Token", "https://mixie.chainguardians.io/"),
  hakka: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x1D1eb8E8293222e1a29d2C0E4cE6C0Acfd89AaaC", 18, "HAKKA", "Hakka Token", "https://hakka.finance/"),
  xed: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x5621b5A3f4a8008c4CCDd1b942B121c8B1944F1f", 18, "XED", "Exeedme Token", "https://www.exeedme.com/"),
  \u03C4btc: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x2cD1075682b0FCCaADd0Ca629e138E64015Ba11c", 9, "\u03C4BTC", "\u03C4Bitcoin Token", "https://www.btcst.finance/"),
  alpaca: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F", 18, "ALPACA", "AlpacaToken", "https://www.alpacafinance.org/"),
  dfd: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x9899a98b222fCb2f3dbee7dF45d943093a4ff9ff", 18, "DFD", "DefiDollar DAO", "https://dusd.finance/"),
  lmt: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x9617857E191354dbEA0b714d78Bc59e57C411087", 18, "LMT", "Lympo Market Token", "https://lympo.io/lmt/"),
  bttold: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x8595F9dA7b868b1822194fAEd312235E43007b49", 18, "BTTOLD", "Binance-Peg BitTorrent Token (Old)", "https://www.bittorrent.com/"),
  trx: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x85EAC5Ac2F758618dFa09bDbe0cf174e7d574D5B", 18, "TRX", "TRON Token", "https://tron.network/"),
  win: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xaeF0d72a118ce24feE3cD1d43d383897D05B4e99", 18, "WIN", "WIN Token", "https://winklink.org/"),
  mcoin: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x49022089e78a8D46Ec87A3AF86a1Db6c189aFA6f", 18, "MCOIN", "Wrapped Mirror COIN Token", "https://mirror.finance/"),
  math: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xF218184Af829Cf2b0019F8E6F0b2423498a36983", 18, "MATH", "MATH Token", "https://mathwallet.org/"),
  kun: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x1A2fb0Af670D0234c2857FaD35b789F8Cb725584", 18, "KUN", "QIAN governance token", "https://chemix.io/home"),
  qsd: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x07AaA29E63FFEB2EBf59B33eE61437E1a91A3bb2", 18, "QSD", "QIAN second generation dollar", "https://chemix.io/home"),
  hyfi: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x9a319b959e33369C5eaA494a770117eE3e585318", 18, "HYFI", "HYFI Token", "https://hyfi.pro/#/"),
  oin: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x658E64FFcF40D240A43D52CA9342140316Ae44fA", 8, "OIN", "oinfinance Token", "https://oin.finance/"),
  doge: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xbA2aE424d960c26247Dd6c32edC70B295c744C43", 8, "DOGE", "Binance-Peg Dogecoin", "https://dogecoin.com/"),
  fine: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x4e6415a5727ea08aAE4580057187923aeC331227", 18, "FINE", "Refinable Token", "https://refinable.com/"),
  one: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x04BAf95Fd4C52fd09a56D840bAEe0AB8D7357bf0", 18, "ONE", "BigONE Token", "https://www.bigone.com/"),
  pmon: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x1796ae0b0fa4862485106a0de9b654eFE301D0b2", 18, "PMON", "Polkamon Token", "https://polkamon.com/"),
  \u03C4doge: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xe550a593d09FBC8DCD557b5C88Cea6946A8b404A", 8, "\u03C4DOGE", "\u03C4Dogecoin", "https://www.btcst.finance/"),
  btr: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x5a16E8cE8cA316407c6E6307095dc9540a8D62B3", 18, "BTR", "Bitrue Token", "https://www.bitrue.com/"),
  ubxt: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xBbEB90cFb6FAFa1F69AA130B7341089AbeEF5811", 18, "UBXT", "UpBots Token", "https://upbots.com/"),
  wmass: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x7e396BfC8a2f84748701167c2d622F041A1D7a17", 8, "WMASS", "Wrapped MASS Token", "https://massnet.org/en/"),
  rfox: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x0a3A21356793B49154Fd3BbE91CBc2A16c0457f5", 18, "RFOX", "RFOX Token", "https://www.redfoxlabs.io/"),
  xend: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x4a080377f83D669D7bB83B3184a8A5E61B500608", 18, "XEND", "XEND Token", "https://xend.finance/"),
  cyc: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x810EE35443639348aDbbC467b33310d2AB43c168", 18, "CYC", "CYC Token", "https://cyclone.xyz/"),
  chr: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xf9CeC8d50f6c8ad3Fb6dcCEC577e05aA32B224FE", 6, "CHR", "Chroma Token", "https://chromia.com/"),
  deri: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xe60eaf5A997DFAe83739e035b005A33AfdCc6df5", 18, "DERI", "Deri Token", "https://deri.finance/#/index"),
  well: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xf07a32Eb035b786898c00bB1C64d8c6F8E7a46D5", 18, "WELL", "BitWell Token", "https://www.bitwellex.com/"),
  wex: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xa9c41A46a6B3531d28d5c32F6633dd2fF05dFB90", 18, "WEX", "WaultSwap Token", "https://wault.finance/"),
  waultx: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xB64E638E60D154B43f660a6BF8fD8a3b249a6a21", 18, "WAULTx", "Wault Token", "https://wault.finance/"),
  popen: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xaBaE871B7E3b67aEeC6B46AE9FE1A91660AadAC5", 18, "pOPEN", "OPEN Governance Token", "https://opendao.io/"),
  ez: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x5512014efa6Cd57764Fa743756F7a6Ce3358cC83", 18, "EZ", "Easy V2 Token", "https://easyfi.network/"),
  vrt: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x5F84ce30DC3cF7909101C69086c50De191895883", 18, "VRT", "Venus Reward Token", "https://venus.io/"),
  tusd: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x14016E85a25aeb13065688cAFB43044C2ef86784", 18, "TUSD", "Binance-Peg TrueUSD Token", "https://www.trueusd.com/"),
  mtrg: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xBd2949F67DcdC549c6Ebe98696449Fa79D988A9F", 18, "MTRG", "Wrapped MTRG Token", "https://www.meter.io/"),
  ktn: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xDAe6c2A48BFAA66b43815c5548b10800919c993E", 18, "KTN", "Kattana Token", "https://kattana.io/"),
  qkc: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xA1434F1FC3F437fa33F7a781E041961C0205B5Da", 18, "QKC", "QuarkChain Token", "https://quarkchain.io/"),
  bcfx: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x045c4324039dA91c52C55DF5D785385Aab073DcF", 18, "bCFX", "ChainId.BSC Conflux Token", "https://www.confluxnetwork.org/"),
  mx: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x9F882567A62a5560d147d64871776EeA72Df41D3", 18, "MX", "MX Token", "https://www.mxc.com/"),
  ata: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xA2120b9e674d3fC3875f415A7DF52e382F141225", 18, "ATA", "Automata Token", "https://www.ata.network/"),
  mbox: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x3203c9E46cA618C8C1cE5dC67e7e9D75f5da2377", 18, "MBOX", "Mobox Token", "https://www.mobox.io/#/"),
  boring: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xffEecbf8D7267757c2dc3d13D730E97E15BfdF7F", 18, "BORING", "BoringDAO Token", "https://www.boringdao.com/"),
  marsh: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x2FA5dAF6Fe0708fBD63b1A7D1592577284f52256", 18, "MARSH", "Unmarshal Token", "https://unmarshal.io/"),
  ampl: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xDB021b1B247fe2F1fa57e0A87C748Cc1E321F07F", 9, "AMPL", "AMPL Token", "https://www.ampleforth.org/"),
  o3: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xEe9801669C6138E84bD50dEB500827b776777d28", 18, "O3", "O3 Swap Token", "https://o3swap.com/"),
  hai: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xaA9E582e5751d703F85912903bacADdFed26484C", 8, "HAI", "Hacken Token", "https://hacken.io/"),
  htb: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x4e840AADD28DA189B9906674B4Afcb77C128d9ea", 18, "HTB", "Hotbit Token", "https://www.hotbit.io/"),
  woo: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x4691937a7508860F876c9c0a2a617E7d9E945D4B", 18, "WOO", "Wootrade Network Token", "https://woo.network/"),
  $dg: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x9Fdc3ae5c814b79dcA2556564047C5e7e5449C19", 18, "$DG", "Decentral Games Token", "https://decentral.games/"),
  axs: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x715D400F88C167884bbCc41C5FeA407ed4D2f8A0", 18, "AXS", "Binance-Pegged Axie Infinity Shard", "https://axieinfinity.com/"),
  c98: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xaEC945e04baF28b135Fa7c640f624f8D90F1C3a6", 18, "c98", "Coin98 Token", "https://coin98.com/"),
  pots: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x3Fcca8648651E5b974DD6d3e50F61567779772A8", 18, "POTS", "Moonpot Token", "https://moonpot.com/"),
  gnt: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xF750A26EB0aCf95556e8529E72eD530f3b60f348", 18, "GNT", "GreenTrust Token", "https://www.greentrusttoken.com/"),
  rusd: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x07663837218A003e66310a01596af4bf4e44623D", 18, "rUSD", "rUSD Token", "https://appv2.rampdefi.com/#/"),
  bp: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xACB8f52DC63BB752a51186D1c55868ADbFfEe9C1", 18, "BP", "BunnyPark Token", "https://www.bunnypark.com/"),
  sfund: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x477bC8d23c634C154061869478bce96BE6045D12", 18, "SFUND", "Seedify Fund Token", "https://seedify.fund/"),
  naos: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x758d08864fB6cCE3062667225ca10b8F00496cc2", 18, "NAOS", "NAOSToken", "https://naos.finance/"),
  cart: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x5C8C8D560048F34E5f7f8ad71f2f81a89DBd273e", 18, "CART", "CryptoArt.ai", "https://cryptoart.ai/"),
  light: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x037838b556d9c9d654148a284682C55bB5f56eF4", 18, "LIGHT", "Lightning", "https://lightningprotocol.finance/"),
  rpg: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xc2098a8938119A52B1F7661893c0153A6CB116d5", 18, "RPG", "Rangers Protocol", "https://www.rangersprotocol.com/"),
  mcb: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x5fE80d2CD054645b9419657d3d10d26391780A7B", 18, "MCB", "MCDEX", "https://mcdex.io/homepage/"),
  lazio: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x77d547256A2cD95F32F67aE0313E450Ac200648d", 8, "LAZIO", "FC Lazio Fan Token", "https://launchpad.binance.com/en/subscription/LAZIO_BNB"),
  arv: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x6679eB24F59dFe111864AEc72B443d1Da666B360", 8, "ARV", "ARIVA", "https://ariva.digital"),
  moni: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x9573c88aE3e37508f87649f87c4dd5373C9F31e0", 18, "MONI", "Monsta Infinite", "https://monstainfinite.com/"),
  xms: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x7859B01BbF675d67Da8cD128a50D155cd881B576", 18, "XMS", "Mars Ecosystem", "https://marsecosystem.com/"),
  zoo: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x1D229B958D5DDFca92146585a8711aECbE56F095", 18, "ZOO", "ZOO Crypto World", "https://zoogame.finance/"),
  fina: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x426c72701833fdDBdFc06c944737C6031645c708", 18, "FINA", "Defina Finance", "https://defina.finance/"),
  dar: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x23CE9e926048273eF83be0A3A8Ba9Cb6D45cd978", 6, "DAR", "Mines of Dalarnia", "https://www.minesofdalarnia.com/"),
  xwg: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x6b23C89196DeB721e6Fd9726E6C76E4810a464bc", 18, "XWG", "X World Games", "https://xwg.games/"),
  eternal: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xD44FD09d74cd13838F137B590497595d6b3FEeA4", 18, "ETERNAL", "CryptoMines Eternal", "https://cryptomines.app/"),
  porto: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x49f2145d6366099e13B10FbF80646C0F377eE7f6", 8, "PORTO", "FC Porto Fan Token", "https://launchpad.binance.com/en/subscription/PORTO_BNB"),
  kart: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x8BDd8DBcBDf0C066cA5f3286d33673aA7A553C10", 18, "KART", "Dragon Kart", "https://dragonkart.com/"),
  qi: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x8729438EB15e2C8B576fCc6AeCdA6A148776C0F5", 18, "QI", "BENQI", "https://benqi.fi/"),
  sheesha: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x232FB065D9d24c34708eeDbF03724f2e95ABE768", 18, "SHEESHA", "Sheesha Finance", "https://www.sheeshafinance.io/"),
  bcoin: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x00e1656e45f18ec6747F5a8496Fd39B50b38396D", 18, "BCOIN", "Bomb Crypto", "https://bombcrypto.io/"),
  quidd: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x7961Ade0a767c0E5B67Dd1a1F78ba44F727642Ed", 18, "QUIDD", "Quidd Token", "https://www.quiddtoken.com/"),
  santos: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xA64455a4553C9034236734FadDAddbb64aCE4Cc7", 8, "SANTOS", "FC Santos Fan Token", "https://launchpad.binance.com/en/launchpool/SANTOS_BNB"),
  nabox: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x755f34709E369D37C6Fa52808aE84A32007d1155", 18, "NABOX", "Nabox Token", "https://nabox.io/"),
  xcv: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x4be63a9b26EE89b9a3a13fd0aA1D0b2427C135f8", 18, "XCV", "XCarnival", "https://xcarnival.fi/"),
  idia: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x0b15Ddf19D47E6a86A56148fb4aFFFc6929BcB89", 18, "IDIA", "Impossible Decentralized Incubator Access Token", "https://impossible.finance/"),
  tt: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x990E7154bB999FAa9b2fa5Ed29E822703311eA85", 18, "TT", "ThunderCore", "https://www.thundercore.com/"),
  gmee: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x84e9a6F9D240FdD33801f7135908BfA16866939A", 18, "GMEE", "GAMEE", "https://www.gamee.com/token"),
  htd: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x5E2689412Fae5c29BD575fbe1d5C1CD1e0622A8f", 18, "HTD", "HeroesTD", "https://heroestd.io/"),
  dpt: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xE69cAef10A488D7AF31Da46c89154d025546e990", 18, "DPT", "Diviner Protocol", "https://diviner.finance/"),
  thg: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x9fD87aEfe02441B123c3c32466cD9dB4c578618f", 18, "THG", "Thetan Gem", "https://thetanarena.com/"),
  ccar: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x50332bdca94673F33401776365b66CC4e81aC81d", 18, "CCAR", "CryptoCars", "https://cryptocars.me/"),
  high: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x5f4Bde007Dc06b867f86EBFE4802e34A1fFEEd63", 18, "HIGH", "Highstreet Token", "https://highstreet.market/"),
  sdao: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x90Ed8F1dc86388f14b64ba8fb4bbd23099f18240", 18, "SDAO", "Singularity Dao", "https://app.singularitydao.ai/"),
  antex: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xCA1aCAB14e85F30996aC83c64fF93Ded7586977C", 8, "ANTEX", "Antex", "https://antex.org/"),
  bbt: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xD48474E7444727bF500a32D5AbE01943f3A59A64", 8, "BBT", "BitBook", "https://www.bitbook.network/"),
  woop: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x8b303d5BbfBbf46F1a4d9741E491e06986894e18", 18, "WOOP", "Woonkly Power", "https://www.woonkly.com/"),
  gm: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xe2604C9561D490624AA35e156e65e590eB749519", 18, "GM", "GoldMiner", "https://goldminer.games/"),
  aog: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x40C8225329Bd3e28A043B029E0D07a5344d2C27C", 18, "AOG", "AgeOfGods", "https://ageofgods.net/"),
  "8pay": new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xFeea0bDd3D07eb6FE305938878C0caDBFa169042", 18, "8PAY", "8PAY Network", "https://8pay.network/"),
  bath: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x0bc89aa98Ad94E6798Ec822d0814d934cCD0c0cE", 18, "BATH", "Battle Hero", "https://battlehero.io/"),
  insur: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x3192CCDdf1CDcE4Ff055EbC80f3F0231b86A7E30", 18, "INSUR", "Bsc-Peg INSUR Token", "https://www.insurace.io/"),
  froyo: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xe369fec23380f9F14ffD07a1DC4b7c1a9fdD81c9", 18, "FROYO", "Froyo Games", "https://froyo.games/"),
  apx: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x78F5d389F5CDCcFc41594aBaB4B0Ed02F31398b3", 18, "APX", "ApolloX Token", "https://www.apollox.finance/"),
  prl: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xd07e82440A395f3F3551b42dA9210CD1Ef4f8B24", 18, "PRL", "Parallel Token", "https://theparallel.io"),
  fuse: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x5857c96DaE9cF8511B08Cb07f85753C472D36Ea3", 18, "FUSE", "Fuse Token", "https://fuse.io/"),
  ertha: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x62823659d09F9F9D2222058878f89437425eB261", 18, "ERTHA", "Ertha Token", "https://ertha.io/"),
  raca: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x12BB890508c125661E03b09EC06E404bc9289040", 18, "RACA", "Radio Caca V2", "https://www.radiocaca.com/#/home"),
  gear: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xb4404DaB7C0eC48b428Cf37DeC7fb628bcC41B36", 18, "GEAR", "MetaGear Token", "https://metagear.game/"),
  ach: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xBc7d6B50616989655AfD682fb42743507003056D", 8, "ACH", "Alchemy Token", "https://alchemytech.io/"),
  btt: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x352Cb5E19b12FC216548a2677bD0fce83BaE434B", 18, "BTT", "BitTorrent", "https://bittorrent.com/"),
  era: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x6f9F0c4ad9Af7EbD61Ac5A1D4e0F2227F7B0E5f9", 18, "ERA", "Era Token", "https://www.era7.io/"),
  fight: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x4f39c3319188A723003670c3F9B9e7EF991E52F3", 18, "FIGHT", "Fight Token", "https://www.cryptofightclub.io/"),
  loa: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x94b69263FCA20119Ae817b6f783Fc0F13B02ad50", 18, "LOA", "League Of Ancients", "https://www.leagueofancients.com/"),
  duet: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x95EE03e1e2C5c4877f9A298F1C0D6c98698FAB7B", 18, "DUET", "Duet Governance Token", "https://duet.finance"),
  gmt: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x3019BF2a2eF8040C242C9a4c5c4BD4C81678b2A1", 8, "GMT", "Green Metaverse Token", "https://www.stepn.com/"),
  bsw: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x965F527D9159dCe6288a2219DB51fc6Eef120dD1", 18, "BSW", "Biswap", "https://biswap.org/"),
  tem: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x19e6BfC1A6e4B042Fb20531244D47E252445df01", 9, "TEM", "TemplarDAO", "https://templar.finance/"),
  pex: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x6a0b66710567b6beb81A71F7e9466450a91a384b", 18, "PEX", "PearDAO", "https://peardao.io/"),
  yel: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xD3b71117E6C1558c1553305b44988cd944e97300", 18, "YEL", "YEL", "https://yel.finance/"),
  tinc: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x05aD6E30A855BE07AfA57e08a4f30d00810a402e", 18, "TINC", "Tiny Coin", "https://tinyworlds.io/"),
  happy: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xF5d8A096CcCb31b9D7bcE5afE812BE23e3D4690d", 18, "Happy", "HappyFans", "https://happyfans.club/"),
  wzrd: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xFa40d8FC324bcdD6Bbae0e086De886c571C225d4", 18, "WZRD", "Wizardia Token", "https://wizardia.io/"),
  ceek: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xe0F94Ac5462997D2BC57287Ac3a3aE4C31345D66", 18, "CEEK", "CEEK", "https://www.ceek.com/"),
  abnbc: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xE85aFCcDaFBE7F2B096f268e31ccE3da8dA2990A", 18, "aBNBc", "Ankr BNB Reward Bearing Certificate", "https://www.ankr.com/"),
  ankr: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xf307910A4c7bbc79691fD374889b36d8531B08e3", 18, "ANKR", "Ankr", "https://www.ankr.com/"),
  gal: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xe4Cc45Bb5DBDA06dB6183E8bf016569f40497Aa5", 18, "GAL", "Galxe", "https://galaxy.eco/"),
  xcn: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x7324c7C0d95CEBC73eEa7E85CbAac0dBdf88a05b", 18, "XCN", "Chain", "https://chain.com/"),
  metis: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xe552Fb52a4F19e44ef5A967632DBc320B0820639", 18, "Metis", "Metis Token", "https://www.metis.io/"),
  MIX: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x398f7827DcCbeFe6990478876bBF3612D93baF05", 18, "MIX", "MixMarvel Token", "https://www.mixmarvel.com/"),
  peak: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x630d98424eFe0Ea27fB1b3Ab7741907DFFEaAd78", 8, "PEAK", "PEAKDEFI", "https://peakdefi.com/"),
  nbt: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x1D3437E570e93581Bd94b2fd8Fbf202d4a65654A", 18, "NBT", "NanoByte Token", "https://www.nanobyte.finance/"),
  trivia: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xb465f3cb6Aba6eE375E12918387DE1eaC2301B05", 3, "TRIVIA", "Trivian Token", "https://trivians.io/"),
  mhunt: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x2C717059b366714d267039aF8F59125CAdce6D8c", 18, "MHUNT", "MetaShooter", "https://metashooter.gg/"),
  ole: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xa865197A84E780957422237B5D152772654341F3", 18, "OLE", "OpenLeverage", "https://openleverage.finance/"),
  xcad: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x431e0cD023a32532BF3969CddFc002c00E98429d", 18, "XCAD", "Chainport.io-Peg XCAD Token", "https://xcadnetwork.com/"),
  shell: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x208cfEc94d2BA8B8537da7A9BB361c6baAD77272", 18, "SHELL", "Meta Apes Shell", "https://metaapesgame.com/"),
  peel: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x734548a9e43d2D564600b1B2ed5bE9C2b911c6aB", 18, "PEEL", "Meta Apes Peel", "https://metaapesgame.com/"),
  stkbnb: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xc2E9d07F66A89c44062459A47a0D2Dc038E4fb16", 18, "stkBNB", "Staked BNB", "https://pstake.finance/bnb"),
  pstake: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x4C882ec256823eE773B25b414d36F92ef58a7c0C", 18, "PSTAKE", "pStake Finance", "https://pstake.finance/"),
  wom: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xAD6742A35fB341A9Cc6ad674738Dd8da98b94Fb1", 18, "WOM", "Wombat Token", "https://www.wombat.exchange/"),
  hay: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x0782b6d8c4551B9760e74c0545a9bCD90bdc41E5", 18, "HAY", "Hay Destablecoin", "https://helio.money/"),
  spin: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x6AA217312960A21aDbde1478DC8cBCf828110A67", 18, "SPIN", "Spintop", "https://spintop.network/"),
  snfts: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x6f51A1674BEFDD77f7ab1246b83AdB9f13613762", 18, "SNFTS", "Seedify NFT Space", "https://snfts.seedify.fund/"),
  gq: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xF700D4c708C2be1463E355F337603183D20E0808", 18, "GQ", "Galactic Quadrant", "https://outerringmmo.com/"),
  hoop: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xF19cfb40B3774dF6Eed83169Ad5aB0Aaf6865F25", 18, "HOOP", "Chibi Dinos", "https://www.chibidinos.io/"),
  co: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x936B6659Ad0C1b244Ba8Efe639092acae30dc8d6", 6, "CO", "CO", "https://corite.com/"),
  krs: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x37b53894e7429f794B56F22a32E1695567Ee9913", 18, "KRS", "Kingdom Raids", "https://kingdomraids.io/"),
  wmx: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xa75d9ca2a0a1D547409D82e1B06618EC284A2CeD", 18, "WMX", "Wombex Token", "https://wombex.finance/"),
  mgp: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xD06716E1Ff2E492Cc5034c2E81805562dd3b45fa", 18, "MGP", "Magpie Token", "https://www.magpiexyz.io/"),
  hook: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xa260E12d2B924cb899AE80BB58123ac3fEE1E2F0", 18, "HOOK", "Hook Token", "https://hooked.io/"),
  hft: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x44Ec807ce2F4a6F2737A92e985f318d035883e47", 18, "HFT", "Hashflow", "https://www.hashflow.com/"),
  squad: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x724A32dFFF9769A0a0e1F0515c0012d1fB14c3bd", 18, "SQUAD", "Token SQUAD", "https://ssquad.games/"),
  zbc: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x37a56cdcD83Dce2868f721De58cB3830C44C6303", 9, "ZBC", "ZEBEC", "https://zebec.io/"),
  primal: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xCb5327Ed4649548e0d73E70b633cdfd99aF6Da87", 18, "PRIMAL", "PRIMAL Token", "https://www.getprimal.com/"),
  ankrbnb: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x52F24a5e03aee338Da5fd9Df68D2b6FAe1178827", 18, "ankrBNB", "Ankr Staked BNB", "https://www.ankr.com/staking-crypto/"),
  arena: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0xCfFD4D3B517b77BE32C76DA768634dE6C738889B", 18, "ARENA", "ESPL ARENA", "https://espl.co/"),
  champ: new import_sdk3.ERC20Token(import_sdk3.ChainId.BSC, "0x7e9AB560d37E62883E882474b096643caB234B65", 18, "CHAMP", "Ultimate Champions Token", "https://beta.ultimate-champions.com/")
};

// ../tokens/src/97.ts
var import_sdk4 = require("@pancakeswap/sdk");
var bscTestnetTokens = {
  wbnb: import_sdk4.WBNB[import_sdk4.ChainId.BSC_TESTNET],
  cake: CAKE_TESTNET,
  busd: BUSD_TESTNET,
  syrup: new import_sdk4.ERC20Token(import_sdk4.ChainId.BSC_TESTNET, "0xfE1e507CeB712BDe086f3579d2c03248b2dB77f9", 18, "SYRUP", "SyrupBar Token", "https://pancakeswap.finance/"),
  bake: new import_sdk4.ERC20Token(import_sdk4.ChainId.BSC_TESTNET, "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5", 18, "BAKE", "Bakeryswap Token", "https://www.bakeryswap.org/"),
  hbtc: new import_sdk4.ERC20Token(import_sdk4.ChainId.BSC_TESTNET, "0x3Fb6a6C06c7486BD194BB99a078B89B9ECaF4c82", 18, "HBTC", "Huobi BTC"),
  wbtc: new import_sdk4.ERC20Token(import_sdk4.ChainId.BSC_TESTNET, "0xfC8bFbe9644e1BC836b8821660593e7de711e564", 8, "WBTC", "Wrapped BTC"),
  usdc: new import_sdk4.ERC20Token(import_sdk4.ChainId.BSC_TESTNET, "0xCA8eB2dec4Fe3a5abbFDc017dE48E461A936623D", 18, "USDC", "Binance-Peg USD Coin"),
  usdt: new import_sdk4.ERC20Token(import_sdk4.ChainId.BSC_TESTNET, "0x0fB5D7c73FA349A90392f873a4FA1eCf6a3d0a96", 18, "USDT", "Tether USD"),
  mockBusd: new import_sdk4.ERC20Token(import_sdk4.ChainId.BSC_TESTNET, "0x3304dd20f6Fe094Cb0134a6c8ae07EcE26c7b6A7", 18, "BUSD", "Binance USD")
};

// evm/constants/exchange.ts
var ROUTER_ADDRESS = {
  [import_sdk5.ChainId.ETHEREUM]: "0x3BC722f252C7bAE2f55647e49aDcB9d33Ff6eBcC",
  [import_sdk5.ChainId.GOERLI]: "0x3BC722f252C7bAE2f55647e49aDcB9d33Ff6eBcC",
  [import_sdk5.ChainId.BSC]: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
  [import_sdk5.ChainId.BSC_TESTNET]: "0xD99D1c33F9fC3444f8101754aBC46c52416550D1"
};
var STABLE_SWAP_INFO_ADDRESS = {
  [import_sdk5.ChainId.ETHEREUM]: "",
  [import_sdk5.ChainId.GOERLI]: "",
  [import_sdk5.ChainId.BSC]: "0xa680d27f63Fa5E213C502d1B3Ca1EB6a3C1b31D6",
  [import_sdk5.ChainId.BSC_TESTNET]: "0xaE6C14AAA753B3FCaB96149e1E10Bc4EDF39F546"
};
var BASES_TO_CHECK_TRADES_AGAINST = {
  [import_sdk5.ChainId.ETHEREUM]: [
    import_sdk5.WNATIVE[import_sdk5.ChainId.ETHEREUM],
    USDC[import_sdk5.ChainId.ETHEREUM],
    USDT[import_sdk5.ChainId.ETHEREUM],
    BUSD[import_sdk5.ChainId.ETHEREUM],
    import_sdk5.WBNB[import_sdk5.ChainId.ETHEREUM]
  ],
  [import_sdk5.ChainId.GOERLI]: [import_sdk5.WNATIVE[import_sdk5.ChainId.GOERLI], USDC[import_sdk5.ChainId.GOERLI], BUSD[import_sdk5.ChainId.GOERLI]],
  [import_sdk5.ChainId.BSC]: [
    bscTokens.wbnb,
    bscTokens.cake,
    bscTokens.busd,
    bscTokens.usdt,
    bscTokens.btcb,
    bscTokens.eth,
    bscTokens.usdc
  ],
  [import_sdk5.ChainId.BSC_TESTNET]: [bscTestnetTokens.wbnb, bscTestnetTokens.cake, bscTestnetTokens.busd]
};
var ADDITIONAL_BASES = {
  [import_sdk5.ChainId.BSC]: {
    [bscTokens.snfts.address]: [bscTokens.sfund]
  }
};
var CUSTOM_BASES = {
  [import_sdk5.ChainId.BSC]: {}
};
var SUGGESTED_BASES = {
  [import_sdk5.ChainId.ETHEREUM]: [USDC[import_sdk5.ChainId.ETHEREUM], import_sdk5.WBNB[import_sdk5.ChainId.ETHEREUM], BUSD[import_sdk5.ChainId.ETHEREUM], USDT[import_sdk5.ChainId.ETHEREUM]],
  [import_sdk5.ChainId.GOERLI]: [USDC[import_sdk5.ChainId.GOERLI], import_sdk5.WNATIVE[import_sdk5.ChainId.GOERLI], BUSD[import_sdk5.ChainId.GOERLI]],
  [import_sdk5.ChainId.BSC]: [bscTokens.busd, bscTokens.cake, bscTokens.btcb],
  [import_sdk5.ChainId.BSC_TESTNET]: [bscTestnetTokens.wbnb, bscTestnetTokens.cake, bscTestnetTokens.busd]
};
var BASES_TO_TRACK_LIQUIDITY_FOR = {
  [import_sdk5.ChainId.ETHEREUM]: [
    USDC[import_sdk5.ChainId.ETHEREUM],
    import_sdk5.WNATIVE[import_sdk5.ChainId.ETHEREUM],
    BUSD[import_sdk5.ChainId.ETHEREUM],
    USDT[import_sdk5.ChainId.ETHEREUM],
    import_sdk5.WBNB[import_sdk5.ChainId.ETHEREUM]
  ],
  [import_sdk5.ChainId.GOERLI]: [USDC[import_sdk5.ChainId.GOERLI], import_sdk5.WNATIVE[import_sdk5.ChainId.GOERLI], BUSD[import_sdk5.ChainId.GOERLI]],
  [import_sdk5.ChainId.BSC]: [bscTokens.wbnb, bscTokens.dai, bscTokens.busd, bscTokens.usdt, bscTokens.cake],
  [import_sdk5.ChainId.BSC_TESTNET]: [bscTestnetTokens.wbnb, bscTestnetTokens.cake, bscTestnetTokens.busd]
};
var PINNED_PAIRS = {
  [import_sdk5.ChainId.ETHEREUM]: [
    [import_sdk5.WNATIVE[import_sdk5.ChainId.ETHEREUM], USDC[import_sdk5.ChainId.ETHEREUM]],
    [import_sdk5.WBNB[import_sdk5.ChainId.ETHEREUM], USDC[import_sdk5.ChainId.ETHEREUM]],
    [import_sdk5.WBNB[import_sdk5.ChainId.ETHEREUM], BUSD[import_sdk5.ChainId.ETHEREUM]],
    [import_sdk5.WBNB[import_sdk5.ChainId.ETHEREUM], USDT[import_sdk5.ChainId.ETHEREUM]],
    [import_sdk5.WBNB[import_sdk5.ChainId.ETHEREUM], import_sdk5.WNATIVE[import_sdk5.ChainId.ETHEREUM]]
  ],
  [import_sdk5.ChainId.BSC]: [
    [bscTokens.cake, bscTokens.wbnb],
    [bscTokens.busd, bscTokens.usdt],
    [bscTokens.dai, bscTokens.usdt]
  ]
};

// evm/getAllCommonPairs.ts
var import_flatMap = __toESM(require("lodash/flatMap"));

// evm/onchain/getPairs.ts
var import_sdk7 = require("@pancakeswap/sdk");
var import_multicall = require("@pancakeswap/multicall");

// evm/utils/currency.ts
var import_sdk6 = require("@pancakeswap/sdk");
function wrappedCurrency(currency, chainId) {
  return (currency == null ? void 0 : currency.isNative) ? import_sdk6.WNATIVE[chainId] : (currency == null ? void 0 : currency.isToken) ? currency : void 0;
}
function wrappedCurrencyAmount(currencyAmount, chainId) {
  const token = currencyAmount && chainId ? wrappedCurrency(currencyAmount.currency, chainId) : void 0;
  return token && currencyAmount ? import_sdk6.CurrencyAmount.fromRawAmount(token, currencyAmount.quotient) : void 0;
}

// evm/abis/IPancakePair.json
var IPancakePair_default = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      }
    ],
    name: "Burn",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256"
      }
    ],
    name: "Mint",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0In",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1In",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      }
    ],
    name: "Swap",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint112",
        name: "reserve0",
        type: "uint112"
      },
      {
        indexed: false,
        internalType: "uint112",
        name: "reserve1",
        type: "uint112"
      }
    ],
    name: "Sync",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MINIMUM_LIQUIDITY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      }
    ],
    name: "burn",
    outputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getReserves",
    outputs: [
      {
        internalType: "uint112",
        name: "reserve0",
        type: "uint112"
      },
      {
        internalType: "uint112",
        name: "reserve1",
        type: "uint112"
      },
      {
        internalType: "uint32",
        name: "blockTimestampLast",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "kLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      }
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8"
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
      }
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "price0CumulativeLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "price1CumulativeLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      }
    ],
    name: "skim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "swap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "sync",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "token0",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "token1",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];

// evm/onchain/getPairs.ts
async function getPairs(currencyPairs, { provider, chainId }) {
  const tokens = currencyPairs.map(([currencyA, currencyB]) => [
    wrappedCurrency(currencyA, chainId),
    wrappedCurrency(currencyB, chainId)
  ]);
  const pairAddresses = tokens.map(getPairAddress);
  const { multicallv2 } = (0, import_multicall.createMulticall)(provider);
  const reserveCalls = pairAddresses.map((address) => ({
    address,
    name: "getReserves",
    params: []
  }));
  const results = await multicallv2({
    abi: IPancakePair_default,
    calls: reserveCalls,
    chainId,
    options: {
      requireSuccess: false
    }
  });
  const resultWithState = results.map((result, i) => {
    if (!result)
      return [1 /* NOT_EXISTS */, null];
    const tokenA = tokens[i][0];
    const tokenB = tokens[i][1];
    if (!tokenA || !tokenB || tokenA.equals(tokenB))
      return [3 /* INVALID */, null];
    const [token0, token1] = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA];
    const { reserve0, reserve1 } = result;
    return [
      2 /* EXISTS */,
      new import_sdk7.Pair(import_sdk7.CurrencyAmount.fromRawAmount(token0, reserve0.toString()), import_sdk7.CurrencyAmount.fromRawAmount(token1, reserve1.toString()))
    ];
  });
  const successfulResult = resultWithState.filter((result) => Boolean(result[0] === 2 /* EXISTS */ && result[1]));
  return successfulResult.map(([, pair]) => pair);
}
function getPairAddress([tokenA, tokenB]) {
  let addr = "";
  try {
    addr = tokenA && tokenB && !tokenA.equals(tokenB) ? import_sdk7.Pair.getAddress(tokenA, tokenB) : "";
  } catch (error) {
    console.error(error.msg, `- pairAddresses: ${tokenA == null ? void 0 : tokenA.address}-${tokenB == null ? void 0 : tokenB.address}`, `chainId: ${tokenA == null ? void 0 : tokenA.chainId}`);
  }
  return addr;
}

// evm/onchain/getStableSwapOutputAmount.ts
var import_sdk8 = require("@pancakeswap/sdk");
var import_multicall2 = require("@pancakeswap/multicall");

// evm/utils/pair.ts
function involvesToken(pair, token) {
  const { token0, token1 } = pair;
  return token0.wrapped.equals(token.wrapped) || token1.wrapped.equals(token.wrapped);
}
function isSamePair(one, another) {
  return involvesToken(another, one.token0) && involvesToken(another, one.token1);
}
function getOutputToken(pair, inputToken) {
  return inputToken.wrapped.equals(pair.token0.wrapped) ? pair.token1 : pair.token0;
}
function isStableSwapPair(pair) {
  return !!pair.stableSwapAddress;
}

// evm/abis/StableSwapPair.json
var StableSwapPair_default = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256[2]",
        name: "token_amounts",
        type: "uint256[2]"
      },
      {
        indexed: false,
        internalType: "uint256[2]",
        name: "fees",
        type: "uint256[2]"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "invariant",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "token_supply",
        type: "uint256"
      }
    ],
    name: "AddLiquidity",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "admin_fee",
        type: "uint256"
      }
    ],
    name: "CommitNewFee",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [],
    name: "DonateAdminFees",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [],
    name: "Kill",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "admin_fee",
        type: "uint256"
      }
    ],
    name: "NewFee",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "old_A",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "new_A",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "initial_time",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "future_time",
        type: "uint256"
      }
    ],
    name: "RampA",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256[2]",
        name: "token_amounts",
        type: "uint256[2]"
      },
      {
        indexed: false,
        internalType: "uint256[2]",
        name: "fees",
        type: "uint256[2]"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "token_supply",
        type: "uint256"
      }
    ],
    name: "RemoveLiquidity",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256[2]",
        name: "token_amounts",
        type: "uint256[2]"
      },
      {
        indexed: false,
        internalType: "uint256[2]",
        name: "fees",
        type: "uint256[2]"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "invariant",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "token_supply",
        type: "uint256"
      }
    ],
    name: "RemoveLiquidityImbalance",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "token_amount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "coin_amount",
        type: "uint256"
      }
    ],
    name: "RemoveLiquidityOne",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [],
    name: "RevertParameters",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "A",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "t",
        type: "uint256"
      }
    ],
    name: "StopRampA",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "sold_id",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokens_sold",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bought_id",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokens_bought",
        type: "uint256"
      }
    ],
    name: "TokenExchange",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [],
    name: "Unkill",
    type: "event"
  },
  {
    inputs: [],
    name: "A",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "ADMIN_ACTIONS_DELAY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "FEE_DENOMINATOR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "KILL_DEADLINE_DT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MAX_A",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MAX_ADMIN_FEE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MAX_A_CHANGE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MAX_DECIMAL",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MAX_FEE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MIN_RAMP_TIME",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "N_COINS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "PRECISION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "PRECISION_MUL",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "RATES",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "STABLESWAP_FACTORY",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "amounts",
        type: "uint256[2]"
      },
      {
        internalType: "uint256",
        name: "min_mint_amount",
        type: "uint256"
      }
    ],
    name: "add_liquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "admin_actions_deadline",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "i",
        type: "uint256"
      }
    ],
    name: "admin_balances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "admin_fee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "apply_new_fee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "balances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "amounts",
        type: "uint256[2]"
      },
      {
        internalType: "bool",
        name: "deposit",
        type: "bool"
      }
    ],
    name: "calc_token_amount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_token_amount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "i",
        type: "uint256"
      }
    ],
    name: "calc_withdraw_one_coin",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "coins",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "new_fee",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "new_admin_fee",
        type: "uint256"
      }
    ],
    name: "commit_new_fee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "donate_admin_fees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "i",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "j",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "dx",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "min_dy",
        type: "uint256"
      }
    ],
    name: "exchange",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "fee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "future_A",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "future_A_time",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "future_admin_fee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "future_fee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "i",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "j",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "dx",
        type: "uint256"
      }
    ],
    name: "get_dy",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "i",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "j",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "dx",
        type: "uint256"
      }
    ],
    name: "get_dy_underlying",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "get_virtual_price",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "initial_A",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "initial_A_time",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address[2]",
        name: "_coins",
        type: "address[2]"
      },
      {
        internalType: "uint256",
        name: "_A",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_admin_fee",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address"
      }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "isInitialized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "is_killed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "kill_deadline",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "kill_me",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_future_A",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_future_time",
        type: "uint256"
      }
    ],
    name: "ramp_A",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      },
      {
        internalType: "uint256[2]",
        name: "min_amounts",
        type: "uint256[2]"
      }
    ],
    name: "remove_liquidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "amounts",
        type: "uint256[2]"
      },
      {
        internalType: "uint256",
        name: "max_burn_amount",
        type: "uint256"
      }
    ],
    name: "remove_liquidity_imbalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_token_amount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "i",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "min_amount",
        type: "uint256"
      }
    ],
    name: "remove_liquidity_one_coin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "revert_new_parameters",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "stop_rampget_A",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract PancakeStableSwapLP",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "unkill_me",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "withdraw_admin_fees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

// evm/onchain/getStableSwapOutputAmount.ts
async function getStableSwapOutputAmount(pair, inputAmount, { provider }) {
  const { multicallv2 } = (0, import_multicall2.createMulticall)(provider);
  const wrappedInputAmount = wrappedCurrencyAmount(inputAmount, inputAmount.currency.chainId);
  if (!wrappedInputAmount) {
    throw new Error(`No wrapped token amount found for input amount: ${inputAmount.currency.name}`);
  }
  const chainId = inputAmount.currency.chainId;
  const inputToken = wrappedInputAmount.currency;
  const outputToken = getOutputToken(pair, inputToken);
  const inputRawAmount = inputAmount.wrapped.quotient.toString();
  const isOutputToken0 = pair.token0.equals(outputToken);
  const args = isOutputToken0 ? [1, 0, inputRawAmount] : [0, 1, inputRawAmount];
  const call = {
    address: pair.stableSwapAddress,
    name: "get_dy",
    params: args
  };
  const result = await multicallv2({
    abi: StableSwapPair_default,
    calls: [call],
    chainId,
    options: {
      requireSuccess: true
    }
  });
  return import_sdk8.CurrencyAmount.fromRawAmount(outputToken, result.toString());
}

// evm/onchain/getStableSwapFee.ts
var import_multicall3 = require("@pancakeswap/multicall");
var import_sdk9 = require("@pancakeswap/sdk");

// evm/abis/InfoStableSwap.json
var InfoStableSwap_default = [
  {
    inputs: [],
    name: "FEE_DENOMINATOR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "N_COINS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "PRECISION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_swap",
        type: "address"
      }
    ],
    name: "PRECISION_MUL",
    outputs: [
      {
        internalType: "uint256[2]",
        name: "swapPRECISION_MUL",
        type: "uint256[2]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_swap",
        type: "address"
      }
    ],
    name: "RATES",
    outputs: [
      {
        internalType: "uint256[2]",
        name: "swapRATES",
        type: "uint256[2]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_swap",
        type: "address"
      },
      {
        internalType: "uint256[2]",
        name: "_balances",
        type: "uint256[2]"
      }
    ],
    name: "_xp_mem",
    outputs: [
      {
        internalType: "uint256[2]",
        name: "result",
        type: "uint256[2]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_swap",
        type: "address"
      }
    ],
    name: "balances",
    outputs: [
      {
        internalType: "uint256[2]",
        name: "swapBalances",
        type: "uint256[2]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_swap",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "calc_coins_amount",
    outputs: [
      {
        internalType: "uint256[2]",
        name: "",
        type: "uint256[2]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_swap",
        type: "address"
      },
      {
        internalType: "uint256[2]",
        name: "_balances",
        type: "uint256[2]"
      },
      {
        internalType: "uint256",
        name: "amp",
        type: "uint256"
      }
    ],
    name: "get_D_mem",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_swap",
        type: "address"
      },
      {
        internalType: "uint256[2]",
        name: "amounts",
        type: "uint256[2]"
      }
    ],
    name: "get_add_liquidity_fee",
    outputs: [
      {
        internalType: "uint256[2]",
        name: "liquidityFee",
        type: "uint256[2]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_swap",
        type: "address"
      },
      {
        internalType: "uint256[2]",
        name: "amounts",
        type: "uint256[2]"
      }
    ],
    name: "get_add_liquidity_mint_amount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_swap",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "i",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "j",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "dx",
        type: "uint256"
      }
    ],
    name: "get_exchange_fee",
    outputs: [
      {
        internalType: "uint256",
        name: "exFee",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "exAdminFee",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_swap",
        type: "address"
      },
      {
        internalType: "uint256[2]",
        name: "amounts",
        type: "uint256[2]"
      }
    ],
    name: "get_remove_liquidity_imbalance_fee",
    outputs: [
      {
        internalType: "uint256[2]",
        name: "liquidityFee",
        type: "uint256[2]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_swap",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_token_amount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "i",
        type: "uint256"
      }
    ],
    name: "get_remove_liquidity_one_coin_fee",
    outputs: [
      {
        internalType: "uint256",
        name: "adminFee",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_swap",
        type: "address"
      }
    ],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

// evm/onchain/getStableSwapFee.ts
function getStableSwapFeeCall(pair, inputAmount) {
  const { chainId } = inputAmount.currency;
  const wrappedInputAmount = wrappedCurrencyAmount(inputAmount, chainId);
  if (!wrappedInputAmount) {
    throw new Error(`No wrapped token amount found for input amount: ${inputAmount.currency.name}`);
  }
  const { stableSwapAddress } = pair;
  const inputToken = wrappedInputAmount.currency;
  const outputToken = getOutputToken(pair, inputToken);
  const inputRawAmount = inputAmount.wrapped.quotient.toString();
  const isOutputToken0 = pair.token0.equals(outputToken);
  const args = isOutputToken0 ? [stableSwapAddress, 1, 0, inputRawAmount] : [stableSwapAddress, 0, 1, inputRawAmount];
  return {
    address: STABLE_SWAP_INFO_ADDRESS[chainId],
    name: "get_exchange_fee",
    params: args
  };
}
async function getStableSwapFee(pair, inputAmount, { provider }) {
  const chainId = inputAmount.currency.chainId;
  const { multicallv2 } = (0, import_multicall3.createMulticall)(provider);
  const call = getStableSwapFeeCall(pair, inputAmount);
  const outputToken = getOutputToken(pair, inputAmount.currency);
  const [[feeRaw, adminFeeRaw]] = await multicallv2({
    abi: InfoStableSwap_default,
    calls: [call],
    chainId,
    options: {
      requireSuccess: true
    }
  });
  return {
    fee: import_sdk9.CurrencyAmount.fromRawAmount(outputToken, feeRaw.toString()),
    adminFee: import_sdk9.CurrencyAmount.fromRawAmount(outputToken, adminFeeRaw.toString())
  };
}

// evm/getAllCommonPairs.ts
var PairState = /* @__PURE__ */ ((PairState2) => {
  PairState2[PairState2["LOADING"] = 0] = "LOADING";
  PairState2[PairState2["NOT_EXISTS"] = 1] = "NOT_EXISTS";
  PairState2[PairState2["EXISTS"] = 2] = "EXISTS";
  PairState2[PairState2["INVALID"] = 3] = "INVALID";
  return PairState2;
})(PairState || {});
async function getAllCommonPairs(currencyA, currencyB, { provider }) {
  var _a, _b, _c, _d, _e;
  const chainId = currencyA.chainId;
  if (!chainId || chainId !== currencyB.chainId) {
    return [];
  }
  const [tokenA, tokenB] = chainId ? [wrappedCurrency(currencyA, chainId), wrappedCurrency(currencyB, chainId)] : [void 0, void 0];
  const common = (_a = BASES_TO_CHECK_TRADES_AGAINST[chainId]) != null ? _a : [];
  const additionalA = tokenA ? (_c = (_b = ADDITIONAL_BASES[chainId]) == null ? void 0 : _b[tokenA.address]) != null ? _c : [] : [];
  const additionalB = tokenB ? (_e = (_d = ADDITIONAL_BASES[chainId]) == null ? void 0 : _d[tokenB.address]) != null ? _e : [] : [];
  const bases = [...common, ...additionalA, ...additionalB];
  const basePairs = (0, import_flatMap.default)(bases, (base) => bases.map((otherBase) => [base, otherBase]));
  const allPairCombinations = getAllPairCombinations(tokenA, tokenB, bases, basePairs, chainId);
  const allPairs = await getPairs(allPairCombinations, { chainId, provider });
  return Object.values(allPairs.reduce((memo, curr) => {
    var _a2;
    memo[curr.liquidityToken.address] = (_a2 = memo[curr.liquidityToken.address]) != null ? _a2 : curr;
    return memo;
  }, {}));
}
var getAllPairCombinations = (tokenA, tokenB, bases, basePairs, chainId) => {
  return tokenA && tokenB ? [
    [tokenA, tokenB],
    ...bases.map((base) => [tokenA, base]),
    ...bases.map((base) => [tokenB, base]),
    ...basePairs
  ].filter((tokens) => Boolean(tokens[0] && tokens[1])).filter(([t0, t1]) => t0.address !== t1.address).filter(([tokenA_, tokenB_]) => {
    if (!chainId)
      return true;
    const customBases = CUSTOM_BASES[chainId];
    const customBasesA = customBases == null ? void 0 : customBases[tokenA_.address];
    const customBasesB = customBases == null ? void 0 : customBases[tokenB_.address];
    if (!customBasesA && !customBasesB)
      return true;
    if (customBasesA && !customBasesA.find((base) => tokenB_.equals(base)))
      return false;
    if (customBasesB && !customBasesB.find((base) => tokenA_.equals(base)))
      return false;
    return true;
  }) : [];
};

// evm/getBestTradeFromV2.ts
var getBestTradeFromV2ExactIn = createGetBestTradeFromV2(import_sdk10.TradeType.EXACT_INPUT);
var getBestTradeFromV2ExactOut = createGetBestTradeFromV2(import_sdk10.TradeType.EXACT_OUTPUT);
function createGetBestTradeFromV2(tradeType) {
  function getBestTrade(pairs, amountIn, output, options) {
    if (tradeType === import_sdk10.TradeType.EXACT_INPUT) {
      return import_sdk10.Trade.bestTradeExactIn(pairs, amountIn, output, options);
    }
    return import_sdk10.Trade.bestTradeExactOut(pairs, output, amountIn, options);
  }
  return async function bestTradeFromV2(amountIn, output, options) {
    var _a, _b;
    const { provider, allCommonPairs, ...restOptions } = options;
    const { maxHops = 3 } = restOptions;
    const getAllowedPairs = async () => {
      if (Array.isArray(allCommonPairs)) {
        return allCommonPairs;
      }
      if (allCommonPairs) {
        return allCommonPairs(amountIn.currency, output);
      }
      return getAllCommonPairs(amountIn.currency, output, { provider });
    };
    const allowedPairs = await getAllowedPairs();
    if (!allowedPairs.length) {
      return null;
    }
    if (maxHops === 1) {
      return (_a = getBestTrade(allowedPairs, amountIn, output, restOptions)[0]) != null ? _a : null;
    }
    let bestTradeSoFar = null;
    for (let i = 1; i <= maxHops; i++) {
      const currentTrade = (_b = getBestTrade(allowedPairs, amountIn, output, {
        ...restOptions,
        maxHops: i,
        maxNumResults: 1
      })[0]) != null ? _b : null;
      if ((0, import_sdk10.isTradeBetter)(bestTradeSoFar, currentTrade, BETTER_TRADE_LESS_HOPS_THRESHOLD)) {
        bestTradeSoFar = currentTrade;
      }
    }
    return bestTradeSoFar;
  };
}

// evm/getBestTradeWithStableSwap.ts
var import_sdk16 = require("@pancakeswap/sdk");

// evm/stableSwap/getLPOutputWithoutFee.ts
var import_sdk13 = require("@pancakeswap/sdk");

// evm/stableSwap/getLPOutput.ts
var import_sdk12 = require("@pancakeswap/sdk");
var import_tiny_invariant2 = __toESM(require("tiny-invariant"));

// evm/stableSwap/amm.ts
var import_sdk11 = require("@pancakeswap/sdk");
var import_tiny_invariant = __toESM(require("tiny-invariant"));
function getD({ amplifier, balances }) {
  const numOfCoins = balances.length;
  (0, import_tiny_invariant.default)(numOfCoins > 1, "To get constant D, pool should have at least two coins.");
  const sum = balances.reduce((s, cur) => import_sdk11.JSBI.add(s, import_sdk11.JSBI.BigInt(cur)), import_sdk11.ZERO);
  if (import_sdk11.JSBI.equal(sum, import_sdk11.ZERO)) {
    return import_sdk11.ZERO;
  }
  const n = import_sdk11.JSBI.BigInt(numOfCoins);
  const precision = import_sdk11.ONE;
  const ann = import_sdk11.JSBI.multiply(import_sdk11.JSBI.BigInt(amplifier), n);
  let dPrev = import_sdk11.ZERO;
  let d = sum;
  for (let i = 0; i < 255; i += 1) {
    let dp = d;
    for (const b of balances) {
      dp = import_sdk11.JSBI.divide(import_sdk11.JSBI.multiply(dp, d), import_sdk11.JSBI.add(import_sdk11.JSBI.multiply(import_sdk11.JSBI.BigInt(b), n), import_sdk11.JSBI.BigInt(1)));
    }
    dPrev = d;
    d = import_sdk11.JSBI.divide(import_sdk11.JSBI.multiply(import_sdk11.JSBI.add(import_sdk11.JSBI.multiply(ann, sum), import_sdk11.JSBI.multiply(dp, n)), d), import_sdk11.JSBI.add(import_sdk11.JSBI.multiply(import_sdk11.JSBI.subtract(ann, import_sdk11.ONE), d), import_sdk11.JSBI.multiply(import_sdk11.JSBI.add(n, import_sdk11.ONE), dp)));
    if (import_sdk11.JSBI.greaterThan(d, dPrev) && import_sdk11.JSBI.lessThanOrEqual(import_sdk11.JSBI.subtract(d, dPrev), precision)) {
      break;
    }
    if (import_sdk11.JSBI.lessThanOrEqual(d, dPrev) && import_sdk11.JSBI.lessThanOrEqual(import_sdk11.JSBI.subtract(dPrev, d), precision)) {
      break;
    }
  }
  return d;
}
function getY({ amplifier, balances, i, j, x }) {
  const numOfCoins = balances.length;
  (0, import_tiny_invariant.default)(numOfCoins > 1, "To get y, pool should have at least two coins.");
  (0, import_tiny_invariant.default)(i !== j && i >= 0 && j >= 0 && i < numOfCoins && j < numOfCoins, `Invalid i: ${i} and j: ${j}`);
  const n = import_sdk11.JSBI.BigInt(numOfCoins);
  const d = getD({ amplifier, balances });
  let sum = import_sdk11.ZERO;
  let c = d;
  const ann = import_sdk11.JSBI.multiply(import_sdk11.JSBI.BigInt(amplifier), n);
  for (const [index, b2] of balances.entries()) {
    if (index === j) {
      continue;
    }
    let balanceAfterDeposit = import_sdk11.JSBI.BigInt(b2);
    if (index === i) {
      balanceAfterDeposit = import_sdk11.JSBI.add(balanceAfterDeposit, import_sdk11.JSBI.BigInt(x));
    }
    sum = import_sdk11.JSBI.add(sum, balanceAfterDeposit);
    c = import_sdk11.JSBI.divide(import_sdk11.JSBI.multiply(c, d), import_sdk11.JSBI.multiply(balanceAfterDeposit, n));
  }
  c = import_sdk11.JSBI.divide(import_sdk11.JSBI.multiply(c, d), import_sdk11.JSBI.multiply(ann, n));
  const b = import_sdk11.JSBI.add(sum, import_sdk11.JSBI.divide(d, ann));
  const precision = import_sdk11.ONE;
  let yPrev = import_sdk11.ZERO;
  let y = d;
  for (let k = 0; k < 255; k += 1) {
    yPrev = y;
    y = import_sdk11.JSBI.divide(import_sdk11.JSBI.add(import_sdk11.JSBI.multiply(y, y), c), import_sdk11.JSBI.subtract(import_sdk11.JSBI.add(import_sdk11.JSBI.multiply(import_sdk11.JSBI.BigInt(2), y), b), d));
    if (import_sdk11.JSBI.greaterThan(y, yPrev) && import_sdk11.JSBI.lessThanOrEqual(import_sdk11.JSBI.subtract(y, yPrev), precision)) {
      break;
    }
    if (import_sdk11.JSBI.lessThanOrEqual(y, yPrev) && import_sdk11.JSBI.lessThanOrEqual(import_sdk11.JSBI.subtract(yPrev, y), precision)) {
      break;
    }
  }
  return y;
}

// evm/stableSwap/getLPOutput.ts
function getLPOutput({
  amplifier,
  balances,
  totalSupply,
  amounts,
  fee
}) {
  const lpToken = totalSupply.currency;
  const lpTotalSupply = totalSupply.quotient;
  if (import_sdk12.JSBI.equal(lpTotalSupply, import_sdk12.ZERO) || !balances.length || balances.every((b) => import_sdk12.JSBI.equal(b.quotient, import_sdk12.ZERO))) {
    const d = getD({ amplifier, balances: amounts.map((a) => a.quotient) });
    return import_sdk12.CurrencyAmount.fromRawAmount(lpToken, d);
  }
  const currentBalances = [];
  const newBalances = [];
  for (const [i, balance] of balances.entries()) {
    const amount = amounts[i] || import_sdk12.CurrencyAmount.fromRawAmount(balance.currency, 0);
    (0, import_tiny_invariant2.default)(amount.currency.equals(balance.currency), "User input currency should be the same as pool balance currency.");
    currentBalances.push(balance.quotient);
    newBalances.push(import_sdk12.JSBI.add(balance.quotient, amount.quotient));
  }
  const d0 = getD({ amplifier, balances: currentBalances });
  const d1 = getD({ amplifier, balances: newBalances });
  (0, import_tiny_invariant2.default)(import_sdk12.JSBI.greaterThanOrEqual(d1, d0), "D1 should be greater than or equal than d0.");
  const isFirstSupply = import_sdk12.JSBI.lessThanOrEqual(lpTotalSupply, import_sdk12.ZERO);
  if (isFirstSupply) {
    return import_sdk12.CurrencyAmount.fromRawAmount(totalSupply.currency, d1);
  }
  const n = currentBalances.length;
  const eachTokenFee = fee.multiply(n).divide(4 * (n - 1));
  let d2 = d1;
  for (const [i, b] of currentBalances.entries()) {
    const idealBalance = import_sdk12.JSBI.divide(import_sdk12.JSBI.multiply(d1, b), d0);
    let diff = import_sdk12.ZERO;
    if (import_sdk12.JSBI.greaterThan(idealBalance, newBalances[i])) {
      diff = import_sdk12.JSBI.subtract(idealBalance, newBalances[i]);
    } else {
      diff = import_sdk12.JSBI.subtract(newBalances[i], idealBalance);
    }
    const feeAmount = eachTokenFee.multiply(diff).quotient;
    newBalances[i] = import_sdk12.JSBI.subtract(newBalances[i], feeAmount);
  }
  d2 = getD({ amplifier, balances: newBalances });
  const expectedMintLP = import_sdk12.JSBI.divide(import_sdk12.JSBI.multiply(lpTotalSupply, import_sdk12.JSBI.subtract(d2, d0)), d0);
  return import_sdk12.CurrencyAmount.fromRawAmount(totalSupply.currency, expectedMintLP);
}

// evm/stableSwap/getLPOutputWithoutFee.ts
function getLPOutputWithoutFee(params) {
  return getLPOutput({ ...params, fee: new import_sdk13.Percent(0) });
}

// evm/stableSwap/getSwapOutput.ts
var import_sdk14 = require("@pancakeswap/sdk");
var import_tiny_invariant3 = __toESM(require("tiny-invariant"));
function getSwapOutput({
  amplifier,
  balances: balanceAmounts,
  outputCurrency,
  amount,
  fee
}) {
  let i = null;
  let j = null;
  const balances = [];
  for (const [index, b] of balanceAmounts.entries()) {
    balances.push(b.quotient);
    if (b.currency.equals(amount.currency)) {
      i = index;
      continue;
    }
    if (b.currency.equals(outputCurrency)) {
      j = index;
      continue;
    }
  }
  (0, import_tiny_invariant3.default)(i !== null && j !== null && i !== j, "Input currency or output currency does not match currencies of token balances.");
  const y = getY({ amplifier, balances, i, j, x: amount.quotient });
  const dy = import_sdk14.JSBI.subtract(balances[j], y);
  const feeAmount = fee.multiply(dy).quotient;
  return import_sdk14.CurrencyAmount.fromRawAmount(outputCurrency, import_sdk14.JSBI.subtract(dy, feeAmount));
}
function getSwapOutputWithoutFee(params) {
  return getSwapOutput({ ...params, fee: new import_sdk14.Percent(0) });
}

// evm/stableSwap/utils.ts
var import_sdk15 = require("@pancakeswap/sdk");
var import_tiny_invariant4 = __toESM(require("tiny-invariant"));

// evm/types/bestTrade.ts
var RouteType = /* @__PURE__ */ ((RouteType2) => {
  RouteType2[RouteType2["V2"] = 0] = "V2";
  RouteType2[RouteType2["STABLE_SWAP"] = 1] = "STABLE_SWAP";
  RouteType2[RouteType2["MIXED"] = 2] = "MIXED";
  return RouteType2;
})(RouteType || {});

// evm/stableSwap/utils.ts
function createStableSwapPair(pair, stableSwapAddress = "") {
  return {
    ...pair,
    stableSwapAddress,
    price: new import_sdk15.Price(pair.token0, pair.token1, "0", "1"),
    fee: new import_sdk15.Percent(0),
    adminFee: new import_sdk15.Percent(0),
    involvesToken: (token) => token.equals(pair.token0) || token.equals(pair.token1)
  };
}
function createRouteWithStableSwap({
  routeType,
  input,
  pairs,
  output
}) {
  const wrappedInput = input.wrapped;
  const path = [wrappedInput];
  for (const [i, pair] of pairs.entries()) {
    const out = getOutputToken(pair, path[i]);
    path.push(out);
  }
  return {
    routeType,
    input,
    output,
    pairs,
    path
  };
}
function createTradeWithStableSwap({
  routeType,
  pairs,
  inputAmount,
  outputAmount,
  tradeType
}) {
  return {
    tradeType,
    inputAmount,
    outputAmount,
    route: createRouteWithStableSwap({
      routeType,
      pairs,
      input: inputAmount.currency,
      output: outputAmount.currency
    })
  };
}
function createTradeWithStableSwapFromV2Trade({
  tradeType,
  inputAmount,
  outputAmount,
  route: { pairs }
}) {
  return createTradeWithStableSwap({
    routeType: 0 /* V2 */,
    pairs,
    inputAmount,
    outputAmount,
    tradeType
  });
}
function getFeePercent(inputAmount, outputAmount, { fee, adminFee }) {
  (0, import_tiny_invariant4.default)(fee.currency.equals(outputAmount.currency), "FEE_CURRENCY_MATCH");
  (0, import_tiny_invariant4.default)(adminFee.currency.equals(outputAmount.currency), "FEE_CURRENCY_MATCH");
  const priceWithoutFee = new import_sdk15.Price({ baseAmount: outputAmount.add(fee), quoteAmount: inputAmount });
  const inputFee = priceWithoutFee.quote(fee);
  const inputAdminFee = priceWithoutFee.quote(adminFee);
  return {
    fee: new import_sdk15.Percent(inputFee.quotient, inputAmount.quotient),
    adminFee: new import_sdk15.Percent(inputAdminFee.quotient, inputAmount.quotient)
  };
}

// evm/stableSwap/index.ts
var StableSwap = {
  getSwapOutput,
  getSwapOutputWithoutFee,
  getLPOutputWithoutFee,
  getLPOutput,
  getD
};

// evm/getBestTradeWithStableSwap.ts
async function getBestTradeWithStableSwap(baseTrade, stableSwapPairs, options) {
  const { provider } = options;
  const { inputAmount, route, tradeType } = baseTrade;
  if (!stableSwapPairs.length) {
    return createTradeWithStableSwapFromV2Trade(baseTrade);
  }
  const findStableSwapPair = (pair) => stableSwapPairs.find((p) => isSamePair(p, pair));
  let outputAmount = inputAmount;
  let outputToken = inputAmount.currency;
  const shouldRecalculateOutputAmount = () => !outputToken.equals(outputAmount.currency);
  const getLatestOutputAmount = async () => {
    if (outputAmount.currency.equals(inputAmount.currency) && outputToken.equals(baseTrade.outputAmount.currency)) {
      return baseTrade.outputAmount;
    }
    return shouldRecalculateOutputAmount() ? getOutputAmountFromV2(outputAmount, outputToken, options) : outputAmount;
  };
  let routeType = null;
  const setCurrentRouteType = (type) => {
    routeType = routeType === null || routeType === type ? type : 2 /* MIXED */;
  };
  const pairsWithStableSwap = [];
  for (const [index, pair] of route.pairs.entries()) {
    const stableSwapPair = findStableSwapPair(pair);
    if (stableSwapPair) {
      const stableInputAmount = await getLatestOutputAmount();
      const results = await Promise.all([
        getStableSwapOutputAmount(stableSwapPair, stableInputAmount, { provider }),
        getStableSwapFee(stableSwapPair, stableInputAmount, { provider })
      ]);
      outputAmount = results[0];
      const fees = results[1];
      outputToken = getOutputToken(stableSwapPair, outputToken);
      const { fee, adminFee } = getFeePercent(stableInputAmount, outputAmount, fees);
      pairsWithStableSwap.push({
        ...stableSwapPair,
        price: new import_sdk16.Price({ baseAmount: stableInputAmount, quoteAmount: outputAmount.add(fees.fee) }),
        fee,
        adminFee
      });
      setCurrentRouteType(1 /* STABLE_SWAP */);
      continue;
    }
    outputToken = getOutputToken(pair, outputToken);
    if (index === route.pairs.length - 1) {
      outputAmount = await getLatestOutputAmount();
    }
    pairsWithStableSwap.push(pair);
    setCurrentRouteType(0 /* V2 */);
  }
  if (routeType === null) {
    throw new Error(`No valid route found`);
  }
  return createTradeWithStableSwap({
    routeType,
    pairs: pairsWithStableSwap,
    inputAmount,
    outputAmount: import_sdk16.CurrencyAmount.fromFractionalAmount(baseTrade.outputAmount.currency, outputAmount.numerator, outputAmount.denominator),
    tradeType
  });
}
async function getOutputAmountFromV2(inputAmount, outputToken, options) {
  const trade = await getBestTradeFromV2ExactIn(inputAmount, outputToken, options);
  if (!trade) {
    throw new Error(`Cannot get valid trade from ${inputAmount.currency.name} to ${outputToken.name}`);
  }
  return trade.outputAmount;
}

// evm/getStableSwapPairs.ts
var import_sdk18 = require("@pancakeswap/sdk");

// ../token-lists/dist/chunk-YBVZDUCZ.mjs
var import_swap_sdk_core = require("@pancakeswap/swap-sdk-core");
var WrappedTokenInfo = class extends import_swap_sdk_core.Token {
  constructor(tokenInfo) {
    super(tokenInfo.chainId, tokenInfo.address, tokenInfo.decimals, tokenInfo.symbol, tokenInfo.name);
    this.logoURI = tokenInfo.logoURI;
  }
  get serialize() {
    return {
      address: this.address,
      chainId: this.chainId,
      decimals: this.decimals,
      symbol: this.symbol,
      name: this.name,
      projectLink: this.projectLink,
      logoURI: this.logoURI
    };
  }
};
function deserializeToken(serializedToken) {
  if (serializedToken.logoURI) {
    return new WrappedTokenInfo({
      chainId: serializedToken.chainId,
      address: serializedToken.address,
      decimals: serializedToken.decimals,
      symbol: serializedToken.symbol || "Unknown",
      name: serializedToken.name || "Unknown",
      logoURI: serializedToken.logoURI
    });
  }
  return new import_swap_sdk_core.Token(serializedToken.chainId, serializedToken.address, serializedToken.decimals, serializedToken.symbol, serializedToken.name, serializedToken.projectLink);
}

// evm/constants/stableSwap/pools.ts
var import_sdk17 = require("@pancakeswap/sdk");

// evm/constants/stableSwap/1.ts
var pools = [];

// evm/constants/stableSwap/56.ts
var pools2 = [
  {
    lpSymbol: "HAY-BUSD LP",
    lpAddress: "0xB6040A9F294477dDAdf5543a24E5463B8F2423Ae",
    token: bscTokens.hay,
    quoteToken: bscTokens.busd,
    stableSwapAddress: "0x49079d07ef47449af808a4f36c2a8dec975594ec",
    infoStableSwapAddress: "0xa680d27f63Fa5E213C502d1B3Ca1EB6a3C1b31D6"
  },
  {
    lpSymbol: "USDT-BUSD LP",
    lpAddress: "0x36842F8fb99D55477C0Da638aF5ceb6bBf86aA98",
    token: bscTokens.usdt,
    quoteToken: bscTokens.busd,
    stableSwapAddress: "0x169F653A54ACD441aB34B73dA9946e2C451787EF",
    infoStableSwapAddress: "0xa680d27f63Fa5E213C502d1B3Ca1EB6a3C1b31D6"
  },
  {
    lpSymbol: "USDC-BUSD LP",
    lpAddress: "0x1A77C359D0019cD8F4d36b7CDf5a88043D801072",
    token: bscTokens.usdc,
    quoteToken: bscTokens.busd,
    stableSwapAddress: "0xc2F5B9a3d9138ab2B74d581fC11346219eBf43Fe",
    infoStableSwapAddress: "0xa680d27f63Fa5E213C502d1B3Ca1EB6a3C1b31D6"
  },
  {
    lpSymbol: "USDT-USDC LP",
    lpAddress: "0xee1bcc9F1692E81A281b3a302a4b67890BA4be76",
    token: bscTokens.usdt,
    quoteToken: bscTokens.usdc,
    stableSwapAddress: "0x3EFebC418efB585248A0D2140cfb87aFcc2C63DD",
    infoStableSwapAddress: "0xa680d27f63Fa5E213C502d1B3Ca1EB6a3C1b31D6"
  }
];

// evm/constants/stableSwap/97.ts
var pools3 = [
  {
    lpSymbol: "USDC-BUSD LP",
    lpAddress: "0xd1742b5eC6798cEB8C791e0ebbEf606A4946f67E",
    token: bscTestnetTokens.usdc,
    quoteToken: bscTestnetTokens.busd,
    stableSwapAddress: "0x1288026D2c5a76A5bfb0730F615131A448f4Ad06",
    infoStableSwapAddress: "0xaE6C14AAA753B3FCaB96149e1E10Bc4EDF39F546"
  }
];

// evm/constants/stableSwap/pools.ts
var poolMap = {
  [import_sdk17.ChainId.ETHEREUM]: pools,
  [import_sdk17.ChainId.GOERLI]: [],
  [import_sdk17.ChainId.BSC]: pools2,
  [import_sdk17.ChainId.BSC_TESTNET]: pools3
};

// evm/constants/stableSwap/index.ts
function getStableSwapPools(chainId) {
  return poolMap[chainId] || [];
}

// evm/getStableSwapPairs.ts
function getStableSwapPairs(chainId) {
  if (chainId !== import_sdk18.ChainId.BSC && chainId !== import_sdk18.ChainId.BSC_TESTNET) {
    return [];
  }
  const pools4 = getStableSwapPools(chainId);
  return pools4.map(({ token, quoteToken, stableSwapAddress }) => {
    const token0 = deserializeToken(token);
    const token1 = deserializeToken(quoteToken);
    return createStableSwapPair({
      token0,
      token1,
      reserve0: import_sdk18.CurrencyAmount.fromRawAmount(token0, "0"),
      reserve1: import_sdk18.CurrencyAmount.fromRawAmount(token1, "0")
    }, stableSwapAddress);
  });
}

// evm/getBestTrade.ts
var getBestTradeExactIn = createGetBestTrade(import_sdk19.TradeType.EXACT_INPUT);
var getBestTradeExactOut = createGetBestTrade(import_sdk19.TradeType.EXACT_OUTPUT);
function createGetBestTrade(tradeType) {
  const getBestTradeFromV2 = tradeType === import_sdk19.TradeType.EXACT_INPUT ? getBestTradeFromV2ExactIn : getBestTradeFromV2ExactOut;
  return async function getBestTrade(amountIn, output, options) {
    const { provider } = options;
    const {
      currency: { chainId }
    } = amountIn;
    const bestTradeV2 = await getBestTradeFromV2(amountIn, output, options);
    if (!bestTradeV2) {
      return null;
    }
    const stableSwapPairs = getStableSwapPairs(chainId);
    const bestTradeWithStableSwap = await getBestTradeWithStableSwap(bestTradeV2, stableSwapPairs, { provider });
    const { outputAmount: outputAmountWithStableSwap } = bestTradeWithStableSwap;
    if (outputAmountWithStableSwap.lessThan(bestTradeV2.outputAmount)) {
      return createTradeWithStableSwapFromV2Trade(bestTradeV2);
    }
    return bestTradeWithStableSwap;
  };
}

// evm/trade.ts
var import_tiny_invariant5 = __toESM(require("tiny-invariant"));
var import_sdk21 = require("@pancakeswap/sdk");

// evm/utils/route.ts
var import_sdk20 = require("@pancakeswap/sdk");
function getMidPrice(route) {
  const prices = [];
  for (const [i, pair] of route.pairs.entries()) {
    if (isStableSwapPair(pair)) {
      prices.push(route.path[i].equals(pair.price.baseCurrency) ? pair.price : pair.price.invert());
      continue;
    }
    prices.push(route.path[i].equals(pair.token0) ? new import_sdk20.Price(pair.reserve0.currency, pair.reserve1.currency, pair.reserve0.quotient, pair.reserve1.quotient) : new import_sdk20.Price(pair.reserve1.currency, pair.reserve0.currency, pair.reserve1.quotient, pair.reserve0.quotient));
  }
  const reduced = prices.slice(1).reduce((accumulator, currentValue) => accumulator.multiply(currentValue), prices[0]);
  return new import_sdk20.Price(route.input, route.output, reduced.denominator, reduced.numerator);
}

// evm/trade.ts
var Trade4 = {
  maximumAmountIn,
  minimumAmountOut,
  executionPrice,
  priceImpact
};
function maximumAmountIn(trade, slippageTolerance) {
  (0, import_tiny_invariant5.default)(!slippageTolerance.lessThan(import_sdk21.ZERO), "SLIPPAGE_TOLERANCE");
  if (trade.tradeType === import_sdk21.TradeType.EXACT_INPUT) {
    return trade.inputAmount;
  }
  const slippageAdjustedAmountIn = new import_sdk21.Fraction(import_sdk21.ONE).add(slippageTolerance).multiply(trade.inputAmount.quotient).quotient;
  return import_sdk21.CurrencyAmount.fromRawAmount(trade.inputAmount.currency, slippageAdjustedAmountIn);
}
function minimumAmountOut(trade, slippageTolerance) {
  (0, import_tiny_invariant5.default)(!slippageTolerance.lessThan(import_sdk21.ZERO), "SLIPPAGE_TOLERANCE");
  if (trade.tradeType === import_sdk21.TradeType.EXACT_OUTPUT) {
    return trade.outputAmount;
  }
  const slippageAdjustedAmountOut = new import_sdk21.Fraction(import_sdk21.ONE).add(slippageTolerance).invert().multiply(trade.outputAmount.quotient).quotient;
  return import_sdk21.CurrencyAmount.fromRawAmount(trade.outputAmount.currency, slippageAdjustedAmountOut);
}
function executionPrice({
  inputAmount,
  outputAmount
}) {
  return new import_sdk21.Price(inputAmount.currency, outputAmount.currency, inputAmount.quotient, outputAmount.quotient);
}
function priceImpact({
  route,
  inputAmount,
  outputAmount
}) {
  return (0, import_sdk21.computePriceImpact)(getMidPrice(route), inputAmount, outputAmount);
}

// evm/route.ts
var Route = {
  midPrice: getMidPrice
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PairState,
  Route,
  RouteType,
  StableSwap,
  Trade,
  createStableSwapPair,
  getAllCommonPairs,
  getBestTradeExactIn,
  getBestTradeExactOut,
  isStableSwapPair
});

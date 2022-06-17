require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note noise equip just enrich suspect genuine'; 
let testAccounts = [
"0xd7ccedde3e370cbf2396e4c5dd65e01b5f28cd62df7f6ca3276a0c552acfe447",
"0x6b703de619a583dd270c8e518a6c464bf0e9b759b86efcc86772856e71a01831",
"0xe5da6ab317c7c8c94a2132c27e21b960035a1611c0b98214a06c94af5d76e4ee",
"0x5563658c095a2d13585538106e2236ab263d6e253cb51c961ac8d65aaa220e94",
"0x3f453b1f85c79e135cbc1f5d66b870d419f9dd5cc526562917712c1037c46c66",
"0x8758ec6109c1eecaecc6b222a4d482ed1f0fde7d1d4e7776aeabf7ce7cce70ee",
"0xd5273a51490d1dcc08b65092cc0776d534683ca116a835cee7cefffaebbbd301",
"0xac6605ced054f4d0babc34934152369b5e5a74e55ae7e0cafd1c86175f394f23",
"0x0e55ff62d9c83fdd4b6ea1b0916aa67ee5ccacd83d3f73f35c6468242e6969fc",
"0x3b83792fa5187ac51233c0249a1afaa223ef6f44bed8b26bb7c25d89c659916e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glide fruit sugar fire ridge remain purse harvest clog swift stool'; 
let testAccounts = [
"0x9f90463c51220fc45749cde62ac8f8be48a69f7f16b7bf51845df1c22167ac71",
"0x5974ace3695ebc2b6c1536db7388d0dd890541b31ea9558d0b491b635ff80033",
"0xea8d5a05ae62e69e8bcf6b1949e90e91f677687bc7f0f8e99bd5a33a01e6ad05",
"0x09a8780e16fa1c05ecb8016bf7d19803ee6de4ed4f355028608d3fd5daf26a8f",
"0x28cbd86be333683a1b9b05c5003e3efa007857f379e7642e0d418dbacc8645ce",
"0x2c5b939a1b93139846a5132df5f179ceb29fde53359d08cb04201de9c2db9837",
"0x9d34e0ae859bc29a55c97d1cfb39033f6dcb11ad538e7d0de688d2b014a50d69",
"0xa72ba65caddcf73d3859c97b419b26729725d3387f0974f3d306721cf00df957",
"0xfce34474337bfd740264515d9e847a37e0ef39916c5fc9d62e1dad12bb8e60cb",
"0x19e1fd273a34477339b345145e4a71471d9029de18081b970d94adb42d4afca3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


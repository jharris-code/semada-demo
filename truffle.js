/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

module.exports = {
  networks: {
    localhost: {
      host: "localhost", 
      port: 8546,
      network_id: "*" 
    },  
    ropsten: {
      host: "localhost",
      port: 8545,
      network_id: "3",
      from: "0x266d87471ca6b42e345eb9b51dafd57f25033db0",
    }
  }
};
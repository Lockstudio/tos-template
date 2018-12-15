module.exports = {
  networks: {
    // jungle: {
    //   chainId: 'e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473',
    //   httpEndpoint: 'http://jungle2.cryptolions.io:8888',
    //   keyPrefix: 'EOS',
    // },
    // mainnet: {
    //   chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
    //   httpEndpoint: 'https://mainnet.meet.one',
    //   keyPrefix: 'EOS',
    // },
    // kylin: {
    //   chainId: '5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191',
    //   httpEndpoint: 'http://api.kylin.eosbeijing.one:8880',
    //   keyPrefix: 'EOS',
    // },
    local: {
      keyPrefix: 'EOS',
      httpEndpoint: 'http://localhost:8888',
      timeout: 60
    }
  },
  deploy: {
    hello: {
      // jungle: 'typeoscript1', //replace contract account to your account
      // kylin: 'typeoscript1', //replace contract account to your account
      local: 'typeoscript1'
    },
  },
  keyProvider: [
    '5JnzYUtJMGhnC4kzU5RTQza8EbaX1LHm4CGXoM3ppm1RBunKUvN',//replace private key to your contract account
  ],
  defaultNetwork: 'local',
  eosio_cdt: false
};
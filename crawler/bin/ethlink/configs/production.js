module.exports = {
  WEB3_API_URL: 'https://goerli.infura.io/v3/c745d07314904c539668b553dbd6b670',
  AVERAGE_BLOCK_TIME: 15000,
  REQUIRED_CONFIRMATION: 3,
  CHAIN_ID: 9876,
  contracts: {
    CampainFactory: {
      CONTRACT_DATA: require('./contracts/CampaignFactory.json'), // CampainFactory
      // CONTRACT_ADDRESS: '0xDfc64cf5bdc9bD5D85F128AA560B38c7B03CAb23',
      CONTRACT_ADDRESS: '0x76b0a6d982440be0cea0f6e20399896050495b93',
      // FIRST_CRAWL_BLOCK: 6230111,
      FIRST_CRAWL_BLOCK: 4136587, // 4136587
      BLOCK_NUM_IN_ONE_GO: 10000,
      BREAK_TIME_AFTER_ONE_GO: 1000,
      NEED_NOTIFY_BY_WEBHOOK: true
    },
    Campaign: {
      CONTRACT_DATA: require('./contracts/Campaign.json'), // Campaign
      // CONTRACT_ADDRESS: '0x3be421042cae5bbf47bbfc1aa20f6adfccf8bb2d',
      CONTRACT_ADDRESS: '0x3BE421042CAe5BBf47BbfC1AA20F6ADFCcF8bB2D',
      FIRST_CRAWL_BLOCK: 4137094, // 4136885
      BLOCK_NUM_IN_ONE_GO: 10000,
      BREAK_TIME_AFTER_ONE_GO: 1000,
      NEED_NOTIFY_BY_WEBHOOK: true
    },
    ETHLink: {
      CONTRACT_DATA: require('./contracts/ETHLink.json'), // ETHLink
      CONTRACT_ADDRESS: '0xc26b4a3368cd3ff7977a21bc222c9319d01d9ba6',
      FIRST_CRAWL_BLOCK: 4130955, // Start Block: 4130955 / 4135356
      BLOCK_NUM_IN_ONE_GO: 10000,
      BREAK_TIME_AFTER_ONE_GO: 1000,
      NEED_NOTIFY_BY_WEBHOOK: true
    }
  },
};

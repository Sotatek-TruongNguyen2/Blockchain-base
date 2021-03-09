'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const host = process.env.APP_URL + '/'
const Webhook = use('App/Models/Webhook')
const Const = use('App/Common/Const');

class DatabaseSeeder {
  async run () {
    const webhooks = [
      {
        contract_name: Const.CONTRACTS.CAMPAIGN,
        type: 'Staked',
        url: 'webhook/staked',
      },
      {
        contract_name: Const.CONTRACTS.CAMPAIGN,
        type: 'UnstakedWithId',
        url: 'webhook/unstaked',
      },
      {
        contract_name: Const.CONTRACTS.CAMPAIGN,
        type: 'UnstakedAll',
        url: 'webhook/unstaked-all',
      },
      {
        contract_name: Const.CONTRACTS.CAMPAIGN,
        type: 'DistributeReward',
        url: 'webhook/distribute-reward',
      },
      {
        contract_name: Const.CONTRACTS.CAMPAIGN,
        type: 'WithdrawedReward',
        url: 'webhook/withdrawed-reward',
      },
    ];
    for (let i = 0; i < webhooks.length; i++) {
      let webhookObj = new Webhook();
      webhookObj.contract_name = webhooks[i].contract_name;
      webhookObj.type = webhooks[i].type;
      webhookObj.url = host + webhooks[i].url;
      await webhookObj.save();
    }
  }
}

module.exports = DatabaseSeeder

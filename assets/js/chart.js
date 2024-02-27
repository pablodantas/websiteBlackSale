var ENERGY_TOTAL = 9;
var energyCostTotal;
var EnergyCosts;
var energyKeys = {'Listing Wallet':1,'Listing':2,'Prize Portfolio':3,'Pre Sale':4, 'Pancakeswap':5}
var energyContributions = [
            ['Whitelist', 1],
            ['Liquidity', 1],
            ['Airdrop', 1],
            ['Pre Sale', 2],
            ['Burn', 4],
        ];
var chart = c3.generate({
      size: {
        height: 350,
        width: 810
    },
    bindto: '#energyAllocation',
    data: {
        columns: energyContributions,
        type : 'donut',
    },
    color: {
      pattern: ['#ffffffe0', '#3981a7', '#fcd535','#FF9A30','#b5b0a469']
    },
    donut: {
        label: {show: false},
    },
    legend: {
        position: 'right',
        item: {
          onclick: function () { return false; }
        }
    }
});

/* set a new value for a piece of the energy budget */



async function fetchStatsJSON() {
    const response = await fetch('upliftium.json');

    const stats = await response.json();

    return stats;

}


async function getStats(){

    statsArray = [];

    await fetchStatsJSON().then(stats => {

        statsArray = stats;


    });

    console.log(statsArray);

    
    const statsObject = {
       claimable:0,
       crystallized:0,
       issuedSupply:0,
       melted:0,
       nftCirculation:0,
       linkedAccounts:0,
       transactions:0,
       balanceCirculation:0,
       totalCirculation:0,
       pictureInstalls:0,
       portalInstalls:0,
       wallets:0
    };

    const stats = Object.create(statsObject);

    stats.claimable = statsArray.data.payload.claimable.toLocaleString();
    stats.crystallized = statsArray.data.payload.crystallized.toLocaleString();
    stats.issuedSupply = statsArray.data.payload. issuedSupply.toLocaleString();
    stats.melted = statsArray.data.payload.melted.toLocaleString();
    stats.nftCirculation = statsArray.data.payload.nftCirculation.toLocaleString();
    stats.linkedAccounts = statsArray.data.payload.numLinkedAccounts.toLocaleString();
    stats.transactions = statsArray.data.payload.numTransactions.toLocaleString();
    stats.balanceCirculation = statsArray.data.payload.onBalanceCirculation.toLocaleString();
    stats.totalCirculation = statsArray.data.payload.totalCirculation.toLocaleString();
    stats.pictureInstalls = statsArray.data.payload.transactions.byType[6].numTransactions.toLocaleString();
    stats.portalInstalls = statsArray.data.payload.transactions.byType[7].numTransactions.toLocaleString();
    stats.wallets = statsArray.data.payload.wallets.toLocaleString();

    let claimable = document.getElementById('claimable');
    let crystallized = document.getElementById('crystallized');
    let issuedSupply = document.getElementById('issuedSupply');
    let melted = document.getElementById('melted');
    let nftCirculation = document.getElementById('nftCirculation');
    let linkedAccounts = document.getElementById('linkedAccounts');
    let transactions = document.getElementById('transactions');
    let balanceCirculation = document.getElementById('balanceCirculation');
    let totalCirculation = document.getElementById('totalCirculation');
    let pictureInstalls = document.getElementById('pictureInstalls');
    let portalInstalls = document.getElementById('portalInstalls');
    let wallets = document.getElementById('wallets');




    claimable.innerHTML = stats.claimable;

    crystallized.innerHTML = stats.crystallized;
    issuedSupply.innerHTML = stats.issuedSupply;
    melted.innerHTML = stats.melted;
    nftCirculation.innerHTML = stats.nftCirculation;
    linkedAccounts.innerHTML = stats.linkedAccounts;
    transactions.innerHTML = stats.transactions;
    balanceCirculation.innerHTML = stats.balanceCirculation;
    totalCirculation.innerHTML = stats.totalCirculation;
    pictureInstalls.innerHTML = stats.pictureInstalls;
    portalInstalls.innerHTML = stats.portalInstalls;
    wallets.innerHTML= stats.wallets;


    console.log(stats);


}

getStats();


async function fetchMIOStatsJSON() {
    const response = await fetch('https://wax.api.atomicassets.io/atomicassets/v1/accounts?collection_name=upliftium.hi&schema_name=upliftium&page=1&limit=100&order=desc');

    const stats = await response.json();

    return stats;

}

async function fetchLiftiumStatsJSON() {
    const response = await fetch('https://www.api.bloks.io/wax/tokens?type=topHolders&chain=wax&contract=tokenizednft&symbol=LIFTIUM&limit=500');

    const stats = await response.json();

    return stats;

}

async function fetchStatsJSON() {
    const response = await fetch('upliftium.json');

    const stats = await response.json();

    return stats;

}


async function getStats(){

    statsArray = [];
    liftiumArray = [];
    mioArray = [];

    await fetchMIOStatsJSON().then(stats => {

        mioArray = stats;


    });

    await fetchStatsJSON().then(stats => {

        statsArray = stats;


    });
    
    await fetchLiftiumStatsJSON().then(stats => {

        liftiumArray = stats;


    });

    //console.log(liftiumArray);
    //console.log(liftiumArray[0][0] + ' ' + liftiumArray[0][1]);

    const liftiumHolderObject = {
        account:"",
        amount:0
    }

    const holderArray = [];
   
    liftiumArray.forEach((holder, index)=>{
        const tHolder = Object.create(liftiumHolderObject);

        tHolder.account = holder[0];
        tHolder.amount = Number(holder[1]).toFixed(2).toLocaleString();

        holderArray[index] = tHolder;

    });

    let liftium = document.getElementById('liftium');


    //console.log(holderArray);

    for(let i=0; i<20; i++){
       liftium.innerHTML += (i+1) + '. ' + holderArray[i].account + ' --- ' + holderArray[i].amount + '<br>'
    }




   const mioholderArray = [];

   let mioCount = 0;

   mioArray.data.forEach((holder)=>{
    if(holder.account != 'y3gnq.wam' &&holder.account != '1mil.lft.3'&&holder.account != 'upliftservic'){
    const tHolder = Object.create(liftiumHolderObject);

    tHolder.account = holder.account;
    tHolder.amount = holder.assets.toLocaleString();

    mioholderArray[mioCount] = tHolder;
    mioCount++;
    }

});


//console.log(mioholderArray);

 let mio = document.getElementById('mio');

 for(let i=0; i<20; i++){
    mio.innerHTML += (i+1) + '. ' + mioholderArray[i].account + ' --- ' + mioholderArray[i].amount + '<br>'
 }



    
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


    //console.log(stats);


}

getStats();

// creating array to store pottery to be sold.  Array will not be exported
let catalog = []

// defining a function that wil determine sellable pottery.  It has 1 parameter, the pottery 
// object created in the prior functions and it will assign a new property of price to the object 
// if the weight is greater than or equal to 6 the value is 40, if it weights less than 6
// it is valued at 20.  function is only to price the items if they are not cracked per the test


export const toSellOrNotToSell = (potteryObj) => {
    if (potteryObj.weight >= 6 && potteryObj.cracked === false) { 
        potteryObj.price = 40
    } else if (potteryObj.weight <6 && potteryObj.cracked === false) {
        potteryObj.price = 20
    }
    if (potteryObj.cracked === false) {
        catalog.push(potteryObj)
    }
    return potteryObj
}

export const usePottery = () => {
    const sellPottery = catalog
    return sellPottery
}

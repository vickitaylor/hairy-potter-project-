// defined a function that will fire the pottery.  it has 2 parameters, the pottery object 
// created in the pottery wheel function and the temperature the object was fired at.
// adding 2 new properties to the object fired and cracked both with boolean
// if the temp is 2200 or higher the pottery will crack 

export const firePottery= (potteryObj, temp) => {
    potteryObj.fired = true
    if (temp >= 2200) {
        potteryObj.cracked = true
    } else {
        potteryObj.cracked = false
    }

    return potteryObj
} 
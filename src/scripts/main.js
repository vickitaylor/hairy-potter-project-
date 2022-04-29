// Imports go first
// imported make pottery function 
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"



// Make 5 pieces of pottery at the wheel
const mug = makePottery("mug", 5, 10,)
const cup = makePottery("cup", 2, 8)
const plate = makePottery("plate", 5, 1)
const bowl = makePottery("bowl", 8, 4)
const vase = makePottery("vase", 3, 18)

console.log(mug, cup, plate, bowl, vase)

// Fire each piece of pottery in the kiln
const firedMug = firePottery(mug, 1800)
const firedCup = firePottery(cup, 2300)
const firedPlate = firePottery(plate, 2500)
const firedBowl = firePottery(bowl, 2100)
const firedVase = firePottery(vase, 2200)

console.log(firedMug, firedCup, firedPlate, firedBowl, firedVase )

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list




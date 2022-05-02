// defining a function to create a dynamic Html string
// function is only displaying sellable pottery items in the array
// used the function that imported the array in the html string function to pull the data

import { usePottery } from "./PotteryCatalog.js"

export const PotteryList = () => {
    let htmlString = ""
    for (const item of usePottery()) {
        htmlString += `<section class="pottery" id="pottery--${item.id}">
    <h2 class="pottery__shape">${item.shape}</h2>
    <div class="pottery__properties">Item weighs ${item.weight} grams and is ${item.height} cm in height</div>
    <div class="pottery__price">Price is $${item.price}</div>
</section>
`
    }
    return htmlString
} 

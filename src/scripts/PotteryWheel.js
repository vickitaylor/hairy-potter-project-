// defined a varaible to create a primary key
let primaryKey = 1

// defined a function to make a pottery object.  in the function a new object is created with 
// properties of id, shape, weight, and height.  and the primary key will increase by 1
// with every new object made
// function is being exported to the main.js module
export const makePottery = (shape, weight, height) => { 
    let pottery = { }
    pottery.id = primaryKey
    pottery.shape = shape,
    pottery.weight = weight, 
    pottery.height = height,

    primaryKey ++

    return pottery
}

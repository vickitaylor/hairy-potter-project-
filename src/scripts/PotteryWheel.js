let primaryKey = 1


export const makePottery = (shape, weight, height) => { 
    let pottery = { }
    pottery.id = primaryKey
    pottery.shape = shape,
    pottery.weight = weight, 
    pottery.height = height,

    primaryKey ++

    return pottery
}

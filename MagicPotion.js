function createMagicPotion(potions, target) {
    let possibilities= [];
    for (let i=0; i<potions.length; i++){
        for (let j=i+1; j<potions.length; j++){
            if (potions[i]+potions[j]===target){
                possibilities.push([i, j]);
            }
        }
    }
    let minimum=potions.length+2;
    let result;
    for (let i=0; i<possibilities.length; i++){
        if (possibilities[i][1]<minimum){
            minimum=possibilities[i][1];
            result=possibilities[i];
        }
    }
    return result
}

const potions = [1, 2, 3, 4]
const goal = 5

createMagicPotion(potions, goal) // [1, 2]
// también podría ser [0, 3] pero hay una combinación antes
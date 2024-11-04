function battleHorde(zombies, humans) {
    let result = 'x';
    let zombie = 0;
    let human = 0;
    for (let i = 0; i < zombies.length; i++) {
        const z = parseInt(zombies[i])+zombie;
        const h = parseInt(humans[i])+human;
        if (z > h) {
            zombie=z-h;
            human=0;
        } else if (z < h) {
            human=h-z;
            zombie=0;
        }else{
            zombie=0;
            human=0;
        }
    }
    if (zombie > human) {
        result = (zombie) + 'z';
    } else if (zombie < human) {
        result = human + 'h';
    }
    return result;
    
}

const zombies = '444';
const humans = '282';

const result = battleHorde(zombies, humans);  // -> "2h"

console.log(result);

// primera ronda: zombie 2 vs human 3 -> humano gana (+1)
// segunda ronda: zombie 4 vs human 3+1 -> empate
// tercera ronda: zombie 2 vs human 4 -> humano gana (+2)
// resultado: "2h"
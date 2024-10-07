// const add = (x, y) => x + y;
// const PI = 3.14;
// const square = x => x * x;
// module.exports.add = add;

import {franc} from 'franc';
import langs from 'langs';
import colors from 'colors';

const texto = franc(process.argv[2]);
if (texto == "und") {
    console.log("Não consegui identificar a sua lingua :(".red)
} else {
    console.log(`Meu melhor palpite é: ${langs.where(3, texto).name}`.green);
}
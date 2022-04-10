/* -------------------------------- example 2 ------------------------------- */
function logDecorator(f, print) {
    return function (x, y) {
        let res = f(x, y);
        print([x, y], res, 20);

        return res;
    }
}

let add = function (x, y) {
    return x + y
}

let print = function (arg, res, repeat = 10) {
    let line = '~'.repeat(repeat) + "\n";
    line += `x = ${arg[0]}, y = ${arg[1]}` + "\n";
    line += res + "\n";
    line += '~'.repeat(repeat) + "\n";
    console.log(line);
}

add = logDecorator(add, print);

// TODO: make console.log( add(2,3) ); output this
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// x = 2, y = 3
// 5
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
add(2, 3)

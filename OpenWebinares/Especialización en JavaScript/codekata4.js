let fruits = ["orange", "lemon", "grape"];
let myOptions = new Set(["watermelon", "banana"]);

for (let elem of fruits) {
    if (myOptions.has(elem)) {
        console.log(elem);
        break;
    } else {
        console.log(elem);
        continue;
    }
}
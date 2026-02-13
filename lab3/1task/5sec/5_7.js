// Task 1
function unique(arr) {
    return Array.from(new Set(arr));
}

// Task 2
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys);
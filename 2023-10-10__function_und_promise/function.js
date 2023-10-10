"use strict";
function f() {
    if (Math.random() - 0.5 < 0) {
        throw new Error("Fehler");
    }
}

for (let i = 0; i < 15; i++) {
    console.log(`I ist momentan ${i}`);
    try {
        f();
        console.log("erfolg");
    } catch (e) {
        console.log("fehler", e.message);
    }
}

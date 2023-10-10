console.log("loaded");
function successCB(par) {
    console.log(par, "success");
}
function failCB(par) {
    console.log(par, "FAIL");
}
x = fetch("http://cats-fact.herokuapp.com/facts").then(successCB);

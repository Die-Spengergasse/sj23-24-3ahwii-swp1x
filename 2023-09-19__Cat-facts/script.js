const URL = "https://cat-fact.herokuapp.com/facts/random?amount=";
const button = document.querySelector("button");
const numberInput = document.getElementById("amount");
const numberFailed = document.getElementById("failed");
const liste = document.getElementById("liste");

function fetchRandom() {
    const amount = numberInput.value;
    fetch(URL + amount)
        .then((res) => res.json())
        .then((data) => {
            let failed = 0;
            let valid = [];
            data.forEach((fact) => {
                console.log(fact);
                if (fact.status.verified != true) {
                    failed++;
                } else {
                    valid.push(fact);
                }
            });
            numberFailed.innerHTML = `Number of unverified: ${failed}`;
            liste.innerHTML = "";
            valid.forEach((fact) => {
                liste.innerHTML += `<li>${fact.text}</li>`;
            });
        });
}

button.addEventListener("click", fetchRandom);

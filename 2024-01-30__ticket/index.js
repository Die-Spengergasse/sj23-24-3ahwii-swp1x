class TicketAutomat {
    #einnahmenGesamt;
    #eingeworfen;
    #anzahlPersonen;
    #ziel;
    constructor(initialGeld) {
        this.einnahmenGesamt = initialGeld;
        this.#eingeworfen = 0;
        this.#ziel = undefined;
    }
    einwerfen(geld) {
        this.#eingeworfen += geld;
    }
    zielEinstellen(ziel) {
        const preis = zieleUndPreise[ziel];
        if (preis == undefined) {
            throw new Error('Dorthin fahre ich nicht');
        }
        this.#ziel = ziel;
    }
    set einnahmenGesamt(was) {
        this.#einnahmenGesamt = was;
    }
    get einnahmenGesamt() {
        return this.#einnahmenGesamt;
    }
    get eingeworfen() {
        return this.#eingeworfen;
    }
    get ziel() {
        return this.#ziel;
    }
    get gesamtPreis() {
        return zieleUndPreise[this.#ziel] * this.#anzahlPersonen;
    }
    anzahlEinstellen(wieviele) {
        if (wieviele < 1 || wieviele > 10) {
            throw new Error('falsche Anzahl Personnen');
        }
        this.#anzahlPersonen = wieviele;
    }
    ticketKaufen() {
        // wirft evtl. einen Fehler
        const ticket = new Ticket(
            this.#anzahlPersonen,
            this.#ziel,
            this.#eingeworfen
        );
        this.#einnahmenGesamt += ticket.summe;
        return ticket;
    }
}
const zieleUndPreise = {
    Salzburg: 30,
    Innsbruck: 45,
    Klagenfurt: 40,
    Graz: 25,
    Bregenz: 60,
};
class Ticket {
    #anzahlPersonen;
    #ziel;
    #gegeben;
    #summe;
    constructor(anzahl, ziel, gegeben) {
        this.#anzahlPersonen = anzahl;
        this.#ziel = ziel;
        this.#gegeben = gegeben;
        this.#summe = zieleUndPreise[this.#ziel] * this.#anzahlPersonen;
        if (this.#gegeben < this.#summe) {
            throw new Error('nicht genug gegeben');
        }
    }
    get summe() {
        return this.#summe;
    }
    toString() {
        return `===============================
=== Fahrkarte nach ${this.#ziel} ===
===============================
Einzelpreis: € ${zieleUndPreise[this.#ziel]}.-
Anzahl der Fahrgäste: ${this.#anzahlPersonen}
===============================
Summe: € ${this.#summe}.-
===============================
gegeben: € ${this.#gegeben}.-
Restgeld: € ${this.#gegeben - this.#summe},-
===============================`;
    }
}
function ticketKaufenClickHandler() {
    console.log('ticketKaufenClickHandler');
    try {
        const ticket = automat.ticketKaufen();
        ticketAusgabeTextarea.textContent = ticket.toString();
    } catch (error) {
        console.error(error.message);
        ticketAusgabeTextarea.textContent = `Fehler: ${error.message}`;
    }
    updateUI();
}
automat = new TicketAutomat(150);
automat.anzahlEinstellen(2);
automat.zielEinstellen('Graz');
const einwerfenInput = document.getElementById('einwerfenBetrag');
const einwerfenButton = document.getElementById('einwerfenButton');
einwerfenButton.addEventListener('click', () => {
    try {
        automat.einwerfen(parseFloat(einwerfenInput.value));
        guthabenSpan.textContent = automat.eingeworfen;
    } catch (error) {
        console.error(error.message);
    }
});
const zielSelect = document.getElementById('ziel');
const anzahlPersonenInput = document.getElementById('anzahlPersonen');
const fahrpreisSpan = document.getElementById('fahrpreis');
const guthabenSpan = document.getElementById('guthaben');
const ticketAusgabeTextarea = document.getElementById('ticketAusgabe');
const einnahmenSpan = document.getElementById('einnahmen');
function updateUI() {
    automat.zielEinstellen(zielSelect.value);
    automat.anzahlEinstellen(anzahlPersonenInput.value);
    fahrpreisSpan.textContent = automat.gesamtPreis;
    einnahmenSpan.textContent = automat.einnahmenGesamt;
}
zielSelect.addEventListener('change', updateUI);
anzahlPersonenInput.addEventListener('input', updateUI);
updateUI();

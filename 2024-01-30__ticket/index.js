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
    anzahlEinstellen(wieviele) {
        if (wieviele < 1 || wieviele > 10) {
            throw new Error('falsche Anzahl Personnen');
        }
        this.#anzahlPersonen = wieviele;
    }
    ticketKaufen() {
        // TODO
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
    Salzbug: 30,
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

automat = new TicketAutomat(150);
automat.anzahlEinstellen(2);
automat.zielEinstellen('Graz');

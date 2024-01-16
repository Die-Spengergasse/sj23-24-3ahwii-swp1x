// So liegt der Normalwert bei Männern laut Deutscher Gesellschaft für Ernährung
// im Intervall von 20 bis 25 kg / m², während er sich
// bei Frauen im Intervall von 19 bis 24 kg / m² befindet.

class Person {
    /* Gewicht in kg, Größe in m */
    #name;
    #gewicht;
    #groesse;
    constructor(namePar, gewichtPar, groessePar) {
        this.name = namePar;
        this.gewicht = gewichtPar;
        this.groesse = groessePar;
    }

    set name(namePar) {
        if (typeof namePar !== 'string') {
            throw new Error('ungültiger Name');
        }
        if (namePar.length < 3) {
            throw new Error('Name zu kurz');
        }
        this.#name = namePar;
    }

    set gewicht(gewichtPar) {
        // gewicht in kg
        if (gewichtPar < 10 || gewichtPar > 500) {
            throw new Error('ungültiges Gewicht');
        }
        this.#gewicht = gewichtPar;
    }
    get gewicht() {
        return this.#gewicht;
    }
    set groesse(groessePar) {
        if (groessePar < 0.5 || groessePar > 3.0) {
            throw new Error('ungültige Groesse');
        }
        this.#groesse = groessePar;
    }

    get bmi() {
        const nmbr = this.#gewicht / (this.#groesse * this.#groesse);
        return Math.round(nmbr * 10) / 10;
    }
    toString() {
        return (
            'Name: ' +
            this.#name +
            ' Gewicht: ' +
            this.#gewicht +
            ' Größe: ' +
            this.#groesse +
            ' BMI: ' +
            this.bmi
        );
    }
}
a = [
    ['Peta', 90, 1.7, 'w'],
    ['Lisa', 50, 3.5, 'w'], //Wie schaffe ich es, dass hier ein Fehler geworfen wird?
    ['Roland', 70, 1.7, 'w'],
    ['Hans', 80, 1.8, 'w'],
];

b = a.map((arr) => {
    try {
        return new Person(...arr);
    } catch (e) {
        console.log(e.message);
        return null;
    }
}); // jetzt ist b ein Personen-Array
b.forEach((p) => console.log(p + ''));

class Person {
    /* Gewicht in kg, Größe in m */
    name;
    #gewicht;
    groesse;
    constructor(name, gewichtPar, groesse) {
        this.name = name;
        this.gewicht = gewichtPar;
        this.groesse = groesse;
    }
    get bmi() {}
    set gewicht(gewichtPar) {
        // gewicht in kg
        if (gewichtPar < 1 || gewichtPar > 500) {
            throw new Error('ungültiges Gewicht');
        }
        this.#gewicht = gewichtPar;
    }
    get gewicht() {
        return this.#gewicht;
    }
    toString() {
        return `${this.name} wiegt ${this.gewicht} kg und ist ${this.groesse} m groß`;
    }
}
p = new Person('Hans', 80, 1.8);
console.log(p.gewicht);

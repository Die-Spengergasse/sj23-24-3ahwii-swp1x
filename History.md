# Historie zum Unterricht - revers chronologisch

Hier ist der Volltext, kopiert aus README.md

kurz und übersichtlich im Lehrstoff.md

## SÜ + HÜ vom 16.1.

-   Klasse erweitern auf Geschlecht
-   Unter / Normal / Übergewicht ausgeben
-   toString Methode mit backticks
-   Eingabemaske mit "berechnen" button

## HÜ vom 9.1.

-   Person Klasse fertig (set groesse, get bmi)
-   groesse: min: 50cm, max 300cm!
-   bmi auf 1 Nachkommastelle runden
-   3 Tests
-   Teste auch, ob exception geworfen wurde!

## 9. Jänner

-   wh funktionen
-   class!
-   person - bmi

## 19. Dez GRG krank, entfallen

## 12. Dez Korrektur PLF

-   output.publish
-   Exception beim Laden des scripts (ceyda)
-   Dreieckstausch
-   event listener debuggen
-   getinput -- ideen dazu! (eval, value, element)
-   nochmal debug: anastasia: slice!
-   camelcase!

## 5. Dez. PLF2

Classroom: <https://classroom.github.com/a/cW3-DK3E>

## 28. Nov

Vorbereitung Test und HÜ

<https://classroom.github.com/a/0FNpG41m>

(Arrays 2nd)

## 21. Nov:

<https://classroom.github.com/a/1BDdh1KI>

-   indexof (einmal normal, einmal mit nicht existierendem)
-   push /unshift arr.push(7)
-   pop /shift
-   includes
-   slice
-   splice
-   of / bzw. in
-   map funktion, die andere werte liefert, zB "Hallo ${w}" -> neues array
-   filter funktion: boolean
-   string - split / join
-   some (func: boolean)
-   reverse
-   reduce
-   a = [...arr]

-   Ordnung machen in den Repos

## HÜ vom 14.11.

1. javascript zum ein/ausklappen eigenständig nachbauen (Eigenverantwortung!)
2. fehlenden footer nachbauen
3. Die Paragraphen (`<p>`) in verkehrter Reihenfolge anzeigen! Tipp:
   `removeChild` sowie `appendChild`
4. w3c validator verwenden!
5. als formatter für html "Default Language Features" einstellen

## INhalte 14.11.

-   orf seite html aufbau (struktur) HÜ vom 7.11.
-   w3c validator
-   css selektoren recap / css diner
-   vscode workspaces

## HÜ vom 17.10. (wichtig für Test)

-   css grid garden <https://cssgridgarden.com/>
-   selbst einen simplen grid mit media-queries basteln

## HÜ v. 10.10.

### Verwende Promises auf einer Website

Erstelle dabei mithilfe der Zufallsfunktion Promises die manchmal schiefgehen
und manchmal nicht.

Die Ereignisse sollen durch botton-click ausgelöst werden

Das Ergebnis wird analog wie bei den cat-fats in der website ausgegeben.

Im Fehlerfall möge die Ausgabe einen roten Hintergrund bekommen!

# PLF Termine sind im Untis

## function

-   Befehl zum Ausführen
-   function hat einen Namen damit man den code öfter ausführen kann!
-   bekommt Parameter

```js
function f (parameter, ... ) {
   // Aktion mit parameter(n) ...
   throw new Error ("Fehler!");
   return ergebnis;
}

try {
  // irgendwas wo dann throw passiert
} catch (error) {
  // Abhandlung des Problems, z.B.:
  console.log(error);
}
```

![siehe tafelbild](functions-tafel.jpg)

## HÜ 2023-10-03

-   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
    studieren!
-   Schreibe ein kleines Javascript Programm welches eine Funktion enthält, die
    bei bestimmten Parametern einen Error wirft. Rufe diese Funktion innerhalb
    einer Schleife 10-20 mal auf, so daß manchmal eine Exception geworfen wird
    und manchmal nicht. Dein Programm soll NIE selber eine Exception werfen!

## 2023-09-26

Flexbox Froggy. Mache die Levels alle durch und lade in Dein Repo einen
Screenshot vom höchsten Level durch, den Du geschafft hast!

## 2023-09-19

Auf github public apis ein Api wählen (ohne auth, ohne cors) und dieses so wie
im Video gesehen auf eigene Webseite implementieren.

Video: https://youtu.be/f4D50VnO_Gw

Im VSCode: REst-Client Plugin verwenden!

Api doc:
https://github.com/alexwohlbruck/cat-facts/blob/master/docs/endpoints/facts.md

-   wie baue ich das Ergebnis vom api in meine website ein?
-   cors (siehe eigenes File)

## 2023-09-12

Hausübung: rechts neben dem clickme button ein textinputfield anlegen, dessen
text bei Klick als listeneintrag an die Liste angehängt wird.

## 2023-09-05

Repositories zum Laufen kriegen!

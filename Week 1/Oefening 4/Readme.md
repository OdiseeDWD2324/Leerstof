# Oefening 4

In deze oefeningen werk je rond een fantasie-klas.

## Deel 1

- Maak in het script een array aan die je **klas** noemt.
- Maak een array die je **lettergrepen** noemt en die je vult met 26 zelf te verzinnen strings die 2 tot 3 letters bevatten.
  - Als de string 3 letters lang is, doe je dat in het volgende formaat, waarbij 'k' een klinker is en 'm' een medeklinker
    - kmk
    - mkm
  - Als de string 2 letters lang is, is 1 letter een klinker en 1 een medeklinker
- Voeg 22 objecten toe aan **klas**
  - Ieder object heeft de eigenschappen **nummer** en **naam**
  - **nummer** heeft de vorm **NR-xx** waarbij xx de volgorde nummer is (begin bij 1)
  - **naam** stel je willekeurig samen op basis van lettergrepen
    - 2 lettergrepen voor de voornaam + een spatie + 3 lettergrepen voor de familienaam
- Als je alle studenten hebt gegenereerd, toon je de **klas** in de console

## Deel 2

Je bouwt verder op deel 1

- Maak een functie **maakKlas** die een parameter **aantal** heeft
  - maak een nieuw klas object aan.
  - genereer **aantal** studenten met de logica van de vorige oefening
  - de functie returnt op het einde het nieuwe klas object
- Maak een variabele **klasAvond** aan, met 10 studenten
- Maak een variabele **klasDag** aan, met 20 studenten
- Toon zowel **klasAvond** als **klasDag** met de standaard console logger

## Deel 3

Je bouwt verder op deel 2

- Pas de functie **maakKlas** aan zodat je een extra parameter **moment** toevoegt. De functie zal nu aan iedere student naast nummer en naam ook **moment** toevoegen.
  - Pas de oproepen maakKlas() aan zodat je voor de klasAvond de parameter 'avond' meegeeft en voor klasDag 'dag'
- Maak een functie **toonStudent** die je een parameter **nummer** en **klas** geeft
  - **toonStudent** toont in de console de gegevens van de student met het gegeven **nummer** in de gegeven **klas**
- Maak een functie **kiesStudent** waaraan je een parameter **klas** toewijst. Deze functie geeft een willekeurige nummer terug, gebaseerd op de lengte van de **klas** die je aan **kiesStudent** meegeeft.
- Maak een functie **toonWillekeurigeStudent** waaraan je als parameter een **klas** meegeeft.
  - **toonWillekeurigeStudent** zal toonstudent aanroepen met het resultaat van de functie kiesStudent
- Roep 10 keer de functie **toonWillekeurigeStudent** aan op beide klassen die je aanmaakte (klasAvond
  en klasDag)

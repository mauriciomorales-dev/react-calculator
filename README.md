# React TypeScript Calculator

### [ Clic to see the demo]

## Characteristics:

- React 17.0.2
- Typescript.
- No Switch, IF, ELSE.
- Regex

#### ![](React-typescript-calculator.png)

## How To Use:

Step 1:

```sh
git clone https://github.com/mauriciomorales-dev/react-calculator.git
```

Step 2:

```sh
npm install
```

Step 3:

```sh
npm start
```

## BDD

```
Background:
    Given Display vacío

    Scenario:
        When Usuario presiona un numero
        Then se concatena el VALOR con el valor en el DISPLAY.

    Scenario:
        When Usuario presiona un "-" (menos).
        Then se concatena el VALOR con el valor en el DISPLAY.

    Scenario:
        When Usuario presiona un operador matemático (/,\*,-,+).
        Then se IGNORA la acción.

    Scenario:
        When Usuario presiona un "="
        Then se IGNORA la acción.

    Scenario:
        When Usuario presiona un "AC"
        Then se IGNORA la acción.
```

```
Background:
    Given Display tiene un valor finalizado en Numero.

    Scenario:
        When Usuario presiona un numero
        Then se concatena el VALOR con el valor en el DISPLAY.

    Scenario:
        When Usuario presiona un "-" (menos).
        Then se concatena el VALOR con el valor en el DISPLAY.

    Scenario:
        When Usuario presiona un operador matemático (/,\*,-,+).
        Then se concatena el VALOR con el valor en el DISPLAY.

    Scenario:
        When Usuario presiona un "="
        Then se EJECUTA el CALCULO.

    Scenario:
        When Usuario presiona un "AC"
        Then se LIMPIAN todos los valores.
```

```
Background:
    Display finalizado en operador matemático (/,\*,-,+)

    Scenario:
        When Usuario presiona un numero
        Then se concatena el VALOR con el valor en el DISPLAY.

    Scenario:
        When Usuario presiona un "-" (menos).
        Then se IGNORA la acción.

    Scenario:
        When Usuario presiona un operador matemático (/,\*,-,+).
        Then se IGNORA la acción.

    Scenario:
        When Usuario presiona un "="
        Then se IGNORA la acción.

    Scenario:
        When Usuario presiona un "AC"
        Then se LIMPIAN todos los valores.


```

```
Background:
    Display finalizado en operador matemático (/,\*,-,+)

    Scenario:
        When Usuario presiona un numero
        Then se concatena el VALOR con el valor en el DISPLAY.

    Scenario:
        When Usuario presiona un "-" (menos).
        Then se IGNORA la acción.

    Scenario:
        When Usuario presiona un operador matemático (/,\*,-,+).
        Then se IGNORA la acción.

    Scenario:
        When Usuario presiona un "="
        Then se IGNORA la acción.

    Scenario:
        When Usuario presiona un "AC"
        Then se LIMPIAN todos los valores.


```

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[ clic to see the demo]: https://w-react-calculator.vercel.app/

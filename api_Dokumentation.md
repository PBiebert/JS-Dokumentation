# Dokumentation: Promises und async/await in JavaScript

## Übersicht
Diese Mitschrift behandelt die Verwendung von Promises und async/await in JavaScript. Sie zeigt, wie man asynchrone Abläufe steuert und Fehlerbehandlung implementiert.

---

## 1. Promise erstellen

```js
function getPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (prommisError) {
        reject("hat nicht geklappt");
      } else {
        resolve("hat geklappt");
      }
    }, 300);
  });
}
```

- **getPromise** gibt ein Promise zurück, das nach 300ms entweder aufgelöst (`resolve`) oder abgelehnt (`reject`) wird.
- Die Variable `prommisError` steuert, ob das Promise erfolgreich ist oder einen Fehler auslöst.

---

## 2. Promise verwenden mit async/await

```js
async function usePromise() {
  try {
    await getPromise();
    console.log("klappt");
  } catch (error) {
    console.error(error);
  }
  console.log("ende");
}
```

- Mit `async` und `await` kann man Promises wie synchronen Code behandeln.
- Fehler werden mit `try...catch` abgefangen.
- Nach Abschluss wird immer "ende" ausgegeben, egal ob erfolgreich oder mit Fehler.

---

## 3. Zusammenfassung
- Promises sind wichtig für asynchrone Abläufe in JavaScript.
- Mit `async/await` wird der Code übersichtlicher und Fehler lassen sich einfach behandeln.
- Die Fehlerbehandlung erfolgt über `try...catch`.

---

**Tipp:**
- Setze `prommisError = false;` um den Erfolgsfall zu testen.
- Setze `prommisError = true;` um die Fehlerbehandlung zu testen.

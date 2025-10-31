---
# Was ist ein eigenes Promise und wofür braucht man das?

Ein eigenes Promise erstellst du, wenn du eine asynchrone Operation hast, die nicht schon von Haus aus ein Promise zurückgibt (wie z.B. fetch). Das ist oft bei eigenen zeitverzögerten Abläufen, Events oder älteren Callback-Funktionen der Fall.

**Wofür verwendet man eigene Promises?**
- Um eigene asynchrone Abläufe zu kapseln und kontrolliert auf Erfolg oder Fehler zu reagieren.
- Um alte Callback-APIs in moderne Promise-APIs umzuwandeln.
- Um z.B. Wartezeiten, Animationen, oder komplexe Logik asynchron zu steuern.

**Beispiel:**
# Asynchrone Programmierung, Promises & fetch
---

## 1. Was bedeutet asynchron?

Asynchrone Operationen laufen im Hintergrund ab, ohne den Haupt-Thread zu blockieren. Das ist wichtig, wenn du z.B. auf Daten aus dem Internet wartest.

---

## 2. Was ist ein Promise?

Ein **Promise** ist ein Objekt, das einen zukünftigen Wert repräsentiert. Es hat drei Zustände:

- _pending_ (läuft noch)
- _fulfilled_ (erfolgreich)
- _rejected_ (Fehler)

---

## 3. Wie funktionieren `resolve` und `reject` bei Promises?

Wenn du ein eigenes Promise erstellst, bekommst du zwei Funktionen: `resolve` und `reject`.

- Mit `resolve(wert)` sagst du: Das Promise ist erfolgreich abgeschlossen und liefert `wert` zurück.
- Mit `reject(fehlermeldung)` sagst du: Das Promise ist fehlgeschlagen und gibt einen Fehler zurück.

**Beispiel:**

```js
function meinPromise() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Erfolg!");
    } else {
      reject("Fehler!");
    }
  });
}

meinPromise()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

---

## 4. Die fetch-API

`fetch` ist die Standardmethode, um HTTP-Anfragen im Browser zu machen. Sie gibt immer ein Promise zurück.

**Beispiel:**

```js
fetch("datei.json")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

---

## 5. Was ist ein eigenes Promise und wofür braucht man das?

Ein eigenes Promise erstellst du, wenn du eine asynchrone Operation hast, die nicht schon von Haus aus ein Promise zurückgibt (wie z.B. fetch). Das ist oft bei eigenen zeitverzögerten Abläufen, Events oder älteren Callback-Funktionen der Fall.

**Wofür verwendet man eigene Promises?**

- Um eigene asynchrone Abläufe zu kapseln und kontrolliert auf Erfolg oder Fehler zu reagieren.
- Um alte Callback-APIs in moderne Promise-APIs umzuwandeln.
- Um z.B. Wartezeiten, Animationen, oder komplexe Logik asynchron zu steuern.

**Beispiel:**

```js
function warte(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fertig gewartet!");
    }, ms);
  });
}

// Anwendung:
warte(1000).then((text) => console.log(text)); // Gibt nach 1 Sekunde "Fertig gewartet!" aus
```

Du kannst also mit eigenen Promises alles, was asynchron ist, in eine moderne, einfach zu verwendende Form bringen.

---

## 6. async & await

Mit `async` markierst du eine Funktion als asynchron. Mit `await` wartest du auf die Auflösung eines Promises, ohne den Code zu blockieren.

**Beispiel:**

```js
async function ladeDaten() {
  let response = await fetch("datei.json");
  let daten = await response.json();
  console.log(daten);
}
```

---

## 7. Fehlerbehandlung

Fehler bei asynchronen Operationen solltest du immer abfangen. Das geht mit `.catch()` oder – bei `async/await` – mit `try...catch`:

**Beispiel:**

```js
async function ladeDaten() {
  try {
    let response = await fetch("datei.json");
    if (!response.ok) throw new Error("Fehler beim Laden!");
    let daten = await response.json();
    console.log(daten);
  } catch (error) {
    console.error("Fehler:", error);
  }
}
```

---

## 8. Typische Anwendungsbeispiele

### JSON laden

```js
async function fetchDataJson() {
  let reponse = await fetch("db.json");
  let responseAsJson = await reponse.json();
  console.log(reponse);
  console.log(responseAsJson);
}
```

### Text laden

```js
async function fetchDataText() {
  let reponse = await fetch("h1.txt");
  let responseAsText = await reponse.text();
  document.getElementById("content").innerHTML = responseAsText;
}
```

### POST-Request

```js
async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: JSON.stringify(data),
  });
  return response.json();
}
```

### Eigenes Promise

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

### Promise mit async/await nutzen

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

---

## 9. Zusammenfassung

- Asynchrone Operationen blockieren den Code nicht.
- Promises sind die Grundlage für moderne asynchrone Programmierung.
- fetch gibt ein Promise zurück.
- Mit async/await kannst du Promises einfach nutzen.
- Fehlerbehandlung ist wichtig!
  console.error(error);
  }
  console.log("ende");
  }

```

---

## Zusammenfassung

- Asynchrone Operationen blockieren den Code nicht.
- Promises sind die Grundlage für moderne asynchrone Programmierung.
- fetch gibt ein Promise zurück.
- Mit async/await kannst du Promises einfach nutzen.
- Fehlerbehandlung ist wichtig!
```

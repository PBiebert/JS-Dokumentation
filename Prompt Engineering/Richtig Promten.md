topp:
bsp:

# Richtig prompten – Grundlagen des Prompt Engineerings

Prompt Engineering ist die Kunst, KI-Modelle wie ChatGPT, GPT-4 oder andere Sprachmodelle gezielt und effektiv zu steuern. Ein guter Prompt (Eingabetext) entscheidet über die Qualität und Relevanz der KI-Antworten.

## 1. Was ist ein Prompt?

Ein Prompt ist die Eingabe, die du einem KI-Modell gibst – also die Frage, Aufgabe oder Anweisung. Die Formulierung bestimmt, wie die KI antwortet.

**Beispiel:**

- Prompt: „Erkläre mir, wie ein neuronales Netz funktioniert.“
- Antwort: Die KI gibt eine Erklärung zum Thema.

## 2. Die 4 W-Fragen für gute Prompts

1. **Was ist das Thema?**

   - Sage klar, worum es geht. Je konkreter das Thema, desto besser die Antwort.
   - Vermeide zu allgemeine oder einwortige Themen.

2. **Was soll die KI tun?**

   - Formuliere das Ziel klar und nutze eindeutige Verben.
   - Gib der KI möglichst eine Aufgabe pro Prompt.

3. **Wie soll die Antwort aussehen?**

   - Gib Format und Umfang vor (z.B. „max. 3 Stichpunkte“, „nur den Code, ohne Kommentare“).
   - Begrenze die Länge und nutze Formatvorgaben für bessere Verständlichkeit.

4. **Welche Rolle habe ich und die KI?**
   - Definiere Rollen, z.B. „Du bist Deutschlehrer, ich bin Schüler“.
   - Rollen beeinflussen Ton, Tiefe und Wortwahl der Antwort.

## 3. Weitere Tipps für effektives Prompten

1. **Was soll nicht passieren?**

   - Schließe bestimmte Inhalte oder Stile aus (z.B. „keine Zusammenfassung, nur Verbesserungsvorschläge“).
   - Setze klare Grenzen, um unnötige oder unpassende Antworten zu vermeiden.

2. **Gib der KI Beispiele, wenn möglich**

   - Zeige, wie die Antwort aussehen soll (z.B. Steckbrief, Funktionsaufbau).
   - Beispiele dienen als Vorlage und helfen der KI, deinen Stil zu erkennen.

3. **Benenne Prompt-Typen (Meta-Strategie)**
   - Sag der KI, in welchem Modus sie antworten soll (z.B. „Rollenspiel“, „Kreativprompt“, „Chain-of-Thought“).
   - Meta-Angaben helfen der KI, die Aufgabe besser zu verstehen.

## 4. Fortgeschrittene Techniken

- **Chain-of-Thought:** Bitte die KI, ihre Gedanken Schritt für Schritt zu erklären.
- **Few-Shot Prompting:** Gib der KI Beispiele, wie die Antwort aussehen soll.
- **Zero-Shot Prompting:** Die KI bekommt nur die Aufgabe, ohne Beispiele.
- **Rollen und Stil:** Gib der KI eine Rolle oder einen Schreibstil vor (z.B. „Du bist ein Experte für Datenschutz“).

## 5. Zusammenfassung

Gutes Prompt Engineering ist der Schlüssel zu hilfreichen, präzisen und kreativen KI-Antworten. Je klarer und strukturierter dein Prompt, desto besser das Ergebnis.

## 6. Praktische Prompt-Techniken

Hier findest du bewährte Techniken, um KI-Modelle gezielt zu steuern und bessere Ergebnisse zu erzielen:

1. **Role Prompt**

   - Die KI schlüpft in eine bestimmte Rolle (z.B. Lehrer, Anfänger, Experte). Das verändert Ton, Tiefe und Perspektive der Antwort.
   - Tipp: Rolle + Aufgabe = mehr Kontrolle. Sag, wie anfängerfreundlich oder detailliert die Antwort sein soll. Beim Coden hilft ein Perspektivwechsel beim Debuggen.

2. **ELIF – Explain Like I'm Five**

   - Bitte die KI, etwas so zu erklären, dass es ein 5-jähriges Kind versteht. Die Antwort wird einfach, bildhaft und ohne Fremdwörter.
   - Tipp: Lass dir technische Begriffe in Bildern oder Alltagsgesprächen erklären. Auch für Fortgeschrittene nützlich!

3. **Pros & Cons**

   - Die KI soll Vor- und Nachteile abwägen oder eine bewusste Bewertung treffen. Hilft, Argumente zu sammeln oder Themen zu reflektieren.
   - Tipp: Die KI bewertet nicht objektiv, sondern zeigt die wahrscheinlichsten Argumente. Beim Debugging: „Was sind mögliche Risiken bei dieser Code-Struktur?“

4. **Gegenfragen erzwingen**

   - Bitte die KI, dir erst Rückfragen zu stellen, bevor sie antwortet. So wird die Anfrage klarer und das Ergebnis besser.
   - Tipp: Spart Zeit und Fehlschläge beim Coden. Auch als Meta-Technik nützlich.

5. **Chain of Thought**

   - Die KI soll Schritt für Schritt denken und erklären, wie ein Mensch beim Nachdenken. Gut bei komplexen Aufgaben, beim Coden super zum Debuggen oder Erklären.
   - Tipp: Nutze das „Weiter“-Signal, um die KI zum nächsten Schritt zu bringen.

6. **Reduktive Prompts**
   - Sag der KI, sie soll etwas kurz und knapp zusammenfassen. Ziel: Weniger Text, mehr Klarheit.
   - Tipp: Kommentarlänge begrenzen, ideal fürs Coden, wenn es um die Grundidee geht. Auch als Einstieg nützlich.

## 7. Die Wahrheit über KI: Bias und Iteration

### Was ist ein Bias?

Ein Bias ist eine Verzerrung, eine einseitige Sichtweise oder fehlende Neutralität. Auch KI kann Bias haben, weil sie aus Daten lernt, die von Menschen stammen.

### KI und Bias

- Künstliche Intelligenz lernt aus den Daten, die wir ihr geben und mit denen wir sie trainieren.
- Diese Daten sind oft nicht neutral – die KI bewertet nicht, sondern wiederholt, was in den Trainingsdaten häufig vorkommt.
- Das kann zu diskriminierenden oder einseitigen Ergebnissen führen.

**Praxis-Tipp:**
Hinterfrage KI-Antworten kritisch, besonders bei sensiblen Themen. Nutze verschiedene Modelle und Ansätze, um Bias zu erkennen.

---

## 8. Iteration: Der Prompt-Zyklus

Gutes Prompt Engineering ist ein iterativer Prozess:

1. Prompt gestalten
2. KI generiert eine Antwort
3. Mensch überprüft und gibt Feedback

**Tipp:**

- Wenn du nach 3 Runden immer noch unzufrieden bist, starte neu.
- Setze klare Vorgaben für jede neue Runde.
- Gib präzises Feedback, z.B. zu Code oder Text.
- Die Verifizierung durch den Menschen ist der Schritt, den du am besten optimieren kannst.

---

## 9. Weitere Tipps für den Umgang mit KI

- Halte das Context Window sinnvoll klein – z.B. Antworten in max. 3 Stichpunkten.
- Fordere nur den Code, ohne Kommentare und Erklärungen, wenn du Klarheit willst.
- Schreibe Code nicht zu defensiv (weniger if-Blöcke).
- Nutze verschiedene KI-Modelle – Herangehensweise und Antworten unterscheiden sich.
- Halte die Komplexität klein.
- Hinterfrage den KI-Output, besonders wenn du ihn schon einmal anders bekommen hast.

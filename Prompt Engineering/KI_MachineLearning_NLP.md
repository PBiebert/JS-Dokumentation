# Wie funktioniert KI? – Machine Learning & NLP

## 1. Grundlagen: Algorithmus und Machine Learning

### Was ist ein Algorithmus?

Ein Algorithmus ist eine endliche, eindeutig definierte Abfolge von Anweisungen, mit der ein Problem Schritt für Schritt gelöst wird.

**Wichtige Eigenschaften:**

- Endlich: Der Algorithmus kommt irgendwann zum Ende.
- Eindeutig: Jeder Schritt ist klar definiert.
- Deterministisch: Die gleiche Eingabe führt immer zur gleichen Ausgabe.

**Grenzen klassischer Algorithmen:**

- Erkennen keine neuen Muster von selbst
- Passen sich nicht an neue Daten an
- Können nicht verallgemeinern

### Was ist Machine Learning?

Machine Learning (ML) ist ein Ansatz, bei dem Computer aus Beispielen lernen, Muster erkennen und sich an neue Daten anpassen können. ML-Modelle werden nicht fest programmiert, sondern durch Training mit Daten „angelernt“.

**Vorteile von Machine Learning:**

- Modelle können ständig weiter verbessert werden
- Es werden Muster erkannt, keine festen Regeln
- Ergebnisse basieren auf Wahrscheinlichkeiten und können variieren

**Grundprinzip:**

1. Viele Daten (Beispiele für zu lösende Probleme)
2. Lernalgorithmus (analysiert Daten, erkennt und speichert Muster)
3. Modell (trifft Entscheidungen für neue, unbekannte Daten)

**Zusammengefasst:**

- Erkennt Muster (Patterns) und klassifiziert Daten
- Lernt aus Beispielen
- Kann verallgemeinern
- Braucht viele hochwertige Daten und versteht Inhalte nicht wie ein Mensch

## 2. Lernarten im Machine Learning

### Überwachtes Lernen (Supervised Learning)

Das Modell lernt anhand von Daten, die mit Labels (richtigen Antworten) versehen sind.
**Praxisbeispiele:** Bilderkennung, medizinische Diagnosen

### Unüberwachtes Lernen (Unsupervised Learning)

Das Modell erhält Daten ohne Labels und sucht selbstständig nach Mustern oder Gruppen.
**Praxisbeispiele:** Zielgruppen-Clustering, Anomalie-Erkennung (z.B. Kreditkartenbetrug)

### Bestärkendes Lernen (Reinforcement Learning)

Das Modell lernt durch Belohnung oder Bestrafung, ähnlich wie ein Spiel.
**Praxisbeispiele:** Robotik, Empfehlungssysteme (z.B. Netflix)

### Selbstüberwachtes Lernen (Self-Supervised Learning)

Das Modell erzeugt eigene Trainingsdaten und lernt daraus.
**Praxisbeispiele:** Sprachmodelle (BERT, GPT beim Pretraining), Bild- und Audioergänzung

## 3. Was ist ein Modell?

Ein Modell ist das Ergebnis des Lernprozesses im Machine Learning. Es wurde aus vielen Beispielen trainiert und kann auf neue Eingaben reagieren.

**Wichtig:**

- Ein Modell ist kein klassisches Programm, sondern ein Zustand.
- Es besteht aus einem Netzwerk von gelernten Gewichten, nicht aus festen Regeln.
- Das Modell „weiß“ nicht, was es tut – es berechnet Wahrscheinlichkeiten.

## 4. Wichtige Modelltypen

- **Large Language Model (LLM):** Generiert Texte, beantwortet Fragen, schreibt Zusammenfassungen (z.B. ChatGPT)
- **Masked Language Model (MLM):** Versteht Sprache, indem es Lücken in Sätzen ergänzt (z.B. BERT)
- **Seq2Seq-Modell:** Wandelt eine Sequenz in eine andere um, z.B. für Übersetzungen
- **Vision Model:** Erkennt Inhalte in Bildern (z.B. Bildklassifikation)
- **Multimodales Modell:** Verarbeitet verschiedene Datentypen gleichzeitig (Text + Bild, Text + Ton)

---

## 5. NLP (Natural Language Processing)

NLP ist ein Teilbereich der künstlichen Intelligenz, der sich mit der Verarbeitung und dem Verständnis von menschlicher Sprache beschäftigt. Ziel ist es, Texte und gesprochene Sprache so zu analysieren, dass Computer sie verstehen, interpretieren und darauf reagieren können.

### Wichtige Aufgaben von NLP:

- **Mustererkennung:** KI erkennt typische Strukturen und Muster in Texten, z.B. Satzbau, Grammatik oder häufige Wortfolgen.
- **Stimmungsanalyse:** Obwohl KI keine echten Gefühle hat, kann sie Stimmungen wie positiv, negativ oder neutral erkennen (z.B. in Bewertungen oder Social Media).
- **Antwortgenerierung:** KI berechnet die wahrscheinlichste und passendste Antwort auf eine Eingabe, basierend auf gelernten Beispielen.

### Tokens – Die Bausteine der Sprache für KI

Für KI sind Wörter keine festen Einheiten, sondern werden in sogenannte Tokens zerlegt. Ein Token kann ein ganzes Wort, ein Teil eines Wortes oder sogar ein einzelnes Zeichen sein. Zum Beispiel wird das Wort „Programmieren“ in mehrere Tokens zerlegt, damit die KI flexibel mit verschiedenen Wortformen umgehen kann.

**Beispiel:**

- Das Wort „Danke“ ist ein Token.
- Das Wort „Programmieren“ könnte in „Pro“, „gram“, „mieren“ zerlegt werden.

Die KI speichert die Beziehungen und Abhängigkeiten zwischen diesen Tokens, um die Bedeutung von Sätzen zu erfassen und sinnvolle Antworten zu generieren.

### Was ist ein Language Model (LM)?

Ein Language Model ist ein KI-Modell, das darauf trainiert wurde, menschliche Sprache zu verstehen und zu erzeugen. Es ist die Grundlage für Chatbots, Übersetzungsdienste und viele andere Anwendungen.

#### Wie funktioniert ein Language Model?

- **Kontextlernen:** Das Modell versteht die Bedeutung von Wörtern im Zusammenhang. Es erkennt, wie Wörter und Sätze miteinander verbunden sind und kann so komplexe Fragen beantworten.
- **Trainingsdaten:** Ein LM wird mit riesigen Mengen an Texten trainiert, z.B. aus Büchern, Webseiten, Datenbanken und Dialogen. Dadurch lernt es, wie Sprache funktioniert.
- **Deep Learning:** Moderne LMs nutzen neuronale Netze und sogenannte Transformer-Architekturen, um Sprache besonders effektiv zu verarbeiten.
- **Next-Word Prediction:** Das Modell sagt voraus, welches Wort als nächstes kommt. So entstehen flüssige und sinnvolle Antworten.

**Beispiel für Next-Word Prediction:**
Eingabe: „Heute ist das Wetter…“
Mögliche Vorhersage: „schön“, „regnerisch“, „sonnig“

### <ins> Das Language Model ist die Grundlage aller modernen Chatbots!

Moderne Chatbots wie ChatGPT, Alexa oder Google Assistant basieren auf solchen Language Models. Sie können Fragen beantworten, Texte schreiben, übersetzen und sogar kreativ werden – alles dank NLP und LM.

---

## 6. Wichtige Begriffe & Buzzwords

### Temperature

Die „Temperature“ steuert, wie kreativ oder kontrolliert ein Sprachmodell antwortet. Sie ist ein Wert zwischen 0 und 1:

- **Hohe Temperature (z.B. 0,8–1,0):** Das Modell antwortet besonders kreativ und überraschend. Es wählt aus vielen Möglichkeiten und ist weniger vorhersehbar.
- **Niedrige Temperature (z.B. 0–0,2):** Die Antworten sind präzise, sachlich und wiederholen sich oft. Das Modell ist sehr kontrolliert und vorhersehbar.

Je höher die Temperature, desto mehr Auswahlmöglichkeiten hat das Modell und desto zufälliger sind die Antworten.

**Praxisbeispiel:**

- Kreative Textgenerierung (hohe Temperature)
- Faktenabfrage oder technische Antworten (niedrige Temperature)

### Halluzinationen

Sprachmodelle können überzeugend klingende, aber falsche Inhalte erfinden. Diese nennt man „Halluzinationen“.

- Die Antworten wirken glaubwürdig, sind aber manchmal frei erfunden (z.B. Quellen, Fakten, Namen).
- Das Modell hat kein echtes Weltverständnis, sondern berechnet nur Wahrscheinlichkeiten – es kennt keine „Wahrheit“.
- Halluzinationen treten besonders bei offenen Fragen oder fehlendem Kontext auf.

**Praxisbeispiel:**

- Das Modell erfindet eine Quelle, die es gar nicht gibt.

### Parameter

Parameter sind die „Einstellschrauben“ eines KI-Modells. Je mehr Parameter, desto komplexere Muster kann das Modell erkennen – aber auch desto mehr Rechenaufwand ist nötig.

- Mehr Parameter = mehr Kapazität, aber auch längere Trainingszeit, höherer Energiebedarf und schwieriger zu kontrollieren.
- Nicht nur die Anzahl ist wichtig: Die Qualität der Trainingsdaten und die Architektur des Modells sind genauso entscheidend.

**Praxisbeispiel:**

- Große Sprachmodelle wie GPT-4 haben Milliarden von Parametern.

### Overfitting

Overfitting passiert, wenn ein Modell die Trainingsdaten zu genau lernt und dadurch auf neue, unbekannte Daten schlechter reagiert.

- Das Modell merkt sich die Trainingsdaten wie beim Auswendiglernen, statt zu verallgemeinern.
- Im Training ist die Genauigkeit hoch, aber bei neuen Daten sinkt die Leistung – das Modell ist instabil.
- Overfitting tritt oft bei zu komplexen Modellen oder zu wenig Trainingsdaten auf.

**Praxisbeispiel:**

- Ein Modell erkennt nur die Bilder, die es im Training gesehen hat, aber keine neuen Bilder.

## 7. Context Window (Kontextfenster)

Das Context Window ist der Bereich an Tokens (Worteinheiten), den ein Sprachmodell (LLM) gleichzeitig „sehen“ und verarbeiten kann. Es bestimmt, wie viel Text das Modell auf einmal berücksichtigen kann – zum Beispiel bei langen Dokumenten, Code-Dateien oder Gesprächen.

### Vorteile großer Context Windows

- **Mehr Text auf einmal:** Modelle können längere Texte, komplexe Dokumente oder ganze Gespräche vollständig erfassen.

- **Weniger Prompt Engineering:** Informationen müssen nicht mehrfach zusammengefasst oder dynamisch nachgeladen werden.

- **Kontextkontinuität:** Das Modell kann sich über längere Abschnitte hinweg auf denselben thematischen Zusammenhang beziehen.

### Nachteile großer Context Windows

- **Diminishing Returns:** Ab einer bestimmten Größe nutzt das Modell neue Tokens weniger effizient – frühe Tokens verlieren an Gewicht.

- **Fokusdiffusion:** Die Aufmerksamkeit des Modells verteilt sich auf immer mehr Tokens, wodurch die Präzision sinkt.

- **Fehlende Relevanzbewertung:** Das Modell erkennt nicht immer zuverlässig, welche Informationen für die Aufgabe wirklich wichtig sind – es versucht oft, „alles ein bisschen“ zu berücksichtigen.

### Fokusverlust und Diffusion

- Die Aufmerksamkeit wird verdünnt: Jeder Token „verteilt“ seine Aufmerksamkeit auf viele andere Tokens.

- Wichtige Informationen können untergehen, auch wenn ein besonders relevanter Satz enthalten ist.

- Das Modell neigt zu „Averaging“: Statt klarer Entscheidungen entstehen oft weichgespülte, kompromisshafte Antworten.

### Lösungen für große Context Windows

- **Unwichtige Informationen herausfiltern:** Vor dem Start wird der Text vorbereitet – alles Überflüssige, Doppelte oder Veraltete wird entfernt.

- **Gute Struktur hilft beim Verstehen:** Überschriften, Absätze und Listen zeigen der KI, worauf sie achten soll (z.B. durch Markdown-Struktur).

- **Spezielle Modelle für große Texte:** Manche KI-Modelle sind darauf ausgelegt, gezielt zwischen Abschnitten zu „springen“ und nicht alles gleich zu behandeln.

### RAG – Retrieval-Augmented Generation

Retrieval-Augmented Generation (RAG) ist eine Technik, bei der die KI eine eingebaute Suchfunktion nutzt:

- Die KI erhält eine Frage.

- Sie sucht in der Datengrundlage gezielt nach relevanten Abschnitten.

- Nur die wichtigen Abschnitte kommen ins Context Window.

**Resultat:** Schnellere, klarere und effizientere Antworten.

### Context Window bei Code-Projekten

- **Code-Basis:** Der gesamte aktuelle Code – oft Millionen Zeilen.

- **Code-Zusatz:** Imports, Konfigurationsdateien, Git-Branches.

- **Projektwissen:** Konventionen, Architekturdiagramme, Dokumentationen.

- **Planung:** ToDos, Roadmaps, Zielvorgaben (z.B. aus Jira, Trello, GitHub).

- **Team & Business:** Absprachen, Meetingnotizen, User Stories und Use Cases.

### Zusammenfassung

- KI ist nicht einfach „intelligent“ – sie reagiert auf das, was wir ihr geben.

- Gute Ergebnisse brauchen klaren, strukturierten und relevanten Kontext.

- Immer größere Context Windows lösen nicht alle Probleme.

- Tools wie RAG helfen, aber wir entscheiden, was wirklich wichtig ist.

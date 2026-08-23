# Klinikum Chronicles – Roguelite v2 Architecture

## Ziel

Die bestehende JRPG-Kampflogik bleibt der spielerische Kern. Roguelite-Systeme werden darum herum gebaut, statt das Kampfsystem zu ersetzen.

## Core Loop

1. Olivia startet in ihrer Wohnung.
2. Im Hub werden permanente Upgrades, Beziehungen und Vorbereitung verwaltet.
3. Eine Schicht wird gestartet.
4. Der Run erzeugt eine Abfolge aus Kampf-, Event-, Elite- und Boss-Räumen.
5. Kämpfe werden über die extrahierte JRPG-Engine gespielt.
6. Temporäre Run-Belohnungen verändern Builds nur für die aktuelle Schicht.
7. Sieg oder Scheitern beendet den Run.
8. Olivia kehrt in die Wohnung zurück; Meta-Fortschritt bleibt erhalten.

## Trennung der Zustände

### MetaState – permanent
- Forschungsnotizen / Meta-Währung
- freigeschaltete Skills, Relikte und Begleiter
- Wohnungs-Upgrades
- Beziehungen / Story-Flags
- Statistiken

### RunState – aktuelle Schicht
- Seed und Raumposition
- temporäre Relikte / Modifikatoren
- Kaffee und weitere Run-Ressourcen
- JRPG-Party inklusive HP/MP/Level/XP
- bereits besuchte Räume

### BattleState – aktueller Kampf
`src/v2/combat/jrpg-battle.js` besitzt ausschließlich die Kampfrunde: Initiative, Turn Queue, Zielwahl, Gegner-AI, Schaden, Crits, Fähigkeiten, Heilung, Buff/Debuff, Stun, Verteidigen, Kaffee sowie Sieg/Niederlage und XP-Auswertung.

Die Mechaniken wurden aus dem bisherigen monolithischen Prototyp extrahiert; der RunController simuliert keine Kampfrunden.

## Schnittstelle

`Apartment Hub -> RunController -> Encounter -> Battle Adapter -> JRPG Engine -> BattleResult -> RunController -> Apartment Hub`

BattleResult enthält nur Ergebnis, Belohnung und aktualisierte Party. Die Battle-Engine schreibt keine permanente Meta-Währung direkt.

## Aktueller v0.2 Vertical Slice

- Wohnung als zentraler Hub
- 1 Schicht mit 8 Räumen
- Kampf / Event / Elite / Boss
- Olivia + Lisa als Test-Party; Engine ist auf weitere Begleiter vorbereitet
- Angriff / Fähigkeit / Verteidigen / Kaffee
- Einzel- und Party-Zielwahl
- Crits, Heilung, Buffs, Debuffs und Stun
- XP, Level-up und Skillpunkte
- 4 erste temporäre Run-Upgrades
- Reflex-Routine wirkt bereits auf den Reflexhammer-Build
- Forschungsnotizen als permanente Meta-Währung
- Save-State über localStorage
- responsive Touch-Oberfläche in `dev-v2.html`

## Noch nicht Freeze-fähig

- vollständiger Skilltree im v2-Hub
- Companion-Rekrutierung statt fixer Test-Party
- echte Wahl zwischen mehreren Run-Pfaden
- Balancing über viele Runs
- weitere Run-Upgrades und Synergien
- persistentes Wiederaufnehmen einer unterbrochenen Schicht in der UI
- automatisierte Combat-/Run-Tests

## Release-Regel

`main` bleibt die stabile GitHub-Pages-Version. Entwicklung erfolgt auf `feature/roguelite-v2`. Erst ein getesteter Meilenstein wird nach `main` übernommen.

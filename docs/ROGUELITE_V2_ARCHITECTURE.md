# Klinikum Chronicles – Roguelite v2 Architecture

## Ziel

Die bestehende JRPG-Kampflogik bleibt der spielerische Kern. Roguelite-Systeme werden darum herum gebaut, statt das Kampfsystem zu ersetzen.

## Core Loop

1. Olivia startet in ihrer Wohnung.
2. Im Hub werden permanente Upgrades, Beziehungen und Vorbereitung verwaltet.
3. Eine Schicht wird gestartet.
4. Der Run erzeugt eine Abfolge aus Kampf-, Event-, Elite- und Boss-Räumen.
5. Kämpfe werden weiterhin über den JRPG-Battle-Layer gespielt.
6. Temporäre Run-Belohnungen verändern Builds nur für die aktuelle Schicht.
7. Sieg oder Scheitern beendet den Run.
8. Olivia kehrt in die Wohnung zurück; Meta-Fortschritt bleibt erhalten.

## Trennung der Zustände

### MetaState – permanent
- Währung / Forschungsnotizen
- freigeschaltete Skills, Relikte und Begleiter
- Wohnungs-Upgrades
- Beziehungen / Story-Flags
- abgeschlossene Schichten und Bosse
- Statistiken

### RunState – nur aktuelle Schicht
- Seed
- aktuelle Raumposition
- temporäre Relikte und Buffs
- Run-Ressourcen
- Run-Party
- HP/MP und Kampfstatus
- bereits besuchte Räume

### BattleState – nur aktueller Kampf
Der bestehende JRPG-Battle-Layer bleibt Eigentümer der rundenbasierten Kampflogik. Die v2-Systeme übergeben Encounter-Daten und empfangen nur ein BattleResult zurück.

## Architekturregel

`Apartment Hub -> RunController -> Encounter -> Legacy/JRPG Battle Adapter -> BattleResult -> RunController -> Apartment Hub`

Der RunController darf keine JRPG-Kampfrunde simulieren. Der Battle-Layer darf keine permanente Meta-Progression direkt verändern.

## v0.2 Vertical Slice

- Wohnung als zentraler Hub
- 1 Schicht mit 8 Räumen
- Kampf / Event / Elite / Boss
- bestehendes rundenbasiertes JRPG-Prinzip
- 12 temporäre Run-Upgrades
- 1 permanente Meta-Währung
- 1 Wohnungs-Upgrade
- Save/Load über localStorage
- mobile Bedienbarkeit

## Release-Regel

`main` bleibt die stabile GitHub-Pages-Version. Entwicklung erfolgt auf `feature/roguelite-v2`. Erst ein getesteter Meilenstein wird nach `main` übernommen.

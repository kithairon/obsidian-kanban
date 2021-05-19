// Deutsch

export default {
  // main.ts
  "Open as kanban board": "Öffne als Kanban-Board",
  "Create new board": "Erstelle ein neues Board",
  "Archive completed cards in active board":
    "Archiviere fertiggestellte Karten im aktiven Board",
  "Error: current file is not a Kanban board":
    "Fehler: Momentan geöffnete Datei ist kein Kanban-Board",
  "Convert empty note to Kanban": "Konvertiere leere Notiz in ein Kanban-Board",
  "Error: cannot create Kanban, the current note is not empty":
    "Fehler: Kanban konnte nicht erstellt werden, momentan geöffnete Datei ist nicht leer",
  "New kanban board": "Neues Kanban-Board",
  "Untitled Kanban": "Unbenanntes Kanban",

  // KanbanView.tsx
  "Open as markdown": "Öffne als Markdown",
  "Open board settings": "Öffne Board-Einstellungen",
  "Archive completed cards": "Archiviere fertiggestellte Karten",

  // parser.ts
  Complete: "Fertiggestellt",
  Archive: "Archiv",

  // settingHelpers.ts
  "Note: No template plugins are currently enabled.":
    "Beachte: Keine Template-Plugins sind derzeit aktiviert.",
  default: "Standard",
  "Search...": "Suche...",

  // Settings.ts
  "These settings will take precedence over the default Kanban board settings.":
    "Diese Einstellung wird Vorrang vor der standard Kanban-Board Einstellung haben. ",
  "Set the default Kanban board settings. Settings can be overridden on a board-by-board basis.":
    "Stelle die Grundeinstellungen für Kanban-Boards ein. Einstellungen können auf einer Board-für-Board Basis überschrieben werden.",
  "Note template": "Notiz Vorlage",
  "This template will be used when creating new notes from Kanban cards.":
    "Diese Vorlage wird beim Erstellen neuer Notizen aus Kanban-Karten verwendet.",
  "No template": "Keine Vorlage",
  "Note folder": "Notiz Ordner",
  "Notes created from Kanban cards will be placed in this folder. If blank, they will be placed in the default location for this vault.":
    "Notizen, welche aus einer Kanban-Karte erstellt wurden, werden in diesen Ordner platziert. Falls leer, werden die Einstellungen des Vaults verwendet.",
  "Default folder": "Standard Ordner",
  "Lane width": "Schienenbreite",
  "Enter a number to set the lane width in pixels.":
    "Gebe ein Zahl ein, um die Schienenbreite in Pixeln einzustellen.",
  "Maximum number of archived cards": "Maximale Anzahl archivierter Karten.",
  "Archived cards can be viewed in markdown mode. This setting will begin removing old cards once the limit is reached. Setting this value to -1 will allow a board's archive to grow infinitely.":
    "Archivierte Karten können im Markdown-Modus betrachtet werden. Diese Einstellung wird alte Karten löschen, sobald das Limit erreicht wird. Eine Einstellung von -1 setzt das Archiv auf eine unendliche Größe.",
  "Display card checkbox": "Zeige Karten Checkbox",
  "When toggled, a checkbox will be displayed with each card":
    "Wenn aktiviert, wird mit jeder Karte eine Checkbox angezeigt.",
  "Reset to default": "Zurücksetzen",
  "Date & Time": "Datum & Uhrzeit",
  "Date trigger": "Datum-Auslöser",
  "When this is typed, it will trigger the date selector":
    "Wenn dies eingegeben wird, dann wird die Datumsauswahl angezeigt",
  "Time trigger": "Uhrzeit-Auslöser",
  "When this is typed, it will trigger the time selector":
    "Wenn dies eingegeben wird, dann wird die Uhrzeitsauswahl angezeigt",
  "Date format": "Format des Datums",
  "This format will be used when saving dates in markdown.":
    "Dieses Format wird verwendet, wenn ein Datum in Markdown gespeichert wird.",
  "For more syntax, refer to": "Für mehr Syntax Informationen siehe",
  "format reference": "Formatvorlage",
  "Your current syntax looks like this": "Dein momentanes Format sieht so aus",
  "Time format": "Format der Uhrzeit",
  "Date display format": "Format der Datums Anzeige",
  "This format will be used when displaying dates in Kanban cards.":
    "Dieses Format wird verwendet, wenn ein Datum in einer Kanban-Karte angezeigt wird.",
  "Show relative date": "Zeige relatives Datum",
  "When toggled, cards will display the distance between today and the card's date. eg. 'In 3 days', 'A month ago'":
    "Wenn aktiviert, wird die Zeitspanne zwischen heute und dem Datum angezeigt. Zum Beispiel: 'In 3 Tagen', 'Vor einem Monat'",
  "Hide card display dates": "Verstecke Karten Anzeige Daten",
  "When toggled, formatted dates will not be displayed on the card. Relative dates will still be displayed if they are enabled.":
    "Wenn aktiviert, werden formatierte Daten nicht auf der Karte angezeigt. Relative Daten werden dennoch angezeigt, solange sie aktiviert sind.",
  "Hide dates in card titles": "Verstecke Daten im Titel der Karte",
  "When toggled, dates will be hidden card titles. This will prevent dates from being included in the title when creating new notes.":
    "Wenn aktiviert, werden Daten nicht im Titel der Karte angezeigt. Dies verhindert, dass Daten im Titel neu erstellter Notizen vorhanden sind.",
  "Link dates to daily notes": "Verbinde Daten zu Daily Notes",
  "When toggled, dates will link to daily notes. Eg. [[2021-04-26]]":
    "Wenn aktiviert, werden Daten mit der Täglichen Notiz verbunden. Zum Beispiel [[26.4.2021]]",
  "Add date and time to archived cards":
    "Füge Datum und Uhrzeit zu archivierten Notizen hinzu",
  "When toggled, the current date and time will be added to the beginning of a card when it is archived. Eg. - [ ] 2021-05-14 10:00am My card title":
    "Wenn aktiviert, wird das heutige Datum und die gegenwärtige Zeit am Anfang einer Karte hinzugefügt, wenn sie archiviert wird. Zum Beispiel: - [ ] 14.05.2021 10:00 Mein Karten Titel",
  "Archive date/time separator": "Datum/Uhrzeit Trenner für das Archiv",
  "This will be used to separate the archived date/time from the title":
    "Dies wird verwendet, um das Datum und die Uhrzeit archivierter Karten vom Titel zu trennen",
  "Archive date/time format":
    "Format des Datums und der Uhrzeit für das Archiv",
  "Kanban Plugin": "Kanban Erweiterung",

  // components/Item/Item.tsx
  "Archive item": "Archiviere Karte",
  "More options": "Weitere Optionen",
  Cancel: "Abbrechen",

  // components/Item/ItemContent.tsx
  today: "heute",
  yesterday: "gestern",
  tomorrow: "morgen",
  "Change date": "Verändere Datum",
  "Change time": "Verändere Uhrzeit",

  // components/Item/ItemForm.tsx
  "Item title...": "Karten Titel...",
  "Add item": "Karte hinzufügen",
  "Add a card": "Füge eine Karte hinzu",

  // components/Item/ItemMenu.ts
  "Edit card": "Karte bearbeiten",
  "New note from card": "Neue Notiz aus Karte erstellen",
  "Archive card": "Karte archivieren",
  "Delete card": "Karte löschen",
  "Edit date": "Datum bearbeiten",
  "Add date": "Datum hinzufügen",
  "Remove date": "Datum entfernen",
  "Edit time": "Karte bearbeiten",
  "Add time": "Uhrzeit hinzufügen",
  "Remove time": "Uhrzeit entfernen",

  // components/Lane/LaneForm.tsx
  "Enter list title...": "Listentitel eingeben..",
  "Mark items in this list as complete":
    "Markiere Karten in dieser Liste als fertiggestellt",
  "Add list": "Liste hinzufügen",
  "Add a list": "Füge eine Liste hinzu",

  // components/Lane/LaneHeader.tsx
  "Move list": "Liste verschieben",
  Close: "Schließen",

  // components/Lane/LaneMenu.tsx
  "Are you sure you want to delete this list and all its cards?":
    "Bist du dir sicher, dass du diese Liste und alle ihre Karten löschen möchtest?",
  "Yes, delete list": "Ja, lösche diese Liste",
  "Are you sure you want to archive this list and all its cards?":
    "Bist du dir sicher, dass du diese Liste und alle ihre Karten archivieren möchtest?",
  "Yes, archive list": "Ja, archiviere diese Liste",
  "Are you sure you want to archive all cards in this list?":
    "Bist du dir sicher, dass du alle Karten in dieser Liste archivieren möchtest?",
  "Yes, archive cards": "Ja, archiviere Karten",
  "Edit list": "Editiere Liste",
  "Archive cards": "Archiviere Karten",
  "Archive list": "Archiviere List",
  "Delete list": "Lösche Liste",
};

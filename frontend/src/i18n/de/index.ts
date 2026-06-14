const translation = {
  translation: {
    app: {
      name: 'Bedrock Chat',
      inputMessage: 'Nachricht senden',
      pinnedBots: 'Angeheftete Bots',
      starredBots: 'Favorisierte Bots',
      recentlyUsedBots: 'Zuletzt genutzte Bots',
      conversationHistory: 'Verlauf',
      chatWaitingSymbol: '▍',
    },
    bot: {
      label: {
        myBots: 'Meine Bots',
        recentlyUsedBots: 'Kürzlich genutzte Shared Bots',
        knowledge: 'Wissensbasis',
        url: 'URL',
        sitemap: 'Sitemap URL',
        file: 'Datei',
        loadingBot: 'Laden...',
        normalChat: 'Chat',
        notAvailableBot: '[NICHT Verfügbar]',
        notAvailableBotInputMessage: 'Dieser Bot ist NICHT verfügbar.',
        noDescription: 'Keine Beschreibung',
        notAvailable: 'Dieser Bot ist NICHT verfügbar.',
        noBots: 'Keine Bots.',
        noBotsRecentlyUsed: 'Keine kürzlich genutzen Shared Bots.',
        retrievingKnowledge: '[Retrieving Knowledge...]',
        dndFileUpload:
          'Sie können Dateien per Drag-and-Drop hochladen..\nUnterstützte Dateiformate: {{fileExtensions}}',
        uploadError: 'Fehler Nachricht',
        syncStatus: {
          queue: 'Warte auf Synchronisierung',
          running: 'Synchronisiere',
          success: 'Synchronisierung Erfolgreich',
          fail: 'Fehler bei der Synchronisierung',
        },
        fileUploadStatus: {
          uploading: 'Hochladen...',
          uploaded: 'Hochgeladen',
          error: 'ERROR',
        },
      },
      titleSubmenu: {
        edit: 'Editieren',
        copyLink: 'Link kopieren',
        copiedLink: 'Kopiert',
      },
      help: {
        overview:
          'Bots arbeiten nach vordefinierten Anweisungen. Normale Chats funktionieren nur wenn der komplette Kontext in der Nachricht definiert ist, aber bei Bots muss der Kontext nicht erneut definiert werden.',
        instructions:
          'Legen Sie fest, wie sich der Bot verhalten soll. Unklare Anweisungen können zu unerwünschten Ergebnissen führen, geben Sie also klare und präzise Anweisungen.',
        knowledge: {
          overview:
            'Indem man dem Bot eine externe Wissensbasis zur Verfügung stellt, wird er in die Lage versetzt, mit Daten umzugehen, für die er nicht vorher trainiert wurde.',
          url: 'Die Informationen aus der angegebenen URL werden als Wissensbasis verwendet.',
          sitemap:
            'Durch die Angabe der Sitemap URL werden die Informationen, die durch automatisches Scraping von Websites gewonnen werden, als Wissensbasis verwendet.',
          file: 'Die hochgeladenen Dateien werden als Wissensbasis verwendet.',
        },
      },
      alert: {
        sync: {
          error: {
            title: 'Wissensbasis Synchronisationsfehler',
            body: 'Bei der Synchronisierung der Wissensbasis ist ein Fehler aufgetreten. Bitte überprüfen Sie die folgende Meldung:',
          },
          incomplete: {
            title: 'NICHT bereit',
            body: 'Die Synchronisation der Wissensbasis ist noch NICHT abgeschlossen, daher wird die Wissensbasis vor der Aktualisierung verwendet.',
          },
        },
      },
      samples: {
        title: 'Beispiel Anweisungen',
        anthropicLibrary: {
          title: 'Anthropic Prompt Bibliothek',
          sentence: 'Benötigen Sie mehr Beispiele? Besuchen Sie: ',
          url: 'https://docs.anthropic.com/claude/prompt-library',
        },
        pythonCodeAssistant: {
          title: 'Python Coding Assistent',
          prompt: `Schreiben Sie ein kurzes Python-Skript für die gestellte Aufgabe, wie es ein sehr erfahrener Python-Experte schreiben würde. Sie schreiben den Code für einen erfahrenen Entwickler, also fügen Sie nur Kommentare für Dinge hinzu, die nicht offensichtlich sind. Stellen Sie sicher, dass Sie alle erforderlichen Importe inkludieren.
Schreiben Sie NIEMALS etwas vor dem \`\`\`python\`\`\` block. Nachdem Sie den Code generiert haben und nach dem \`\`\`python\`\`\` block , überprüfen Sie Ihre Arbeit sorgfältig, um sicherzustellen, dass es keine Fehler, Irrtümer oder Unstimmigkeiten gibt. Wenn es Fehler gibt, listen Sie diese in <error>-Tags auf und erstellen Sie dann eine neue Version, in der die Fehler behoben sind. Wenn keine Fehler vorhanden sind, schreiben Sie "CHECKED: NO ERRORS" in die <error>-Tags.`,
        },
        mailCategorizer: {
          title: 'Mail-Kategorisierer',
          prompt: `Sie sind ein Kundendienstmitarbeiter, der die Aufgabe hat, E-Mails nach Typ zu klassifizieren. Bitte geben Sie Ihre Antwort aus und begründen Sie anschließend Ihre Klassifizierung.

Die Klassifizierungskategorien sind:
(A) Frage vor dem Verkauf
(B) Kaputter oder defekter Artikel
(C) Frage zur Rechnungsstellung
(D) Sonstiges (bitte erläutern)

Wie würden Sie diese E-Mail kategorisieren?`,
        },
        fitnessCoach: {
          title: 'Persönlicher Fitness-Trainer',
          prompt: `Sie sind ein fröhlicher, enthusiastischer Personal Fitness Coach namens Sam. Sam hilft seinen Kunden leidenschaftlich gern dabei, fit zu werden und einen gesünderen Lebensstil zu führen. Sie schreiben in einem ermutigenden und freundlichen Ton und versuchen immer, Ihre Kunden zu besseren Fitnesszielen zu führen. Wenn der Benutzer Sie etwas fragt, das nichts mit Fitness zu tun hat, bringen Sie das Thema entweder auf Fitness zurück oder sagen Sie, dass Sie nicht antworten können.`,
        },
      },
      create: {
        pageTitle: 'Meinen Bot erstellen',
      },
      edit: {
        pageTitle: 'Meinen Bot bearbeiten',
      },
      item: {
        title: 'Name',
        description: 'Beschreibung',
        instruction: 'Anweisungen',
      },
      button: {
        newBot: 'Neuen Bot erstellen',
        create: 'Erstellen',
        edit: 'Editieren',
        save: 'Speichern',
        delete: 'Löschen',
        share: 'Teilen',
        copy: 'Kopieren',
        copied: 'Kopiert',
        instructionsSamples: 'Beispiele',
        chooseFiles: 'Dateien auswählen',
      },
      deleteDialog: {
        title: 'Löschen?',
        content:
          'Sind Sie sicher, dass Sie <Bold>{{Titel}}</Bold> löschen wollen?',
      },
      shareDialog: {
        title: 'Teilen',
        off: {
          content:
            'Die Freigabe von Links ist deaktiviert, so dass nur Sie über die URL auf diesen Bot zugreifen können.',
        },
        on: {
          content:
            'Die Linkfreigabe ist aktiviert, so dass ALLE Nutzer diesen Link zur Konversation nutzen können.',
        },
      },
      error: {
        notSupportedFile: 'Diese Datei wird nicht unterstützt.',
        duplicatedFile: 'Es wurde eine Datei mit demselben Namen hochgeladen.',
      },
    },
    deleteDialog: {
      title: 'Löschen?',
      content:
        'Sind Sie sicher, dass Sie <Bold>{{Titel}}</Bold> löschen wollen?',
    },
    clearDialog: {
      title: 'ALLE Löschen?',
      content: 'Sind Sie sicher, dass Sie ALLE Chats löschen wollen?',
    },
    languageDialog: {
      title: 'Sprache ändern',
    },
    button: {
      newChat: 'Neuer Chat',
      botConsole: 'Bot Konsole',
      SaveAndSubmit: 'Speichern & Senden',
      resend: 'Eneut senden',
      regenerate: 'Erneut generieren',
      delete: 'Löschen',
      deleteAll: 'Alle löschen',
      done: 'Fertig',
      ok: 'OK',
      cancel: 'Abbrechen',
      back: 'Zurück',
      menu: 'Menü',
      language: 'Sprache',
      clearConversation: 'ALLE Chats löschen',
      signOut: 'Abmelden',
      close: 'Schließen',
      add: 'Hinzufügen',
      continue: 'Weiter generieren',
    },
    input: {
      hint: {
        required: '* Benötigt',
      },
    },
    error: {
      answerResponse: 'Bei der Beantwortung ist ein Fehler aufgetreten.',
      notFoundConversation:
        'Da der angegebene Chat nicht existiert, wird ein neuer Chat-Bildschirm angezeigt.',
      notFoundPage: 'Die von Ihnen gesuchte Seite wurde nicht gefunden.',
      predict: {
        general: 'Bei der Vorhersage ist ein Fehler aufgetreten.',
        invalidResponse:
          'Unerwartete Antwort erhalten. Das Antwortformat stimmt nicht mit dem erwarteten Format überein.',
      },
      notSupportedImage: 'Das ausgewählte Model unterstützt keine Bilder.',
    },
    model: {
      'claude-v4-opus': {
        label: 'Claude 4 (Opus)',
        description:
          'Leistungsstarkes hybrides Reasoning-Modell für komplexe Aufgaben, Programmierung und KI-Agenten mit 200K Token Kontextfenster.',
      },
      'claude-v4.1-opus': {
        label: 'Claude 4.1 (Opus)',
        description:
          'Leistungsstarkes Opus-Modell mit verbesserten Reasoning-Fähigkeiten.',
      },
      'claude-v4.5-opus': {
        label: 'Claude 4.5 (Opus)',
        description:
          'Hochleistungsfähiges Opus-Modell, das starkes Reasoning mit praktischer Leistung zu einem günstigeren Preis als frühere Opus-Modelle vereint.',
      },
      'claude-v4.6-opus': {
        label: 'Claude 4.6 (Opus)',
        description:
          'Flaggschiff-Modell, das sorgfältiger plant, agentische Aufgaben länger durchhält und zuverlässig in riesigen Codebasen arbeitet – mit 1M Token Kontextfenster.',
      },
      'claude-v4-sonnet': {
        label: 'Claude 4 (Sonnet)',
        description:
          'Ausgewogenes hybrides Reasoning-Modell, optimiert für Effizienz auf Skala mit 200K Token Kontextfenster.',
      },
      'claude-v4.5-sonnet': {
        label: 'Claude 4.5 (Sonnet)',
        description:
          'Sonnet-Modell der vorherigen Generation mit starker Programmierleistung und erweiterten Fähigkeiten für länger andauernde Aufgaben.',
      },
      'claude-v4.6-sonnet': {
        label: 'Claude 4.6 (Sonnet)',
        description:
          'Umfassendes Upgrade des Mid-Tier-Modells mit verbesserten Fähigkeiten beim Programmieren, Computer Use, Long-Context-Reasoning und in der Agentenplanung – inklusive 1M Token Kontextfenster.',
      },
      'claude-v4.5-haiku': {
        label: 'Claude 4.5 (Haiku)',
        description:
          'Das schnellste und intelligenteste Haiku-Modell mit nahezu Spitzenleistung und erweiterten Denkfähigkeiten.',
      },
      'claude-v3-haiku': {
        label: 'Claude 3 (Haiku)',
        description:
          'Vorgängerversion optimiert für Geschwindigkeit und Kompaktheit mit nahezu sofortiger Reaktionszeit.',
      },
      'claude-v3.5-sonnet': {
        label: 'Claude 3.5 (Sonnet) v1',
        description:
          'Eine frühere Version von Claude 3.5. Unterstützt eine Vielzahl von Aufgaben, aber v2 bietet eine höhere Genauigkeit.',
      },
      'claude-v3.5-sonnet-v2': {
        label: 'Claude 3.5 (Sonnet) v2',
        description:
          'Die aktuelle Version von Claude 3.5 – ein verbessertes Modell, das auf v1 aufbaut und höhere Genauigkeit sowie bessere Leistung bietet.',
      },
      'claude-v3.7-sonnet': {
        label: 'Claude 3.7 Sonnet',
        description:
          'Hybrides Reasoning-Modell, das schnelle Antworten und tiefgehende Analysefähigkeiten optimal ausbalanciert.',
      },
      'claude-v3.5-haiku': {
        label: 'Claude 3.5 (Haiku) v1',
        description:
          'Die aktuelle Version mit noch schnelleren Antworten und verbesserten Fähigkeiten gegenüber Haiku 3.',
      },
      'claude-v3-opus': {
        label: 'Claude 3 (Opus)',
        description: 'Leistungsstarkes Modell für hochkomplexe Aufgaben.',
      },
      'mistral-7b-instruct': {
        label: 'Mistral 7B',
        description:
          'Unterstützt englische Textgenerierung und bietet natürliche Programmierfähigkeiten',
      },
      'mixtral-8x7b-instruct': {
        label: 'Mistral-8x7B',
        description:
          'Ein beliebtes, hochwertiges Mixture-of-Experts (MoE)-Modell – ideal für Textzusammenfassungen, Frage-Antwort-Systeme, Textklassifikation, Textvervollständigung und Codegenerierung.',
      },
      'mistral-large': {
        label: 'Mistral Large',
        description:
          'Ideal für komplexe Aufgaben, die umfangreiche Reasoning-Fähigkeiten erfordern oder stark spezialisiert sind, wie synthetische Text- oder Codegenerierung.',
      },
      'mistral-large-2': {
        label: 'Mistral Large2',
        description:
          'Fortschrittliches LLM mit Unterstützung für Dutzende Sprachen und über 80 Programmiersprachen, inklusive erstklassiger Agenten-Funktionen wie nativen Funktionsaufrufen, JSON-Ausgabe und Reasoning.',
      },
      'amazon-nova-pro': {
        label: 'Amazon Nova Pro',
        description:
          'Ein hochleistungsfähiges multimodales Modell mit der besten Kombination aus Genauigkeit, Geschwindigkeit und Kosten für vielfältige Aufgaben.',
      },
      'amazon-nova-lite': {
        label: 'Amazon Nova Lite',
        description:
          'Ein äußerst kostengünstiges multimodales Modell, das Bild-, Video- und Texteingaben blitzschnell verarbeitet.',
      },
      'amazon-nova-micro': {
        label: 'Amazon Nova Micro',
        description:
          'Ein reines Textmodell mit den niedrigsten Latenzzeiten der Amazon-Nova-Familie zu sehr geringen Kosten.',
      },
      'deepseek-r1': {
        label: 'DeepSeek R1',
        description:
          'Modernstes Reasoning-Modell, optimiert für allgemeines Reasoning, Mathematik, Wissenschaft und Codegenerierung. Unterstützt Englisch und Chinesisch.',
      },
      'llama3-3-70b-instruct': {
        label: 'Meta Llama 3.3 70B Instruct',
        description:
          'Neuestes Llama 3-Modell mit Leistung auf Niveau des 405B-Modells zu geringeren Kosten – mit hervorragenden Reasoning- und Instruktionsbefolgungsfähigkeiten.',
      },
      'llama3-2-1b-instruct': {
        label: 'Meta Llama 3.2 1B Instruct',
        description:
          'Leichtgewichtiges Modell optimiert für Edge-Geräte mit effizienter On-Device-Verarbeitung für persönliches Informationsmanagement und mehrsprachigen Wissensabruf.',
      },
      'llama3-2-3b-instruct': {
        label: 'Meta Llama 3.2 3B Instruct',
        description:
          'Kompaktes Modell für Textgenerierung, Zusammenfassungen und Sentimentanalyse mit niedriger Latenz – ideal für mobile KI-Anwendungen.',
      },
      'llama3-2-11b-instruct': {
        label: 'Meta Llama 3.2 11B Instruct',
        description:
          'Multimodales Modell mit exzellentem Bildverständnis und visuellem Reasoning – geeignet für Bildbeschriftung, visuelle Fragebeantwortung und Dokumentenverarbeitung.',
      },
      'llama3-2-90b-instruct': {
        label: 'Meta Llama 3.2 90B Instruct',
        description:
          'Großes multimodales Modell mit fortgeschrittenem Bildverständnis und visuellen Reasoning-Fähigkeiten für anspruchsvolle visuelle Intelligenzanwendungen.',
      },
      'gpt-oss-20b': {
        label: 'GPT-OSS 20B',
        description:
          'Open-Weight 20B-Parametermodell mit 128K Kontextfenster und Reasoning-Fähigkeiten.',
      },
      'gpt-oss-120b': {
        label: 'GPT-OSS 120B',
        description:
          'Open-Weight 120B-Parametermodell mit 128K Kontextfenster und erweiterten Reasoning-Fähigkeiten.',
      },
    },
  },
};

export default translation;

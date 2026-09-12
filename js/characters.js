/* ==================================================
   EDIT CHARACTER INFORMATION HERE

   Each character uses two separate assets:
   - thumbnail: portrait shown in the selector
   - image: full-body art shown in the main profile

   To add a character, copy one complete object, paste it at the end of
   the array (separated by a comma), then edit its text and image paths.
   Leave an image path empty to display its clearly labelled placeholder.
   ================================================== */

const characters = [
  {
    name: "Hane Kage",
    subtitle: "Second Main Character • HANE KAGE: VEILED",
    summary: "A mysterious boy whose disappearance lies at the center of the story.",
    image: "images/characters/character-hane.png",
    thumbnail: "images/characters/character-hane-thumb.jpg",
    imagePlaceholder: "INSERT HANE FULL-BODY ARTWORK HERE",
    thumbnailPlaceholder: "INSERT HANE ICON HERE",
    facts: [
      ["Name", "Hane Kage"],
      ["Role", "Second Main Character"],
      ["Protagonist", "No — Aishi"],
      ["Personality", "Shy • Kind • Creative • Introspective"],
      ["Best Friend", "Aishi"],
      ["Important Person", "Seal"]
    ],
    sections: [
      {
        symbol: "✦", title: "About", paragraphs: [
          "Hane Kage is the second main character of HANE KAGE: VEILED, while Aishi serves as the story's protagonist. Although Hane is not the character who primarily drives the story, his disappearance and the secrets surrounding him become central to Aishi's journey.",
          "Hane is a quiet, gentle, and deeply introspective boy who tends to keep to himself. He is shy around most people and often struggles to express what he truly thinks or feels. Rather than talking about his problems, Hane tends to hide them and act as though everything is fine.",
          "He is naturally creative and imaginative, finding comfort in drawing, creating stories, and building imaginary worlds. Around people he genuinely trusts, especially his childhood best friend Aishi, Hane becomes more open, playful, and affectionate."
        ]
      },
      {
        symbol: "☾", title: "Inner Struggle", paragraphs: [
          "Behind his gentle personality, Hane struggles with depression, insecurity, and a deeply negative perception of himself. He is often overly critical of himself and has difficulty recognizing his own worth. He tends to hide these struggles because he does not want others to worry about him or see him differently.",
          "Hane is deeply attached to the people he cares about. His fear of being abandoned can make his feelings complicated, particularly regarding Aishi. His attachment can sometimes become possessive, revealing a side of him that contrasts with his otherwise gentle personality."
        ]
      },
      {
        symbol: "✦", title: "At His Core", paragraphs: [
          "Despite his struggles, Hane is not naturally cruel or hostile. At his core, he wants to be understood and accepted.",
          "His character is defined by the contrast between the kind and quiet person he shows to others and the much more complicated inner world he keeps hidden."
        ]
      },
      {
        symbol: "☽", title: "Story", paragraphs: [
          "Hane's mysterious disappearance eventually becomes one of the central mysteries of HANE KAGE: VEILED, leaving Aishi to search for answers and uncover what happened to his childhood friend."
        ]
      }
    ]
  },
  {
    name: "Aishi",
    subtitle: "Protagonist • HANE KAGE: VEILED",
    summary: "The protagonist and Hane's childhood friend.",
    image: "images/characters/character-aishi.png",
    thumbnail: "images/characters/character-aishi-thumb.png",
    imagePlaceholder: "INSERT AISHI FULL-BODY ARTWORK HERE",
    thumbnailPlaceholder: "INSERT AISHI ICON HERE",
    facts: [
      ["Name", "Aishi"], ["Role", "Protagonist"], ["Series", "HANE KAGE: VEILED"],
      ["Personality", "Caring • Curious • Determined • Observant"],
      ["Best Friend", "Hane Kage"], ["Species", "Human"]
    ],
    sections: [
      { symbol: "✦", title: "About", paragraphs: [
        "Aishi is the protagonist of HANE KAGE: VEILED and Hane Kage's childhood best friend. Curious, caring, and observant, Aishi is someone who genuinely values the people close to him and has always shared a deep bond with Hane.",
        "Unlike Hane, Aishi tends to be more willing to confront difficult situations rather than simply ignore them. He can be persistent when something feels wrong, especially when someone he cares about is involved.",
        "Years after Hane's mysterious disappearance, Aishi returns to the old Kage family mansion searching for answers. What begins as a search for his childhood friend gradually becomes something far stranger as the mansion reveals forgotten memories and unexplained phenomena."
      ]},
      { symbol: "☾", title: "Personality", paragraphs: [
        "Aishi is caring and emotionally attentive toward the people he considers important. He is naturally curious and tends to notice details that others might overlook. His determination becomes especially clear when he believes someone needs his help.",
        "Although he can be uncertain when faced with the supernatural events surrounding the mansion, Aishi does not easily abandon the people he cares about. His loyalty to Hane is one of the strongest forces driving him forward."
      ]},
      { symbol: "✦", title: "His Connection to Hane", paragraphs: [
        "Aishi and Hane have been childhood best friends for years, sharing drawings, stories, and countless memories together.",
        "Even after Hane disappears, Aishi refuses to simply forget him."
      ]},
      { symbol: "☽", title: "Story", paragraphs: [
        "Years after Hane Kage's disappearance, Aishi returns to the old Kage family mansion in search of answers. Inside, he encounters strange people, unfamiliar phenomena, and mysteries connected to Hane's past.",
        "As Aishi investigates further, the distinction between memories, imagination, and reality begins to become increasingly uncertain. His search for Hane eventually leads him toward secrets he never expected to uncover."
      ]}
    ]
  },
  {
    name: "Seal",
    subtitle: "Important Character • HANE KAGE: VEILED",
    summary: "An important person connected to Hane's past.",
    image: "images/characters/character-seal.png",
    thumbnail: "images/characters/character-seal-thumb.jpg",
    imagePlaceholder: "INSERT SEAL FULL-BODY ARTWORK HERE",
    thumbnailPlaceholder: "INSERT SEAL ICON HERE",
    facts: [
      ["Name", "Seal"], ["Role", "Important Character"], ["Series", "HANE KAGE: VEILED"],
      ["Personality", "Energetic • Affectionate • Unpredictable"],
      ["Connection", "Hane Kage"], ["Appears In", "Childhood • Kage Mansion"]
    ],
    sections: [
      { symbol: "✦", title: "About", paragraphs: [
        "Seal is an important character in HANE KAGE: VEILED. She is someone who holds a significant place in Hane's life, although her presence and personality become increasingly mysterious as the story unfolds.",
        "As a child, Seal was gentle, affectionate, and naturally energetic. She had a warm personality and was capable of bringing a sense of comfort and liveliness to the people around her.",
        "However, the Seal encountered within the Kage Mansion is noticeably different. Her energetic personality becomes much more intense, unpredictable, and eccentric, making it difficult for Aishi to understand exactly what she wants or what she knows."
      ]},
      { symbol: "☾", title: "Personality", paragraphs: [
        "Seal's personality changes depending on the period of her life shown in the story. As a child, she is soft-hearted, affectionate, and energetic, with a naturally warm presence.",
        "Her later appearance within the Kage Mansion presents a much more intense side of her personality. She can be extremely energetic, eccentric, and difficult to predict, often behaving in ways that leave Aishi questioning what is really going on."
      ]},
      { symbol: "✦", title: "Her Connection to Hane", paragraphs: [
        "Seal is an important person in Hane's life. Their relationship becomes particularly significant when the events surrounding Hane's disappearance begin to unfold."
      ]},
      { symbol: "☽", title: "Story", paragraphs: [
        "Seal's connection to Hane places her close to the mysteries surrounding his past. When Aishi encounters someone resembling the Seal he remembers, however, her behavior raises questions about what he truly knows about her.",
        "As the story progresses, Seal becomes one of the characters whose presence may hold clues to the larger mystery surrounding the Kage Mansion and Hane."
      ]}
    ]
  },
  {
    name: "The Shadow",
    subtitle: "Major Character / Mysterious Entity • HANE KAGE: VEILED",
    summary: "Something is always watching.",
    /* These exact filenames can be added later without changing this file. */
    image: "images/characters/character-shadow.png",
    thumbnail: "images/characters/character-shadow-thumb.png",
    imagePlaceholder: "INSERT SHADOW FULL-BODY ARTWORK HERE",
    thumbnailPlaceholder: "INSERT SHADOW ICON HERE",
    facts: [
      ["Name", "The Shadow"], ["Nickname", "Shadow"], ["Age", "Unknown"],
      ["Gender", "Unknown"], ["Pronouns", "It / Its"], ["Species", "Supernatural Entity"],
      ["Role", "Major Character / Mysterious Entity"], ["Status", "Unknown"]
    ],
    sections: [
      { symbol: "✦", title: "About", paragraphs: [
        "The Shadow is a mysterious supernatural presence connected to the strange events surrounding Hane Kage and the Kage Mansion.",
        "It rarely reveals its intentions. Sometimes it simply watches from a distance, while at other times it seems to react to the people around it.",
        "The Shadow appears to have a strange connection to Hane, although the true nature of this connection remains unknown."
      ]},
      { symbol: "☾", title: "Personality", paragraphs: [
        "The Shadow is difficult to understand. It is quiet, observant, mysterious, and unpredictable.",
        "Unlike a simple monster, its behavior can be strangely inconsistent. At times it appears threatening, while at others it seems almost protective."
      ]},
      { symbol: "✦", title: "Abilities", list: ["Shadow Manipulation", "Manifestation", "Unknown Supernatural Abilities"] },
      { symbol: "☾", title: "Connection to Hane", paragraphs: [
        "The Shadow seems particularly connected to Hane Kage. Its presence repeatedly appears around events involving him, suggesting that it knows more about Hane than it reveals.",
        "But what exactly connects them?"
      ]},
      { symbol: "☽", title: "Story", paragraphs: [
        "The Shadow begins appearing around the strange phenomena surrounding the Kage Mansion. As Aishi investigates Hane's disappearance, its presence becomes increasingly difficult to ignore.",
        "It can appear in mirrors, corridors, drawings, and other unexpected places, blurring the boundaries between memories, imagination, and reality.",
        "Whether the Shadow is helping Aishi, manipulating him, or simply observing remains one of the mysteries surrounding the mansion."
      ]}
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const selectorContainer = document.getElementById("characterSelectors");
  if (!selectorContainer) return;

  const imageArea = document.getElementById("characterImage");
  const infoArea = document.querySelector(".character-stage__info");
  const factsArea = document.getElementById("characterFacts");
  const recordArea = document.getElementById("characterRecord");
  let selectedIndex = 0;

  function renderSelectors() {
    selectorContainer.innerHTML = "";
    characters.forEach((character, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "character-selector";
      button.dataset.characterIndex = String(index);
      button.setAttribute("aria-label", `View ${character.name}`);

      const portrait = character.thumbnail
        ? `<span class="character-selector__portrait"><img src="${character.thumbnail}" alt="" loading="lazy"></span>`
        : `<span class="character-selector__portrait character-selector__portrait--placeholder">${character.thumbnailPlaceholder}</span>`;

      button.innerHTML = `${portrait}<span class="character-selector__copy"><strong>${character.name}</strong><small>${character.summary}</small></span>`;
      const portraitImage = button.querySelector(".character-selector__portrait img");
      portraitImage?.addEventListener("error", () => {
        const portraitArea = portraitImage.closest(".character-selector__portrait");
        portraitArea.classList.add("character-selector__portrait--placeholder");
        portraitArea.textContent = character.thumbnailPlaceholder;
      });
      button.addEventListener("click", () => selectCharacter(index));
      selectorContainer.appendChild(button);
    });
  }

  function renderArtwork(character) {
    imageArea.classList.toggle("character-stage__image--placeholder", !character.image);
    imageArea.innerHTML = character.image
      ? `<img class="character-full-art" src="${character.image}" alt="Full-body artwork of ${character.name}">`
      : `<span class="character-art-placeholder">${character.imagePlaceholder}</span>`;
    const artworkImage = imageArea.querySelector(".character-full-art");
    artworkImage?.addEventListener("error", () => {
      imageArea.classList.add("character-stage__image--placeholder");
      imageArea.innerHTML = `<span class="character-art-placeholder">${character.imagePlaceholder}</span>`;
      imageArea.setAttribute("aria-label", character.imagePlaceholder);
    });
    imageArea.setAttribute("aria-label", character.image ? `${character.name} full-body artwork` : character.imagePlaceholder);
  }

  function renderFacts(character) {
    factsArea.innerHTML = character.facts.map(([label, value]) =>
      `<div><dt>${label}</dt><dd>${value}</dd></div>`
    ).join("");
  }

  function renderRecord(character) {
    recordArea.innerHTML = character.sections.map((section) => {
      const content = section.paragraphs
        ? section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")
        : `<ul>${section.list.map((item) => `<li>${item}</li>`).join("")}</ul>`;
      return `<article class="character-record__section"><h3><span aria-hidden="true">${section.symbol}</span>${section.title}</h3>${content}</article>`;
    }).join("");
  }

  function updateProfile(index) {
    const character = characters[index];
    document.getElementById("characterIndex").textContent = `${String(index + 1).padStart(2, "0")} / ${String(characters.length).padStart(2, "0")}`;
    document.getElementById("characterSubtitle").textContent = character.subtitle;
    document.getElementById("characterName").textContent = character.name;
    document.getElementById("characterDescription").textContent = character.summary;
    renderArtwork(character);
    renderFacts(character);
    renderRecord(character);

    document.querySelectorAll(".character-selector").forEach((button, buttonIndex) => {
      const active = buttonIndex === index;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function selectCharacter(index) {
    selectedIndex = (index + characters.length) % characters.length;
    imageArea.classList.add("switching");
    infoArea.classList.add("switching");
    recordArea.classList.add("switching");
    window.setTimeout(() => {
      updateProfile(selectedIndex);
      imageArea.classList.remove("switching");
      infoArea.classList.remove("switching");
      recordArea.classList.remove("switching");
    }, 220);
  }

  document.getElementById("previousCharacter").addEventListener("click", () => selectCharacter(selectedIndex - 1));
  document.getElementById("nextCharacter").addEventListener("click", () => selectCharacter(selectedIndex + 1));
  renderSelectors();
  updateProfile(0);
});

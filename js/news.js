// ========================================
// ADD NEW NEWS POSTS BELOW
// Copy one object, paste it at the top,
// then change date, title, text and image.
// ========================================

const newsItems = [
  {
    date: "2026.09.08",
    title: "Official Website Open",
    text: "The official HANE KAGE: VEILED website is now online.",
    image: ""
  }

  /* EXAMPLE — remove these comment marks to use it:
  ,{
    date: "2026.10.01",
    title: "New Character Visual Revealed",
    text: "A new character visual has been added to the official website.",
    image: "images/news/news-02.jpg"
  }
  */
];

/* ==================================================
   ADD NEW EPISODES HERE
   Keep image as "" until a thumbnail is available.
   ================================================== */
const episodeItems = [
  {
    number: "01",
    status: "Coming Soon",
    title: "The Beginning",
    description: "Aishi returns to the Kage mansion, searching for answers about the disappearance of his childhood friend.",
    image: ""
  },
  {
    number: "02",
    status: "Coming Soon",
    title: "—",
    description: "Future episode details will be revealed.",
    image: ""
  },
  {
    number: "03",
    status: "Coming Soon",
    title: "—",
    description: "Future episode details will be revealed.",
    image: ""
  }
];

function createNewsCard(item) {
  const article = document.createElement("article");
  article.className = "news-card";

  const time = document.createElement("time");
  time.dateTime = item.date.replaceAll(".", "-");
  time.textContent = item.date;

  const copy = document.createElement("div");
  const title = document.createElement("h2");
  const text = document.createElement("p");
  title.textContent = item.title;
  text.textContent = item.text;
  copy.append(title, text);

  const image = document.createElement("div");
  image.className = "news-image placeholder";
  image.setAttribute("role", "img");
  if (item.image) {
    image.classList.add("has-image");
    image.style.backgroundImage = `url("${item.image}")`;
    image.setAttribute("aria-label", `${item.title} news image`);
  } else {
    image.textContent = "INSERT NEWS IMAGE HERE";
    image.setAttribute("aria-label", "News image placeholder");
  }

  article.append(time, copy, image);
  return article;
}

function createEpisodeCard(item) {
  const article = document.createElement("article");
  article.className = "episode-card";

  const number = document.createElement("span");
  number.className = "episode-number";
  number.textContent = item.number;

  const image = document.createElement("div");
  image.className = "episode-thumb placeholder";
  image.setAttribute("role", "img");
  if (item.image) {
    image.textContent = "";
    image.style.backgroundImage = `url("${item.image}")`;
    image.style.backgroundSize = "cover";
    image.style.backgroundPosition = "center";
    image.setAttribute("aria-label", `Episode ${item.number} image`);
  } else {
    image.textContent = "INSERT EPISODE IMAGE HERE";
    image.setAttribute("aria-label", "Episode image placeholder");
  }

  const info = document.createElement("div");
  info.className = "episode-info";
  const status = document.createElement("span");
  status.textContent = `Episode ${item.number} · ${item.status}`;
  const title = document.createElement("h2");
  title.textContent = item.title;
  const description = document.createElement("p");
  description.textContent = item.description;
  info.append(status, title, description);

  article.append(number, image, info);
  return article;
}

document.addEventListener("DOMContentLoaded", () => {
  const newsList = document.getElementById("newsList");
  const episodeList = document.getElementById("episodeList");
  // ISO-style YYYY.MM.DD dates sort correctly as text.
  if (newsList) [...newsItems].sort((a, b) => b.date.localeCompare(a.date)).forEach(item => newsList.appendChild(createNewsCard(item)));
  if (episodeList) episodeItems.forEach(item => episodeList.appendChild(createEpisodeCard(item)));
});

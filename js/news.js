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
    image: "images/logo.png",
    imageFit: "auto 88%"
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
   The filenames are already defined. Add each future thumbnail to the
   images folder using the exact name shown below.
   ================================================== */
const episodeItems = [
  {
    number: "01",
    status: "Coming Soon",
    title: "A World We Drew",
    description: "Young Hane starts at a new school, where he meets Aishi, an unusual boy who soon becomes his first true friend. As the two grow closer, they escape into worlds of their own creation through drawings and imagination. Their innocent friendship marks the beginning of a bond that will shape both of their lives.",
    image: "images/episode-01.jpg"
  },
  {
    number: "02",
    status: "Coming Soon",
    title: "—",
    description: "Future episode details will be revealed.",
    image: "images/episode-02.jpg"
  },
  {
    number: "03",
    status: "Coming Soon",
    title: "—",
    description: "Future episode details will be revealed.",
    image: "images/episode-03.jpg"
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
    image.style.backgroundSize = item.imageFit || "cover";
    image.style.backgroundRepeat = "no-repeat";
    image.style.backgroundPosition = "center";
    image.setAttribute("aria-label", `${item.title} news image`);
  } else {
    image.textContent = "";
    image.setAttribute("aria-label", "News image not yet available");
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
  image.textContent = "";
  image.setAttribute("aria-label", `Episode ${item.number} image not yet available`);
  if (item.image) {
    const probe = new Image();
    probe.onload = () => {
      image.textContent = "";
      image.style.backgroundImage = `url("${item.image}")`;
      image.style.backgroundSize = "cover";
      image.style.backgroundPosition = "center";
      image.setAttribute("aria-label", `Episode ${item.number} image`);
    };
    probe.src = item.image;
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

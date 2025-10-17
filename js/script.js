const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", () => {
  sidebar.classList.add("open");
  main.classList.add("shifted");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("open");
  main.classList.remove("shifted");
});

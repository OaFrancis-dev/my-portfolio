function showNavMenu() {
  let x = document.getElementById("main_nav");
  let y = document.getElementById("nav_list");
  let e = document.getElementById("navmenu");

  if (e.innerHTML === "close") {
    x.style.height = "auto";
    y.style.display = "none";
    x.style.borderBottom = "none";
    e.innerHTML = "menu";
  } else {
    x.style.height = "100vh";
    x.style.borderBottom = "1px solid #020617";
    x.style.backgroundColor = "rgba(225, 231, 239, 0.5)";
    e.innerHTML = "close";
    y.style.display = "flex";
  }
}

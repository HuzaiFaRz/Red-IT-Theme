var ScrollTopBtn = document.querySelector("#ScrollTopBtn");
window.onscroll = function () {
  ScrollTopFucntion(), HeaderBackgroundColorFunction();
};
function ScrollTopFucntion() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    ScrollTopBtn.style.opacity = "1";
    ScrollTopBtn.style.visibility = "visible";
    ScrollTopBtn.style.transform = "translateY(-50%)";
  } else {
    ScrollTopBtn.style.opacity = "0";
    ScrollTopBtn.style.visibility = "hidden";
    ScrollTopBtn.style.transform = "translateY(50%)";
  }
}
ScrollTopFucntion();
function HeaderBackgroundColorFunction() {
  var Header = document.querySelector("#Header");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    Header.style.transition = "all 0.3s linear";
    Header.style.backgroundColor = "var(--theme-3)";
  } else {
    Header.style.backgroundColor = "transparent";
    Header.style.transition = "all 0.3s linear";
  }
}
HeaderBackgroundColorFunction();
function OffcanvasMenus() {
  var OffCanvasMenuButton1 = document.querySelector("#OffcanvasMenuButton1");
  var OffCanvasMenuContent1 = document.querySelector("#OffcanvasMenuContent1");
  OffCanvasMenuButton1.addEventListener("click", function () {
    OffCanvasMenuButton1.classList.toggle("active-1");
    if (OffCanvasMenuButton1.classList.contains("active-1")) {
      OffCanvasMenuContent1.style.display = "flex";
    } else {
      OffCanvasMenuContent1.style.display = "none";
    }
  });
  var OffCanvasMenuButton2 = document.querySelector("#OffcanvasMenuButton2");
  var OffCanvasMenuContent2 = document.querySelector("#OffcanvasMenuContent2");
  OffCanvasMenuButton2.addEventListener("click", function () {
    OffCanvasMenuButton2.classList.toggle("active-2");
    if (OffCanvasMenuButton2.classList.contains("active-2")) {
      OffCanvasMenuContent2.style.display = "flex";
    } else {
      OffCanvasMenuContent2.style.display = "none";
    }
  });
  var OffCanvasMenuButton3 = document.querySelector("#OffcanvasMenuButton3");
  var OffCanvasMenuContent3 = document.querySelector("#OffcanvasMenuContent3");
  OffCanvasMenuButton3.addEventListener("click", function () {
    OffCanvasMenuButton3.classList.toggle("active-3");

    if (OffCanvasMenuButton3.classList.contains("active-3")) {
      OffCanvasMenuContent3.style.display = "flex";
    } else {
      OffCanvasMenuContent3.style.display = "none";
    }
  });
}
OffcanvasMenus();

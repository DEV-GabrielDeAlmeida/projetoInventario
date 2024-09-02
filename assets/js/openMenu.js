openMenu.addEventListener("click", () => {
  menu.style.display = "flex";

  menu.style.right = menu.offsetWidth * -1 + "px";

  openMenu.style.display = "none";

  document
    .querySelectorAll(
      ".qrCodeBtn, .tableEditIcon, .tableDeleteIcon, .switch, .search, .search_icon, .novoChamadoButton, .novoAtivoButton, .novoUsuarioButton"
    )
    .forEach((icon) => {
      icon.style.display = "none";
    });

  //   qrCodeBtn.style.display = "none";
  //   tableEditIcon.style.display = "none";
  //   tableDeleteIcon.style.display = "none";

  setTimeout(() => {
    menu.style.opacity = "1";

    menu.style.right = "0";
  }, 10);
});

closeMenu.addEventListener("click", () => {
  menu.style.opacity = "0";

  document
    .querySelectorAll(
      ".qrCodeBtn, .tableEditIcon, .tableDeleteIcon, .switch, .search, .search_icon, .novoChamadoButton, .novoAtivoButton, .novoUsuarioButton"
    )
    .forEach((icon) => {
      icon.removeAttribute("style");
    });  

  menu.style.right = menu.offsetWidth * -1 + "px";

  setTimeout(() => {
    menu.removeAttribute("style");
    openMenu.removeAttribute("style");
  }, 200);
});

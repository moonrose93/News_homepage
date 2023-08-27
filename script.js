 const iconMenuEl = document.getElementById("icon-menu");
 const iconCloseEl = document.getElementById("icon-menu-close");
 const pagesMobile = document.getElementById("pages-mobile");

 iconMenuEl.addEventListener("click",() => {
  console.log("clicked");
  pagesMobile.style.display = "block";
  iconMenuEl.style.display = "none";
 });

 iconCloseEl.addEventListener("click",()=>{
    pagesMobile.style.display = "none";
    iconMenuEl.style.display = "block";
 })

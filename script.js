document
  .getElementById("openSidebarBtn")
  .addEventListener("click", function (e) {
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("openSidebarBtn").style.display = "none";
    e.preventDefault();
  });

document
  .getElementById("closeSidebarBtn")
  .addEventListener("click", function (e) {
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("openSidebarBtn").style.display = "block";
    e.preventDefault();
  });

// ===== Load Sidebar =====

fetch("/sidebar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("sidebar").innerHTML = data;

    // ===== Active Menu =====

    const links = document.querySelectorAll(".menu a");

    let currentPath = window.location.pathname;

    currentPath = currentPath
      .replace(/index\.html$/, "")
      .replace(/\.html$/, "")
      .replace(/\/$/, "");

    // Home
    if (currentPath === "") {
      currentPath = "/";
    }

    links.forEach(link => {
      let linkPath = link.getAttribute("href");

      linkPath = linkPath
        .replace(/index\.html$/, "")
        .replace(/\.html$/, "")
        .replace(/\/$/, "");

      if (linkPath === "") {
        linkPath = "/";
      }

      if (linkPath === currentPath) {
        link.classList.add("active");
      }
    });
  })
  .catch(error => {
    console.error("Failed to load sidebar:", error);
  });
function dropdownFunction() {
    document.getElementById("contentDropdown").classList.toggle("show");
  }
  
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var contentDropdown = document.getElementById("contentDropdown");
      if (contentDropdown.classList.contains('show')) {
        contentDropdown.classList.remove('show');
      }
    }
  }
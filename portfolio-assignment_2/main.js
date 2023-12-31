// Smooth effect for the menu and links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      window.scrollTo({
        top: targetElement.offsetTop - 70, 
        behavior: 'smooth'
      });
    });
  });
  
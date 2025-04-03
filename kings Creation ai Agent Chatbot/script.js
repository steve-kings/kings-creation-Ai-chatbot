/* === script.js === */

// Scroll to Chat Section
function toggleChat() {
  document.getElementById("chat-section").scrollIntoView({behavior: "smooth"});
}

// Add smooth scrolling for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
      }
  });
});

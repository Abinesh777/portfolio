window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.section').forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = 'translateY(50px)';
  });

  const revealOnScroll = () => {
    const scrollY = window.scrollY + window.innerHeight;
    document.querySelectorAll('.section').forEach(sec => {
      if (scrollY > sec.offsetTop + 100) {
        sec.style.transition = '0.6s ease-out';
        sec.style.opacity = 1;
        sec.style.transform = 'translateY(0)';
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});

// Show project details dynamically
function showProject(type) {
  const container = document.getElementById("project-details-container");
  container.style.display = "flex";
  let content = "";

  if (type === "figma") {
    content = `
      <div class="project-card-extra">
        <h4>Pet Care App Prototype</h4>
        <p>Tools: Figma, FigJam</p>
        <a href="assets/project1" target="_blank" class="live-btn">Live Demo</a>
      </div>
      <div class="project-card-extra">
        <h4>E-commerce Wireframe</h4>
        <p>Tools: Figma</p>
        <a href="YOUR_FIGMA_LINK" target="_blank" class="live-btn">Live Demo</a>
      </div>`;
  } else if (type === "web") {
    content = `
      <div class="project-card-extra">
        <h4>Portfolio Website</h4>
        <p>Tools: HTML, CSS, JS</p>
        <a href="assets/project1" target="_blank" class="live-btn">Live Demo</a>
      </div>
      <div class="project-card-extra">
        <h4>Full Stack App</h4>
        <p>Tools: Java, React</p>
        <a href="YOUR_PROJECT_LINK" target="_blank" class="live-btn">Live Demo</a>
      </div>`;
  } else if (type === "design") {
    content = `
      <div class="project-card-extra">
        <h4>Brand Logo Design</h4>
        <p>Tools: Illustrator, Photoshop</p>
        <a href="assets/taco logo.jpg" target="_blank" class="live-btn">View Logo</a>
      </div>
      <div class="project-card-extra">
        <h4>Poster Design</h4>
        <p>Tools: Photoshop</p>
        <a href="assets/hiring poster.png" target="_blank" class="live-btn">View Poster</a>
      </div>
      <div class="project-card-extra">
        <h4>T-Shirt Graphic</h4>
        <p>Tools: Illustrator</p>
        <a href="assets/tt tshirt.jpg" target="_blank" class="live-btn">View Design</a>
      </div>
      <div class="project-card-extra">
        <h4>Creative Illustration</h4>
        <p>Tools: Photoshop</p>
        <a href="assets/CR7.jpg" target="_blank" class="live-btn">View Artwork</a>
      </div>`;
  }

  // ✅ Append Back button at the end
  content += `
    <div style="width:100%;text-align:center;margin-top:20px;">
      <button onclick="hideProjects()" 
        style="padding:10px 20px;background:#333;color:#fff;border:none;border-radius:8px;cursor:pointer;">
        ← Back
      </button>
    </div>
  `;

  container.innerHTML = content;
}

// ✅ Define hideProjects globally
function hideProjects() {
  const container = document.getElementById("project-details-container");
  container.style.display = "none";
  container.innerHTML = "";
}

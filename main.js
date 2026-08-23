function currentPage() {
  return location.pathname.split("/").pop() || "index.html";
}

function setActiveNav() {
  const page = currentPage();
  document.querySelectorAll(".nav-links a[data-page]").forEach(link => {
    link.classList.toggle("active", link.dataset.page === page);
  });
}

function bindHeader() {
  const mobileMenu = document.getElementById("mobileMenu");
  const navLinks = document.getElementById("navLinks");

  if (mobileMenu && navLinks) {
    mobileMenu.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      mobileMenu.setAttribute("aria-expanded", String(open));
    });
  }

  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.dataset.theme = savedTheme;

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      localStorage.setItem("theme", next);
    });
  }

  setActiveNav();
}

function renderFooter() {
  const holder = document.getElementById("site-footer");
  if (!holder) return;

  holder.innerHTML = `
    <footer class="footer">
      <div class="container footer-grid">
        <div>
          <div class="brand">
            <img src="anurag-university-logo.jpg" alt="Anurag University logo">
            <div class="brand-text">
              <div class="brand-title">Anurag University</div>
              <div class="brand-sub">Generative AI Tools Portal</div>
            </div>
          </div>
          <p style="margin-top:14px">Academic resource portal for B.Tech 1st Year Generative AI Tools.</p>
        </div>
        <div>
          <h4>Course</h4>
          <div class="footer-links">
            <a href="course.html">Overview</a>
            <a href="experiments.html">Experiments</a>
            <a href="resources.html">Resources</a>
            <a href="practice.html">Quiz &amp; Scenarios</a>
          </div>
        </div>
        <div>
          <h4>Build</h4>
          <div class="footer-links">
            <a href="ai-tools.html">AI Tools</a>
            <a href="toolkit.html">Project Toolkit</a>
            <a href="aiml-2030.html">AIML Engineer 2030</a>
          </div>
        </div>
        <div>
          <h4>Support</h4>
          <div class="footer-links">
            <a href="faculty.html">Faculty</a>
            <a href="student-guide.html">Student Guide</a>
            <a href="doubts.html">Student Doubts</a>
          </div>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>© 2026 Anurag University</span>
        <span>Academic Resource Portal</span>
      </div>
    </footer>`;
}

function toast(message) {
  const target = document.getElementById("toast");
  if (!target) return;
  target.textContent = message;
  target.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => target.classList.remove("show"), 2200);
}

function initChecks() {
  document.querySelectorAll("[data-check]").forEach(item => {
    const key = "check_" + item.dataset.check;
    item.checked = localStorage.getItem(key) === "1";
    item.addEventListener("change", () => {
      localStorage.setItem(key, item.checked ? "1" : "0");
      updateChecklistProgress();
    });
  });
  updateChecklistProgress();
}

function updateChecklistProgress() {
  const all = [...document.querySelectorAll("[data-check]")];
  if (!all.length) return;
  const done = all.filter(item => item.checked).length;
  const pct = Math.round((done / all.length) * 100);
  const text = document.getElementById("checkProgressText");
  const fill = document.getElementById("checkProgressFill");
  if (text) text.textContent = `${done}/${all.length} completed · ${pct}%`;
  if (fill) fill.style.width = `${pct}%`;
}

document.addEventListener("DOMContentLoaded", () => {
  bindHeader();
  renderFooter();
  initChecks();
});

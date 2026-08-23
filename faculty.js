const facultyProfiles = [
  {
    id: "faculty-generative-ai-tools2",
    name: "Mr. SHASHANK REDDY V",
    designation: "Assistant Professor",
    specialization: "Artificial Intelligence and Machine Learning",
    department: "Department of AIML",
    qualification: "Master of Technology in Information Technology",
    experience: "3+ Years",
    email: "[Official Faculty Email]",
    mobile: "[Official Faculty Mobile]",
    incharge: "[Incharge For]",
    photo: "New DP.png",
    bio: "I am an Assistant Professor in the Department of Artificial Intelligence and Machine Learning at Anurag University. I have a Master's degree in Information Technology and over 3 years of experience in the field. My research interests include Generative AI, Deep Learning, IoT, DevOps, and Data Engineering.",
    expertise: [
      "Artificial Intelligence",
      "Deep Learning",
      "IoT",
      "DevOps",
      "Data Engineering"
    ],
    research: [
      "Artificial Intelligence",
      "Deep Learning",
      "IoT",
      "DevOps",
      "Data Engineering"
    ],
    office: "IST: 09:00 AM to 04:05 PM"
  }
  // ,
  // {
  //   id: "faculty-generative-ai-tools",
  //   name: "Mr. SHASHANK REDDY V",
  //   designation: "Assistant Professor",
  //   specialization: "Artificial Intelligence and Machine Learning",
  //   department: "Department of AIML",
  //   qualification: "Master of Technology in Information Technology",
  //   experience: "3+ Years",
  //   email: "[Official Faculty Email]",
  //   mobile: "[Official Faculty Mobile]",
  //   incharge: "[Incharge For]",
  //   photo: "Profile_Picture_up.jpg",
  //   bio: "I am an Assistant Professor in the Department of Artificial Intelligence and Machine Learning at Anurag University. I have a Master's degree in Information Technology and over 3 years of experience in the field. My research interests include Generative AI, Deep Learning, IoT, DevOps, and Data Engineering.",
  //   expertise: [
  //     "Artificial Intelligence",
  //     "Deep Learning",
  //     "IoT",
  //     "DevOps",
  //     "Data Engineering"
  //   ],
  //   research: [
  //     "Artificial Intelligence",
  //     "Deep Learning",
  //     "IoT",
  //     "DevOps",
  //     "Data Engineering"
  //   ],
  //   office: "IST: 09:00 AM to 04:05 PM"
  // }
];

function escapeFaculty(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderFacultyChips(items) {
  if (!Array.isArray(items) || !items.length) {
    return '<span class="source-note">Not specified</span>';
  }
  return `<div class="faculty-chip-list">${items
    .map(item => `<span class="badge">${escapeFaculty(item)}</span>`)
    .join("")}</div>`;
}

function facultyMatches(profile, query) {
  if (!query) return true;
  return [
    profile.name,
    profile.designation,
    profile.specialization,
    profile.department,
    profile.qualification,
    profile.experience,
    profile.bio,
    profile.office,
    ...(profile.expertise || []),
    ...(profile.research || [])
  ].join(" ").toLowerCase().includes(query);
}

function renderFaculty() {
  const grid = document.getElementById("facultyGrid");
  if (!grid) return;

  const query = (document.getElementById("facultySearch")?.value || "").trim().toLowerCase();
  const filtered = facultyProfiles.filter(profile => facultyMatches(profile, query));
  const count = document.getElementById("facultyCount");

  if (count) {
    count.textContent = `${filtered.length} ${filtered.length === 1 ? "faculty profile" : "faculty profiles"}`;
  }

  if (!filtered.length) {
    grid.innerHTML = '<div class="empty" style="grid-column:1/-1">No faculty profile matches your search.</div>';
    return;
  }

  grid.innerHTML = filtered.map(profile => `
    <article class="faculty-row-card">
      <aside class="faculty-photo-panel">
        <img class="faculty-photo" src="${escapeFaculty(profile.photo)}" alt="${escapeFaculty(profile.name)}" loading="lazy"
          onerror="this.src='faculty-placeholder.svg'">
      </aside>

      <section class="faculty-row-content">
        <div class="faculty-row-heading">
          <div>
            <div class="label">${escapeFaculty(profile.department)}</div>
            <h2>${escapeFaculty(profile.name)}</h2>
            <p class="faculty-designation">${escapeFaculty(profile.designation)}</p>
          </div>
          <span class="badge">${escapeFaculty(profile.specialization)}</span>
        </div>

        <div class="faculty-info-list">
          <div><strong>Qualification</strong><span>${escapeFaculty(profile.qualification)}</span></div>
          <div><strong>Experience</strong><span>${escapeFaculty(profile.experience)}</span></div>
          <div><strong>Office</strong><span>${escapeFaculty(profile.office)}</span></div>
          <div><strong>Email</strong><span>${escapeFaculty(profile.email)}</span></div>
          <div><strong>Mobile</strong><span>${escapeFaculty(profile.mobile)}</span></div>
          <div><strong>Incharge</strong><span>${escapeFaculty(profile.incharge)}</span></div>
        </div>

        <div class="faculty-row-section">
          <h3>Profile</h3>
          <p>${escapeFaculty(profile.bio)}</p>
        </div>

        <div class="faculty-row-section">
          <h3>Expertise</h3>
          ${renderFacultyChips(profile.expertise)}
        </div>

        <div class="faculty-row-section">
          <h3>Research Interests</h3>
          ${renderFacultyChips(profile.research)}
        </div>
      </section>
    </article>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderFaculty();
  document.getElementById("facultySearch")?.addEventListener("input", renderFaculty);
});

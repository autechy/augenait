let expFilter='all';
function expKey(i){return `exp_${i}`}
function renderExperiments(){
  const search=(document.getElementById('expSearch')?.value||'').toLowerCase();
  const holder=document.getElementById('experimentGrid');
  const filtered=experiments.filter((e,i)=> (expFilter==='all'||String(e.week)===String(expFilter)) && (!search || `${e.title} ${e.desc} ${e.tools.join(' ')}`.toLowerCase().includes(search)));
  holder.innerHTML=filtered.map((e)=>{
    const idx=experiments.indexOf(e), done=localStorage.getItem(expKey(idx))==='1';
    const drive=e.driveLink||'';
    return `<article class="card experiment-card ${done?'is-complete':''}">
      <div class="experiment-top"><div><div class="week-label">Week ${String(e.week).padStart(2,'0')}</div><h3>${e.title}</h3></div><span class="activity-pill">Activity ${e.activity}</span></div>
      <p>${e.desc}</p>
      <div><strong>Suggested tools</strong><div class="filters compact">${e.tools.map(t=>`<span class="badge">${t}</span>`).join('')}</div></div>
      <div class="resource-inline"><span class="resource-dot"></span><span><strong>Google Drive</strong> · ${drive?'Resource linked':'Link placeholder — add faculty/section link in <code>data.js</code>'}</span></div>
      <div class="actions"><button class="btn btn-secondary" onclick="openExperiment(${idx})">Open</button>${drive?`<a class="btn btn-soft" href="${drive}" target="_blank" rel="noopener">Drive ↗</a>`:`<button class="btn btn-soft" disabled>Drive link pending</button>`}<button class="btn ${done?'btn-primary':'btn-soft'}" onclick="toggleExperiment(${idx})">${done?'✓ Completed':'Mark Complete'}</button></div>
    </article>`
  }).join('') || `<div class="empty">No experiments match your search.</div>`;
  updateExperimentProgress();
}
function toggleExperiment(i){localStorage.setItem(expKey(i),localStorage.getItem(expKey(i))==='1'?'0':'1');renderExperiments();toast(localStorage.getItem(expKey(i))==='1'?'Experiment marked complete':'Experiment reopened')}
function updateExperimentProgress(){const done=experiments.filter((_,i)=>localStorage.getItem(expKey(i))==='1').length;const pct=Math.round(done/experiments.length*100);const t=document.getElementById('expProgressText');const f=document.getElementById('expProgressFill');if(t)t.textContent=`${done} / ${experiments.length} activities completed · ${pct}%`;if(f)f.style.width=pct+'%'}
function filterExp(v){expFilter=v;document.querySelectorAll('[data-week]').forEach(x=>x.classList.toggle('active',x.dataset.week===String(v)));renderExperiments()}
function openExperiment(i){
  const e=experiments[i], hasDrive=!!e.driveLink, hasPdf=!!e.pdfLink, hasPpt=!!e.pptLink;
  document.getElementById('modal').classList.add('open');
  document.getElementById('modalContent').innerHTML=`<button class="modal-close" onclick="closeModal()">✕</button>
    <div class="week-label">Week ${String(e.week).padStart(2,'0')} · Activity ${e.activity}</div><h2 style="margin:8px 0 12px">${e.title}</h2><p>${e.desc}</p>
    <div class="modal-grid">
      <div class="feature-item"><span class="dot"></span><div><strong>Objective</strong><p>Plan a prompt, generate an output, review it critically, and document what you learned.</p></div></div>
      <div class="feature-item"><span class="dot"></span><div><strong>Suggested tools</strong><p>${e.tools.join(', ')}</p></div></div>
      <div class="feature-item"><span class="dot"></span><div><strong>Experiment resources</strong><div class="modal-links"><span class="resource-chip">PPT: ${hasPpt?'Available':'Coming Soon'}</span><span class="resource-chip">PDF: ${hasPdf?'Available':'Coming Soon'}</span>${hasDrive?`<a class="resource-chip link" href="${e.driveLink}" target="_blank" rel="noopener">Google Drive ↗</a>`:`<span class="resource-chip">Google Drive: Link placeholder</span>`}</div></div></div>
      <div class="feature-item"><span class="dot"></span><div><strong>Student notes</strong><p>Add observations, prompt iterations, verification steps, and final output links in your own record.</p></div></div>
    </div>
    <div class="notice subtle"><strong>Faculty / resource update:</strong> Add the PPT, PDF, and Google Drive URLs for this experiment in the matching fields in <code>data.js</code>.</div>`
}
function closeModal(){document.getElementById('modal').classList.remove('open')}
window.addEventListener('DOMContentLoaded',()=>{if(document.getElementById('experimentGrid')){for(let i=1;i<=14;i++) document.getElementById('weekFilters').insertAdjacentHTML('beforeend',`<button class="filter-btn" data-week="${i}" onclick="filterExp(${i})">Week ${i}</button>`);document.getElementById('weekFilters').insertAdjacentHTML('afterbegin',`<button class="filter-btn active" data-week="all" onclick="filterExp('all')">All</button>`);document.getElementById('expSearch').addEventListener('input',renderExperiments);renderExperiments()}});

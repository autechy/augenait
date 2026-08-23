let toolFilter='All';
function renderTools(){
  const q=(document.getElementById('toolSearch')?.value||'').toLowerCase();
  const cats=['All',...new Set(tools.map(t=>t.category))];
  document.getElementById('toolFilters').innerHTML=cats.map(c=>`<button class="filter-btn ${toolFilter===c?'active':''}" onclick="setToolFilter('${c.replace(/'/g,"\\'")}')">${c}</button>`).join('');
  const list=tools.filter(t=>(toolFilter==='All'||t.category===toolFilter)&&(!q||`${t.name} ${t.description} ${t.best}`.toLowerCase().includes(q)));
  document.getElementById('toolGrid').innerHTML=list.map(t=>`<article class="card tool-card"><div class="meta">${t.category}</div><h3>${t.name}</h3><p>${t.description}</p><div style="margin-top:12px"><span class="badge">${t.best}</span></div><div class="tool-actions" style="margin-top:16px">${t.url?`<a class="btn btn-secondary" href="${t.url}" target="_blank" rel="noopener">Official site ↗</a>`:`<button class="btn btn-secondary" disabled>Official link to add</button>`}</div></article>`).join('') || `<div class="empty">No matching tools.</div>`;
  const count=document.getElementById('toolCount'); if(count) count.textContent=`${list.length} resources shown`;
}
function setToolFilter(v){toolFilter=v;renderTools()}
function recommendTool(){
  const goal=document.getElementById('goal').value;
  const map={study:['ChatGPT','Claude','NotebookLM'],research:['Perplexity','NotebookLM','Semantic Scholar'],summarize:['Claude','ChatGPT','NotebookLM'],write:['ChatGPT','Claude'],code:['GitHub Copilot','Cursor','VS Code'],images:['Adobe Firefly','Canva AI'],presentations:['Canva AI','Gamma'],brainstorm:['ChatGPT','Gemini','Claude'],exams:['ChatGPT','NotebookLM'],project:['GitHub','GitHub Copilot','Cursor']};
  const names=map[goal]||[]; document.getElementById('recommendation').innerHTML=`<div class="callout"><strong>Suggested starting stack</strong><div class="filters compact">${names.map(n=>`<span class="badge">${n}</span>`).join('')}</div><p style="margin-top:10px">Start with a small stack, verify outputs, and choose tools according to the task and course requirements.</p></div>`;
}
window.addEventListener('DOMContentLoaded',()=>{if(document.getElementById('toolGrid')){document.getElementById('toolSearch').addEventListener('input',renderTools);renderTools()}});

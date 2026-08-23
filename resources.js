let resourceFilter='All';
function renderResources(){
  const q=(document.getElementById('resourceSearch')?.value||'').toLowerCase();
  const weeks=['All','General',...Array.from({length:14},(_,i)=>i+1)];
  document.getElementById('resourceFilters').innerHTML=weeks.map(w=>`<button class="filter-btn ${resourceFilter===String(w)?'active':''}" onclick="setResourceFilter('${w}')">${w==='All'?'All':w==='General'?'General':`Week ${w}`}</button>`).join('');
  const typeFilter=document.getElementById('resourceType')?.value||'All';
  const list=resources.filter(r=>(resourceFilter==='All'||String(r.week)===resourceFilter) && (typeFilter==='All'||r.type===typeFilter) && (!q||`${r.title} ${r.description}`.toLowerCase().includes(q)));
  document.getElementById('resourceGrid').innerHTML=list.map(r=>`<article class="card resource-card ${r.status==='coming-soon'?'placeholder':''}"><div class="meta">${r.type} · ${r.week==='General'?'General':'Week '+String(r.week).padStart(2,'0')}</div><h3>${r.title}</h3><p>${r.description}</p><div class="resource-actions">${r.link?`<a class="btn btn-primary" href="${r.link}" target="_blank" rel="noopener">Open Resource ↗</a>`:`<span class="btn btn-secondary disabled-btn">Coming Soon</span>`}</div></article>`).join('') || `<div class="empty">No matching resources.</div>`;
  const count=document.getElementById('resourceCount'); if(count) count.textContent=`${list.length} resources shown`;
}
function setResourceFilter(v){resourceFilter=String(v);renderResources()}
window.addEventListener('DOMContentLoaded',()=>{if(document.getElementById('resourceGrid')){document.getElementById('resourceSearch').addEventListener('input',renderResources);document.getElementById('resourceType').addEventListener('change',renderResources);renderResources()}});

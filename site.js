const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
function closeMenu(){if(!nav||!toggle)return;nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');}
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav?.classList.contains('open')){closeMenu();toggle.focus();}});
document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu();});
const movies=[...document.querySelectorAll('video')];
movies.forEach(movie=>movie.addEventListener('play',()=>movies.forEach(other=>{if(other!==movie)other.pause();})));
document.querySelectorAll('details').forEach(details=>details.addEventListener('toggle',()=>{if(!details.open)details.querySelectorAll('video').forEach(v=>v.pause());}));
function revealAnchor(){if(!location.hash)return;let target;try{target=document.getElementById(decodeURIComponent(location.hash.slice(1)));}catch{return;}if(!target)return;let parent=target;while(parent){if(parent.tagName==='DETAILS')parent.open=true;parent=parent.parentElement;}target.scrollIntoView();}
window.addEventListener('hashchange',revealAnchor);
if(document.body.dataset.page==='index.html'&&location.hash&&!['#top','#main','#home','#hero-title'].includes(location.hash)){
  const routes={
  "home": "index.html",
  "hero-title": "index.html",
  "about": "about.html",
  "about-title": "about.html",
  "research": "research.html",
  "research-title": "research.html",
  "publications": "publications.html",
  "publications-title": "publications.html",
  "teaching": "teaching.html",
  "teaching-title": "teaching.html",
  "talks": "talks.html#talks",
  "talks-title": "talks.html#talks-title",
  "contact": "about.html#contact",
  "contact-title": "about.html#contact",
  "tissue-mechanics": "mechanics.html#tissue-mechanics",
  "mechanics-title": "mechanics.html#mechanics-title",
  "influx-caption": "mechanics.html#influx-caption",
  "efflux-caption": "mechanics.html#efflux-caption",
  "platform": "tools.html#platform",
  "engineering-title": "tools.html#engineering-title",
  "compression-caption": "tools.html#compression-caption",
  "methodology": "tools.html#methodology",
  "cellular-delivery": "tools.html#cellular-delivery",
  "delivery-title": "tools.html#delivery-title",
  "tissue-models": "models.html#tissue-models",
  "models-title": "models.html#models-title",
  "comsol-simulations": "models.html#comsol-simulations",
  "simulation-title": "models.html#simulation-title",
  "simulation-transport-caption": "models.html#simulation-transport-caption",
  "invited-talks": "talks.html#invited-talks",
  "invited-talks-title": "talks.html#invited-talks-title",
  "conference-presentations": "talks.html#conference-presentations",
  "conference-presentations-title": "talks.html#conference-presentations-title",
  "main": "index.html"
};
  const destination=routes[location.hash.slice(1)];
  if(destination)location.replace(destination);
}else if(location.hash){window.addEventListener('load',revealAnchor);}

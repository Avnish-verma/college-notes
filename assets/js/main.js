// assets/js/main.js
(function(){
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if(toggle && nav){
    toggle.addEventListener('click', ()=> nav.classList.toggle('open'));
  }

  // Global search: filters subject cards and recent uploads
  const input = document.getElementById('globalSearch');
  const cards = document.querySelectorAll('#subjectGrid .card');
  const recents = document.querySelectorAll('#recentList li');

  function applyFilter(q){
    const term = q.trim().toLowerCase();
    const match = (el)=> (el.getAttribute('data-name')||'').toLowerCase().includes(term);
    cards.forEach(el=> el.style.display = !term || match(el) ? '' : 'none');
    recents.forEach(el=> el.style.display = !term || match(el) ? '' : 'none');
  }

  if(input){
    input.addEventListener('input', (e)=> applyFilter(e.target.value));
  }
})();

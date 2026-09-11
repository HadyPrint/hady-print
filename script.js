const menuBtn=document.querySelector('.menu-btn');const navLinks=document.querySelector('.nav-links');
menuBtn?.addEventListener('click',()=>{navLinks.classList.toggle('open');menuBtn.setAttribute('aria-expanded',navLinks.classList.contains('open'))});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();
const form=document.getElementById('quoteForm');form?.addEventListener('submit',e=>{e.preventDefault();document.querySelector('.form-status').textContent='تم تسجيل طلبك محليًا في النسخة التجريبية ✓ — نربط الإرسال بواتساب أو البريد عند إضافة بيانات الشركة.';form.reset()});

const menuBtn=document.querySelector('.menu-btn');const navLinks=document.querySelector('.nav-links');
menuBtn?.addEventListener('click',()=>{navLinks.classList.toggle('open');menuBtn.setAttribute('aria-expanded',navLinks.classList.contains('open'))});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();
const form = document.getElementById('quoteForm');

form?.addEventListener('submit', e => {
  e.preventDefault();

  const name = form.querySelector('input[placeholder="اكتب اسمك"]').value;
  const phone = form.querySelector('input[type="tel"]').value;
  const product = form.querySelector('select').value;
  const details = form.querySelector('textarea').value;

  const message =
`السلام عليكم، أريد طلب عرض سعر من الهادي برنت.

👤 الاسم: ${name}
📞 رقم الهاتف: ${phone}
📦 نوع المنتج: ${product}
📝 تفاصيل الطلب:
${details}`;

  const whatsappNumber = '201070007844';

  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
    '_blank'
  );
});
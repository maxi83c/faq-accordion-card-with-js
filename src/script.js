const faqList = document.getElementById('faq-list');
const faqs = document.querySelectorAll('.list__title');
console.log(faqs);
faqList.addEventListener('click', (e) => {
  faqs.forEach(faq => {
    if (e.target === faq)
      e.target.classList.toggle('list__title--show');
    else
      faq.classList.remove('list__title--show');
  })  
})



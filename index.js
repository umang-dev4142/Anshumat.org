document.getElementById('year').textContent = new Date().getFullYear();

    // Helper: form validation handler
    function attachValidation(form){
      form.addEventListener('submit', (e)=>{
        e.preventDefault();
        if(!form.checkValidity()){
          e.stopPropagation();
          form.classList.add('was-validated');
          // show inline invalid for newsletter
          if(form.id==='newsletterForm'){
            form.querySelector('.invalid-feedback').style.display = 'block';
          }
          return;
        }
        const formData = Object.fromEntries(new FormData(form).entries());
        console.log(`[Form Submitted] ${form.id}:`, formData);
        // Simple toast via alert (replace with real toast/ API call)
        alert('Thanks! Your submission has been received.');
        form.reset();
        form.classList.remove('was-validated');
        const fb = form.querySelector('.invalid-feedback');
        if(fb) fb.style.display='none';
      });
    }

    ['quickRegister','contactForm','registerForm','newsletterForm']
      .map(id => document.getElementById(id))
      .forEach(f => f && attachValidation(f));

    // Smooth scroll fix for offset (if needed for sticky navbar)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
          e.preventDefault();
          const y = target.getBoundingClientRect().top + window.pageYOffset - 70;
          window.scrollTo({top:y, behavior:'smooth'});
        }
      });
    });
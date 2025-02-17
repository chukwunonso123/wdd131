// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send this data to your server
    console.log('Form submitted:', { name, email, message });
    
    // Clear form
    this.reset();
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
  });
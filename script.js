// Basic front-end behavior: close mobile menu when a link is clicked & contact form simple handler
document.addEventListener('DOMContentLoaded',function(){
// close mobile nav when link clicked
document.querySelectorAll('.main-nav a').forEach(function(a){
a.addEventListener('click',function(){
// find any visible nav-toggle checkboxes and uncheck
document.querySelectorAll('.nav-toggle').forEach(function(cb){cb.checked=false})
})
})


// contact form handler (no server) - demonstrates client validation and feedback
var form = document.getElementById('contactForm');
if(form){
form.addEventListener('submit',function(e){
e.preventDefault();
var name = form.name.value.trim();
var email = form.email.value.trim();
var message = form.message.value.trim();
var msgEl = document.getElementById('formMsg');
if(!name || !email || !message){
msgEl.textContent = 'Please complete all fields.';
return;
}
// simulate success
msgEl.textContent = 'Thanks, ' + name.split(' ')[0] + '! Your message was received (demo).';
form.reset();
})
}
})



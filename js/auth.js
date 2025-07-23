var form;
function changeForm() {
  const signin = document.getElementById('signinForm');
  const signup = document.getElementById('signupForm');
  if (form==0) {
    signup.classList.remove('show');
    signin.classList.add('show')
    return form=1;
  } else {
    signin.classList.remove('show');
    signup.classList.add('show');
    return form=0;
  }
}
function showPass() {
  const pass = document.getElementById("passField");
  if (pass.type==="password") {
    pass.type="text";
  } else {
    pass.type="password";
  }
}
// Validation
const upForm = document.getElementById('signupForm');
const upUsername = document.getElementById('upUsername');
const upEmail = document.getElementById('upEmail');
const upPassword = document.getElementById('upPassword');
const confirmPassword = document.getElementById('confirmPassword');

upUsername.addEventListener('input', function() {
  if (upUsername.value=="") {
    upUsername.classList.remove('valid','invalid');
  } else if (upUsername.checkValidity()) {
    upUsername.classList.remove("invalid");
    upUsername.classList.add("valid");
  } else {
    upUsername.classList.remove("valid");
    upUsername.classList.add("invalid");
  }
});
upEmail.addEventListener('input', function() {
  if (upEmail.value=="") {
    upEmail.classList.remove('valid','invalid');
  } else if (upEmail.checkValidity()) {
    upEmail.classList.remove("invalid");
    upEmail.classList.add("valid");
  } else {
    upEmail.classList.remove("valid");
    upEmail.classList.add("invalid");
  }
});
upPassword.addEventListener('input', function() {
  if (upPassword.value=="") {
    upPassword.classList.remove('valid','invalid');
  } else if (upPassword.checkValidity()) {
    upPassword.classList.remove("invalid");
    upPassword.classList.add("valid");
  } else {
    upPassword.classList.remove("valid");
    upPassword.classList.add("invalid");
  }
  if (upPassword.value==confirmPassword.value) {
    confirmPassword.classList.remove("invalid");
    confirmPassword.classList.add("valid");
  } else {
    confirmPassword.classList.remove("valid");
    confirmPassword.classList.add("invalid");
  }
});
confirmPassword.addEventListener('input', function() {
  if (confirmPassword.value=="") {
    confirmPassword.classList.remove('valid','invalid');
  } else if (confirmPassword.value==upPassword.value) {
    confirmPassword.classList.remove("invalid");
    confirmPassword.classList.add("valid");
  } else {
    confirmPassword.classList.remove("valid");
    confirmPassword.classList.add("invalid");
  }
});
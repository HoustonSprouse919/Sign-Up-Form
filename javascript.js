const confirmButton = document.querySelector('#createAccount');
function checkIfSame() {
  if (document.getElementById('password').value === document.getElementById('confirmPassword').value) {
    console.log('they are the same');
  } else {
    console.log('they arent the same');
  }
}
confirmButton.addEventListener('click', checkIfSame);

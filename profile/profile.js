const name = document.getElementById('name');
const email = document.getElementById('email');
const token = document.getElementById('token');
const password = document.getElementById('password');
const submit = document.getElementById('logout');

let currentUser = JSON.parse(sessionStorage.getItem('loggenInUser'));

name.innerText = currentUser.name;
email.innerText = currentUser.email;
token.innerText = currentUser.token;
password.innerText = currentUser.password;
token.innerText = currentUser.token;

submit.addEventListener('click',()=>{
    location.href='../index.html';
    alert("Are you sure ! you want Logout");
    localStorage.removeItem('users');
})


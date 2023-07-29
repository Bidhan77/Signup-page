const signupBtn = document.getElementById('submit');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
let token = '';


// check if user already exist
function checkIfUserExist(email){
    let users = JSON.parse(localStorage.getItem('users'));
    // users will be array of objects
    const obj = users.find(userObj=>{
        return userObj.email === email;
        // if obj with email is exist 
    })
    if(obj) return true;
    else return false;
}


function saveUser(name,emailInput,passwordInput){
    let userObj ={
        name: name, // firstName.value
        email: emailInput,
        password: passwordInput,
        token : token
    }
    let users = JSON.parse(localStorage.getItem('users'));
    if(users === null){
        users = [];
    }
    users.push(userObj); // i pushed my users in users array
    localStorage.setItem('users',JSON.stringify(users)); // updated it in localStorage

    //  write a logic that this user is signed in
    // session storage will delete data after tab is closed
    sessionStorage.setItem('loggenInUser',JSON.stringify(userObj));
    name.value='';
    email.value='';
    password.value='';
    confirmPassword.value='';
    alert('sign up successful');
    // this is how we handle multiple pages
    // this will redirect to profile folder
    window.location.href='./profile/profile.html';
}



submit.addEventListener('click', (event) => {
    event.preventDefault();
    // if any of my field is empty
    if (name.value.trim() === '' ||
        email.value.trim() === '' ||
        password.value.trim() === '' ||
        confirmPassword.value.trim() === '') {
        alert('Error: All fields are mandatory!');
    }
    else {
        if (password.value.trim() !== confirmPassword.value.trim()) {
            alert('password not matching');
            password.value = '';
            confirmPassword.value = '';
        } else {
            // if my user exist
            if (localStorage.getItem('users')) {
                if (checkIfUserExist(email.value)) {
                    alert('email is linked with other account');
                } else {
                    saveUser(name.value, email.value, password.value, accessToken.value);
                }
            } else {
                saveUser(name.value, email.value, password.value, accessToken.value);
            }
        }
    }
})



// Function to generate a random 16-byte access token
function generateAccessToken() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 16; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters.charAt(randomIndex);
    }
    return token;
  }
  const accessToken = generateAccessToken();
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

function login() {
    // let username = document.getElementById('username').value;
    // let password = document.getElementById('password').value;
    // Add your login logic here
    //  console.log('Username: ' + username);
    //  console.log('Password: ' + password);
    let isLogin = document.querySelector('button');
    if (isLogin=true) {
        
    }
}

  function signup() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('Email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('Confirm Password').value;
    // Add your login logic here
    console.log('Username: ' + username);
    console.log('Password: ' + password);
}
function Forgot(){
    document.getElementById('forgotPasswordButton').addEventListener('click', function() {
        window.location.href = 'signup.html';
    });
}

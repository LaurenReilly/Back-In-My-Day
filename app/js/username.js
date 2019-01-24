let currUser = localStorage.getItem('username');

function logoutUser(){
    localStorage.clear();
}

if (currUser) {
    document.getElementById('user-name').innerHTML = `Logged in as: &nbsp &nbsp <span style="color:white;">${currUser}</span>`;
    document.getElementById('nav-links').innerHTML += `<li class="nav-item"><a role="navigation" class="nav-link m-1" href="/auth/logout" onclick="logoutUser()">Logout</a></li>`;
}
else {
    document.getElementById('nav-links').innerHTML += `<li class="nav-item"><a role="navigation" class="nav-link m-1" href="/auth/login">Login</a></li>`;
}



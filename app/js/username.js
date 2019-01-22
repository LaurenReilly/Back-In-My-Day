let currUser = localStorage.getItem('username');

if(currUser){
    document.getElementById('user-name').innerHTML = `Logged in as: &nbsp &nbsp <span style="color:white;">${currUser}</span>`;
}
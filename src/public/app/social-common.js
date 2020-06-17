
$(()=>{
    $('#navbar').load('../component/navbar.html', loginIfNeeded);
    $('#footer').load('../component/footer.html')
})

function loginIfNeeded(){
    let currentUser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null;
    if(!currentUser){
        $.post('/api/users', {}, (user)=>{
            if(user){
                console.log('registered current user as ', user.username)
                window.localStorage.user = JSON.stringify(user);
                currentUser = user;
                $('#nav-username').text(currentUser.username);
            }
        })
    }
    else{
        console.log('resumming session as ', currentUser.username);
        $('#nav-username').text(currentUser.username)
    }
}
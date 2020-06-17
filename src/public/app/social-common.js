
$(()=>{
    $('#navbar').load('../component/navbar.html', loginIfNeeded);
    $('#footer').load('../component/footer.html')
    $('#content').load('../component/all-article.html', loadPosts);
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

function loadPosts(){
    $.get('/api/posts', (posts)=>{
        for(p of posts){
            $('#posts-container').append(`
            <div class= "col-4">
              <div class="card m-2">
                <div class="card-body">
                  <h5 class="card-title">${p.title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${p.user.username}</h6>
                  <p class="card-text">${p.body}</p>
                  <a href="#" class="card-link">Read</a>
                  <a href="#" class="card-link">Like</a>
                </div>
              </div>
            </div>
            `)
        }
    })
}
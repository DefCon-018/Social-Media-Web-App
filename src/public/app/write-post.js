
$('#btn-upload').click(()=>{
    let title = $('#title-text').val();
    let body = $('#body-text').val();
    let a = JSON.parse(window.localStorage.user)
    let id = a.id;
    $.post('/api/posts', {userId: id, title: title, body: body}, function(post){
        console.log(a.id)
    })
})
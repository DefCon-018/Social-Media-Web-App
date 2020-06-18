
let navLink = $('.navbar-nav .nav-link');

navLink.click((event) =>{
    console.log(event)
    let currentUrl = `/component/${$(event.target).attr('data-component')}.html`
    $('#content').load(currentUrl);
})
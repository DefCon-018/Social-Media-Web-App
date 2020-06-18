
let navLink = $('.navbar-nav .nav-link');

navLink.click((event) =>{
    let currentUrl = `/component/${$(event.target).attr('data-component')}.html`
    $('#content').load(currentUrl);
})
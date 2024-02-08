const article_links = document.querySelectorAll('a');
const image_wrapper = document.querySelectorAll('.aybn_img-wrapper');


article_links.forEach(links => {
    links.addEventListener('click', event => {
        event.preventDefault();
        console.log(event.target.dataset.title);
    })
})

image_wrapper.forEach(iw => {
    iw.addEventListener('click', event => {
        if(iw.classList.contains('popup')){
            removePopupClass();
        }
        else{
            iw.querySelector('img').style.width = '0px';
            setTimeout(()=> {
                iw.classList.add('popup');
                iw.querySelector('img').style.width = ''; // reset width to default
            }, 0);
        }
    })
});


function removePopupClass(){
    image_wrapper.forEach(iw => {
        iw.classList.remove('popup');
    });
}
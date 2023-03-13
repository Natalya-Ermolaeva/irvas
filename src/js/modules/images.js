const images = () => {
    const imgPopup = document.createElement('div'),
        imgBig = document.createElement('img'),
        works  = document.querySelector('.works'),
        scrollWidth = window.innerWidth - document.documentElement.clientWidth;

    imgPopup.classList.add('popup-img');
    works.append(imgPopup);
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';

    imgBig.style.height = '85vh';
    imgBig.style.marginBottom = '0';
    imgPopup.append(imgBig);

    works.addEventListener('click', (e) => {
        e.preventDefault();

        const target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            let path = target.parentNode.getAttribute('href');
            imgBig.setAttribute('src', path);
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scrollWidth}px`;
        }

        if (target && target.matches('div.popup-img')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';
        }
    });
};

export default images;

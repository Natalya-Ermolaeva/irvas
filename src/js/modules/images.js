const images = () => {
    const imgPopup = document.createElement('div'),
        imgBig = document.createElement('img'),
        works  = document.querySelector('.works');

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
        }

        if (target && target.matches('div.popup-img')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
};

export default images;

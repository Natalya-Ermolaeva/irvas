import checkNumInputs from './checkNumInputs';

const getDataModal = (state) => {
    const windowForms =  document.querySelectorAll('.balcon_icons_img '),
        windowWidth =  document.querySelectorAll('#width'),
        windowHeight =  document.querySelectorAll('#height'),
        windowType =  document.querySelectorAll('#view_type'),
        windowProfiles =  document.querySelectorAll('.checkbox');

    checkNumInputs('#width'); 
    checkNumInputs('#height'); 

    function getDataElems(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) {
                case 'SPAN':
                    state[prop] = i;
                    break;
                case 'INPUT':
                    if (item.getAttribute('type') === 'checkbox') {
                        i === 0 ? state[prop] = 'cold' : state[prop] = 'warm';
                        elem.forEach((box, j) => {
                            box.checked = false;
                            if (i === j) {
                                box.checked = true;
                            }
                        });
                    } else {
                        state[prop] = item.value;
                    }
                    break;
                case 'SELECT':
                    state[prop] = item.value;
                    break;
                }
                console.log(state);
            });
        });
    } 
    
    getDataElems('click', windowForms, 'form');
    getDataElems('input', windowWidth, 'width');
    getDataElems('input', windowHeight, 'height');
    getDataElems('change', windowType, 'type');
    getDataElems('change', windowProfiles, 'profile');
};

export default getDataModal;

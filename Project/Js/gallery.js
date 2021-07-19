const loadmore = document.querySelector('#loadmore');
    let currentItems = 2;
    loadmore.addEventListener('click', (e) => {
        const elementList = [...document.querySelectorAll('.list .list-element')];
        for (let i = currentItems; i < currentItems + 1; i++) {
            if (elementList[i]) {
                elementList[i].style.display = 'flex';
            }
        }
        currentItems += 1;

        if (currentItems >= elementList.length) {
            event.target.style.display = 'none';
        }
    })
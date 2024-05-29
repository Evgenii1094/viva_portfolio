const tabs = (tabsSelector, contentSelector,  parentSelector, wrapperSelector) => {
    const tabs = document.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll(contentSelector),
          tabsParent = document.querySelector(parentSelector),
          wrapper = document.querySelector(wrapperSelector);

    const hideTabContent = () => {
        tabsContent.forEach(item => {
            item.classList.add('is-hide');
            item.classList.remove('is-show');
        });

        tabs.forEach(item => {
            item.classList.remove('is-active');
        });

        setTimeout(() => {
            wrapper.style.height = `${document.querySelector('.work__picture.is-show').offsetHeight}px`;
        }, 500);
        
        window.addEventListener('resize', () => {
            setTimeout(() => {
                wrapper.style.height = `${document.querySelector('.work__picture.is-show').offsetHeight}px`;
            }, 500);
        });
    }

    const showTabContent = (i = 0) => {
        tabsContent[i].classList.add('is-show');
        tabsContent[i].classList.remove('is-hide');
        tabs[i].classList.add('is-active');
    }

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('js-tab-link')) {
            tabs.forEach ((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    hideTabContent();
    showTabContent();
}

export default tabs;
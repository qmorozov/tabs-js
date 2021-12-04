const tabsWrapper = document.querySelectorAll('.wrapper')

tabsWrapper.forEach(item => {
    const btnTab = item.querySelectorAll('.tab'),
        tabContent = item.querySelectorAll('.tab-item')

    btnTab.forEach(itemBtn => itemBtn.addEventListener('click', selectTab))

    function selectTab() {
        btnTab.forEach((itemBtn) => itemBtn.classList.remove('active'))
        this.classList.add('active');
        let tabAtt = this.getAttribute('data-id')
        selectTabContent(tabAtt);
    }

    function selectTabContent(tabAtt) {
        tabContent.forEach( (itemContent) => {
            itemContent.getAttribute('id') === tabAtt ? itemContent.classList.add('active-tab') : itemContent.classList.remove('active-tab')
        })
    }
})
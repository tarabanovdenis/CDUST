window.onload = function(){

    // link redirect animation
    document.getElementsByTagName('body')[0].className = '';

    // tabs & popups
    document.querySelectorAll('[data-switcher]').forEach((switcher) =>{
        switcher.addEventListener('click', function (e) {
            e.preventDefault();
            let switcherRequest = switcher.getAttribute('data-switcher');
            if (this.hasAttribute('data-tab')) {
                document.querySelectorAll('[data-tab]').forEach((tabs, i) =>{
                    tabs.classList.remove('js-open');
                    tabs.classList.add('button_muted');
                    this.classList.remove('button_muted');
                    document.querySelectorAll('[data-tab-content]').forEach((tabsContent, i) =>{
                        tabsContent.classList.remove('js-open');
                    });
                });
            }
            // document.querySelectorAll('[data-switcher-content]').forEach((allTabs, i) =>{
            //     allTabs.classList.remove('js-open');
            // });
            document.querySelectorAll('[data-switcher-content='+switcherRequest+']')[0].classList.add('js-open');
        });
    });
    document.querySelectorAll('.js-close-popup').forEach((closePopup) =>{
        closePopup.addEventListener('click', function (e) {
            document.querySelectorAll('.popup-container').forEach((popups) =>{
                popups.classList.remove('js-open');
            });
        });
    });


    // copy to clipboard
    var copyTextareaBtn = document.querySelector('.js-textareacopybtn');
    if (copyTextareaBtn) {
        copyTextareaBtn.addEventListener('click', function(event) {
            this.classList.add('js-done');
            setTimeout(function () {
                copyTextareaBtn.classList.remove('js-done');
            }, 1000)
            var copyTextarea = document.querySelector('.copy-code__area');
            copyTextarea.focus();
            copyTextarea.select();

            try {
                var successful = document.execCommand('copy');
                var msg = successful ? 'successful' : 'unsuccessful';
                // console.log('Copying text command was ' + msg);
            } catch (err) {
                console.log('Unable to copy');
            }
        });
    }

    function findAncestor (el, sel) {
        while ((el = el.parentElement) && !((el.matches || el.matchesSelector).call(el,sel)));
        return el;
    }

    // show/hides block
    document.querySelectorAll('.js-show-hide').forEach((toggleLink) =>{
        toggleLink.addEventListener('click', function (e) {
            findAncestor(toggleLink, '.toggle-box').classList.toggle('open');
        });
    });
}
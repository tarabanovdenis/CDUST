window.onload = function(){

    // link redirect animation
    document.getElementsByTagName('body')[0].className = '';

    // tabs & popups
    document.querySelectorAll("[data-href]").forEach(href => {
        href.addEventListener("click", function () {
            const group = this.dataset.group;
            const target = this.dataset.href;

            if (target === "close-popup") {
                // Remove all active classes in this group
                document.querySelectorAll(`[data-group="${group}"]`).forEach(el => el.classList.remove("js-active"));
                return;
            }

            // Remove active class from all tabs and content in the same group
            document.querySelectorAll(`[data-href][data-group="${group}"]`).forEach(el => el.classList.remove("js-active"));
            document.querySelectorAll(`[data-name][data-group="${group}"]`).forEach(el => el.classList.remove("js-active"));

            // Add active class to the clicked tab and corresponding content
            this.classList.add("js-active");
            document.querySelector(`[data-name="${target}"][data-group="${group}"]`).classList.add("js-active");
        });
    });


    // copy to clipboard
    document.querySelectorAll(".js-textareacopybtn").forEach(button => {
        button.addEventListener("click", function () {
            const textarea = this.closest(".copy-code").querySelector(".copy-code__area");
            textarea.select();
            document.execCommand("copy");

            this.classList.add("js-done");
            setTimeout(() => this.classList.remove("js-done"), 1500);
        });
    });


    function findAncestor(el, sel) {
        while (el && !el.matches(sel)) {
            el = el.parentElement;
        }
        return el;
    }

    document.querySelectorAll(".js-show-hide").forEach(toggleLink => {
        toggleLink.addEventListener("click", function () {
            findAncestor(this, ".toggle-box")?.classList.toggle("open");
        });
    });
}
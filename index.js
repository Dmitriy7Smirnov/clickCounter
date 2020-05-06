function main () {
    var panelsElements = document.querySelector('.wrapper');
    [].slice.apply(panelsElements.children).forEach(function (panelElement) {
        var panel = new Panel();
        panel.init(panelElement);
    });
}

window.onload = main;

function Panel() {
    let counter = 0;
    return {
        init: function(panelElement) {
            panelElement.addEventListener('click', () => {
                counter++;
                document.querySelector(`.${panelElement.className}-counter`).textContent = counter;
            });
        }
    }
};
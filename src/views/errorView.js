export const displayError = (function () {
    let executed = false;
    return function () {
        if (!executed) {
            executed = true;
            const list = document.getElementById('resultsList');
            const errorDisplay = document.createElement('h4');
            errorDisplay.textContent =
                'Something went wrong. Please try again.';
            list.appendChild(errorDisplay);
        }
    };
})();

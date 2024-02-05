// Get the panel elements
const panel = document.getElementById('panel');


// Function to adjust font size based on screen width
function adjustPanelFontSize() {
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Define font size based on screen width
    const fontSize = windowWidth <= 770 ? '14px' : '29px';

    // Apply font size to the panel elements
    panel.style.fontSize = fontSize;
}

// Call the function on page load and window resize
window.addEventListener('load', adjustPanelFontSize);
window.addEventListener('resize', adjustPanelFontSize);
const sidebarOpenbutton = document.querySelector('#headerdesktopnav button')

const sidebarmenu = document.getElementById('sidebarmobilecontainer')
const sidebarClosebutton = document.querySelector('#sidebarmobilecontainer button')

sidebarOpenbutton.addEventListener('click', function() {
    console.log('Open')
    sidebarmenu.style.display = 'flex';
        requestAnimationFrame(() => {
            sidebarmenu.classList.add('expanded');
        });
});

sidebarClosebutton.addEventListener('click', (event) => {
    console.log('Close')
    sidebarmenu.classList.remove('expanded');
setTimeout(() => {
    sidebarmenu.style.display = 'none';
}, 500);

})
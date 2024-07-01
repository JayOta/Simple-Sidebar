function closeSidebar(){
    document.getElementById('sidebar').style.display = 'none';
}
function openSidebar(){
    document.getElementById('sidebar').style.display = 'block';
    document.getElementById('sidebar').style.transition = '.5s ease-in';
}
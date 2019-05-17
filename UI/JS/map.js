let toggleBtn = document.getElementById("toggleBtn");
let sidebar = document.getElementById("sidebar");
let table = document.getElementById("list");

function showSideBar(){
    sidebar.classList.toggle("active");
    table.classList.toggle("active");

}
toggleBtn.addEventListener("click", () => {
    showSideBar()
})

//MAP SCRIPTS
var mymap = L.map('mapid').setView([-6.8, 39.283333], 13);

L.tileLayer('http://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; OpenStreetMap contributors'
}).addTo(mymap);


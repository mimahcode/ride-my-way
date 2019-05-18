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

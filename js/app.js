const btn = document.getElementById("button");
btn.addEventListener("click", function (){
    const project = document.getElementById("project");
    project.style.display = "none";
    const eid = document.getElementById("eid-project");
    eid.style.display = "block";
});


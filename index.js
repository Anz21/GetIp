const render = document.getElementById("show");
const getBtn = document.getElementById("getBtn");

const getIp = async () => {
    const response = await fetch("https://api.ipify.org?format=json");

    const facts = await response.json();
    render.innerHTML = `<p>${facts.ip}</p>`;
  
    
}


getBtn.addEventListener("click" , function(){
    getIp();
})







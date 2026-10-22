console.log("WildWorld khdam! 🦁");

function showInfo(text) {
    let infoBox = document.getElementById("info");
    if (infoBox) {
        infoBox.innerText = text;
        infoBox.className = "alert alert-warning mt-4 text-center fs-5";
        setTimeout(() => {
            infoBox.className = "alert alert-success mt-4 text-center fs-5";
        }, 2000);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Page chargée avec succès");
});
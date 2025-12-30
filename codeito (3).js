
function searchDivs() {
    document.querySelector(".border").style.display = "none";
    document.querySelectorAll(".chi").forEach(div => {
    div.style.display = "none";
    });

    document.querySelector(".sh").style.display = "none";
    


    let input = document.getElementById("searchInput").value.toLowerCase();
    let items = document.querySelectorAll(".psh");

    items.forEach(item => {
        let text = item.querySelector("p").innerText.toLowerCase();

        if (text.includes(input)) {
            item.style.display = "inline-block";
        } else {
            item.style.display = "none";
        }

    });
}

document.getElementById("langSelect").addEventListener("change", function() {
    let egy = document.getElementById("eg");
    let usa = document.getElementById("usa");

    if (this.value === "en") {
        egy.style.display = 'none';
        usa.style.display = 'block';
    } else {
        egy.style.display = 'block';
        usa.style.display = 'none';
    }
});

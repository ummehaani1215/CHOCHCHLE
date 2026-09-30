function openSurprise() {

    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    const correctName1 = "ASMA";
    const correctName2 = "AZEEZ";

    const errorMessage = document.getElementById("errorMessage");

    if (name1 === "" || name2 === "") {

        errorMessage.innerText = "Please enter both names.";
        return;
    }

    if (
        name1.toLowerCase() !== correctName1.toLowerCase() ||
        name2.toLowerCase() !== correctName2.toLowerCase()
    ) {

        errorMessage.innerText = "Hmm... those don't seem to be the right names.";
        return;
    }

    localStorage.setItem("name1", correctName1);
    localStorage.setItem("name2", correctName2);

    window.location.href = "anniversary.html";
}
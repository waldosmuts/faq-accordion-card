const dropdownBoxes = document.querySelectorAll(".dropdown-box");

for (let dropdownBox of dropdownBoxes) {
    dropdownBox.addEventListener("click", () => {
        if (!dropdownBox.classList.contains("selected")) {
            for (let ddb of dropdownBoxes) {
                ddb.classList.remove("selected");
            }
            dropdownBox.classList.add("selected");
        } else {
            dropdownBox.classList.remove("selected");
        }
    })
}
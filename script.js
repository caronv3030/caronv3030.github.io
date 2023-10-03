let ownerName = "Caron"; // update the part BETWEEN the "quotes"
let userName = "caronv3030"; // caronv3030

document.querySelectorAll(".owner-name").forEach((e) => {
    e.innerHTML = ownerName;
});

document.querySelector("#github").href = "http://github.com/" + userName;
document.querySelector("#fork").href = "http://github.com/" + userName + "/" + userName + ".github.io";

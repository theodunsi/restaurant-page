import { loadHomePage } from "./home.js";
import { loadAboutPage } from "./about.js";
import { loadContactPage } from "./contact.js";

const content = document.querySelector("#content");
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const contact = document.querySelector("#contact");

home.addEventListener("click", () => {
    content.innerHTML = "";
    loadHomePage();
})

about.addEventListener("click", () => {
    content.innerHTML = "";
    loadAboutPage();
})

contact.addEventListener("click", () => {
    content.innerHTML = "";
    loadContactPage();
})

loadHomePage();
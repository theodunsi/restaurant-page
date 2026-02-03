function loadAboutPage() {
  const content = document.querySelector("#content");
  
  const heading = document.createElement("h1");
  const para = document.createElement("p");
  heading.textContent = "About Us";
  para.textContent = "Lorem ipsum sit dolor amor..."

  content.append(heading, para);
}

export { loadAboutPage };
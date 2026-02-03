function loadContactPage() {
  const content = document.querySelector("#content");
  
  const heading = document.createElement("h1");
  const para = document.createElement("p");
  heading.textContent = "Contact Us";
  para.textContent = "Lorem ipsum sit dolor amor..."

  content.append(heading, para);
}

export { loadContactPage };
const resultsContainer = document.querySelector(".results-container");
const testForm = document.querySelector("form");

const API_URLS = {
  base: "https://mr-robot-express-api.herokuapp.com/",
  characters: "https://mr-robot-express-api.herokuapp.com/characters",
  seasons: "https://mr-robot-express-api.herokuapp.com/seasons",
  episodes: "https://mr-robot-express-api.herokuapp.com/episodes",
};

const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

testForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(testForm);
  let query = formData.get("query");
  const url = API_URLS.base + query;
  getData(url).then((data) => {
    data = JSON.stringify(data, null, 2);
    resultsContainer.innerHTML = `
      <pre>
      <span>Request URL: <a href="${url}">${url}</a></span>
      ${data}
    </pre>`;
    window.scrollTo({
      top: resultsContainer.offsetTop,
    });
  });
  testForm.reset();
});
if (resultsContainer.innerHTML === "") {
  resultsContainer.style.border = "none";
  resultsContainer.style.backgroundColor = "transparent";
}

window.onload = async () => {};

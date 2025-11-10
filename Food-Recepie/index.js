let food = document.querySelector(".food");

let indian = document.querySelector("#indian");
let canadian = document.querySelector("#canadian");
let american = document.querySelector("#american");
let thailand = document.querySelector("#thailand");
let british = document.querySelector("#british");
let russian = document.querySelector("#russian");

let search = document.querySelector("#search");

let recipe;

const fetchData = async (area) => {
  const api = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
  );
  const data = await api.json();

  recipe = data.meals;
  showData(recipe);
};

const searchRecipe = () => {
  let input = document.querySelector("#search");
  input.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
      let inputValue = input.value;

      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
      );
      const data = await api.json();

      recipe = data.meals;
      showData(recipe);
    }
  });
};

searchRecipe();

let showData = (recipe) => {
  food.innerHTML = recipe
    .map(
      (meals) => `
      <div style="text-align:center">
        <div>
          <img src="${meals.strMealThumb}" alt="${meals.strMeal}" style="width:220px; border:2px solid blue; border-radius:10px" />
        </div>

        <h5 style="margin:10px">${meals.strMeal}</h5>
      </div>
    `
    )
    .join("");
};

american.addEventListener("click", () => {
  console.log("button clicked");
  fetchData("American");
});

canadian.addEventListener("click", () => {
  console.log("button clicked");
  fetchData("Canadian");
});

indian.addEventListener("click", () => {
  console.log("button clicked");
  fetchData("Indian");
});
thailand.addEventListener("click", () => {
  console.log("button clicked");
  fetchData("Thailand");
});
british.addEventListener("click", () => {
  console.log("button clicked");
  fetchData("British");
});
russian.addEventListener("click", () => {
  console.log("button clicked");
  fetchData("Russian");
});

// Default load
fetchData("Indian");

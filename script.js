const input = document.getElementById("country");
const btn = document.getElementById("search");
const cards = document.getElementById("cards");

async function meals() {

  let country = input.value.trim();
  if (!country) return;


  cards.innerHTML = "";


  let api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
  let data = await api.json();


  if (!data.meals) {
    cards.innerHTML = "<p>Eta Abar kon khabar??</p>";
    return;
  }

  
  for (let m of data.meals) {
    cards.innerHTML += `
      <div class="card">
        <img src="${m.strMealThumb}" alt="${m.strMeal}">
        <h3>${m.strMeal}</h3>
      </div>
    `;
  }
}

btn.onclick = meals;


input.onkeydown = e => {
  if (e.key === "Enter") meals();
};

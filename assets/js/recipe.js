const main = async () => {
  const searchParams = new URLSearchParams(window.location.search); //obtiene los parámetros de la url
  const id = searchParams.get("id"); //agarra el id de los parámetros
  const RECIPE_URL = `https://dummyjson.com/recipe/${id}`;//obtiene la url
  const response = await fetch(RECIPE_URL);
  const objectRecipe = await response.json();
  const recipeBody = document.querySelector("section"); //se le puede agregar un $ adelante para saber que viene de html (opcional)

  recipeBody.innerHTML = `
    <section class="recetaIndividual">
    <img src=${objectRecipe.image}>
    <div class="boxedRecipe">
    <h1>${objectRecipe.name}</h1>
    <h5>Preparation time: ${objectRecipe.prepTimeMinutes} minutes</h5>
    <h5 class="ingredients">Ingredients:</h5><p>${objectRecipe.ingredients.join(
      ", "
    )}<p>
    <ul>
    <h2>Instructions:</h2>
    ${objectRecipe.instructions
      .map((instruction) => `<li>${instruction}</li>`)
      .join("")}
    </ul>
    <h4 class="cookingTime">Cooking time:  ${
      objectRecipe.cookTimeMinutes
    } minutes</h4>
    <p class="bold">Servings: ${objectRecipe.servings}</p>
    <p class="bold">Difficulty: ${objectRecipe.difficulty}</p>
    <p class="bold">Rating: ${objectRecipe.rating}</p>
    <button><a href="index.html"/>Volver</a></button>
    </div>
    </section>`;
};

main();

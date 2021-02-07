fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then(response => response.json())
    .then(data => displayMeals(data.meals));

const displayMeals = meals => {
    const mealsDiv = document.getElementById('meals');
    meals.forEach (meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal';

        const mealInfo = `
        <img src="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
        `
        mealDiv.innerHTML = mealInfo;

        mealsDiv.appendChild(mealDiv);

    });
    // for (let index = 0; index < meals.length; index++) {
    //     const meal = meals[index];

    //     const mealDiv = document.createElement('div');
    //     mealDiv.className = 'meal';

    //     const mealInfo = `
    //     <img src="${meal.strMealThumb}">
    //     <h3>${meal.strMeal}</h3>
    //     `
    //     mealDiv.innerHTML = mealInfo;

    //     mealsDiv.appendChild(mealDiv);

    // }
    // const mealPicture = document.createElement('img');
    // mealPicture.innerText = meal.strMealThumb;
    // const mealName = document.createElement('h3');
    // mealName.innerText = meal.strMeal;
    // const mealId = document.createElement('h5');
    // mealId.innerText = meal.idMeal;

}

// function searchBy () {
//  const name = document.getElementById('searchItem').value;
//  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
//  .then(response => response.json())
//  .then(data => {
//      console.log(data.meals)
// //   displayMeals(data.meals);
//  });

// }
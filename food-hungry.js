const lodeFoodHungry=()=>{
               const searchField =document.getElementById('search-field');
               const searchText =searchField.value;
               searchField.value="";
               console.log(searchText);
               const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
fetch(url)
.then(res=>res.json())
.then(data=>displaysearchresult(data.meals))
}
const displaysearchresult=(meals)=>{
               const searchREsult =document.getElementById('search-div');
               searchREsult.innerHTML='';
               
meals.forEach(meal => {
               console.log(meal);
               const div =document.createElement('div');
               div.classList.add('col');
               div.innerHTML=`<div class="col">
               <div onclick="displayFoodDitails(${meal.idMeal})" class="card">
                 <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                 <div class="card-body">
                   <h5 class="card-title">${meal.strMeal}</h5>
                   <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
                 </div>
               </div>`
               searchREsult.appendChild(div)
               
});

}
const displayFoodDitails =(mealId)=>{
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
      .then(res => res.json())
      .then(data => displayMealDetail(data.meals[0]));
}

const displayMealDetail = meal => {
  console.log(meal);
  const mealDetails = document.getElementById('meal-details');
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
      <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
  </div>
  `;
  mealDetails.appendChild(div);

}

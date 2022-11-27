
// import {homenav} from "../components/navbar.js"

// document.getElementById("navbarHome").innerHTML = homenav()

let home = document.getElementById("goHome")

home.style.cursor ="pointer"
home.addEventListener("click",function(){
    window.location.href = "index.html"
})
// console.log("Ok")

// declear id in globle
let id;


/// this is for fetching part
     async function main(){
        let query = document.getElementById("query").value;
         try{
            let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
            let data = await res.json();
            append(data.meals)
         } catch(err){
            console.log(err)
         }
     }
main()

       function append(data){
        console.log(data)
         let container = document.getElementById("container");
         container.innerHTML = ""
         container.style.display = "grid"
         container.style.gridTemplateColumns ="repeat(4,1fr)"

         data.forEach((ele)=>{
             let cart = document.createElement("div");
             cart.setAttribute("class","cart");
             let img = document.createElement("img");
             img.style.height = "300px"
             img.style.width = "100%"
             img.src = ele.strMealThumb
             let title = document.createElement("h3")
             title.innerText = ele.strMeal
             cart.style.cursor ="pointer"
             cart.addEventListener("click",function(){
                let arr = []
                arr.push(ele)
                localStorage.setItem("meal",JSON.stringify(arr))
                window.location.href= "meal.html"
             })
            

             cart.append(img,title)
             container.append(cart)
         })
       }

     

     // this is for debounce and take main function that taken in html part if you dont tak it is not going to work;

    function debounce(main,delay)
    {
        if(id){
            clearTimeout(id)
        }
       
        id = setTimeout(()=>{
            main()
        },delay)
    }






//     dateModified: null
// idMeal: "52955"
// strArea: "Chinese"
// strCategory: "Vegetarian"
// strCreativeCommonsConfirmed: null
// strDrinkAlternate: null
// strImageSource: null
// strIngredient1: "Chicken Stock"
// strIngredient2: "Salt"
// strIngredient3: "Sugar"
// strIngredient4: "Pepper"
// strIngredient5: "Sesame Seed Oil"
// strIngredient6: "Peas"
// strIngredient7: "Mushrooms"
// strIngredient8: "Cornstarch"
// strIngredient9: "Water"
// strIngredient10: "Spring Onions"
// strIngredient11: ""
// strIngredient12: ""
// strIngredient13: ""
// strIngredient14: ""
// strIngredient15: ""
// strIngredient16: ""
// strIngredient17: ""
// strIngredient18: ""
// strIngredient19: ""
// strIngredient20: ""
// strInstructions: "In a wok add chicken broth and wait for it to boil.\r\nNext add salt, sugar, white pepper, sesame seed oil.\r\nWhen the chicken broth is boiling add the vegetables to the wok.\r\nTo thicken the sauce, whisk together 1 Tablespoon of cornstarch and 2 Tablespoon of water in a bowl and slowly add to your soup until it's the right thickness.\r\nNext add 1 egg slightly beaten with a knife or fork and add it to the soup slowly and stir for 8 seconds\r\nServe the soup in a bowl and add the green onions on top."
// strMeal: "Egg Drop Soup"
// strMealThumb: "https://www.themealdb.com/images/media/meals/1529446137.jpg"
// strMeasure1: "3 cups "
// strMeasure2: "1/4 tsp"
// strMeasure3: "1/4 tsp"
// strMeasure4: "pinch"
// strMeasure5: "1 tsp "
// strMeasure6: "1/3 cup"
// strMeasure7: "1/3 cup"
// strMeasure8: "1 tbs"
// strMeasure9: "2 tbs"
// strMeasure10: "1/4 cup"
// strMeasure11: ""
// strMeasure12: ""
// strMeasure13: ""
// strMeasure14: ""
// strMeasure15: ""
// strMeasure16: ""
// strMeasure17: ""
// strMeasure18: ""
// strMeasure19: ""
// strMeasure20: ""
// strSource: "https://sueandgambo.com/pages/egg-drop-soup"
// strTags: "Soup,Baking,Calorific"
// strYoutube: "https://www.youtube.com/watch?v=9XpzHm9QpZg"
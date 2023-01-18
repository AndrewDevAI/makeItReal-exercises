//Number of Likes

/*Write a function called `likes` that receives a number and returns a string using the format K for thousands and M for millions.

If the number is less than 1000 return the same number as a string.


    like8s(983); // "983"
    likes(1900); // "1K"
    likes(54000); // "54K"
    likes(120800); // "120K"
    likes(25222444); // "25M"*/

    function likes(num){

        if( num >= 1000000){
            console.log(Math.floor(num/1000000)+"M");   
        } else if(num>=1000 ) {
            console.log(Math.floor(num/1000)+"K");
        } else {
            console.log((num));
    }
}

//number_1 = 1000
//likes(number_1)
likes(983); // "983"
likes(1900); // "1K"
likes(54000); // "54K"
likes(120800); // "120K"
likes(25222444) //"25M"




// Print on Screen "Queso" from this object
const recipe = {
    name: "",
    ingredients: [
      { name: "Pan", quantity: 2 },
      { name: "Jamón", quantity: 1 },
      { name: "Queso", quantity: 1 },
    ]
  }

console.log(recipe.ingredients[2].name)
  
    

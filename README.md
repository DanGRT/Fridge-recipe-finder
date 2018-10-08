# Fridge




## About

Project brief was to create our own project using the technologies learned so far. I have decided to make a web app utilising React and the Edamam API to create a recipe
finder. You add items to your fridge/stock and are able to find recipes using these ingredients.

## Features

* Ingredients in stock are stored in local storage.

* Select any number of stocked ingredients and return recipes using those ingredients.

* Recipe display looks at your entire stock (ingredients need not be selected) and tells you how many of the required ingredients you have. Clicking on this text reveals
 an easy to read display - ingredients not in stock are in red, in stock are in green.

* Loading screen due to slow response from API

* Favourites menu

## Implementation

* Written with React. I have made some components stateless, but this requires further work.
* Some testing is in place using Enzyme.
* All styles are written with .scss, utilising nesting and importing colour sheets

## Known issues

* If you have "chicken" in stock, ingredients such as "chicken soup" will be marked as in stock. This could be fixed with:
  * Using some sort of conditional list, to specify if stock words are followed by another particular word then they are not relevant (i.e if "rice" followed by "wine")
  * Using Edamam API's Ingredient/nutrition system. This requires further reading as to whether this would be suitable


* No pagination on recipes


* No desktop/tablet design


## Future Plans

* I would like to put some further work into the ingredient adding side of things, such that they could be added with measurements, and perhaps picked from a dropdown list to save generic ingredients such as "chicken" being added (i.e specify chicken breast/thigh).
  * Similarly, a mass ingredient add tool would help save time if user had just completed a big shop


* If measurement of ingredient was in place, I would like to implement a "cook" button that subtracted the amount of an ingredient specified by recipe from the user's stock list.

* More information regarding nutritional and dietary considerations on each recipe, more information regarding cooking time and servings made (all in standard API response)

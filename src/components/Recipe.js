/*
*
* Purpose:
* - recipe element
* - used to display recipe in Recipes page
*
* Contents:
* - <div/> recipeInfoContainer, base for Recipe
* - <article/> prose, contains custom <h3/> to display recipeName value
* - <p/> instructions, display instructions value
*
*/

import { instructions } from '../data/Instructions';
import { recipeName } from '../data/RecipeName';

export default function Recipe() {
    return(
        <div className="recipeInfoContainer">
            <article className="prose">
                <h3>{recipeName}</h3>
            </article>
            <p id='instructions'>{instructions}</p>
        </div>
    )
}
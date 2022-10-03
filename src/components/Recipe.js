import { instructions, recipeName } from '../data/Data'
import { useEffect } from 'react';

export default function Recipe() {
    useEffect(() => {
        document.getElementById('instructions').innerHTML = instructions.replaceAll('</li><li>', '<br/><br/>')
    })

    return(
        <div className="recipeInfoContainer">
            <article className="prose">
                <h3 id='recipeName'>{recipeName}</h3>
            </article>
            <p id='instructions'></p>
        </div>
    )
}
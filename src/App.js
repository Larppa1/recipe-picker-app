import { useState } from 'react';
import './App.css';

const apiKey = '65a0f9bcccea4b898ae0628dbe448fd1'

export default function App() {
  const [title, setTitle] = useState('Name')

  return (
    <div className="container">
      <div className='searchContainer'>
        <input id='searchBar' type="text" placeholder="Search by ingredient..." onKeyPress={(e) => {
          if(e.key === 'Enter') {
            searchByIngredient()
              .then((result) => setTitle(result))
          }
        }}
        className="input input-bordered w-full max-w-xs" />
      </div>
      <div className='optionsContainer'>
        <div>
          <p>Options</p>
        </div>
        <div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Cheap</span> 
              <input id='cheap' type="checkbox" unchecked className="checkbox checkbox-primary" />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Dairy-free</span> 
              <input type="checkbox" unchecked className="checkbox checkbox-primary" />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Gluten-free</span> 
              <input type="checkbox" unchecked className="checkbox checkbox-primary" />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Low-fodmap</span> 
              <input type="checkbox" unchecked className="checkbox checkbox-primary" />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Sustainable</span> 
              <input type="checkbox" unchecked className="checkbox checkbox-primary" />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Vegan</span> 
              <input type="checkbox" unchecked className="checkbox checkbox-primary" />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Vegetarian</span> 
              <input type="checkbox" unchecked className="checkbox checkbox-primary" />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Very healthy</span> 
              <input type="checkbox" unchecked className="checkbox checkbox-primary" />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Very popular</span> 
              <input type="checkbox" unchecked className="checkbox checkbox-primary" />
            </label>
          </div>
        </div>
      </div>
      {/*END OF searchContainer*/}
      <div className='recipeContainer'>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure><img id='img' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p id='summary'>Summary</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Check recipe!</button>
            </div>
            {/*END OF card-actions justify-end*/}
          </div>
          {/*END OF card-body*/}
        </div>
        {/*END OF card w-96 bg-base-100 shadow-xl image-full*/}
      </div>
      {/*END OF recipeContainer*/}
    </div>
  );
}

async function searchByIngredient() {
  const ingredient = document.getElementById('searchBar').value
  let response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&tags=${ingredient}&number=1`)
  let data = await response.json()
  document.getElementById('summary').innerHTML = data.recipes[0].summary
  document.getElementById('img').src = data.recipes[0].image
  console.log(data.recipes[0])
  return data.recipes[0].title
}

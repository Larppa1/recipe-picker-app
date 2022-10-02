import './App.css';

const apiKey = '65a0f9bcccea4b898ae0628dbe448fd1'

export default function App() {
  return (
    <div className="container">
      <div className='navbarContainer'>
        <div className="navbar bg-primary text-primary-content">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Homepage</a></li>
                <li><a>Recipes</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </div>
          {/*END OF navbarStart*/}
          <div className="navbar-center">
            <a className="btn btn-ghost normal-case text-xl">RecipeDB</a>
          </div>
          {/*END OF navbarCenter*/}
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      {/*END OF navbarContainer*/}
      <div className='searchContainer'>
        <input id='searchBar' type="text" placeholder="Search by ingredient..." onKeyPress={(e) => e.key === 'Enter' && searchByIngredient()}
        className="input input-bordered w-full max-w-xs" />
      </div>
      <div className='optionsContainer'>
        <div>
          <p>Options</p>
        </div>
        <div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Dairy-free</span> 
              <input id='dairyFree' type="checkbox" unchecked className="checkbox checkbox-primary" />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Gluten-free</span> 
              <input id='glutenFree' type="checkbox" unchecked className="checkbox checkbox-primary" />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Vegan</span> 
              <input id='vegan' type="checkbox" unchecked className="checkbox checkbox-primary" />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Vegetarian</span> 
              <input id='vegetarian' type="checkbox" unchecked className="checkbox checkbox-primary" />
            </label>
          </div>
        </div>
      </div>
      {/*END OF searchContainer*/}
      <div className='recipeContainer'>
        <div className="card bg-base-100 shadow-xl image-full">
          <figure><img id='img' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
          <div className="card-body" id='card'>
            <h2 className="card-title" id='title'>Name</h2>
            <p id='summary'>Summary</p>
          </div>
          {/*END OF card-body*/}
        </div>
        {/*END OF card w-96 bg-base-100 shadow-xl image-full*/}
      </div>
      {/*END OF recipeContainer*/}
      <div className='btnContainer'>
        <button className="btn btn-circle btn-outline" onClick={() => {
          document.getElementById('card').scrollTo(0, 0)
          searchByIngredient()}
        }>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <button className="btn btn-circle btn-primary" onClick={() => getRecipe()}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#000" viewBox="0 0 50 50" stroke="#000"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z" /></svg>
        </button>
      </div>
    </div>
  );
}

async function searchByIngredient() {
  window.scrollTo({
    top: 150,
    behavior: 'smooth',
  })
  const ingredient = document.getElementById('searchBar').value
  let parameters = {
    dairyFree: '',
    glutenFree: '',
    vegan: '',
    vegetarian: '',
  }
  document.getElementById('dairyFree').checked ? parameters.dairyFree = ',dairy-free' : parameters.dairyFree = ''
  document.getElementById('glutenFree').checked ? parameters.glutenFree = ',gluten-free' : parameters.glutenFree = ''
  document.getElementById('vegan').checked ? parameters.vegan = ',vegan' : parameters.vegan = ''
  document.getElementById('vegetarian').checked ? parameters.vegetarian = ',vegetarian' : parameters.vegetarian = ''
  const details = ingredient + parameters.dairyFree + parameters.glutenFree + parameters.vegan + parameters.vegetarian

  let response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&tags=${details}&number=1`)
  let data = await response.json()

  document.getElementById('title').innerHTML = data.recipes[0].title
  document.getElementById('summary').innerHTML = data.recipes[0].summary
  document.getElementById('img').src = data.recipes[0].image
  console.log(data.recipes[0])
}

async function getRecipe() {
  console.log('hello')
}

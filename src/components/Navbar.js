import { Link } from 'react-router-dom';

export default function Navbar() {
    return(
        <div className="navbar bg-primary text-primary-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <label className="btn btn-ghost btn-circle"
                        tabIndex={0}>
                        <svg className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7" 
                            />
                        </svg>
                    </label>
                    <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        tabIndex={0}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/recipes">Recipes</Link></li>
                    </ul>
                </div>
                {/*END OF dropdown*/}
            </div>
            {/*END OF navbarStart*/}
            <div className="navbar-center">
                <Link className="btn btn-ghost normal-case text-xl" to="/">RecipeDB</Link>
            </div>
            {/*END OF navbarCenter*/}
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <svg className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            />
                        </svg>
                        <span className="badge badge-xs badge-primary indicator-item" />
                    </div>
                </button>
            </div>
            {/*END OF navbarEnd*/}
        </div>
    )
}
import '../Styles.css';
import Recipe from '../components/Recipe';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Recipes() {
  return (
    <div className="container">
      <Navbar />
      <div className='recipesContainer'>
        <Recipe />
      </div>
      <Footer />
    </div>
  );
}
/*
*
* Purpose:
* - footer element
* - used in all pages
*
* Contents:
* - custom Tailwind <footer/>
* -     -> <p/> containing copyright info
*
*/
export default function Footer() {
    return(
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <p>© 2022 - RecipeDB</p>
        </footer>
    )
}
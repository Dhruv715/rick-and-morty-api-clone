import './Navbar.css'
function Navbar(){
    return(
        <>
        <header>
        <div className="navbar">
            <img
                src="https://repository-images.githubusercontent.com/120371205/b6740400-92d4-11ea-8a13-d5f6e0558e9b"
                class="logos"
                alt=""
            />
            <ul style={{cursor:'pointer'}}>
                <li>Docs</li>
                <li>About</li>
                <li className='special'>SUPPORT US</li>
            </ul>
        </div>
        <h1>The Rick and Morty API</h1>
        </header>
        </>
    );
}
export default Navbar;
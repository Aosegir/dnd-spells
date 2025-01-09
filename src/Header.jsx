import "./Header.css";

function Header() {
    return (
        <div className="container">
            <h1>DND Spells Test</h1>
            <div className="filter">
                <p>Spell Name</p>
                <p>Class</p>
                <p>Spell Level</p>
                <p>Spell School</p>
                <p>Casting Time</p>
            </div>
        </div>
    );
};

export default Header;
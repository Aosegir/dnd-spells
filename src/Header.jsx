import "./Header.css";

function Header() {
    return (
        <div className="container flex column center-align">
            <div className="header-flex left-justify max-width">
                <h1>DND Spells Test</h1>
            </div>
            <form className="spell-form">
                <div className="header-flex column">
                    <label htmlFor="spell-name">Spell Name</label>
                    <input type="text" id="spell-name" />
                </div>
                
                <div className="header-flex column">
                    <label htmlFor="class">Class</label>
                    <input type="text" id="class" />
                </div>
                
                <div className="header-flex column">
                    <label htmlFor="spell-level">Spell Level</label>
                    <input type="text" id="spell-level" />
                </div>
                
                <div className="header-flex column">
                    <label htmlFor="spell-school">Spell School</label>
                    <input type="text" id="spell-school" />
                </div>
                
                <div className="header-flex column">
                    <label htmlFor="casting-time">Casting Time</label>
                    <input type="text" name="" id="casting-time" />
                </div>
                
            </form>
        </div>
    );
};

export default Header;
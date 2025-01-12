import "./Header.css";

function Header() {
    return (
        <div className="container flex column center-align">
            <div className="header-flex left-justify max-width bottom-border">
                <h1>DND Spells Test</h1>
            </div>
            <form className="spell-form spell-filter">
                <div className="header-flex column">
                    <label htmlFor="spell-name">Spell Name</label>
                    <input type="text" id="spell-name" name="spell-name" />
                </div>
                
                <div className="header-flex column">
                    <label htmlFor="class">Class</label>
                    <select name="class" id="class">
                        <option value="bard">Bard</option>
                        <option value="cleric">Cleric</option>
                        <option value="druid">Druid</option>
                        <option value="paladin">Paladin</option>
                        <option value="ranger">Ranger</option>
                        <option value="sorcerer">Sorcerer</option>
                        <option value="warlock">Warlock</option>
                        <option value="wizard">Wizard</option>
                    </select>
                </div>
                
                <div className="header-flex column">
                    <label htmlFor="spell-level">Spell Level</label>
                    <select name="spell-level" id="spell-level">
                        <option value="0">Cantrip</option>
                        <option value="1">1st</option>
                        <option value="2">2nd</option>
                        <option value="3">3rd</option>
                        <option value="4">4th</option>
                        <option value="5">5th</option>
                        <option value="6">6th</option>
                        <option value="7">7th</option>
                        <option value="8">8th</option>
                        <option value="9">9th</option>
                    </select>
                </div>
                
                <div className="header-flex column">
                    <label htmlFor="spell-school">Spell School</label>
                    <select name="spell-school" id="spell-school">
                        <option value="abj">Abjuration</option>
                        <option value="con">Conjuration</option>
                        <option value="div">Divination</option>
                        <option value="enc">Enchantment</option>
                        <option value="evo">Evocation</option>
                        <option value="ill">Illusion</option>
                        <option value="nec">Necromancy</option>
                        <option value="tra">Transmutation</option>
                    </select>
                </div>
                
                <div className="header-flex column">
                    <label htmlFor="casting-time">Casting Time</label>
                    <select name="casting-time" id="casting-time">
                        <option value="action">1 Action</option>
                        <option value="b-action">1 Bonus Action</option>
                        <option value="reaction">1 Reaction</option>
                        <option value="1-min">1 Minute</option>
                        <option value="10-min">10 Minutes</option>
                        <option value="1-hrs">1 Hour</option>
                        <option value="8-hrs">8 Hours</option>
                        <option value="12-hrs">12 Hours</option>
                        <option value="24-hrs">24 Hours</option>
                    </select>
                </div>

                <button>Filter Spells</button>
            </form>
        </div>
    );
};

export default Header;
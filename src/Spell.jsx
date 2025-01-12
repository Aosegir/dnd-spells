import Data from './data/spell-data.js';
import './Spell.css';

function Spells() {
    return(
        <div>
            <div className="spell-data spell-data-header">
                <li></li>
                <li>Level</li>
                <li>Name</li>
                <li>Casting Time</li>
                <li>Duration</li>
                <li>Range/Area</li>
                <li>Attack/Save</li>
                <li>Damage/Effect</li>
            </div>
            
            <div className="flex center">
                <div className="grid">
                    {Data.map((spell) => {
                        return(
                            <div key={spell.id} className="spell-data border">
                                <li></li>
                                <li>{spell.level}</li>
                                <li>{spell.name}</li>
                                <li>{spell.castingTime}</li>
                                <li>{spell.duration}</li>
                                <li></li>
                                <li></li>
                                <li>{spell.damage}</li>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
        
    );
};

export default Spells;
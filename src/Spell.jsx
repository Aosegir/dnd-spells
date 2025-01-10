import Data from './data/spell-data.js';
import './Spell.css';

function Spells() {
    return(
        <div>
            <div className="flex center">
                <h3>Test</h3>
            </div>
            
            <div className="flex center">
                <div className="grid">
                    {Data.map((spell) => {
                        return(
                            <div key={spell.id} className="spell-item border">
                                <p>{spell.level}</p>
                                <h3>{spell.name}</h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
        
    );
};

export default Spells;
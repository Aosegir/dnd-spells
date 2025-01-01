import Data from './data/spell-data.js';
import './Spell.css';

function Spells() {
    return(
        <div className="grid">
            {Data.map((spell) => {
                return(
                    <div key={spell.id} className="spell-item">
                        <p>{spell.level}</p>
                        <h3>{spell.name}</h3>
                    </div>
                );
            })}
        </div>
    );
};

export default Spells;
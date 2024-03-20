import React, { useState } from 'react';

const SubGroup = ({ subgroup, inputValues, handleInputChange, gender }) => {
    // The state and logic for expanding/collapsing the subgroup
    // and rendering the input fields
    // It should not have its own state if the state is managed by MyFormComponent

    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="subgroup">
            <button onClick={() => setIsCollapsed(!isCollapsed)} className="toggle-button">
                {isCollapsed ? 'Pokaži ' + subgroup.name : 'Skrij ' + subgroup.name}
            </button>
            {!isCollapsed && (
                <div className="subgroup">
                    <h3>{subgroup.name}</h3>
                    {subgroup.items.map((item) => (
                        <div key={item} className="input-container">
                            <label>
                                {item.name}:
                            </label>
                            <input
                                type="number"
                                name={item.name}
                                value={inputValues[item.name] || ''} // Fallback to an empty string if value is undefined
                                onChange={(e) => handleInputChange(item.name, e.target.value)}
                            />
                            <span className="unit">{item.unit}</span>
                            {gender === 'male' && (
                                <span className="reference">
                                    Referenčne vrednosti: {item.male_min} - {item.male_max}
                                </span>
                            )}
                            {gender === 'female' && (
                                <span className="reference">
                                    Referenčne vrednosti: {item.female_min} - {item.female_max}
                                </span>
                            )}

                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SubGroup;
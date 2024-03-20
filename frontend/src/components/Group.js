// Group.js
import React from 'react';
import SubGroup from './SubGroup';

const Group = ({ group, inputValues, handleInputChange, gender }) => {
    return (
        <div className="group-container">
            <h3>{group.name}</h3>
            {group.subgroups.map((subgroup, index) => (
                <SubGroup
                    key={index}
                    subgroup={subgroup}
                    inputValues={inputValues}
                    handleInputChange={handleInputChange}
                    gender={gender}
                />
            ))}
        </div>
    );
};

export default Group;
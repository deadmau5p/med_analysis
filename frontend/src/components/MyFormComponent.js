import React, { useState } from 'react';
import callBackendOpenAIAPI from '../utils.js';
import groups from '../data.js';
// import parse from 'html-react-parser';
import Group from './Group.js';

const MyFormComponent = () => {
    const [inputValues, setInputValues] = useState({
        // This object should have keys corresponding to each input field in all groups.
    });
    const [apiResponse, setApiResponse] = useState('');

    const [gender, setGender] = useState('female');

    const handleInputChange = (name, value) => {
        setInputValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    const [clinicalHistory, setClinicalHistory] = useState('');

    const [loading, setLoading] = useState(false);

    const handleApiCall = async () => {
        setLoading(true); // Start loading spinner
        // create prompt that contains all the input values
        const filteredItems = groups.flatMap(group =>
            group.subgroups.flatMap(subgroup =>
                subgroup.items.filter(item => {
                    const value = inputValues[item.name];
                    const isValueDefined = value !== '' && value != null;
                    const isMale = gender === 'male';
                    const isOutsideBoundaries = isMale
                        ? value < item.male_min || value > item.male_max
                        : value < item.female_min || value > item.female_max;

                    return isValueDefined && isOutsideBoundaries;
                }).map(item => {
                    // For each item, return a string describing how the value deviates from the norm
                    const isMale = gender === 'male';
                    const referenceRange = isMale
                        ? `${item.male_min}-${item.male_max}`
                        : `${item.female_min}-${item.female_max}`;
                    return `${item.name} je ${inputValues[item.name]}, referenčne vrednosti: ${referenceRange}\n`;
                })
            )
        );

        const prompt = `Zdravstveno stanje osebe: ${clinicalHistory}. \n Pri analizi sledečih vrednosti bodi posebno pozoren na vrednosti, ki hudo odstopajo od referenčnih vrednosti. Katerakoli vrednost odstopa, podaj komentar kaj bi lahko pomenila. Če vrednost ne izstopa je ne komentiraj. Bodi pozoren na vse ostale vrednosti  in mogoče njihovo korelacijo za zgodnjo detekcijo bolezni in nepravilnosti.  Analiziraj sledeče vrednosti: ${filteredItems.join('; ')}.`;

        console.log('Prompt:', prompt);

        try {
            if (filteredItems.length > 0) {
                const response = await callBackendOpenAIAPI({ prompt });
                setApiResponse(response);
            } else {
                setApiResponse("Vse vrednosti so znotraj referenčnih vrednosti.");
            }
        } catch (error) {
            console.error('Napaka:', error);
        }

        setLoading(false); // Stop loading spinner
    };


    return (
        <div>
            <div className="api-response">
                {loading ? (
                    <div className="loading-indicator">Delam analizo...</div> // You can replace this with a spinner or any loading graphic
                ) : (
                    apiResponse
                )}
            </div>
            <div className="submit-button-container">
                <button onClick={() => handleApiCall()}>Analiziraj svoje podatke</button>
            </div>

            <div className="gender-selection-container">
                <span className="gender-instruction">Izberi spol:</span>
                <label className="gender-label">
                    <input
                        type="radio"
                        value="male"
                        checked={gender === 'male'}
                        onChange={() => setGender('male')}
                    />
                    Moški
                </label>
                <label className="gender-label">
                    <input
                        type="radio"
                        value="female"
                        checked={gender === 'female'}
                        onChange={() => setGender('female')}
                    />
                    Ženska
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="clinical-history">Vaše zdravstveno stanje:</label>
                <textarea
                    id="clinical-history"
                    name="clinicalHistory"
                    value={clinicalHistory}
                    onChange={(e) => setClinicalHistory(e.target.value)}
                    placeholder="Opis preteklih kliničnih simptomov in zgodovina slabosti, predpisane tablete, trenutno počutje..."
                    rows="4"
                ></textarea>
            </div>
            {groups.map((group, index) => (
                <Group
                    key={index}
                    group={group}
                    inputValues={inputValues}
                    handleInputChange={handleInputChange}
                    gender={gender}
                />
            ))}
        </div>
    );
};

export default MyFormComponent;

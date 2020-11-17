import { useState } from 'react';

import GenderSelector from './GenderSelector';
import BodyComposition from './BodyComposition';

function EACalc() {
  const [state, setState] = useState({
    gender: null,
    bodymass: 0,
    bodyfat: 15
  });

  const setGender = newGender => setState({...state, gender: newGender })
  const setBodyMass = newBodyMass => setState({...state, bodymass: newBodyMass })
  const setBodyFat = newBodyFat => setState({...state, bodyfat: newBodyFat })

  const fatMass = state.bodymass * state.bodyfat / 100;
  const fatFreeMass = state.bodymass - fatMass;

  return (
    <div>
      <h1>Energy Availability Calculator</h1>
      <GenderSelector selected={state.gender} setGender={setGender} />
      <BodyComposition
        bodymass={state.bodymass}
        setBodyMass={setBodyMass}
        bodyfat={state.bodyfat}
        setBodyFat={setBodyFat}
        fatMass={fatMass}
        fatFreeMass={fatFreeMass}
      />
    </div>
  );
}

export default EACalc;

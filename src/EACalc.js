import { useState } from 'react';
import GenderSelector from './GenderSelector';

function EACalc() {
  const [state, setState] = useState({
    gender: null
  });

  const setGender = newGender => setState({...state, gender: newGender })

  return (
    <div>
      <h1>Energy Availability Calculator</h1>
      <GenderSelector selected={state.gender} setGender={setGender} />
    </div>
  );
}

export default EACalc;

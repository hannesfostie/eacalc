import { useState } from 'react';

import Header from './Header';
import GenderSelector from './GenderSelector';
import BodyComposition from './BodyComposition';
import EnergyAvailability from './EnergyAvailability';

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
    <>
      <Header />
      <section className="flex justify-center p-12">
        <div className="max-w-3xl flex justify-center flex-wrap overflow-hidden grid grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl mb-4">General Statistics</h3>
            <ul className="list-disc list-inside">
              <li>The original <a href="https://eacalc.useful.coach">EA Calculator</a></li>
              <li>
                <a href="#">Research paper</a><br />
                <small>Melin, A. et al. (2019). Energy Availability in Athletics: Health, Performance and Physique</small>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
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
        </div>
      </section>
      <section className="flex justify-center p-12">
        <EnergyAvailability fatFreeMass={fatFreeMass} />
      </section>
    </>
  );
}

export default EACalc;

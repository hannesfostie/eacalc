import { useState } from 'react';

function DailyEnergyRequirement(props) {
  const fatFreeMass = props.fatFreeMass || 0;

  const [availability, setAvailability] = useState(0);
  const [expenditure, setExpenditure] = useState(0);

  const intakeRequirement = availability * fatFreeMass + expenditure;

  return (
    <>
      <h3 className="block border-b border-solid border-gray-300 pb-3">Daily energy requirement</h3>
      <div className="max-w-3xl flex justify-center flex-wrap overflow-hidden grid grid-cols-5 gap-8 mt-4">
        <p className="col-span-2">You can see your estimated required total daily energy intake (kcal) needs, by inputting your exercise expenditure (kcal) and desired energy availability (EA kcal/kg FFM)</p>
        <div className="flex flex-wrap -mx-3 overflow-hidden col-span-3">
          <div className="my-3 px-3 w-1/3 overflow-hidden">
            <input type="number" name="expenditure" onChange={e => setExpenditure(parseInt(e.target.value))} />
            <br />
            <label htmlFor="expenditure" className="text-xs">Exercise expenditure</label>
          </div>
          <div className="my-3 px-3 w-1/3 overflow-hidden">
            <input type="number" name="availability" onChange={e => setAvailability(parseInt(e.target.value))} />
            <br />
            <label htmlFor="availability" className="text-xs">Energy availability</label>
          </div>
          <div className="my-3 px-3 w-1/3 overflow-hidden">
            <input type="number" name="intake" value={intakeRequirement} disabled />
            <br />
            <label htmlFor="intake" className="text-xs">Energy intake</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default DailyEnergyRequirement;

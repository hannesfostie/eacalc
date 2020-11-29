function BodyComposition(props) {
  return (
    <div className="bg-white shadow p-4 divide-y divide-gray-200 rounded">
      <h3 className="text-l">Body Composition</h3>

      <div className="flex flex-wrap -mx-4 overflow-hidden">
        <div className="my-4 px-4 w-1/4 overflow-hidden">
          <input type="number" name="bodymass" value={props.bodymass} onChange={e => props.setBodyMass(e.target.value)} />
          <br />
          <label htmlFor="bodymass" className="text-xs">Body mass</label>
        </div>

        <div className="my-4 px-4 w-1/4 overflow-hidden">
          <input type="number" name="bodyfat" value={props.bodyfat} onChange={e => props.setBodyFat(e.target.value)} />
          <br />
          <label htmlFor="bodyfat" className="text-xs">Est. body fat %</label>
        </div>

        <div className="my-4 px-4 w-1/4 overflow-hidden">
          <input type="number" name="fatmass" value={props.fatMass} disabled />
          <br />
          <label htmlFor="fatmass" className="text-xs">Fat mass</label>
        </div>

        <div className="my-4 px-4 w-1/4 overflow-hidden">
          <input type="number" name="fatfreemass" value={props.fatFreeMass} disabled />
          <br />
          <label htmlFor="fatfreemass" className="text-xs">Fat free mass</label>
        </div>
      </div>
    </div>
  );
}

export default BodyComposition;

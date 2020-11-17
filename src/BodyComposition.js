function BodyComposition(props) {
  return (
    <div>
      <label htmlFor="bodymass">Body Mass</label>
      <input type="number" name="bodymass" value={props.bodymass} onChange={e => props.setBodyMass(e.target.value)} />

      <label htmlFor="bodyfat">Body Fat %</label>
      <input type="number" name="bodyfat" value={props.bodyfat} onChange={e => props.setBodyFat(e.target.value)} />
      <dl>
        <dt>Fat Mass</dt>
        <dd>{props.fatMass}</dd>
        <dt>Fat Free Mass</dt>
        <dd>{props.fatFreeMass}</dd>
      </dl>
    </div>
  );
}

export default BodyComposition;

function GenderOption(props) {
  return (
    <label htmlFor={props.gender}>
      <input type="radio"
             name="gender"
             id={props.gender}
             value={props.gender}
             checked={props.checked}
             onChange={e => props.setGender(e.target.value)} />
      {props.gender}
    </label>
  );
}

export default GenderOption;

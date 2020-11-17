import GenderOption from './GenderOption';

const MALE = 'MALE';
const FEMALE = 'FEMALE';

function GenderSelector(props) {
  return (
    <div>
      <GenderOption gender={MALE} checked={props.selected === MALE} setGender={props.setGender} />
      <GenderOption gender={FEMALE} checked={props.selected === FEMALE} setGender={props.setGender} />
    </div>
  );
}

export default GenderSelector;

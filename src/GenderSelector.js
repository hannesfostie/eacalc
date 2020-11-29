import GenderOption from './GenderOption';

const MALE = 'MALE';
const FEMALE = 'FEMALE';

function GenderSelector(props) {
  return (
    <div className="bg-white shadow p-4 divide-y divide-gray-200 rounded mb-4">
      <h3 className="text-l">Gender</h3>

      <div className="flex flex-wrap -mx-2 overflow-hidden">
        <GenderOption gender={MALE} checked={props.selected === MALE} setGender={props.setGender} />
        <GenderOption gender={FEMALE} checked={props.selected === FEMALE} setGender={props.setGender} />
      </div>
    </div>
  );
}

export default GenderSelector;

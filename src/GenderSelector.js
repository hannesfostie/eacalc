import Panel from './Panel';
import GenderOption from './GenderOption';

const MALE = 'MALE';
const FEMALE = 'FEMALE';

function GenderSelector(props) {
  return (
    <Panel title="Gender">
      <div className="flex flex-wrap -mx-2 overflow-hidden">
        <GenderOption gender={MALE} checked={props.selected === MALE} setGender={props.setGender} />
        <GenderOption gender={FEMALE} checked={props.selected === FEMALE} setGender={props.setGender} />
      </div>
    </Panel>
  );
}

export default GenderSelector;

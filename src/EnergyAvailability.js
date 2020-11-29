import DailyEnergyRequirement from './DailyEnergyRequirement';

function EnergyAvailability(props) {
  const fatFreeMass = props.fatFreeMass;

  return (
    <div className="justify-center max-w-3xl">
      <h2 className="text-2xl mb-8">Energy availability</h2>
      <DailyEnergyRequirement fatFreeMass={fatFreeMass} />
    </div>
  );
}

export default EnergyAvailability;

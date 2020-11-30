function Guidelines() {
  return (
    <div className="max-w-3xl" id="guidelines">
      <h3 className="text-l">Recommended Energy Availability (EA) Guidelines</h3>
      <div className="divide-y divide-gray-200">
        <p>
          <a href="#">Read the research paper</a>
          <br />
          <small>Melin, A. et al. (2019). Energy Availability in Athletics: Health, Performance and Physique</small>
        </p>

        <div className="grid grid-cols-5 gap-8">
          <h4 className="text-green-600 bold align-middle">
            <span className="rounded-3xl mr-2 h-3 w-3 align-middle inline-block bg-green-100 border-solid border-2 border-green-400">&nbsp;</span>
            High EA
          </h4>
          <p className="col-span-3">
            Healthy weight gain or weight maintenance. Training at moderate intensity ~1.5-2 hr/day.
          </p>
          <p>
            &gt; 40 <small>kcal/kg FFM</small>
          </p>
        </div>
        <div className="grid grid-cols-5 gap-8">
          <h4 className="text-blue-600 bold">
            <span className="rounded-3xl mr-2 h-3 w-3 align-middle inline-block bg-blue-100 border-solid border-2 border-blue-400">&nbsp;</span>
            Optimal EA
          </h4>
          <p className="col-span-3">
            Weight maintenance providing adequate energy for all physiological functions. During periods with injury with alternative or rehabilitation training at low/moderate intensity ~1.5 hr/day
          </p>
          <p>
            &ge; 40 <small>kcal/kg FFM</small>
          </p>
        </div>
        <div className="grid grid-cols-5 gap-8">
          <h4 className="text-yellow-600 bold">
            <span className="rounded-3xl mr-2 h-3 w-3 align-middle inline-block bg-yellow-100 border-solid border-2 border-yellow-400">&nbsp;</span>
            Subclinical EA
          </h4>
          <p className="col-span-3">
            May be tolerated for short periods during a well-constructed weight-loss program.
          </p>
          <p>
            30-40 <small>kcal/kg FFM</small>
          </p>
        </div>
        <div className="grid grid-cols-5 gap-8">
          <h4 className="text-red-600 bold">
            <span className="rounded-3xl mr-2 h-3 w-3 align-middle inline-block bg-red-100 border-solid border-2 border-red-400">&nbsp;</span>
            Clinical EA
          </h4>
          <p className="col-span-3">
            Health Implications with impairment of many body systems including training adaptation and performance.
          </p>
          <p>
            &lt; 30 <small>kcal/kg FFM</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Guidelines;

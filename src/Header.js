function Header() {
  return(
    <header className="bg-gray-100 justify-center flex border-b border-solid border-gray-300 pt-24 pb-12">
      <div className="max-w-3xl flex justify-center flex-wrap overflow-hidden grid grid-cols-3 gap-8">
        <div>
          <img
              src={process.env.PUBLIC_URL + "/jumping.png"}
              srcSet={process.env.PUBLIC_URL + "/jumping.png 1x," + process.env.PUBLIC_URL + "/jumping@2x.png 2x"}
              alt="Illustration of person jumping in the air"
        />
        </div>
        <div className="col-span-2">
          <h1 className="mb-4">
            <img
              src={process.env.PUBLIC_URL + "/logotype.svg"}
              alt="Energy Availability Calculator logo"
            />
          </h1>
          <hr />
          <h2 className="mt-6 text-2xl">This calculator could help you estimate your current daily Energy Availability (EA), weekly EA average, and help you estimate your daily energy needs to achieve recommended EA guidelines.</h2>
          <p className="mt-4 text-base">Calculations are made from the information you provide which are likely estimated. This tool is for information only, and is not intended to diagnose or provide treatment of any kind. If in any doubt about anything whatsoever, please consult a Sports Dietitian or nutritionist. </p>
        </div>
      </div>
    </header>
  );
}

export default Header;

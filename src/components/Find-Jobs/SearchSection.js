export default function SearchSection() {
  return (
    <div className="container mx-auto md:px-8 px-4">
      <div className="flex flex-wrap flex-row md:space-x-2 justify-center">
        <div className="md:w-3/12 w-full">
          <div className="flex border-2 border-blue-900 rounded-lg">
            <span className="text-lg rounded-l px-4 py-2 whitespace-no-wrap">
              What
            </span>
            <input
              name="field_name"
              className="  rounded-r px-4 py-2 w-full"
              type="text"
              placeholder="Job title or company"
            />
          </div>
        </div>
        <div className="md:w-3/12 w-full">
          <div className="flex border-2 border-blue-900 rounded-lg mt-3 md:mt-0">
            <span className="text-lg border-0 rounded-l px-4 py-2 whitespace-no-wrap">
              Where
            </span>
            <input
              name="field_name"
              className=" rounded-r px-4 py-2 w-full"
              type="text"
              placeholder="City,Country or remote"
            />
          </div>
        </div>
        <div className="md:w-3/12 w-full">
          <button className="text-base px-4 py-3 bg-blue-900 text-white rounded w-full md:w-max mt-3 md:mt-0">
            Find Jobs
          </button>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
const AppliedJobs = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="">
        <div className="bg-gray-600 rounded-lg px-8 py-2">
          <div>
            <p className="text-white text-2xl"> Applied Job List </p>
          </div>
        </div>
        <table className="w-full text-left bg-gray-600 border rounded-xl my-2">
          <tr className="">
            <th className="px-8 py-3 text-white">Date Joined</th>
            <th className="px-8 py-3 text-white">Status</th>
          </tr>
          <tr>
            <td className="px-8 py-3 text-white">Date time</td>
            <td className="px-8 py-3 text-white">
              {" "}
              <div className="flex">
                <span className="bg-green-300 inline-block my-2 h-2 w-2 rounded-full"></span>
                Active
              </div>
            </td>
            <td className="px-4 py-3 flex justify-end text-yellow-400">
              <Link to="/applied-joblist">View List
              </Link>
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
              
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default AppliedJobs;

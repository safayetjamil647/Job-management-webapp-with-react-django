import { Link } from "react-router-dom";
export default function JobCard() {
  return (
    <div className="font-mono border border-gray-600 rounded-lg p-4">
      <div className="flex flex-wrap flex-row">
        <div className="w-10/12">
          <Link to="/jobdetail" className="text-xl font-bold hover:underline cursor-pointer">DevOps Cloud Engineer</Link>
        </div>
        <div className="w-2/12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 hover:bg-blue-900 hover:text-white rounded-lg "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-wrap flex-row">
        <div className="w-8/12">
          <p className="text-gray-700 mr-2 hover:underline cursor-pointer">Guardian Life Insurance Company</p>
        </div>
        <div className="w-4/12">
          <p>
            3.5
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </p>
        </div>
        <div className="w-6/12">
          <p className="font-bold">Location</p>
        </div>
      </div>

      <div className="w-10/12">
        <p className="text-gray-600 cursor-pointer">
          Join us to work on what makes Discord feel like a live and upbeat
          place! Our team's mission is to create the primitives allowing us to
          connect our users to one{" "}
        </p>
      </div>
      <div className="flex flex-wrap flex-row ">
        <div className="w-3/12">
          <p className="text-blue-600">12/7/10</p>
        </div>
        <div className="w-4/12">
          <p className="text-blue-600">Published</p>
        </div>
      </div>
    </div>
  );
}

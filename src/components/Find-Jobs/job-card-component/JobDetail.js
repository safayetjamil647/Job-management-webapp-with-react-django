import { Link } from "react-router-dom";
export default function JobDetail() {
  return (
    <div className="border-2 rounded-lg border-blue-400  p-4">
      <div className="flex flex-wrap flex-row justify-between my-4">
        <div className="text-xl mb-4">
          <h1>DevOps Cloud Engineer </h1>
        </div>
        <div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 hover:bg-blue-900 hover:text-white rounded-full "
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
        <div>
          <div className="flex flex-wrap flex-row">
            <div>
              <Link to="/applyjob" className="btn-blue-active">Apply Now</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap flex-row my-5">
        <div>
          <p className="text-base text-gray-600">Guardian Life Insurance Company</p>
        </div>
        <div className=" flex flex-wrap mx-3">
          <div><p>3.5</p></div>
          <div className="flex items-center"> <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1 md:ml-2"
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
            </svg></div>
        </div>
      </div>
      <div className="flex flex-wrap flex-row">
        <div className="overflow-y-scroll h-60">
          <p>Join us to work on what makes Discord feel like a live and upbeat
          place! Our team's mission is to create the primitives allowing us to
          connect our users to one{" "}Join us to work on what makes Discord feel like a live and upbeat
          place! Our team's mission is to create the primitives allowing us to
          connect our users to one{" "}Join us to work on what makes Discord feel like a live and upbeat
          place! Our team's mission is to create the primitives allowing us to
          connect our users to one{" "}Join us to work on what makes Discord feel like a live and upbeat
          place! Our team's mission is to create the primitives allowing us to
          connect our users to one{" "}Join us to work on what makes Discord feel like a live and upbeat
          place! Our team's mission is to create the primitives allowing us to
          connect our users to one{" "}</p>
          <p>Location</p>
          <p>Date Published</p>
          <p>Last Date of apply</p>
        </div>
      </div>
      <div className="flex flex-wrap flex-row py-3">
        <div className="">
          <Link to="/findjobs" className="btn-blue-active">Go Back</Link>
        </div>
      </div>
    </div>
  );
}

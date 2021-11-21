import JobDetail from "./job-card-component/JobDetail";
export default function JobListSection() {
  return (
    <div className="container mx-auto p-4 ">
      <div className="flex flex-wrap flex-row justify-center mb-6">
        <div className=" md:w-4/12 w-full p-4">
          <div className="">
            <JobDetail />
          </div>
        </div>
      </div>
    </div>
  );
}

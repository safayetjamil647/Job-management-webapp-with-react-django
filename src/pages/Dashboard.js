import { Link } from "react-router-dom";
const Dashboard =()=>{
    return(
        <div className="container mx-auto p-8">
            <div className="flex flex-wrap">
                <div className="w-full md:w-4/12">
                    <div className="bg-gray-500 px-6 py-6 border rounded-2xl">
                        <div className="text-2xl text-center text-white">
                            <Link to="/applied-jobs">Applied Jobs</Link>
                        </div>
                        <div className=" text-2xl text-center text-white">
                            <p>20</p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-4/12">
                <div className="bg-gray-500 px-6 py-6 border rounded-2xl">
                        <div className="text-2xl text-center text-white">
                            <p>Job Posted</p>
                        </div>
                        <div className=" text-2xl text-center text-white">
                            <p>20</p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-4/12">
                <div className="bg-gray-500 px-6 py-6 border rounded-2xl">
                        <div className="text-2xl text-center text-white">
                            <p>Interviews</p>
                        </div>
                        <div className=" text-2xl text-center text-white">
                            <p>20</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    );
}
export default Dashboard;
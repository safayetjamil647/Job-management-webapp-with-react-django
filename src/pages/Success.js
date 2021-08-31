const Success = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-wrap">
        <div className="w-full">
          <p className="text-4xl text-gray-600 flex justify-center mb-16">
            Get the skills you want and employers need
          </p>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-4/12 text-center px-4 ">
       <div>
         <div className="text-center">
            <img className="w-32 mx-auto" src="iconaplus.svg" alt="course"/>
           </div>
          <p className="m-4 text-2xl text-gray-500">CompTIA A+</p>
          <p className="m-2 text-lg text-gray-500">
            A+ is the starting point for a career in IT. The performance-based
            exams certify foundational IT skills across a variety of devices and
            operating systems.
          </p>
          <p className="text-lg text-blue-400 hover:underline">Learn More</p>
       </div>
        </div>
        <div className="w-full md:w-4/12 text-center px-4 ">
       <div>
         <div className="text-center">
            <img className="w-32 mx-auto" src="iconnetworkplus.svg" alt="course"/>
           </div>
          <p className="m-4 text-2xl text-gray-500">CompTIA A+</p>
          <p className="m-2 text-lg text-gray-500">
            A+ is the starting point for a career in IT. The performance-based
            exams certify foundational IT skills across a variety of devices and
            operating systems.
          </p>
          <p className="text-lg text-blue-400 hover:underline">Learn More</p>
       </div>
        </div>
        <div className="w-full md:w-4/12 text-center px-4 ">
       <div>
         <div className="text-center">
            <img className="w-32 mx-auto" src="iconsecurityplus.svg" alt="course"/>
           </div>
          <p className="m-4 text-2xl text-gray-500">CompTIA A+</p>
          <p className="m-2 text-lg text-gray-500">
            A+ is the starting point for a career in IT. The performance-based
            exams certify foundational IT skills across a variety of devices and
            operating systems.
          </p>
          <p className="text-lg text-blue-400 hover:underline">Learn More</p>
       </div>
        </div>
      </div>
    </div>
  );
};
export default Success;

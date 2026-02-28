const ProjectProgress = () => {
  const percentage = 41;

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white w-full lg:w-80 p-6 rounded-2xl shadow-lg">
        <h3 className="text-gray-700 font-semibold mb-6">
          Project Progress
        </h3>

        {/* Progress Circle */}
        <div className="flex items-center justify-center">
          <div
            className="relative w-52 h-52 rounded-full flex items-center justify-center"
            style={{
              background: `conic-gradient(
                #2e7d57 0% ${percentage}%,
                #174d37 ${percentage}% 75%,
                #e5e7eb 75% 100%
              )`,
            }}
          >
            {/* Inner White Circle */}
            <div className="w-36 h-36 bg-white rounded-full flex flex-col items-center justify-center">
              <h1 className="text-4xl font-bold text-black">
                {percentage}%
              </h1>
              <p className="text-gray-400 text-sm">
                Project Ended
              </p>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-between mt-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#2e7d57]"></span>
            Completed
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#174d37]"></span>
            In Progress
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-gray-300"></span>
            Pending
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectProgress;
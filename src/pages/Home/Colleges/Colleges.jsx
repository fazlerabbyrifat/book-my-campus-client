import { useEffect, useState } from "react";

const Colleges = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("/colleges.json")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  return (
    <div className="bg-gray-800 py-10">
      <h1 className="text-5xl font-bold uppercase text-center mb-10 text-gray-800">Our Best Institutes</h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
        {colleges.map((college) => (
          <div key={college.name} className="rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src={college.image}
                alt=""
                className="w-full h-56 object-cover object-center transition-transform transform scale-100 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-40 transition-opacity hover:opacity-100"></div>
              <a
                href="#"
                className="absolute bottom-4 left-4 text-white font-semibold text-sm hover:text-blue-300 transition-colors"
              >
                Learn More
              </a>
            </div>
            <div className="px-6 py-4 text-white">
              <h3 className="text-2xl font-semibold mb-2">{college.name}</h3>
              <p className="text-gray-600 text-sm h-16 overflow-hidden">{college.description}</p>
            </div>
            <div className="py-3 px-6 flex justify-between items-center">
              <div className="">
                <span className="mr-1">{college.admissionDates}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline-block align-middle"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 3.293a1 1 0 011.414 0L10 6.586l3.293-3.293a1 1 0 111.414 1.414L11.414 8l3.293 3.293a1 1 0 01-1.414 1.414L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 8 5.293 4.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <a
                href="#"
                className="text-blue-500 font-semibold text-sm hover:text-blue-700 transition-colors"
              >
                More Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Colleges;

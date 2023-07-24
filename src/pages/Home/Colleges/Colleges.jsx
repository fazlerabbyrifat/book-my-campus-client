import { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Colleges = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("https://book-my-campus-server-dun.vercel.app/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  return (
    <div className="bg-gray-800 py-10">
      <h1 className="text-5xl font-bold uppercase text-center mb-10 text-white">
        Our Best Institutes
      </h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
        {colleges.map((college) => (
          <div
            key={college.name}
            className="rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative">
              <img
                src={college.image}
                alt=""
                className="w-full h-56 object-cover object-center transition-opacity hover:opacity-90"
              />
              <div className="absolute inset-0 bg-black opacity-40 transition-opacity hover:opacity-0"></div>
            </div>
            <div className="px-6 py-4 text-white">
              <h3 className="text-2xl font-semibold mb-2">{college.name}</h3>
              <span>
                Research Works:{" "}
                {college?.researchWorks?.map((researchWork) => (
                  <li key={researchWork.title}>{researchWork.title}</li>
                ))}
              </span>
              <div className="flex justify-between items-center gap-3 my-2">
                <span>
                  Events:{" "}
                  {college?.events?.map((event) => (
                    <li key={event.title}>{event.title}</li>
                  ))}
                </span>
                <span>
                  Sports:{" "}
                  {college?.sports?.map((sport) => (
                    <li key={sport.sport}>{sport.sport}</li>
                  ))}
                </span>
              </div>
            </div>
            <div className="py-3 px-6">
              <p>Admission Dates</p>
              <div className="flex items-center">
                <FaCalendarAlt></FaCalendarAlt>
                <span className="ml-2">{college.admissionDates}</span>
              </div>
            </div>
            <Link>
              <button className="btn btn-primary ml-5 my-5">See Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colleges;

import axios from "axios";
import { useState, useEffect } from "react";

function Dashbord() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/domain");
        const responseData = await response.json();

        if (responseData.data && Array.isArray(responseData.data)) {
          const extractedNames = responseData.data.map((item) => item.name);

          setNames(extractedNames);
        } else {
          console.error("Invalid API response:", responseData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="flex justify-center pt-10 ">
        <h1 className="text-4xl">Available domain names</h1>
      </div>

      <div className="p-10">
        <div>
          <ul className="flex">
            {names.map((name, index) => (
              <li className="border-2 border-gray-500 text-lg w-64 text-center m-7 p-3 " key={index}>{name}</li>
            ))}
          </ul>
        </div>
      </div>


    </div>
  );
}
export default Dashbord;

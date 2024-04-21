import axios from "axios";
import { useState, useEffect } from "react";

function Dashbord() {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/user');
          setUserData(response.data);
        } catch (error) {
          setError(error.message);
        }
      };
  
      fetchData();
      return () => {
      };
    }, []); 
  
    return (
      <div className="p-10">
        {userData ? (
          <div>
            <h2>User Data</h2>
            <pre>{JSON.stringify(userData, null, 2)}</pre>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        {error && <p>Error: {error}</p>}
      </div>
    );
  }
export default Dashbord;

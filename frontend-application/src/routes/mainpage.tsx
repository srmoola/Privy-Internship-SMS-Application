import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import axios from "axios";

const MainPage = () => {
  const [userInfo, setuserInfo] = useState<any>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const user_id = localStorage.getItem("USER_ID");
    if (!user_id) {
      navigate("/error");
      return; // Early return to prevent further execution if there's no USER_ID
    }

    const fetchData = async () => {
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:3000/check-user/get-user-info",
          data: {
            USER_ID: user_id,
          },
        });
        if (response.data) {
          setuserInfo(response.data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  console.log(userInfo);

  return <Dashboard username={!userInfo ? "User" : userInfo.firstName} />;
};

export default MainPage;

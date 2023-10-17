import { useEffect, useState } from "react";

const MainPage = () => {
  const [userID, setuserID] = useState<string>("");

  useEffect(() => {
    const user_id = localStorage.getItem("USER_ID");
    setuserID(user_id!);
  }, []);

  return <div>{userID}</div>;
};

export default MainPage;

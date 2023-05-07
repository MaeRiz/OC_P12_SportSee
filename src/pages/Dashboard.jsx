import { useParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import getUserDatas from "../utils/getUserDatas";

const Dashboard = () => {
  let { userId } = useParams();

  const user = new getUserDatas("useMock");
  //const user = new getUserDatas(userId);

  return (
    <div id="dashboard">
      <SideBar />
    </div>
  );
};

export default Dashboard;

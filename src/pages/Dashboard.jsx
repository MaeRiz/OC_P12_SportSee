import { useParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import getUserDatas from "../utils/getUserDatas";
import BarChartComp from "../components/BarChartComp";

const Dashboard = () => {
  let { userId } = useParams();

  const user = new getUserDatas("useMock");
  // const user = new getUserDatas(userId);

  return (
    <div id="dashboard">
      <SideBar />
      <div id="page_content">
        <div className="welcome">
          <h3 className="welcome--title">
            Bonjour{" "}
            <span className="welcome--title-name">
              {user.userInfos.data.userInfos.firstName}
            </span>
          </h3>
          <p className="welcome--goodjob">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        </div>
        <div className="charts__container">
          <BarChartComp datas={user.activity.data.sessions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

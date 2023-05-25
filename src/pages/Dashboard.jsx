import { useParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import { getUserDatas } from "../utils/getUserDatas";
import BarChartComp from "../components/BarChartComp";
import LineChartComp from "../components/LineChartComp";
import RadarChartComp from "../components/RadarChartComp";
import Nutritional from "../components/Nutritional";
import RadialBarChartComp from "../components/RadialBarChartComp";
import NotFound from "./NotFound";
import InProgress from "./InProgress";
import { useEffect, useState } from "react";

const Dashboard = () => {
  let { userId } = useParams();
  const [userDatas, setUserDatas] = useState([]);

  useEffect(() => {
    callUserDatas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function callUserDatas() {
    const user = await getUserDatas(userId);
    setUserDatas(user);
  }

  if (userDatas === "404") {
    return <NotFound />;
  }

  if (userDatas.length === 0) {
    return <InProgress />;
  }

  return (
    <div id="dashboard">
      <SideBar />
      <div id="page_content">
        <div className="welcome">
          <h3 className="welcome--title">
            Bonjour{" "}
            <span className="welcome--title-name">
              {userDatas.userInfos.userInfos.firstName}
            </span>
          </h3>
          <p className="welcome--goodjob">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        </div>

        <div className="charts__container">
          <BarChartComp datas={userDatas.activity} />
          <LineChartComp datas={userDatas.averageSessions} />
          <RadarChartComp datas={userDatas.performance} />
          <RadialBarChartComp datas={userDatas.score} />
        </div>
        <div className="nutritional">
          {Object.entries(userDatas.userInfos.keyData).map((x) => (
            <Nutritional key={x[0]} item={x} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

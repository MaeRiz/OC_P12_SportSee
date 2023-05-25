import getUserDatasByMock from "./mock/getUserDatasByMock";

const URL_API = "http://localhost:3000/user/";

export async function getUserDatas(id) {
  if (id === "useMock") {
    const mocksDatas = new getUserDatasByMock();
    const userDatas = new makeUserDatas(
      mocksDatas.userInfos,
      mocksDatas.activity,
      mocksDatas.performance,
      mocksDatas.averageSessions
    );
    return userDatas;
  } else {
    let response = await fetch(URL_API + id);

    if (!response.ok) {
      return "404";
    }
    let userinfos_fetch_data = await response.json();

    response = await fetch(`${URL_API + id}/activity`);
    let activity_fetch_data = await response.json();

    response = await fetch(`${URL_API + id}/performance`);
    let performance_fetch_data = await response.json();

    response = await fetch(`${URL_API + id}/average-sessions`);
    let averageSessions_fetch_data = await response.json();

    const userDatas = new makeUserDatas(
      userinfos_fetch_data,
      activity_fetch_data,
      performance_fetch_data,
      averageSessions_fetch_data
    );
    return userDatas;
  }
}

class makeUserDatas {
  constructor(userInfos, activity, performance, averageSessions) {
    this.userInfos = this.formatUserInfos(userInfos);
    this.activity = this.formatActivity(activity);
    this.performance = this.formatPerformance(performance);
    this.averageSessions = this.formatAverageSessions(averageSessions);
    this.score = this.formatScore(this.userInfos);
  }

  formatUserInfos(datas) {
    return datas.data;
  }

  formatActivity(datas) {
    let newDatas = [];
    datas.data.sessions.forEach((element, index) => {
      newDatas.push({
        day: index + 1,
        kilogram: element["kilogram"],
        calories: element["calories"],
      });
    });
    return newDatas;
  }

  formatPerformance(datas) {
    const PerfTypes = {
      1: "Cardio",
      2: "Energie",
      3: "Endurance",
      4: "Force",
      5: "Vitesse",
      6: "Intensité",
    };

    let newDatas = [];

    datas.data.data.forEach((element) => {
      newDatas.push({
        value: element.value,
        kind: PerfTypes[element["kind"]],
      });
    });
    return newDatas;
  }

  formatAverageSessions(datas) {
    const day = {
      1: "L",
      2: "M",
      3: "M",
      4: "J",
      5: "V",
      6: "S",
      7: "D",
    };

    let newDatas = [];
    datas.data.sessions.forEach((element) => {
      newDatas.push({
        day: day[element["day"]],
        sessionLength: element.sessionLength,
      });
    });
    return newDatas;
  }

  formatScore(datas) {
    let value = 0;
    if (!datas.todayScore) {
      value = datas.score * 100;
    } else {
      value = datas.todayScore * 100;
    }
    return [
      {
        value: value,
      },
    ];
  }
}

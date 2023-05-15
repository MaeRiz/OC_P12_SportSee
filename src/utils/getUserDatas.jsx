import getUserDatasByMock from "./mock/getUserDatasByMock";

class getUserDatas {
  constructor(userId) {
    this.userId = userId;
    if (this.userId === "useMock") {
      const datas = new getUserDatasByMock();

      this.userInfos = this.formatUserInfos(datas.userInfos);
      this.activity = this.formatActivity(datas.activity);
      this.performance = this.formatPerformance(datas.performance);
      this.averageSessions = this.formatAverageSessions(datas.averageSessions);
    } else {
      this.userInfos = this.getUserInfos();
      this.activity = this.getActivity();
      this.performance = this.getPerformance();
      this.averageSessions = this.getAverageSessions();
    }
  }

  getUserInfos() {
    return null;
  }
  getActivity() {
    return null;
  }
  getPerformance() {
    return null;
  }
  getAverageSessions() {
    return null;
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
}

export default getUserDatas;

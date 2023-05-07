import getUserDatasByMock from "./mock/getUserDatasByMock";

class getUserDatas {
  constructor(userId) {
    this.userId = userId;
    if (this.userId === "useMock") {
      const datas = new getUserDatasByMock();
      this.userInfos = datas.userInfos;
      this.activity = datas.activity;
      this.performance = datas.performance;
      this.averageSessions = datas.averageSessions;
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
}

export default getUserDatas;

import userinfos from "./userinfos.json";
import activity from "./activity.json";
import performance from "./performance.json";
import averagesessions from "./averagesessions.json";

class getUserDatasByMock {
  constructor(userId) {
    this.userId = userId;
    this.userInfos = this.getUserInfos();
    this.activity = this.getActivity();
    this.performance = this.getPerformance();
    this.averageSessions = this.getAverageSessions();
  }

  getUserInfos() {
    return userinfos;
  }
  getActivity() {
    return activity;
  }
  getPerformance() {
    return performance;
  }
  getAverageSessions() {
    return averagesessions;
  }
}

export default getUserDatasByMock;

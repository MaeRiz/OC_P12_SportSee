class getUserDatasByAPI {
  constructor(userId) {
    this.userId = userId;
  }

  text() {
    return `L'id de l'utilisateur est ${this.userId}`;
  }
}

export default getUserDatasByAPI;

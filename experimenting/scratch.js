let user = {
  name: "John",
  money: 1000,

  toString() {
    return `{name: ${this.name}}`;
  },

  valueOf() {
    return this.money;
  }
};

alert(user);
alert(+user);
alert(user + 500);
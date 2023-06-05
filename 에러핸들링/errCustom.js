class authenticationError extends Error {
  constructor(message) {
    super(message);
    this.name = "authenticationError";
    this.favoriteSnack = "chitos";
  }
}

const a = new authenticationError("cause err");
console.log(a.favoriteSnack);

class DBError extends Error {
  constructor(message) {
    super(message);
    this.name = "DBErr";
    this.message = "user dont need to see it";
  }
}

const dbErr = new DBError("stuck");
dbErr.message;

dbErr instanceof DBError; //true

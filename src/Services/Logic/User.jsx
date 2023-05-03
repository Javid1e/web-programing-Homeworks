class User {
  constructor(id, name, usedTime, score) {
    this.id = id;
    this.name = name;
    this.usedTime = usedTime;
    this.score = score;
  }

  // GET method to retrieve a user by userName
  static retrieve(userName) {
    // API call to get the user by ID and return its details
    const userData = apiCallToGetUser(userName);
    return new UserDetails(
      userData.id,
      userData.name,
      userData.usedTime,
      userData.score
    );
  }

  // POST method
  createUser() {
    // make a POST request to create a new user using this.id, this.name, this.usedTime, this.score
    // return Promise with parsed JSON response
  }

  // PUT method
  updateUser() {
    // make a PUT request to update user data using this.id, this.name, this.usedTime, this.score
    // return Promise with parsed JSON response
  }

  // PATCH method
  patchUser(dataToUpdate) {
    // make a PATCH request to update user data using this.id and dataToUpdate object
    // return Promise with parsed JSON response
  }

  // DELETE method
  deleteUser() {
    // make a DELETE request to delete user using this.id
    // return Promise with parsed JSON response
  }
}

export default User;

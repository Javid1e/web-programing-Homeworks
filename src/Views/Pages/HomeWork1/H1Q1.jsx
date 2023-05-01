import React, { Component } from "react";
import AnswerMain from "../../Layouts/AnswerMain";
import Answer1H1 from "../../../Components/HomeWorks/HomeWork1/Answer1/Answer1H1";
import { GetHomeWorkQuestions } from "../../../Services/APIs/Details/GetHomeWorkQuestions";
import GetDetailsOfQuestions from "../../../Services/APIs/GetDetailsOfQuestions";
import LoadingComponent from "../../../UI/Elements/LoadingComponent";

class H1Q1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDataAvailable: false,
      isFinished: false,
      question: [],
      questions: [],
      details: [],
    };
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const { props } = this;
    this.setState({ isDataAvailable: false, isFinished: false });
    const data = await GetHomeWorkQuestions(props.hId);
    const details = await GetDetailsOfQuestions(props.hId * 10 + props.aId);
    this.setState({
      questions: data,
      details: details.question1,
      question: data[0],
    });
    this.setState({ isDataAvailable: true, isFinished: true });
  }

  render() {
    const { isDataAvailable, isFinished, details } = this.state;
    return isFinished ? (
      <AnswerMain
        hId={this.props.hId}
        aId={this.props.aId}
        detail={details}
        children={<Answer1H1 />}
      />
    ) : (
      <LoadingComponent />
    );
  }
}

export default H1Q1;
/*can i create object calss in react for userDetails:id,name,usedTime,score
  have get,post,put,update,patch methods
 when called this copmonent recive a user object
this class dont return any tag
just are using for get user
 object
or create user object
or update and patch and delete,
 this class export all methods that parent needed*/
/*Yes, you can create a class in React for UserDetails with properties like id, name, usedTime, score and implement the CRUD methods like get, post, put, update and patch.

Here's an example implementation:

```
class UserDetails {
  constructor(id, name, usedTime, score) {
    this.id = id;
    this.name = name;
    this.usedTime = usedTime;
    this.score = score;
  }

  // POST method to create a new user
  static create(userData) {
    // API call to create the user and return its ID
    const newUserId = apiCallToCreateUser(userData);
    return new UserDetails(newUserId, userData.name, userData.usedTime, userData.score);
  }

  // GET method to retrieve a user by ID
  static retrieve(userId) {
    // API call to get the user by ID and return its details
    const userData = apiCallToGetUser(userId);
    return new UserDetails(userData.id, userData.name, userData.usedTime, userData.score);
  }

  // PUT method to update an existing user
  static update(userData) {
    // API call to update the user details and return success or failure
    const success = apiCallToUpdateUser(userData);
    if (success) {
      return new UserDetails(userData.id, userData.name, userData.usedTime, userData.score);
    } else {
      return null;
    }
  }

  // PATCH method to update a specific user field
  static patch(userId, fieldName, fieldValue) {
    // API call to update the user field and return success or failure
    const success = apiCallToUpdateUserField(userId, fieldName, fieldValue);
    if (success) {
      const userData = apiCallToGetUser(userId);
      return new UserDetails(userData.id, userData.name, userData.usedTime, userData.score);
    } else {
      return null;
    }
  }

  // DELETE method to delete a user
  static delete(userId) {
    // API call to delete the user and return success or failure
    const success = apiCallToDeleteUser(userId);
    return success;
  }
}
```

From your parent component, you can pass a user object to any of these methods to create, retrieve, update, patch or delete the user. For example:

```
const myUser = new UserDetails(1, "John Doe", 120, 500);

// Create a new user
const newUserId = UserDetails.create(myUser);

// Retrieve an existing user
const retrievedUser = UserDetails.retrieve(1);

// Update an existing user
myUser.name = "Jane Smith";
const updatedUser = UserDetails.update(myUser);

// Patch a specific user field
const patchedUser = UserDetails.patch(1, "usedTime", 150);

// Delete a user
const deletedUser = UserDetails.delete(1);
```*/
/*can i create object calss in react for
userDetails:id,name,usedTime,score
every time call this copmonent
have get,post,put,update,patch method
 when called this copmonent recive a user object
 and return methods that parent needed*/

/*To add usedTime to a JSON server with API component, you will need to make an HTTP request to the server and update the usedTime value based on the response. Here is an example of how you can achieve this:

1. Import the axios library to make HTTP requests:
```
import axios from "axios";
```

2. Create a method that sends a GET request to the server to fetch the usedTime value:
```
async getUsedTime() {
  try {
    const response = await axios.get("https://my-json-server.typicode.com/username/my-db/usedTime");
    const usedTime = response.data;
    this.setState({ usedTime });
  } catch (error) {
    console.error(error);
  }
}
```

3. Call the getUsedTime method in the componentDidMount and componentDidUpdate lifecycle methods:
```
componentDidMount() {
  this.getUsedTime();
  // ...
}

componentDidUpdate(prevProps, prevState) {
  if (prevState.showResult !== this.state.showResult) {
    this.getUsedTime();
  }
  // ...
}
```

4. Update the usedTime value in the JSON server by sending a PUT request:
```
async updateUsedTime(usedTime) {
  try {
    const response = await axios.put("https://my-json-server.typicode.com/username/my-db/usedTime", usedTime);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
```

5. Call the updateUsedTime method in the componentDidUpdate lifecycle method when showResult is false (i.e., when the timer is running):
```
componentDidUpdate(prevProps, prevState) {
  if (prevProps.showResult !== this.props.showResult) {
    this.getUsedTime();
  }
  if (prevState.showResult !== this.state.showResult && !this.state.showResult) {
    const usedTime = prevState.time - this.state.time;
    this.setState({ usedTime });
    this.updateUsedTime(usedTime);
  }
}
```

Import the axios library to make HTTP requests:
import axios from "axios";

Create a method that sends a GET request to the server to fetch the usedTime value:
async getUsedTime() {
  try {
    const response = await axios.get("https://my-json-server.typicode.com/username/my-db/usedTime");
    const usedTime = response.data;
    this.setState({ usedTime });
  } catch (error) {
    console.error(error);
  }
}

Call the getUsedTime method in the componentDidMount and componentDidUpdate lifecycle methods:
componentDidMount() {
  this.getUsedTime();
  // ...
}

componentDidUpdate(prevProps, prevState) {
  if (prevState.showResult !== this.state.showResult) {
    this.getUsedTime();
  }
  // ...
}

Update the usedTime value in the JSON server by sending a PUT request:
async updateUsedTime(usedTime) {
  try {
    const response = await axios.put("https://my-json-server.typicode.com/username/my-db/usedTime", usedTime);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

Call the updateUsedTime method in the componentDidUpdate lifecycle method when showResult is false (i.e., when the timer is running):
componentDidUpdate(prevProps, prevState) {
  if (prevProps.showResult !== this.props.showResult) {
    this.getUsedTime();
  }
  if (prevState.showResult !== this.state.showResult && !this.state.showResult) {
    const usedTime = prevState.time - this.state.time;
    this.setState({ usedTime });
    this.updateUsedTime(usedTime);
  }
}.*/
/*how add usedTime to json server with api component and updating that when showResult is false ,when show result get true value get that usedTime from Json server with api component::*/

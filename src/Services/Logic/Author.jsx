import GetH1A4HistoryTests from "../APIs/Responses/GET/GetH1A4HistoryTests";
import PostH1A4HistoryTests from "../APIs/Responses/POST/PostH1A4HistoryTests";
import PostH2A1HistoryTests from "../APIs/Responses/POST/PostH2A1HistoryTests";
import PutH1A4HistoryTests from "../APIs/Responses/PUT/PutH1A4HistoryTests";
import PutH2A1HistoryTests from "../APIs/Responses/PUT/PutH2A1HistoryTests";
import DeleteH1A4HistoryTests from "../APIs/Responses/DELETE/DeleteH1A4HistoryTests";
import DeleteH2A1HistoryTests from "../APIs/Responses/DELETE/DeleteH2A1HistoryTests";

class Author {
    constructor(id, name, usedTime, score) {
        this.id = id;
        this.name = name;
        this.usedTime = usedTime;
        this.score = score;
    }

    // GET method to retrieve a user by testerName Homework1 Question4
    static retrieveTesterH1A4(testerName) {
        const testerData = GetH1A4HistoryTests(testerName);
        return new UserDetails(
            testerData.id,
            testerData.name,
            testerData.usedTime,
            testerData.score
        );
    }

// GET method To Retrieve a Tester by testerName Homework2 Question1
    static retrieveTesterH2A1(testerName) {
        const testerData = GetH2A1HistoryTests(testerName);
        return new UserDetails(
            testerData.id,
            testerData.name,
            testerData.usedTime,
            testerData.score
        );
    }

    // POST Method To Add A Tester To Homework1 Question4
    createTesterH1Q4() {
        return PostH1A4HistoryTests({this});
    }

    // POST Method To Add A Tester To Homework2 Question1
    createTesterH2Q1() {
        return PostH2A1HistoryTests({this});
    }

    // PUT Method To Update A Tester Of Homework1 Question4
    updateTesterH1Q4() {
        return PutH1A4HistoryTests({this});
    }

    // PUT Method To Update A Tester Of Homework2 Question1
    updateTesterH2Q1() {
        return PutH2A1HistoryTests({this});
    }

    // DELETE Method To Delete A Tester Of Homework1 Question4
    deleteTesterH1Q4() {
        return DeleteH1A4HistoryTests({this});
    }

    // DELETE Method To Delete A Tester Of Homework2 Question1
    deleteTesterH2Q1() {
        return DeleteH2A1HistoryTests({this});
    }
}

export default Author;
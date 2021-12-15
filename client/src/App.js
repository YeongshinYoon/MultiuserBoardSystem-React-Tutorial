import "./App.css";
import React, { Component } from "react";
import User from "./components/User";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

class App extends Component {
  state = {
    users: ""
  }

  componentDidMount() {
    this.callAPI()
    .then(res => this.setState({ users: res }))
    .catch(err => console.log("componentDidMount(): ", err));
  }

  callAPI = async () => {
    const response = await fetch('/api/users');
    const body = await response.json();
    return body;
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.users ? this.state.users.map(user => {
              return (
                <User
                  key={user.id} //map을 사용할 때는 각 요소의 구분을 위해 key props를 추가
                  id={user.id}
                  image={user.image}
                  name={user.name}
                  birthday={user.birthday}
                  gender={user.gender}
                  job={user.job}
                />
              )
            }) : ""}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(App);

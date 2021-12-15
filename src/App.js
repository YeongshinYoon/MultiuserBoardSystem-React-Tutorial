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
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const users = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name' : '홍길동1',
    'birthday' : '111111',
    'gender' : '남자',
    'job' : '학생'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name' : '홍길동2',
    'birthday' : '222222',
    'gender' : '남자',
    'job' : '학생'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name' : '홍길동3',
    'birthday' : '333333',
    'gender' : '남자',
    'job' : '학생'
  }
]

class App extends Component {
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
            {users.map(user => {
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
            })}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(App);

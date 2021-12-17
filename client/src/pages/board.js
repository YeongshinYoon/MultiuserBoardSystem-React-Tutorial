import React, { Component } from "react"
import BoardContents from "../components/BoardContents"
import Paper from "@material-ui/core/Paper"
import Table from "@material-ui/core/Table"
import TableHead from "@material-ui/core/TableHead"
import TableBody from "@material-ui/core/TableBody"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import CircularProgress from "@material-ui/core/CircularProgress"

class Board extends Component {
  state = {
    contents: "",
    completed: 0
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callAPI()
    .then(res => this.setState({ contents: res}))
    .catch(err => console.log("componentDidMount(): ", err))
  }

  callAPI = async () => {
    const response = await fetch('/api/getBoardContents');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1});
  }

  render() {
    return (
      <Paper><Table>
        <TableHead>
          <TableRow>
            <TableCell>게시글 번호</TableCell>
            <TableCell>제목</TableCell>
            <TableCell>작성자</TableCell>
            <TableCell>작성일</TableCell>
            <TableCell>조회수</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          this.state.contents ? this.state.contents.map(c => {
            return (
              <BoardContents
                key = {c._id}
                num = {c.num}
                title = {c.title}
                writer = {c.writer}
                createdAt = {c.createdAt}
                view = {c.view}/>
            )
          }) : ""
        }
        </TableBody>
      </Table></Paper>
    )
  }
}

export default Board
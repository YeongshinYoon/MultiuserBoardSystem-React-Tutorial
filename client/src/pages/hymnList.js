import React, { Component } from "react"
import HymnContents from "../components/HymnContents"
import Paper from "@material-ui/core/Paper"
import Table from "@material-ui/core/Table"
import TableHead from "@material-ui/core/TableHead"
import TableBody from "@material-ui/core/TableBody"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import CircularProgress from "@material-ui/core/CircularProgress"

class hymnList extends Component {
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
    const response = await fetch("/api/getHymns");
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
        <TableHead><TableRow>
          <TableCell>장수</TableCell>
          <TableCell>제목</TableCell>
          <TableCell>절수</TableCell>
          <TableCell>길이</TableCell>
        </TableRow></TableHead>
        <TableBody>
        {
          this.state.contents ? this.state.contents.map(c => {
            return (
              <HymnContents
                key = {c._id}
                page = {c.page}
                title = {c.title}
                verses = {c.verses}
                length = {c.length}
              />
            )
          }) : ""
        }
        </TableBody>
      </Table></Paper>
    )
  }
}

export default hymnList
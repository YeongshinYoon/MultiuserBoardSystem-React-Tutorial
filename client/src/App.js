import "./App.css";
import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"

// Pages
import Login from "./pages/login"
import SignUp from "./pages/signup"
import Board from "./pages/board"

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    //minWidth: 1080
  },
  progress: {
    margin: theme.spacing(2)
  }
})

/*
constructor()
componentWillMount()
render()
componentDidMount()
shouldComponentUpdate()
*/

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/board" element={<Board />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  )
}

export default withStyles(styles)(App);

import "./App.css";
import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { withStyles } from "@material-ui/core/styles"

// Pages
import HymnList from "./pages/hymnList"
import HymnPlay from "./pages/hymnPlay"
import AddHymn from "./pages/addHymn"

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
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
          <Route exact path="/" element={<HymnList />} />
          <Route exact path="/addHymn" element={<AddHymn />} />
          <Route path="/hymnPlay/*" element={<HymnPlay />} />
        </Routes>
      </Router>
    </div>
  )
}

export default withStyles(styles)(App);

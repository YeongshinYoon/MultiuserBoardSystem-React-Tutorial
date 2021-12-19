import React, { Component } from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

class HymnContents extends Component {
    render() {
        // 두 개 이상의 컴포넌트는 div로 묶어야
        return (
            <TableRow>
                <TableCell>{this.props.page}</TableCell>
                <TableCell>{this.props.title}</TableCell>
                <TableCell>{this.props.verses}</TableCell>
                <TableCell>{this.props.length}</TableCell>
            </TableRow>
        )
    }
}

export default HymnContents;
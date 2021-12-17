import React, { Component } from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

class BoardContents extends Component {
    render() {
        // 두 개 이상의 컴포넌트는 div로 묶어야
        return (
            <TableRow>
                <TableCell>{this.props.num}</TableCell>
                <TableCell>{this.props.title}</TableCell>
                <TableCell>{this.props.writer}</TableCell>
                <TableCell>{this.props.createdAt}</TableCell>
                <TableCell>{this.props.view}</TableCell>
            </TableRow>
        )
    }
}

export default BoardContents;
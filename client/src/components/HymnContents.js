import React, { Component } from "react";
import { Link } from "react-router-dom"
import styled from "styled-components"
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const StyledLink = styled(Link)`
    text-decoration: none;
    box-sizing: border-box;
    display: block;
`

class HymnContents extends Component {
    render() {
        // 두 개 이상의 컴포넌트는 div로 묶어야
        return (
            <TableRow>
                <TableCell>{this.props.page}</TableCell>
                <TableCell><Link
                    to={`/hymnPlay/${this.props.page}`}
                    state={{
                        page: this.props.page,
                        title: this.props.title,
                        verses: this.props.verses,
                        lyric: this.props.lyric,
                        length: this.props.length
                    }}>{this.props.title}</Link></TableCell>
                <TableCell>{this.props.verses}</TableCell>
                <TableCell>{this.props.length}</TableCell>
            </TableRow>
        )
    }
}

export default HymnContents
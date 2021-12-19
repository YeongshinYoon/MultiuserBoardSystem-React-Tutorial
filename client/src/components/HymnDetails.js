import React, { Component } from "react"
import Table from "@material-ui/core/Table"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"

class HymnDetails extends Component {
    render() {
        const mp3_pray = require("../hymns/" + this.props.page + "_기도.mp3")
        const mp3_sing = require("../hymns/" + this.props.page + "_찬송.mp3")

        return (
            <Table>
                <TableRow>
                    <TableCell>장수</TableCell>
                    <TableCell>{this.props.page}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>제목</TableCell>
                    <TableCell>{this.props.title}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>절수</TableCell>
                    <TableCell>{this.props.verses}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>가사</TableCell>
                    <TableCell>{this.props.lyric.split("<br>").map((line) => {
                        return (<>{line}<br /></>)
                    })}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>길이</TableCell>
                    <TableCell>{this.props.length}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>기도 반주</TableCell>
                    <TableCell><AudioPlayer
                        src={mp3_pray}
                        onPlay={e => console.log("onPlay")}
                    /></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>찬송 반주</TableCell>
                    <TableCell><AudioPlayer
                        src={mp3_sing}
                        onPlay={e => console.log("onPlay")}
                    /></TableCell>
                </TableRow>
            </Table>
        )
    }
}

export default HymnDetails;
import React, { Component } from "react"
import Table from "@material-ui/core/Table"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"

class HymnDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedValue: "korean",
            selectedLyric: this.props.lyric_kr
        }
    }

    onItemChange = (e) => {
        this.setState({
            selectedValue: e.target.value
        })

        switch (e.target.value) {
            case "korean":
                this.setState({
                    selectedLyric: this.props.lyric_kr
                })
                break
            case "english":
                this.setState({
                    selectedLyric: this.props.lyric_en
                })
                break
            case "japanese":
                this.setState({
                    selectedLyric: this.props.lyric_jp
                })
                break
            default:
                this.setState({
                    selectedLyric: this.props.lyric_kr
                })
                break
        }
    }

    render() {
        const pray = "http://localhost:3000/api/getHymn/" + this.props.page + "_기도.mp3"
        const sing = "http://localhost:3000/api/getHymn/" + this.props.page + "_찬송.mp3"
        //const pray = require("../hymns/" + this.props.page + "_기도.mp3")
        //const sing = require("../hymns/" + this.props.page + "_찬송.mp3")

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
                    <TableCell>
                        <TableRow>
                            <TableCell>
                                <input
                                    id="lyric_kr"
                                    value="korean"
                                    type="radio"
                                    checked={this.state.selectedValue === "korean"}
                                    onChange={this.onItemChange}
                                />
                                한국어
                            </TableCell>
                            <TableCell>
                                <input
                                    id="lyric_en"
                                    value="english"
                                    type="radio"
                                    checked={this.state.selectedValue === "english"}
                                    onChange={this.onItemChange}
                                />
                                English
                            </TableCell>
                            <TableCell>
                                <input
                                    id="lyric_jp"
                                    value="japanese"
                                    type="radio"
                                    checked={this.state.selectedValue === "japanese"}
                                    onChange={this.onItemChange}
                                />
                                日本語
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan="3">{this.state.selectedLyric.split("<br>").map((line) => {
                                return (<>{line}<br /></>)
                            })}</TableCell>
                        </TableRow>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>길이</TableCell>
                    <TableCell>{this.props.length}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>기도 반주</TableCell>
                    <TableCell><AudioPlayer
                        src={pray}
                        onPlay={e => console.log("onPlay")}
                    /></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>찬송 반주</TableCell>
                    <TableCell><AudioPlayer
                        src={sing}
                        onPlay={e => console.log("onPlay")}
                    /></TableCell>
                </TableRow>
            </Table>
        )
    }
}

export default HymnDetails;
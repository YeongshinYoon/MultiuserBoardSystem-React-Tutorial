import React, { Component } from "react"
import HymnDetails from "../components/HymnDetails"
import { useLocation } from "react-router-dom"
import Axios from "axios"

const divStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}

function HymnPlay() {
    const location = useLocation()
    console.log(location)

    Axios.get("http://34.145.59.160/api/getHymn/" + location.state.page + "_기도.mp3")
    Axios.get("http://34.145.59.160/api/getHymn/" + location.state.page + "_찬송.mp3")

    return (
        // 두 개 이상의 컴포넌트는 div로 묶어야
        <HymnDetails
            page = {location.state.page}
            title = {location.state.title}
            verses = {location.state.verses}
            lyric_kr = {location.state.lyric_kr}
            lyric_en = {location.state.lyric_en}
            lyric_jp = {location.state.lyric_jp}
            length = {location.state.length}
        />
    )
}

export default HymnPlay
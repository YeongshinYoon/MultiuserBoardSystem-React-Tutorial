import React, { useState } from "react"
import axios from "axios"

function AddHymn() {
    const [HymnInput, setHymnInput] = useState({
        page: 0,
        title: "",
        lyric: "",
        verses: 0,
        length: "",
        password: "",
    })

    const onHymnInputChangeHandler = (event) => {
        setHymnInput({
            ...HymnInput,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }
    const onSubmitHandler = (event) => {
        event.preventDefault()

        axios.post("/api/addHymn", {
            page: HymnInput.page,
            title: HymnInput.title,
            lyric: HymnInput.lyric,
            verses: HymnInput.verses,
            length: HymnInput.length,
            password: HymnInput.password,
        })
        .then(res => alert(res.data))
        .catch(err => {
            console.log(err)
            alert("Failed to add.")
        })
    }

    // 두 개 이상의 컴포넌트는 div로 묶어야
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",}}>
            <h2>찬송가 DB 추가</h2>
            <form style={{ display: "flex", flexDirection: "column"}} onSubmit={onSubmitHandler}>
                <label>장수</label>
                <input type="number" name="page" placeholder="ex) 1" value={HymnInput.page} onChange={onHymnInputChangeHandler} />
                <label>제목</label>
                <input type="text" name="title" placeholder="ex) 만복의 근원 하나님" value={HymnInput.title} onChange={onHymnInputChangeHandler} />
                <label>절수</label>
                <input type="number" name="verses" placeholder="ex) 2" value={HymnInput.verses} onChange={onHymnInputChangeHandler} />
                <label>가사</label>
                <input type="text" name="lyric" placeholder="ex) 1. (1절 가사)\n2. (2절 가사)\n아멘" value={HymnInput.lyric} onChange={onHymnInputChangeHandler} />
                <label>길이</label>
                <input type="text" name="length" placeholder="ex) mm분 hh초" value={HymnInput.length} onChange={onHymnInputChangeHandler} />
                <label>관리자 비밀번호</label>
                <input type="password" name="password" value={HymnInput.password} onChange={onHymnInputChangeHandler} />
                <br />
                <button type="submit">제출</button>
            </form>
        </div>
    )
}

export default AddHymn
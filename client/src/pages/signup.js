import React, { useState } from "react"
import { Link } from "react-router-dom"

function SignUp() {
    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")

    const onUsernameChangeHandler = (event) => {
        setUsername(event.currentTarget.value)
    }
    const onPasswordChangeHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    const onSubmitHandler = (event) => {
        event.preventDefault()

        alert("Username : " + Username + ", Password : " + Password)
    }

    // 두 개 이상의 컴포넌트는 div로 묶어야
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%"}}>
            <form style={{ display: "flex", flexDirection: "column"}} onSubmit={onSubmitHandler}>
                <label>Username</label>
                <input type="text" placeholder="" value={Username} onChange={onUsernameChangeHandler} />
                <label>Password</label>
                <input type="password" placeholder="" value={Password} onChange={onPasswordChangeHandler} />
                <br />
                <button type="submit">로그인</button>
                <button><Link to="/signup">회원가입</Link></button>
                <button><Link to="/findaccount">아이디/비밀번호 찾기</Link></button>
            </form>
        </div>
        
    )
}

export default SignUp
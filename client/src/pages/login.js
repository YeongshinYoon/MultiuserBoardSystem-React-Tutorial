import React, { useState } from "react"
import axios from "axios"

function Login() {
    // Input of Username, Password
    const [Account, setAccount] = useState({
        Username: "",
        Password: ""
    })

    // Handler
    //// for Input
    const onAccountChangeHandler = (event) => {
        setAccount({
            ...Account,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }
    ////for Login
    const onSubmitHandler = async (event) => {
        event.preventDefault()

        // for Debugging
        console.log("Username: ", Account.Username, "Password", Account.Password)

        axios.get("/api/users")
        .then(res => console.log(res))
        .catch(err => console.log(err))

        axios.post("/api/loginProc", {
            "Username": Account.Username,
            "Password": Account.Password
        })
        .then(res => console.log(res))
        .catch()
    }

    // for Debugging
    /*useEffect(() => {
        axios.get("/api/users")
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, [])*/

    // 두 개 이상의 컴포넌트는 div로 묶어야
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",}}>
            <h2>로그인</h2>
            <form style={{ display: "flex", flexDirection: "column"}} onSubmit={onSubmitHandler}>
                <label>Username</label>
                <input type="text" name="Username" placeholder="" value={Account.Username} onChange={onAccountChangeHandler} />
                <label>Password</label>
                <input type="password" name="Password" placeholder="" value={Account.Password} onChange={onAccountChangeHandler} />
                <br />
                <button type="submit">로그인</button>
            </form>
        </div>
    )
}

export default Login
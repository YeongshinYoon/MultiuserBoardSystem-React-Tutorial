import React, { useState } from "react"
import axios from "axios"

function SignUp() {
    const [UserInput, setUserInput] = useState({
        Email: "",
        Username: "",
        Password: "",
        ConfirmPassword: "",
        Name: "",
        Birthday: "",
        Gender: "Male"
    })

    const onUserInputChangeHandler = (event) => {
        console.log(event.currentTarget.value)
        setUserInput({
            ...UserInput,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }
    const onSubmitHandler = (event) => {
        event.preventDefault()

        axios.post("/api/signupProc", {
            Email: UserInput.Email,
            Username: UserInput.Username,
            Password: UserInput.Password,
            Name: UserInput.Name,
            Birthday: UserInput.Birthday,
            Gender: UserInput.Gender
        })
        .then(res => console.log(res))
        .catch()
    }

    // 두 개 이상의 컴포넌트는 div로 묶어야
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",}}>
            <h2>회원가입</h2>
            <form style={{ display: "flex", flexDirection: "column"}} onSubmit={onSubmitHandler}>
                <label>Email Address</label>
                <input type="email" name="Email" placeholder="ex) test@example.com" value={UserInput.Email} onChange={onUserInputChangeHandler} />
                <label>Username</label>
                <input type="text" name="Username" placeholder="" value={UserInput.Username} onChange={onUserInputChangeHandler} />
                <label>Password</label>
                <input type="password" name="Password" placeholder="" value={UserInput.Password} onChange={onUserInputChangeHandler} />
                <label>Confirm Password</label>
                <input type="password" name="ConfirmPassword" placeholder="" value={UserInput.ConfirmPassword} onChange={onUserInputChangeHandler} />
                <label>Name</label>
                <input type="text" name="Name" placeholder="" value={UserInput.Name} onChange={onUserInputChangeHandler} />
                <label>Birthday</label>
                <input type="number" name="Birthday" placeholder="ex) 900101" value={UserInput.Birthday} onChange={onUserInputChangeHandler} />
                <label>Gender</label>
                <select name="Gender" value={UserInput.Gender} onChange={onUserInputChangeHandler}>
                    <option value="Male" defaultValue>Male</option>
                    <option value="Female">Female</option>
                </select>
                <br />
                <button type="submit">회원가입</button>
            </form>
        </div>
    )
}

export default SignUp
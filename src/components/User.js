import { render } from "@testing-library/react";
import React from "react";

class User extends React.Component {
    render() {
        return (
            // 두 개 이상의 컴포넌트는 div로 묶어야
            <div>
                <img src={this.props.image} alt="profile" />
                <h2>{this.props.name}({this.props.id})</h2>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

export default User;
import React, { Component } from "react";
import { API } from "../../config";
import Footer from "../../Component/Footer/Footer";
import Nav from "../../Component/Nav/Nav";
import "./SignIn.scss";

class SignIn extends Component {
    constructor() {
        super()

        this.state = {
            id: "",
            pw: "",
        }
    }

    goMain = () => {
        fetch(`${API}/member/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nickname: this.state.id,
                password: this.state.pw,
            })
        })

            .then(response => response.json())
            .then(response => {
                console.log(response);
                if (response.token) {
                    localStorage.setItem('Authorization', response.token);
                    this.props.history.push("/");
                } else {
                    alert("로그인 정보를 확인해주세요.")
                }
            });
    };

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render() {
        console.log(this.state.id)
        console.log(this.state.pw)
        return (
            <div className="SignIn">
                <Nav />
                <div className="SignInBox">
                    <h1>Login</h1>
                    <div className="SignInText">
                        회원으로 가입하시면 10%웰컴쿠폰을 드립니다.<br /><br />
                        가입 없이 구매를 원하시는 경우,<br />
                        상품 페이지의 네이버페이 버튼을 이용하세요 : )
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <th>아이디</th>
                                <td><input type="text" name="id" onChange={this.handleInput} /></td>
                            </tr>
                            <tr>
                                <th>비밀번호</th>
                                <td><input type="password" name="pw" onChange={this.handleInput} /></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="SignInBtn" onClick={this.goMain}><span>로그인</span></div>
                    <div className="SignInEtc">
                        <div className="searchAccount">
                            <sapn className="searchID">아이디찾기</sapn>
                            <sapn>비밀번호찾기</sapn>
                        </div>
                        <div className="LoginSignUp" onClick={() => { this.props.history.push("/signup"); }}>회원가입</div>
                    </div>
                </div>
                <Footer />
            </div>

        );
    }
}

export default SignIn;
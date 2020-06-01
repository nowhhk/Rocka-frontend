import React, { Component } from "react";
import Footer from "../../Component/Footer/Footer";
import Nav from "../../Component/Nav/Nav";
import "./SignIn.scss";

class SignIn extends Component {
    render() {
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
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <th>비밀번호</th>
                                <td><input type="text" /></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="SignInBtn"><span>로그인</span></div>
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
import React, {Component} from "react";
import "./SignUp.scss";

class SignUp extends Component {
    render() {
      return (
        <div className="SignUp">
          <h1>회원가입</h1>
          <div className="SignUpAgree">
            <h3 className="borderBottem">약관동의 및 인증</h3>
            <input type="checkbox" />
            <span className="allAgree">약관에 모두 동의합니다.</span>
          </div>
          <section>
            <div className="termsOfService">
              <div className="termsOfServiceTop">
                <div className="termsOfServiceTitle">
                  <span className="termsOfServiceText">라카 이용약관 동의 (필수)</span>
                  <span className="termsOfServiceDot">•</span>
                </div>
                <div> 
                  <input type="checkbox" />
                   동의함
                </div>
              </div>
              <div className="termsOfServiceScrollBox"></div>
            </div>
            <div className="termsOfService">
              <div className="termsOfServiceTop">
                <div className="termsOfServiceTitle">
                  <span className="termsOfServiceText">라카 개인정보 수집 및 이용 동의 (필수)</span>
                  <span className="termsOfServiceDot">•</span>
                </div>
                <div> 
                  <input type="checkbox" />
                   동의함
                </div>
              </div>
              <div className="termsOfServiceScrollBox"></div>
            </div>
            <div className="termsOfService">
              <div className="termsOfServiceTop">
                <div className="termsOfServiceTitle">
                  <span className="termsOfServiceText">라카 쇼핑정보 수신 동의 (선택)</span>
                  <span className="termsOfServiceDot">•</span>
                </div>
                <div> 
                  <input type="checkbox" />
                   동의함
                </div>
              </div>
              <div className="termsOfServiceScrollBox"></div>
            </div>
          </section>
          <div className="certification">
            <h3>본인 확인</h3>
            <span className="certificationText">본인 명의의 휴대폰으로 본인인증을 진행합니다.</span>
            <div className="certificationBox">휴대폰 인증하기</div>
          </div>
          <article className="loginInfo">
            <h3 className="borderBottem">로그인 정보</h3>
            <table>
              <tbody>
                <tr>
                  <th>아이디<span className="termsOfServiceDot">•</span></th>
                  <td><input type="text" /></td>
                </tr>
                <tr>
                  <th>비밀번호<span className="termsOfServiceDot">•</span></th>
                  <td>
                    <input type="text" />
                    <div class="pwArticle">
                      • 대소문자/숫자/특수문자 중 2가지 이상 조합, 8자~16자
                      • 입력 가능 특수문자 ~ ’ ! @ # $ % ^ ( ) _ - = {`{}`} | ; : {`< > `}, . ? /
                      • 공백 입력 불가능
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>비밀번호 확인<span className="termsOfServiceDot">•</span></th>
                  <td><input type="text" /></td>
                </tr>
              </tbody>
            </table>
          </article>
          <article className="userInfo">
            <h3 className="borderBottem">회원 정보</h3>
            <table>
              <tbody>
                <tr>
                  <th>이름<span className="termsOfServiceDot">•</span></th>
                  <td><input type="text" className="userInfoInputBox" /></td>
                </tr>
                <tr>
                  <th>이메일<span className="termsOfServiceDot">•</span></th>
                  <td><input type="text" className="userInfoInputBox" /></td>
                </tr>
                <tr>
                  <th>연락처<span className="termsOfServiceDot">•</span></th>
                  <td className="userInfoContact">
                    <select name="010">
                      <option vlaue="010">010</option>
                      <option vlaue="011">011</option>
                      <option vlaue="016">016</option>
                      <option vlaue="017">017</option>
                      <option vlaue="018">018</option>
                      <option vlaue="019">019</option>
                    </select>
                    <span>-</span><input type="text" className="userInfoInputBox" /><span>-</span><input type="text" className="userInfoInputBox" />
                  </td>
                </tr>
                <tr>
                  <th>주소</th>
                  <td>
                    <ul>
                      <li className="addressList"><input type="text" className="userInfoInputBox" /><div>우편번호 검색</div></li>
                      <li><input type="text" className="userInfoInputBox" /></li>
                      <li><input type="text" className="userInfoInputBox" /></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>젠더<span className="termsOfServiceDot">•</span></th>
                  <td class="genderBox">
                    <ul>
                      <li><input type="checkbox" checked="checked" />남성</li>
                      <li><input type="checkbox" checked="checked" />여성</li>
                    </ul>
                    <span>• 라카는 브랜드가 나아가고 있는 현재를 더욱 잘 이해하기 위해 회원님들의 젠더 정보를 확인하고 있습니다.</span>
                  </td>
                </tr>
                {/* <tr className="genderChoice">
                  <th>젠더<span class="termsOfServiceDot">•</span></th>
                  <td>
                    <ul>
                      <li><input type="checkbox" /><span>남성</span></li>
                      <li><input type="checkbox" /><span>여성</span></li>
                    </ul>
                    <span>• 라카는 브랜드가 나아가고 있는 현재를 더욱 잘 이해하기 위해 회원님들의 젠더 정보를 확인하고 있습니다.</span>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </article>
          <div className="SignUpBtn">회원가입</div>
        </div>
      );
    }
  }

export default SignUp;
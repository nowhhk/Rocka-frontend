import React, { Component } from "react";
import { API } from "../../config";
// import DaumPostcode from 'react-daum-postcode';
import Nav from "../../Component/Nav/Nav"
import Footer from "../../Component/Footer/Footer"
import "./SignUp.scss";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      pwConform: "",
      name: "",
      email: "",
      contact: "",
      optionVal: "010",
      contactTwo: "",
      contactThree: "",
      contactArr: [],
      idMessage: false,
      pwMessage: false,
      pwGex: false,
      genders: [
        { id: 1, value: "남성", isChecked: false },
        { id: 2, value: "여성", isChecked: false },
      ],
      gender: "",
      address: "",
    }
  }

  goSingIn = () => {
    fetch(`${API}/member/join`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nickname: this.state.id,
        password: this.state.pw,
        email: this.state.email,
        fullname: this.state.name,
        phone_number: this.state.optionVal + this.state.contactTwo + this.state.contactThree,
        gender: this.state.gender,
        address: this.state.address,
      })
    })

      .then(response => {
        console.log(response);
        if (response.status === 200) //headers status
        {
          this.props.history.push("/signin")
        }
      });
  }

  emailInclude = (e) => {
    if (this.state.email.includes('@')) {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }

  pwCorrect = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });

    if (this.state.pw !== e.target.value) {
      this.setState({ pwMessage: true })
    } else {
      this.setState({ pwMessage: false })
    }
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  idInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    if (this.state.id.length > 0) {
      this.setState({
        idMessage: true,
      })
    }
  }

  pwInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    const reg = new RegExp("^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*?<>|~()])(?=.{8,16})");
    const isOk = reg.test(e.target.value);

    console.log(isOk)
    if (isOk === false) {
      this.setState({
        pwGex: true,
      })
    } else {
      this.setState({
        pwGex: false,
      })
    }
  }

  genderCheck = (e) => {
    let genders = this.state.genders
    genders.forEach(gender => {
      if (gender.value === e.target.value) {
        gender.isChecked = e.target.checked
        console.log("check 확인", e.target.value)
      }
    })
    this.setState({
      gender: e.target.id
    })
    console.log(e.target.value)
  }


  handleComplete = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }

        console.log(fullAddress);
      }
    }).open();
  }



  render() {
    console.log(this.state.address)
    console.log(this.state.gender)
    const { idMessage, pwMessage, pwGex } = this.state
    return (
      <div className="SignUp">
        <Nav />
        <div className="signUpContainer">
          <h1>회원가입</h1>
          <div className="SignUpAgree">
            <h3 className="borderBottem">약관동의 및 인증</h3>
            <div className="allAgreeCheckbox">
              <label class="checkbox-label">
                <input type="checkbox" className="checkbox" />
                <span className="checkbox-custom"></span>
              </label>
              <span className="allAgree">약관에 모두 동의합니다.</span>
            </div>
          </div>
          <section>
            <div className="termsOfService">
              <div className="termsOfServiceTop">
                <div className="termsOfServiceTitle">
                  <span className="termsOfServiceText">라카 이용약관 동의 (필수)</span>
                  <span className="termsOfServiceDot">•</span>
                </div>
                <label class="checkbox-label">
                  <input type="checkbox" className="checkbox" />
                  <span className="checkbox-custom"></span>
                   동의함
              </label>
              </div>
              <div className="termsOfServiceScrollBox">
                제1조 (목적)<br />
              이 약관은 ㈜라카코스메틱스(전자거래 사업자)가 운영하는 LAKA 온라인 공식 스토어(이하 "몰"이라 한다)에서 제공하는 인터넷 관련 서비스(이하 "서비스"라 한다)를 이용함에 있어 온라인몰과 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.<br />
              ※ 「PC 통신 등을 이용하는 전자거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다」
              <br />
                <br />
              제2조 (정의)<br />
              ① "몰"이란 라카코스메틱스가 재화 또는 용역을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 또는 용역을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 온라인몰을 운영하는 사업자의 의미로도 사용합니다.<br />
              ② "이용자"란 "몰"에 접속하여 이 약관에 따라 "몰"이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.<br />
              ③ "회원"이라 함은 "몰"에 개인정보를 제공하여 회원등록을 한 자로서, "몰"의 정보를 지속적으로 제공받으며, "몰"이 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.<br />
              ④ "비회원"이라 함은 회원에 가입하지 않고 "몰"이 제공하는 서비스를 이용하는 자를 말합니다.<br />
                <br />
              제3조 (약관등의 명시와 설명 및 개정)<br />
              ① "몰"은 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지 주소(소비자의 불만을 처리할 수 있는 곳의 주소를 포함), 전화번호·모사전송번호·전자우편주소, 사업자등록번호, 통신판매업신고번호, 개인정보 보호책임자등을 이용자가 쉽게 알 수 있도록 "몰"의 초기 서비스화면(전면)에 게시합니다. 다만, 약관의 내용은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.<br />
              ② "몰"은 이용자가 약관에 동의하기에 앞서 약관에 정하여져 있는 내용 중 청약철회·배송책임·환불조건 등과 같은 중요한 내용을 이용자가 이해할 수 있도록 별도의 연결화면 또는 팝업화면 등을 제공하여 이용자의 확인을 구하여야 합니다.<br />
              ③ "몰"은 전자상거래등에서의소비자보호에관한법률, 약관의규제에관한법률, 전자거래기본법, 전자서명법, 정보통신망이용촉진등에관한법률, 방문판매등에관한법률, 소비자보호법 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.<br />
              ④ "몰"이 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 몰의 초기화면에 그 적용일자 7일이전부터 적용일자 전일까지 공지합니다.<br />
              다만, 이용자에게 불리하게 약관내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고 공지합니다. 이 경우 "몰“은 개정 전 내용과 개정 후 내용을 명확하게 비교하여 이용자가 알기 쉽도록 표시합니다.<br />
              ⑤ "몰"이 약관을 개정할 경우에는 그 개정약관은 그 적용일자 이후에 체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는 개정전의 약관조항이 그대로 적용됩니다. 다만 이미 계약을 체결한 이용자가 개정약관 조항의 적용을 받기를 원하는 뜻을 제3항에 의한 개정약관의 공지기간내에 "몰"에 송신하여 "몰"의 동의를 받은 경우에는 개정약관 조항이 적용됩니다.<br />
              ⑥ 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제 등에 관한 법률, 공정거래위원회가 정하는 전자상거래 등에서의 소비자보호지침 및 관계법령 또는 상관례에 따릅니다.
            </div>
            </div>
            <div className="termsOfService">
              <div className="termsOfServiceTop">
                <div className="termsOfServiceTitle">
                  <span className="termsOfServiceText">라카 개인정보 수집 및 이용 동의 (필수)</span>
                  <span className="termsOfServiceDot">•</span>
                </div>
                <label class="checkbox-label">
                  <input type="checkbox" className="checkbox" />
                  <span className="checkbox-custom"></span>
                   동의함
              </label>
              </div>
              <div className="termsOfServiceScrollBox">
                1. 개인정보 수집목적 및 이용목적<br></br>
                <br></br>
              가. 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산<br></br>
              - 콘텐츠 제공, 구매 및 요금 결제, 물품배송 또는 청구지 등 발송, 금융거래 본인 인증 및 금융 서비스<br></br>
                <br></br>
              나. 회원 관리<br></br>
              - 회원제 서비스 이용에 따른 본인확인 , 개인 식별, 불량회원의 부정 이용 방지와 비인가 사용 방지, 가입 의사 확인, 연령확인, 만14세 미만 아동 개인정보 수집 시 법정 대리인 동의여부 확인, 불만처리 등 민원처리, 고지사항 전달
              <br></br>
              2. 수집하는 개인정보 항목<br></br>
              - 이름, 생년월일, 성별, 로그인ID, 비밀번호, 자택 전화번호, 휴대폰 번호, 이메일, 14세 미만 가입자의 경우 법정대리인의 정보<br></br>
                <br></br>
              3. 개인정보의 보유기간 및 이용기간<br></br>
                <br></br>
              원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.
              <br></br>
              가. 회사 내부 방침에 의한 정보 보유 사유<br></br>
              ○ 부정거래 방지 및 쇼핑몰 운영방침에 따른 보관 : 5년
              <br></br>
              나. 관련 법령에 의한 정보보유 사유<br></br>
              ○ 계약 또는 청약철회 등에 관한 기록<br></br>
              - 보존이유 : 전자상거래등에서의소비자보호에관한법률<br></br>
              - 보존기간 : 5년<br></br>
              ○ 대금 결제 및 재화 등의 공급에 관한 기록<br></br>
              - 보존이유: 전자상거래등에서의소비자보호에관한법률<br></br>
              - 보존기간 : 5년<br></br>
              ○ 소비자 불만 또는 분쟁처리에 관한 기록<br></br>
              - 보존이유 : 전자상거래등에서의소비자보호에관한법률<br></br>
              - 보존기간 : 3년<br></br>
              ○ 로그 기록<br></br>
              - 보존이유: 통신비밀보호법<br></br>
              - 보존기간 : 3개월<br></br>
                <br></br>
              ※ 동의를 거부할 수 있으나 거부시 회원 가입이 불가능합니다.
            </div>
            </div>
            <div className="termsOfService">
              <div className="termsOfServiceTop">
                <div className="termsOfServiceTitle">
                  <span className="termsOfServiceText">라카 쇼핑정보 수신 동의 (선택)</span>
                </div>
                <label class="checkbox-label">
                  <input type="checkbox" className="checkbox" />
                  <span className="checkbox-custom"></span>
                   동의함
              </label>
              </div>
              <div className="termsOfServiceScrollBox">
                할인쿠폰 및 혜택, 이벤트, 신상품 소식 등 쇼핑몰에서 제공하는 유익한 쇼핑정보를 SMS나 이메일로 받아보실 수 있습니다.<br />
              단, 주문/거래 정보 및 주요 정책과 관련된 내용은 수신동의 여부와 관계없이 발송됩니다.<br />
              선택 약관에 동의하지 않으셔도 회원가입은 가능하며, 회원가입 후 회원정보수정 페이지에서 언제든지 수신여부를 변경하실 수 있습니다.</div>
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
                  <td>
                    <input type="text" name="id" onChange={this.idInput} />
                    <span class="warningMessage" style={{ display: idMessage ? 'block' : 'none' }}>{this.state.id}는 사용 가능한 아이디입니다.</span>
                  </td>
                </tr>
                <tr>
                  <th>비밀번호<span className="termsOfServiceDot">•</span></th>
                  <td>
                    <input type="password" name="pw" onChange={this.pwInput} />
                    <span className="warningMessage" style={{ display: pwGex ? 'block' : 'none' }}>비밀번호의 조건이 일치하지 않습니다.</span>
                    <div class="pwArticle">
                      • 대소문자/숫자/특수문자 중 2가지 이상 조합, 8자~16자<br></br>
                    • 입력 가능 특수문자 ~ ’ ! @ # $ % ^ ( ) _ - = {`{}`} | ; : {`< > `}, . ? /<br></br>
                    • 공백 입력 불가능
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>비밀번호 확인<span className="termsOfServiceDot">•</span></th>
                  <td>
                    <input type="password" name="pwConform" onChange={this.pwCorrect} />
                    <span className="warningMessage" style={{ display: pwMessage ? 'block' : 'none' }}>비밀번호가 일치하지 않습니다.</span>
                  </td>
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
                  <td><input type="text" className="userInfoInputBox" name="name" onChange={this.handleInput} /></td>
                </tr>
                <tr>
                  <th>이메일<span className="termsOfServiceDot">•</span></th>
                  <td><input type="text" className="userInfoInputBox" name="email" onChange={this.emailInclude} /></td>
                </tr>
                <tr>
                  <th>연락처<span className="termsOfServiceDot">•</span></th>
                  <td className="userInfoContact" onChange={this.phoenNumber}>
                    <select name="010" onChange={this.optionChanged}>
                      <option vlaue="010">010</option>
                      <option vlaue="011">011</option>
                      <option vlaue="016">016</option>
                      <option vlaue="017">017</option>
                      <option vlaue="018">018</option>
                      <option vlaue="019">019</option>
                    </select>
                    <span className="contactLine">-</span><input type="text" className="userInfoInputBox" name="contactTwo" onChange={this.handleInput} /><span className="contactLine">-</span><input type="text" className="userInfoInputBox" name="contactThree" onChange={this.handleInput} />
                  </td>
                  <div class="warningMessage" hide={idMessage} style={{ display: idMessage ? 'block' : 'none' }}>휴대폰 번호를 입력하세요.</div>
                </tr>
                <tr>
                  <th>주소</th>
                  <td>
                    <ul>
                      <li className="addressList"><input type="text" className="userInfoInputBox" name="address" onChange={this.handleInput} /><div onClick={this.handleComplete}>우편번호 검색</div></li>
                      <li><input type="text" className="userInfoInputBox" /></li>
                      <li><input type="text" className="userInfoInputBox" /></li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>젠더<span className="termsOfServiceDot">•</span></th>
                  <td class="genderBox">
                    <ul>
                      {
                        this.state.genders.map((gender) => {
                          return (
                            <li>
                              <label class="checkbox-label">
                                <input type="checkbox" className="checkbox" onChange={this.genderCheck} checked={gender.isChecked} value={gender.value} key={gender.id} {...gender} />
                                <span className="checkbox-custom"></span>
                                {gender.value}
                              </label>
                            </li>)
                        })
                      }
                    </ul>
                    <span className="signUpGender">• 라카는 브랜드가 나아가고 있는 현재를 더욱 잘 이해하기 위해 회원님들의 젠더 정보를 확인하고 있습니다.</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
          <div className="SignUpBtnContainer">
            <div className="SignUpBtn" onClick={this.goSingIn}>회원가입</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SignUp;
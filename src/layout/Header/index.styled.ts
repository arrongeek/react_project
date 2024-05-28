import styled, { css } from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 215px;
  width: 100%;
  height: 70px;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 12%;
  height: 120px;
`;

const SearchKeyword = styled.input`
  background: url('https://dffoxz5he03rp.cloudfront.net/icons/ic_search_20x20_gray_500.svg') no-repeat 5px center;
  width: 20%;
  height: 30px;
  padding-left: 30px;
`;

const LoginButtonGroup = styled.div`
  width: 60%;
  display: flex;
`

const HeaderButton = styled.button`
  width: 20%;
  padding: 10px 12px;
  border: 0px;
`;

const PartnerLoginButton = styled.button`
  width: 18%;
  padding: 10px 12px;
  color: #666D75;
  font-size: 15px;
  font-weight: bolder;
  border: 0px;
`;

const MemberLoginButton = styled.button`
  width: 20%;
  padding: 10px 12px;
  background-color: #2B96ED;
  color: #FFFFFF;
  font-size: 15px;
  font-weight: bolder;
  border: 0px;
  border-radius: 13px;
`
export const HeaderStyle = {
    HeaderContainer,
    LogoImg,
    SearchKeyword,
    LoginButtonGroup,
    HeaderButton,
    PartnerLoginButton,
    MemberLoginButton
};
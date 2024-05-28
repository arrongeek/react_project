import { HeaderStyle as S } from "./index.styled";

const Header = () => {
    return (
        <S.HeaderContainer>
            <S.LogoImg src="https://img.hankyung.com/photo/202401/AKR20240119042300030_01_i_P4.jpg" alt="" />
            <S.SearchKeyword type="text" placeholder={'도시나 상품을 검색해보세요'} />
            <S.LoginButtonGroup>
                <S.HeaderButton></S.HeaderButton>
                <S.PartnerLoginButton>파트너 로그인</S.PartnerLoginButton>
                <S.MemberLoginButton>로그인 및 회원가입</S.MemberLoginButton>
            </S.LoginButtonGroup>
        </S.HeaderContainer>
    )
}

export default Header;
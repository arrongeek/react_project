import { HeaderStyle as S } from "./index.styled";

const Header = () => {
    return (
        <S.HeaderContainer>
            <S.LogoImg src="https://img.hankyung.com/photo/202401/AKR20240119042300030_01_i_P4.jpg" alt="" />
            <div>
                검색창
            </div>
            <div>
                로그인 및 회원가입
            </div>
        </S.HeaderContainer>
    )
}

export default Header;
import { MainStyle as S } from "./index.styled";

const Main = () => {
    const user = {
        name: "김동섭",
        isLogin: false,
    };

    return (
        <S.Container>
            {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}
        </S.Container>
    )
}

export default Main;
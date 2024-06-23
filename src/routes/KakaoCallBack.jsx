import { useEffect } from "react";
import { kakaoCallBack } from "../api/api";

const KakaoCallBack = () => {
  useEffect(() => {
    const fetchData = async () => {
      const params = new URL(document.location.toString()).searchParams;
      const code = params.get("code");
      await kakaoCallBack(code);
    };
    fetchData();
  }
  , []);
  return (
    <div>
      <h1>카카오 로그인 콜백 페이지</h1>
    </div>
  );
};

export default KakaoCallBack;
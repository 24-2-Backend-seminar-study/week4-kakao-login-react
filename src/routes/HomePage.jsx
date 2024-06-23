import { useState } from "react";
import { signIn, signUp } from "../api/api";

const HomePage = () => {
  const [userData, setUserData] = useState({ username: "", password: "" });

  const handleSignUp = (e) => {
    e.preventDefault();
    signUp(userData);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    signIn(userData);
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const { username, password } = userData;

  return (
    <div>
      <h1>Home</h1>
      <h2>백엔드 스터디 4주차: 카카오 로그인</h2>
      <h3>일반 로그인</h3>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleChange}
          name="username"
        />
        <br></br>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          name="password"
        />
        <br></br>
        <br></br>
        <button type="submit" onClick={handleSignUp}>
          Sign Up
        </button>
        <button type="submit" onClick={handleSignIn}>
          Sign In
        </button>
      </form>
      <br></br>
      <h3>카카오 로그인</h3>
      <button>카카오로 로그인하기</button>
      <br></br>
      <br></br>
      <h3>로그인 정보 확인하기</h3>
      <button onClick={() => {window.location.href = '/mypage'}}>MyPage로 이동</button>
    </div>
  );
}

export default HomePage;
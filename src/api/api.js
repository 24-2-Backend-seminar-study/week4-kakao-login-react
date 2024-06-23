import { instance, instanceWithToken } from "./axios";

export const refreshToken = async (token) => {
  const response = await instance.post("/account/refresh/", { refresh: token });
  if (response.status === 200) {
    console.log("token refresh success");
  } else {
    console.error(response.data);
  }
};

export const signIn = async (data) => {
  let response;
  try {
    response = await instance.post("/account/signin/", data);
    if (response.status === 200) {
      window.location.href = "/";
    }
  } catch (error) {
    if (error.response.status === 400) {
      alert("아이디나 비밀번호가 일치하지 않습니다.");
    }
  }
};

export const signUp = async (data) => {
  const response = await instance.post("/account/signup/", data);
  if (response.status === 200) {
    window.location.href = "/";
  }
  return response;
};

export const kakaoSignIn = async () => {
  const response = await instance.get("/account/kakao/signin/");
  window.location.href = response.data;
}

export const kakaoCallBack = async (code) => {
  const response = await instance.get(`/account/kakao/callback/?code=${code}`);
  if (response.status === 200) {
    console.log(response.data);
    window.location.href = "/";
  }
}
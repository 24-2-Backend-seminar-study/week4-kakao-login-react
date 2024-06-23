import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyPage from './routes/MyPage';
import HomePage from './routes/HomePage';
import KakaoCallBack from './routes/KakaoCallBack';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="api/kakao/callback" element={<KakaoCallBack />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

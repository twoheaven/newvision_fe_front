import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Paths from "../../types/paths";
import { auth } from "../firebase/config";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate(Paths.Main);
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-xl mb-4">로그인</h2>
      <input
        className="border w-full p-2 mb-2"
        placeholder="이메일"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border w-full p-2 mb-2"
        placeholder="비밀번호"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 w-full"
        onClick={handleLogin}
      >
        로그인
      </button>
      <p className="mt-4 text-sm">
        계정이 없으신가요?{" "}
        <Link to={Paths.Register} className="text-blue-700 underline">
          회원가입
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;

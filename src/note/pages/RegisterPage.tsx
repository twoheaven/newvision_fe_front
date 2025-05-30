import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Paths from "../../types/paths";
import { auth } from "../firebase/config";

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("회원가입 성공!");
      navigate("/login");
    } catch (err: any) {
      alert(`회원가입 실패: ${err.message}`);
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h1 className="text-xl mb-4">회원가입</h1>
      <input
        type="email"
        placeholder="이메일"
        className="border w-full mb-2 p-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        className="border w-full mb-4 p-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="bg-green-500 text-white px-4 py-2 w-full"
        onClick={handleRegister}
      >
        회원가입
      </button>
      <p className="mt-4 text-sm">
        이미 계정이 있으신가요?{" "}
        <Link to={Paths.Login} className="text-blue-600">
          로그인
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;

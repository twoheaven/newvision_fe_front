// src/components/AuthForm.tsx
import React, { useState } from "react";

import { signIn, signUp } from "../firebase/auth";

interface Props {
  isSignUp: boolean;
}

const AuthForm: React.FC<Props> = ({ isSignUp }) => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const handleSubmit = async () => {
    try {
      if (isSignUp) await signUp(email, pw);
      else await signIn(email, pw);
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="p-4">
      <input
        placeholder="이메일"
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <input
        type="password"
        placeholder="비밀번호"
        onChange={(e) => setPw(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2"
      >
        {isSignUp ? "회원가입" : "로그인"}
      </button>
    </div>
  );
};

export default AuthForm;

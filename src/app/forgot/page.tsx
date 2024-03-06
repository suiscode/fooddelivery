"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Stageone from "./Stageone";
import Stagetwo from "./Stagetwo";
import Stagethree from "./Stagethree";

function Login() {
  const [stage, setStage] = useState(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  return (
    <div>
      {stage === 1 && (
        <Stageone
          setStage={setStage}
          email={email}
          setEmail={setEmail}
          setCode={setCode}
        />
      )}
      {stage === 2 && (
        <Stagetwo setStage={setStage} email={email} code={code} />
      )}
      {stage === 3 && <Stagethree email={email} setStage={setStage} />}
    </div>
  );
}

export default Login;

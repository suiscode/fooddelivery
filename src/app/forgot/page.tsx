"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Stageone from "./Stageone";
import Stagetwo from "./Stagetwo";

function Login() {
  const [stage, setStage] = useState(1);
  const [email, setEmail] = useState("");

  return (
    <div>
      {stage === 1 && <Stageone setStage={setStage} email={email} setEmail={setEmail} />}
      {stage === 2 && <Stagetwo setStage={setStage} email={email} />}
      {stage === 3 && <Stageone setStage={setStage} />}
    </div>
  );
}

export default Login;

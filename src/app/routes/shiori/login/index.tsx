import { Button, Card, TextField } from "@mui/material";
import { css } from "@emotion/react";
import useSWRMutation from "swr/mutation";
import { fetcher } from "../../../core/http.provider";

import "./index.less";
import { useState } from "react";
import api from "../api";

async function sendRequest(url, { arg }) {
  // return fetcher([url, { method: "POST", params: arg, mode: "no-cors" }]);
  return fetcher([url, { method: "POST", params: arg, mode: "cors" }]);
}

const Login = () => {
  const [userName, setUserName] = useState("");
  const [passwd, setPasswd] = useState("");
  // const { data } = api.useLogin({});

  // const { trigger, isMutating } = useSWRMutation("https://shiori.0x64.ml/api/login", sendRequest /* options */);
  const { trigger, isMutating } = useSWRMutation("/shiori/api/login", sendRequest /* options */);

  const onChange = (e, type) => {
    const { value } = e.target;
    if (type === "userName") {
      setUserName(value);
    }

    if (type === "passwd") {
      setPasswd(value);
    }
  };

  const onLogin = async () => {
    try {
      const params = {
        username: userName,
        password: passwd,
        remember: false,
        // owner: true,
      };
      const result = await trigger(params /* options */);
      console.log("result", result, passwd);
    } catch (e) {
      // 错误处理
      console.log("e", e, passwd);
    }
    console.log("xx", userName, passwd);
  };

  return (
    <>
      <div className="login">
        {/* <Card> */}
        {isMutating || "false"}
        asdasd
        <TextField id="standard-basic" label="username" variant="outlined" onChange={e => onChange(e, "userName")} />
        <TextField id="standard-basic2" label="passwd" variant="standard" onChange={e => onChange(e, "passwd")} />
        <Button variant="contained" onClick={onLogin}>
          Login
        </Button>
        {/* </Card> */}
      </div>
    </>
  );
};

export default Login;

// function useSWRMutation(arg0: string, sendRequest: any): { trigger: any; isMutating: any } {
//   throw new Error("Function not implemented.");
// }
// You have tried to stringify object returned from `css` function.
//  It isn't supposed to be used directly (e.g. as value of the `className` prop),
//  but rather handed to emotion so it can handle it (e.g. as value of `css` prop).

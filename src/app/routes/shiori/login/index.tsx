import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { MdCard, MdTextField, MdCheckbox, MdButton } from "@components/index";

import api from "../api";
import { useAuth } from "../shared/auth.store";
import N from "./nodes";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const { trigger, isMutating } = api.useLogin();
  const setAuth = useAuth(state => state.setAuth);
  const navigate = useNavigate();

  const onChange = (value, type) => {
    if (type === "username") {
      setUsername(value);
    }

    if (type === "password") {
      setPassword(value);
    }

    if (type === "remember") {
      setRemember(value);
    }
  };

  const onLogin = async () => {
    if (!username || !password) {
      return;
    }
    try {
      const params = {
        username,
        password,
        remember_me: remember,
      };
      // TODO: use query to replace swr
      const res = await trigger(params);
      console.log("res", res);
      return;
      res.expires = new Date(res.expires);
      setAuth(res);
      navigate("../home");
    } catch (e) {
      console.log("e", e);
    }
  };

  // return (
  //   <>
  //     <div onClick={addABear}>add</div>
  //   </>
  // );

  return (
    <>
      <N.Login>
        <MdCard variant="elevated" style={{ width: "200px" }}>
          <N.Card>
            <h3
              css={css`
                margin: 0;
              `}
            >
              栞 shiori
            </h3>
            <h4
              css={css`
                margin: 0;
              `}
            >
              simple bookmark manager
            </h4>
            <MdTextField label="用户名" variant="outlined" onChange={value => onChange(value, "username")} />
            <MdTextField label="密码" variant="outlined" type="password" toggle-password onChange={value => onChange(value, "password")} />
            <N.Bottom>
              <MdButton onClick={onLogin} style={{ display: "flex" }}>
                登录
              </MdButton>
              <MdCheckbox onChange={value => onChange(value, "remember")}>记住密码</MdCheckbox>
            </N.Bottom>
          </N.Card>
        </MdCard>
      </N.Login>
    </>
  );
};

export default Login;

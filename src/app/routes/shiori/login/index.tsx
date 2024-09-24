import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { MdCard, MdTextField, MdCheckbox, MdButton, snackbar } from "@components/index";

import { api } from "@api/shiori";
import { useAuth } from "../shared/auth.store";
import N from "./nodes";
import { useMutation } from "@tanstack/react-query";
import { errorHandler } from "@core/http/index";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const { mutateAsync } = useMutation({
    mutationFn: api.login,
  });
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
      snackbar({ message: "请输入用户名或密码" });
      return;
    }
    try {
      const params = {
        username,
        password,
        remember_me: remember,
      };
      const res = await mutateAsync(params);
      res.expires = new Date(res.expires);
      setAuth(res);
      snackbar({ message: "登录成功" });
      navigate("../home");
    } catch (error) {
      const message = errorHandler(error);
      snackbar({ message });
    }
  };

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

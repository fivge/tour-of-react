import { useEffect, useState } from "react";
import { Button, Card, CardActions, CardContent, CardHeader, Checkbox, FormControlLabel, Input, TextField } from "@mui/material";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

import api from "../api";
import { useAuth } from "../shared/store";
import "./index.less";

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
        remember,
        // owner: true,
      };
      const res = await trigger(params);
      console.log("res", res);
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
      <div className="login">
        <Card>
          <CardHeader title="栞 shiori" subheader="simple bookmark manager" />
          <CardContent>
            <div className="fields">
              <TextField label="用户名" variant="standard" onChange={e => onChange(e.target.value, "username")} />
              <TextField label="密码" variant="standard" type="password" onChange={e => onChange(e.target.value, "password")} />
            </div>
          </CardContent>
          <CardActions>
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="记住密码"
              checked={remember}
              onChange={e => onChange((e.target as any).checked, "remember")}
            />
            <Button variant="contained" size="small" onClick={onLogin}>
              登录
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default Login;

import Button from "@mui/material/Button";
import { of, map } from "rxjs";

import Product from "./components/product";
import api from "./api";

const MyApp = () => {
  const { data, error, isLoading } = api.useProduct();

  const onClick = () => {
    of(1, 2, 3)
      .pipe(map(x => x * x))
      .subscribe(v => console.log(`value: ${v}`));

    // Logs:
    // value: 1
    // value: 4
    // value: 9
  };

  const renderStatus = () => {
    if (error) {
      console.log("error", error);
      return "failed to load";
    }

    if (isLoading) return "loading...";

    return "success";
  };

  return (
    <div>
      <Button variant="contained" onClick={onClick}>
        RxJS
      </Button>
      <div>--- http ---</div>
      <div>hello {data?.title || "-"}!</div>
      <Product />
      <div>status: {renderStatus()}</div>
    </div>
  );
};

MyApp.displayName = "xxx";

export default MyApp;

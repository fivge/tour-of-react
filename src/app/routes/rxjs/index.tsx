import Button from "@mui/material/Button";
import { of, map } from "rxjs";

const MyApp = () => {
  const onClick = () => {
    of(1, 2, 3)
      .pipe(map(x => x * x))
      .subscribe(v => console.log(`value: ${v}`));

    // Logs:
    // value: 1
    // value: 4
    // value: 9
  };

  return (
    <div>
      <Button variant="contained" onClick={onClick}>
        RxJS
      </Button>
    </div>
  );
};

export default MyApp;

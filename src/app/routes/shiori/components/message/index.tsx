import { Alert, Slide, Snackbar } from "@mui/material";
import { useState } from "react";
import { forwardRef, useImperativeHandle } from "react";

interface Config {
  level: "success" | "info" | "warning" | "error";
  message: string;
}

const Message = (props, ref) => {
  const [open, setOpen] = useState(false);
  const [config, setConfig] = useState<Config>({ level: "success", message: "" });

  useImperativeHandle(
    ref,
    () => ({
      open(config: Config) {
        setConfig(config);
        setOpen(true);
      },
    }),
    []
  );

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      {open && (
        <Snackbar
          open={open}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          TransitionComponent={p => <Slide {...p} direction="right" />}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity={config.level} sx={{ width: "100%" }}>
            {config.message}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default forwardRef(Message);

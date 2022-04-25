import { InputAdornment, IconButton } from "@mui/material/";
import { Visibility, VisibilityOff } from "@mui/icons-material/";

import { useState } from "react";
import { InputContainer } from "../Input/style";
export default function Input({ label, inputType }) {
  interface State {
    email: string;
    password: string;
    showPassword: boolean;
  }

  const [values, setValues] = useState<State>({
    email: "",
    password: "",
    showPassword: inputType === "text" && true,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <InputContainer
      type={values.showPassword ? "text" : "password"}
      value={values.password}
      onChange={handleChange("password")}
      endAdornment={
        inputType === "password" && (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        )
      }
      placeholder={label}
    />
  );
}

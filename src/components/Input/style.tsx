import { OutlinedInput } from "@mui/material";
import styled from "styled-components";
export const InputContainer = styled(OutlinedInput)`
  width: 465px;
  height: 55px;
  &.MuiOutlinedInput-root.Mui-focused fieldset {
    border-color: rgba(0, 0, 0, 0.6);
  }
`;

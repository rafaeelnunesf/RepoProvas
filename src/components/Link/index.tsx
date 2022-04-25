import { StyledLink } from "./style";
import { useNavigate, useLocation } from "react-router-dom";
export default function Link({ children }) {
  let navigate = useNavigate();
  let location = useLocation().pathname;
  let link: string;
  if (location === "/sign-up") link = "/";
  if (location === "/") link = "/sign-up";
  return <StyledLink onClick={() => navigate(link)}>{children}</StyledLink>;
}

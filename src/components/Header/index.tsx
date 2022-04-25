import LogoutIcon from "@mui/icons-material/Logout";
import logo from "../../assets/logo.svg";
import { useNavigate, useLocation } from "react-router-dom";
// import Box from "@mui/material/Box";
import styled from "styled-components";
import { SearchBar } from "../index";
export default function Header() {
  let navigate = useNavigate();
  let location = useLocation().pathname;
  let show = true;
  if (location === "/" || location === "/sign-up") show = false;

  return (
    <Container>
      <Nav show={show}>
        <img src={logo} alt="logo" onClick={() => navigate("/")} />
        {show && <LogoutIcon />}
      </Nav>
      {show && <SearchBar />}
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  svg,
  img {
    cursor: pointer;
  }
`;
interface NavProps {
  show: boolean;
}
const Nav = styled.nav<NavProps>`
  width: 100vw;
  display: flex;
  justify-content: ${({ show }) => (show ? "space-between" : "center")};

  padding: 37px 33px 0 83px;
`;

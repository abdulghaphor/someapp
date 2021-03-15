import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 100%;
  height: 70px;
  background-color: pink;
  color: black;
`;
const StyledNavLink = styled(NavLink)`
  font-size: 20pt;
  margin-right: 20px;
`;

const Navigation = ({ routes }) => {
  return (
    <StyledDiv>
      {routes.map((cv) => (
        <StyledNavLink to={cv.path}>{cv.name}</StyledNavLink>
      ))}
    </StyledDiv>
  );
};
export default Navigation;

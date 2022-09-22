import {Link} from "react-router-dom"
import styled from "styled-components";

export const StyledLink = styled(Link)`
  padding: ${p=>p.theme.space[3]}px;
  color: ${p=>p.theme.colors.text};
  font-size: ${p=>p.theme.fontSizes.m};
  text-decoration: none;
  &:hover {
    color: orange;
    background: ${p=>p.theme.colors.accent};
  }
`;

export const BackLink = styled(Link)`
  padding: ${p=>p.theme.space[3]}px;
  color: ${p=>p.theme.colors.text};
  font-size: ${p=>p.theme.fontSizes.m};
  background: ${p=>p.theme.colors.accent};
  border-radius: ${p=>p.theme.radii.normal};
  text-decoration: none;
  &:hover {
    color: orange;
  }
`;

export const StyledInfoLink = styled(Link)`
  padding: ${p=>p.theme.space[3]}px;
  color: ${p=>p.theme.colors.text};
  font-size: ${p=>p.theme.fontSizes.m};
  text-decoration: none;
  &:hover {
    color: orange;
  }
`;


import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavItem = styled(NavLink)`
    color: ${p=>p.theme.colors.text};
    text-decoration: none;
    font-size: ${p=>p.theme.fontSizes.l};

    &.active {
        color: ${p=>p.theme.colors.accent};
    };
    :hover,
    :focus-visible {
        text-decoration: underline;
    };
`


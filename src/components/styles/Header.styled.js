import styled from "styled-components";

export const StyledHeader = styled.header`
    /* background-color: ${(props) => props.bg}; */
    background-color: ${({ theme }) => theme.colors.header};
    padding: 40px 0;
`;

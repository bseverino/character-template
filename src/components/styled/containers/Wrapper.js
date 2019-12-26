import styled from 'styled-components';

export const Wrapper = styled.div`
    background: ${({ theme: { colors } }) => colors.primary.light};
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
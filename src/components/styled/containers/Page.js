import styled from 'styled-components';

export const Page = styled.div`
    background: #fff;
    color: ${({ theme: { colors } }) => colors.primary.main};
    overflow-y: scroll;
    height: 470px;
    max-height: 470px;
    border-radius: 5px;
    padding: 20px;
`;
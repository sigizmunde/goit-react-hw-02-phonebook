import styled from 'styled-components';

export const ListItem = styled.li`
  font-size: 14px;
  > span:not(:last-of-type) {
    margin-right: var(--min-gap);
  }
`;

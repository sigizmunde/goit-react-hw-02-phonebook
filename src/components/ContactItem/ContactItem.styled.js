import styled from 'styled-components';

export const ListItem = styled.li`
  font-size: 12px;
  > span:not(:last-of-type) {
    margin-right: var(--min-gap);
  }
`;

import { Form as FormikForm } from 'formik';
import styled from 'styled-components';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: var(--min-gap);
  padding: var(--mid-gap);
  border: var(--border-1);
  > label > input {
    width: 100%;
  }
`;

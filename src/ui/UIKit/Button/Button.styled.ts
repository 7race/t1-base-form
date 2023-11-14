import styled from 'styled-components';
import { baseTheme } from '../../../styles/theme/theme';

export const Button = styled.button`
  height: 56px;
  max-width: 172px;
  width: 100%;
  padding: 16px;
  font-size: 16px;

  font-weight: 400;
  color: ${baseTheme.colors.white};

  border: none;
  border-radius: 8px;
  cursor: pointer;

  background: ${baseTheme.colors.purple};

  &:disabled {
    background: ${({ theme }) => theme.colors.grey[1]};
    pointer-events: none;
  }
`;

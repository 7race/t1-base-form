import styled from 'styled-components';

export const InputWrapper = styled.div<{ $error?: boolean }>`
  display: inline-flex;
  position: relative;
  max-width: 564px;
  width: 100%;

  .errorIcon {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translate(0, -50%);
  }

  .input {
    width: 100%;
    padding: 16px;

    border: 1px solid;
    border-radius: 8px;
    border-color: ${({ $error, theme }) =>
      $error ? theme.colors.red : theme.colors.grey[1]};
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.grey[0]};
      font-size: 16px;
    }

    &:focus {
      border: 2px solid ${({ theme }) => theme.colors.purple};
    }
  }
`;

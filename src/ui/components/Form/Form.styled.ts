import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;

  width: 564px;
  padding: 20px;

  border: 1px solid;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grey[0]};

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .inputBlock {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .inputSubtitle {
    font-size: 12px;
    font-weight: 600;

    color: ${({ theme }) => theme.colors.grey[2]};
  }

  .errorMessage {
    position: absolute;
    bottom: -20px;

    font-size: 12px;
    color: ${({ theme }) => theme.colors.red};
  }

  .btn {
    max-width: 100%;
  }
`;

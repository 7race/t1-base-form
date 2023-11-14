import { useState } from 'react';
import { InputErrorIcon } from './icons/InputErrorIcon';
import * as S from './Input.styled';

import type { ComponentPropsWithoutRef, FC } from 'react';

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  error?: boolean;
}

export const Input: FC<InputProps> = ({ error, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (): void => {
    setIsFocused(true);
  };

  const handleBlur = (): void => {
    setIsFocused(false);
  };

  return (
    <S.InputWrapper $error={error}>
      <input
        className="input"
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />

      {error && isFocused && <InputErrorIcon className="errorIcon" />}
    </S.InputWrapper>
  );
};

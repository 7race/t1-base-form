import { useState } from 'react';
import { Input } from '../../UIKit/Input/Input';
import { Button } from '../../UIKit/Button/Button';
import { mockAuthRequest } from '../../../api/mockAuthRequest';
import * as S from './Form.styled';
import type { ChangeEvent, FC } from 'react';

export const Form: FC = () => {
  enum InputFields {
    email = 'email',
    password = 'password',
  }

  const [formData, setFormData] = useState({
    [InputFields.email]: '',
    [InputFields.password]: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    [InputFields.email]: {
      required: false,
      emailFormat: false,
    },
    [InputFields.password]: {
      required: false,
    },
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    if (name === InputFields.email) {
      setFormData((prev) => ({ ...prev, [InputFields.email]: value }));
    } else if (name === InputFields.password) {
      setFormData((prev) => ({ ...prev, [InputFields.password]: value }));
    }

    setValidationErrors({ ...validationErrors, [name]: '' });
  };

  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name } = e.target;

    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // from emailregex.com

    const emailErrors = {
      required: !formData[InputFields.email].length,
      emailFormat: !emailRegex.test(formData[InputFields.email]),
    };

    const passwordErrors = {
      required: !formData[InputFields.password].length,
    };

    switch (name) {
      case InputFields.email:
        setValidationErrors((prev) => ({
          ...prev,
          [InputFields.email]: {
            required: emailErrors.required,
            emailFormat: emailErrors.emailFormat,
          },
        }));
        break;

      case InputFields.password:
        setValidationErrors((prev) => ({
          ...prev,
          [InputFields.password]: {
            required: passwordErrors.required,
          },
        }));
        break;
    }

    const isValid = !(
      emailErrors.required ||
      emailErrors.emailFormat ||
      passwordErrors.required
    );

    if (isValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isFormValid) {
      try {
        const response = await mockAuthRequest('/login', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 200) {
          const data = await response.json();

          alert(JSON.stringify(data, null, 2));
        }
      } catch (error) {
        console.error('error', error);
      }
    }
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <div className="inputBlock">
        <p className="inputSubtitle">Email</p>
        <Input
          value={formData.email}
          onChange={handleInputChange}
          onBlur={validateForm}
          name={InputFields.email}
          error={
            validationErrors[InputFields.email].required ||
            validationErrors[InputFields.email].emailFormat
          }
        />
        {validationErrors[InputFields.email].required && (
          <div className="errorMessage">This field is required</div>
        )}
        {!validationErrors[InputFields.email].required &&
          validationErrors[InputFields.email].emailFormat && (
            <div className="errorMessage">Email format is invalid</div>
          )}
      </div>

      <div className="inputBlock">
        <p className="inputSubtitle">Password</p>
        <Input
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          name={InputFields.password}
          onBlur={validateForm}
          error={validationErrors[InputFields.password].required}
          autoComplete="on"
        />
        {validationErrors[InputFields.password].required && (
          <div className="errorMessage">This field is required</div>
        )}
      </div>

      <Button disabled={!isFormValid} className="btn">
        Submit
      </Button>
    </S.Form>
  );
};

import React, { useEffect, useState } from 'react';

interface ValidationResult {
  isValid: boolean;
  error?: string;
}

type ValidationFunction = (value: string | undefined) => ValidationResult;

interface UseValidationResult {
  validateEmail: ValidationFunction;
  validatePassword: ValidationFunction;
  validateName: ValidationFunction;
  focused: boolean;
  onFocus: () => void;
  onBlur: () => void;
}

export const useValidation = (): UseValidationResult => {
  const [focused, setFocused] = useState(false);

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const validateEmail: ValidationFunction = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value?.trim()) {
      return { isValid: false, error: 'Email is required' };
    }

    if (!emailRegex.test(value)) {
      return { isValid: false, error: 'Invalid email format' };
    }

    return { isValid: true };
  };

  const validatePassword: ValidationFunction = (value) => {
    if (!value?.trim()) {
      return { isValid: false, error: 'Password is required' };
    }

    if (value.length < 5) {
      return { isValid: false, error: 'Password must be at least 5 characters long' };
    }

    return { isValid: true };
  };

  const validateName: ValidationFunction = (value) => {
    if (!value?.trim()) {
      return { isValid: false, error: 'Name is required' };
    }

    if (value.length < 3 || value.length > 18) {
      return { isValid: false, error: 'Name must be between 3 and 18 characters long' };
    }

    return { isValid: true };
  };

  return {
    validateEmail,
    validatePassword,
    validateName,
    focused,
    onFocus,
    onBlur,
  };
};

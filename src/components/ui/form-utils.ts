import { useFormContext } from 'react-hook-form';
import * as React from 'react';
import { FormFieldContext, FormItemContext } from './form-context';
import type { FormItemContextValue, FormFieldContextValue } from './form-context';

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext) as FormFieldContextValue;
  const itemContext = React.useContext(FormItemContext) as FormItemContextValue;
  const { getFieldState, formState } = useFormContext();

  const name = fieldContext.name;
  const id = itemContext.id;
  const fieldState = getFieldState(name, formState);

  if (!name) {
    throw new Error('useFormField should be used within <FormField>');
  }

  return {
    id,
    name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

export { useFormField };

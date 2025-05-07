import { EFormFieldType } from './enums';

type TFormFieldValue = string | boolean;

interface IPropsFormField<T> {
    type: EFormFieldType;
    text: string;
    name?: string;
    value?: T;
    isActiveState?: boolean;
    maxlength?: number;
    rows?: number;
    onChange: (value: T) => void;
}

interface IPropsFormFieldCheckBoxField extends IPropsFormField<boolean> {
    className: string;
    type: EFormFieldType.CheckBoxField;
    onChange: (value: boolean) => void;
}

interface IPropsFormFieldInputDifferentTextField extends IPropsFormField<string> {
    className: string;
    type: EFormFieldType.InputDifferentTextField;
    onChange: (value: string) => void;
}

interface IPropsFormFieldInputField extends IPropsFormField<string> {
    className: string;
    type: EFormFieldType.InputField;
    onChange: (value: string) => void;
}

interface IPropsFormFieldTextAreaField extends IPropsFormField<string> {
    className: string;
    type: EFormFieldType.TextAreaField;
    onChange: (value: string) => void;
}

export {
    TFormFieldValue,
    EFormFieldType,
    IPropsFormField,
    IPropsFormFieldCheckBoxField,
    IPropsFormFieldInputDifferentTextField,
    IPropsFormFieldInputField,
    IPropsFormFieldTextAreaField,
};

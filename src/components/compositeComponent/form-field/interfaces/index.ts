import { EFormFieldType } from './enums';

type TFormFieldValue = string;

interface IPropsFormField<T> {
    type: EFormFieldType;
    text: string;
    name?: string;
    value?: T;
    onChange: (value: T) => void;
}

interface IPropsFormFieldInputField extends IPropsFormField<string> {
    className: string;
    type: EFormFieldType.InputField;
    onChange: (value: string) => void;
}

export {
    TFormFieldValue,
    EFormFieldType,
    IPropsFormField,
    IPropsFormFieldInputField,
};

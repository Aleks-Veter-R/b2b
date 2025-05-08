import { EFormFieldType } from './enums';
import { TDropDownValue, IPropsDropDownItem } from '../../../components/dropdown/interfaces';

type TFormFieldValue = string | boolean | IPropsDropDownItem<TDropDownValue>;

interface IPropsFormField<T> {
    type: EFormFieldType;
    text: string;
    name?: string;
    value?: T;
    isActiveState?: boolean;
    maxlength?: number;
    rows?: number;
    itemList?: IPropsDropDownItem<TDropDownValue>[];
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

interface IPropsFormFieldDropDownField extends IPropsFormField<IPropsDropDownItem<TDropDownValue>> {
    className: string;
    type: EFormFieldType.DropDownField;
    value: IPropsDropDownItem<TDropDownValue> | null,
    onChange: (value: IPropsDropDownItem<TDropDownValue>) => void;
}

export {
    TFormFieldValue,
    EFormFieldType,
    IPropsFormField,
    IPropsFormFieldCheckBoxField,
    IPropsFormFieldInputDifferentTextField,
    IPropsFormFieldInputField,
    IPropsFormFieldTextAreaField,
    IPropsFormFieldDropDownField,
};

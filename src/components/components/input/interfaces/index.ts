import { EInputType } from './enums';

type TInputValue = string | boolean;

interface IPropsInput<T> {
    type: EInputType;
    name?: string;
    value?: T;
    checked?: boolean;
    onChange: (value: T) => void;
}

interface IPropsInputText extends IPropsInput<string> {
    className: string;
    type: EInputType.Text;
    onChange: (value: string) => void;
}

interface IPropsInputDifferentText extends IPropsInput<string> {
    className: string;
    type: EInputType.DifferentText;
    onChange: (value: string) => void;
}

interface IPropsInputCheckBox extends IPropsInput<boolean> {
    className: string;
    type: EInputType.CheckBox;
    onChange: (value: boolean) => void;
}

export {
    TInputValue,
    EInputType,
    IPropsInput,
    IPropsInputCheckBox,
    IPropsInputDifferentText,
    IPropsInputText,
};

import { EInputType } from './enums';

type TInputValue = string;

interface IPropsInput<T> {
    type: EInputType;
    name?: string;
    value?: string;
    onChange: (value: T) => void;
}

interface IPropsInputText extends IPropsInput<TInputValue> {
    className: string;
    type: EInputType.Text;
    onChange: (value: string) => void;
}

export {
    TInputValue,
    EInputType,
    IPropsInput,
    IPropsInputText,
};

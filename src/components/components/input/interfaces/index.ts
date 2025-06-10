import { EInputType } from './enums';

type TInputValue = string | boolean;
type TImageType = '.png' | '.jpg' | '.jpeg';

interface IPropsInput<T> {
    type: EInputType;
    name?: string;
    value?: T;
    checked?: boolean;
    imageType?: TImageType[];
    imageSizeMb?: number;
    placeholder?: string;
    onChange: (value: T) => void;
}

interface IPropsInputCheckBox extends IPropsInput<boolean> {
    className: string;
    type: EInputType.CheckBox;
    onChange: (value: boolean) => void;
}

interface IPropsInputDifferentText extends IPropsInput<string> {
    className: string;
    type: EInputType.DifferentText;
    onChange: (value: string) => void;
}

interface IPropsInputFileImage extends IPropsInput<File | null> {
    className: string;
    type: EInputType.InputFileImage;
    onChange: (value: File | null) => void;
}

interface IPropsInputText extends IPropsInput<string> {
    className: string;
    type: EInputType.Text;
    onChange: (value: string) => void;
}

export {
    EInputType,
    TImageType,
    TInputValue,
    IPropsInput,
    IPropsInputCheckBox,
    IPropsInputDifferentText,
    IPropsInputFileImage,
    IPropsInputText,
};

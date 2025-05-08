import { ETextAreaType } from './enums';

interface IPropsTextArea {
    type: ETextAreaType;
    maxLength?: number;
    name?: string;
    rows?: number;
    value?: string;
    onChange: (value: string) => void;
}

interface IPropsTextAreaBase extends IPropsTextArea {
    className: string;
    type: ETextAreaType.Base;
}

export {
    ETextAreaType,
    IPropsTextArea,
    IPropsTextAreaBase,
};

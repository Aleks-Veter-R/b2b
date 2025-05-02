import { ETextType } from './enums';

interface IPropsText {
    type: ETextType;
    text: string;
    isDisabled?: true;
}

export {
    ETextType,
    IPropsText,
};

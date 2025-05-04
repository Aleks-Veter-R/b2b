import { EButtonType } from './enums';

interface IPropsButton {
    type: EButtonType;
    title: string;
    isInactive?: boolean;
    onClick: () => void;
}

interface IPropsButtonActionButton extends IPropsButton {
    className: string;
    type: EButtonType.ActionButton;
}

interface IPropsButtonDefault extends IPropsButton {
    className: string;
    type: EButtonType.Default;
}

export {
    EButtonType,
    IPropsButton,
    IPropsButtonActionButton,
    IPropsButtonDefault,
};

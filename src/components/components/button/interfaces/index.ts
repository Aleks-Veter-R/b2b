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

interface IPropsButtonActionButtonGray extends IPropsButton {
    className: string;
    type: EButtonType.ActionButtonGray;
}

interface IPropsButtonDefault extends IPropsButton {
    className: string;
    type: EButtonType.Default;
}

export {
    EButtonType,
    IPropsButton,
    IPropsButtonActionButton,
    IPropsButtonActionButtonGray,
    IPropsButtonDefault,
};

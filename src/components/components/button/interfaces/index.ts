import { EButtonType, EButtonIconSizeType } from './enums';
import { EIconType } from '../../icon';
import { ETextType } from '../../text';

interface IPropsButton {
    type: EButtonType;
    title: string;
    isInactive?: boolean;
    iconType?: EIconType;
    iconSize?: EButtonIconSizeType;
    linkTextType?: ETextType;
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

interface IPropsButtonIconButton extends IPropsButton {
    className: string;
    type: EButtonType.IconButton;
}

interface IPropsButtonLinkButton extends IPropsButton {
    className: string;
    type: EButtonType.LinkButton;
}

interface IPropsButtonDefault extends IPropsButton {
    className: string;
    type: EButtonType.Default;
}

export {
    EButtonType,
    EButtonIconSizeType,
    IPropsButton,
    IPropsButtonActionButton,
    IPropsButtonActionButtonGray,
    IPropsButtonIconButton,
    IPropsButtonLinkButton,
    IPropsButtonDefault,
};

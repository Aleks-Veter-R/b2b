import { EButtonType } from './enums';

interface IPropsButton {
    type: EButtonType;
    title: string;
    onClick: () => void;
}

interface IPropsButtonDefault extends IPropsButton {
    className: string;
    type: EButtonType.Default;
}

export {
    EButtonType,
    IPropsButton,
    IPropsButtonDefault,
};

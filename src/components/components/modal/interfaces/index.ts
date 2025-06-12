import { EModalType, EModalModeType } from './enums';

interface IPropsModal {
    type: EModalType;
    mode: EModalModeType;
    toggleModal: (mode: EModalModeType) => void;
    children?: React.ReactNode,
};

interface IPropsModalBlackModal extends IPropsModal {
    className: string;
    type: EModalType.BlackModal;
}

export {
    EModalType,
    EModalModeType,
    IPropsModal,
    IPropsModalBlackModal,
};

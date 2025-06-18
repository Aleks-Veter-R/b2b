import { EFooterType } from './enums';

interface IPropsFooter {
    type: EFooterType;
}

interface IPropsFooterFull extends IPropsFooter {
    className: string;
    type: EFooterType.Full;
}

interface IPropsFooterMini extends IPropsFooter {
    className: string;
    type: EFooterType.Mini;
}

export {
    EFooterType,
    IPropsFooter,
    IPropsFooterFull,
    IPropsFooterMini,
};

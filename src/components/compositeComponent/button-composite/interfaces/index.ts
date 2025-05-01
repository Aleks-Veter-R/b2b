import { EButtonCompositeType } from './enums';

type TPropsButtonComposite =
    | IPropsButtonCompositeTwoButtonField
    | IPropsButtonCompositeDefault;

// TODO Поправить интерфейс компоненты под реализацию
// Сейчас реализации нет
interface IPropsButtonCompositeDefault {
    type: EButtonCompositeType.Default;
    className: string;
    title: string;
    buttonTitle: string;
    onClick: () => void;
}

interface IPropsButtonCompositeTwoButtonField {
    type: EButtonCompositeType.TwoButtonField;
    className: string;
    title: string;
    firstTitle: string;
    secondTitle: string;
    onClickFirst: () => void;
    onClickSecond: () => void;
}

export {
    TPropsButtonComposite,
    EButtonCompositeType,
    IPropsButtonCompositeTwoButtonField,
    IPropsButtonCompositeDefault,
};

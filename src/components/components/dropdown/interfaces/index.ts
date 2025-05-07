import { EDropDownType } from './enums';

type TDropDownValue = string;

interface IPropsDropDownItem<T> {
    title: string;
    value: T
}

interface IPropsDropDown<T> {
    type: EDropDownType;
    value: IPropsDropDownItem<T> | null;
    itemList: IPropsDropDownItem<T>[];
    name?: string;
    onChange: (value: IPropsDropDownItem<T>) => void;
}

interface IPropsDropDownBase extends IPropsDropDown<string> {
    className: string;
    type: EDropDownType.Base;
}

export {
    EDropDownType,
    TDropDownValue,
    IPropsDropDownItem,
    IPropsDropDown,
    IPropsDropDownBase,
};

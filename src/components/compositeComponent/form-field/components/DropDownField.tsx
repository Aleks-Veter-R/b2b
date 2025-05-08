import { FunctionComponent } from 'react';
import { IPropsFormFieldDropDownField } from '../interfaces';
import DropDown, { EDropDownType, TDropDownValue, IPropsDropDown, IPropsDropDownItem } from '../../../components/dropdown';
import Text, { ETextType } from '../../../components/text';
import '../styles/index.scss';

const DropDownField: FunctionComponent<IPropsFormFieldDropDownField> = (props) => {
    let attributesDropDown:
        Omit<IPropsDropDown<TDropDownValue>, 'type' | 'value' | 'itemList' | 'onChange'> = {};

    if (props.name !== undefined) attributesDropDown.name = props.name;

    return (
        <div className={props.className}>
            <Text type={ETextType.Medium} text={props.text} />
            <div className='field'>
                <DropDown
                    type={EDropDownType.Base}
                    value={props.value}
                    itemList={props.itemList ? props.itemList : []}
                    {...attributesDropDown}
                    onChange={props.onChange}
                />
            </div>
        </div>
    );
};

export type { IPropsDropDownItem }
export default DropDownField;

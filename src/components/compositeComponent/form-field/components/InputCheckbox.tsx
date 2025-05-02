import { FunctionComponent } from 'react';
import { IPropsFormFieldCheckBoxField } from '../interfaces';
import Input, { EInputType, IPropsInputCheckBox } from '../../../components/input';
import Text, { ETextType } from '../../../components/text';
import '../styles/index.scss';

const CheckBoxField: FunctionComponent<IPropsFormFieldCheckBoxField> = (props) => {
    let attributesInput: Omit<IPropsInputCheckBox, 'className' | 'type' | 'value' | 'onChange'> = {};

    if (props.name !== undefined) attributesInput.name = props.name;
    if (props.value !== undefined) attributesInput.checked = props.value;

    return (
        <div className={props.className}>
            <Text type={ETextType.Medium} text={props.text} />
            <div />
            <Input
                type={EInputType.CheckBox}
                {...attributesInput}
                onChange={props.onChange}
            />
        </div>
    );
};

export default CheckBoxField;

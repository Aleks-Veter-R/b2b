import { FunctionComponent } from 'react';
import { IPropsFormFieldInputField } from '../interfaces';
import Input, { EInputType } from '../../../components/input';
import Text, { ETextType } from '../../../components/text';
import '../styles/index.scss';

const InputField: FunctionComponent<IPropsFormFieldInputField> = (props) => {
    let attributesInput: Omit<IPropsFormFieldInputField, 'className' | 'type' | 'onChange' | 'text'> = {};

    if (props.name !== undefined) attributesInput.name = props.name;
    if (props.value !== undefined) attributesInput.value = props.value;

    return (
        <div className={props.className}>
            <Text type={ETextType.Medium} text={props.text} />
            <div className='field'>
                <Input
                    type={EInputType.Text}
                    {...attributesInput}
                    onChange={props.onChange}
                />
            </div>
        </div>
    );
};

export default InputField;

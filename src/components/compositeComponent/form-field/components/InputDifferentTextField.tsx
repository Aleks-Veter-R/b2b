import { FunctionComponent } from 'react';
import { IPropsFormFieldInputDifferentTextField } from '../interfaces';
import Input, { EInputType, IPropsInputDifferentText } from '../../../components/input';
import Text, { ETextType, IPropsText } from '../../../components/text';
import '../styles/index.scss';

const InputDifferentTextField: FunctionComponent<IPropsFormFieldInputDifferentTextField> = (props) => {
    const disabledFlag: Omit<IPropsText, 'type' | 'text'> = {};

    if (!props.isActiveState) disabledFlag.isDisabled = true;

    let attributesInput:
        Omit<IPropsInputDifferentText, 'className' | 'type' | 'checked' | 'onChange'> = {};

    if (props.name !== undefined) attributesInput.name = props.name;
    if (props.value !== undefined) attributesInput.value = props.value;

    return (
        <div className={props.className}>
            <Text
                type={ETextType.Medium}
                text={props.text}
                {...disabledFlag}
            />
            <div className='field'>
                <Input
                    type={EInputType.DifferentText}
                    {...attributesInput}
                    onChange={props.onChange}
                />
            </div>
        </div>
    );
};

export default InputDifferentTextField;

import { FunctionComponent } from 'react';
import { IPropsInputCheckBox, EInputType } from '../interfaces';
import '../styles/index.scss';

const InputCheckBox: FunctionComponent<IPropsInputCheckBox> = (props) => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(event.target.checked);
    }

    let attributes: Omit<IPropsInputCheckBox, 'className' | 'type' | 'onChange' | 'value'> = {};

    if (props.name !== undefined) attributes.name = props.name;
    if (props.checked !== undefined) attributes.checked = props.checked;

    return (
        <input
            className={props.className}
            type={EInputType.CheckBox.toLowerCase()}
            {...attributes}
            onChange={onChange}
        />
    );
};

export default InputCheckBox;

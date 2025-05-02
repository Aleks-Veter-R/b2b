import { FunctionComponent } from 'react';
import { IPropsButtonCompositeTwoButtonWithStateField } from '../interfaces';
import Button, { EButtonType } from '../../../components/button';
import Text, { ETextType, IPropsText } from '../../../components/text';
import '../styles/index.scss';

const TwoButtonFieldWithState: FunctionComponent<IPropsButtonCompositeTwoButtonWithStateField> = (props) => {
    const disabledFlag: Omit<IPropsText, 'type' | 'text'> = {};

    if (!props.isActiveState) disabledFlag.isDisabled = true;

    return (
        <div className={props.className}>
            <Text
                type={ETextType.Medium}
                text={props.title}
                {...disabledFlag}
            />
            <div className='field'>
                <Button
                    type={EButtonType.Default}
                    title={props.firstTitle}
                    onClick={props.onClickFirst}
                />
                <Button
                    type={EButtonType.Default}
                    title={props.secondTitle}
                    onClick={props.onClickSecond}
                />
            </div>
        </div>
    );
};

export default TwoButtonFieldWithState;

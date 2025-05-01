import { FunctionComponent } from 'react';
import { IPropsButtonCompositeTwoButtonField } from '../interfaces';
import Button, { EButtonType } from '../../../components/button';
import Text, { ETextType } from '../../../components/text';
import '../styles/index.scss';

const TwoButtonField: FunctionComponent<IPropsButtonCompositeTwoButtonField> = (props) => {
    return (
        <div className={props.className}>
            <Text type={ETextType.Medium} text={props.title} />
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

export default TwoButtonField;

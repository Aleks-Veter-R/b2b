import { FunctionComponent } from 'react';
import { EButtonType, IPropsButton } from './interfaces';
import ButtonDefault from './components/ButtonDefault';
import './styles/index.scss';

const componentStyleName = 'component-button';

const Button: FunctionComponent<IPropsButton> = (props) => {
    switch (props.type) {
        case EButtonType.Default:
            return (
                <ButtonDefault
                    type={EButtonType.Default}
                    className={`${componentStyleName}-${props.type}`}
                    title={props.title}
                    onClick={props.onClick}
                />
            );
        default:
            return null;
    };
};

export default Button;

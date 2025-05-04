import { FunctionComponent } from 'react';
import { EButtonType, IPropsButton } from './interfaces';
import ButtonActionButton from './components/ButtonActionButton'
import ButtonDefault from './components/ButtonDefault';
import './styles/index.scss';

const componentStyleName = 'component-button';

const Button: FunctionComponent<IPropsButton> = (props) => {
    let styleName = `${componentStyleName}-${props.type}`;

    if (props.isInactive) styleName += ' isInactive';

    switch (props.type) {
        case EButtonType.ActionButton:
            return (
                <ButtonActionButton
                    {...props}
                    type={EButtonType.ActionButton}
                    className={styleName}
                    title={props.title}
                    onClick={props.onClick}
                />
            );
        case EButtonType.Default:
            return (
                <ButtonDefault
                    {...props}
                    type={EButtonType.Default}
                    className={styleName}
                    title={props.title}
                    onClick={props.onClick}
                />
            );
        default:
            return null;
    };
};

export default Button;

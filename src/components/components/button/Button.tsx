import { FunctionComponent } from 'react';
import { EButtonType, IPropsButton } from './interfaces';
import ButtonActionButton from './components/ButtonActionButton'
import ButtonActionButtonGray from './components/ButtonActionButtonGray';
import ButtonIconButton from './components/ButtonIconButton';
import ButtonLinkButton from './components/ButtonLinkButton';
import ButtonYellowButton from './components/ButtonYellowButton';
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
        case EButtonType.ActionButtonGray:
            return (
                <ButtonActionButtonGray
                    {...props}
                    type={EButtonType.ActionButtonGray}
                    className={styleName}
                    title={props.title}
                    onClick={props.onClick}
                />
            );
        case EButtonType.IconButton:
            let attributesIconButton: Omit<
                IPropsButton,
                'type' | 'title' | 'onClick' | 'isInactive' | 'linkTextType'
            > = {};

            if (props.iconType !== undefined) attributesIconButton.iconType = props.iconType;
            if (props.iconSize !== undefined) attributesIconButton.iconSize = props.iconSize;

            return (
                <ButtonIconButton
                    {...attributesIconButton}
                    type={EButtonType.IconButton}
                    className={styleName}
                    title={props.title}
                    onClick={props.onClick}
                />
            );
        case EButtonType.LinkButton:
            let attributesLinkButton: Omit<
                IPropsButton,
                'type' | 'title' | 'onClick' | 'isInactive' | 'iconType' | 'iconSize'
            > = {};

            if (props.linkTextType !== undefined) attributesLinkButton.linkTextType = props.linkTextType;

            return (
                <ButtonLinkButton
                    {...attributesLinkButton}
                    type={EButtonType.LinkButton}
                    className={styleName}
                    title={props.title}
                    onClick={props.onClick}
                />
            );
        case EButtonType.YellowButton:
            return (
                <ButtonYellowButton
                    {...props}
                    type={EButtonType.YellowButton}
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

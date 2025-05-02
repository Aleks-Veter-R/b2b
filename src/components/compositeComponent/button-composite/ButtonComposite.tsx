import { FunctionComponent } from 'react';
import { EButtonCompositeType, TPropsButtonComposite } from './interfaces';
import TwoButtonField from './components/TwoButtonField';
import TwoButtonFieldWithState from './components/TwoButtonFieldWithState';
import './styles/index.scss';

const componentStyleName = 'composite-component-button-composite';

const ButtonComposite: FunctionComponent<TPropsButtonComposite> = (props) => {
    switch (props.type) {
        case EButtonCompositeType.TwoButtonField:
            return (
                <TwoButtonField
                    className={`${componentStyleName}-${props.type}`}
                    type={EButtonCompositeType.TwoButtonField}
                    title={props.title}
                    firstTitle={props.firstTitle}
                    secondTitle={props.secondTitle}
                    onClickFirst={props.onClickFirst}
                    onClickSecond={props.onClickSecond}
                />
            );
        case EButtonCompositeType.TwoButtonFieldWithState:
            return (
                <TwoButtonFieldWithState
                    className={`${componentStyleName}-${props.type}`}
                    type={EButtonCompositeType.TwoButtonFieldWithState}
                    title={props.title}
                    isActiveState={props.isActiveState}
                    firstTitle={props.firstTitle}
                    secondTitle={props.secondTitle}
                    onClickFirst={props.onClickFirst}
                    onClickSecond={props.onClickSecond}
                />
            );
        case EButtonCompositeType.Default:
        default:
            // TODO Добавить реализацию для типа Default
            return null;
    };
};

export default ButtonComposite;

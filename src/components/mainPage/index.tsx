import BasicThreeColumnLayout from '../BasicThreeColumnLayout';
import Input, { EInputType } from '../components/input';
import Button, { EButtonType } from '../components/button';
import Divider, { EDividerType } from '../components/divider';
import Title, { ETitleType } from '../components/title';
import ButtonComposite, { EButtonCompositeType } from '../compositeComponent/button-composite';
import FormField, { EFormFieldType } from '../compositeComponent/form-field';
import './styles/index.scss';

const componentStyleName = 'page-create-lot-sale';

const MainPage = () => (
    <BasicThreeColumnLayout>
        <div className={componentStyleName}>
            <div>
                <h1>App - Main page</h1>
                <div>
                    Content main page...
                </div>
            </div>
        </div>
    </BasicThreeColumnLayout>
)

export default MainPage;

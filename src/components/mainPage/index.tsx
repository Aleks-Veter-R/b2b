import BasicThreeColumnLayout from '../BasicThreeColumnLayout';
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

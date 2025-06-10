import BasicThreeColumnLayout from '../../BasicThreeColumnLayout';
import Button, { EButtonType, EButtonIconSizeType } from '../../components/button';
import Title, { ETitleType } from '../../components/title';
import CompanyCard from '../../compositeComponent/company-card';
import Input, { EInputType } from '../../components/input';
import { EIconType } from '../../components/icon'; 
import './styles/index.scss';

const componentStyleName = 'page-companies';

const CompaniesPage = () => (
    <BasicThreeColumnLayout>
        <div className={componentStyleName}>
            <div className={`${componentStyleName}-head`}>
                <Title
                    type={ETitleType.HeaderH1}
                    text='Компании' />
                <div>
                    Найдено 10000 компаний
                </div>
            </div>
            <div className={`${componentStyleName}-filter`}>
                <div>
                    <Input
                        type={EInputType.Text}
                        placeholder={'Регион'}
                        onChange={() => null}
                    />
                </div>
                <div>
                    <Input
                        type={EInputType.Text}
                        placeholder={'ИНН компании'}
                        onChange={() => null}
                    />
                </div>
                <div>
                    <Input
                        type={EInputType.Text}
                        placeholder={'Наименование компании'}
                        onChange={() => null}
                    />
                </div>
                <div>
                    <Button
                        type={EButtonType.IconButton}
                        title='Искать'
                        iconType={EIconType.Search}
                        iconSize={EButtonIconSizeType.Square20}
                        onClick={() => null}
                    />
                </div>
            </div>
            <div className={`${componentStyleName}-company-list`}>
                <CompanyCard />
                <CompanyCard />
                <CompanyCard />
                <CompanyCard />
                <CompanyCard />
                <CompanyCard />
                <CompanyCard />
                <CompanyCard />
                <CompanyCard />
            </div>
        </div>
    </BasicThreeColumnLayout>
)

export default CompaniesPage;

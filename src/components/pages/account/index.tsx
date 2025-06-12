import { useState } from 'react';
import BasicThreeColumnLayout from '../../BasicThreeColumnLayout';
import Button, { EButtonType } from '../../components/button';
import Title, { ETitleType } from '../../components/title';

import { default as AboutCompany } from './components/AboutCompany';
import { default as BankDetails } from './components/BankDetails';
import { default as Info } from './components/Info';
import { default as Offer } from './components/Offer';
import { default as Settings } from './components/Settings';
import './styles/index.scss';

const componentStyleName = 'page-account';

const AccountPage = () => {
    const [currentChapter, setCurrentChapter]= useState<string>('Settings');
    let pageChapter = null;

    switch (currentChapter) {
        case 'AboutCompany':
            pageChapter = <AboutCompany />;
            break;
        case 'BankDetails':
            pageChapter = <BankDetails />;
            break;
        case 'Info':
            pageChapter = <Info />;
            break;
        case 'Offer':
            pageChapter = <Offer />;
            break;
        case 'Settings':
            pageChapter = <Settings />;
            break;
        default:
            pageChapter = <AboutCompany />;
            break;
    }

    return (
        <BasicThreeColumnLayout>
            <div className={componentStyleName}>
                <div className={`${componentStyleName}-wrapper`}>
                    <div className={`${componentStyleName}-company-name`}>
                        <Title
                            type={ETitleType.HeaderH4}
                            text='ОАО Магнитогорский металлургический комбинат' />
                    </div>
                    <div className={`${componentStyleName}-account-navigate`}>
                        <Button
                            type={EButtonType.YellowButton}
                            title='Оферта'
                            isInactive={currentChapter === 'Offer'}
                            onClick={() => setCurrentChapter('Offer')}
                        />
                        <Button
                            type={EButtonType.YellowButton}
                            title='Настройки учётной записи'
                            isInactive={currentChapter === 'Settings'}
                            onClick={() => setCurrentChapter('Settings')}
                        />
                        <Button
                            type={EButtonType.YellowButton}
                            title='Банковские реквизиты'
                            isInactive={currentChapter === 'BankDetails'}
                            onClick={() => setCurrentChapter('BankDetails')}
                        />
                        <Button
                            type={EButtonType.YellowButton}
                            title='О компании'
                            isInactive={currentChapter === 'AboutCompany'}
                            onClick={() => setCurrentChapter('AboutCompany')}
                        />
                        <Button
                            type={EButtonType.YellowButton}
                            title='Загружаемая информация'
                            isInactive={currentChapter === 'Info'}
                            onClick={() => setCurrentChapter('Info')}
                        />
                    </div>
                    <div className={`${componentStyleName}-account-chapter chapter-${currentChapter}`}>
                        {pageChapter}
                    </div>
                </div>
            </div>
        </BasicThreeColumnLayout>
    );
}

export default AccountPage;

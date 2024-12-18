import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import './AuthLayout.css';
import { useNavigate } from 'react-router-dom';
import { AuthHeaderForm } from '../../../../features';
import {SwitchComponent} from "../../../../features/user/components/sideToolbar/components/switchComponent";
import {LanguageComponent} from "../../../../features/user/components/sideToolbar/components/languageComponent";
import {useThemeStore} from "../../../../entities";

export const AuthLayout: React.FC<{ children: React.ReactNode, isAuthNavActive: boolean }> = ({ children, isAuthNavActive }) => {
    const { t } = useTranslation(); // Call useTranslation hook
    const navigate = useNavigate();
    const { currentTheme } = useThemeStore();

    return (
        <div className='auth-main-container'>
            <AuthHeaderForm />
            <div className='auth-content-holder'>
                <div className='auth-title-holder'>
                    <span className='auth-title-text' style={{color: currentTheme?.authPages.commonElements.logoColorText}}
                    >MEWEE</span>
                    <span className='auth-sub-title-text'>{t('title-description')}</span>
                </div>
                <div className='auth-content-container'>
                  {
                    isAuthNavActive &&
                    (
                      <div className="buttons-container">
                          <div onClick={() => navigate("/auth/register")} className="button-c">
                              <a>{t('registration')}</a>
                          </div>
                          <div onClick={() => navigate("/auth/login")} className="button-c">
                              <a>{t('login')}</a>
                          </div>
                      </div>
                    )
                  }
                    {children}
                    <div className="language-switch-container">
                        <LanguageComponent />
                        <SwitchComponent />
                    </div>
                </div>
            </div>
        </div>
    );
};
import React from 'react'
import { useTranslation } from 'react-i18next'

const WelcomeText = () => {
    const { t, i18n } = useTranslation()
    return (
        <div>
            <h1>{t('welcome.label')}</h1>
        </div>
    )
}
export default WelcomeText;
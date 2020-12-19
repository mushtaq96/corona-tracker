import React from 'react'
import { useTranslation } from 'react-i18next'

const SelectCountryText = () => {
    const { t, i18n } = useTranslation()
    return (
        <div>
            <h2>{t('selectcountry.label')}</h2>
        </div>
    )
}
export default SelectCountryText;
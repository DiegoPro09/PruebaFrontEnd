import { Switch, Tooltip } from "antd"
import i18next from "i18next"
import { useTranslation } from "react-i18next"

//Componente switch que cambia de idioma de español a ingles y vicebersa
export const CustomSwitch = () =>{
    const { t } = useTranslation('global')

    //Funcion que cambia el idioma trayendo la informacion que proviene de i18next
    const toggleLanguage = (checked:any) => {
        const newLanguage = checked ? 'es' : 'en'
        i18next.changeLanguage(newLanguage)
    }

    return( 
        <Tooltip placement="bottom" title={t('tooltips.lenguage')}>
            <Switch
                checkedChildren="ES"
                unCheckedChildren="EN"
                defaultChecked={i18next.language === 'es'}
                onChange={toggleLanguage}
            />
        </Tooltip>
    )
}
import { useTranslation } from "react-i18next";

//Fields preconfigurados para el uso de los mismos en los componentes de cada boton, se pueden añadir o eliminar la cantidad que se desee
const FormFields = () => {
    const { t } = useTranslation('global')

    const fields = [
        { 
            name: 'name', label: t('input.labels.name-character'), 
            placeholder: t('input.tooltip-places.placeholders.name-character'), 
            tooltip: t('input.tooltip-places.tooltips.name-character') 
        },
        { 
            name: 'description', 
            label: t('input.labels.description-character'), 
            placeholder: t('input.tooltip-places.placeholders.description-character'), 
            tooltip: t('input.tooltip-places.tooltips.description-character') 
        },
        { 
            name: 'image', label: t('input.labels.image-character'), 
            placeholder: t('input.tooltip-places.placeholders.image-character'), 
            tooltip: t('input.tooltip-places.tooltips.image-character') 
        },
    ]

    return fields
}

export default FormFields
import { useTranslation } from "react-i18next";

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
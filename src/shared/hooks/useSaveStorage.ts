import { FormInstance, message } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useSaveStorage = () => {
  const [error, setError] = useState("")
  const [reloadVersion, setReloadVersion] = useState<number>(0)
  const { t } = useTranslation('global')

  const handleCharacterStorage = async (form:FormInstance, handleReset:any, nameStorage:string) => {
    try {
      const data = await form.validateFields()
      const name = nameStorage.replace(/\s/g, '')

      const existingCharacters = JSON.parse(localStorage.getItem(`${name}${t('localstorage._char')}`) || '[]')

      const reader = new FileReader()
      reader.readAsDataURL(data.image)

      reader.onloadend = () => {
        const base64String = reader.result as string

        const updatedCharacters = [
          ...existingCharacters,
          {
            ...data,
            image: base64String,
          },
        ]

        localStorage.setItem(`${name}${t('localstorage._char')}`, JSON.stringify(updatedCharacters))
        message.success(t('messages.success'))

        setReloadVersion((prevVersion) => prevVersion + 1)

        handleReset()
      }
    } catch (error:any) {
      console.error('Error:', error)
      setError(error.message)
    }
  }

  return {
    error,
    reloadVersion,
    setReloadVersion,
    handleCharacterStorage,
  }
}
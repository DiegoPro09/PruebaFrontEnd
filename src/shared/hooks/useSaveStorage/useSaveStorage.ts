import { FormInstance, message } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

//Hook personalizado que guarda los datos dentro del localstorage
export const useSaveStorage = () => {
  const [error, setError] = useState("")
  const [reloadVersion, setReloadVersion] = useState<number>(0)
  const { t } = useTranslation('global')

  const handleCharacterStorage = async (form:FormInstance, handleReset:any, nameStorage:string) => {
    try {
      const data = await form.validateFields() //Recoge los datos del formulario en el que se implementa este hook
      const name = nameStorage.replace(/\s/g, '')//Reemplaza el nombre de la variable donde se guardara el listado de los personajes, eliminando los espacios, ejemplo si el nombre de la serie es 'Rick and Morty' la variable sera 'RickandMorty'

      const existingCharacters = JSON.parse(localStorage.getItem(`${name}${t('localstorage._char')}`) || '[]') //En caso de que ya esistiera la pelicula o serie, trae el listado de personajes cargados

      const reader = new FileReader()
      reader.readAsDataURL(data.image) 

      reader.onloadend = () => { 
        const base64String = reader.result as string //Mediante la funcion de la libreria FileReader transforma el thumbUrl que viene en la imagen del formulario en un string para guardarlo dentro del localstorage

        //En esta variable se guardan los datos de todos los personajes que ya estuvieran cargados con la nueva insercion de datos
        const updatedCharacters = [
          ...existingCharacters,
          {
            ...data,
            image: base64String, //Guarda la conversion a string del thumbUrl 
          },
        ]

        localStorage.setItem(`${name}${t('localstorage._char')}`, JSON.stringify(updatedCharacters)) //Guarda todos los datos ya procesados dentro de una variable dentro del localstorage
        message.success(t('messages.success'))

        setReloadVersion((prevVersion) => prevVersion + 1) //Esta funcion hace que la lista se actualice en tiempo real al insertar un dato

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
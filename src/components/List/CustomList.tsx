import React, { useEffect, useState } from 'react';
import { Avatar, Divider, List} from 'antd';
import { useTranslation } from 'react-i18next';
import { StyleList } from './styles/StyledList';

//Interface DataType en la que se requieren los campos principales del formulario para mostrar los datos del personaje
interface DataType {
    name?: string,
    description?:string,
    image?:any,
}
  
export const CustomList: React.FC<DataType & { reloadVersion: number, nameMedia:string}> = ({ nameMedia, reloadVersion}) => {
    const [data, setData] = useState<DataType[]>([])
    const nameStorage = nameMedia.replace(/\s/g, '') //Se elimina los espacios dentro del nombre de la pelicula o serie para asi guardarlo dentro del localstorage
    const { t } = useTranslation('global')
  
    //Hook que trae los datos del localstorage dependiendo del nombre de la pelicula o serie para luego mostrarlas en la lista
    useEffect(() => {
        // Obtener datos desde el localStorage
        const storedData = localStorage.getItem(nameStorage)
        if (storedData) {
            const parsedData = JSON.parse(storedData)
            setData(parsedData)
        }
    }, [nameStorage, reloadVersion])
  
    return (
        <StyleList id="scrollableDiv" >
            <List
                dataSource={data}
                renderItem={(item) => (
                    <List.Item key={item.name}>
                    <List.Item.Meta //Componente que renderizara la imagen del personaje
                        avatar={<Avatar src={item.image} size={70} shape='square'/>}
                        title={item.name}
                        description={item.description}
                    />
                    </List.Item>
                )}
            />
            {data.length === 0 && <Divider plain>{t('general.no-data')}</Divider>} 
        </StyleList>
    )
}
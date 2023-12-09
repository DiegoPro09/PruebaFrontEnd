import React, { useEffect, useState } from 'react';
import { Avatar, Divider, List} from 'antd';
import { useTranslation } from 'react-i18next';

interface DataType {
    name?: string,
    description?:string,
    image?:any,
    nameMedia:string
}
  
export const CustomList: React.FC<DataType & { reloadVersion: number, setReloadVersion: React.Dispatch<React.SetStateAction<number>> }> = ({ nameMedia, reloadVersion, setReloadVersion }) => {
    const [data, setData] = useState<DataType[]>([])
    const nameStorage = nameMedia.replace(/\s/g, '')
    const { t } = useTranslation('global')
  
    useEffect(() => {
        // Obtener datos desde el localStorage
        const storedData = localStorage.getItem(nameStorage)
        if (storedData) {
            const parsedData = JSON.parse(storedData)
            setData(parsedData)
        }
    }, [nameStorage, reloadVersion])
  
    return (
        <div
            id="scrollableDiv"
            style={{
                height: 400,
                overflow: 'auto',
                padding: '0 16px',
                border: '1px solid rgba(140, 140, 140, 0.35)',
            }}
        >
            <List
                dataSource={data}
                renderItem={(item) => (
                    <List.Item key={item.name}>
                    <List.Item.Meta
                        avatar={<Avatar src={item.image} size={70} shape='square'/>}
                        title={item.name}
                        description={item.description}
                    />
                    </List.Item>
                )}
            />
            {data.length === 0 && <Divider plain>{t('general.no-data')}</Divider>}
        </div>
    )
}
import { PlusOutlined } from '@ant-design/icons';
import { Form, Input, Row, Col, FormInstance, Upload } from 'antd';
import { useTranslation } from 'react-i18next';
import FormValidations from '../../shared/configs/validations';

interface CustomFormProps {
  form: FormInstance
  fields: Array<{ name: string, label: string, placeholder: string, tooltip: string }>
}

export const CustomForm: React.FC<CustomFormProps> = ({ form, fields }: CustomFormProps) => {
  const { t } = useTranslation('global')
  const validations = FormValidations()
  
  const normFile = (e: any) => {
    const file = e.file

    if (file) {
      return file
    }

  }

  return (
    <Form form={form} layout="vertical" autoComplete="on">
      <Row gutter={[10, 10]}>
        {fields.map((field, index) => (
          <Col key={index} span={12}>
            {field.name === 'image' ? (
              <Form.Item name={field.name} label={field.label} valuePropName="file" getValueFromEvent={normFile} rules={validations.image}>
                <Upload listType="picture-card" beforeUpload={()=>false} maxCount={1}>
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>{t('general.upload')}</div>
                  </div>
                </Upload>
              </Form.Item>
            ) : (
              <Form.Item name={field.name} label={field.label} tooltip={field.tooltip} rules={validations[field.name]}>
                <Input placeholder={field.placeholder} />
              </Form.Item>
            )}
          </Col>
        ))}
      </Row>
    </Form>
  )
}
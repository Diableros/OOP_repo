import {
  CopyOutlined,
  DeleteOutlined,
  MehOutlined,
  PlusOutlined,
  ShoppingOutlined,
  TwitterOutlined
} from '@ant-design/icons'
import { Button, Card, Form, Input, Space } from 'antd'
import {
  Airport,
  Baggage,
  Flight,
  Passenger
} from '@/pages/Prototype/models/basic.ts'

const Prototype = () => {
  const [form] = Form.useForm<Airport>()

  const cloneFlight = (addFlight: (value: Flight) => void, flight: number) => {
    const flights: Flight[] = form.getFieldValue('flights')
    addFlight(flights[flight].clone())
  }

  const clonePassenger = (
    addPassenger: (value: Passenger) => void,
    flight: number,
    passenger: number
  ) => {
    const flights: Flight[] = form.getFieldValue('flights')
    addPassenger(flights[flight].passengers[passenger].clone())
  }

  const cloneBaggage = (
    addBaggage: (value: Baggage) => void,
    flight: number,
    passenger: number,
    baggage: number
  ) => {
    const flights: Flight[] = form.getFieldValue('flights')
    addBaggage(flights[flight].passengers[passenger].baggage[baggage].clone())
  }

  const handlerOnValuesChange = (_: unknown, allValuesChanged: Airport) => {
    form.setFieldsValue(new Airport(allValuesChanged))
  }

  return (
    <Form
      initialValues={new Airport()}
      form={form}
      onValuesChange={handlerOnValuesChange}
    >
      <Form.Item name='name'>
        <Input placeholder='Название аэропорта' />
      </Form.Item>
      <Form.List name='flights'>
        {(fields, { add: addFlight, remove: removeFlight }) => (
          <Card title={<TwitterOutlined />}>
            {fields.map(
              ({ key: keyFlight, name: nameFlight, ...restField }) => (
                <Space
                  key={keyFlight}
                  style={{ display: 'flex', marginBottom: 8 }}
                  align='baseline'
                >
                  <Form.Item {...restField} name={[nameFlight, 'name']}>
                    <Input placeholder='Рейс' />
                  </Form.Item>

                  <Card title={<MehOutlined />}>
                    <Form.List name={[nameFlight, 'passengers']}>
                      {(
                        fields,
                        { add: addPassenger, remove: removePassenger }
                      ) => (
                        <>
                          {fields.map(
                            ({
                              key: keyPassenger,
                              name: namePassenger,
                              ...restField
                            }) => (
                              <Space
                                key={keyPassenger}
                                style={{ display: 'flex', marginBottom: 8 }}
                                align='baseline'
                              >
                                <Form.Item
                                  {...restField}
                                  name={[namePassenger, 'name']}
                                >
                                  <Input placeholder='Имя пассажира' />
                                </Form.Item>

                                <Card title={<ShoppingOutlined />}>
                                  <Form.List name={[namePassenger, 'baggage']}>
                                    {(
                                      fields,
                                      { add: addBaggage, remove: removeBaggage }
                                    ) => (
                                      <>
                                        {fields.map(
                                          ({
                                            key: keyBaggage,
                                            name: nameBaggage,
                                            ...restField
                                          }) => (
                                            <Space
                                              key={keyBaggage}
                                              style={{
                                                display: 'flex',
                                                marginBottom: 8
                                              }}
                                              align='baseline'
                                            >
                                              <Form.Item
                                                {...restField}
                                                name={[nameBaggage, 'weight']}
                                              >
                                                <Input placeholder='Вес багажа' />
                                              </Form.Item>
                                              <Form.Item
                                                {...restField}
                                                name={[nameBaggage, 'size']}
                                              >
                                                <Input placeholder='Размер багажа м3' />
                                              </Form.Item>
                                              <CopyOutlined
                                                onClick={() =>
                                                  cloneBaggage(
                                                    addBaggage,
                                                    nameFlight,
                                                    namePassenger,
                                                    nameBaggage
                                                  )
                                                }
                                              />
                                              <DeleteOutlined
                                                onClick={() =>
                                                  removeBaggage(nameBaggage)
                                                }
                                              />
                                            </Space>
                                          )
                                        )}

                                        <Form.Item>
                                          <Button
                                            type='dashed'
                                            onClick={() => addBaggage()}
                                            block
                                            icon={<PlusOutlined />}
                                          >
                                            Добавить багаж
                                          </Button>
                                        </Form.Item>
                                      </>
                                    )}
                                  </Form.List>
                                </Card>

                                <CopyOutlined
                                  onClick={() =>
                                    clonePassenger(
                                      addPassenger,
                                      nameFlight,
                                      namePassenger
                                    )
                                  }
                                />
                                <DeleteOutlined
                                  onClick={() => removePassenger(namePassenger)}
                                />
                              </Space>
                            )
                          )}
                          <Form.Item>
                            <Button
                              type='dashed'
                              onClick={() => addPassenger()}
                              block
                              icon={<PlusOutlined />}
                            >
                              Добавить пассажира
                            </Button>
                          </Form.Item>
                        </>
                      )}
                    </Form.List>
                  </Card>
                  <CopyOutlined
                    onClick={() => cloneFlight(addFlight, nameFlight)}
                  />
                  <DeleteOutlined onClick={() => removeFlight(nameFlight)} />
                </Space>
              )
            )}
            <Form.Item>
              <Button
                type='dashed'
                onClick={() => addFlight()}
                block
                icon={<PlusOutlined />}
              >
                Добавить рейс
              </Button>
            </Form.Item>
          </Card>
        )}
      </Form.List>
    </Form>
  )
}
export default Prototype

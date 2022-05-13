import { Table, Space, Row, Col, Card, Button, Pagination } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import styles from './index.less';
import classNames from 'classnames';

const index = () => {
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const searchLayout = () => {};

  const beforeTableLayout = () => {
    return (
      <>
        <Row>
          <Col xs={24} sm={12}>
            ...
          </Col>
          <Col xs={24} sm={12} className={classNames([styles.tableToolbar])}>
            <Space>
              <Button type="primary">Add</Button>
            </Space>
          </Col>
        </Row>
      </>
    );
  };

  const afterTableLayout = () => {
    return (
      <>
        <Row>
          <Col xs={24} sm={12}>
            ...
          </Col>
          <Col xs={24} sm={12} className={classNames([styles.tableToolbar])}>
            <Space>
              <Pagination />
            </Space>
          </Col>
        </Row>
      </>
    );
  };

  return (
    <div>
      <PageContainer>
        {searchLayout()}
        <Card>
          {beforeTableLayout()}
          <Table dataSource={dataSource} columns={columns} pagination={false} />
          {afterTableLayout()}
        </Card>
      </PageContainer>
    </div>
  );
};

export default index;

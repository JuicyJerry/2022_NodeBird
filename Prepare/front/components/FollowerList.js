import React from "react";
import { List, Card } from "antd";


const FollowerList = ({ header, data }) => {

  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Card title={item.title}>Card content</Card>
        </List.Item>
      )}
    />
  )
}

export default FollowerList;
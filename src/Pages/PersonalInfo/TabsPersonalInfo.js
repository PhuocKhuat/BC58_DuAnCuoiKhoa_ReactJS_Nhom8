import { Tabs } from 'antd'
import TabPane from 'antd/es/tabs/TabPane'
import React from 'react'
import PersonalInfo from './PersonalInfo'

export default function TabsPersonalInfo() {
  return (
    <Tabs defaultActiveKey="1" className='container'>
    <TabPane
      tab={
        <span>
          {/* <Icon type="apple" /> */}
          Tab 1
        </span>
      }
      key="1"
    >
      <PersonalInfo/>   
    </TabPane>
    <TabPane
      tab={
        <span>
          {/* <Icon type="android" /> */}
          Tab 2
        </span>
      }
      key="2"
    >
      Tab 2
    </TabPane>
  </Tabs>
  )
}

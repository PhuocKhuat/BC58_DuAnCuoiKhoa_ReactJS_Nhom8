import { Tabs } from 'antd'
import TabPane from 'antd/es/tabs/TabPane'
import React from 'react'
import PersonalInfo from './PersonalInfo'
import MyCourses from './MyCourses'

export default function TabsPersonalInfo() {
  return (
      <Tabs defaultActiveKey="1" className='container tabsPersonalInfo'>
    <TabPane
      tab={
        <span>
          Personal infomation
        </span>
      }
      key="1"
    >
      <PersonalInfo/>   
    </TabPane>
    <TabPane
      tab={
        <span>
          My courses  
        </span>
      }
      key="2"
    >
      <MyCourses/>
    </TabPane>
  </Tabs>
  )
}

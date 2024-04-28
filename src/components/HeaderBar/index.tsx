import React from 'react'

import { InfoCircleOutlined } from '@ant-design/icons'
import { Layout, Space, Typography } from 'antd'

import styles from './index.module.less'

const { Link } = Typography

const { Header } = Layout

const HeaderBar = () => {
  return (
    <>
      <Header className={styles.header}>
        <div className={styles.logoBar}>
          <Link href="/">
            <img alt="logo" src="/logo192.png" />
            <h1>JPowered by OrionAi SuperAPI</h1>
          </Link>
        </div>
        <Space className={styles.right} size={0}>
          <span className={styles.right}>
            <Link
              className={styles.action}
              href="https://loyal-role-063864.framer.app/"
              target="_blank"
            >
              <InfoCircleOutlined />
            </Link>
          </span>
        </Space>
      </Header>
      <div className={styles.vacancy} />
    </>
  )
}

export default HeaderBar

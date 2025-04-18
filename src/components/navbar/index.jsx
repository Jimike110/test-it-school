import { Flex, Image } from 'antd'
import React from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

const NavBar = () => {
  return (
    <div style={{ fontWeight: 'bold' }}>
        <Flex style={{ padding: '10px 20px'}} justify='space-between' align='center'>
            <Image src=''  />
            <span>
                <Text>Язык сайта: </Text>
                <select style={{ border: 'none' }}>
                    <option defaultChecked value={'ru'}>Русский</option>
                    <option value={'eng'}>Английский</option>
                </select>
            </span>
        </Flex>
    </div>
  )
}

export default NavBar
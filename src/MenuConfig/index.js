import React from 'react';
import { Menu } from 'antd';
import axios from 'axios'
import './index.css'
const {Submenu , Item} = Menu;

class MenuConfig extends React.Component {
  constructor(props){
      super(props);

  }

  render() {
    return ( 
        <Menu  theme="dark" defaultSelectedKeys={['1']} mode="inline">
               {
                   this.props.menu.map( it => {
                      return <Item>
                            <span>{it.itemName}</span>
                        </Item>
                        }
                    )
               }
    </Menu> 
    );
  }
}

export default MenuConfig;
import React from 'react';
import{ Card } from 'antd';
import './Card.css'
import axios from 'axios'
const { Meta } = Card;

class LinkCard extends React.Component {
  constructor(props){
    super(props)
  }
 
  render() {
    return (
      this.props.card.map( it => {
        return (
            <a href={it.src} style={{display : 'inline-block'}}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={it.pic} />}
              >
            <Meta title={it.title} description={it.src} />
            </Card>
           </a>
        )
      })
    
    );
  }
}

export default LinkCard;

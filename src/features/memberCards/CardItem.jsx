import React from 'react';
import { Card, Icon } from 'semantic-ui-react'

const extra = (
    <a>
        <Icon name='user' />
    16 Friends
    </a>
)

const CardItem = ({ image, header, meta, des }) => (
    <Card
        image={image}
        header={header}
        meta={meta}
        description={des}
    />
)

export default CardItem;
import React from 'react';
import { Card, Icon } from 'semantic-ui-react'

const extra = (
    <a>
        <Icon name='user' />
    16 Friends
    </a>
)

const CardItem = ({ image, header, meta, des, toPath, as }) => (
    <Card
        image={image}
        header={header}
        meta={meta}
        description={des}
        to={toPath}
        as={as}
    />
)

export default CardItem;
import React from 'react';
import { Card, Icon } from 'semantic-ui-react'


const CardItem = ({ onClick, image, header, meta, des, toPath, as }) => (
    <Card
        onClick={onClick}
        image={image}
        header={header}
        meta={meta}
        description={des}
        to={toPath}
        as={as}
    />
)

export default CardItem;
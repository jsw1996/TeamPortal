import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const Loader = () => {
    let loader = <LoadingOutlined style={{ fontSize: 50 }} spin />;

    return (
        <div style={{ position: "absolute", top: "50%", width: '30px', left: "0", right: '0', margin: "auto", }}>
            <Spin id="spinner" indicator={loader} />
            <div className="center">Fetching Data</div>
        </div>
    )
}

export default Loader;
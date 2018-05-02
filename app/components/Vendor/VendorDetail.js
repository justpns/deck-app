import React from 'react';
import { Dimensions } from 'react-native';

import {
    Row,
    Image,
    View,
    Subtitle,
    Caption,
    Divider,
    Icon
} from '@shoutem/ui';

import Vendor from './Vendor';

const VendorDetail = (props) => {
    return (
        <Vendor>
            <Row styleName='small' style={{ marginBottom: 1 }}>
                <Image
                    styleName="small-avatar"
                    source={{ uri: props.vendor.img }}
                />
                <Subtitle>{props.vendor.name}</Subtitle>
                <Icon styleName="disclosure" name="right-arrow" />
            </Row>
        </Vendor>
    );
};

export default VendorDetail;
import React from 'react';
import { Dimensions } from 'react-native';

import {
    Row,
    Image,
    View,
    Subtitle,
    Caption,
    Divider,
} from '@shoutem/ui';

import VendorPartner from './VendorPartner';

const VendorPartnerDetail = (props) => {
    return (
        <VendorPartner>
            <Row>
                <Image
                    styleName="small rounded-corners"
                    source={{ uri: props.vendorPartner.toVendorId.img }}
                />
                <View styleName="vertical stretch space-between">
                    <Subtitle>{props.vendorPartner.toVendorId.name}</Subtitle>
                    <Caption>Rate {props.vendorPartner.fromRate} : {props.vendorPartner.toRate}</Caption>
                    <Caption>Max {props.vendorPartner.maximum} : Min {props.vendorPartner.minimum}</Caption>
                </View>
            </Row>
        </VendorPartner>
    );
};

export default VendorPartnerDetail;
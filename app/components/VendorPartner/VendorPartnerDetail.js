import React from 'react';
import { Dimensions } from 'react-native';
import {
  Row,
  Image,
  View,
  Subtitle,
  Caption,
  Divider,
  Icon,
} from '@shoutem/ui';

import VendorPartner from './VendorPartner';

const AIS_BG = 'http://www.ais.co.th/privilege/birthday/images/popup/poppic4.jpg';
const AIR_ASIA = 'https://dexticket.weebly.com/uploads/8/4/0/7/84076736/1514944-958880350796878-2325486274520736736-n_orig.png';
const ESSO_SMILE = 'https://d16a8a62orsrve.cloudfront.net/assets/img/card_tpl/1423810639sMVjA.png';
const THE_ONE = 'https://bookings.co.th/wp-content/uploads/Title-The-1-Card-660x330.jpg';
const PTT = 'https://promotions.co.th/wp-content/uploads/PTT-Blue-Card-Happiness-Dining-MK-Gold.jpg';
const TESCO = 'https://www.tescolotus.com/assets/service/img/landing/obj-04.png';

const VendorPartnerDetail = (props) => {
  switch (props.vendorPartner.toVendorId.vendor) {
    case 'AIS':
      return (
            <VendorPartner>
                <Row>
                    <Image
                        styleName="small rounded-corners"
                        source={{ uri: AIS_BG }}
                    />
                    <View styleName="vertical space-between">
                        <Subtitle>{props.vendorPartner.toVendorId.name}</Subtitle>
                        <Caption>Rate {props.vendorPartner.fromRate} : {props.vendorPartner.toRate}</Caption>
                        {/* <Caption>Max {props.vendorPartner.maximum} : Min {props.vendorPartner.minimum}</Caption> */}
                    </View>
                    <Icon styleName="disclosure" name="right-arrow" />
                </Row>
            </VendorPartner>
      );
    case 'AIR ASIA':
      return (
        <VendorPartner>
            <Row>
                <Image
                        styleName="small rounded-corners"
                        source={{ uri: AIR_ASIA }}
                />
                <View styleName="vertical space-between">
                    <Subtitle>{props.vendorPartner.toVendorId.name}</Subtitle>
                    <Caption>Rate {props.vendorPartner.fromRate} : {props.vendorPartner.toRate}</Caption>
                        {/* <Caption>Max {props.vendorPartner.maximum} : Min {props.vendorPartner.minimum}</Caption> */}
                </View>
                <Icon styleName="disclosure" name="right-arrow" />
            </Row>
        </VendorPartner>
      );
    case 'ESSO':
      return (
        <VendorPartner>
            <Row>
                <Image
                    styleName="small rounded-corners"
                    source={{ uri: ESSO_SMILE }}
                />
                <View styleName="vertical space-between">
                    <Subtitle>{props.vendorPartner.toVendorId.name}</Subtitle>
                    <Caption>Rate {props.vendorPartner.fromRate} : {props.vendorPartner.toRate}</Caption>
                    {/* <Caption>Max {props.vendorPartner.maximum} : Min {props.vendorPartner.minimum}</Caption> */}
                </View>
                <Icon styleName="disclosure" name="right-arrow" />
            </Row>
        </VendorPartner>
      );
    case 'CENTRAL':
      return (
        <VendorPartner>
            <Row>
                <Image
                    styleName="small rounded-corners"
                    source={{ uri: THE_ONE }}
                />
                <View styleName="vertical space-between">
                    <Subtitle>{props.vendorPartner.toVendorId.name}</Subtitle>
                    <Caption>Rate {props.vendorPartner.fromRate} : {props.vendorPartner.toRate}</Caption>
                    {/* <Caption>Max {props.vendorPartner.maximum} : Min {props.vendorPartner.minimum}</Caption> */}
                </View>
                <Icon styleName="disclosure" name="right-arrow" />
            </Row>
        </VendorPartner>
      );
    default:
      return null;
  }

};

export default VendorPartnerDetail;

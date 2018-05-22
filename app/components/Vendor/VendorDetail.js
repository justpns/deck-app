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

import Vendor from './Vendor';

const AIS_BG =
  'http://www.ais.co.th/privilege/birthday/images/popup/poppic4.jpg';
const AIR_ASIA =
  'https://dexticket.weebly.com/uploads/8/4/0/7/84076736/1514944-958880350796878-2325486274520736736-n_orig.png';
const ESSO_SMILE =
  'https://d16a8a62orsrve.cloudfront.net/assets/img/card_tpl/1423810639sMVjA.png';
const THE_ONE =
  'https://bookings.co.th/wp-content/uploads/Title-The-1-Card-660x330.jpg';
const PTT =
  'https://promotions.co.th/wp-content/uploads/PTT-Blue-Card-Happiness-Dining-MK-Gold.jpg';
const TESCO =
  'https://www.tescolotus.com/assets/service/img/landing/obj-04.png';

const VendorDetail = (props) => {
  switch (props.vendor.vendor) {
    case 'AIS':
      return (
        <Vendor>
          <Row styleName="small" style={{ marginBottom: 1 }}>
            <Image
              styleName="small-avatar"
              source={{ uri: AIS_BG }}
            />
            <Subtitle>{props.vendor.name}</Subtitle>
            <Icon styleName="disclosure" name="right-arrow" />
          </Row>
        </Vendor>
      );
    case 'AIR ASIA':
      return (
         <Vendor>
          <Row styleName="small" style={{ marginBottom: 1 }}>
            <Image
              styleName="small-avatar"
              source={{ uri: AIR_ASIA }}
            />
            <Subtitle>{props.vendor.name}</Subtitle>
            <Icon styleName="disclosure" name="right-arrow" />
          </Row>
        </Vendor>
      );
    case 'ESSO':
      return (
        <Vendor>
          <Row styleName="small" style={{ marginBottom: 1 }}>
            <Image
              styleName="small-avatar"
              source={{ uri: ESSO_SMILE }}
            />
            <Subtitle>{props.vendor.name}</Subtitle>
            <Icon styleName="disclosure" name="right-arrow" />
          </Row>
        </Vendor>
      );
    case 'CENTRAL':
      return (
        <Vendor>
          <Row styleName="small" style={{ marginBottom: 1 }}>
            <Image
              styleName="small-avatar"
              source={{ uri: THE_ONE }}
            />
            <Subtitle>{props.vendor.name}</Subtitle>
            <Icon styleName="disclosure" name="right-arrow" />
          </Row>
        </Vendor>
      );
    case 'PTT':
      return (
        <Vendor>
          <Row styleName="small" style={{ marginBottom: 1 }}>
            <Image
              styleName="small-avatar"
              source={{ uri: PTT }}
            />
            <Subtitle>{props.vendor.name}</Subtitle>
            <Icon styleName="disclosure" name="right-arrow" />
          </Row>
        </Vendor>
      );
    case 'TESCO':
      return (
        <Vendor>
          <Row styleName="small" style={{ marginBottom: 1 }}>
            <Image
              styleName="small-avatar"
              source={{ uri: TESCO }}
            />
            <Subtitle>{props.vendor.name}</Subtitle>
            <Icon styleName="disclosure" name="right-arrow" />
          </Row>
        </Vendor>
      );
    default:
      return null;
  }
};

export default VendorDetail;

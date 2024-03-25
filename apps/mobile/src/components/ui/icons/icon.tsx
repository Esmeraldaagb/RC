

import React from 'react';
import { TouchableOpacity, ImageSourcePropType } from 'react-native';
import { IconProps, StyledIcon, StyledImage } from './icon.style'; 

const Icon: React.FC<IconProps> = ({ name, size = 30, onPress }) => {
    const iconSource: ImageSourcePropType = {
      add: require('../../assets/iconpackage/add.png'), 
      delete:require('../../assets/iconpackage/delete.png'), 
      accountcircle:require('../../assets/iconpackage/account_circle.png'), 
      vector:require('../../assets/iconpackage/vector.png'), 
      aiplanemode:require('../../assets/iconpackage/aiplanemode_active.png'), 
      arrowleft:require('../../assets/iconpackage/arrow_left_alt.png'), 
      arrowright:require('../../assets/iconpackage/arrow_right_alt.png'), 
      Boundingbox:require('../../assets/iconpackage/Bounding box.png'), 
      close:require('../../assets/iconpackage/close.png'), 
      deployedcode:require('../../assets/iconpackage/deployed_code_history.png'), 
      directionsboat:require('../../assets/iconpackage/directions_boat.png'), 
      distance:require('../../assets/iconpackage/distance.png'), 
      edit:require('../../assets/iconpackage/edit.png'), 
      expandmore:require('../../assets/iconpackage/expand_more.png'), 
      headphones:require('../../assets/iconpackage/headphones.png'), 
      news:require('../../assets/iconpackage/news.png'), 
      notifications:require('../../assets/iconpackage/notifications.png'), 
      package_2:require('../../assets/iconpackage/package_2.png'), 
      person:require('../../assets/iconpackage/person.png'), 
      search:require('../../assets/iconpackage/search.png'), 
      shoppingmode:require('../../assets/iconpackage/shoppingmode.png'), 
  
  
    }[name];
  
    if (!iconSource) {
      console.error(`Image source not found for icon: ${name}`);
      return null;
    }
  
    return (
      <StyledIcon onPress={onPress}>
        <StyledImage source={iconSource} size={size} />
      </StyledIcon>
    );
  };
export default Icon;


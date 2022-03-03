import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from 'react-native-vector-icons';
import  Colors  from '../constants/Colors';

const CustomHeaderButton = props => {
    return (
    <HeaderButton
        {...props} 
        IconComponents={Ionicons} 
        iconSize={20} 
        color={Platform.OS === 'android' ? '' : Colors.primaryColor} 
    />
    );
};

export default CustomHeaderButton;

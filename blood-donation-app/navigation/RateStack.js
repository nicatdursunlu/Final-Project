import React from 'react';
import { TopNavigationAction } from '@ui-kitten/components';
import {createStackNavigator } from "@react-navigation/stack";

import { RateScreen } from "./../screens";
import { leftIcon } from "../styles/icons"
import { HeaderStyles } from '../styles';

const { Navigator, Screen } = createStackNavigator();

export const RateStack=({navigation})=>{
    return(
        <Navigator>
            <Screen 
            name="Rate the app"
            component={RateScreen}
            options={{
                ...HeaderStyles,
                headerLeft: () =>(
                    <TopNavigationAction 
                    icon={leftIcon}
                    onPress={()=>{navigation.goBack()}}
                    />
                ),
            }}
            />
        </Navigator>
    );
};

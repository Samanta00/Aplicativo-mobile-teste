import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import Home from './pages/home';
import Profile from './pages/profile';
import Search from './pages/search';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}
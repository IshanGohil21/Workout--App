import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch } from 'react-native';
import { useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import  HeaderButton  from '../Components/HeaderButton';
import Colors from "../constants/Colors";
import { setFilters } from "../store/actions/workouts_1";

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
                <Text>{props.label}</Text>
                <Switch
                trackColor={{true: Colors.accentColor}}
                value={props.state} 
                onValueChange={props.onChange} 
            />
        </View>
    );
};

const FiltersScreen = props => {
    const { navigation } = props;

    const [isPush, setIsPush] = useState(false);
    const [isPull, setIsPull] = useState(false);
    const [isLegs, setIsLegs] = useState(false);
    const [isCardio, setIsCardio] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            Push: isPush,
            Pull: isPull,
            Legs: isLegs,
            Cardio: isCardio 
        };

    dispatch(setFilters(appliedFilters));
    }, [isPush, isPull, isLegs, isCardio, dispatch]);

    useEffect(() => {
        navigation.setParams({save: saveFilters });
    }, [saveFilters]);

    return (
        <View style={styles.screen}>
          <Text style={styles.title}> Workout Type </Text>
            <FilterSwitch 
                label='Push' 
                state={isPush} 
                onChange={newValue => setIsPush(newValue)}
        />

            <FilterSwitch 
                label='Pull' 
                state={isPull} 
                onChange={newValue => setIsPull(newValue)}
        />

            <FilterSwitch 
                label='Legs' 
                state={isLegs} 
                onChange={newValue => setIsLegs(newValue)}
        />
            <FilterSwitch 
                label='Cardio' 
                state={isCardio} 
                onChange={newValue => setIsCardio(newValue)}
        />
        </View>
    );
};

FiltersScreen.navigationOptions =  navData  => {
    return {
    headerTitle: 'Filter Workouts',
    headerLeft: () =>
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title = "Menu"
            iconName= "ios-menu"
            onPress = {() => 
                {navData.navigation.toggleDrawer()}}
        />
        </HeaderButtons>
        ,
        headerRight: () => 
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title = "Save"
                iconName= "ios-Save"
                onPress = {navData.navigation.getParam('save')}
            />
            </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center',
        margin: 20
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        padding: 10
    }
});

export default FiltersScreen;
import React from "react";
import { StyleSheet, FlatList } from 'react-native';
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../Components/CategoryGridTile";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import  HeaderButton  from '../Components/HeaderButton';


const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return <CategoryGridTile
        color={itemData.item.color}  
        title={itemData.item.title} 
        onSelect={ () => {
            props.navigation.navigate({
                routeName : 'Workouts', 
                params: {
                    categoryId: itemData.item.id
                } 
            });
        }}
    />;
};

    return (
         <FlatList 
         data={CATEGORIES} renderItem={renderGridItem} 
         numColumns={2} 
        />
    );
};
CategoriesScreen.navigationOptions =  navData  => {
    return {
    headerTitle: 'Workout Categories',
    headerLeft: () =>
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title = "Menu"
            iconName= "ios-menu"
            onPress = {() => 
                {navData.navigation.toggleDrawer()}}
        />
        </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;
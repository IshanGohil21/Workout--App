import React from "react";
import WorkoutList from "../Components/WorkoutList";
import { useSelector } from "react-redux"; 
import { View, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import  HeaderButton  from '../Components/HeaderButton';
import { DefaultText } from '../Components/DefaultText'

const FavoritesScreen = props => {

    const favWorkout = useSelector(state => state.workouts.favoirteWorkouts);

    // if(favWorkout.length === 0 || !favWorkout) {
    //     return ( <View style={Styles.content}>
    //         <DefaultText>No Favorite Workout Found . Start Doing Workout </DefaultText>
    //     </View>
    //     );
    // }

    return <WorkoutList listData={favWorkout} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions =  navData  => {
    return {
    headerTitle: 'Important',
    headerLeft: () =>
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title = "Menu"
            iconName= "ios-menu"
            onPress = {() => 
                {navData.navigation.toggleDrawer();
             }}
        />
        </HeaderButtons>
        
    };
};

const Styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavoritesScreen;
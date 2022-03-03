import React, { useEffect, useCallback } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { HeaderButtons , Item } from 'react-navigation-header-buttons'
import  HeaderButton from '../Components/HeaderButton';
import { useSelector, useDispatch } from "react-redux";
import DefaultText from "../Components/DefaultText";
import { toggleFavorite } from "../store/actions/workouts_1";

const ListItem = props => {
    return <View style={styles.list}>
        <Text>{props.children}</Text>
    </View>

}

const WorkoutDetails = props => {
    const availableWorkouts = useSelector(state => state.workouts.workouts);
    const workoutId = props.navigation.getParam('workoutId');
    const currentWorkoutIsFavorite = useSelector(state => state.workouts.favoirteWorkouts.some(workout => workout.id === workoutId));
    
    const selectedWorkout = availableWorkouts.find(workout => workout.id === workoutId);

    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() =>{
        dispatch(toggleFavorite(workoutId));
    },[dispatch, workoutId]);

    useEffect( () => {
        props.navigation.setParams({toggleFav: toggleFavoriteHandler});
    }, [toggleFavoriteHandler]);

    useEffect( () => {
        props.navigation.setParams({isFav: currentWorkoutIsFavorite });
    }, [currentWorkoutIsFavorite]);

    return (
      <ScrollView>
          <Image source={{uri: selectedWorkout.imageUrl }} style={styles.image}/>
          <View style={styles.details}>
                    <DefaultText>{selectedWorkout.sets} Sets </DefaultText>
                    <DefaultText>{selectedWorkout.reps}, 18, 16</DefaultText>
                    <DefaultText>{selectedWorkout.rest} Sec</DefaultText>
                </View>
                <Text style={styles.title}>Instructions</Text>
                {selectedWorkout.instructions.map(instruction => (
                <ListItem key={instruction}>{instruction}</ListItem>
                ))}

                <Text style={styles.title}>Weights</Text>
                {selectedWorkout.weights.map(weight => (
                    <ListItem key={weight}>{weight}</ListItem>))}
      </ScrollView>
    );
};

WorkoutDetails.navigationOptions = (navigationData) => {
  //  const workoutId =   navigationData.navigation.getParam('workoutId');
    const workoutTitle = navigationData.navigation.getParam('workoutTitle');
   // const selectedWorkout = exercise.find(workout => workout.id === workoutId);
    const toggleFavorite = navigationData.navigation.getParam('toggleFav');
    const isFavorite = navigationData.navigation.getParam('isFav');

    return {
        headerTitle: workoutTitle,
        headerRight: () =>
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
            title= "Favorite"
            iconName={ isFavorite ? 'ios-star': 'ios-star-outline' }
            onPress = {toggleFavorite}
        />
        </HeaderButtons>
    };  
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
       fontFamily: 'open-sans-bold',
       fontSize: 18,
       textAlign: 'center'

    },
    list: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: "#ccc",
        borderWidth: 1,
        padding: 10,
    }
});

export default WorkoutDetails;


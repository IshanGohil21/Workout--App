import React from "react";
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { CATEGORIES } from "../data/dummy-data";
import WorkoutList from "../Components/WorkoutList";
import DefaultText from "../Components/DefaultText";


const ChooseWorkout = props => {

    const catId = props.navigation.getParam('categoryId');

    const availableWorkouts = useSelector(state => state.workouts.filteredWorkouts);

    const displayedExercise = availableWorkouts.filter(
        workout => workout.categoryIds.indexOf(catId) >= 0
        );
    if(displayedExercise.length === 0) {
        return (
            <View style={styles.content}>
            <DefaultText>No Workouts Found, Check your Filters</DefaultText>
            </View>
        )
    }
    
    return <WorkoutList listData={displayedExercise} navigation={props.navigation} />;
};

ChooseWorkout.navigationOptions = navigationData => {
  const catId =  navigationData.navigation.getParam('categoryId');

  const selectedWorkout = CATEGORIES.find(cat => cat.id === catId);

   return {
       headerTitle: selectedWorkout.title,
   };
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ChooseWorkout;
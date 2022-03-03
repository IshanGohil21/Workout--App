import React from "react";
import { View, FlatList, StyleSheet } from 'react-native';
import Workout from "../Components/Workout";
import { useSelector } from "react-redux"; 

const WorkoutList = props => {

    const favoriteWorkouts = useSelector(state => state.workouts.favoirteWorkouts);
    const renderExercise = itemData => {
        const isFavorite = favoriteWorkouts.some(workout => workout.id === itemData.item.id);
        return <Workout 
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        sets={itemData.item.sets} 
        reps={itemData.item.reps}
        rest={itemData.item.rest}
        onSelectWorkout = {() => {
            props.navigation.navigate({
                routeName: 'WorkoutDetails', 
                params: {
                workoutId: itemData.item.id,
                workoutTitle: itemData.item.title,
                isFav: isFavorite
                }
            });
        }} 
     />;
};


    return  <View style={styles.list}>
    <FlatList 
        data={props.listData} 
        renderItem={renderExercise}
        style = {{width: '100%'}}
    />
    </View>;
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default WorkoutList;
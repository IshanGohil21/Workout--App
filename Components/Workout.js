import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';
import DefaultText from './DefaultText';

const Workout = props => {
    return (
    <View style={styles.exerciseItems}> 
        <TouchableOpacity onPress={props.onSelectWorkout}>
            <View>
                <View style={{...styles.workoutRow, ...styles.workoutHeader}}>
                <ImageBackground  
                    source={{uri: props.imageUrl}}  
                    style={styles.bgImage}
                > 
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
                </ImageBackground>
                </View>
                <View style={{...styles.workoutRow, ...styles.workoutDetail}}>
                    <DefaultText>{props.sets} Sets </DefaultText>
                    <DefaultText>{props.reps}, 18, 16</DefaultText>
                    <DefaultText>{props.rest} Sec</DefaultText>
                </View>
            </View>
        </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    exerciseItems: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    workoutRow: {
        flexDirection: 'row'
    },
    workoutHeader: {
        height: '85%',
    },
    workoutDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    titleContainer: {
        paddingVertical: 5,
        paddingHorizontal: 12,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    title: {
        fontFamily: 'open-sans-bold',
        color: 'white',
        fontSize: 22,
        textAlign: 'center'
    }
});

export default Workout;
import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Platform} from 'react-native';
import { ScreenContainer } from "react-native-screens";

const CategoryGridTile = props => {
    return (
        <TouchableOpacity
        style = {styles.gridItem}
        onPress= {props.onSelect}
        >
        <View style={{...styles.Container, ...{backgroundColor: props.color}}}>
            <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
        </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        elevation: 5,
        overflow: 'hidden',
    },
    Container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0 , height: 2 },
        shadowOpacity: 0.26,
        shadowRadius: 10,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'center'
    }
});

export default CategoryGridTile;
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation'; 
import CategoriesScreen from '../Screens/CategoriesScreen';
import ChooseWorkout from '../Screens/ChooseWorkout';
import WorkoutDetails from '../Screens/WorkoutDetails';
import Colors from '../constants/Colors';
import FavoritesScreen from '../Screens/FavoritesScreen';
import FiltersScreen  from '../Screens/FiltersScreen';
import { Ionicons } from '@expo/vector-icons';

const defaultStackNavOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerStyle: {
            fontFamily: 'open-sans-bold'
        },
        headerBackTitleStyle: {
            fontFamily: 'open-sans'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
}

const WorkoutNavigator = createStackNavigator({ 
    Categories : {
        screen: CategoriesScreen,
    },
    Workouts:{
        screen: ChooseWorkout,
    },
    WorkoutDetails: WorkoutDetails
    },
    {
        defaultNavigationOptions: defaultStackNavOptions 
});

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    WorkoutDetails : WorkoutDetails
}, {
    defaultNavigationOptions: defaultStackNavOptions  
    }
);

const tabScreenConfig = { 
    Workouts : {
        screen: WorkoutNavigator,
        navigationOptions: {
        tabBarLabel: 'Home',
            tabBarIcon: (tabInfo) => {
                return (
                <Ionicons 
                name='home' 
                size={25} 
                color={tabInfo.tintColor}
                />
            );
        },
    }
},
Favorites: {
    screen: FavNavigator,
    navigationOptions: {
        tabBarLabel: 'Important',
        tabBarIcon: (tabInfo) => {
            return <Ionicons 
            name='ios-star' 
            size={25} 
            color={tabInfo.tintColor}
                />
             }
        }
    }
}

const FavWorkoutTabNavigator = createBottomTabNavigator(
    tabScreenConfig,
    {
      tabBarOptions : {
          labelStyle: {
            fontFamily: 'open-sans-bold'
        },
        activeTintColor: Colors.accentColor,
       }
    });
const FiltersNavigator = createStackNavigator({
        Filters: FiltersScreen
    } , {
            navigationOptions: {
                drawerLabel : 'Filters'
            },
            defaultNavigationOptions: defaultStackNavOptions  
        });

const MainNavigator = createDrawerNavigator ({
    WorkoutFavs: FavWorkoutTabNavigator,
    Filters: FiltersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: { 
            fontFamily: 'open-sans-bold'
        }
    }
});

export default createAppContainer(MainNavigator);
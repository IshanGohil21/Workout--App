import { exercise } from "../../data/dummy-data";
import { SET_FILTERS, TOGGLE_FAVORITE } from "../actions/workouts_1";

const intitalState = {
    workouts: exercise,
    filteredWorkouts: exercise,
    favoirteWorkouts: []
};

const workoutReducer = (state = intitalState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex  = state.favoirteWorkouts.findIndex(workout => workout.id === action.workoutId);
            if(existingIndex >= 0) {
                const updatedFavWorkouts = [...state.favoirteWorkouts];
                updatedFavWorkouts.splice(existingIndex, 1)
                return { ...state, favoirteWorkouts: updatedFavWorkouts };
            } else {
                const workout = state.workouts.find(workout => workout.id === action.workoutId)
                return { ...state, favoirteWorkouts: state.favoirteWorkouts.concat(workout) };
            }
            case  SET_FILTERS: 
                const appliedFilters = action.filters;
                const updatedfilteredWorkouts = state.workouts.filter(workout => {
                    if(appliedFilters.Push && !workout.isPush){
                        return false;
                    }
                    if(appliedFilters.Pull && !workout.isPull){
                        return false;
                    }
                    if(appliedFilters.Legs && !workout.isLegs){
                        return false;
                    }
                    if(appliedFilters.Cardio && !workout.isCardio){
                        return false;
                    }
                    return true;
                });
                return {...state, filteredWorkouts:updatedfilteredWorkouts};

            default:
                return state;
    }
}

export default workoutReducer;
import {DATA_ACCESS, FILL_DATA} from './actions/types';
import data from '../../data/data.json'

const initialState= {
    data,
    results:[]
};


const dataReducer =(state=initialState,action) =>{
    switch(action.type){
        case DATA_ACCESS:
            return{
            ...state
        }

        default : return state
    }
}
export default dataReducer;
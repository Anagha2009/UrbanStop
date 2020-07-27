import {DATA_ACCESS} from './actions/types';
import data from '../../data/data.json'

const initialState= {data};


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
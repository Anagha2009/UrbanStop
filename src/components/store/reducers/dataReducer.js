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
        case FILL_DATA:
            return{
                    ...state,
                results:[
                    ...state.data.filter(s=>s.scrip===action.data )
                ]    
             }

        default : return state
    }
}
export default dataReducer;
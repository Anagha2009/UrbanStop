import {DATA_ACCESS, FILL_DATA} from './types';

export const getData=()=>{
    return{
        type:DATA_ACCESS
    }
}
export const fillData=(data)=>{
    return {
        type:FILL_DATA,
        data
    }
}

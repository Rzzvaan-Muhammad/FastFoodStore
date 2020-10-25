import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit';
import reducer from "./reducer"
import Logger from './../middleWare/Logger';
import Errors from "../middleWare/errors"
import Api from "../middleWare/api"


export default function (){
    return configureStore({
        reducer,
        middleware:[
            ...getDefaultMiddleware(),
            Logger({destination:"logging"}),
            Errors(),
            Api
        ]    
    });
};
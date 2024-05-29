import { SearchContext } from "./store"
import {useContext} from 'react'
export const useSearch=()=>{
    return useContext(SearchContext)
}
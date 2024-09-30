import { defineStore } from "pinia";
import {ref} from "vue"

export const useConfigStore = defineStore('config', ()=> {
    const apiUrl = ref('')
    const setApiUrl = (val:string)=>{
        apiUrl.value = val
    }
    return {apiUrl, setApiUrl}
}
)
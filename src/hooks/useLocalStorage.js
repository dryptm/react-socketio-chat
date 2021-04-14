import {useEffect,useState} from 'react'


const prefix='chat-clone-'

export default function useLocalStorage(key,initialvalue) {
    const prefixkey=prefix+key
    const [value,setvalue]=useState(()=>{
        const jsonvalue=localStorage.getItem(prefixkey)
        if(jsonvalue != null) return JSON.parse(jsonvalue)
        if(typeof initialvalue === 'function'){
            return initialvalue()
        }
        else
        {
            return initialvalue
        }
    })
    useEffect(()=>{
        localStorage.setItem(prefixkey,JSON.stringify(value))
    },[prefixkey,value])

    return [value,setvalue]

}

import React,{createContext} from 'react'
const AppContext=createContext();
const AppProvider=({children})=> {
    const useData={
        name:"gaurav",
        age:23,
      }
  return (  
    <AppContext.Provider value={useData}>{children}
    </AppContext.Provider>
  )
}

export default {AppContext,AppProvider};
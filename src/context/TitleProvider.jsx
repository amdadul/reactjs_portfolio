import React, { createContext, useEffect, useState } from 'react'

export const TitleContext = createContext();

const TitleProvider = ({children}) => {
  const [title,setTitle] = useState("Amdadul Hoque's Portfolio");

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <TitleContext.Provider value={{title,setTitle}}>
      {children}
    </TitleContext.Provider>
  )
}

export default TitleProvider
import React from 'react'

const SaveContext = React.createContext({
  saveList: [],
  darkMode: false,
  toggleDarkMode: () => {},
  addToSave: () => {},
})

export default SaveContext

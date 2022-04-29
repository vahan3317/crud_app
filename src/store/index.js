import { createStore } from 'vuex'

export default createStore({
  state: {
    notes:[
    
    ]
  },
  getters: {
    getNotes: state => state.notes,
    getNote: state => id => state.notes.find(note => note.id ===id)
  },
  mutations: {
    addingNote:(state,newNote) => state.notes.push(newNote),
    removingNote:(state,id) =>(state.notes = state.notes.filter(note => note.id != id))
  },
  actions: {
    addNote:({commit}, newNote) => commit('addingNote',newNote),
    removeNote:({commit}, id) => commit('removingNote',id)
  },
  modules: {
  }
})

import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      database: [
        { id: 1, columnsProj: [
                              { id: 11, title: 'Нужно сделать', tasks: [
                                                                      {id: 111, title: 'task 11', date: '200'},
                                                                      {id: 112, title: 'task 12', date: '300'}]},
                              { id: 12, title: 'В работе', tasks: [
                                                              {id: 121, title: 'task 21', date: '200'},
                                                              {id: 122, title: 'task 22', date: '300'}]}
                              ], name: 'СТМ Лабс' 
        },
        { id: 2, columnsProj: [
                              { id: 21, title: 'Сделано', tasks: [
                                                                      {id: 211, title: 'task 11', date: '200'},
                                                                      {id: 212, title: 'task 12', date: '300'}]},
                              { id: 22, title: 'Завершено', tasks: [
                                                              {id: 221, title: 'task 21', date: '200'},
                                                              {id: 222, title: 'task 22', date: '300'}]}
                              ], name: 'Орион' 
        }
      ],
      projects: JSON.parse(localStorage.getItem('my-projects')) ?? [],
    }
  },
  getters: {
    getProj(state) {
      return state.projects
    },
    projectById(_, getters) {
      return id => getters.getProj.find( p => p.id == id )
    },
    columns(_, getters) {
      return id => getters.getProj.find( p => p.id == id ).columnsProj
    }
  },
  mutations: {
    loadProjects(state) {
      const jsonConfig = JSON.stringify( state.database );
      localStorage.setItem( 'my-projects', jsonConfig );
    },
    createColumn(state, payload) {
      const columns = state.projects.find( p => p.id == payload.id ).columnsProj
      let idx = null
      if( columns.length === 0 ) { 
        idx = payload.id * 10 + 1
      } else { idx = columns[columns.length-1].id + 1 }
      columns.push({ id: idx, title: payload.titleColumn === '' ? 'Новый столбец' : payload.titleColumn, tasks: [] })
      localStorage.setItem('my-projects', JSON.stringify(state.projects))
    },
    deleteColumn(state, payload) {
      const columns = state.projects.find( p => p.id == payload.id ).columnsProj
      columns.splice(payload.idx, 1)
      localStorage.setItem('my-projects', JSON.stringify(state.projects))
    },
    createTask(state, payload) {
      console.log(payload)
      // let idx = null
      // if( payload.tasks.length === 0 ) {
      //   idx = payload.id * 10 + 1
      // } else { idx = payload.tasks[payload.tasks.length-1].id + 1 }
      // payload.tasks.push({id: idx, title: 'Новая задача', date: '100'})
      // const columns = state.projects.find( p => p.id == payload.id ).columnsProj
      // let idx = null
      // if( columns.length === 0 ) { 
      //   idx = payload.id * 10 + 1
      // } else { idx = columns[columns.length-1].id + 1 }
      // columns.push({ id: idx, title: payload.titleColumn === '' ? 'Новый столбец' : payload.titleColumn, tasks: [] })
      // localStorage.setItem('my-projects', JSON.stringify(state.projects))
    }
  },
  actions: {
    load(context) {
      context.commit('loadProjects')
    },
    addColumn (context, payload) {
      context.commit('createColumn', payload)
    },
    removeColumn(context, payload) {
      context.commit('deleteColumn', payload)
    },
    addTask (context, payload) {
      context.commit('createTask', payload)
    }
  },
  modules: {
  }
})

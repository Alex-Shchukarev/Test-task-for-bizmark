import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      database: [
        { id: 1, columnsProj: [
                              { id: 11, title: 'Нужно сделать', tasks: [
                                                                      {id: 111, title: 'task 11', timer: 1, deadline: '2022-04-29', emploee: 'petrovpp'},
                                                                      {id: 112, title: 'task 12', timer: 2, deadline: '2022-04-28', emploee: 'petrovpp'}]},
                              { id: 12, title: 'В работе', tasks: [
                                                              {id: 121, title: 'task 21', timer: 3, deadline: '2022-04-27', emploee: 'ivanovii'},
                                                              {id: 122, title: 'task 22', timer: 5, deadline: '2022-04-28', emploee: 'petrovpp'}]}
                              ], name: 'СТМ Лабс' 
        },
        { id: 2, columnsProj: [
                              { id: 21, title: 'Сделано', tasks: [
                                                                      {id: 211, title: 'task 11', timer: 10, deadline: '2022-04-29', emploee: 'ivanovii'},
                                                                      {id: 212, title: 'task 12', timer: 11, deadline: '2022-04-30', emploee: 'sidorovss'}]},
                              { id: 22, title: 'Завершено', tasks: [
                                                              {id: 221, title: 'task 21', timer: 5, deadline: '2022-04-28', emploee: 'ivanovii'},
                                                              {id: 222, title: 'task 22', timer: 7, deadline: '2022-04-26', emploee: 'sidorovss'}]}
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
      let idx = null
      if( payload.column.tasks.length === 0 ) {
        idx = payload.column.id * 10 + 1
      } else { idx = payload.column.tasks[payload.column.tasks.length-1].id + 1 }
      payload.column.tasks.push({
        id: idx, 
        title: payload.values.title, 
        timer: payload.values.timer,
        deadline: payload.values.deadline,
        employee: payload.values.fio
      })
      localStorage.setItem('my-projects', JSON.stringify(state.projects))
    },
    deleteTask(state, payload) {
      console.log(payload)
      const idx = payload.columnTasks.indexOf(payload.task)
      payload.columnTasks.splice(idx, 1)
      localStorage.setItem('my-projects', JSON.stringify(state.projects))
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
    async addTask (context, payload) {
      context.commit('createTask', payload)
    },
    removeTask (context, payload) {
      context.commit('deleteTask', payload)
    }
  },
  modules: {
  }
})

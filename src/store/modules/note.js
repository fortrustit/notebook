import * as types from '../types/noteTypes'
import noteService from '@/services/noteService'
import moment from 'moment'
import find from 'lodash/find'
import findIndex from 'lodash/findIndex'
import Vue from 'vue'

// initial state
// shape: [{ id, quantity }]
const state = {
  noteUpdateList: JSON.parse(localStorage.noteUpdateList || '[]'), // 笔记更新信息
  notesList: JSON.parse(localStorage.notesList || '[]'), // 笔记详细信息
  currentNote: {} // 当前笔记
}

// getters
const getters = {
  noteUpdateInfo: state => state.noteUpdateInfo,
  notesList: state => state.notesList,
  currentNote: state => state.currentNote
}

// actions
const actions = {
  // 获取笔记列表
  [types.GET_NOTE_LIST]({ commit, state }) {
    noteService
    .fetchList()
    .then((data) => {
      commit(types.GET_NOTE_LIST_SUCCESS, { data })
    }, () => {
      commit(types.GET_NOTE_LIST_FAILURE, { data: [] })
    })
  },

  // 获取笔记更新列表
  [types.GET_NOTE_UPDATE_LIST]({ commit, state }) {
    noteService
    .fetchUpdateList()
    .then((data) => {
      const needFresh = []
      for (let i = 0; i < state.noteUpdateList.length; i += 1) {
        const info = find(data, {id: state.noteUpdateList[i].id})
        if (info && info.updateTime >= state.noteUpdateList[i].updateTime) {
          break
        } else {
          needFresh.push(
            noteService
            .saveNote(state.notesList[i])
          )
        }
      }
      Promise.all(needFresh).then(results => {
        Vue.prototype.$Message.success('Sync Note success')
        this.dispatch(types.GET_NOTE_LIST)
      }, () => {
        Vue.prototype.$Message.error('Sync Note fail, please do it later')
      })
    })
  },

  // 保存笔记
  [types.SAVE_NOTE]({ commit, state }, noteInfo) {
    noteService
    .saveNote(noteInfo)
    .then((data) => {
      Vue.prototype.$Message.success('Note saved success')
      this.dispatch(types.GET_NOTE_LIST)
    }, () => {
      console.error('save note error!')
    })
  },

  // 新建笔记
  [types.CREATE_NEW_NOTE]({ commit, state }, noteInfo) {
    noteService
    .newNote(noteInfo)
    .then((data) => {
      commit(types.UPDATE_CURRENT_NOTE, { noteInfo: data })
      this.dispatch(types.GET_NOTE_LIST)
    }, () => {
      console.error('new note error!')
    })
  },

  // 删除笔记
  [types.DELETE_NOTE]({ commit, state }, noteId) {
    noteService
    .deleteNote(noteId)
    .then(() => {
      this.dispatch(types.GET_NOTE_LIST)
    }, () => {
      console.error('delete note fail!')
    })
  }
}

// mutations
const mutations = {
  [types.GET_NOTE_LIST_SUCCESS](state, { data }) {
    state.notesList = data
    state.noteUpdateList = data.map(note => ({ id: note.id, updateTime: note.updateTime }))
    localStorage.notesList = JSON.stringify(data)
    localStorage.noteUpdateList = JSON.stringify(state.noteUpdateList)
    if (data.length) {
      state.currentNote = Object.assign({}, data[0])
    }
  },
  [types.GET_NOTE_LIST_FAILURE](state, { data }) {
    state.notesList = []
  },
  [types.UPDATE_CURRENT_NOTE](state, { noteInfo }) {
    state.currentNote = Object.assign(
      state.currentNote,
      noteInfo,
      { updateTime: moment().format('x')}
    )
    const { id, updateTime } = state.currentNote
    const index = findIndex(state.noteUpdateList, { id })
    state.noteUpdateList.splice(index, 1)
    state.noteUpdateList.splice(0, 0, { id, updateTime })
    localStorage.noteUpdateList = JSON.stringify(state.noteUpdateList)
    state.notesList.splice(index, 1)
    state.notesList.splice(0, 0, { ...state.currentNote })
    localStorage.notesList = JSON.stringify(state.notesList)
  },
  // 切换当前显示的笔记
  [types.CHANGE_ACTIVE_NOTE](state, { noteInfo }) {
    state.currentNote = noteInfo
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

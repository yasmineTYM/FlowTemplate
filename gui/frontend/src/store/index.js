import Vue from 'vue'
import Vuex from 'vuex'
import menu from '@/store/modules/Common/menu'
import link from '@/store/modules/Common/link'
import loadertext from '@/store/modules/KG/loadertext'

Vue.use(Vuex)

function newLink(){
  return {
    source: undefined, 
    target: undefined
  }
}

export default new Vuex.Store({
  state: {
    drawLink: false,
    currentLink: undefined, 
    currentDragging: undefined,
    
  },
  mutations: {
    DRAWLINK_STATUS(state, status){
      state.drawLink = status;
    },
    SET_CRRENTDRAGGING(state, vm){
      state.currentDragging = vm;
    },
    SET_CURRENTLINK(state, {id, pos, in_out}){
      if(in_out === "source"){
        state.currentLink = new newLink(); 
        state.currentLink.source = {
          id, 
          pos, 
          in_out
        }
      }else{
        if(state.currentLink && state.currentLink.source){
          state.currentLink.target = {
            id, 
            pos, 
            in_out
          }
        }else{
          console.log('Set currentLink fail, no source link')
          return;
        }
      }
    }
  },
  actions: {
    changeLinkDrawingStatus({commit}, status){
      commit('DRAWLINK_STATUS', status)
    },
    changeCurrentDraggingVM({commit}, vm){
      commit('SET_CRRENTDRAGGING', vm)
    },
    setCurrentLink({commit}, {id, pos, in_out}){
      commit('SET_CURRENTLINK', {id, pos, in_out})
    }
  },
  modules: {
    menu,
    link, 
    loadertext,
  }
})

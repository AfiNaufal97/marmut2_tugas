import rootStore from './RootStore'

const Reducer = (state = rootStore, action) =>{
    if(action.type === 'information'){
        return {
            ...rootStore,
            position:'information'
        }
    }else if(action.type === 'home'){
        return {
            ...rootStore,
            position:'home'
        }
    }
}

export default Reducer
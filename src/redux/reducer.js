
const rootReducer = (state = { name: "bot1" }, action) => {
    console.log("action:" + action.type)
    switch (action.type) {
        case 'selectMember':
            return action.profile;
        default:
            return { name: "bot2" }
    }
}

export default rootReducer
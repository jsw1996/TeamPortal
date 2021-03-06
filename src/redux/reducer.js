
const rootReducer = (state = { name: "bot1" }, action) => {
    console.log("action:" + action.type)
    switch (action.type) {
        case 'selectMember':
            return action.profile;
        case 'createProfile':
            return {
                firstName: "",
                lastName: "",
                email: "",
                tel: "",
                team: "",
                position: "",
                leader: "",
                des: ""

            };
        case 'applyFilter':
            return {
                ...state, memberfilter: action.content
            };
        default:
            return {
                firstName: "",
                lastName: "",
                email: "",
                tel: "",
                team: "",
                position: "",
                leader: "",
                des: ""
            };
    }
}

export default rootReducer
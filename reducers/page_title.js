const initialState = "Home"

export default function update(state = initialState, action) {
  switch(action.type){
    case "SET_PAGE_TITLE":
      return action.page_title;
    default:
      return state;
  }
}
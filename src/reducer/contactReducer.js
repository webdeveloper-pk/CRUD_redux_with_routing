
const initialState = [
  {
    id: 0,
    name: "Abdullah",
    email: "mabdullah.rasheed8@gmail.com",
    phone:"12345"
  }
]

const contactReducer = (state = initialState, action) =>
{
  switch (action.type) {
    case "ADD-CONTACT":
      state = [...state, action.payload];
      return state;

    case "UPDATE-CONTACT":
      const updatedState = state.map((contact) =>
        contact.id == action.payload.id ? action.payload : contact
      );
      state = updatedState;
      return state;

    case "DELETE-CONTACT":
      const NewArray = state.filter((contact) => contact.id != action.payload && contact)
      state = NewArray;
      return state;
    
    default:
      return state;
  }
}

export default contactReducer;;
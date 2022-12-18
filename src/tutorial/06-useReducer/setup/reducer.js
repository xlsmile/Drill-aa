export const reducer = (stateBeforeUpdate, action) => {
  switch (action.type) {
    case 'ADD_USER':
      const newUsers = [...stateBeforeUpdate.users, action.payload];
      return { ...stateBeforeUpdate, users: newUsers, modalOpen: true, modalContent: 'User Added.' };
    case 'NO_VALUE':
      return { ...stateBeforeUpdate, modalOpen: true, modalContent: 'Please, provide user name.' };
    case 'CLOSE_MODAL':
      return { ...stateBeforeUpdate, modalOpen: false };
    case 'REMOVE_USER':
      const newUser = stateBeforeUpdate.users.filter((user) => user.id !== action.payload);
      return { ...stateBeforeUpdate, users: newUser };
    default:
      return stateBeforeUpdate;
  }
};

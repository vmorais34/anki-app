import UserRepository from "../repositories/UserRepository.js"

const getAllUsers = async () => {
    return await UserRepository.getAllUsers();
}

const getUser = async (id) => {
    return await UserRepository.getUser(id);
}

const saveUser = async ({ name, login, password, email }) => {
    return await UserRepository.saveUser({ name, login, password, email });
}

const updateUser = async (id, { name, login, password, email }) => {
    return await UserRepository.updateUser(id, { name, login, password, email });
}

const deleteUser = async (id) => {
    return await UserRepository.deleteUser(id);
}

// login
const getUserByLogin = async(login) => {
   return await UserRepository.getUserByLogin(login);
}

const userService = {
    getAllUsers,
    getUser,
    saveUser,
    updateUser,
    deleteUser,
    getUserByLogin
}

export default userService;
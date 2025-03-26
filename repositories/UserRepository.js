import User from "../models/User.js";

const getAllUsers = async () => {
  try{
      return await User.find();
  }catch(error){
      throw new Error(error);
  }
}

const getUser = async (id) => {
  try{
      return await User.findById(id);
  }catch(error){
      throw new Error(error);
  }
}

const saveUser = async ({ name, login, password, email }) => {
  try{
      const user = new User({ name, login, password, email });
      return await user.save();
  }catch(error){
      throw new Error(error);
  }
}

const updateUser = async (id, { name, login, password, email }) => {
  try{
      return await User.findByIdAndUpdate(id, { name, login, password, email }, { new: true });
  }catch(error){
      throw new Error(error);
  }

}

const deleteUser = async (id) => {
  try{
      return await User.findByIdAndDelete(id);
  }catch(error){
      throw new Error(error);
  }
}

// login
// const getDoctorByLogin = async (login) => {
//   try {
//       return await Doctor.findOne({"login": login});
//   } catch (error) {
//       throw new Error(error);
//   }
// }


const userRepository = {
  getAllUsers,
  getUser,
  saveUser,
  updateUser,
  deleteUser,
  // getUserByLogin
}

export default userRepository;
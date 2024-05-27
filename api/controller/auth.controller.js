import User from "../model/auth.model.js";
export const createUser = async(req,res) =>{
    const {username,email,password} = req.body;
     
    if(!username || !email || !password){
        return res.status(400).json({message:"All fields are required"});
    }
    const new_user = new User({
        username,
        email,
        password
    });
    await new_user.save();
    res.status(201).json(new_user);
}
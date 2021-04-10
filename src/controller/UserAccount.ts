import {Request,Response} from "express"
import AddUser from "../Modals/AddUser"

export const addUser=async (req:Request,res:Response)=>{
       console.log("working")
       res.send(req.body) 
       const data = new AddUser({
              name: req.body.name,
		phone: req.body.phone,
       })
       data.save().then((result)=>{
             
                    console.log("result")
       }).catch(error=>{
              console.log(error)
       })
	

}


export const viewUser = (req:Request,res:Response)=>{
                     res.send({message:"get request"})
}
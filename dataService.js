//import db.js so that we get the model
const db=require('./db')


//register

const register=(email,pswd)=>{
    //check email is in mongodb
    console.log("inside dataservice register function")
   return  db.User.findOne({
        email
    }).then((result)=>{
        console.log(result)
        if(result){
            return {
                statusCode:403,
                message:"email already exists, try with another email id"
            }
        }else{
            //to add new user
            const newUser = new db.User({
                email,
                pswd
            })
            //to save new user in mongodb use save()
            newUser.save()
            return{
                statusCode:200,
                message:"Successfully Subscribed to Newsweb"
            }
        }
    })
}

//login
const login= (email,pswd)=>{
    console.log('inside dataservice login function ');
    //check email and pswd in mongodb
    return db.User.findOne({
        email,
        pswd
    }).then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    message:'login successfull...'
                }
            }
            else{
                return{
                    statusCode:403,
                    message:'Invalid email or password'
                }
            }
        }
    )

}

module.exports={
    register,
    login
}
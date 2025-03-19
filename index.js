const express = require('express')
const dotenv = require('dotenv')
const app = express()
dotenv.config()

const users = [
    {
        email: "alice@example.com",
        password: "alice123"
    },
    {
        email: "bob@example.com",
        password: "bob123"
    },
    {
        email: "charlie@example.com",
        password: "charlie123"
    }
]
app.get("/",(req,res)=>{
    res.status(201).json({message:"HIIII"})
})

app.put("/update", (req,res)=>{
    const {email,password} = req.body
    if (!email || !password){
        console.log("Both fields required")
    }
    else{
        const index = users.findIndex((item)=>{
            if (item.email==email){
                return
            }
        }
    )
        if (index==-1){
            res.status(404).json({message:"Email not found"})
        }
        else{
            users[index].password=password
            res.status(201).json("Successfully updated password")
        }
    }
})

app.delete("/delete", (req,res)=>{
    const {email} = req.body
    if (!email){
        console.log("E-mail required")
    }
    else{
        const index = users.findIndex((item)=>{
            if (item==email){
                return
            }
        }
    )
    if (index==-1){
        res.status(404).json({message:"Email not found"})
    }
    else{
        users.splice(index,1)
        res.status(201).json({message:"Deleted email successfully"})
    }
    }
})

const PORT = process.env.PORT
app.use(express.json())
app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`)
})

const { error } = require('console')
const express=require('express') //or import express from express
const app=express()
const port=8080

const students = [
    {
        id: 1,
        name: "Sayam",
        class: "10"
    }

]


//contact
app.get('/',(req,res)=>{
    
    try{
        res.status(200).json({message:"Fetch all student",data:students});
    }
    catch(err){
        res.status(500).json({message:"can't fetch data",error:err.message});
    }
})


//search data for student

app.get('/:id',(req,res)=>{
    try{
        const id=res.params.id;
        const student=students.find(s=>s.id);
        if(!student){
            return res.status(404).json({message:"student not found",data:students});
        }
        res.status(200).json({message:"found student"})
    }catch (err){
        res.message(500).json({message:"failed to fetch",error:err.message});
    }
})

//create data

app.post('/add',(req,res)=>{
    try{
        const newStudent={
            id:students.length+1,
            ...req.body
        }
        students.push(newStudent);
        res.status (201).json({message:"Student create succesfully",newStudent});
    }
    catch(err){
        res.status(500).json({message:"data not saved",error:err.message});
    }
})


//edit data

    app.put('/edit/:id',(req,res)=>{
        try{ 
            const id=req.params.id;
            const index=students.finds(s=>s.id);
            if(index==-1){
                return res.status(404).json({message:"student not found"});
            }
            students[index]={
                ...students[index],
                ...req.body
            }

            res.status(200).json({message:"data successfully updated",...req.body});

        }
        catch(err)
        {
          res.status(500).json({message:"data not saved",error:err.message});   
        }

    })


    //delete data

    app.delete('/delete/:id',(req,res)=>{
         try{ 
            const id=req.params.id;
            const index=students.finds(s=>s.id);
            if(index==-1){
                return res.status(404).json({message:"student not found"});
            }
            students.splice(index,1);
            res.status(200).json({message:"data succssfully deleted"})
        }
        catch(err){
            res.status(500).json({message:" deleted"})
        }

    })

app.listen(port,()=>{
    console.log('server is running at: http://localhost:8080');
})
import exp from 'express'
import { verifyToken } from '../middlewares/verifyToken.js'
import { ArticleModel } from '../models/ArticleModel.js'
export const userApp=exp.Router()

//Read articles of all authors
userApp.get("/articles",verifyToken("USER"),async(req,res)=>{
    //Read articles
    const articlesList=await ArticleModel.find({isArticleActive:true})
    
    //Send response
    res.status(200).json({message:"Articles: ",payload:articlesList})
})

//Add comment to an article
userApp.put("/articles",verifyToken("USER"),async(req,res)=>{
    //Get body from request
    const {articleId,comment}=req.body

    //Check article
    const articleDocument=await ArticleModel.findOne({_id:articleId,isArticleActive:true}).populate("comments.user")

    //If article not found
    if(!articleDocument){
        return res.status(404).json({message:"Article not found"})
    }

    //Get user Id
    const userId=req.user?.id
    
    //Add the comment to comments array of article document
    await articleDocument.comments.push({user:userId,comment:comment})
    
    //Save
    articleDocument.save()
    
    //Send response
    res.status(200).json({message:"Comment added successfully",payload:articleDocument})
})
import { Category,Food } from "@/app/api/models";
import { connectToDb } from "./api/utils";

export const fetchCategory =async()=>{
     try{
        connectToDb()
        const category = await Category.find()
        return category
     }catch(e){
        console.log(e);
     }
}

export const fetchFoodByCategory =async(q)=>{
    try{
       connectToDb()
       const categoryWithFoods = await Category.findOne({ name: q }).populate('foodId');
       return categoryWithFoods
    }catch(e){
       console.log(e);
    }
}

export const fetchAllCategoryWithFood =async(q)=>{
   try{
      connectToDb()
      const allCategoryWithFoods = await Category.find().populate('foodId');
      return allCategoryWithFoods
   }catch(e){
      console.log(e);
   }
}

export const fetchAllFood =async()=>{
    try{
       connectToDb()
       const allFoods = await Food.find();
       return allFoods
    }catch(e){
       console.log(e);
    }
}

export const fetchFoodOnSale =async()=>{
   try{
      connectToDb()
      const foodOnSale = await Food.find({foodOnSale:true});
      return foodOnSale
   }catch(e){
      console.log(e);
   }
}
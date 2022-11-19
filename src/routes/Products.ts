import { Router } from "express";
import { Product } from '../models/Product';

class ProductRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.getRoutes();
    }

    getRoutes() {
        this.router.get("/:id?", function (req, res, next) {
            try {
                const _id = req.params?.id;
                if(_id) {
                    console.log("find by id",_id);
                    
                    // get one product detail
                    Product.findById({ _id })
                    .then((data: any) => {
                        if(data){
                            res.json(data);
                        } else {
                            res.json([]);
                        }
                    })
                    .catch((error: any) => {
                        next(error);
                    });
                } else {
                    // get all products
                    console.log("find");
                    
                    Product.find()
                    .then((data: any) => {
                        if(data){
                            res.json(data);
                        }  else {
                            res.json([]);
                        } 
                    })
                    .catch((error: any) => {
                        console.log(" inner catch block", error);
                        next(error);
                    });
                }
            } catch (error) {
                console.log("outer catch block", error);
                next(error);
            }
        });
    }
}

export default new ProductRouter().router;
const mongoCollections = require("../config/mongoCollections");
const Product_Departments = mongoCollections.Departments;
const Goods = mongoCollections.Goods;
const uuid = require('node-uuid');
const bcrypt = require('bcrypt');
const users = require('./users');

let exportedMethods = {
    addDepartment(DepartmentName) {
        return Product_Departments().then((Product_DepartmentsCollection) => {
            let newDepartments = {
                _id: uuid.v4(),
                department: DepartmentName
                
            };
            return Product_DepartmentsCollection.insertOne(newDepartments).then(() => {
                return Promise.resolve(true);
            });
        }).catch((Error) => {
            return Promise.reject(false);
        })
    },


    getAllDepartment() {
        return Product_Departments().then((Product_DepartmentsCollection) => {
            return Product_DepartmentsCollection.find().toArray();
        });

    },

    getDepartmentById(id){

        return Product_Departments().then((Product_DepartmentsCollection) => {

            return Product_DepartmentsCollection.findOne({_id:id});

        });


    },

    findGoodsByDepartment(DepartmentName) {
    //     return Product_Departments().then((Product_DepartmentsCollection) => {
    //         return Product_DepartmentsCollection.findOne({ department: DepartmentName }).then((finded) => {
    //             if (!finded) throw "Wrong Department Name Provided!"
    //             return finded.goods.toArray();
    //         }).catch((Error) => {
    //             throw Error;
    //         })
    //     }).catch((Error) => {
    //         reject(Error);
    //     })

    return Goods().then((goodsCollection)=>{

        return goodsCollection.find({department:DepartmentName}).toArray();


    });
    }
}

module.exports = exportedMethods;
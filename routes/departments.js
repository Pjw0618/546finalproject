const express = require('express');
const router = express.Router();
const data = require("../data");
const Goods = data.goods;
const Users = data.users;
const Departments = data.departments;
 
const path = require('path');


	router.get("/adddepartment",(req,res)=>{


		res.render('layouts/adddepartment');


	});

	router.post("/adddepartment",(req,res)=>{


		Departments.addDepartment(req.body.name).then(()=>{

			Departments.getAllDepartment().then((departmentsCollection)=>{

				res.render('layouts/adddepartment',{message:"add department success",departments:departmentsCollection});


			});

		

		});

	});


	router.get("/goodsbydepartment/:id",(req,res)=>{

		Departments.getAllDepartment().then((departmentsCollection)=>{

			Departments.getDepartmentById(req.params.id).then((department)=>{
				console.log(department.department);

			Departments.findGoodsByDepartment(department.department).then((goods)=>{

			res.render('layouts/goodsbydepartment',{message:"find goods success",departments:departmentsCollection,goods:goods});


			});
		});


		});

		

	});


module.exports = router;
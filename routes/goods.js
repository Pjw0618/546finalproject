const express = require('express');
const router = express.Router();
const data = require("../data");
const Goods = data.goods;
const Users = data.users;
const path = require('path');

router.post("/goods", (req, res) => {

    let goods = req.body.goods;
    let description = req.body.description;
    let price = req.body.price;
    let department = req.body.department;

    Goods.createGoods(goods, description, price, department).then((success) => {

        Goods.getAllGoods().then((goodsCollection) => {


            res.render('layouts/goods', { goods: goodsCollection });

        }).catch((Error) => {

            res.render('layouts/goods', { message: "no goods on the db" });


        });


    }, (reject) => {

        res.render("layouts/goods", { message: "system error, try again!" });
    });



});


router.get("/goods", (req, res) => {

    Goods.getAllGoods().then((goodsCollection) => {


        res.render('layouts/goods', { goods: goodsCollection });

    }).catch((Error) => {

        res.render('layouts/goods', { message: "no goods on the db" });


    });


});



router.get("/goods/:id", (req, res) => {

    Goods.getGoodsById(req.params.id).then((good) => {

        res.render('layouts/goodsDetail', { goods: good });

    });


});

router.get("/goodsdepartment/:department", (req, res) => {

    Goods.getGoodsByDepartment(req.params.department).then((goods) => {

        res.render('layouts/departmentgoods', { goods: goods });

    }).catch((Error) => {

        res.render('layouts/departmentgoods', { message: "no goods in this department" });

    });

});


router.post("/goodscomment", (req, res) => {

    let id = req.body.id;
    let poster = req.user.name;
    let comment = req.body.comment;

    let judge = Goods.getGoodsInUser(id, req.user._id);

    if (judge) {

        Goods.createCommentForGoods(id, poster, comment).then((good) => {

            res.render("layouts/goodsDetail", { message: "you have successfully add a comment" });

        }).catch((Error) => {

            res.render("layouts/login", { message: "error happend" });

        });

    } else {
        res.render("layouts/login", { message: "please login first" });
    }

});

router.post("/buy", (req, res) => {

    let goodsid = req.body.buygoodsid;
    let name = req.body.buygoodsname;


    if (!req.session.passport.user) {

        res.render("layouts/login", { message: "please login first" });
    } else {

        Users.updateOrder(req.user._id, goodsid, name).then(() => {

            res.render("layouts/goodsDetail", { message: "you have successfully buy this item, it's on the way" });

        }).catch((Error) => {
            console.log(Error)
            res.render("layouts/login", { message: "please login first" });

        });

    }


});


router.post("/addshoppingcart", (req, res) => {


    let goodsid = req.body.cartgoodsid;
    let name = req.body.cartgoodsname;
    let price = req.body.cartgoodsprice;



    if (!req.user) {

        res.render("layouts/login", { message: "please login first" });

    } else {

        Users.addToShoppingCart(req.user._id, goodsid, name, price).then(() => {

            res.render("layouts/goodsDetail", { message: "you have added to shopping cart" });

        }).catch((Error) => {

            res.render("layouts/goodsDetail", { message: "system error, try again" });

        });

    }

});

router.post("/addfavorite",(req,res)=>{

    let goodsid = req.body.favogoodsid;
    let name = req.body.favogoodsname;
    let price = req.body.favogoodsprice;

    if(!req.user){

        res.render("layouts/login", { message: "please login first" });

    }else{

         Users.addToFavorite(req.user._id, goodsid, name, price).then(() => {

            res.render("layouts/goodsDetail", { message: "you have added to favorite" });

        }).catch((Error) => {

            res.render("layouts/goodsDetail", { message: "system error, try again" });

        });

    }


});



router.get("/cart",(req,res)=>{

    if(!req.user){

        res.render("layouts/login",{message:"please login first"});
    }else{

        res.render("layouts/cart",{loggedin:req.user});
    }


});


router.get("/clearshoppingcart",(req,res)=>{

if(!req.user){

res.render("layouts/login", { message: "please login first" });

}else{

    let id = req.user._id;




}




});



router.post("/goodsrate", (req, res) => {




});


router.post("/search", (req, res) => {

    let content = req.body.content;

    

    Goods.findByName(content).then((result) => {


        res.render("layouts/search", { result: result, loggedin: req.user });



    }).catch((Error) => {

        console.log(Error);

    });


});


router.get("/search", (req, res) => {

    res.render("layouts/search", { loggedin: req.user });

});

// router.get("/addgoods",(req,res)=>{

//     res.render("layouts/addGood");
// });

module.exports = router;
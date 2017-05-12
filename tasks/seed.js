const dbConnection = require("../config/mongoConnection");
const data = require("../data/");
const users = data.users;
const posts = data.posts;
const goods = data.goods;
const depart = data.departments;

dbConnection().then(db => {
    return db.dropDatabase().then(() => {
        return dbConnection;
    }).then((db) => {
        return depart.addDepartment("Books");
    }).then((db) => {
        return depart.addDepartment("Furniture");
    }).then((db) => {
        return depart.addDepartment("Toys");
    }).then((db) => {
        return depart.addDepartment("Jewelry");
    }).then((db) => {
        return depart.addDepartment("Computers");
    }).then((db) => {
        return goods.createGoods("Good Behavior", "Good Behavior comprises three interlinked novellas (The Pain of Others, Sunset Key, and Grab), which together form a novel-length portrait of Blake Crouch's all-time favorite character creation, Letty Dobesh. This edition is the complete Letty Dobesh collection.", "$21", "Books", "https://images-na.ssl-images-amazon.com/images/I/51S6gkuWtCL._SL140_.jpg");
    }).then((db) => {
        return goods.createGoods("Split Second", "What if you found a way to send something back in time? But not weeks, days, or even minutes back. What if you could only send something back a fraction of a second? Would this be of any use? You wouldn't have nearly enough time to right a wrong, change an event, or win a lottery.", "12.15", "Books", "https://images-na.ssl-images-amazon.com/images/I/51xZtpFDzmL._SL440_PJku-sticker-v3,TopRight,0,-44_V5_SY160_OU01_.jpg");
    }).then((db) => {
        return goods.createGoods("Still Waters", "On a hot July morning on Sweden’s idyllic vacation island of Sandhamn, a man takes his dog for a walk and makes a gruesome discovery: a body, tangled in fishing net, has washed ashore.", "$8", "Books", "https://images-na.ssl-images-amazon.com/images/I/513s6V2pKKL._SL440_PJku-sticker-v3,TopRight,0,-44_V5_SY160_OU01_.jpg");
    }).then((db) => {
        return goods.createGoods("Star Wars", "The original Dark Lord of the Sith stars in his first ongoing series! Ever since Darth Vader's first on-screen appearance, he has become one of pop-culture's most popular villains.", "$26.67", "Books", "https://images-na.ssl-images-amazon.com/images/I/51jW4VbcLjL._SL440_PJku-sticker-v3,TopRight,0,-44_V5_SY160_OU01_.jpg");
    }).then((db) => {
        return goods.createGoods("King's Brand Beige Fabric With Adjustable Back Klik Klak Sofa Futon Bed Sleeper", "Kings Brand Beige Fabric With Adjustable Back Klik Klak Sofa Futon Bed Sleeper 2 position, easily converts from sitting to lounging to sleeping, Perfect for apartments without a lot of space", "$133.4", "Furniture", "https://images-na.ssl-images-amazon.com/images/I/51Myeq0W7iL._SL150_.jpg");
    }).then((db) => {
        return goods.createGoods("DHP Real Tree MAX-5 Camouflage Futon", "Traditional style futon with a trendy twist. Camouflage style design", "$155", "Furniture", "https://images-na.ssl-images-amazon.com/images/I/51pjmKiMIYL._SL150_.jpg");
    }).then((db) => {
        return goods.createGoods("Divano Roma Furniture Collection - Modern Plush Tufted Linen Fabric Splitback Living Room Sleeper Futon (Dark Grey)", "Modern split-back sleeper futon in fun colors - perfect for a bonus room, office or apartment to give your space a pop of color!", "$488.90", "Furniture", "https://images-na.ssl-images-amazon.com/images/I/51jkNhq3vkL._SL150_.jpg");
    }).then((db) => {
        return goods.createGoods("DHP Dillan Convertible Futon, Gray", "Microfiber upholstery", "$110", "Furniture", "https://images-na.ssl-images-amazon.com/images/I/51cYYqYGhfL._SL150_.jpg");
    }).then((db) => {
        return goods.createGoods("Cards Against Humanity", "550 cards (460 White cards and 90 Black cards)", "$25", "Toys", "https://images-na.ssl-images-amazon.com/images/I/41njou1AvUL._AC_US320_FMwebp_QL65_.jpg");
    }).then((db) => {
        return goods.createGoods("Glantop® Magnetic Sculpture Desk Toy for Intelligence Development and Stress Relief (Set of 160 Balls, 1 Magnet Base)", "Perform flips at the press of a button with 360 degree eversion, Wind resistant and can be flown indoors or outdoors", "$45.99", "Toys", "https://images-na.ssl-images-amazon.com/images/I/31F80tz4ENL._AC_US320_FMwebp_QL65_.jpg");
    }).then((db) => {
        return goods.createGoods("Syma X5C Quadcopter equipped with HD cameras, 2.4G 6 Axis Gyro", "Perform flips at the press of a button with 360 degree eversion, Wind resistant and can be flown indoors or outdoors", "$45.99", "Toys", "https://images-na.ssl-images-amazon.com/images/I/31F80tz4ENL._AC_US320_FMwebp_QL65_.jpg");
    }).then((db) => {
        return goods.createGoods("Glantop® Magnetic Sculpture Desk Toy for Intelligence Development and Stress Relief (Set of 160 Balls, 1 Magnet Base)", "Magnetism can be delivered through metal. Set of 160 stainless steel balls of different sizes and a magnetic base.", "$7.43", "Toys", "https://images-na.ssl-images-amazon.com/images/I/51gf2KNaiYL._AC_US320_FMwebp_QL65_.jpg");
    }).then((db) => {
        return goods.createGoods("ALOV Jewelry Sterling Silver", "With loving message of I Love You To The Moon and Back", "$39.99", "Jewelry", "https://images-na.ssl-images-amazon.com/images/I/51qV1mGDJCL._AC_UL500_SR385,500_FMwebp_QL65_.jpg");
    }).then((db) => {
        return goods.createGoods("Sterling Silver and Swiss Blue Natural Topaz Gemstone Pendant Necklace", "A 16 inch sterling silver necklace and a 18-inch sterling silver necklace. ELABORATE DESIGN –Very noble and fashionable. Blue charm.Twinkle Twinkle surprise! Like a blue heart in a blue ocean. Filled with love.", "$59.9", "Jewelry", "https://images-na.ssl-images-amazon.com/images/I/41UU1%2BgHRIL._AC_UL500_SR385,500_FMwebp_QL65_.jpg");
    }).then((db) => {
        return goods.createGoods("1 1/4 Carat Round Cut Diamond Solitaire Engagement Ring 18K White Gold 6 Prong", "Diamond Variance of Weight is +/- 6%", "$5900", "Jewelry", "https://images-na.ssl-images-amazon.com/images/I/41iGETtmvqL._AC_UL520_SR400,520_FMwebp_QL65_.jpg");
    }).then((db) => {
        return goods.createGoods("Mothers Day Gift Jewelry Sterling Silver Pendant Necklace", "Made of fine 925 Sterling Silver and decorated with 3A cubic zircon, the necklace is proved to be body-safe after rigorous contact test. Without any harmful ingredients, it’s nickel-free, lead-free, cadmium-free and anallergic.", "$36.87", "Jewelry", "https://images-na.ssl-images-amazon.com/images/I/51KfpMyLDLL._AC_UL520_SR400,520_FMwebp_QL65_.jpg");
    }).then((db) => {
        return goods.createGoods("Fire HD 8 Tablet with Alexa, 8 HD Display, 16 GB, Black - with Special Offers", "Fire HD 8, now with up to 12 hours of battery life, 2X the storage, and 50% more RAM for faster performance", "$64.99", "Computers", "https://images-na.ssl-images-amazon.com/images/I/61ZqZIq-KPL._SL500_SR160,160_.jpg");
    }).then((db) => {
        return goods.createGoods("Apple iPad Mini 2 with WiFi 32GB Silver - ME280LL/A", "wi-fi", "$294", "Computers", "https://images-na.ssl-images-amazon.com/images/I/81kigs0%2B0-L._SL500_SR108,160_.jpg");
    }).then((db) => {
        return goods.createGoods("Acer Chromebook 14", "Intel Celeron N3160 Quad-Core Processor 1.6GHz (Up to 2.24GHz)", "$274", "Computers", "https://images-na.ssl-images-amazon.com/images/I/81QSZ1wxDKL._SL500_SR160,160_.jpg");
    }).then((db) => {
        return goods.createGoods("Samsung Chromebook Plus Convertible Touch Laptop (XE513C24-K01US)", "Flexible 360° profile. Enables you to use upright as a computer to reply to emails or finish a paper and recline for a tablet view ideal for surfing and viewing", "419", "Computers", "https://images-na.ssl-images-amazon.com/images/I/81HlS3UAMNL._SL500_SR160,160_.jpg");
    }).then(() => {
        console.log("Done seeding database");
        db.close();
    });
}, (error) => {
    console.error(error);
});

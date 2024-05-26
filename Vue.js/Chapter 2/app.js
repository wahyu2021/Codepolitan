// var data = {
//     imgClass: "img-fluid",
//     products: [
//         {
//             "id": "532",
//             "name": "Slicker Jacket",
//             "description": "Wind and rain are no match for our organic bamboo slicker jacket for men and women. Triple stitched seams, zippered pockets, and a stay-tight hood are just a few features of our best-selling jacket.",
//             "price": "125",
//             "image_title": "slicker-jacket_lynda_29941",
//             "image": "https://hplussport.com/wp-content/uploads/2016/12/slicker-jacket_LYNDA_29941.jpg"
//         },
//         {    
//             "id": "439",
//             "name": "Orange Mineral Water",
//             "description": "An 8-ounce serving of refreshing H+ Sport orange mineral water fulfills a day's nutritional requirements for over 12 vitamins and minerals.",
//             "price": "2.80",
//             "image_title": "mineral-water-orange_600px",
//             "image": "https://hplussport.com/wp-content/uploads/2015/12/mineral-water-orange_600px.png"
//         },
//         {
//             "id": "436",
//             "name": "Blueberry Mineral Water",
//             "description": "An 8-ounce serving of our refreshing H+ Sport blueberry mineral water fulfills a day's nutritional requirements for over 12 vitamins and minerals.",
//             "price": "2.80",
//             "image_title": "minearl-water-blueberry_600px",
//             "image": "https://hplussport.com/wp-content/uploads/2015/12/minearl-water-blueberry_600px.png"
//         },
//         {
//             "id": "259",
//             "name": "Raspberry Mineral Water",
//             "description": "An 8-ounce serving of our refreshing H+ Sport raspberry mineral water fulfills a day's nutritional requirements for over 12 vitamins and minerals.",
//             "price": "2.80",
//             "image_title": "mineral-water-raspberry_600px",
//             "image": "https://hplussport.com/wp-content/uploads/2015/12/mineral-water-raspberry_600px.png"
//         }
//     ]
// }

var app = new Vue({
    el: "#app",
    data: {
        slugText:'The Quick #(*!&@ Brown 29'
    },
    computed: {
        slugetize: function(){
            return this.slugText.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-')
        }
    }
})
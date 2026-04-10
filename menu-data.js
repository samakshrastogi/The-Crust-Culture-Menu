const MENU_DATA = [
    {
        title: "Extra Toppings",
        type: "3",
        labels: ["S", "M", "L"],
        image: "images/extra-toppings.png",
        items: [
            { name: "Veggies", prices: ["20", "40", "60"] },
            { name: "Cheese", prices: ["30", "50", "70"] },
            { name: "Paneer", prices: ["30", "50", "70"] },
            { name: "Cheese Burst", prices: ["60", "90", "120"] }
        ]
    },
    {
        title: "Everyday Classics",
        type: "3",
        labels: ["S", "M", "L"],
        image: "images/everyday-classics.png",
        items: [
            { name: "Classic", prices: ["49", "-", "-"] },
            { name: "Onion", prices: ["89", "179", "269"] },
            { name: "Tomato", prices: ["89", "179", "269"] },
            { name: "Capsicum", prices: ["89", "179", "269"] },
            { name: "Golden Corn", prices: ["99", "189", "299"] },
            { name: "Margherita", prices: ["99", "199", "319"] },
            { name: "Golden Corn & Cheese", prices: ["119", "199", "319"] },
            { name: "Double Cheese Margherita", prices: ["119", "219", "349"] }
        ]
    },
    {
        title: "Classic Veg Combos",
        type: "3",
        labels: ["S", "M", "L"],
        image: "images/classic-veg-combo.png",
        items: [
            { name: "Golden Corn + Onion", prices: ["99", "189", "299"] },
            { name: "Onion + Capsicum", prices: ["99", "189", "299"] },
            { name: "Tomato + Golden Corn", prices: ["99", "189", "299"] },
            { name: "Golden Corn + Jalapeno", prices: ["99", "199", "329"] },
            { name: "Capsicum + Red Peperika", prices: ["99", "199", "329"] }
        ]
    },
    {
        title: "Signature Veg Pizzas",
        type: "3",
        labels: ["S", "M", "L"],
        image: "images/signature.png",
        items: [
            { name: "Yammy Veg Pizza", prices: ["129", "229", "319"] },
            { name: "Maxican Pizza", prices: ["129", "229", "319"] },
            { name: "Veg Loaded Pizza", prices: ["149", "269", "349"] },
            { name: "Fresh Veggie", prices: ["149", "269", "349"] },
            { name: "Classic Indian Pizza", prices: ["149", "249", "329"] },
            { name: "Black Lover Loaded", prices: ["149", "229", "349"] },
            { name: "Farmhouse Pizza", prices: ["199", "289", "369"] },
            { name: "Extravaganza Pizza", prices: ["199", "289", "349"] },
            { name: "Paradise Pizza", prices: ["229", "349", "419"] }
        ]
    },
    {
        title: "Royal Paneer Collection 👑",
        type: "3",
        labels: ["S", "M", "L"],
        image: "images/royal-paneer.png",
        items: [
            { name: "Paneer Capsicum", prices: ["149", "249", "319"] },
            { name: "Paneer Onion", prices: ["149", "249", "319"] },
            { name: "Paneer Onion Capsicum", prices: ["159", "269", "329"] },
            { name: "Paneer Special", prices: ["169", "269", "349"] },
            { name: "Veg + Paneer Loaded", prices: ["169", "269", "349"] },
            { name: "Paneer Makhni", prices: ["169", "269", "349"] },
            { name: "Pappy Paneer", prices: ["199", "299", "369"] },
            { name: "Loaded Indi Tandoori", prices: ["199", "299", "369"] },
            { name: "Double Paneer Premium", prices: ["229", "329", "419"] }
        ]
    },
    {
        title: "Garlic Breads & Sides 🥖",
        type: "1",
        labels: [""],
        image: "images/garlic-bread.png",
        items: [
            { name: "Garlic Bread", prices: ["99"] },
            { name: "Garlic Bread Stuffed", prices: ["149"] },
            { name: "Paneer Tikka Stuffed", prices: ["169"] }
        ]
    },
    {
        title: "Quick Wraps 🌯",
        type: "1",
        labels: [""],
        image: "images/veg-parcel.png",
        items: [
            { name: "Veg Parcel", prices: ["49"] },
            { name: "Indi Tandoori", prices: ["69"] }
        ]
    },
    {
        title: "Grilled Sandwiches 🥪",
        type: "1",
        labels: [""],
        image: "images/sandwhich.png",
        items: [
            { name: "Veg Grill Sandwich", prices: ["69"] },
            { name: "Veg, Golden Corn", prices: ["89"] },
            { name: "Paneer Special", prices: ["99"] },
            { name: "Cheese Special", prices: ["99"] },
            { name: "Cheese & Paneer Special", prices: ["119"] },
            { name: "Golden Corn & Cheese", prices: ["119"] }
        ]
    },
    {
        title: "Burgers & Street Bites 🍔",
        type: "1",
        labels: [""],
        image: "images/burgers.png",
        items: [
            { name: "Aloo Tikki Burger", prices: ["49"] },
            { name: "Vada Pav", prices: ["49"] },
            { name: "Veg Burger", prices: ["59"] },
            { name: "Cheese Burger", prices: ["79"] },
            { name: "Paneer Burger", prices: ["79"] },
            { name: "Double Cheese", prices: ["99"] },
            { name: "Cheese & Paneer", prices: ["99"] },
            { name: "Pav Bhaji(2 Pav)", prices: ["99"] },
            { name: "Extra Pav", prices: ["25"] }
        ]
    },
    {
        title: "Maggi Mania 🍜",
        type: "2",
        labels: ["H", "F"],
        image: "images/maggie.png",
        items: [
            { name: "Plain Maggie", prices: ["49", "89"] },
            { name: "Veggie Maggie", prices: ["59", "99"] },
            { name: "Cheese Maggie", prices: ["69", "129"] },
            { name: "Paneer Maggie", prices: ["69", "129"] },
            { name: "Spicy Dry Maggie", prices: ["79", "149"] },
            { name: "Schezwan Maggie", prices: ["79", "149"] },
        ]
    },
    {
        title: "Momo Specials 🥟",
        type: "2",
        labels: ["H", "F"],
        image: "images/momos.png",
        items: [
            { name: "Veg Steam Momo", prices: ["49", "69"] },
            { name: "Veg Fried Momo", prices: ["59", "79"] },
            { name: "Paneer Steam Momo", prices: ["69", "99"] },
            { name: "Paneer Fried Momo", prices: ["79", "109"] }
        ]
    },
    {
        title: "Fry Fiesta 🍟",
        type: "2",
        labels: ["H", "F"],
        image: "images/fries.png",
        items: [
            { name: "Classic Salted", prices: ["69", "129"] },
            { name: "Peri Peri Fries", prices: ["79", "129"] },
            { name: "Butter Masala", prices: ["89", "169"] },
            { name: "Salted Smilies", prices: ["89", "159"] },
            { name: "Cheese Fries", prices: ["99", "179"] },
            { name: "Peri Peri Smilies", prices: ["99", "169"] }
        ]
    },
    {
        title: "Crispy Starters 🍢",
        type: "2",
        labels: ["H", "F"],
        image: "images/crispy-starters.png",
        items: [
            { name: "Spring Roll", prices: ["49", "99"] },
            { name: "Veg Nuggets", prices: ["69", "119"] },
            { name: "Cheese Jalapeno Poppers", prices: ["69", "119"] },
            { name: "Cheese Corn Nuggets", prices: ["89", "149"] }
        ]
    },
    
    {
        title: "Indo-Chinese Specials 🥢",
        type: "2",
        labels: ["H", "F"],
        image: "images/chinese.png",
        items: [
            { name: "Dry Manchurian", prices: ["99", "189"] },
            { name: "Chilli Potato", prices: ["119", "199"] },
            { name: "Gravy Manchurian", prices: ["129", "199"] },
            { name: "Honey Chilli Potato", prices: ["129", "199"] }
        ]
    },
    {
        title: "Stuffed Parathas 🫓",
        type: "1",
        labels: [""],
        image: "images/paratha.png",
        items: [
            { name: "Aloo Paratha (2 Pieces)", prices: ["79"] },
            { name: "Mix Veg Paratha (2 Pieces)", prices: ["99"] },
            { name: "Paneer Paratha (2 Pieces)", prices: ["129"] }
        ]
    },
    {
        title: "Wok Rice Bowls 🍚",
        type: "2",
        labels: ["H", "F"],
        image: "images/rice.png",
        items: [
            { name: "Veg Fried Rice", prices: ["69", "129"] },
            { name: "Schezwan", prices: ["89", "149"] },
            { name: "Paneer", prices: ["99", "189"] },
            { name: "Fried Rice with Curd", prices: ["119", "199"] },
            { name: "Manchurian Rice", prices: ["129", "219"] }
        ]
    },
    {
        title: "South Indian Specials 🥥",
        type: "1",
        labels: [""],
        image: "images/south-indian.png",
        items: [
            { name: "Idli Sambhar(2 Pieces)", prices: ["59"] },
            { name: "Sponge Dosa(2 Pieces)", prices: ["99"] },
            { name: "Medu Vada(4 Pieces)", prices: ["99"] },
            { name: "Uttapam(1 Piece)", prices: ["149"] }
        ]
    },
    {
        title: "Tandoori Specials 🔥",
        type: "2",
        labels: ["H", "F"],
        image: "images/malai-chaap.png",
        items: [
            { name: "Malai Chaap", prices: ["129", "199"] }
        ]
    },
    {
        title: "Hot & Cold Beverages ☕🥤",
        type: "1",
        labels: [""],
        image: "images/drinks.png",
        items: [
            { name: "Ginger Tea", prices: ["19"] },
            { name: "Masala Chai", prices: ["29"] },
            { name: "Lemon Honey Tea", prices: ["49"] },
            { name: "Hot Coffee", prices: ["49"] },
            { name: "Black Coffee", prices: ["49"] },
            { name: "Sweet Lassi", prices: ["49"] },
            { name: "Shikanji", prices: ["49"] },
            { name: "Lemon soda", prices: ["69"] },
            { name: "Cold Coffee", prices: ["79"] },
            { name: "Cold Coffee with Ice Cream", prices: ["119"] },
            { name: "Cold Drink", prices: ["MRP"] }
        ]
    }
];
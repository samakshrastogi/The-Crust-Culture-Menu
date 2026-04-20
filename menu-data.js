const MENU_DATA = [
    {
        title: "Extra Toppings",
        type: "3",
        labels: ["S", "M", "L"],
        image: "extra-toppings.png",
        items: [
            { name: "Veggies", prices: ["20", "40", "60"] },
            { name: "Cheese", prices: ["30", "50", "70"] },
            { name: "Paneer", prices: ["30", "50", "70"] },
            { name: "Cheese Burst", prices: ["60", "90", "120"] },
            { name: "Oregano, Chilli Flakes, Ketchup", prices: ["2"] }
        ]
    },
    {
        title: "Everyday Classics",
        type: "3",
        labels: ["S", "M", "L"],
        image: "everyday-classics.png",
        items: [
            { name: "Classic", prices: ["49", "-", "-"] },
            { name: "Onion", prices: ["89", "179", "269"] },
            { name: "Tomato", prices: ["89", "179", "269"] },
            { name: "Capsicum", prices: ["89", "179", "269"] },
            { name: "Golden Corn", prices: ["99", "189", "299"] },
            { name: "Margherita", prices: ["99", "199", "319"] },
            { name: "Golden Corn & Cheese", prices: ["119", "219", "349"] },
            { name: "Double Cheese Margherita", prices: ["119", "219", "349"] }
        ]
    },
    {
        title: "Classic Veg Combos",
        type: "3",
        labels: ["S", "M", "L"],
        image: "veg-combo.png",
        items: [
            { name: "Golden Corn + Onion", prices: ["99", "199", "319"] },
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
        image: "signature.png",
        items: [
            {
                name: "Yammy Veg Pizza",
                toppings: "(Golden Corn, Onion, Capsicum, Tomato, Cheese)",
                prices: ["129", "249", "349"]
            },
            {
                name: "Maxican Pizza",
                toppings: "(Onion, Capsicum, Jalapeno, Tomato, Cheese)",
                prices: ["149", "269", "369"]
            },
            {
                name: "Veg Loaded Pizza",
                toppings: "(Golden Corn, Tomato, Jalapeno, Mushroom, Cheese)",
                prices: ["149", "269", "349"]
            },
            {
                name: "Fresh Veggie",
                toppings: "(Onion, Capsicum, Extra Cheese)",
                prices: ["149", "269", "349"]
            },
            {
                name: "Classic Indian Pizza",
                toppings: "(Onion, Tomato, Golden Corn, Capsicum, Jalapeno, Cheese)",
                prices: ["169", "289", "369"]
            },
            {
                name: "Black Lover Loaded",
                toppings: "(Black Olive, Golden Corn, Capsicum, Cheese)",
                prices: ["149", "229", "349"]
            },
            {
                name: "Farmhouse Pizza",
                toppings: "(Onion, Capsicum, Tomato, Mushroom, Extra Cheese)",
                prices: ["199", "319", "399"]
            },
            {
                name: "Extravaganza Pizza",
                toppings: "(Onion, Capsicum, Tomato, Mushroom, Golden Corn, Black Olive, Extra Cheese)",
                prices: ["229", "319", "399"]
            },
            {
                name: "Paradise Pizza",
                toppings: "(Golden Corn, Black Olive, Capsicum, Red Pepper, Extra Cheese)",
                prices: ["229", "349", "449"]
            }
        ]
    },
    {
        title: "Royal Paneer Collection 👑",
        type: "3",
        labels: ["S", "M", "L"],
        image: "paneer.png",
        items: [
            {
                name: "Paneer Capsicum",
                prices: ["149", "249", "329"]
            },
            {
                name: "Paneer Onion",
                prices: ["149", "249", "329"]
            },
            {
                name: "Paneer Onion Capsicum",
                prices: ["159", "269", "329"]
            },
            {
                name: "Paneer Special",
                toppings: "(Red Pepper, Onion, Capsicum, Paneer, Cheese)",
                prices: ["189", "299", "389"]
            },
            {
                name: "Veg + Paneer Loaded",
                toppings: "(Onion, Capsicum, Golden Corn, Paneer, Cheese)",
                prices: ["189", "299", "389"]
            },
            {
                name: "Paneer Makhni",
                toppings: "(Cheese, Capsicum, Onion, Red Pepper, Paneer Tikka)",
                prices: ["199", "319", "449"]
            },
            {
                name: "Pappy Paneer",
                toppings: "(Capsicum, Red Pepper, Paneer, Cheese)",
                prices: ["199", "299", "369"]
            },
            {
                name: "Loaded Indi Tandoori",
                toppings: "(Capsicum, Red Pepper, Paneer Tikka, Cheese)",
                prices: ["199", "299", "369"]
            },
            {
                name: "Double Paneer Premium",
                toppings: "(Onion, Capsicum, Red Pepper, Double Paneer, Extra Cheese)",
                prices: ["229", "349", "469"]
            }
        ]
    },
    {
        title: "Garlic Breads & Sides 🥖",
        type: "1",
        labels: [""],
        image: "garlic-bread.png",
        items: [
            { name: "Veg Parcel", prices: ["49"] },
            { name: "Indi Tandoori", prices: ["69"] },
            { name: "Garlic Bread", prices: ["99"] },
            { name: "Garlic Bread Stuffed", prices: ["149"] },
            { name: "Paneer Tikka Stuffed", prices: ["169"] }
        ]
    },
    {
    title: "Pizza Bread Fusion Combo 🍕🥪🥤",
    type: "3",
    labels: ["S", "M", "L"],
    image: "pizza-bread-fusion.png",
    items: [
        {
            name: "Pizza Bread Fusion + Cold Coffee",
            prices: ["-", "449", "599"]
        }
    ]
},
    {
        title: "Grilled Sandwiches 🥪",
        type: "1",
        labels: [""],
        image: "sandwhich.png",
        items: [
            { name: "Veg Grill Sandwich", prices: ["79"] },
            { name: "Veg, Golden Corn", prices: ["89"] },
            { name: "Paneer Special", prices: ["119"] },
            { name: "Cheese Special", prices: ["119"] },
            { name: "Cheese & Paneer Special", prices: ["139"] },
            { name: "Golden Corn & Cheese", prices: ["129"] }
        ]
    },
    {
        title: "Burgers & Street Bites 🍔",
        type: "1",
        labels: [""],
        image: "burgers.png",
        items: [
            { name: "Aloo Tikki Burger", prices: ["49"] },
            { name: "Vada Pav", prices: ["49"] },
            { name: "Veg Burger", prices: ["59"] },
            { name: "Cheese Burger", prices: ["79"] },
            { name: "Paneer Burger", prices: ["79"] },
            { name: "Double Cheese", prices: ["99"] },
            { name: "Cheese & Paneer", prices: ["119"] },
            { name: "Pav Bhaji(2 Pav)", prices: ["99"] },
            { name: "Extra Pav", prices: ["25"] }
        ]
    },
    {
        title: "Maggi Mania 🍜",
        type: "2",
        labels: ["H", "F"],
        image: "maggie.png",
        items: [
            { name: "Plain Maggie", prices: ["49", "89"] },
            { name: "Veggie Maggie", prices: ["59", "99"] },
            { name: "Cheese Maggie", prices: ["79", "149"] },
            { name: "Paneer Maggie", prices: ["79", "149"] },
            { name: "Spicy Dry Maggie", prices: ["79", "149"] },
            { name: "Schezwan Maggie", prices: ["79", "149"] },
        ]
    },
    {
        title: "Momo Specials 🥟",
        type: "2",
        labels: ["H", "F"],
        image: "momos.png",
        items: [
            { name: "Veg Steam Momo", prices: ["49", "89"] },
            { name: "Veg Fried Momo", prices: ["49", "99"] },
            { name: "Paneer Steam Momo", prices: ["69", "129"] },
            { name: "Paneer Fried Momo", prices: ["69", "129"] }
        ]
    },
    {
        title: "Fry Fiesta 🍟",
        type: "2",
        labels: ["H", "F"],
        image: "fries.png",
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
        image: "crispy-starters.png",
        items: [
            { name: "Batata Vada", prices: ["49", "-"] },
            { name: "Spring Roll", prices: ["49", "99"] },
            { name: "Veg Nuggets", prices: ["69", "119"] },
            { name: "Cheese Jalapeno Poppers", prices: ["69", "119"] },
            { name: "Cheese Corn Nuggets", prices: ["89", "149"] },
            { name: "Malai Chaap", prices: ["129", "199"] }
        ]
    },

    {
        title: "Indo-Chinese Specials 🥢",
        type: "2",
        labels: ["H", "F"],
        image: "chinese.png",
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
        image: "paratha.png",
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
        image: "rice.png",
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
        image: "south-indian.png",
        items: [
            { name: "Idli Sambhar(2 Pieces)", prices: ["59"] },
            { name: "Sponge Dosa(2 Pieces)", prices: ["99"] },
            { name: "Medu Vada(4 Pieces)", prices: ["99"] },
            { name: "Uttapam(1 Piece)", prices: ["149"] }
        ]
    },
    
    {
        title: "Hot & Cold Beverages ☕🥤",
        type: "1",
        labels: [""],
        image: "drinks.png",
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
    },
    {
    title: "Protein Shakes & Salads 💪🥗",
    type: "1",
    labels: [""],
    image: "protein.png",
    items: [
        { 
            name: "Dry Fruit Energy Shake", 
            prices: ["249"],
            toppings: "(Milk, Almonds, Cashews, Dates, Pistachio, Honey, Anjeer, Walnut, Seeds(Alsi, Pumpkin))"
        },
        { 
            name: "Chocolate Protein Blast", 
            prices: ["199"],
            toppings: "(Milk, Chocolate Syrup, Cocoa Powder, Banana, Peanut Butter)"
        },
        { 
            name: "Oreo Protein Shake", 
            prices: ["199"],
            toppings: "(Milk, Oreo, Vanilla Ice Cream, Chocolate Syrup, Peanut Butter)"
        },
        { 
            name: "Peanut Butter Protein Shake", 
            prices: ["179"],
            toppings: "(Milk, Peanut Butter, Banana, Honey, Ice)"
        },
        { 
            name: "Paneer Power Salad", 
            prices: ["-"],
            toppings: "(Paneer, Lettuce, Cucumber, Tomato, Onion, Sweet Corn, Mint Dressing)"
        },
        { 
            name: "Crunchy Veg Protein Salad", 
            prices: ["-"],
            toppings: "(Paneer, Cabbage, Carrot, Corn, Capsicum, Black Pepper, Mayo)"
        },
        { 
            name: "Corn Cheese Salad", 
            prices: ["-"],
            toppings: "(Sweet Corn, Cheese Cubes, Onion, Capsicum, Mayo, Herbs)"
        },
        { 
            name: "Sprouts Protein Salad", 
            prices: ["-"],
            toppings: "(Mixed Sprouts, Onion, Tomato, Cucumber, Lemon, Chaat Masala)"
        }
    ]
}
];

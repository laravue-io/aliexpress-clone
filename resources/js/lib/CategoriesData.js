const CategoriesData = [
    {
        id: 1,
        col1: {
            id: 1,
            subCategories:
                [
                    {name: "Women's Fashion", isTitle: true},
                    {name: "Dresses", isTitle: false},
                    {name: "Tees", isTitle: false},
                    {name: "Blouses & Shirts", isTitle: false},
                    {name: "Hoodies & Sweatshirts", isTitle: false},
                    {name: "Women's Sets", isTitle: false},
                    {name: "Suits & Blazers", isTitle: false},
                    {name: "Bodysuits", isTitle: false},
                    {name: "Tanks & Camis", isTitle: false},
                    {name: "Coats & Jackets", isTitle: false},
                    {name: "Sweaters", isTitle: false},
                    {name: "Swimwear", isTitle: true},
                    {name: "Bikini Sets", isTitle: false},
                    {name: "Cover-Ups", isTitle: false}
                ],
                card:
                {
                    title: 'Summer Sale',
                    image: '/images/categories/summer-sale.png'
                },
           
        },
        col2: {
            id: 2,
            subCategories:
                [
                    {name: "Bottoms", isTitle: true},
                    {name: "Leggings", isTitle: false},
                    {name: "Skirts", isTitle: false},
                    {name: "Blouses & Shirts", isTitle: false},
                    {name: "Shorts", isTitle: false},
                    {name: "Jeans", isTitle: false},
                    {name: "Weddings & Events", isTitle: true},
                    {name: "Wedding Dresses", isTitle: false},
                    {name: "Evening Dresses", isTitle: false},
                    {name: "Africa Clothing", isTitle: false},
                    {name: "Cosplay Costumes", isTitle: true},
                ],
                card:
                {
                    title: 'Beach Style',
                    image: '/images/categories/beach-style.png'
                },
           
        },
        col3: {
            id: 3,
            subCategories:
                [
                    {name: "Women's Underwear", isTitle: true},
                    {name: "Pajama Sets", isTitle: false},
                    {name: "Bras", isTitle: false},
                    {name: "Panties", isTitle: false},
                    {name: "Women's Socks", isTitle: false},
                    {name: "Bra & Brief Sets", isTitle: false},
                    {name: "Shapewear", isTitle: false},
                    {name: "Accessories", isTitle: true},
                    {name: "Hair Accessories", isTitle: false},
                    {name: "Sunglasses", isTitle: false},
                    {name: "Blue Light Blocking Glasses", isTitle: false},
                    {name: "Baseball Caps", isTitle: false},
                    {name: "Bucket Hats", isTitle: false},
                    {name: "Belts", isTitle: false},
                ],
                card:
                {
                    title: 'Sleep & Lounge',
                    image: '/images/categories/sleep-lounge.png'
                },
           
        },
        images: [
            //TODO
            {
                id: 1,
                src: '/images/categories/brands/toppies.png'
            },
            {
                id: 2,
                src: '/images/categories/brands/kliou.png'
            },
            {
                id: 3,
                src: '/images/categories/brands/brand-name.png'
            }
        ]
    },
 
    {
     id: 2,
     col1: {
         id: 1,
         subCategories:
             [
                 {name: "Hot Sale", isTitle: true},
                 {name: " Hoodies & Sweatshirts", isTitle: false},
                 {name: "T-Shirts", isTitle: false},
                 {name: "Shirts", isTitle: false},
                 {name: " Casual Shorts", isTitle: false},
                 {name: "Men's Sets", isTitle: false},
                 {name: " Jackets", isTitle: false},
                 {name: "Bottoms", isTitle: true},
                 {name: " Casual Pants", isTitle: false},
                 {name: "Sweatpants", isTitle: false},
                 {name: " Cargo Pants", isTitle: false},
                 {name: "Jeans", isTitle: false},
                 {name: " Harem Pants", isTitle: false},
                 {name: "Shorts", isTitle: false},
             ],
             card:
             {
                 title: 'Summer Sale',
                 image: '/images/categories/summer-sale.png'
             },
        
     },
     col2: {
         id: 2,
         subCategories:
             [
                 {name: "Outerwear & Jackets", isTitle: true},
                 {name: "Jackets", isTitle: false},
                 {name: "Sweaters", isTitle: false},
                 {name: "  Casual Faux Leather", isTitle: false},
                 {name: " Genuine Leather", isTitle: false},
                 {name: " Parkas", isTitle: false},
                 {name: " Down Jackets", isTitle: false},
                 {name: " Suits & Blazer", isTitle: false},
                 {name: "Underwear & Loungewear", isTitle: true},
                 {name: " Boxers", isTitle: false},
                 {name: "Briefs", isTitle: false},
                 {name: " Long Johns", isTitle: false},
                 {name: " Men's Sleep & Lounge", isTitle: false},
                 {name: "  Pajama Sets", isTitle: false},
 
             ],
             card:
             {
                 title: 'Beach Style',
                 image: '/images/categories/beach-style.png'
             },
        
     },
     col3: {
         id: 2,
         subCategories:
             [
                 {name: "Accessories", isTitle: true},
                 {name: " Scarves", isTitle: false},
                 {name: "  Skullies & Beanies", isTitle: false},
                 {name: "  Prescription Glasses", isTitle: false},
                 {name: "  Gloves & Mittens", isTitle: false},
                 {name: "  Belts", isTitle: false},
                 {name: "   Bomber Hats", isTitle: false},
                 {name: "   Fedoras", isTitle: false},
                 {name: "  Berets", isTitle: false},
                 {name: "  Baseball Caps", isTitle: false},
                 {name: "Novelty & Special Use", isTitle: true},
                 {name: "  Cosplay Costumes", isTitle: false},
                 {name: " Stage & Dance Wear", isTitle: false},
                 {name: "  Exotic Apparel", isTitle: false},
             ],
             card:
             {
                 title: 'Beach Style',
                 image: '/images/categories/beach-style.png'
             },
        
         },
    },
 
    {
     id: 3,
     col1: {
         id: 1,
         subCategories:
             [
                 {name: "Mobile Phones", isTitle: true},
                    {name: "Android Phones", isTitle: false},
                    {name: "iPhones", isTitle: false},
                    {name: "Feature Phones", isTitle: false},
                    {name: "Refurbished Phones", isTitle: false},
                    {name: "8GB RAM", isTitle: false},
                    {name: "5G Phones", isTitle: false},
                 {name: "Hot Brands", isTitle: true},
                    {name: " realme", isTitle: false},
                    {name: "OnePlus", isTitle: false},
                    {name: "HUAWEI", isTitle: false},
                    {name: "infinix", isTitle: false},
                    {name: "POCO", isTitle: false},
                    {name: " UMIDIGI", isTitle: false},
             ],
             card:
             {
                 title: 'Summer Sale',
                 image: '/images/categories/summer-sale.png'
             },
        
     },
     col2: {
         id: 2,
         subCategories:
             [
                 {name: "Mobile Phone Accessories", isTitle: true},
                    {name: "Cases & Covers", isTitle: false},
                    {name: "Cables", isTitle: false},
                    {name: "Chargers", isTitle: false},
                    {name: "Power Bank", isTitle: false},
                    {name: "Holders & Stands", isTitle: false},
                    {name: "Screen Protectors", isTitle: false},
                 {name: "Hot Cases & Covers", isTitle: true},
                    {name: "Cases For iPhone", isTitle: false},
                    {name: "Cases For Samsung", isTitle: false},
                    {name: "Cases For Huawei", isTitle: false},
                    {name: "Cases For Xiaomi", isTitle: false},
                    {name: "Cases For Meizu", isTitle: false},
                    {name: "Cases For OPPO", isTitle: false},
             ],
             card:
             {
                 title: 'Beach Style',
                 image: '/images/categories/beach-style.png'
             },
        
     },
     col3: {
         id: 2,
         subCategories:
             [
                 {name: "Featured Accessories", isTitle: true},
                    {name: "Wireless Chargers", isTitle: false},
                    {name: "Car Chargers", isTitle: false},
                    {name: "Lenses", isTitle: false},
                    {name: "Adapters & Converters", isTitle: false},
                 {name: "Mobile Phone Parts", isTitle: true},
                    {name: "Phone LCDs", isTitle: false},
                    {name: "Phone Batteries", isTitle: false},
                    {name: "Housings & Frames", isTitle: false},
                 {name: "Communication Equipments", isTitle: true},
                    {name: "Walkie Talkie", isTitle: false},
                    {name: "Fiber Optic Equipment", isTitle: false},
                    {name: "Communications Antennas", isTitle: false},
             ],
             card:
             {
                 title: 'Beach Style',
                 image: '/images/categories/beach-style.png'
             },
        
         },
    },
 
    {
     id: 4,
     col1: {
         id: 1,
         subCategories:
             [
                 {name: "Components & Peripherals", isTitle: true},
                    {name: "CPUs", isTitle: false},
                    {name: "Graphics Cards", isTitle: false},
                    {name: "Mice", isTitle: false},
                    {name: "Keyboards", isTitle: false},
                 {name: "Laptops", isTitle: true},
                    {name: "Gaming Laptops", isTitle: false},
                    {name: "Ultraslim Laptops", isTitle: false},
                    {name: "Tablets", isTitle: false},
                    {name: "Laptop Accessories", isTitle: false},
                    {name: "Tablet Accessories", isTitle: false},
                    {name: "Laptop Bags & Cases", isTitle: false},  
             ],
             card:
             {
                 title: 'Summer Sale',
                 image: '/images/categories/summer-sale.png'
             },
        
     },
     col2: {
         id: 2,
         subCategories:
             [
                 {name: "Security & Protection", isTitle: true},
                    {name: "Surveillance Items", isTitle: false},
                    {name: "Access Control Systems", isTitle: false},
                    {name: "Smoke Detectors", isTitle: false},
                    {name: "Safety Equipment", isTitle: false},
                    {name: "Alarms & Sensors", isTitle: false},
                    {name: "Door Intercom Systems", isTitle: false},  
                 {name: "Storage Devices", isTitle: true},
                    {name: "USB Flash Drives", isTitle: false},
                    {name: "Memory Cards", isTitle: false},
                    {name: "External Hard Drives", isTitle: false},
                    {name: "HDD Box Enclosures", isTitle: false},
                    {name: "SSDs", isTitle: false},
             ],
             card:
             {
                 title: 'Beach Style',
                 image: '/images/categories/beach-style.png'
             },
        
     },
     col3: {
         id: 2,
         subCategories:
             [
                 {name: "Office Electronics", isTitle: true},
                    {name: "3D Printers", isTitle: false},
                    {name: "3D Printer Parts & Accessories", isTitle: false},
                    {name: " Printers", isTitle: false},
                    {name: "Printer Parts", isTitle: false},
                    {name: "Scanners", isTitle: false},
                    {name: "Ink Cartridges", isTitle: false},
                    {name: " 3D Printing Materials", isTitle: false},
                 {name: "Computer Networking", isTitle: true},
                    {name: "Wireless Routers", isTitle: false},
                    {name: "Network Cards", isTitle: false},
                    {name: "3G Modems", isTitle: false},
                    {name: "Modem-Router Combos", isTitle: false},
                    {name: "Networking Tools", isTitle: false},
             ],
             card:
             {
                 title: 'Beach Style',
                 image: '/images/categories/beach-style.png'
             },
        
         },
    },
 
    {
     id: 5,
     col1: {
         id: 1,
         subCategories:
             [
                 {name: "Accessories & Parts", isTitle: true},
                    {name: "Cables & Adapters", isTitle: false},
                    {name: "Electronic Cigarettes", isTitle: false},
                    {name: "Batteries", isTitle: false},
                    {name: "Chargers", isTitle: false},
                    {name: "Home Electronic Accessories", isTitle: false},
                    {name: " Bags & Cases", isTitle: false},
                 {name: "Home Audio & Video", isTitle: true},
                    {name: "Televisions", isTitle: false},
                    {name: "TV Receivers", isTitle: false},
                    {name: "Projectors", isTitle: false},
                    {name: "Audio Amplifier Boards", isTitle: false},
                    {name: "TV Sticks", isTitle: false},
             ],
             card:
             {
                 title: 'Summer Sale',
                 image: '/images/categories/summer-sale.png'
             },
        
     },
     col2: {
         id: 2,
         subCategories:
             [
                 {name: "Camera & Photo", isTitle: true},
                    {name: "Digital Cameras", isTitle: false},
                    {name: "Camcorders", isTitle: false},
                    {name: "Camera Drones", isTitle: false},
                    {name: "Action Cameras", isTitle: false},
                    {name: "Photo Studio Supplies", isTitle: false},
                    {name: "Camera & Photo Accessories", isTitle: false},
                 {name: "Portable Audio & Video", isTitle: true},
                    {name: "Earphones & Headphones", isTitle: false},
                    {name: "Speakers", isTitle: false},
                    {name: "MP3 Players", isTitle: false},
                    {name: "Microphones", isTitle: false},
                    {name: "VR/AR Devices", isTitle: false},
             ],
             card:
             {
                 title: 'Beach Style',
                 image: '/images/categories/beach-style.png'
             },
        
     },
     col3: {
         id: 2,
         subCategories:
             [
                 {name: "Smart Electronics", isTitle: true},
                    {name: "Wearable Devices", isTitle: false},
                    {name: "Smart Home Appliances", isTitle: false},
                    {name: "Smart Wearable Accessories", isTitle: false},
                    {name: "Smart Remote Controls", isTitle: false},
                    {name: "Smart Watches", isTitle: false},
                    {name: "Smart Wristbands", isTitle: false},
                 {name: "Video Games", isTitle: true},
                    {name: "Handheld Game Players", isTitle: false},
                    {name: "Game Controllers", isTitle: false},
                    {name: "Joysticks", isTitle: false},
                    {name: "Stickers", isTitle: false},
             ],
             card:
             {
                 title: 'Beach Style',
                 image: '/images/categories/beach-style.png'
             },
        
         },
    },
 
    {
     id: 6,
     col1: {
         id: 1,
         subCategories:
             [
                 {name: "Fine Jewelry", isTitle: true},
                    {name: "925 Silver Jewelry", isTitle: false},
                    {name: "Diamond Jewelry", isTitle: false},
                    {name: "Pearl Jewelry", isTitle: false},
                    {name: "Gemstones", isTitle: false},
                    {name: "K-Gold Jewelry", isTitle: false},
                    {name: "Fine Earrings", isTitle: false},
                    {name: "Fine Jewelry Sets", isTitle: false},
                    {name: " Men's Fine Jewelry", isTitle: false},
                 {name: "Wedding & Engagement", isTitle: true},
                    {name: "Bridal Jewelry Sets", isTitle: false},
                    {name: "Engagement Rings", isTitle: false},
                    {name: "Wedding Hair Jewelry", isTitle: false},
             ],
             card:
             {
                 title: 'Summer Sale',
                 image: '/images/categories/summer-sale.png'
             },
        
     },
     col2: {
         id: 2,
         subCategories:
             [
                 {name: "Men's Watches", isTitle: true},
                    {name: "Mechanical Watches", isTitle: false},
                    {name: "Quartz Watches", isTitle: false},
                    {name: " Digital Watches", isTitle: false},
                    {name: "Dual Display Watches", isTitle: false},
                    {name: "Sports Watches", isTitle: false},
                 {name: "Women's Watches", isTitle: true},
                    {name: "Women's Bracelet Watches", isTitle: false},
                    {name: "Elegant Watches", isTitle: false},
                    {name: "Romantic Watches", isTitle: false},
                    {name: "Sports Watches", isTitle: false},
                    {name: "Innovative Watches", isTitle: false},
             ],
             card:
             {
                 title: 'Beach Style',
                 image: '/images/categories/beach-style.png'
             },
        
     },
     col3: {
         id: 2,
         subCategories:
             [
                 {name: "Fashion Jewelry", isTitle: true},
                    {name: "Necklaces & Pendants", isTitle: false},
                    {name: "Trendy Rings", isTitle: false},
                    {name: "Trendy Earrings", isTitle: false},
                    {name: "Bracelets & Bangles", isTitle: false},
                    {name: "Men's Cuff Links", isTitle: false},
                    {name: "Fashion Jewelry Sets", isTitle: false},
                    {name: "Charms", isTitle: false},
                    {name: " Body Jewelry", isTitle: false},
                 {name: "Beads & DIY Jewelry", isTitle: true},
                    {name: "Beads", isTitle: false},
                    {name: " Jewelry Findings & Components", isTitle: false},
                    {name: "Jewelry Packaging & Displays", isTitle: false},
             ],
             card:
             {
                 title: 'Beach Style',
                 image: '/images/categories/beach-style.png'
             },
        
         },
    },
 
    {
     id: 7,
     col1: {
         id: 1,
         subCategories:
             [
                 {name: "Art", isTitle: true},
                    {name: "Scrapbooking & Stamps", isTitle: false},
                    {name: "Fabric & Sewing Supplies", isTitle: false},
                    {name: "Needle Arts & Craft", isTitle: false},
                    {name: "5D DIY Diamond Painting", isTitle: false},             	 
                 {name: "Pet Products", isTitle: true},
                    {name: "Dog Collars", isTitle: false},
                    {name: "Toys", isTitle: false},
                    {name: "Aquariums & Tanks", isTitle: false},
                 {name: "Home Textiles", isTitle: true},
                    {name: "Cushions", isTitle: false},
                    {name: "Curtains", isTitle: false},
                    {name: "Bedding Sets", isTitle: false},
                    {name: "Beach Towels", isTitle: false},
             ],
             card:
             {
                 title: 'Summer Sale',
                 image: '/images/categories/summer-sale.png'
             },
        
     },
     col2: {
         id: 2,
         subCategories:
             [
                 {name: "Celebrations", isTitle: true},
                    {name: "Events & Parties", isTitle: false},
                    {name: "Artificial & Dried Flowers", isTitle: false},
                    {name: "Gift Bags & Boxes", isTitle: false},
                 {name: "Household Items", isTitle: true},
                    {name: "Umbrellas", isTitle: false},
                    {name: "Bathroom Scales", isTitle: false},
                    {name: "Sweepers & Mops", isTitle: false},
                 {name: "Home Storage", isTitle: true},
                    {name: "Storage Boxes & Bins", isTitle: false},
                    {name: "Laundry Baskets", isTitle: false},
                    {name: "Makeup Organizers", isTitle: false},
                 {name: "Furniture", isTitle: true},
                    {name: " Office Furniture", isTitle: false},
                    {name: " Home Furniture", isTitle: false},
             ],
             card:
             {
                 title: 'Beach Style',
                 image: '/images/categories/beach-style.png'
             },
        
     },
     col3: {
         id: 2,
         subCategories:
             [
                 {name: "Kitchen", isTitle: true},
                    {name: "Bakeware", isTitle: false},
                    {name: "Drinkware", isTitle: false},
                    {name: "Kitchen Tools & Gadgets", isTitle: false},
                    {name: "Kitchen Knives & Accessories", isTitle: false},
                 {name: "Home Decor", isTitle: true},
                    {name: "Painting & Calligraphy", isTitle: false},
                    {name: "Wall Stickers", isTitle: false},
                    {name: "Figurines & Miniatures", isTitle: false},
                    {name: "Wall Clocks", isTitle: false},
                 {name: "Garden Supplies", isTitle: true},
                    {name: "Watering & Irrigation Kits", isTitle: false},
                    {name: "Flower Pots & Planters", isTitle: false},
                    {name: "Repellents", isTitle: false},
                    {name: "Outdoor Furniture", isTitle: false},
             ],
             card:
             {
                 title: 'Beach Style',
                 image: '/images/categories/beach-style.png'
             },
        
         },
    },
 
    {
     id: 8,
     col1: {
         id: 1,
         subCategories:
             [
                 {name: "Women's Luggage & Bags", isTitle: true},
                    {name: "Stylish Backpacks", isTitle: false},
                    {name: "Totes", isTitle: false},
                    {name: "Shoulder Bags", isTitle: false},
                    {name: "Wallets", isTitle: false},
                    {name: "Evening Bags", isTitle: false},
                    {name: "Clutches", isTitle: false},
                 {name: "Women's Shoes", isTitle: true},
                    {name: "Women's Sandals", isTitle: false},
                    {name: "Flats", isTitle: false},
                    {name: "High Heels", isTitle: false},
                    {name: " Vulcanized Sneakers", isTitle: false},
                    {name: "House Slippers", isTitle: false},
                    {name: "Boots", isTitle: false},
             ],
             card:
             {
                 title: 'Summer Sale',
                 image: '/images/categories/summer-sale.png'
             },
        
     },
     col2: {
         id: 2,
         subCategories:
             [
                 {name: "Men's Luggage & Bags", isTitle: true},
                    {name: "Men's Backpacks", isTitle: false},
                    {name: "Crossbody Bags", isTitle: false},
                    {name: "Briefcases", isTitle: false},
                    {name: " Luggage & Travel Bags", isTitle: false},
                    {name: "Wallets", isTitle: false},
                 {name: "Men's Shoes", isTitle: true},
                    {name: "Casual Shoes", isTitle: false},
                    {name: "Vulcanized Sneakers", isTitle: false},
                    {name: "Men's Sandals", isTitle: false},
                    {name: "Loafers", isTitle: false},
                    {name: "Flip Flops", isTitle: false},
                    {name: "Boots", isTitle: false},
             ],
             card:
             {
                 title: 'Beach Style',
                 image: '/images/categories/beach-style.png'
             },
        
     },
     col3: {
         id: 2,
         subCategories:
             [
                 {name: "Other Bags & Accessories", isTitle: true},
                    {name: "Kids & Baby Bags", isTitle: false},
                    {name: "Cosmetic Bags & Cases", isTitle: false},
                    {name: "Wallets & Card Holders", isTitle: false},
                    {name: "Luggage Covers", isTitle: false},
                    {name: "Passport Covers", isTitle: false},
                    {name: "Bag Parts & Accessories", isTitle: false},
                 {name: "Bestselling Shoes", isTitle: true},
                    {name: "Wedge Sandals", isTitle: false},
                    {name: "Classic Heels", isTitle: false},
                    {name: "Large-Sized Flats", isTitle: false},
                    {name: "Indoor Slippers", isTitle: false},
                    {name: "Trendy Sneakers", isTitle: false},
                    {name: "Comfortable Sandals", isTitle: false},
             ],
             card:
             {
                 title: 'Beach Style',
                 image: '/images/categories/beach-style.png'
             },
        
         },
    },
 
    {
     id: 9,
     col1: {
         id: 1,
         subCategories:
             [
                 {name: "Hot Categories", isTitle: true},
                    {name: "Dresses", isTitle: false},
                    {name: "Clothing Sets", isTitle: false},
                    {name: "Family Matching Outfits", isTitle: false},
                    {name: "Hoodies & Sweatshirts", isTitle: false},
                    {name: "Sleepwear & Robes", isTitle: false},
                    {name: "Children's Shoes", isTitle: false},
                    {name: "Baby Strollers", isTitle: false},
                 {name: "Baby(0-3years old)", isTitle: true},
                    {name: "Baby Rompers", isTitle: false},
                    {name: "Baby Clothing Set", isTitle: false},
                    {name: "Baby’s First Walkers", isTitle: false},
                    {name: "Baby Accessories", isTitle: false},
                    {name: "Feeding", isTitle: false},
                    {name: "Bedding", isTitle: false},
                    {name: "Baby Teething Items", isTitle: false},
                    {name: " Baby & Toddler Toys", isTitle: false},
             ],
             card:
             {
                 title: 'Summer Sale',
                 image: '/images/categories/summer-sale.png'
             },
        
     },
     col2: {
         id: 2,
         subCategories:
             [
                 {name: "For Girls", isTitle: true},
                    {name: "Dresses", isTitle: false},
                    {name: "Clothing Sets", isTitle: false},
                    {name: "Tops & Tees", isTitle: false},
                    {name: "Outerwear & Coats", isTitle: false},
                    {name: "Sleepwear & Robes", isTitle: false},
                 {name: "For Boys", isTitle: true},
                    {name: "Clothing Sets", isTitle: false},
                    {name: " T-Shirts", isTitle: false},
                    {name: "Outerwear & Coats", isTitle: false},
                    {name: "Jeans", isTitle: false},
                    {name: "Hoodies & Sweatshirts", isTitle: false},
                 {name: "Mother & Baby Items", isTitle: true},
                    {name: "Maternity Clothing", isTitle: false},
                    {name: "Electric breast pumps", isTitle: false},
                    {name: " Baby Souvenirs", isTitle: false},
             ],
             card:
             {
                 title: 'Beach Style',
                 image: '/images/categories/beach-style.png'
             },
        
     },
     col3: {
         id: 2,
         subCategories:
             [
                 {name: "Remote Control", isTitle: true},
                    {name: "RC Helicopters", isTitle: false},
                    {name: "RC Cars", isTitle: false},
                    {name: " RC Quadcopter", isTitle: false},
                 {name: "Building & Construction Toys", isTitle: true},
                    {name: " Blocks", isTitle: false},
                    {name: "Model Building Toys", isTitle: false},
                 {name: "Toys & Hobbies", isTitle: true},
                    {name: " Squeeze Toys", isTitle: false},
                    {name: "Action & Toy Figures", isTitle: false},
                    {name: "Dolls", isTitle: false},
                    {name: "Stuffed & Plush Animals", isTitle: false},
                    {name: "Diecasts & Toy Vehicles", isTitle: false},
                    {name: "Game Collection Cards", isTitle: false},
                    {name: "Stickers", isTitle: false},
             ],
             card:
             {
                 title: 'Beach Style',
                 image: '/images/categories/beach-style.png'
             },
        
         },
    },
 
    {
     id: 10,
     col1: {
         id: 1,
         subCategories:
             [
                 {name: "Water Sports", isTitle: true},
                    {name: " Swimming", isTitle: false},
                    {name: "One-Piece Suits", isTitle: false},
                    {name: "Two-Piece Suits", isTitle: false},
                    {name: "Cover-Ups", isTitle: false},
                    {name: "Men's Swimwear", isTitle: false},
                    {name: "  Children's Swimwear", isTitle: false},
                 {name: "Cycling & Scooters", isTitle: true},
                    {name: " Bicycles", isTitle: false},
                    {name: "Bicycle Frames", isTitle: false},
                    {name: "Bicycle Lights", isTitle: false},
                    {name: "Bicycle Helmets", isTitle: false},
                    {name: "Cycling Jerseys", isTitle: false},
                    {name: "Cycling Eyewear", isTitle: false},
             ],
             card:
             {
                 title: 'Summer Sale',
                 image: '/images/categories/summer-sale.png'
             },
        
     },
     col2: {
         id: 2,
         subCategories:
             [
                 {name: "Sneakers", isTitle: true},
                    {name: " Running Shoes", isTitle: false},
                    {name: "Hiking Shoes", isTitle: false},
                    {name: "Soccer Shoes", isTitle: false},
                    {name: "Skateboarding Shoes", isTitle: false},
                    {name: "Dance Shoes", isTitle: false},
                    {name: "Basketball Shoes", isTitle: false},
                 {name: "Fishing", isTitle: true},
                    {name: "Fishing Reels", isTitle: false},
                    {name: "Fishing Lures", isTitle: false},
                    {name: "Fishing Lines", isTitle: false},
                    {name: "Fishing Rods", isTitle: false},
                    {name: "Rod Combos", isTitle: false},
                    {name: "Fishing Tackle Boxes", isTitle: false},      
             ],
             card:
             {
                 title: 'Beach Style',
                 image: '/images/categories/beach-style.png'
             },
        
     },
     col3: {
         id: 2,
         subCategories:
             [
                 {name: "Other Sports Equipment", isTitle: true},
                    {name: "Camping & Hiking", isTitle: false},
                    {name: "Hiking Jackets", isTitle: false},
                    {name: "Hunting", isTitle: false},
                    {name: "Golf", isTitle: false},
                    {name: "Fitness & Bodybuilding", isTitle: false},
                    {name: "Skiing & Snowboarding", isTitle: false},
                    {name: "Musical Instruments", isTitle: false},
                 {name: "Sportswear", isTitle: true},
                    {name: "Jerseys", isTitle: false},
                    {name: "Hiking Jackets", isTitle: false},
                    {name: "Pants", isTitle: false},
                    {name: "Shorts", isTitle: false},
                    {name: "Sports Bags", isTitle: false},
                    {name: "Sports Accessories", isTitle: false},
             ],
             card:
             {
                 title: 'Beach Style',
                 image: '/images/categories/beach-style.png'
             },
        
         },
    },
 
    {
     id: 11,
     col1: {
         id: 1,
         subCategories:
             [
                 {name: "Hair Weaves", isTitle: true},
                    {name: "Bundles With Closure", isTitle: false},
                    {name: "3/4 Bundles", isTitle: false},
                    {name: "Pre-Colored Weaves", isTitle: false},
                    {name: "Closures", isTitle: false},
                 {name: "Lace Wigs", isTitle: true},
                    {name: "Lace Front Wigs", isTitle: false},
                    {name: " Full Lace Wigs", isTitle: false},
                    {name: "360 Lace Wigs", isTitle: false},
                    {name: "250% Density Lace Wigs", isTitle: false},
                 {name: "Synthetic Hair", isTitle: true},
                    {name: "Synthetic Lace Wigs", isTitle: false},
                    {name: "Synthetic Weaves", isTitle: false},
                    {name: "Hair Braids", isTitle: false},
                    {name: "Synthetic Extensions", isTitle: false},
             ],
             card:
             {
                 title: 'Summer Sale',
                 image: '/images/categories/summer-sale.png'
             },
        
     },
     col2: {
         id: 2,
         subCategories:
             [
                 {name: "Makeup", isTitle: true},
                    {name: "Eyes", isTitle: false},
                    {name: "Lips", isTitle: false},
                    {name: "Face", isTitle: false},
                    {name: "Makeup Tools", isTitle: false},
                 {name: "Health Care", isTitle: true},
                    {name: " Massage & Relaxation", isTitle: false},
                    {name: "Household Health Monitors", isTitle: false},
                    {name: "Chinese Medicine", isTitle: false},
                    {name: "Personal Health Care", isTitle: false},
                 {name: "Skin Care", isTitle: true},
                    {name: " Face", isTitle: false},
                    {name: "Eyes", isTitle: false},
                    {name: "Body", isTitle: false},
                    {name: "Skin Care Tools", isTitle: false},    
             ],
             card:
             {
                 title: 'Beach Style',
                 image: '/images/categories/beach-style.png'
             },
        
     },
     col3: {
         id: 2,
         subCategories:
             [
                 {name: "Nail Art & Tools", isTitle: true},
                    {name: " Gel Nail Polish", isTitle: false},
                    {name: "Nail Drills", isTitle: false},
                    {name: "Nail Dryers", isTitle: false},
                    {name: "Nail Glitter", isTitle: false},
                 {name: "Personal Care", isTitle: true},
                    {name: "Hair Care & Styling", isTitle: false},
                    {name: "Shaving & Hair Removal", isTitle: false},
                    {name: "Oral Hygiene", isTitle: false},
                 {name: "Tattoos & Body Art", isTitle: true},
                    {name: "Tattoo Kits", isTitle: false},  	
                 {name: "Adult Items", isTitle: true},
                    {name: "Condoms", isTitle: false},
                    {name: "Lubricants", isTitle: false},
                    {name: "Vibrators", isTitle: false},
             ],
             card:
             {
                 title: 'Beach Style',
                 image: '/images/categories/beach-style.png'
             },
        
         },
    },
 
    {
     id: 12,
     col1: {
         id: 1,
         subCategories:
             [
                 {name: "Auto Replacement Parts", isTitle: true},
                    {name: " Car Lights", isTitle: false},
                    {name: "Interior Parts", isTitle: false},
                    {name: "Exterior Parts", isTitle: false},
                    {name: "Spark Plugs & Ignition Systems", isTitle: false},
                    {name: " Vehicle Sensors", isTitle: false},
                    {name: "Brake Systems", isTitle: false},
                    {name: "Windshield Wipers", isTitle: false},
                    {name: "Other Replacement Parts", isTitle: false},
                 {name: "Tools, Maintenance & Care", isTitle: true},
                    {name: "Code Readers & Scanning Tools", isTitle: false},
                    {name: "Diagnostic Tools", isTitle: false},
                    {name: "Car Washing Tools", isTitle: false},
                    {name: "Paint Care & Polishes", isTitle: false},
                    {name: " Other Maintenance Products", isTitle: false},
             ],
             card:
             {
                 title: 'Summer Sale',
                 image: '/images/categories/summer-sale.png'
             },
        
     },
     col2: {
         id: 2,
         subCategories:
             [
                 {name: "Car Electronics", isTitle: true},
                    {name: "Car Multimedia Players", isTitle: false},
                    {name: "DVR/Dash Cameras", isTitle: false},
                    {name: "Alarm Systems & Security", isTitle: false},
                    {name: "GPS Trackers", isTitle: false},
                    {name: "Car Radios", isTitle: false},
                    {name: "Car Monitors", isTitle: false},
                    {name: "Car Fridges & Heaters", isTitle: false},
                    {name: "Vehicle Cameras", isTitle: false},
                    {name: "Vehicle GPS Systems", isTitle: false},
                    {name: "Jump Starters", isTitle: false},
                 {name: "Exterior Accessories", isTitle: true},
                    {name: "Car Stickers", isTitle: false},
                    {name: "Car Covers", isTitle: false},
                    {name: "Other Exterior Accessories", isTitle: false},    
             ],
             card:
             {
                 title: 'Beach Style',
                 image: '/images/categories/beach-style.png'
             },
        
     },
     col3: {
         id: 2,
         subCategories:
             [
                 {name: "Motorcycle Accessories & Parts", isTitle: true},
                    {name: "Body & Frame Parts", isTitle: false},
                    {name: "Helmets & Protective Gear", isTitle: false},
                    {name: "Lighting", isTitle: false},
                    {name: " Braking Systems", isTitle: false},
                    {name: "Exhaust Systems", isTitle: false},
                    {name: " Helmets & Headsets", isTitle: false},
                    {name: "Motorcycle Seat Covers", isTitle: false},
                    {name: "Other Motorcycle Accessories", isTitle: false},
                 {name: "Interior Accessories", isTitle: true},
                    {name: "Seat Covers", isTitle: false},
                    {name: "Storage Solutions", isTitle: false},
                    {name: "Car Key Cases", isTitle: false},
                    {name: "Steering Wheel Covers", isTitle: false},
                    {name: "Floor Mats", isTitle: false},
             ],
             card:
             {
                 title: 'Beach Style',
                 image: '/images/categories/beach-style.png'
             },
        
         },
    },
 
    {
     id: 13,
     col1: {
         id: 1,
         subCategories:
             [
                 {name: "Tools", isTitle: true},
                    {name: "Measurement & Analysis Tools", isTitle: false},
                    {name: "Hand Tools", isTitle: false},
                    {name: " Power Tools", isTitle: false},
                    {name: "Garden Tools", isTitle: false},
                    {name: "Tool Sets", isTitle: false},
                 {name: "Indoor Lighting", isTitle: true},
                    {name: "Ceiling Lights", isTitle: false},
                    {name: "Pendant Lights", isTitle: false},
                    {name: "Downlights", isTitle: false},
                    {name: "Chandeliers", isTitle: false},
                    {name: " Wall Lamps", isTitle: false},
                    {name: "Night Lights", isTitle: false},
             ],
             card:
             {
                 title: 'Summer Sale',
                 image: '/images/categories/summer-sale.png'
             },
        
     },
     col2: {
         id: 2,
         subCategories:
             [
                 {name: "Tools", isTitle: true},
                    {name: "Welding Equipment", isTitle: false},
                    {name: "Welding & Soldering Supplies", isTitle: false},
                    {name: "Machine Tools & Accessories", isTitle: false},
                    {name: "Woodworking Machinery", isTitle: false},
                    {name: "Tool Storage Items", isTitle: false},
                 {name: "LED Lighting", isTitle: true},
                    {name: "LED Strips", isTitle: false},
                    {name: "LED Downlights", isTitle: false},
                    {name: "LED Panel Lights", isTitle: false},
                    {name: "LED Spotlights", isTitle: false},
                    {name: "LED Bar Lights", isTitle: false},   
             ],
             card:
             {
                 title: 'Beach Style',
                 image: '/images/categories/beach-style.png'
             },
        
     },
     col3: {
         id: 2,
         subCategories:
             [
                 {name: "Home Improvement", isTitle: true},
                    {name: "Electrical Equipment & Supplies", isTitle: false},
                    {name: "Hardware", isTitle: false},
                    {name: "Kitchen Fixtures", isTitle: false},
                    {name: "Paint Tools", isTitle: false},
                    {name: "Pumps", isTitle: false},
                 {name: "Outdoor Lighting", isTitle: true},
                    {name: "Flashlights", isTitle: false},
                    {name: " Solar Lamps", isTitle: false},
                    {name: "Floodlights", isTitle: false},
                    {name: "String Lights", isTitle: false},
                    {name: "Underwater Lights", isTitle: false},
             ],
             card:
             {
                 title: 'Beach Style',
                 image: '/images/categories/beach-style.png'
             },
        
         },
    },
 ]
 
 
 
 
 
const imagesData = [
    require('../assets/images/carousel/one.jpg'),
    require('../assets/images/carousel/two.jpg'),
    require('../assets/images/carousel/one.jpg'),
    require('../assets/images/carousel/two.jpg')
]

const data = [
    { id: 1, title: 'MEN', image: require('../assets/images/Dashboard/man.png') },
    { id: 2, title: 'WOMEN', image: require('../assets/images/Dashboard/woman.png') },
    { id: 3, title: 'KIDS', image: require('../assets/images/Dashboard/kids.png') },
    { id: 4, title: 'BEAUTY', image: require('../assets/images/Dashboard/beauty.png') }
]

const productsData = [
    {
        id: 1,
        price: 699,
        oldPrice: 999,
        title: 'Men Full Sleeve Sweatshirt',
        image: [require('../assets/images/top_products/yellowSweater.png')],
        colors: [
            {
                color: "#f1c40f",
                price: 699,
                oldPrice: 999,
                images: [require('../assets/images/top_products/yellowSweater.png')]
            },
            {
                color: "red",
                price: 599,
                oldPrice: 899,
                images: [require('../assets/images/top_products/redSweater.png'), require('../assets/images/top_products/redSweaterSecond.png')]
            },
            {
                color: "green",
                price: 799,
                oldPrice: 1999,
                images: [require('../assets/images/top_products/greenSweater.png')]
            },
        ],
        sizes: ['S', 'M', 'L', 'XL'],
        description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus'
    },
    {
        id: 2,
        price: 999,
        oldPrice: 1499,
        title: 'Men Full Sleeve Graphic Print Sweatshirt',
        image: [require('../assets/images/top_products/graphic_sweator.png')],
        colors: [],
        sizes: [],
        description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus'
    },
    {
        id: 3,
        price: 33999,
        oldPrice: 40999,
        title: 'Apple iPad (9th Gen) 64 GB ROM 10.2 inch with Wi-Fi only (Space Grey)',
        image: [require('../assets/images/top_products/apple_tab.png')],
        colors: [],
        sizes: [],
        description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus'
    },
    {
        id: 4,
        price: 869,
        oldPrice: 1567,
        title: 'VEGA Crux OF Motorbike Helmet (Black)',
        image: [require('../assets/images/top_products/helmet.png')],
        colors: [],
        sizes: [],
        description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
    },
    {
        id: 5,
        price: 599,
        oldPrice: 1299,
        title: 'Sony DSLR',
        image: [require('../assets/images/top_products/cam1.png'), require('../assets/images/top_products/cam2.png'), require('../assets/images/top_products/cam3.png')],
        colors: [],
        sizes: [],
        description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus'
    }
]

export { imagesData, data, productsData }
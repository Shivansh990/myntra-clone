let products=[

    {
        image: {
           p1: "../images/products/i2/p10.webp",
           g1:"../images/products/i2/g1.webp",
        },

        brand:"HERE&NOW",
        product:"Kids Printed Clothing Set",
        discountPrice:"473",
        orginalPrice:"2365",
        size:"1-2Y",
        rating:{
            rate:"4.4",
            count:"104"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"boy",
        type:"other",
        id:1,
        qty:1,

    },

    {
        image: {
           p1: "../images/products/i1/p1.webp",
           g1:"../images/products/i1/g1.webp",

        },
  
        brand:"The Derma co.",
        product:"Sali-Cinamide Face Serum 30ml",
        discountPrice:"527",
        orginalPrice:"599",
        size:"20-30 ML" ,
        rating:{
            rate:"4.4",
            count:"1.1k"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"women",
        type:"faceserum",
        id:2,
        qty:1,
    },


    {
        image: {
           p1: "../images/products/i3/p2.webp",
           g1:"../images/products/i3/175aae30-df2b-43f8-bbe9-0cda7f5890071692628376827WomenSolidCottonT-shirt1.jpg",
        },

        brand:"max",
        product:"Max Women's Round-Neck T-Shirt",
        discountPrice:"199",
        orginalPrice:"220",
        size:"S",
        rating:{
            rate:"4.0",
            count:"3.1k"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"girl",
        type:"tshirt",
        id:3,
        qty:1,
    },
    {
        image: {
           p1: "../images/products/i4/p3.webp",
           g1:"../images/products/i4/a9a0b46a-4994-4ece-a2ba-4bc60b7790061713164537805CortinaBrownSelf-DesignStretchable2-SeaterSofaCover3.jpg",
        },

        brand:"Cortina",
        product:"Stretchable Sofa Cover",
        discountPrice:"860",
        orginalPrice:"4099",
        size:"2 Seater",
        rating:{
            rate:"4.1",
            count:"50"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"women",
        type:"sofacover",
        id:4,
        qty:1,

    },
    {
        image: {
           p1: "../images/products/i5/p4.webp",
           g1:"../images/products/i5/cab27cfa-76a6-4990-911f-1b1d0f649d5d1685339737613-Indulekha-Bringha-Hair-Oil-50-ml-2821685339737273-5.jpg",
        },

        brand:"indulekha",
        product:"Indulekha Bringha Hair Oil 50 ml",
        discountPrice:"175",
        orginalPrice:"234",
        size:"50ML",
        rating:{
            rate:"4.4",
            count:"7.1k"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"women",
        type:"hairoil",
        id:5,
        qty:1,
    },
    {
        image: {
           p1: "../images/products/i6/p5.webp",
           g1:"../images/products/i6/V18rei4V_2eb3644e688a4a7dbd6df51d3d97f6fd.jpg",
        },

        brand:"LUX",
        product:"Luxurious Sandalwood Body Wash",
        discountPrice:"215",
        orginalPrice:"430",
        size:"750-1000 ML",
        rating:{
            rate:"4.4",
            count:"295"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"men",
        type:"other",
        id:6,
        qty:1,
    },
    {
        image: {
           p1: "../images/products/i7/p6.webp",
           g1:"../images/products/i7/fada191c-08d2-43d4-adc1-3986949249161744892240309-Mamaearth-Rice-Face-Wash-with-Rice-Water--Niacinamide-for-Gl-3.jpg",
        },

        brand:"Mamaearth",
        product:"Rice Face Wash With Rice Water",
        discountPrice:"319",
        orginalPrice:"399",
        size:"125-150 ML",
        rating:{
            rate:"4.6",
            count:"1.1k"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"women",
        type:"facewash",
        id:7,
        qty:1,

    },
    {
        image: {
           p1: "../images/products/i8/p7.webp",
           g1:"../images/products/i8/IDAncbkQ_19befa5d10ff43029f61b1c76af48d93.jpg",
        },

        brand:"Daizy",
        product:"Girls Floral Applique Booties",
        discountPrice:"499",
        orginalPrice:"600",
        size:"3-6M",
        rating:{
            rate:"4.0",
            count:"10"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"girl",
        type:"shoes",
        id:8,
        qty:1,

    },
    {
        image: {
           p1: "../images/products/i9/p8.webp",
           g1:"../images/products/i9/MFexMWWJ_4721b95174e2485d870d6a51eba2b324.jpg",
        },

        brand:"Sasimo",
        product:"Semi-Automatic 3 Fold Umbrellas",
        discountPrice:"674",
        orginalPrice:"4499",
        size:"M",
        rating:{
            rate:"3.6",
            count:"109"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"men",
        type:"other",
        id:9,
        qty:1,

    },
    {
        image: {
           p1: "../images/products/i10/p9.webp",
           g1:"../images/products/i10/jlhUoXmq_4b9407ddf61a4b5d85e3b476beeab2ee.jpg",
        },

        brand:"Sangria",
        product:"Boys Band Collar Kurta Sets",
        discountPrice:"854",
        orginalPrice:"2849",
        size:"11-12Y",
        rating:{
            rate:"2.6",
            count:"7"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"boy",
        type:"kurta",
        id:10,
        qty:1,

    },
    {
        image: {
           p1: "../images/products/i11/p11.webp",
           g1:"../images/products/i11/497fc5d4-c2e7-4353-a3db-a3ded71643411750419503500-Nivea-Men-Cool-Kick-Roll-On-48h-Deodorant-50ml-7421750419502-4.jpg",
        },

        brand:"Nivea",
        product:"Men Cool Kick Roll-On",
        discountPrice:"149",
        orginalPrice:"249",
        size:"0-50 ML",
        rating:{
            rate:"4.5",
            count:"2.3K"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"men",
        type:"other",
        id:11,
        qty:1,

    },
    {
        image: {
           p1: "../images/products/i12/p12.webp",
           g1:"../images/products/i12/Js4C9mYm_34422d90800c4ef7a8e4324c77372375.jpg",
        },

        brand:"NIVUDI",
        product:"Cotton Blend Kurta Sets",
        discountPrice:"493",
        orginalPrice:"2599",
        size:"4-5Y",
        rating:{
            rate:"4.6",
            count:"509"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"girl",
        type:"kurta",
        id:12,
        qty:1,

    },
    {
        image: {
           p1: "../images/products/i13/p13.webp",
           g1:"../images/products/i13/04c99811-acf7-4ef1-a7f1-a8b79f38bb8f1713178399331Ricedewyserum50ml2.jpg",
        },

        brand:"Mamaearth",
        product:"Rice Water Dewy Active Serum",
        discountPrice:"414",
        orginalPrice:"499",
        size:"40-50 ML",
        rating:{
            rate:"4.5",
            count:"655"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"women",
        type:"faceserum",
        id:13,
        qty:1,

    },
    {
        image: {
           p1: "../images/products/i14/p14.webp",
           g1:"../images/products/i14/z39ofCRu_9656c7d42c8c4451b00f3c1e4d25d983.jpg",
        },

        brand:"Closeup",
        product:"2Pcs Clove & Orange Toothpaste",
        discountPrice:"270",
        orginalPrice:"300",
        size:"M",
        rating:{
            rate:"4.7",
            count:"48"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"men",
        type:"other",
        id:14,
        qty:1,

    },
    {
        image: {
           p1: "../images/products/i15/p15.webp",
           g1:"../images/products/i15/3AvbBN0E_e68cc58df80e4c79a8ceac6bfc8fe519.jpg",
        },

        brand:"Lakme",
        product:"Perfect Radiance Facewash ",
        discountPrice:"132",
        orginalPrice:"295",
        size:"90-100gm",
        rating:{
            rate:"4.7",
            count:"336"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"women",
        type:"facewash",
        id:15,
        qty:1,

    },
    {
        image: {
           p1: "../images/products/i16/p16.webp",
           g1:"../images/products/i16/9e94469e-8ef4-4128-984b-5a74f1de14c41747997603682-LOreal-Paris-Revitalift-15-Hyaluronic-Acid-Serum-for-Hydrati-2.jpg",
        },

        brand:"LOreal",
        product:"Revitalift Hyaluronic Serum ",
        discountPrice:"549",
        orginalPrice:"999",
        size:"30-40 ML",
        rating:{
            rate:"4.6",
            count:"8.1k"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"women",
        type:"faceserum",
        id:16,
        qty:1,

    },
    {
        image: {
           p1: "../images/products/i17/p17.webp",
           g1:"../images/products/i17/g.webp",
        },

        brand:"LOreal",
        product:"Hair Color - Ebony Black 200 ",
        discountPrice:"473",
        orginalPrice:"729",
        size:"150-200 ML",
        rating:{
            rate:"4.5",
            count:"1.8k"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"women",
        type:"other",
        id:17,
        qty:1,

    },
    {
        image: {
           p1: "../images/products/i18/p18.webp",
           g1:"../images/products/i18/8CHrRe0s_5625266ad3934ad08490c7c33be96d9b.jpg",
        },

        brand:"LOreal",
        product:"Extraordinary Oil Hair Care Set",
        discountPrice:"1214",
        orginalPrice:"1687",
        size:"Pack",
        rating:{
            rate:"4.5",
            count:"23.9k"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"women",
        type:"hairoil",
        id:18,
        qty:1,

    },
    {
        image: {
           p1: "../images/products/i19/p19.webp",
           g1:"../images/products/i19/fb4f188d-a5c0-416e-9079-52729fc192311743400701171-Dot--Key-Watermelon-Cooling-Sunscreen-SPF-50-PA-With-Hyaluro-3.jpg",
        },

        brand:"DOT & KEY",
        product:"Watermelon Sunscreen SPF50 ",
        discountPrice:"387",
        orginalPrice:"445",
        size:"50-60 ML",
        rating:{
            rate:"4.5",
            count:"14.4k"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"women",
        type:"other",
        id:19,
        qty:1,

    },
    {
        image: {
           p1: "../images/products/i20/p20.webp",
           g1:"../images/products/i16/9e94469e-8ef4-4128-984b-5a74f1de14c41747997603682-LOreal-Paris-Revitalift-15-Hyaluronic-Acid-Serum-for-Hydrati-2.jpg",
        },

        brand:"Cetaphil",
        product:"Bright Healthy Serum",
        discountPrice:"1954",
        orginalPrice:"2299",
        size:"20-30 ML",
        rating:{
            rate:"4.5",
            count:"434"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"women",
        type:"faceserum",
        id:20,
        qty:1,

    },
    {
        image: {
           p1: "../images/products/i21/p21.webp",
           g1:"../images/products/i21/2816f2e6-0332-4e39-96d9-880da8eaad711718599358488TablePlacemats2.jpg",
        },

        brand:"Kuber Industries",
        product:"6 Pieces Textured Table Placemats",
        discountPrice:"574",
        orginalPrice:"2499",
        size:"Onesize",
        rating:{
            rate:"4.5",
            count:"10"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"women",
        type:"other",
        id:21,
        qty:1,

    },
    {
        image: {
           p1: "../images/products/i22/p22.webp",
           g1:"../images/products/i22/3b2dfa2b-6fd5-4d87-988b-e99c9114b3291699425152969LakmeAbsoluteSkinDewHydratingSerumPrimerforFace-28g2.jpg",
        },

        brand:"Lakme",
        product:"Hydrating Serum Primer for Face",
        discountPrice:"799",
        orginalPrice:"800",
        size:"28g",
        rating:{
            rate:"4.3",
            count:"1.4k"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"women",
        type:"faceserum",
        id:22,
        qty:1,

    },
    {
        image: {
           p1: "../images/products/i23/p23.webp",
           g1:"../images/products/i23/fb2bcc27-8852-4b4e-af17-afbf7072c5bc1717819992091-Voyage-Unisex-Black-Lens--Silver-Toned-Round-Sunglasses-with-2.jpg",
        },

        brand:"Voyage",
        product:"Unisex Black Lens",
        discountPrice:"730",
        orginalPrice:"3000",
        size:"S",
        rating:{
            rate:"4.5",
            count:"1.7k"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"men",
        type:"other",
        id:23,
        qty:1,

    },
    {
        image: {
           p1: "../images/products/i24/p24.webp",
           g1:"../images/products/i24/26dea740-3de0-4383-b6b0-ef9b331c583e1744628224323-Lakme-Matte-Sunscreen-SPF-50-PA-Niacinamide-with-UVAB-Protec-4.jpg",
        },

        brand:"Lakme",
        product:"Sun Expert UV Lotion ",
        discountPrice:"281",
        orginalPrice:"625",
        size:"80-100 ML",
        rating:{
            rate:"4.4",
            count:"15.7k"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"women",
        type:"other",
        id:24,
        qty:1,

    },
    {
        image: {
           p1: "../images/products/i25/p25.webp",
           g1:"../images/products/i25/60116269-5da0-47b6-abe2-69fbc931d1641712133015812LakmeDewDramaGelCremewithPro-Ceramides50g6VitEB3FSerum15ml3.jpg",
        },

        brand:"Lakme",
        product:"Day Cream & Face Serum Duo",
        discountPrice:"428",
        orginalPrice:"670",
        size:"Pack",
        rating:{
            rate:"4.0",
            count:"430"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"women",
        type:"faceserum",
        id:25,
        qty:1,
    },
    {
        image: {
           p1: "../images/products/i26/039362b2-fe8f-4c87-b68b-ba96757864951740380570317-ADIDAS-Men-Sports-Shoes-3451740380569954-1.jpg",
           g1:"../images/products/i26/p26.webp",
        },

        brand:"ADIDAS",
        product:"Men Tread Step Trekking Shoes",
        discountPrice:"3629",
        orginalPrice:"6599",
        size:"UK8",
        rating:{
            rate:"4.4",
            count:"27"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"men",
        type:"shoes",
        id:26,
        qty:1,
    },
    {
        image: {
           p1: "../images/products/i27/p27.webp",
           g1:"../images/products/i27/SRmhJSyj_afb9a7537ba346a19f0d528183829c35.jpg",
        },

        brand:"Campus",
        product:"Men Running Sports Shoes",
        discountPrice:"989",
        orginalPrice:"3299",
        size:"UK9",
        rating:{
            rate:"3.9",
            count:"21"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"men",
        type:"shoes",
        id:27,
        qty:1,
    },
    {
        image: {
           p1: "../images/products/i28/c61e92aa-9d16-4fd7-8cad-c100cf3560351735143905559UnisexComfortableRunningShoes1.jpg",
           g1:"../images/products/i28/p28.webp",
        },

        brand:"HRX by Hrithik Roshan",
        product:"Unisex Running Shoes",
        discountPrice:"959",
        orginalPrice:"2999",
        size:"UK6",
        rating:{
            rate:"4.3",
            count:"239"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"boy",
        type:"shoes",
        id:28,
        qty:1,

    },
    {
        image: {
           p1: "../images/products/i29/p29.webp",
           g1:"../images/products/i29/4e9bff75-f9e7-47d7-961c-9d1878cdf0bd1741078979077-ADIDAS-Unisex-Perforated-Cri-Triumph-Cricket-Shoes-574174107-2.jpg",
        },

        brand:"ADIDAS",
        product:"Unisex CriTriumph Cricket Shoes",
        discountPrice:"2299",
        orginalPrice:"4599",
        size:"UK8",
        rating:{
            rate:"4.2",
            count:"23"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"men",
        type:"shoes",
        id:29,
        qty:1,

    },
    {
        image: {
           p1: "../images/products/i30/p30.webp",
           g1:"../images/products/i30/5384869b-e29a-4bdc-a354-1c157f4e18461739354816102-Puma-Unisex-Smash-Sprint-Indoor-Sports-Shoes-245173935481562-2.jpg",
        },

        brand:"Puma",
        product:"Unisex Sports Shoes",
        discountPrice:"1999",
        orginalPrice:"4999",
        size:"UK8",
        rating:{
            rate:"4.3",
            count:"1.8k"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"women",
        type:"shoes",
        id:30,
        qty:1,

    },
    {
        image: {
           p1: "../images/products/i31/p31.webp",
           g1:"../images/products/i31/03ded3fd-e14c-4f3a-ad6d-13efc2e045c01748587561484-Puma-Men-Blue--Green-Cricket-Square-Shoes-1971748587560911-2.jpg",
        },

        brand:"Puma",
        product:"Men Cricket Square Shoe",
        discountPrice:"2099",
        orginalPrice:"4999",
        size:"UK10",
        rating:{
            rate:"4.3",
            count:"755"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"men",
        type:"shoes",
        id:31,
        qty:1,
    },
    {
        image: {
           p1: "../images/products/i32/p32.webp",
           g1:"../images/products/i32/5a8b3a7d-3afd-41a1-9f51-771d532ebee91735144283775UnisexComfortableRunningShoes2.jpg",
        },

        brand:"HRX by Hrithik Roshan",
        product:"Unisex Running Shoes",
        discountPrice:"959",
        orginalPrice:"2999",
        size:"UK11",
        rating:{
            rate:"4.4",
            count:"60"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"boy",
        type:"shoes",
        id:32,
        qty:1,
    },
    {
        image: {
           p1: "../images/products/i33/p33.webp",
           g1:"../images/products/i33/2d2a6d92-04db-4cbe-a03e-36d023981d691740034331563-Mens-Causal-Tshirt-3471740034331143-2.jpg",
        },

        brand:"Flying Machine",
        product:"Pure Cotton Relaxed T-shirt",
        discountPrice:"558",
        orginalPrice:"1299",
        size:"S",
        rating:{
            rate:"4.3",
            count:"52"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"boy",
        type:"tshirt",
        id:33,
        qty:1,
    },
    {
        image: {
           p1: "../images/products/i34/p34.webp",
           g1:"../images/products/i34/def86c49-edd7-4342-b67b-82aa5fbb6f051743600659145-US-Polo-Assn-Pure-Cotton-V-Neck-Lounge-T-shirt-8031743600658-2.jpg",
        },

        brand:"U.S. Polo Assn.",
        product:"Pure Cotton Lounge T-shirt",
        discountPrice:"594",
        orginalPrice:"699",
        size:"S",
        rating:{
            rate:"4.4",
            count:"832"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"boy",
        type:"tshirt",
        id:34,
        qty:1,

    },
    {
        image: {
           p1: "../images/products/i35/p35.webp",
           g1:"../images/products/i35/ec61f604-83bf-4d5e-99cf-8fd4b115e0181663221312019LevisMenWhiteSolidRoundNeckLoungeT-shirt5.jpg",
        },

        brand:"Levis",
        product:"Solid Lounge Tshirt",
        discountPrice:"399",
        orginalPrice:"649",
        size:"S",
        rating:{
            rate:"4.3",
            count:"3.1k"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"men",
        type:"tshirt",
        id:35,
        qty:1,

    },
    {
        image: {
           p1: "../images/products/i36/p43.webp",
           g1:"../images/products/i36/7b56bfc0-e5a5-4a62-86ae-337cb835528d1723609135280-Lux-Cozi-Polo-Collar-Lounge-Tshirts-9641723609134836-5.jpg",
        },

        brand:"Lux Cozi",
        product:"Polo Collar Lounge Tshirts",
        discountPrice:"419",
        orginalPrice:"420",
        size:"S",
        rating:{
            rate:"4.1",
            count:"471"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"men",
        type:"tshirt",
        id:36,
        qty:1,

    },
    {
        image: {
           p1: "../images/products/i37/p37.webp",
           g1:"../images/products/i37/09f17526-85b5-410c-a009-a6ecbd5fbd541705648271504USPoloAssnMenGreyMelangeBrandLogoLoungeT-shirt2.jpg",
        },

        brand:"U.S. Polo Assn.",
        product:"Brand Logo Lounge T-shirt",
        discountPrice:"674",
        orginalPrice:"899",
        size:"M",
        rating:{
            rate:"4.0",
            count:"111"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"men",
        type:"tshirt",
        id:37,
        qty:1,

    },
    {
        image: {
           p1: "../images/products/i38/p38.webp",
           g1:"../images/products/i38/fcd8e357-8cd9-4d03-9548-b184a250d37f1621232258515-JJDI-ADAM-TEE-IN-5561621232257718-2.jpg",
        },

        brand:"Jack & Jones",
        product:"Round Neck Lounge T-shirt",
        discountPrice:"384",
        orginalPrice:"699",
        size:"S",
        rating:{
            rate:"3.8",
            count:"36"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"men",
        type:"tshirt",
        id:38,
        qty:1,

    },
    {
        image: {
           p1: "../images/products/i39/p39.webp",
           g1:"../images/products/i39/41f29230-5623-4e50-8210-ec5d67733c501721126084268-HRX-by-Hrithik-Roshan-Men-Tshirts-961721126083754-2.jpg",
        },

        brand:"HRX by Hrithik Roshan",
        product:"Printed Training T-shirt",
        discountPrice:"314",
        orginalPrice:"699",
        size:"S",
        rating:{
            rate:"4.3",
            count:"254"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"boy",
        type:"tshirt",
        id:39,
        qty:1,

    },
    {
        image: {
           p1: "../images/products/i40/p40.webp",
           g1:"../images/products/i40/f99d268f-7c6d-40fa-8c02-db5bd7ce115c1704709708496-Roadster-Men-Tshirts-6371704709708116-2.jpg",
        },

        brand:"Roadster",
        product:"Men Polo Collar Applique T-shirt",
        discountPrice:"389",
        orginalPrice:"1299",
        size:"S",
        rating:{
            rate:"4.2",
            count:"720"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"men",
        type:"tshirt",
        id:40,
        qty:1,

    },
    {
        image: {
           p1: "../images/products/i41/p41.webp",
           g1:"../images/products/i41/338e3e9c-17e4-4c68-bf7a-2265e139afcd1746092451991-CHKOKKO-Printed-T-Shirt--Joggers-Co-Ord-5701746092451596-4.jpg",
        },

        brand:"CHKOKKO",
        product:"T-Shirt & Joggers Co-Ord",
        discountPrice:"1199",
        orginalPrice:"2999",
        size:"3XL",
        rating:{
            rate:"3.9",
            count:"129"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"girl",
        type:"other",
        id:41,
        qty:1,

    },
    {
        image: {
           p1: "../images/products/i42/p42.webp",
           g1:"../images/products/i42/qqxvyEQ5_82d27c35eb254943b377f8377d9944bd.jpg",
        },

        brand:"MISS CLOTHING",
        product:"Women Printed Kurta Set",
        discountPrice:"553",
        orginalPrice:"4999",
        size:"L",
        rating:{
            rate:"4.2",
            count:"2.1k"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"women",
        type:"kurta",
        id:42,
        qty:1,
    },
    {
        image: {
           p1: "../images/products/i43/p45.webp",
           g1:"../images/products/i43/3132d135-d130-474a-80be-0192d219ce0e1617599157891-2.jpg",
        },

        brand:"Libas",
        product:"Kurta with Palazzos & Dupatta",
        discountPrice:"1397",
        orginalPrice:"2799",
        size:"L",
        rating:{
            rate:"4.3",
            count:"14.7k"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"women",
        type:"kurta",
        id:43,
        qty:1,
    },
    {
        image: {
           p1: "../images/products/i44/p44.webp",
           g1:"../images/products/i44/0XSHE7G1_1a54c29fb4b0471086069ed9920e4f70.jpg",
        },

        brand:"Sangria",
        product:"Floral Yoke Design Kurta Set",
        discountPrice:"1942",
        orginalPrice:"6699",
        size:"3XL",
        rating:{
            rate:"4.1",
            count:"226"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"women",
        type:"kurta",
        id:44,
        qty:1,
    },
    {
        image: {
           p1: "../images/products/i45/p46.webp",
           g1:"../images/products/i45/759e931f-a6a0-4c89-ac8c-371ba841a4451711436939617Pinkfloralprintedpanelleda-linekurtawithsolidtrouserandprint4.jpg",
        },

        brand:"Libas",
        product:"Kurta & Trousers With Dupatta",
        discountPrice:"1947",
        orginalPrice:"4499",
        size:"XS",
        rating:{
            rate:"4.2",
            count:"1.5k"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"women",
        type:"kurta",
        id:45,
        qty:1,
    },
     {
        image: {
           p1: "../images/products/i46/p47.webp",
           g1:"../images/products/i46/resxZDJo_265e2ada0677439792003639bab9d78e.jpg",
        },

        brand:"Sangria",
        product:"Floral Printed Kurta Set",
        discountPrice:"1599",
        orginalPrice:"4999",
        size:"XXL",
        rating:{
            rate:"3.6",
            count:"50"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"women",
        type:"kurta",
        id:46,
        qty:1,
    },
     {
        image: {
           p1: "../images/products/i47/p48.webp",
           g1:"../images/products/i45/759e931f-a6a0-4c89-ac8c-371ba841a4451711436939617Pinkfloralprintedpanelleda-linekurtawithsolidtrouserandprint4.jpg",
        },

        brand:"GoSriKi",
        product:"Women Printed Kurta Palazzos",
        discountPrice:"799",
        orginalPrice:"3197",
        size:"L",
        rating:{
            rate:"3.9",
            count:"2.3k"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"women",
        type:"kurta",
        id:47,
        qty:1,
    },
    {
        image: {
           p1: "../images/products/i48/p51.webp",
           g1:"../images/products/i48/9f111af1-1ac0-41d4-8fe5-b760daf833f51734503324739KurtaSets2.jpg",
        },

        brand:"GAYRAA",
        product:"Floral Embroidered Kurta Set",
        discountPrice:"1499",
        orginalPrice:"2999",
        size:"XS",
        rating:{
            rate:"3.9",
            count:"155"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"women",
        type:"kurta",
        id:48,
        qty:1,
    },
    {
        image: {
           p1: "../images/products/i49/p49.webp",
           g1:"../images/products/i49/85ff8ce5-292b-4e7b-9c7a-5c37e6b564521617436169612SweatshirtsLaabhaWomenSweatshirtsLaabhaWomen2.jpg",
        },

        brand:"Laabha",
        product:"Women Colourblocked Tracksuit",
        discountPrice:"1199",
        orginalPrice:"3999",
        size:"M",
        rating:{
            rate:"4.0",
            count:"853"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"girl",
        type:"other",
        id:49,
        qty:1,
    },
    {
        image: {
           p1: "../images/products/i50/p50.webp",
           g1:"../images/products/i50/eff93cbd-2934-454f-814a-b3e52cebafff1711703846610-HRX-by-Hrithik-Roshan-Women-Tracksuits-7201711703845669-2.jpg",
        },

        brand:"HRX by Hrithik Roshan",
        product:"Women Colourblocked Tracksuit",
        discountPrice:"1559",
        orginalPrice:"3899",
        size:"XXL",
        rating:{
            rate:"3.4",
            count:"94"
        },
        offer:function(){
            return Math.round(((parseInt(this.orginalPrice) - parseInt(this.discountPrice)) * 100) / parseInt(this.orginalPrice));
        },
        category:"girl",
        type:"other",
        id:50,
        qty:1,
    },   
]

let currentUser = JSON.parse(localStorage.getItem("user")) || [];
let wishKey = `${currentUser.fullName}_wishlist_${currentUser.number}_${currentUser.password}`;
let wishIndexKey = `${currentUser.fullName}_wishIdx_${currentUser.number}_${currentUser.password}`;
let cartKey = `${currentUser.fullName}_cart_${currentUser.number}_${currentUser.password}`;
let cartIndexKey = `${currentUser.fullName}_cartIdx_${currentUser.number}_${currentUser.password}`

let itemList=document.querySelector('.item-list');
let innerHtmlProduct='';
let intervalMap=new Map();
let allImages = [];
let wishIndex=JSON.parse(localStorage.getItem(wishIndexKey)) || [];
let wishProducts=JSON.parse(localStorage.getItem(wishKey)) || [];
let cartProducts=JSON.parse(localStorage.getItem(cartKey)) || [];
let cartIndex=JSON.parse(localStorage.getItem(cartIndexKey)) || [];
let checkedKey=`${currentUser.fullName}_checked_${currentUser.number}_${currentUser.password}`;
let checkedIndexKey=`${currentUser.fullName}_checkedIdx_${currentUser.number}_${currentUser.password}`;
let checkedProduct=JSON.parse(localStorage.getItem(checkedKey)) || [];
let checkedIndex=JSON.parse(localStorage.getItem(checkedIndexKey)) || [];

function addproduct(products){
    products.forEach((product,index) =>{ 

       
     
        
        allImages[index]=(Object.values(product.image));

       innerHtmlProduct +=`
        <li class="product-list" data-container="${index}">

            

            <div class="item-image" >
            <div class="items-image" data-img_container="${index}">
            <img src= ${allImages[index][0]}  data-imgs="${index}" class="images1 img1"    alt="">
            <img src= ${allImages[index][1]}  data-imgs="${index}" class="images1 img2"    alt="">
           </div>
            <div class="item-ratings">
              <span style="font-size: 12px; font-weight:700; color:#000000">${product.rating.rate}</span>
              <span class="fa-solid fa-star" style="color: #0fa723; font-size:12.5px"></span>
              <span class="totalReview" style=" font-size: 12px; font-weight:700; color:#000000" >${product.rating.count}</span>
            </div>

            
            
            </div>

            <div class="item-info">
              <h3 class="item-brand">${product.brand}</h3>
              <h4 class="item-product">${product.product}</h4>
              <div class="item-price">

                <span>
                  <span class="item-original">Rs. ${product.discountPrice}</span>
                  <span class="item-discount">Rs. ${product.orginalPrice}</span>
                </span> 

                <span class="item-percentage">(${product.offer()}% OFF)</span>

              </div>

              <button class="Addbag" data-addbag="${product.id}"> <img src="../../images/shopping_bag.png"  class="action-img1"
             style="height:20px; margin:0px 0px 0px" <span>ADD TO BAG</span></button>

              <a href="../html/cart.html" class="product-links">
              <button class="Addbag-js" data-addbag-s="${product.id}">GO TO BAG
              <img src="../../images/arrow.png"  class="action-img1"
              style="height:22px;">
              </button></a>
              
            </div>

             <div class="hover-info" style="display:none">
            <div class="buttons" style="display:none" data-btn_container="${index}">
            <button class="btn-1" > </button>
            <button class="btn-2" > </button>
            </div>

            
             <button class="wishlist-btnss" data-wishlist="${product.id}"> <span class="fa-regular fa-heart action-img1" style="font-size:15px; margin:22px 0px 0px"></span> <span>WISHLIST</span></button>

             <button class="wishlist-btnss-js" data-wishlist-s="${product.id}"><img src="../../images/favorite_24dp_EA3323.png"  class="action-img1"
             style="height:22px; margin:0px 0px 0px">
            
            
             <span style="color:white";font-size:16px>WISHLISTED</span></button>

              <h4 class="item-product">Sizes: ${product.size}</h4>
              <div class="item-price">

                <span>
                  <span class="item-original">Rs. ${product.discountPrice}</span>
                  <span class="item-discount">Rs. ${product.orginalPrice}</span>
                </span> 

                <span class="item-percentage">(${product.offer()}% OFF)</span>

              </div>

              <button class="Addbag" data-addbag="${product.id}"> <img src="../../images/shopping_bag.png"  class="action-img1"
             style="height:20px; margin:0px 0px 0px" <span>ADD TO BAG</span></button>

             <a href="../html/cart.html" class="product-links">
              <button class="Addbag-js" data-addbag-s="${product.id}">GO TO BAG
              <img src="../../images/arrow.png"  class="action-img1"
              style="height:22px;">
              </button></a>
              
            </div>
          </li>` 
 });



 itemList.innerHTML=innerHtmlProduct;

 let item=document.querySelectorAll('.product-list');

 item.forEach((value,index)=>{
  
  value.addEventListener('mouseover',()=>{

    value.querySelector(".item-info").style.display = "none";
    value.querySelector(".hover-info").style.display="flex";
    value.querySelector(".item-ratings").style.display="none";
    value.querySelector(".buttons").style.display = "flex";
    carousel(index);
      
  });

  value.addEventListener('mouseout',()=>{

    value.querySelector(".item-info").style.display = "flex";
    value.querySelector(".hover-info").style.display="none";
    value.querySelector(".item-ratings").style.display="block";

     if (intervalMap.has(index)) {
      clearInterval(intervalMap.get(index));
      intervalMap.delete(index);
    }
    value.querySelector(".buttons").style.display = "none";
    let product=document.querySelectorAll(`[data-img_container="${index}"]`)[0];
    let image=product.querySelectorAll('.images1');

    image.forEach((img,index) =>{
    if(index===0){
      img.style.display="block";
    }
    else{
      img.style.display="none";
    }
  });
    
  });
  
 });

 document.querySelectorAll('.wishlist-btnss').forEach((p)=>{
  p.addEventListener('click',()=>{

  let productId=parseInt(p.dataset.wishlist);
  let product=products.find(p=> p.id===productId);

  if(!(JSON.parse(localStorage.getItem("isLogin")))){
    window.location.href=`../html/profile.html`;
  }
  else{
    wishProducts.push(product);
    wishIndex.push(productId);
    localStorage.setItem(wishIndexKey,JSON.stringify(wishIndex));
    localStorage.setItem(wishKey,JSON.stringify(wishProducts));
    syncBtn();
  }
})
});

 document.querySelectorAll('.Addbag').forEach((p)=>{
  p.addEventListener('click',()=>{

  let productId=parseInt(p.dataset.addbag);
  let product=products.find(p=> p.id===productId);

  if(!(JSON.parse(localStorage.getItem("isLogin")))){
    window.location.href=`../html/profile.html`;
  }
  else{
    cartProducts.push(product);
    cartIndex.push(productId);
    checkedProduct.push(product);
    checkedIndex.push(productId);
    localStorage.setItem(cartIndexKey,JSON.stringify(cartIndex));
    localStorage.setItem(cartKey,JSON.stringify(cartProducts));
    localStorage.setItem(checkedIndexKey,JSON.stringify(checkedIndex));
    localStorage.setItem(checkedKey,JSON.stringify(checkedProduct));
    syncBtn();
    syncBtnCart();
    itemLength();
  }
})
});
}


function carousel(idx){ 
let product=document.querySelectorAll(`[data-img_container="${idx}"]`)[0];
let buttons=document.querySelectorAll(`[data-btn_container="${idx}"]`)[0];
if (!buttons) {
    console.warn(`Element with data-btn_container="${idx}" not found.`);
    return; 
}
let btn1=buttons.querySelector('.btn-1');
let btn2=buttons.querySelector('.btn-2');
let startInx=0;
let noOfItem=1;
let image=product.querySelectorAll('.images1');




function showitem(start){
  image.forEach((img,index) =>{
   
    if(index===start){
      img.style.display="block";
    }
    else{
      img.style.display="none";
    }
  });

  if(startInx===0){
    btn1.classList.add('active');
    btn2.classList.remove('active');
  }
  
else{
    btn1.classList.remove('active');
    btn2.classList.add('active');
  }

}

btn1.addEventListener('click',() => {
startInx=0;
showitem(startInx);
});

btn2.addEventListener('click',() => {
startInx=1;
showitem(startInx);
});

function showfront() {
  startInx += noOfItem;
  if (startInx >= image.length) {
    startInx = 0;
  }
  showitem(startInx);
}

btn1.classList.add('active');
showitem(startInx);

if(!intervalMap.has(idx)){
let intervalId= setInterval(showfront, 1000);
intervalMap.set(idx,intervalId);
}
}

function syncBtn(){
    document.querySelectorAll('.wishlist-btnss').forEach((btn1) => {

        const productId = parseInt(btn1.dataset.wishlist);
        const btn2 = document.querySelector(`[data-wishlist-s="${productId}"]`);

        const isWishlisted = wishIndex.includes(productId);

        if (btn1) btn1.style.display = isWishlisted ? 'none' : 'flex'; 
        if (btn2) btn2.style.display = isWishlisted ? 'flex' : 'none';
    });
}

function syncBtnCart(){
    document.querySelectorAll('.Addbag').forEach((btn1) => {

        const productId = parseInt(btn1.dataset.addbag);
        const btn2 = document.querySelectorAll(`[data-addbag-s="${productId}"]`)[0];
        const btn3 = document.querySelectorAll(`[data-addbag-s="${productId}"]`)[1];

        const isaddToCart = cartIndex.includes(productId);

        if (btn1) btn1.style.display = isaddToCart ? 'none' : 'flex';
        if (btn2) btn2.style.display = isaddToCart ? 'flex' : 'none';
        if (btn3) btn3.style.display = isaddToCart ? 'flex' : 'none';

   
    });
}

function itemLength(){

let noOfitem=JSON.parse(localStorage.getItem(cartKey)) || [];
let total=0;
console.log(noOfitem)
noOfitem.forEach(p=>{
  total+=p.qty;
});
if(total==0){
  document.querySelector('.noOfItems').style.display="none";
}
else{
  document.querySelector('.noOfItems').style.display="block";
  document.querySelector('.noOfItems').innerHTML=`${total}`;
}
}


addproduct(products);
syncBtn();
syncBtnCart();
itemLength();

//const { getElementById } = require("domutils");

var dry;
var oily;
var normal;
var productList = [];

function settings(){
   dry = document.getElementById("dry").checked;
   oily = document.getElementById("oily").checked;
   normal = document.getElementById("normal").checked;
   console.log("dry: " + dry);
   console.log("oily: " + oily);
   console.log("normal: " + normal)

}


class product {
    constructor(name, image, link, rating, skintype, issue, producttype, price ){
        this.name = name;
        this.image = image;
        this.link = link;
        this.rating = rating;
        this.skintype = skintype;
        this.issue = issue;
        this.producttype = producttype;
        this.price = price;
    }

    skintypeMatch(skin){
        if(this.skintype.includes(skin)){
         //   console.log("true");
            return true;
        }
        else{
         //   console.log("false");
            return false;
        }
    }

    issueMatch(issue){
        if(this.issue.includes(issue)){
          //  console.log("true");
            return true;
        }
        else{
          //  console.log("false");
            return false;
        }
    }

    productMatch(product){
        if(this.producttype == product){
           // console.log("true");
            return true;
        }
        else{
           // console.log("false");
            return false;
        }
    }

    priceMatch(price){
        if(this.price<=price){
           // console.log("true");
            return true;
        }
        else{
            //console.log("false");
            return false;
        }
    }
}

function FindProduct(skintype ="", issue="", producttype="", price=""){
    goodProducts = [];
    for(i=0;i<productList.length;++i){
        if(!productList[i].skintypeMatch(skintype)){continue}
        if(!productList[i].issueMatch(issue)){continue}
        if(!productList[i].productMatch(producttype)){continue};
        if(!productList[i].priceMatch(price)){continue};
        goodProducts.push(productList[i]);
    }
    if(goodProducts.length!=0){
        for(i=0;i<goodProducts.length;++i){
            document.getElementById("here").innerHTML += "yooo";

            show_image(goodProducts[i].image,100,100,"picture", goodProducts[i].link);
        }
        console.log(goodProducts[0].name);
        return goodProducts;
    }
    else{
        
        console.log("No matching products");
    }
   
  
}

function MakeProducts(){
    productList.push(new product("Kiehl's: Expertly Clear Moisturizer for Acne Prone Skin with Salicylic Acid","Images/KiehlsImage.webp","https://www.sephora.com/product/kiehls-expertly-clear-moisturizer-for-acne-prone-skin-with-salicylic-acid-P509461?icid2=",4.3,["dry"],["acne","cleanser","moisturize"], "cream", 42));
    productList.push(new product("Vanicream Gentle Facial Cleanser with Pump Dispenser - 8 fl oz - Formulated Without Common Irritants for Those with Sensitive Skin","Images/41hWGQ7tbNL._SX679_.jpg","https://www.amazon.com/Vanicream-Gentle-Cleanser-sensitive-Dispenser/dp/B00QY1XZ4W?asc_source=verso&asc_campaign=627cba2361fa2eaab969f60a%7Cehpc8DqarPLxQQAiCCkZjd&asc_refurl=https%3A%2F%2Fwww.allure.com%2Fskin-care%2Fsensitive-skin&ascsubtag=627cba2361fa2eaab969f60a&tag=allure0c3-20",4.7,["sensitive"],["cleanser"], "cream", 8.42));
    productList.push(new product("The Ordinary","Images/s2210607-main-zoom.webp","https://www.sephora.com/product/aha-30-bha-2-peeling-solution-P442563?icid2=",4.2,["oily"],["acne"], "solution", 9.50));
    productList.push(new product("Kiehl's Since 1851 Truly Targeted Acne-Clearing Pimple liquid Patch with Salicylic Acid","Images\s2697787-main-zoom.webp","https://www.sephora.com/product/truly-targeted-acne-clearing-pimple-patch-with-salicylic-acid-P506460?icid2=",4.2,["dry","combination","oily","normal"],["acne"], "solution", 30.00));
    productList.push(new product("Fenty Skin Hydra Vizor Refillable Invisible Face Moisturizer SPF 30 with Niacinamide","Images/s2418887-main-zoom.webp","https://www.sephora.com/product/fenty-skin-rihanna-hydra-vizor-refill-P476485?icid2=",4.1,["oily"],["hyperpigmentation"], "cream", 36.00));
    productList.push(new product("fresh Vitamin C Glow Moisturizer","Images/s1926369-main-zoom.webp","https://www.sephora.com/product/vitamin-nectar-moisture-glow-face-cream-P420158?icid2=",4.0,["oily"],["hyperpigmentation"], "cream", 52));
    productList.push(new product("Dr. Dennis Gross Skincare DermInfusions™ Fill + Repair Serum with Hyaluronic Acid","Images/s2667145-main-zoom.webp","https://www.sephora.com/product/derminfusions-fill-repair-serum-P504631?icid2=",4.4,["dry","oily","normal","combination"],["anti-aging"], "solution", 75));
    productList.push(new product("Youth-Extending Daily Hydrating Fluid SPF 50","Images/s2534279-main-zoom.webp","https://www.paulaschoice.com/resist-youth-extending-daily-hydrating-fluid-spf-50/780-7807.html?p=20FSOFFAQ&utm_source=google&utm_medium=cpc&utm_campaign=na-us|google|shopping|non-brand|new|all|cd&utm_term=710899678&utm_content=144654929951&gad_source=1&gclid=Cj0KCQjw5cOwBhCiARIsAJ5njuZTMMw6RDt0HvlXgeUXRCqapCM5WNt95UEaePVSO6_JSQQJ9uIStoQaAmBxEALw_wcB",4.0,["dry","combination","sensitive"],["uv","moisturize"], "cream", 13.00));
    productList.push(new product("Beach Bum: Face Cream 50","Images/1_SB_USA_SUN_OG_Clear50_FrontIFC_2000x2400_PDP_444104_908x.webp","https://www.sunbum.com/products/clear-50?variant=17554959794243&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&tw_source=google&tw_adid=&tw_campaign=16999297816&gad_source=1&gclid=Cj0KCQjw5cOwBhCiARIsAJ5njubzjB4zLshrhZ1yEVRERRJeirJ7wPpd-1BhV-0Ld8EYY2aeweH7Gc4aAquNEALw_wcB",4.4,["dry","combination","sensitive"],["uv","moisterize"], "cream", 11.59));
    productList.push(new product("Starface Clear As Day SPF 46","Images/41BTu4+ZsTL._SL1000_.jpg","https://www.amazon.com/dp/B0BQZFKLYM?linkCode=ogi&tag=cosmopolitan_auto-append-20&ascsubtag=%5Bartid%7C10049.g.25858453%5Bsrc%7Cwww.google.com%5Bch%7C%5Blt%7Cpsv_t%5Bpid%7C0fe91a27-2919-411c-b937-36a2ada54c46%5Baxid%7C3cf3c941-41e6-4407-a736-81d4f19cf3c6%5Bofsxid%7Cbutton_poc%5Bofsvid%7Clt_t%5Bofsxid%7Csubx_vs_jam%5Bofsvid%7Csubx&btn_ref=srctok-fbd6d017454a1591",4.1,["oily","combination"],["uv"], "cream", 21.99));
    productList.push(new product("Lancôme: Absolue Revitalizing & Brightening Rich Cream","Images/2586923.webp","https://www.ulta.com/p/absolue-revitalizing-brightening-rich-cream-pimprod2025856",4.8,["dry","combination","normal"],["anti-aging","moisturize"], "cream", 280.00));
    productList.push(new product("Summer Fridays: Lip Butter Balm for Hydration & Shine","Images\summer_fridays.png","https://www.sephora.com/product/summer-fridays-lip-butter-balm-P455936?skuId=2495497&icid2=products%20grid:p455936:product",4.4,["dry","combination","normal"],["moisturize"], "solution", 24.00));
    productList.push(new product("Tatcha: The Rice Wash Skin-Softening Cleanser","Images\tatcha.png","https://www.sephora.com/product/tatcha-the-rice-wash-skin-softening-cleanser-P461537?skuId=2382232&icid2=products%20grid:p461537:product",4.5,["dry"],["moisturize", "anti-aging"], "cleanser", 40.00));
    productList.push(new product("Dermalogica: Precleanse Cleansing Oil","Images\dermalogica.png","https://www.sephora.com/product/precleanse-P423148?skuId=2002079&icid2=products%20grid:p423148:product",4.5,["oily","combination","normal"],["acne"], "solution", 49.00));
    productList.push(new product("IT Cosmetics: Confidence in Your Beauty Sleep Night Cream","Images\itCosmetics.webp","https://www.ulta.com/p/confidence-in-your-beauty-sleep-night-cream-pimprod2012938?sku=2557701",4.5,["dry","normal"],["anti-aging"], "cream", 64.00));
    productList.push(new product("Peach & Lily: Power Cocktail Lactic Acid Repair Serum","Images\peachLily.webp","https://www.ulta.com/p/power-cocktail-lactic-acid-repair-serum-pimprod2029784?sku=2589292",4.8,["combination","normal"],["anti-aging"], "solution", 51.00));
    productList.push(new product("Mad Hippie: Triple C Night Cream","Images\madHippie.webp","https://www.ulta.com/p/triple-c-night-cream-pimprod2014586?sku=2564736",4.3,["dry","normal"],["dryness"], "cream", 32.99));


    
    for(i=0;i<productList.length;++i){
    console.log("made products "+ productList[i].name);
}
}

function show_image(src, width, height, alt, link) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    img.onclick = function() {
        window.open(link,"_blank").focus();
    };
    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}


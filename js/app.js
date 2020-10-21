

let basic = $('.basico');
let pricebasic = $('.precio_basico');

let medium = $('.medio');
let pricemedium = $('.precio_medio');

let avanced = $('.avanzado');
let priceavanced = $('.precio_avanzado');

let reforced = $('.reforzado');
let pricereforced = $('.precio_reforzado');

// let precio = function select(e) {
//     console.log(e)
// }
// let targets = precio;

// // Detecto el click
// $('.table').on('click', precio);


basic.on('change', function () {
    // console.log(basic.val())
    switch (basic.val()) {
        case '6 Hrs.':
            pricebasic.text(`$${(6 * 280)} MXN`);
            break;
        
        case '8 Hrs.':
            pricebasic.text(`$${(8 * 280)} MXN`);
            break;
        
        case '10 Hrs.':
            pricebasic.text(`$${(10 * 280)} MXN`);
            break;
        
        case '12 Hrs.':
            pricebasic.text(`$${(12 * 280)} MXN`);
            break;
        
        default:
            break;
    }
})
medium.on('change', function () {
    // console.log(basic.val())
    switch (medium.val()) {
        case '6 Hrs.':
            pricemedium.text(`$${(6 * 374)} MXN`);
            break;
        
        case '8 Hrs.':
            pricemedium.text(`$${(8 * 374)} MXN`);
            break;
        
        case '10 Hrs.':
            pricemedium.text(`$${(10 * 374)} MXN`);
            break;
        
        case '12 Hrs.':
            pricemedium.text(`$${(12 * 374)} MXN`);
            break;
        
        default:
            break;
    }
})
avanced.on('change', function () {
    // console.log(basic.val())
    switch (avanced.val()) {
        case '6 Hrs.':
            priceavanced.text(`$${(6 * 379)} MXN`);
            break;
        
        case '8 Hrs.':
            priceavanced.text(`$${(8 * 379)} MXN`);
            break;
        
        case '10 Hrs.':
            priceavanced.text(`$${(10 * 379)} MXN`);
            break;
        
        case '12 Hrs.':
            priceavanced.text(`$${(12 * 379)} MXN`);
            break;
        
        default:
            break;
    }
})
reforced.on('change', function () {
    // console.log(basic.val())
    switch (reforced.val()) {
        case '6 Hrs.':
            pricereforced.text(`$${(6 * 280)} MXN`);
            break;
        
        case '8 Hrs.':
            pricereforced.text(`$${(8 * 280)} MXN`);
            break;
        
        case '10 Hrs.':
            pricereforced.text(`$${(10 * 280)} MXN`);
            break;
        
        case '12 Hrs.':
            pricereforced.text(`$${(12 * 280)} MXN`);
            break;
        
        default:
            break;
    }
})


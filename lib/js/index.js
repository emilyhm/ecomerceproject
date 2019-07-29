
// $(document).ready(function() {
//     $('.slider').slick({
//         dots: true,
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//     });
// });


// $("#slider > div:gt(0)").hide();

// setInterval(function() {
//     $("#slider > div:first")
//         .fadeOut(1000)
//         .next()
//         .fadeIn(1000)
//         .end()
//         .appendTo('#slider');
// }, 3000);


//starting point at 0
var i = 0;
var images =[];
var time = 7000;

//image list 
images[0] = 'https://www.red.com/SSP%20Applications/Red@SuiteCentric/SCA%20Kilimanjaro/img/products/710-0317_0.png?resizeid=5&resizeh=1200&resizew=1200';
images[1] = 'https://www.usa.canon.com/internet/wcm/connect/us/923abb72-0bd7-4539-b8b7-cf4bbbaaa725/ef-35-14l-usm-d.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_P1KGHJ01L85180AUEPQQJ53034-923abb72-0bd7-4539-b8b7-cf4bbbaaa725-l0UGosv';
images[2] = 'https://ksr-ugc.imgix.net/assets/025/855/992/1c00ede28eba30818fd7f52d1e5e0bad_original.jpg?ixlib=rb-2.1.0&crop=faces&w=1552&h=873&fit=crop&v=1563493272&auto=format&frame=1&q=92&s=c1449771c3012a07d5f4611904b84b44';
images[3] = 'https://cdn.shopify.com/s/files/1/1343/1935/products/mini20d-05.jpg?v=1508813888';
images[4] = 'https://www.onabags.com/media/catalog/product/b/r/brixton_smoke_front_large.jpg';
images[5] = 'https://cdn.shopify.com/s/files/1/0953/0522/products/gnarbox2-productshotA_3f875b46-dbbd-4373-9031-1ce99ca333d4_800x.jpg?v=1554332554';

//change img
function changeImg(){
    document.slider.src = images[i];

    if(i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);

    }

window.onload = changeImg; 

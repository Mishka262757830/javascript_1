"use strict";
//First task
for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        document.write(i + ' - это ноль.');
    } else if (i % 2 == 0) {
        document.write(i + ' - это четное число');
    } else {
        document.write(i + ' - это не четное число');
    }
}
//Second task
const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число
            }
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};
console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);
//Third task
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
products.forEach(function (value){
    value.price = value.price - (value.price / 100) * 15;
});
console.log(products);
//Fourth task
const product = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];
let result = product.filter(function (itemWithPhoto) {
    return 'photos' in itemWithPhoto && itemWithPhoto.photos.length > 0
});
console.log(result);
let res = product.sort(function (minMax1, minMax2) {
    return minMax1.price - minMax2.price;
});
console.log(res);
//Fifth task
for (let i = 0; i <= 10; console.log(i++));
//Sixth task
for (let x = 'x'; x.length <= 20; x += 'x') {
    console.log(x);
}

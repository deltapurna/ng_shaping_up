(function(){
  var app = angular.module('store', ['store-products']);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('ReviewController', function(){
    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  var gems = [
    { name: 'Dodecahedron',
      price: 2,
      description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
      images: [
        {
          full: 'gem-01.gif',
          thumb: 'gem-01.gif'
        }
      ],
      reviews: [
        {
          stars: 5,
          body: "I love this product!",
          author: "joe@thomas.com"
        },
        {
          stars: 1,
          body: "This product sucks",
          author: "tim@hater.com"
        },
      ]
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Pentagonal is one of those gems.',
      images: [
        {
          full: 'gem-03.gif',
          thumb: 'gem-03.gif'
        }
      ],
      reviews: [
        {
          stars: 5,
          body: "I love this product!",
          author: "joe@thomas.com"
        },
        {
          stars: 1,
          body: "This product sucks",
          author: "tim@hater.com"
        },
      ]
    },
  ];
})();

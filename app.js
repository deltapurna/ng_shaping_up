(function(){
  var app = angular.module('store', []);

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

  app.directive('productTitle', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-title.html'
    };
  });

  app.directive('productPanels', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-panels.html',
      controller: function(){
        this.tab = 1;

        this.selectTab = function(setTab){
          this.tab = setTab;
        };

        this.isSelected = function(checkTab){
          return this.tab === checkTab;
        };
      },
      controllerAs: 'panel'
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

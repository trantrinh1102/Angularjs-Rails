angular.module('flapperNews').factory('posts', [function(){
  var o = {
    posts: [
        {title: 'post 1', link: "http://genk.vn/", upvotes: 5, comments: [
            {author: 'Joe', body: 'Cool post!', upvotes: 0},
            {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
          ]},
        {title: 'post 2', link: "http://genk.vn/", upvotes: 2, comments: [
            {author: 'Joe', body: 'Cool post!', upvotes: 0},
            {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
          ]},

      ]
  };
  return o;
}])

angular.module('flapperNews').controller('PostsCtrl', [
  '$scope',
  '$stateParams',
  'posts',
  function($scope, $stateParams, posts){
    $scope.post = posts.posts[$stateParams.id];
    $scope.addComment = function(){
    if($scope.body === '') { return; }
    $scope.post.comments.push({
      body: $scope.body,
      author: 'user',
      upvotes: 0
    });
    $scope.body = '';
  };
  }
  ]);

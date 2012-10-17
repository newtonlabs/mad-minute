(function() {

  window.MathCtrl = function($scope) {
    var problems;
    $scope.rows = 10;
    $scope.cols = 10;
    $scope.problems = [];
    $scope.showAnswer = "hidden";
    problems = function() {
      var bottom, col, row, top, _i, _len, _ref, _results;
      _ref = $scope.numerator;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        row = _ref[_i];
        $scope.problems[row] = [];
        _results.push((function() {
          var _j, _len1, _ref1, _results1;
          _ref1 = $scope.denominator;
          _results1 = [];
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            col = _ref1[_j];
            top = Math.floor(Math.random() * 10);
            bottom = Math.floor(Math.random() * 10);
            _results1.push($scope.problems[row][col] = {
              top: top,
              bottom: bottom,
              answer: top + bottom
            });
          }
          return _results1;
        })());
      }
      return _results;
    };
    $scope.calc = function() {
      var _i, _j, _ref, _ref1, _results, _results1;
      $scope.numerator = (function() {
        _results = [];
        for (var _i = 1, _ref = $scope.rows; 1 <= _ref ? _i <= _ref : _i >= _ref; 1 <= _ref ? _i++ : _i--){ _results.push(_i); }
        return _results;
      }).apply(this);
      $scope.denominator = (function() {
        _results1 = [];
        for (var _j = 1, _ref1 = $scope.cols; 1 <= _ref1 ? _j <= _ref1 : _j >= _ref1; 1 <= _ref1 ? _j++ : _j--){ _results1.push(_j); }
        return _results1;
      }).apply(this);
      return problems();
    };
    $scope.showAnswers = function() {
      return $scope.showAnswer = "";
    };
    $scope.hideAnswers = function() {
      return $scope.showAnswer = "hidden";
    };
    $scope.random = function(row, col) {
      return $scope.problems[row][col];
    };
    return $scope.calc();
  };

}).call(this);

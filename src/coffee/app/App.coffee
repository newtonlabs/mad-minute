window.MathCtrl = ($scope) ->
  $scope.rows = 4
  $scope.cols = 10
  $scope.problems = []
  $scope.showAnswer = "hidden"

  problems = ->
    for row in $scope.numerator
      $scope.problems[row] = []
      for col in $scope.denominator
        top    = Math.floor Math.floor((Math.random()*5)+0);
        bottom = Math.floor Math.floor((Math.random()*10)+0);

        $scope.problems[row][col] = {top: top, bottom: bottom, answer: top * bottom}


  $scope.calc = ->
    $scope.numerator   = [1..$scope.rows]
    $scope.denominator = [1..$scope.cols]
    problems()

  $scope.showAnswers = ->
    $scope.showAnswer = ""

  $scope.hideAnswers = ->
    $scope.showAnswer = "hidden"

  $scope.random = (row, col) ->
    $scope.problems[row][col]

  $scope.calc()


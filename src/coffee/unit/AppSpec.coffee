describe "Finance controllers", ->
  describe "FinanceCtrl", ->
    it "should create testValue model with 5", ->
      scope = {}
      ctrl = new FinanceCtrl(scope)
      expect(scope.testValue).toBe 2
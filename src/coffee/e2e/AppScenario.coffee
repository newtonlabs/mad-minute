describe "PhoneCat App", ->
  describe "Phone list view", ->
    beforeEach ->
      browser().navigateTo "../www/index.html"

    it "should filter the phone list as user types into the search box", ->
      expect(repeater(".phones li").count()).toBe 3
      input("query").enter "nexus"
      expect(repeater(".phones li").count()).toBe 1
      input("query").enter "iphone"
      expect(repeater(".phones li").count()).toBe 1
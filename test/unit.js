describe('Iron Maiden', function(){
    var MainCtrl, $scope;

    beforeEach(module("ironmaidenapp"));
    beforeEach(inject(function (_$rootScope_, _$controller_, _$httpBackend_) {
        $scope = _$rootScope_.$new();
        $httpBackend = _$httpBackend_;
        $controller = _$controller_;

    }));

    it('should print this out', function(){
        console.log("Print this");
    });

});
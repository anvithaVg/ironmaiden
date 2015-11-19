describe('Iron Maiden', function(){
    var MainCtrl, $scope;

    it('should print this out', function(){
        console.log("Print this");
    });

    beforeEach(module('ironMaidenApp'));

    beforeEach(inject(function (_$rootScope_, _$controller_, _$httpBackend_) {
        $scope = _$rootScope_.$new();
        $httpBackend = _$httpBackend_;
        $controller = _$controller_;
    }));

});
describe('LearnJSの2.1.2のテスト', function() {
    it('ploblem viewが表示される', function() {
        learnjs.showView('#problem-1');
        expect($('.view-container .problem-view').length).toEqual(1);
     });
});

describe('LearnJSの2.1.2のテスト', function() {
    it('ploblem viewが表示される', function() {
        learnjs.showView('#problem-1');
        expect($('.view-container .problem-view').length).toEqual(1);
     });
     it('showView()へページの識別子(hash)を渡さない時', function() {
        learnjs.showView('');
        expect($('.view-container .landing-view').length).toEqual(1);
    });

    it('識別子とビューパラメータを渡す', function() {
        spyOn(learnjs, 'problemView');
        learnjs.showView('#problem-42');
        expect(learnjs.problemView).toHaveBeenCalledWith('42');
    });
});

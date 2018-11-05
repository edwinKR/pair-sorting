describe('Bubble Sort', function() {
  beforeAll(function() {
    spyOn(window, 'swap').and.callThrough();
  });

  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it('getting number of swap function counted', function() {
    window.swap();
    expect(window.swap.calls.count()).toEqual(1);
  });

  it('handles alfjadljfan empty array', function() {
    expect(bubbleSort([3, 2, 5, 1, 4])).toEqual([1, 2, 3, 4, 5]);
  });
});

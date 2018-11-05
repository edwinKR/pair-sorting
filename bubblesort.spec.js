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
});

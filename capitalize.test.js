import capitalize from './capitalize';

test('Capitalizes the world hello', () => {
    expect(capitalize("hello")).toBe("Hello");
});

test('Capitalizes the word HeLlo', ()=> {
    expect(capitalize("HeLlo")).toBe("Hello");
});
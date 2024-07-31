import { classNames } from './classNames';

describe('classNames', () => {
    test('with only param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(
            expected,
        );
    });
    test('with mods', () => {
        const expected = 'someClass hovered active';
        expect(
            classNames('someClass', { hovered: true, active: true }, []),
        ).toBe(expected);
    });
    test('with 1 mod and additional class', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(
            classNames('someClass', { hovered: true, active: false }, [
                'class1',
                'class2',
            ]),
        ).toBe(expected);
    });
});

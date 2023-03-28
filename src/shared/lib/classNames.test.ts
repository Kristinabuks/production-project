import { classNames } from './classNames'

describe('classNames', () => {
    test('with only thirst param', () => {
        expect(classNames('someClass')).toBe('someClass')
    })

    test('with additional class', () => {
        expect(classNames('someClass', {}, ['class1'])).toBe('someClass class1')
    })

    test('with mods false', () => {
        expect(classNames('someClass', { hovered: true, scrollabel: false }, ['class1'])).toBe('someClass class1 hovered')
    })

    test('with mods', () => {
        expect(classNames('someClass', { hovered: true, scrollabel: true }, ['class1'])).toBe('someClass class1 hovered scrollabel')
    })
})

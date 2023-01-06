import { Content } from "./content";

test('it should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade!');
});

test('it should not be able to create a notification content with less than 5 charactersx', () => {
    expect(() => new Content('aaa')).toThrow();
});

test('it should not be able to create a notification content with more than 240 charactersx', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
});
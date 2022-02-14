import ErrorRepository from '../app';

test.each([
  [404, 'Not found'],
  [700, 'Unknown error'],
])(
  'Ошибка с кодом %i имеет описание %s',
  (code, expected) => {
    const errorRepo = new ErrorRepository();
    const received = errorRepo.translate(code);
    expect(received).toEqual(expected);
  },
);

const { breakTextIntoSections } = require('../src/utils');

describe('breakTextIntoSections', () => {
  let testCases;

  beforeAll(() => {
    testCases = [
      '@Jukcoutinho    Boa noite! Não há registro de interferência no local. A CET agradece o contato.',
      'Interferência na Av. Washington Luis sentido Bairro, próximo Praça. Comte. Linneu Gomes. Ocupa uma faixa. #ZS.',
      'Rua Palestra Itália sentido único,  entre a Praça Marrey Junior e a Avenida Pompéia, interditada devido a evento. Evite a região.  #ZO',
      '🚧 Das 23h30 às 4h30, Túnel Max Feffer estará interditado, em ambos os sentidos, para realização de serviços de limp… https://t.co/RCOr8Wqrlg',
      'Avenida Ipiranga sentido único, liberada em relação a  manifestação,  junto à Avenida São Luis. \n  #ZC',
      'Avenida Ipiranga sentido único, interditada devido a manifestação,  junto à Avenida São Luis. Evite a região.  #ZC',
      '@augustovrg  Olá, sua informação foi registrada para providências. Agradecemos o contato.',
      'Marginal Pinheiros, sentido Interlagos, pista expressa, liberada faixa da esquerda junto à Ponte Estaiada. #ZS',
      'Avenida Vinte e Três de Maio, sentido Aeroporto, próximo do Viaduto Paraíso, interferência interdita três faixas. Evite a região.  #ZS',
      '🚧 Para realização de manutenção no Viaduto Arapuã, trânsito na Av. Affonso D\'Escragnolle Taunay será parcialmente i… https://t.co/xEQew2q7VB',
      '@Mariodaneula  Olá, sua informação foi registrada para providências. Agradecemos o contato.',
      'Marginal Pinheiros, sentido Interlagos, pista expressa, interdita faixa da esquerda junto à Ponte Estaiada.  #ZS',
      'Marginal Pinheiros sentido Interlagos, pista expressa após Ponte Ary Torres,  duas faixas da esquerda liberadas, em… https://t.co/Dpn2lewLeq',
      'Marginal Pinheiros, sentido Interlagos, pista unica, antes da Ponte do Socorro,  duas faixas liberadas em relação a interferência. #ZS.',
      'Marginal Pinheiros sentido Interlagos, pista expressa,  após Ponte Ary Torres, interferência interdita duas faixas… https://t.co/rSztiFaNKC',
      'Interferência na Marginal Pinheiros, sentido Interlagos, pista unica, antes da Ponte do Socorro, interditada duas faixas. #ZS.',
      '@correfrotinha, Olá, sua informação foi registrada para providências. Agradecemos o contato.',
      '⚽ Por conta da partida entre @Palmeiras x @BocaJrsOficial no @AllianzParque, região da Pompéia tem trânsito monitor… https://t.co/918z5hISCY',
      '@DenisBorges26 Olá, de acordo c/ o CTB Art. 184: https://t.co/iUxuseJfTG Transitar c/ o veículo: III – na faixa ou… https://t.co/XqlCm1ju3I',
      '@DenisBorges26 Ola, veja neste link: https://t.co/fib2IoWNuz a legislação vigente sobre táxis nas faixas e corredor… https://t.co/X6xrKAz3T7',
      'Referente a interferência na Marginal Pinheiros, sentido Castelo Branco, pista expressa, junto a Ponte Itapaiúna, via liberada.',
    ];
  });

  it('should return an array of strings', () => {
    testCases.forEach(testCase => {
      const result = breakTextIntoSections(testCase);
      expect(Array.isArray(result)).toBeTruthy();
      expect(typeof result[0]).toBe('string');
    });
  });

  it('should return an array with at least one element', () => {
    testCases.forEach(testCase => {
      const result = breakTextIntoSections(testCase);
      expect(result.length).toBeGreaterThan(0);
      expect(result[0]).toBeDefined();
    });
  });

  it('should return strings that are limited in size', () => {
    testCases.forEach(testCase => {
      const words = testCase.split(/\s+/);
      const maxWordLength = words.reduce((maxLength, word) =>  Math.max(word.length, maxLength), 0);
      const results = breakTextIntoSections(testCase, 45);

      expect(results.every(result => {
        if (result.length === 1) return result.length <= maxWordLength;
        else return result.length <= 45
      })).toBeTruthy();
    });
  });
});
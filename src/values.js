
exports.types = [
  { name: 'Brain-calc       ', number: '#1' },
  { name: 'Brain-even       ', number: '#2' },
  { name: 'Brain-gcd        ', number: '#3' },
  { name: 'Brain-prime      ', number: '#4' },
  { name: 'Brain-progression', number: '#5' },
];

exports.typesPlain = exports.types.map(g => `${g.name} (${g.number})`);

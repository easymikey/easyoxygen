
exports.games = [
  { number: '#1', name: 'brain-calc' },
  { number: '#2', name: 'brain-even' },
  { number: '#3', name: 'brain-gcd' },
  { number: '#4', name: 'brain-prime' },
  { number: '#5', name: 'brain-progression' },
];

exports.getGame = exports.games.map(game => `${game.number} ${game.name}`);

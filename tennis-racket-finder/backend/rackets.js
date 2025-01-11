const rackets = [
    {
      id: 1,
      brand: 'Wilson',
      model: 'Blade 100 v9 - 2024',
      head_size: 100,
      length: 27,
      weight: 11.2,
      balance: 13,
      swing_weight: 322,
      beam_width: '22.0mm',
      composition: 'Graphite',
      power_level: 'Low-Medium',
      stiffness: 60,
      string_pattern: '16 Mains / 19 Crosses',
      main_skips: '8T, 8H',
      string_tension: '50-60 lbs',
      price: 249.99,
      player_level: 'Intermediate',
      play_style: 'All court player',
      arm_friendly: true,
      player: 'Aryna Sabalenka',
      raiting: '⭐⭐⭐⭐',
      img: 'Image Here'
    },
    {
      id: 2,
      brand: 'Babolat',
      model: 'Pure Aero Rafa Origin',
      head_size: 100,
      length: 27,
      weight: 337,
      balance: 33.99,
      swing_weight: 371,
      beam_width: '23mm / 26mm / 23mm',
      composition: 'Graphite',
      power_level: 'Low-Medium',
      stiffness: 70,
      string_pattern: '16 Mains / 19 Crosses',
      main_skips: '8T,8H',
      string_tension: '50-59 lbs',
      price: 329,
      player_level: 'Advanced',
      play_style: 'Baseline player',
      arm_friendly: true,
      player: 'Rafael Nadal',
      raiting: '⭐⭐⭐⭐',
      img: 'Image Here'
    },
    {
      id: 3,
      brand: 'Head',
      model: 'Speed Pro Legend',
      head_size: 100,
      length: 27,
      weight: 329,
      balance: 32.51,
      swing_weight: 333,
      beam_width: '23mm / 23mm / 23mm',
      composition: 'Auxetic 2/Graphene Inside/Graphite',
      power_level: 'Low',
      stiffness: 60,
      string_pattern: '18 Mains / 20 Crosses',
      main_skips: '8T,10T,8H,10H',
      string_tension: '48-57 lbs',
      price: 269,
      player_level: 'Advanced',
      play_style: 'Baseline player',
      arm_friendly: true,
      player: 'Novak Djokovic',
      raiting: '⭐⭐⭐⭐',
      img: 'Image Here'
    },
    {
      id: 4,
      brand: 'Yonex',
      model: 'EZONE 100',
      head_size: 100,
      length: 27,
      weight: 10.8,
      balance: 12.5,
      swing_weight: 310,
      beam_width: '23.0mm',
      composition: 'Graphite',
      power_level: 'Medium',
      stiffness: 65,
      string_pattern: '16 Mains / 19 Crosses',
      main_skips: '7T, 9H',
      string_tension: '45-60 lbs',
      price: 230,
      player_level: 'Intermediate',
      play_style: 'All court player',
      arm_friendly: true,
      player: 'Nick Kyrgios',
      raiting: '⭐⭐⭐⭐',
      img: 'Image Here'
    },
    {
      id: 5,
      brand: 'Wilson',
      model: 'Pro Staff RF 97 Autograph',
      head_size: 97,
      length: 27,
      weight: 12.6,
      balance: 12,
      swing_weight: 335,
      beam_width: '21.5mm',
      composition: 'Graphite/Basalt',
      power_level: 'Low-Medium',
      stiffness: 65,
      string_pattern: '16 Mains / 19 Crosses',
      main_skips: '7T,9T,7H,9H',
      string_tension: '50-60 lbs',
      price: 249.99,
      player_level: 'Advanced',
      play_style: 'Attacking net player',
      arm_friendly: true,
      player: 'Roger Federer',
      raiting: '⭐⭐⭐⭐',
      img: 'Image Here'
    },
    {
      id: 6,
      brand: 'Babolat',
      model: 'Pure Drive',
      head_size: 100,
      length: 27,
      weight: 10.6,
      balance: 7,
      swing_weight: 320,
      beam_width: '23.0mm',
      composition: 'Graphite',
      power_level: 'Medium',
      stiffness: 67,
      string_pattern: '16 Mains / 19 Crosses',
      main_skips: '8T,8H',
      string_tension: '50-59 lbs',
      price: 229.99,
      player_level: 'Intermediate',
      play_style: 'All court player',
      arm_friendly: true,
      player: 'Garbiñe Muguruza',
      raiting: '⭐⭐⭐⭐',
      img: 'Image Here'
    },
    {
      id: 7,
      brand: 'Head',
      model: 'Gravity Pro',
      head_size: 100,
      length: 27,
      weight: 11.7,
      balance: 6,
      swing_weight: 332,
      beam_width: '20.0mm / 21.0mm / 20.0mm',
      composition: 'Graphene 360+ / Graphite',
      power_level: 'Low-Medium',
      stiffness: 62,
      string_pattern: '18 Mains / 20 Crosses',
      main_skips: '8T,10T,8H,10H',
      string_tension: '48-57 lbs',
      price: 239.99,
      player_level: 'Advanced',
      play_style: 'Baseline player',
      arm_friendly: true,
      player: 'Alexander Zverev',
      raiting: '⭐⭐⭐⭐',
      img: 'Image Here'
    },
    {
      id: 8,
      brand: 'Yonex',
      model: 'VCORE 95',
      head_size: 95,
      length: 27,
      weight: 11.5,
      balance: 7,
      swing_weight: 315,
      beam_width: '21.0mm',
      composition: 'H.M. Graphite',
      power_level: 'Low-Medium',
      stiffness: 61,
      string_pattern: '16 Mains / 20 Crosses',
      main_skips: '7T,9T,7H,9H',
      string_tension: '45-60 lbs',
      price: 239,
      player_level: 'Advanced',
      play_style: 'All court player',
      arm_friendly: true,
      player: 'Stan Wawrinka',
      raiting: '⭐⭐⭐⭐',
      img: 'Image Here'
    },
    {
      id: 9,
      brand: 'Tecnifibre',
      model: 'TFight 305 RS',
      head_size: 98,
      length: 27,
      weight: 11.3,
      balance: 6,
      swing_weight: 320,
      beam_width: '22.5mm',
      composition: 'Graphite / RS Section',
      power_level: 'Medium',
      stiffness: 67,
      string_pattern: '16 Mains / 19 Crosses',
      main_skips: '7T,9T,7H,9H',
      string_tension: '50-55 lbs',
      price: 229,
      player_level: 'Advanced',
      play_style: 'Baseline player',
      arm_friendly: true,
      player: 'Daniil Medvedev',
      raiting: '⭐⭐⭐⭐',
      img: 'Image Here'
    },
    {
      id: 10,
      brand: 'Wilson',
      model: 'Ultra 100 v4',
      head_size: 100,
      length: 27,
      weight: 10.6,
      balance: 10,
      swing_weight: 312,
      beam_width: '24.0mm',
      composition: 'Carbon Fiber Graphite',
      power_level: 'Medium',
      stiffness: 68,
      string_pattern: '16 Mains / 19 Crosses',
      main_skips: '7T,9T,7H,9H',
      string_tension: '50-60 lbs',
      price: 219,
      player_level: 'Intermediate',
      play_style: 'All court player',
      arm_friendly: true,
      player: 'Victoria Azarenka',
      raiting: '⭐⭐⭐⭐',
      img: 'Image Here'
    },
    {
      id: 11,
      brand: 'Babolat',
      model: 'Pure Strike 16x19',
      head_size: 98,
      length: 27,
      weight: 11.3,
      balance: 6,
      swing_weight: 319,
      beam_width: '21.0mm',
      composition: 'Graphite',
      power_level: 'Medium',
      stiffness: 67,
      string_pattern: '16 Mains / 19 Crosses',
      main_skips: '8T,8H',
      string_tension: '50-59 lbs',
      price: 219,
      player_level: 'Advanced',
      play_style: 'Aggressive baseliner',
      arm_friendly: true,
      player: 'Dominic Thiem',
      raiting: '⭐⭐⭐⭐',
      img: 'Image Here'
    },
    {
      id: 12,
      brand: 'Head',
      model: 'Extreme Tour',
      head_size: 98,
      length: 27,
      weight: 10.8,
      balance: 7,
      swing_weight: 317,
      beam_width: '22.0mm / 23.0mm / 21.0mm',
      composition: 'Graphene 360+ / Graphite',
      power_level: 'Medium',
      stiffness: 66,
      string_pattern: '16 Mains / 19 Crosses',
      main_skips: '8T,8H',
      string_tension: '48-57 lbs',
      price: 229,
      player_level: 'Intermediate',
      play_style: 'Spin-friendly baseliner',
      arm_friendly: true,
      player: 'Matteo Berrettini',
      raiting: '⭐⭐⭐⭐',
      img: 'Image Here'
    },
    {
      id: 13,
      brand: 'Yonex',
      model: 'VCORE Pro 97',
      head_size: 97,
      length: 27,
      weight: 11.1,
      balance: 6,
      swing_weight: 315,
      beam_width: '20.0mm / 21.0mm / 20.0mm',
      composition: 'H.M. Graphite',
      power_level: 'Low',
      stiffness: 60,
      string_pattern: '16 Mains / 19 Crosses',
      main_skips: '7T,9T,7H,9H',
      string_tension: '45-60 lbs',
      price: 249,
      player_level: 'Advanced',
      play_style: 'All court player',
      arm_friendly: true,
      player: 'Frances Tiafoe',
      raiting: '⭐⭐⭐⭐',
      img: 'Image Here'
    },
    {
      id: 14,
      brand: 'Prince',
      model: 'Phantom 100X',
      head_size: 100,
      length: 27,
      weight: 11.4,
      balance: 9,
      swing_weight: 310,
      beam_width: '20.5mm',
      composition: 'Textreme / Graphite',
      power_level: 'Low-Medium',
      stiffness: 60,
      string_pattern: '16 Mains / 18 Crosses',
      main_skips: '8T,8H',
      string_tension: '50-60 lbs',
      price: 229,
      player_level: 'Advanced',
      play_style: 'Control-oriented baseliner',
      arm_friendly: true,
      player: 'Lucas Pouille',
      raiting: '⭐⭐⭐⭐',
      img: 'Image Here'
    }
  ];
  
  module.exports = rackets;
  
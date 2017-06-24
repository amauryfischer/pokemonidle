const ROUTES = {
    starter: {
      name: 'pallet town'
    , pokes: ['bulbasaur', 'charmander', 'squirtle']
    , minLevel: 5
    , maxLevel: 5
    , unlocked: true
    }
   , route: {
      name: 'route 1'
    , pokes: ['pidgey', 'rattata']
    , minLevel: 2
    , maxLevel: 5
    , unlocked: true
    }
   , route1: {
      name: 'route 2'
    , pokes: ['pidgey', 'rattata', 'caterpie', 'weedle']
    , minLevel: 3
    , maxLevel: 5
    , unlocked: true
    }
   , special: {
      name: 'virdian forest'
    , pokes: ['caterpie', 'metapod', 'weedle', 'kakuna', 'pikachu']
    , minLevel: 3
    , maxLevel: 6
    , unlocked: true
    }
   , special1: {
      name: 'pewter city'
    , pokes: ['omanyte', 'kabuto', 'aerodactyl']
    , minLevel: 5
    , maxLevel: 5
    , unlocked: true
    }
   , route2: {
      name: 'route 3'
    , pokes: ['pidgey', 'spearow', 'jigglypuff']
    , minLevel: 5
    , maxLevel: 12
    , unlocked: true
    }
   , special2: {
      name: 'mt. moon'
    , pokes: ['zubat', 'clefairy', 'paras', 'geodude']
    , minLevel: 6
    , maxLevel: 12
    , unlocked: true
    }
   , route3: {
      name: 'route 4'
    , pokes: ['rattata', 'spearow', 'ekans', 'sandshrew']
    , minLevel: 6
    , maxLevel: 12
    , unlocked: true
    }
   , route4: {
      name: 'route 5'
    , pokes: ['pidgey', 'oddish', 'meowth', 'mankey', 'bellsprout']
    , minLevel: 10
    , maxLevel: 16
    , unlocked: true
    }
   , route5: {
      name: 'route 6'
    , pokes: ['pidgey',	'pidgeotto', 'oddish', 'meowth', 'mankey', 'abra', 'bellsprout']
    , minLevel: 10
    , maxLevel: 16
    , unlocked: true
    }
   , route6: {
      name: 'route 7'
    , pokes: ['pidgey', 'vulpix', 'oddish', 'meowth', 'mankey', 'growlithe', 'bellsprout']
    , minLevel: 18
    , maxLevel: 22
    , unlocked: true
    }
   , route7: {
      name: 'route 8'
    , pokes: ['pidgey', 'pidgeotto', 'vulpix', 'oddish', 'meowth', 'mankey', 'growlithe', 'abra', 'kadabra', 'bellsprout']
    , minLevel: 15
    , maxLevel: 20
    , unlocked: true
    }
   , special3: {
      name: 'diglett cave'
    , pokes: ['diglett', 'dugtrio']
    , minLevel: 15
    , maxLevel: 31
    , unlocked: true
    }
   , route8: {
      name: 'route 9'
    , pokes: ['spearow', 'ekans', 'sandshrew', 'drowzee']
    , minLevel: 9
    , maxLevel: 17
    , unlocked: true
    }
   , route9: {
      name: 'route 10'
    , pokes: ['spearow', 'ekans', 'sandshrew', 'voltorb']
    , minLevel: 11
    , maxLevel: 17
    , unlocked: true
    }
   , special4: {
      name: 'rock tunnel'
    , pokes: ['zubat', 'machop', 'geodude', 'onix']
    , minLevel: 11
    , maxLevel: 17
    , unlocked: true
    }
   , special5: {
      name: 'power plant'
    , pokes: ['pikachu', 'raichu', 'magnemite', 'magneton', 'voltorb', 'electrode', 'electabuzz']
    , minLevel: 25
    , maxLevel: 35
    , unlocked: true
    }
   , special6: {
      name: 'pokemon tower'
    , pokes: ['gastly',	'haunter', 'cubone']
    , minLevel: 13
    , maxLevel: 18
    , unlocked: true
    }
   , route10: {
      name: 'route 11'
    , pokes: ['spearow', 'ekans', 'sandshrew', 'drowzee']
    , minLevel: 18
    , maxLevel: 25
    , unlocked: true
    }
   , special7: {
      name: 'celadon city'
    , pokes: ['eevee', 'vaporeon', 'flareon', 'jolteon', 'porygon']
    , minLevel: 25
    , maxLevel: 30
    , unlocked: true
    }
   , special8: {
      name: 'saffron city'
    , pokes: ['hitmonlee', 'hitmonchan', 'Lapras']
    , minLevel: 30
    , maxLevel: 30
    , unlocked: true
    }
   , route11: {
      name: 'route 12'
    , pokes: ['pidgey', 'oddish', 'gloom', 'venonat', 'bellsprout', 'weepinbell', 'snorlax']
    , minLevel: 22
    , maxLevel: 30
    , unlocked: true
    }
   , route12: {
      name: 'route 13'
    , pokes: ['pidgey', 'oddish', 'gloom', 'venonat', 'bellsprout', 'weepinbell', 'ditto']
    , minLevel: 22
    , maxLevel: 30
    , unlocked: true
    }
   , route13: {
      name: 'route 14'
    , pokes: ['pidgey', 'pidgeotto', 'oddish', 'gloom', 'venonat', 'bellsprout', 'weepinbell', 'ditto']
    , minLevel: 23
    , maxLevel: 30
    , unlocked: true
    }
   , route14: {
      name: 'route 15'
    , pokes: ['pidgey', 'pidgeotto', 'oddish', 'gloom', 'venonat', 'bellsprout', 'weepinbell', 'ditto']
    , minLevel: 22
    , maxLevel: 30
    , unlocked: true
    }
   , route15: {
      name: 'route 16'
    , pokes: ['rattata', 'raticate', 'spearow', 'doduo', 'snorlax']
    , minLevel: 18
    , maxLevel: 30
    , unlocked: true
    }
   , route16: {
      name: 'route 17'
    , pokes: ['raticate', 'spearow', 'fearow', 'doduo']
    , minLevel: 20
    , maxLevel: 29
    , unlocked: true
    }
   , route17: {
      name: 'route 18'
    , pokes: ['rattata', 'raticate', 'spearow', 'fearow', 'doduo']
    , minLevel: 20
    , maxLevel: 29
    , unlocked: true
    }
   , special9: {
      name: 'safari zone'
    , pokes: ['nidoran f', 'nidorina', 'nidoran m', 'nidorino', 'parasect', 'venonat', 'exeggcute', 'rhyhorn', 'kangaskhan', 'scyther', 'pinsir', 'tauros']
    , minLevel: 22
    , maxLevel: 31
    , unlocked: true
    }
   , special10: {
      name: 'trading center'
    , pokes: ['farfetchd', 'jynx', 'lickitung', 'mr. mime']
    , minLevel: 30
    , maxLevel: 30
    , unlocked: true
    }
   , route18: {
      name: 'route 19'
    , pokes: ['raticate', 'pidgeotto', 'oddish', 'ditto']
    , minLevel: 26
    , maxLevel: 30
    , unlocked: true
    }
   , special11: {
      name: 'seafom island'
    , pokes: ['zubat', 'golbat', 'psyduck', 'golduck', 'slowpoke', 'slowbro', 'seel', 'dewgong']
    , minLevel: 29
    , maxLevel: 37
    , unlocked: true
    }
   , route19: {
      name: 'route 20'
    , pokes: ['raticate', 'pidgeotto', 'weepinbell', 'kadabra']
    , minLevel: 27
    , maxLevel: 31
    , unlocked: true
    }
   , special12: {
      name: 'pkmn mansion'
    , pokes: ['vulpix', 'growlithe', 'ponyta', 'grimer', 'muk', 'koffing', 'weezing', 'magmar']
    , minLevel: 32
    , maxLevel: 40
    , unlocked: true
    }
   , route20: {
      name: 'route 21'
    , pokes: ['pidgey', 'pidgeotto', 'rattata', 'raticate', 'tangela']
    , minLevel: 21
    , maxLevel: 32
    , unlocked: true
    }
   , route21: {
      name: 'route 22'
    , pokes: ['pidgey', 'rattata', 'nidoran f', 'nidoran m']
    , minLevel: 2
    , maxLevel: 5
    , unlocked: true
    }
   , route22: {
      name: 'route 23'
    , pokes: ['spearow', 'fearow', 'ekans', 'arbok', 'sandshrew', 'sandslash', 'ditto']
    , minLevel: 33
    , maxLevel: 43
    , unlocked: true
    }
   , route23: {
      name: 'route 24'
    , pokes: ['caterpie', 'metapod', 'weedle', 'kakuna', 'oddish', 'abra', 'bellsprout']
    , minLevel: 7
    , maxLevel: 14
    , unlocked: true
    }
   , route24: {
      name: 'route 25'
    , pokes: ['caterpie', 'metapod', 'weedle', 'kakuna', 'pidgey', 'oddish', 'abra', 'bellsprout']
    , minLevel: 7
    , maxLevel: 14
    , unlocked: true
    }
   , special13: {
      name: 'victory road'
    , pokes: ['zubat', 'golbat', 'venomoth', 'machop', 'machoke', 'geodude', 'graveler', 'marowak']
    , minLevel: 36
    , maxLevel: 45
    , unlocked: true
    }
   , special14: {
      name: 'cerulean cave'
    , pokes: ['wigglytuff', 'venomoth', 'kadabra', 'dodrio', 'electrode', 'marowak', 'rhydon', 'chansey', 'ditto']
    , minLevel: 51
    , maxLevel: 60
    , unlocked: true
    }
   , special15: {
      name: 'Legendary island'
    , pokes: ['articuno', 'zapdos', 'moltres']
    , minLevel: 50
    , maxLevel: 50
    , unlocked: true
    }
   , special16: {
      name: 'the movie'
    , pokes: ['mewtwo', 'mew']
    , minLevel: 70
    , maxLevel: 70
    , unlocked: true
    }
   , water: {
      name: 'old rod'
    , pokes: ['magikarp']
    , minLevel: 5
    , maxLevel: 5
    , unlocked: true
    }
   , water1: {
      name: 'good rod'
    , pokes: ['psyduck', 'poliwag', 'goldeen', 'tentacool']
    , minLevel: 20
    , maxLevel: 25
    , unlocked: true
    }
   , water2: {
      name: 'super rod'
    , pokes: ['shellder', 'krabby', 'horsea', 'staryu',	'dratini']
    , minLevel: 35
    , maxLevel: 40
    , unlocked: true
    },
    my_test: {
	name: 'my test',
	pokes: ['chikorita','bayleef','meganium'],
	minLevel: 15,
	maxLevel: 15,
	unlocked: true
    },
    my_test2: {
	name: 'arceuse',
	pokes: ['arceus'],
	minLevel: 50,
	maxLevel: 50,
	unlocked: true
    },
    my_test3: {
	name: 'full_sample',
	pokes: ['onix','electrode','voltorb','jynx','quilava','sentret','mareep'],
	minLevel: 1,
	maxLevel: 70,
	unlocked: true
},
my_test4: {
	name: 'full_sample2',
	pokes: ['unown','steelix','mantine','elekid','entei','suicune','raikou','lugia','ho-oh','sceptile','blaziken','marshtomp','aggron','wailord','solrock','salamence','regirock','registeel','regice','latias','latios','kyogre','groudon','rayquaza',
'deoxys','jirachi','turtwig','chimchar','piplup','dialga','palkia','regigigas','giratina','cresselia','darkrai','arceus'],
	minLevel: 1,
	maxLevel: 5,
	unlocked: true
    }
}

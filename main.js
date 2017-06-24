/*
  global: POKEDEX1
  global: POKEDEX2
  global: POKEDEX3
  global: POKEDEX4
  global: POKEDEX5
  global: POKEDEX6
  global: POKEDEX7
  global: POKEDEX8
  global: POKEDE9
  global: POKEDEX10
  global: TYPES
  global: EXP_TABLE
  global: ROUTES
  global: EVOLUTIONS
*/
'use strict'
const POKEDEX = []
for (var i in POKEDEX1[0]) { POKEDEX.push(POKEDEX1[0][i]) }
for (var i in POKEDEX2[0]) { POKEDEX.push(POKEDEX2[0][i]) }
for (var i in POKEDEX3[0]) { POKEDEX.push(POKEDEX3[0][i]) }
for (var i in POKEDEX4[0]) { POKEDEX.push(POKEDEX4[0][i]) }
for (var i in POKEDEX5[0]) { POKEDEX.push(POKEDEX5[0][i]) }
const pokeById = (id) => POKEDEX[id - 1]
const pokeByName = (name) => POKEDEX.filter((el) => el.pokemon[0].Pokemon === name)[0]

const EXP_TABLE = {}
EXP_TABLE["Slow"] = [1, 2, 10, 33, 80, 156, 270, 428, 640, 911, 1250, 1663, 2160, 2746, 3430, 4218, 5120, 6141, 7290, 8573, 10000, 11576, 13310, 15208, 17280, 19531, 21970, 24603, 27440, 30486, 33750, 37238, 40960, 44921, 49130, 53593, 58320, 63316, 68590, 74148, 80000, 86151, 92610, 99383, 106480, 113906, 121670, 129778, 138240, 147061, 156250, 165813, 175760, 186096, 196830, 207968, 219520, 231491, 243890, 256723, 270000, 283726, 297910, 312558, 327680, 343281, 359370, 375953, 393040, 410636, 428750, 447388, 466560, 486271, 506530, 527343, 548720, 570666, 593190, 616298, 640000, 664301, 689210, 714733, 740880, 767656, 795070, 823128, 851840, 881211, 911250, 941963, 973360, 1005446, 1038230, 1071718, 1105920, 1140841, 1176490, 1212873, 999999999999999999]
EXP_TABLE["Medium Slow"] = [1, -53, 9, 57, 96, 135, 179, 236, 314, 419, 560, 742, 973, 1261, 1612, 2035, 2535, 3120, 3798, 4575, 5460, 6458, 7577, 8825, 10208, 11735, 13411, 15244, 17242, 19411, 21760, 24294, 27021, 29949, 33084, 36435, 40007, 43808, 47846, 52127, 56660, 61450, 66505, 71833, 77440, 83335, 89523, 96012, 102810, 109923, 117360, 125126, 133229, 141677, 150476, 159635, 169159, 179056, 189334, 199999, 211060, 222522, 234393, 246681, 259392, 272535, 286115, 300140, 314618, 329555, 344960, 360838, 377197, 394045, 411388, 429235, 447591, 466464, 485862, 505791, 526260, 547274, 568841, 590969, 613664, 636935, 660787, 685228, 710266, 735907, 762160, 789030, 816525, 844653, 873420, 902835, 932903, 963632, 995030, 1027103, 999999999999999999]
EXP_TABLE["Medium Fast"] = [1, 2, 8, 27, 64, 125, 216, 343, 512, 729, 1000, 1331, 1728, 2197, 2744, 3375, 4096, 4913, 5832, 6859, 8000, 9261, 10648, 12167, 13824, 15625, 17576, 19683, 21952, 24389, 27000, 29791, 32768, 35937, 39304, 42875, 46656, 50653, 54872, 59319, 64000, 68921, 74088, 79507, 85184, 91125, 97336, 103823, 110592, 117649, 125000, 132651, 140608, 148877, 157464, 166375, 175616, 185193, 195112, 205379, 216000, 226981, 238328, 250047, 262144, 274625, 287496, 300763, 314432, 328509, 343000, 357911, 373248, 389017, 405224, 421875, 438976, 456533, 474552, 493039, 512000, 531441, 551368, 571787, 592704, 614125, 636056, 658503, 681472, 704969, 729000, 753571, 778688, 804357, 830584, 857375, 884736, 912673, 941192, 970299, 999999999999999999]
EXP_TABLE["Fast"] = [1, 2, 6, 21, 51, 100, 172, 274, 409, 583, 800, 1064, 1382, 1757, 2195, 2700, 3276, 3930, 4665, 5487, 6400, 7408, 8518, 9733, 11059, 12500, 14060, 15746, 17561, 19511, 21600, 23832, 26214, 28749, 31443, 34300, 37324, 40522, 43897, 47455, 51200, 55136, 59270, 63605, 68147, 72900, 77868, 83058, 88473, 94119, 100000, 106120, 112486, 119101, 125971, 133100, 140492, 148154, 156089, 164303, 172800, 181584, 190662, 200037, 209715, 219700, 229996, 240610, 251545, 262807, 274400, 286328, 298598, 311213, 324179, 337500, 351180, 365226, 379641, 394431, 409600, 425152, 441094, 457429, 474163, 491300, 508844, 526802, 545177, 563975, 583200, 602856, 622950, 643485, 664467, 685900, 707788, 730138, 752953, 776239, 999999999999999999]

var currentRouteId = 'starter'

const RNG = (func, chance) => {
  const rnd = Math.random() * 100
  if (rnd < chance) {
    func()
    return true
  }
  return false
}

const cloneJsonObject = (object) => JSON.parse(JSON.stringify(object))
const randomArrayElement = (array) => array[Math.floor(Math.random() * array.length)]

const makeDomHandler = () => {
  const domQuery = (cssQuery) => document.querySelector(cssQuery)
  const $ = domQuery
  const setValue = (domElement, newValue, append) => {
    if (append === undefined) { append = false }
    if (append) {
      domElement.innerHTML += newValue
    }
    if (!append) {
      if (domElement.innerHTML !== newValue) {
        domElement.innerHTML = newValue
      }
    }
  }
  const getValue = (domElement) => {
    return domElement.innerHTML
  }
  const setProp = (domElement, attribute, newValue) => {
      if (domElement[attribute] !== newValue) {
        domElement[attribute] = newValue
      }
  }
  const renderPokeOnContainer = (id, poke, face) => {
    face = face || 'front'
    const pokeStatusAsText = (poke) => {
      var output = ''
      output += 'Attack Speed: ' + poke.attackSpeed()/1000 + '<br>'
      output += '\nAttack: ' + poke.allCombat().attack() + '<br>'
      output += '\nDefense: ' + poke.allCombat().defense() + '<br>'
      return output
    }
    const containerCssQuery = '.container.poke' + '#' + id
    const container = $(containerCssQuery)
    const domElements  = {
      name: container.querySelector('.name')
    , img: container.querySelector('.img')
    , hp: container.querySelector('.hp')
    , hpBar: container.querySelector('.hpBar')
    , expBar: container.querySelector('.expBar')
    , status: container.querySelector('.status')
    }
    setValue(domElements.name, poke.pokeName() + ' (' + poke.level() + ')')
    setProp(domElements.img, 'src', poke.image()[face])
    setValue(domElements.hp, poke.lifeAsText())
    setProp(domElements.hpBar, 'value', poke.life.current())
    setProp(domElements.hpBar, 'max', poke.life.max())
    setProp(domElements.expBar, 'value', Math.floor(poke.currentExp() - poke.thisLevelExp()))
    setProp(domElements.expBar, 'max', poke.nextLevelExp() - poke.thisLevelExp())
    setValue(domElements.status, pokeStatusAsText(poke))
  }
  const healElement = $('#heal')
  const renderHeal = (canHeal) => {
    if (canHeal === true) {
      setProp(healElement, 'disabled', false)
      setValue(healElement, 'Heal!')
        player.healAllPokemons()
        combatLoop.refresh()
        renderView(dom, enemy, player)
    }
    if (typeof canHeal === 'number') {
      setProp(healElement, 'disabled', true)
      setValue(healElement, 'Heal: ' + Math.floor(((canHeal/30000)*100)) + '%')
    }
  }
  const renderPokeList = (id, list, player, deleteEnabledId) => {
    const listCssQuery = '.container.list' + '#' + id
    const listContainer = $(listCssQuery)
    const listElement = listContainer.querySelector('.list')
    setValue(listElement, '')
    const deleteEnabled = deleteEnabledId && $(deleteEnabledId).checked
    list.forEach((poke, index) => {
		const deleteButton = `<a href="#"
            onclick="userInteractions.deletePokemon(${index})"
            style="
              color: red;
              text-decoration: none;
              position: relative;
              left: -3px;
              display: ${ deleteEnabled && 'inline' || 'none' };
            "
          >
            X
          </a>`
		const upButton = index !== 0 ? `<button href="#"
		   onclick="userInteractions.pokemonToUp('${index}')"
            style="display: ${ deleteEnabled && 'inline' || 'none' };"
		   >
		   <i class="fa fa-arrow-up" aria-hidden="true"></i>
		   </button>` : ''
		const downButton = index !== list.length-1 ? `<button href="#"
		   onclick="userInteractions.pokemonToDown('${index}')"
            style="display: ${ deleteEnabled && 'inline' || 'none' };"
		   >
		   <i class="fa fa-arrow-down" aria-hidden="true"></i>
		   </button>` : ''

		setValue(
			listElement
			, `<li>` +
			deleteButton +
			`<a
		   href="#"
		   onclick="userInteractions.changePokemon(${index})"
		   style="color: ${poke.alive()
							&& (poke === player.activePoke()
								&& 'rgb(80, 157, 2)'
								||'rgb(66, 116, 10)')
							|| 'red'
						  };
				  ${poke === player.activePoke()
					&& 'border: solid 1px rgb(139, 142, 4);'
					  +'border-radius: 2px;'
					||''
				  }
				  text-decoration: none;
		  "

		   >
			 ${poke.pokeName()} (${poke.level()})
		   </a>
		   <br>` +
			upButton +
			downButton +
			`<li>`
      , true
      )
    })
  }
  const renderRouteList = (id, routes) => {
    const listCssQuery = '.container.list' + '#' + id
    const listContainer = $(listCssQuery)
    const listElement = listContainer.querySelector('.list')
    setValue(listElement, '')
    Object.keys(routes).forEach((routeId) => {
      const route = routes[routeId]
      setValue(
        listElement
      , `<li>
          <a
          href="#"
          onclick="${route.unlocked
                    && 'userInteractions.changeRoute(\'' + routeId + '\')'
                    || ''
                  }"
          "
            style="
            color: ${route.unlocked
                      && (routeId === currentRouteId
                        && 'rgb(51, 111, 22)'
                        || 'rgb(53, 50, 103)' )
                      || 'rgb(167, 167, 167)'
                    };
            font-weight: ${routeId === currentRouteId
                          && 'bold'
                          || 'normal'
                          };
           "
           >
             ${route.name + ' (' + route.minLevel + '~' + route.maxLevel + ')'}
           </a>
        <li>`
      , true
      )
    })
  }
  const checkConfirmed = (id) => {
    return $(id).checked
  }
  const attackAnimation = (id, direction) => {
    const toAnimate = $('#' + id)
    toAnimate.classList = 'img attacked-' + direction
    window.setTimeout(() => toAnimate.classList = 'img', 80)
  }
  const gameConsoleLog = (text, color) => {
    const logElement = $('#console .console-text')
    if ($('#enableConsole').checked) {
      if (color) {
        logElement.innerHTML = '<span style="color:' + color + ';">' + text + '</span>' + '<br>' + logElement.innerHTML
      } else {
        logElement.innerHTML = text + '<br>' + logElement.innerHTML
      }
    }
    const logAsArray = logElement.innerHTML.split('<br>')
    if (logAsArray.length >= 100) {
      logAsArray.splice(logAsArray.length - 1, 1)
      logElement.innerHTML = logAsArray.join('<br>')
    }
  }
  const gameConsoleClear = () => {
    $('#console .console-text').innerHTML = ''
  }
  const renderBalls = (ballsAmmount) => {
    Object.keys(ballsAmmount).forEach(ballType => {
      $('.ball-ammount.' + ballType).innerHTML = ballsAmmount[ballType]
    })
  }
  const bindEvents = () => {
    $('#heal').addEventListener( 'click'
    , () => { userInteractions.healAllPlayerPokemons() }
    )

    $('#enableDelete').addEventListener( 'click'
    , () => { userInteractions.enablePokeListDelete() }
    )

    $(`#enableCatch`).addEventListener( 'click'
    , () => { userInteractions.changeCatchOption($(`#enableCatch`).checked) }
    )

  }
  bindEvents()
  return {
    renderPokeOnContainer: renderPokeOnContainer
  , renderPokeList: renderPokeList
  , renderRouteList: renderRouteList
  , renderHeal: renderHeal
  , attackAnimation: attackAnimation
  , checkConfirmed: checkConfirmed
  , gameConsoleLog: gameConsoleLog
  , gameConsoleClear: gameConsoleClear
  , renderBalls: renderBalls
  }
}

const makePoke = (pokeModel, initialLevel, initialExp) => {
  var poke = cloneJsonObject(pokeModel)
  /*const expTable = EXP_TABLE[poke.stats[0]["growth rate"]]*/
  const expTable = EXP_TABLE['Medium Slow']
  var exp = initialLevel
              && expTable[initialLevel - 1]
              || initialExp
  const currentLevel = () => {
      return expTable
        .filter((xp_requirement) => xp_requirement <= exp)
        .length

    }
  const statValue = (raw) => {
    return Math.floor(raw)
    /*return Math.floor((((parseInt(raw) + 50) * currentLevel()) / (150)))*/
  }
  const hp = (rawHp) => {
    return Math.floor(((rawHp * currentLevel()) / 40))
  }
  const tryEvolve = () => {
    const pokemonHasEvolution =
      EVOLUTIONS[poke.pokemon[0].Pokemon] !== undefined
    if (pokemonHasEvolution) {
      const evolution = EVOLUTIONS[poke.pokemon[0].Pokemon].to
      const levelToEvolve = Number(EVOLUTIONS[poke.pokemon[0].Pokemon].level)
      if (currentLevel() >= levelToEvolve) {
        poke = cloneJsonObject(pokeByName(evolution))
      }
    }
  }
  const combat = {
    mutable: {
      hp: hp(poke.stats[0].hp) * 3
    }
  , maxHp: () => hp(poke.stats[0].hp) * 3
  , attack: () => statValue((poke.stats[0].attack + poke.stats[0]['sp atk'])/2)
  , defense: () => statValue((poke.stats[0].defense + poke.stats[0]['sp def'])/2)
  , spAttack: () => statValue(poke.stats[0]['sp atk'])
  , spDefense: () => statValue(poke.stats[0]['sp def'])
  , speed: () => statValue(poke.stats[0].speed)
  }
  const poke_interface = {
    pokeName: () => poke.pokemon[0].Pokemon
  , image: () => {
    return {
      front: poke.images.front
    , back: poke.images.back
    }
  }
  , type: () => poke.stats[0].types.text
  , lifeAsText: () => '' + combat.mutable.hp + ' / ' + combat.maxHp()
  , life: {
      current: () => combat.mutable.hp
    , max: () => combat.maxHp()
    }
  , alive: () => combat.mutable.hp > 0
  , giveExp: (ammount) => {
    exp += ammount
    tryEvolve()
  }
  , currentExp: () => exp
  , nextLevelExp: () => expTable[currentLevel()]
  , thisLevelExp: () => expTable[currentLevel() - 1] || 10
  , level: () => currentLevel()
  , attackSpeed: () => {
    const speed = Math.floor(1000 / (500 + combat.speed()) * 800)
    if (speed <= 300) {
      return 300
    } else {
      return speed
    }
  }
  , attack: () => combat.attack()
  , defense: () => combat.defense()
  , takeDamage: (dmgmult,att,def) => {
      const damageToTake = ((att.level()*0.4+2)*att.attack() - (def.defense() * def.level()*0.4)) < 999999999999999999999
                              && Math.ceil(  (((att.level()*0.4+2)*att.attack()))  * (Math.random() * (1.0 - 0.85) + 0.85 * 2) * dmgmult / def.defense())
                              || 1
      combat.mutable.hp -= damageToTake
      console.log(damageToTake)
      return damageToTake
    }
  , baseExp: () => Number(poke.exp[0]['base exp'])
  , heal: () => combat.mutable.hp = combat.maxHp()
  , allCombat: () => combat
  , save: () => [poke.pokemon[0].Pokemon, exp]
  }
  return poke_interface
}
const makeRandomPoke = (level) => makePoke(randomArrayElement(POKEDEX), level)

const makePlayer = () => {
  var pokemons = []
  var activePoke = 0
  var lastHeal = Date.now()

  const ballsRngs = {
    pokeball: 2,
    greatball: 6,
    ultraball: 10,
    secretball: 20,
  }
  var selectedBall = "pokeball"
  var ballsAmmount = {
    pokeball: 20,
    greatball: 0,
    ultraball: 0,
    secretball: 0
  }

  const canHeal = () => {
    if ((Date.now() - lastHeal) > 30000) {
      return true
    }
    else {
      return Date.now() - lastHeal
    }
  }
  const player_interface = {
    addPoke: (poke) => {
      // const playerEqualPokes = pokemons.filter((playerPoke) => (playerPoke.pokeName() === poke.pokeName()))
      // if (playerEqualPokes.length === 0) {
      //   pokemons.push(poke)
      // }
      // if (playerEqualPokes.length !== 0) {
      //   if (poke.level() > playerEqualPokes[0].level()) {
      //     pokemons.splice(pokemons.indexOf(playerEqualPokes[0]), 1)
      //     pokemons.push(poke)
      //   }
      // }
      pokemons.push(poke)
    }
  , setActive: (index) => {
      activePoke = index
    }
  , activePoke: () => pokemons[activePoke]
  , pokemons: () => pokemons
  , canHeal: canHeal
      , reorderPokes: (newList) => {
          pokemons = newList
      }
  , healAllPokemons: () => {
    if (canHeal() === true) {
      pokemons.forEach((poke) => poke.heal())
      lastHeal = Date.now()
      return "healed"
    }
    return canHeal()
    }
  , deletePoke: (index) => {
      if (index !== activePoke) {
        pokemons.splice(index, 1)
        if (index < activePoke) {
          activePoke -= 1
        }
      }
    }
  , savePokes: () => {
      localStorage.setItem(`totalPokes`, pokemons.length)
      pokemons.forEach((poke, index) => {
        localStorage.setItem(`poke${index}`, JSON.stringify(poke.save()))
      })
      localStorage.setItem(`ballsAmmount`, JSON.stringify(ballsAmmount))
    }
  , loadPokes: () => {
      Array(Number(localStorage.getItem(`totalPokes`))).fill(0).forEach((el, index) => {
        const pokeName = JSON.parse(localStorage.getItem('poke'+index))[0]
        const exp = JSON.parse(localStorage.getItem('poke'+index))[1]
        pokemons.push(makePoke(pokeByName(pokeName), false, Number(exp)))
      })
      if (JSON.parse(localStorage.getItem('ballsAmmount'))) {
        ballsAmmount = JSON.parse(localStorage.getItem('ballsAmmount'))
      }

    }
  , selectedBallRNG: () => {
      return ballsRngs[selectedBall]
    }
  , changeSelectedBall: (newBall) => {
      selectedBall = newBall
    }
  , consumeBall: (ballName) => {
     if (ballsAmmount[ballName] > 0) {
       ballsAmmount[ballName] -= 1
       return true
     }
     return false
    }
  , selectedBall: () => selectedBall
  , ballsAmmount: () => ballsAmmount
  , addBalls: (ballName, ammount) => {
      ballsAmmount[ballName] += ammount
    }
  }
  return player_interface
}

const makeEnemy = (starter) => {
  var active = starter

  const generateNew = (recipe) => {
    const poke = pokeByName(randomArrayElement(recipe.pokes))
    return makePoke(poke, recipe.minLevel + Math.round((Math.random() * (recipe.maxLevel - recipe.minLevel))))
  }

  return {
    activePoke: () => active,
    generateNew: (recipe) => active = generateNew(recipe)
  }
}

const makeUserInteractions = (player, enemy, dom, combatLoop) => {
  return {
    changePokemon: (newActiveIndex) => {
      player.setActive(newActiveIndex)
      combatLoop.changePlayerPoke(player.activePoke())
      renderView(dom, enemy, player)
    },
    deletePokemon: (index) => {
      player.deletePoke(index)
      combatLoop.changePlayerPoke(player.activePoke())
      renderView(dom, enemy, player)
      player.savePokes()
    },
    healAllPlayerPokemons: () => {
      if (player.healAllPokemons() === "healed") {
        dom.gameConsoleLog('Full heal!', 'white')
        combatLoop.refresh()
        renderView(dom, enemy, player)
      }
    },
    changeRoute: (newRouteId) => {
      currentRouteId = newRouteId
      enemy.generateNew(ROUTES[newRouteId])
      combatLoop.changeEnemyPoke(enemy.activePoke())
      renderView(dom, enemy, player)
      player.savePokes()
      dom.renderRouteList('areasList', ROUTES)
    },
    enablePokeListDelete: () => {
      dom.renderPokeList('playerPokes', player.pokemons(), player, '#enableDelete')
    },
    changeCatchOption: (newCatchOption) => {
      combatLoop.changeCatch(newCatchOption)
    },
    clearGameData: () => {
      if (dom.checkConfirmed('#confirmClearData')) {
        localStorage.clear()
        window.location.reload(true)
      }
    },
    clearConsole: () => {
      dom.gameConsoleClear()
    },
    changeSelectedBall: (newBall) => {
      player.changeSelectedBall(newBall)
    },
      pokemonToDown: (pokemonIndex) => {
		  const moveToDown = index => arr => [
			  ...arr.slice(0,parseInt(index)),
			  arr[parseInt(index)+1],
			  arr[parseInt(index)],
			  ...arr.slice(parseInt(index)+2)
		  ]

		  const newPokemonList = moveToDown(pokemonIndex)(player.pokemons())
		  player.reorderPokes(newPokemonList)
		  player.savePokes()
		  combatLoop.changePlayerPoke(player.activePoke())
		  renderView(dom, enemy, player)
      },
	  pokemonToUp: (pokemonIndex) => {
		  const moveToUp = index => arr => [
			  ...arr.slice(0,parseInt(index)-1),
			  arr[parseInt(index)],
			  arr[parseInt(index)-1],
			  ...arr.slice(parseInt(index)+1)
		  ]

		  const newPokemonList = moveToUp(pokemonIndex)(player.pokemons())
		  player.reorderPokes(newPokemonList)
		  player.savePokes()
		  combatLoop.changePlayerPoke(player.activePoke())
		  renderView(dom, enemy, player)
	  }

  }
}

const makeCombatLoop = (enemy, player, dom) => {
  var playerActivePoke = player.activePoke()
  var enemyActivePoke = enemy.activePoke()
  var playerTimerId = null
  var enemyTimerId = null
  var catchEnabled = false
  const playerTimer = () => {
    playerTimerId = window.setTimeout(
      () => dealDamage(playerActivePoke, enemyActivePoke, 'player')
    , playerActivePoke.attackSpeed()
    )
  }
  const enemyTimer = () => {
    enemyTimerId = window.setTimeout(
      () => dealDamage(enemyActivePoke, playerActivePoke, 'enemy')
    , enemyActivePoke.attackSpeed()
    )
  }
  const dealDamage = (attacker, defender, who) => {
    if (attacker.alive() && defender.alive()) {
      // both alive
      const damageMultiplier = TYPES[attacker.type()][defender.type()]
      const damage = defender.takeDamage(damageMultiplier,attacker,defender)
      if (who === 'player') {
        dom.attackAnimation('playerImg', 'right')
        dom.gameConsoleLog(attacker.pokeName() + ' Attacked for ' + damage, 'green')
        playerTimer()
      }
      if (who === 'enemy') {
        dom.attackAnimation('enemyImg', 'left')
        dom.gameConsoleLog(attacker.pokeName() + ' Attacked for ' + damage, 'rgb(207, 103, 59)')
        enemyTimer()
      }

      dom.renderPokeOnContainer('enemy', enemy.activePoke())
      dom.renderPokeOnContainer('player', player.activePoke(), 'back')
    }
    if (!attacker.alive() || !defender.alive()) {
      // one is dead
      window.clearTimeout(playerTimerId)
      window.clearTimeout(enemyTimerId)

      if ((who === 'enemy') && !attacker.alive()
      || (who === 'player') && !defender.alive())
      {
        //enemyActivePoke is dead

        if (catchEnabled) {
          dom.gameConsoleLog('Trying to catch ' + enemy.activePoke().pokeName() + '...', 'purple')
          if (player.consumeBall(player.selectedBall())) {
            dom.renderBalls(player.ballsAmmount())
            const rngHappened =
              RNG(
                player.addPoke.bind(null, enemy.activePoke())
              , player.selectedBallRNG()
              )
            if (rngHappened) {
              dom.gameConsoleLog('You caught ' + enemy.activePoke().pokeName() + '!!', 'purple')
              renderView(dom, enemy, player)
            } else {
              dom.gameConsoleLog(enemy.activePoke().pokeName() + ' escaped!!', 'purple')
            }
          }
        }

        const ballsAmmount = Math.floor(Math.random() * 10) + 1
        const baseBall = []
        for (var i=0; i<24; i++) { baseBall.push('pokeball') }
        for (var i=0; i<8; i++) { baseBall.push('greatball') }
        for (var i=0; i<4; i++) { baseBall.push('ultraball') }
        for (var i=0; i<1; i++) { baseBall.push('secretball') }
        const ballName = randomArrayElement(baseBall)
        const rngHappened2 =
          RNG(
            player.addBalls.bind(
              null,
              ballName,
              ballsAmmount
            )
          , 10
          )
        if (rngHappened2) {
          dom.gameConsoleLog('You found ' + ballsAmmount + ' ' + ballName + 's!!', 'purple')
          dom.renderBalls(player.ballsAmmount())
        }

        const beforeExp = player.pokemons().map((poke) => poke.level())
        const expToGive = (enemyActivePoke.baseExp() / 16) + (enemyActivePoke.level() * 3)
        playerActivePoke.giveExp(expToGive)
        dom.gameConsoleLog(playerActivePoke.pokeName() + ' won ' + Math.floor(expToGive) + 'xp', 'rgb(153, 166, 11)')
        player.pokemons().forEach((poke) => poke.giveExp((enemyActivePoke.baseExp() / 100) + (enemyActivePoke.level() / 10)))
        const afterExp = player.pokemons().map((poke) => poke.level())

        if (beforeExp.join('') !== afterExp.join('')) {
          dom.renderPokeList('playerPokes', player.pokemons(), player, '#enableDelete')
        }

        player.savePokes()
        enemy.generateNew(ROUTES[currentRouteId])
        enemyActivePoke = enemy.activePoke()
        enemyTimer()
        playerTimer()
        dom.renderPokeOnContainer('player', player.activePoke(), 'back')
      } else {
        dom.gameConsoleLog(playerActivePoke.pokeName() + ' Fainted! ')
        const playerLivePokesIndexes = player.pokemons().filter((poke, index) => {
          if (poke.alive()) {
            return true
          }
        })
        if (playerLivePokesIndexes.length > 0) {
          player.setActive(player.pokemons().indexOf(playerLivePokesIndexes[0]))
          playerActivePoke = player.activePoke()
          dom.gameConsoleLog('Go ' + playerActivePoke.pokeName() + '!')
          refresh()
        }
        dom.renderPokeList('playerPokes', player.pokemons(), player, '#enableDelete')
      }
      dom.renderPokeOnContainer('enemy', enemy.activePoke())
    }
  }
  const init = () => {
    playerTimer()
    enemyTimer()
  }
  const stop = () => {
    window.clearTimeout(playerTimerId)
    window.clearTimeout(enemyTimerId)
  }
  const refresh = () => {
    stop()
    init()
  }
  return {
    init: init
  , stop: stop
  , changePlayerPoke: (newPoke) => {
      playerActivePoke = newPoke
      refresh()
    }
  , changeEnemyPoke: (newPoke) => {
      enemyActivePoke = newPoke
      refresh()
    }
  , refresh: refresh
  , changeCatch: (shouldCatch) => catchEnabled = shouldCatch
  }
}

const renderView = (dom, enemy, player) => {
  dom.renderPokeOnContainer('enemy', enemy.activePoke())
  dom.renderPokeOnContainer('player', player.activePoke(), 'back')
  dom.renderPokeList('playerPokes', player.pokemons(), player, '#enableDelete')
}


// main

const enemy = makeEnemy()
enemy.generateNew(ROUTES[currentRouteId])

const player = makePlayer()
if (localStorage.getItem(`totalPokes`) !== null) {
  player.loadPokes()
} else {
  player.addPoke(makePoke(pokeById(randomArrayElement([1, 4, 7])), 5))
}

const dom = makeDomHandler()
dom.renderRouteList('areasList', ROUTES)
dom.renderBalls(player.ballsAmmount())
const combatLoop = makeCombatLoop(enemy, player, dom)
const userInteractions = makeUserInteractions(player, enemy, dom, combatLoop)

renderView(dom, enemy, player)

combatLoop.init()

requestAnimationFrame(function renderTime() {
  dom.renderHeal(player.canHeal())
  requestAnimationFrame(renderTime)
})

require 'net/http'
require 'uri'
require 'nokogiri'
require 'pry-byebug'
require 'restclient'
require 'json'
my_json = []
i=0
for num in 1..493
  page = RestClient.get("http://pokeapi.co/api/v2/pokemon/#{num}/")
  page_parsed = JSON.parse(page.body)
  if (page_parsed['id']<10)
    page_parsed['id'] = "00" + page_parsed['id'].to_s
  elsif (page_parsed['id']<100)
    page_parsed['id'] = "0" + page_parsed['id'].to_s
  end
  new_pokemon = {
    "pokemon": [{"Pokemon": page_parsed['name']}],
    "stats": [{
      "growth rate": "Medium",
      "hp": page_parsed['stats'][5]['base_stat'],
      "attack": page_parsed['stats'][4]['base_stat'],
      "defense": page_parsed['stats'][3]['base_stat'],
      "sp atk": page_parsed['stats'][2]['base_stat'],
      "sp def": page_parsed['stats'][1]['base_stat'],
      "speed": page_parsed['stats'][0]['base_stat'],
      "types": {
        "text": page_parsed["types"][0]["type"]["name"],
        "href": "https://pokemondb.net/type/#{page_parsed["types"][0]["type"]["name"]}"
      }
    }],
    "exp": [{"base exp": page_parsed['base_experience']}],
    "images": {
        "front": "/home/amauey/Images/pokemon animation/Battlers/#{page_parsed['id']}.gif",
        "back": "/home/amauey/Images/pokemon animation/Battlers/#{page_parsed['id']}b.gif"
    }
  }
  puts(page_parsed['name'] + num.to_s + "/" + "493")
  my_json[i] = new_pokemon
  i = i+1
end
File.open("pokedex5.js", 'w') { |file| file.write("const POKEDEX5 = ["+my_json.to_json+"];") }
# response.code
# response.body
#a['chain']['evolves_to'][0]['species']['name']
#a['chain']['evolves_to'][0]['evolution_details'][0]['min_level']

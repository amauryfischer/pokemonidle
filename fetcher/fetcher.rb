require 'json'
require 'restclient'
SPRITEDIRECTORY = "sprites"
ALLTYPE = [
  {
    side: "front",
    type: "normal"
  },{
    side: "back",
    type: "normal"
  },{
    side: "front",
    type: "shiny"
  },{
    side: "back",
    type: "shiny"
  }
]
db = JSON.parse File.open('dbjson.txt','r').read
lastpokemonid = 895
currentpokemonid = 400
nbdepokemontotal = lastpokemonid - currentpokemonid
nbdepokemontraite = 0
i = 0
total = 4*nbdepokemontotal
db[currentpokemonid..lastpokemonid].each do |pokedb|
  nbdepokemontraite += 1
  puts "---------------------------------------------------------------------------"
  puts "nb de pokemon traite #{currentpokemonid+nbdepokemontraite}/#{lastpokemonid}"
  ALLTYPE.each do |hashtype|
    url = pokedb["images"][hashtype[:type]][hashtype[:side]]
    if url.include?("https")
      name = pokedb["pokemon"][0]["Pokemon"]
      puts "fetching : #{url}"
      File.open("#{SPRITEDIRECTORY}/#{name}_#{hashtype[:type]}_#{hashtype[:side]}.gif", 'wb' ) do |output|
        begin
          output.write RestClient.get(url)
        rescue RestClient::Exceptions::OpenTimeout
          retry
        end
      end
    end
    i+=1
    puts "#{i}/#{total}"
  end
end

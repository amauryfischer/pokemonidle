require 'json'
require 'restclient'
require 'pp'
require 'byebug'

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

db = JSON.parse File.open('fetcher/dbjson.txt', 'r').read

db.each do |dbelement|
	name = dbelement["pokemon"][0]["Pokemon"]
	ALLTYPE.each do |hashtype|
		if dbelement["images"][hashtype[:type]][hashtype[:side]].include?("https")
			dbelement["images"][hashtype[:type]][hashtype[:side]] = "fetcher/sprites/#{name}_#{hashtype[:type]}_#{hashtype[:side]}.gif"
		end
	end
end
File.open('newdb.json',"w").write(db.to_json)

var data = {};
onEvent("ClassBookRecommender_predict", "click", function() {
    addPair(data, "Whichanimaldoyoulikethemost?", getText("animal_dropdown"));
		addPair(data, "describe", getText("Describeyourself?_dropdown"));
		addPair(data, "wherespendtime", getText("Wheredoyouliketospendyoutime?_dropdown"));
		addPair(data, "howspendtime", getText("Howdoyoulikespendingyoutime?_dropdown"));
    setText("ClassBookRecommender_prediction", '');
    getPrediction("Class Book Recommender", "OV8kuQzp3Yuh", data, function(value) {
      setText("ClassBookRecommender_prediction", value);
    });
  });

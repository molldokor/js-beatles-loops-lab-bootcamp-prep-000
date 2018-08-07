// add solution here
function theBeatlesPlay(musiscians, instruments) {
 var musiciansInstruments = [];
 for (var i = 0; i < 4; i++) {
   musiciansInstruments.push(`${musiscians[i]} plays ${instruments[i]}`);
 }
 return musiciansInstruments;
}

function johnLennonFacts(facts) {
  var exclFacts = [];
  var countdown = facts.length;
  while (countdown > 0) {
    exclFacts[countdown - 1] = `${facts[countdown - 1]}!!!`;
    countdown--;
  }
  return exclFacts;
}

function 
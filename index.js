// add solution here
function theBeatlesPlay(musiscians, instruments) {
 var musiciansInstruments = [];
 for (var i = 0; i < 5; i++) {
   musiciansInstruments.unshift(`${musiscians[i]} plays ${instruments[i]}`);
 }
 return musiciansInstruments;
}
/*

KERNING PAIRS BUILDER

Builds all possible kerning pairs combining the characters
in arrays "rightKerningLetters" and "leftKerningLetters"

	var rightKerningLetters = "ABC",
		leftKerningLetters = "123";

will export

	"A1 A2 A3 B1 B2 B3 C1 C2 C3"

*/

// Following characters are the reference characters for kerning classes of Outward (http://raoulaudouin.fr/outward)
var rightKerningLetters = "BbyÈ@}ÇẂẀķfъ’`&-?r>í(~ÝĜцЦТðtĄĶЉБŊȚțąſę‚īĹ˙./:;LQ[\_|£¤¥¦¬±·¸ßĠġĥĪĮỲYĺĻĿŀŁłŤťŧǾỳ‹Ггтђґı",
	leftKerningLetters = "AÉÌÍagþ$4\"#=+TŢJ<ìŶ*)°Ģj1ņġЂĦţŁŧħ….|'/:;\]_£¤¥¦±·¸¿ÝíýĪīĵŉŗŤǾ›™ДЛЧдлтчъљı";

var pairsContainer = document.body;

function buildKerningPairs(rightKerning, leftKerning, separator = ' ', groupSeparator = "\n\n") {

	var kerningPairs = "",
		pairsAmount = 0;

	for (rightIndex = 0; rightIndex < rightKerning.length; rightIndex++) {

		var rightKerningLetter = rightKerning[rightIndex];

		for (leftIndex = 0; leftIndex < leftKerning.length; leftIndex++) {
			var leftKerningLetter = leftKerning[leftIndex];
			kerningPairs += rightKerningLetter+leftKerningLetter+separator;
			pairsAmount++;
		}

		kerningPairs += groupSeparator;
	}

	pairsContainer.innerText = pairsAmount+' kerning pairs\n\n'+kerningPairs;
}

buildKerningPairs(rightKerningLetters, leftKerningLetters);

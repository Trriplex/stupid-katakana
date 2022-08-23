function rndInt(min, max) {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max-min) + min)
}

function generate() {
	let katakanas = [
		["ア","a"],["イ","i"],["ウ","u"],["エ","e"],["オ","o"],
		["カ","ka"],["キ","ki"],["ク","ku"],["ケ","ke"],["コ","ko"],["キャ","kya"],["キュ","kyu"],["キョ","kyo"],
		["サ","sa"],["シ","shi"],["ス","su"],["セ","se"],["ソ","so"],["シャ","sha"],["シュ","shu"],["ショ","sho"],
		["タ","ta"],["チ","chi"],["ツ","tsu"],["テ","te"],["ト","to"],["チャ","cha"],["チュ","chu"],["チョ","cho"],
		["ナ","na"],["ニ","ni"],["ヌ","nu"],["ネ","ne"],["ノ","no"],["ニャ","nya"],["ニュ","nyu"],["ニョ","nyo"],
		["ハ","ha"],["ヒ","hi"],["フ","fu"],["ヘ","he"],["ホ","ho"],["ヒャ","hya"],["ヒュ","hyu"],["ヒョ","hyo"],
		["マ","ma"],["ミ","mi"],["ム","mu"],["メ","me"],["モ","mo"],["ミャ","mya"],["ミュ","myu"],["ミョ","myo"],
		["ヤ","ya"],["ユ","yu"],["ヨ","yo"],
		["ラ","ra"],["リ","ri"],["ル","ru"],["レ","re"],["ロ","ro"],["リャ","rya"],["リュ","ryu"],["リョ","ryo"],
		["ワ","wa"],
		["ン","n"],
		["ガ","ga"],["ギ","gi"],["グ","gu"],["ゲ","ge"],["ゴ","go"],["ギャ","gya"],["ギュ","guy"],["ギョ","gyo"],
		["ザ","za"],["ジ","ji"],["ズ","zu"],["ゼ","ze"],["ゾ","zo"],["ジャ","ja"],["ジュ","ju"],["ジョ","jo"],
		["ダ","da"],["ヂ","ji"],["ヅ","zu"],["デ","de"],["ド","do"],
		["バ","ba"],["ビ","bi"],["ブ","bu"],["ベ","be"],["ボ","bo"],["ビャ","bya"],["ビュ","byu"],["ビョ","byo"],
		["パ","pa"],["ピ","pi"],["プ","pu"],["ペ","pe"],["ポ","po"],["ピャ","pya"],["ピュ","pyu"],["ピョ","pyo"],
		["ファ","fa"],["フィ","fi"],["フェ","fe"],["フォ","fo"],
		["ツァ","tsa"],["ティ","ti"],["トゥ","tu"],
		["ウェ","we"],["ウォ","wo"]
	]
	let len = katakanas.length
	document.getElementById("k").innerHTML = document.getElementById("transcription").innerHTML = ""
	for (let i = 0; i < rndInt(3, 4); i++) {
		let couple = katakanas[rndInt(0, len)]
		document.getElementById("k").innerHTML += couple[0];
		document.getElementById("transcription").innerHTML += couple[1];
	}
}
function listen() {
	let text = document.getElementById("k").innerHTML
	let url = "https://translate.google.com/translate_tts?ie=UTF-8&tl=ja&client=tw-ob&q="
	document.getElementById("audio").src = url+text
	document.getElementById("audio").play()
}

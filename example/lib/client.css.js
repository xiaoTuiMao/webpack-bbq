module.exports = {
	"red": "client__red___3sfvl",
	"img": "client__img___1C3eM",
	toString: function toString() {
		return ".client__red___3sfvl {\n  de\n  color: red;\n}\n\n.client__img___1C3eM {\n  min-width: 300px;\n  min-height: 200px;\n  background-image: url(" + require("./latency-and-bandwidth.svg") + ");\n  background-repeat: no-repeat;\n}\n";
	}
};
if (typeof window !== 'undefined') {
  require('style-loader/addStyles')([[module.id, module.exports.toString()]]);
}
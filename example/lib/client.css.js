module.exports = {
	"red": "client__red___3sfvl",
	toString: function toString() {
		return ".client__red___3sfvl {\n  color: red;\n}\n";
	}
};
if (typeof window !== 'undefined') {
  require('style-loader/addStyles')([[module.id, module.exports.toString()]]);
}
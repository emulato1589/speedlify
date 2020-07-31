module.exports = {
	name: "sundt", // optional, falls back to object key
	description: "Sundt Sites",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: false,
	options: {
		frequency: 60 * 24, // 24 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run"
	},
	urls: [
    "https://www.sundt.it/",
    "https://www.sundt.fr/",
    "https://www.sundt.pt/",
    "https://www.sundt.es/",
    "https://www.sundt.nl/",
    "https://www.sundt.mx/",
    "https://www.sundt.uk/",
    "https://www.sundt.com.br/",
	]
};

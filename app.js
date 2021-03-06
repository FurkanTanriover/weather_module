const capitalWeather = require("./capital_weather");
const yargs = require("yargs");

function calistir() {
  yargs.command({
    command: "getir",
    describe: ": bilgileri getirilecek ülke",
    builder: {
      ulke: {
        describe: "ulke ismini ingilizce olarak yazınız",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      capitalWeather(argv.ulke);
    },
  });

  yargs.parse();
}

module.exports=calistir;
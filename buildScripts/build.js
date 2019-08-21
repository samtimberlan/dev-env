import webpack from "webpack";
import chalk from "chalk";
import webpackConfig from "../webpack.config.prod";

process.env.NODE_ENV = "production";

console.log(
  chalk.blue(
    "Generating minified bundle for production. This will take a while..."
  )
);

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(chalk.red(err));
    return 1;
  } else {
    const jsonStats = stats.toJson();
    if (jsonStats.hasErrors) {
      return jsonStats.errors.map(err => {
        console.log(chalk.red(err));
      });
    }

    return 0;
  }
});

import gulp from "gulp";
import shell from "gulp-shell";
import mocha from "gulp-mocha";
import cypress from "cypress";

gulp.task("test", function () {
  return gulp
    .src(["test/**/*.js"], { read: false })
    .pipe(
      mocha({
        reporter: "spec",
        require: ["chai/register-expect", "chai/register-assert"],
      })
    )
    .on("error", function (err) {
      console.error(err.toString());
      this.emit("end");
    });
});

gulp.task("cypress:run", function () {
  return cypress
    .run({
      browser: "chrome",
      headless: true,
      spec: "cypress/e2e/**/*.cy.js",
    })
    .then((results) => {
      console.log("Cypress tests completed:", results);
    })
    .catch((err) => {
      console.error("Cypress tests failed:", err);
      process.exit(1); // exit with error code
    });
});

gulp.task("build", shell.task("parcel build index.html"));
gulp.task("parcel server", shell.task("parcel index.html"));

gulp.task("default", gulp.series("build", "parcel server"));

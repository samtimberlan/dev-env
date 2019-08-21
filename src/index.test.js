import { expect } from "chai";
import jsdom from "jsdom";
import fs from "fs";

describe("First Test", () => {
  it("should pass", () => {
    expect(true).to.equal(true);
  });
});

describe("index.html", () => {
  // It is important to pass done as a callback param and call it before closing the window
  // This tells Mocha that the test is done and evaluation can be performed.
  it("should say Users", done => {
    // Hold file in memory
    const index = fs.readFileSync("./src/index.html", "utf-8");
    jsdom.env(index, (err, window) => {
      const h1 = window.document.getElementsByClassName("be-banned")[0];
      expect(h1.innerHTML).to.equal("Users!");

      done();
      // Free up memory used by in-memory DOM
      window.close();
    });
  });
});

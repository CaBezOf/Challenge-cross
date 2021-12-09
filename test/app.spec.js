import { strNumbers, numbers, response } from "../src/app.js";
import { expect } from "chai";
import * as chai from "chai";
import chaisorted from "chai-sorted";
chai.use(chaisorted);

describe("Test api", () => {
  it("Response need to return status 200", () => {
    expect(response.status).equal(200);
  });

  it("Check if the numbers are sorted", () => {
    expect([numbers[0], numbers.length - 1]).to.be.sorted();
  });

  it("Test if the JSONnumber is a string", () => {
    expect(strNumbers).to.be.a("string");
  });
});

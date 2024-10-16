import assert from "assert";

describe("Json operation", () => {
    it("Convert json to javascript object", () => {
        const json = '{"name": "Mango", "age":3, "isHappy":true}';

        const obj = JSON.parse(json);
        assert.strictEqual(obj.name, "Mango", "Name is not the same");
    });
});
import assert from "assert";

describe("Json operation", () => {
    it("Convert javascript object to json", () => {
        const cat = {
            name: "Kity",
            color: "black",
            age: 12,
            race: "Siamese",
        };
        const json = JSON.stringify(cat)
        assert.strictEqual(json, '{"name": "Kity", "color":"black", "age":12, "race": "Siamese"}');
    });
});
var UiPlugin = require("nativescript-ui-plugin").UiPlugin;
var uiPlugin = new UiPlugin();

describe("greet function", function() {
    it("exists", function() {
        expect(uiPlugin.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(uiPlugin.greet()).toEqual("Hello, NS");
    });
});
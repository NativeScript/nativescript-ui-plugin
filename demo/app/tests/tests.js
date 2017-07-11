var UiPlugin = require("nativescript-ui-plugin").Meme;
var uiPlugin = new UiPlugin();

describe("greet function", function() {
    it("exists", function() {
        expect(uiPlugin.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(uiPlugin.greet()).toEqual("Hello, NS");
    });
});

describe("topText property", function() {
    it("value is applied to top label", function() {
        uiPlugin.topText = "pain";
        expect(uiPlugin.getChildAt(0).getChildAt(0).text).toEqual("pain");
    });
});

describe("imageSource property", function() {
    it("value is applied to image element", function() {
        uiPlugin.imageSource = "/some/path/to/image.png";
        expect(uiPlugin.getChildAt(0).getChildAt(1).src).toEqual("/some/path/to/image.png");
    });
});

describe("bottomText property", function() {
    it("value is applied to bottom label", function() {
        uiPlugin.bottomText = "gain";
        expect(uiPlugin.getChildAt(0).getChildAt(2).text).toEqual("gain");
    });
});


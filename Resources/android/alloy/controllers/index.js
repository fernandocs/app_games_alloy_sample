function Controller() {
    function __alloyId32(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId32.opts || {};
        var models = __alloyId31.models;
        var len = models.length;
        var __alloyId27 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId28 = models[i];
            __alloyId28.__transform = transform(__alloyId28);
            var __alloyId30 = {
                properties: {
                    width: Ti.UI.FILL,
                    height: Ti.UI.SIZE,
                    itemId: "undefined" != typeof __alloyId28.__transform["alloy_id"] ? __alloyId28.__transform["alloy_id"] : __alloyId28.get("alloy_id")
                },
                image: {
                    image: "undefined" != typeof __alloyId28.__transform["image"] ? __alloyId28.__transform["image"] : __alloyId28.get("image")
                },
                name: {
                    text: "undefined" != typeof __alloyId28.__transform["name"] ? __alloyId28.__transform["name"] : __alloyId28.get("name")
                },
                year: {
                    text: "undefined" != typeof __alloyId28.__transform["year_release"] ? __alloyId28.__transform["year_release"] : __alloyId28.get("year_release")
                }
            };
            __alloyId27.push(__alloyId30);
        }
        opts.animation ? $.__views.section.setItems(__alloyId27, opts.animation) : $.__views.section.setItems(__alloyId27);
    }
    function __alloyId53(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId53.opts || {};
        var models = __alloyId52.models;
        var len = models.length;
        var __alloyId48 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId49 = models[i];
            __alloyId49.__transform = transform(__alloyId49);
            var __alloyId51 = {
                properties: {
                    width: Ti.UI.FILL,
                    height: Ti.UI.SIZE,
                    itemId: "undefined" != typeof __alloyId49.__transform["alloy_id"] ? __alloyId49.__transform["alloy_id"] : __alloyId49.get("alloy_id")
                },
                image: {
                    image: "undefined" != typeof __alloyId49.__transform["image"] ? __alloyId49.__transform["image"] : __alloyId49.get("image")
                },
                name: {
                    text: "undefined" != typeof __alloyId49.__transform["name"] ? __alloyId49.__transform["name"] : __alloyId49.get("name")
                },
                year: {
                    text: "undefined" != typeof __alloyId49.__transform["year_release"] ? __alloyId49.__transform["year_release"] : __alloyId49.get("year_release")
                }
            };
            __alloyId48.push(__alloyId51);
        }
        opts.animation ? $.__views.section.setItems(__alloyId48, opts.animation) : $.__views.section.setItems(__alloyId48);
    }
    function __alloyId56() {
        $.__views.win_index.removeEventListener("open", __alloyId56);
        if ($.__views.win_index.activity) $.__views.win_index.activity.onCreateOptionsMenu = function(e) {
            var __alloyId55 = {
                title: "Add",
                icon: "/images/ic_action_new.png",
                showAsAction: Ti.Android.SHOW_AS_ACTION_ALWAYS,
                id: "menuItem"
            };
            $.__views.menuItem = e.menu.add(_.pick(__alloyId55, Alloy.Android.menuItemCreateArgs));
            $.__views.menuItem.applyProperties(_.omit(__alloyId55, Alloy.Android.menuItemCreateArgs));
            add ? $.__views.menuItem.addEventListener("click", add) : __defers["$.__views.menuItem!click!add"] = true;
        }; else {
            Ti.API.warn("You attempted to attach an Android Menu to a lightweight Window");
            Ti.API.warn("or other UI component which does not have an Android activity.");
            Ti.API.warn("Android Menus can only be opened on TabGroups and heavyweight Windows.");
        }
    }
    function __alloyId74(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId74.opts || {};
        var models = __alloyId73.models;
        var len = models.length;
        var __alloyId69 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId70 = models[i];
            __alloyId70.__transform = transform(__alloyId70);
            var __alloyId72 = {
                properties: {
                    width: Ti.UI.FILL,
                    height: Ti.UI.SIZE,
                    itemId: "undefined" != typeof __alloyId70.__transform["alloy_id"] ? __alloyId70.__transform["alloy_id"] : __alloyId70.get("alloy_id")
                },
                image: {
                    image: "undefined" != typeof __alloyId70.__transform["image"] ? __alloyId70.__transform["image"] : __alloyId70.get("image")
                },
                name: {
                    text: "undefined" != typeof __alloyId70.__transform["name"] ? __alloyId70.__transform["name"] : __alloyId70.get("name")
                },
                year: {
                    text: "undefined" != typeof __alloyId70.__transform["year_release"] ? __alloyId70.__transform["year_release"] : __alloyId70.get("year_release")
                }
            };
            __alloyId69.push(__alloyId72);
        }
        opts.animation ? $.__views.section.setItems(__alloyId69, opts.animation) : $.__views.section.setItems(__alloyId69);
    }
    function add() {
        Alloy.createController("add").getView().open();
    }
    function transform(model) {
        var transform = model.toJSON();
        transform.name = transform.name;
        transform.image = transform.image;
        transform.year_release = transform.year_release;
        return transform;
    }
    function gameDetails(e) {
        var data = Alloy.Collections.game.get(e.itemId);
        var detailsController = Alloy.createController("details", {
            data: data
        });
        detailsController.getView().open();
    }
    function gameDelete(e) {
        var data = Alloy.Collections.game.get(e.itemId);
        data.destroy();
        Alloy.Collections.game.fetch();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("game");
    var __alloyId31;
    var __alloyId52;
    $.__views.win_index = Ti.UI.createWindow({
        backgroundColor: "white",
        titleid: "win_heroes_title",
        exitOnClose: true,
        id: "win_index"
    });
    $.__views.win_index && $.addTopLevelView($.__views.win_index);
    $.__views.win_index.addEventListener("open", __alloyId56);
    var __alloyId57 = {};
    var __alloyId59 = [];
    var __alloyId60 = {
        type: "Ti.UI.View",
        childTemplates: function() {
            var __alloyId61 = [];
            var __alloyId62 = {
                type: "Ti.UI.ImageView",
                bindId: "image",
                properties: {
                    width: "40dp",
                    height: "40dp",
                    bindId: "image"
                }
            };
            __alloyId61.push(__alloyId62);
            var __alloyId64 = {
                type: "Ti.UI.View",
                childTemplates: function() {
                    var __alloyId65 = [];
                    var __alloyId66 = {
                        type: "Ti.UI.Label",
                        bindId: "name",
                        properties: {
                            width: Ti.UI.SIZE,
                            height: Ti.UI.SIZE,
                            color: "black",
                            text: L("label_title"),
                            top: "2dp",
                            left: "5dp",
                            right: "5dp",
                            font: {
                                fontSize: "24dp"
                            },
                            bindId: "name"
                        }
                    };
                    __alloyId65.push(__alloyId66);
                    var __alloyId67 = {
                        type: "Ti.UI.Label",
                        bindId: "year",
                        properties: {
                            width: Ti.UI.SIZE,
                            height: Ti.UI.SIZE,
                            color: "black",
                            text: L("label_title"),
                            font: {
                                fontSize: "14dp"
                            },
                            left: "5dp",
                            bindId: "year"
                        }
                    };
                    __alloyId65.push(__alloyId67);
                    return __alloyId65;
                }(),
                properties: {
                    layout: "vertical",
                    width: Ti.UI.SIZE,
                    height: Ti.UI.SIZE
                }
            };
            __alloyId61.push(__alloyId64);
            return __alloyId61;
        }(),
        properties: {
            layout: "horizontal",
            width: "95%",
            height: Ti.UI.SIZE,
            top: "10dp",
            bottom: "10dp"
        }
    };
    __alloyId59.push(__alloyId60);
    var __alloyId68 = {
        type: "Ti.UI.ImageView",
        properties: {
            width: Ti.UI.SIZE,
            height: Ti.UI.SIZE,
            image: "/images/ic_action_next_item.png",
            right: "1dp"
        }
    };
    __alloyId59.push(__alloyId68);
    var __alloyId58 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId59
    };
    __alloyId57["template"] = __alloyId58;
    $.__views.section = Ti.UI.createListSection({
        id: "section"
    });
    var __alloyId73 = Alloy.Collections["game"] || game;
    __alloyId73.on("fetch destroy change add remove reset", __alloyId74);
    var __alloyId75 = [];
    __alloyId75.push($.__views.section);
    $.__views.list_view_games = Ti.UI.createListView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        separatorInsets: {
            left: 10,
            right: 10
        },
        sections: __alloyId75,
        templates: __alloyId57,
        id: "list_view_games",
        defaultItemTemplate: "template"
    });
    $.__views.win_index.add($.__views.list_view_games);
    gameDetails ? $.__views.list_view_games.addEventListener("itemclick", gameDetails) : __defers["$.__views.list_view_games!itemclick!gameDetails"] = true;
    exports.destroy = function() {
        __alloyId31.off("fetch destroy change add remove reset", __alloyId32);
        __alloyId52.off("fetch destroy change add remove reset", __alloyId53);
        __alloyId73.off("fetch destroy change add remove reset", __alloyId74);
    };
    _.extend($, $.__views);
    $.win_index.open();
    Alloy.Collections.game.fetch();
    __defers["$.__views.add!click!add"] && $.__views.add.addEventListener("click", add);
    __defers["$.__views.list_view_games!itemclick!gameDetails"] && $.__views.list_view_games.addEventListener("itemclick", gameDetails);
    __defers["$.__views.list_view_games!delete!gameDelete"] && $.__views.list_view_games.addEventListener("delete", gameDelete);
    __defers["$.__views.add!click!add"] && $.__views.add.addEventListener("click", add);
    __defers["$.__views.list_view_games!itemclick!gameDetails"] && $.__views.list_view_games.addEventListener("itemclick", gameDetails);
    __defers["$.__views.list_view_games!delete!gameDelete"] && $.__views.list_view_games.addEventListener("delete", gameDelete);
    __defers["$.__views.menuItem!click!add"] && $.__views.menuItem.addEventListener("click", add);
    __defers["$.__views.list_view_games!itemclick!gameDetails"] && $.__views.list_view_games.addEventListener("itemclick", gameDetails);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
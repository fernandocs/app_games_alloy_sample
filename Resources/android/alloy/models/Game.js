exports.definition = {
    config: {
        columns: {
            name: "TEXT",
            image: "BLOB",
            year_release: "INTEGER"
        },
        adapter: {
            type: "sql",
            collection_name: "games"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            validate: function(attrs) {
                for (var key in attrs) {
                    var value = attrs[key];
                    if ("image" === key && (void 0 === value || null === value)) return L("error_no_image");
                    if ("name" === key && (void 0 === value || null === value || 0 >= value.length)) return L("error_no_name");
                    if ("year_release" === key && (void 0 === value || null === value || isNaN(value) || 4 !== value.toString().length)) return L("error_no_year_release");
                }
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("game", exports.definition, []);

collection = Alloy.C("game", exports.definition, model);

exports.Model = model;

exports.Collection = collection;
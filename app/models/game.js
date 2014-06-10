exports.definition = {
	config: {
		columns: {
		    "name": "TEXT",
		    "image": "BLOB",
		    "year_release": "INTEGER"
		},
		adapter: {
			type: "sql",
			collection_name: "games"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			validate : function(attrs) {
				for (var key in attrs) {
					var value = attrs[key];
					
					if (key === "image") {
						if (value === undefined || value === null) {
							return L("error_no_image");
						}	
					}
					
					if (key === "name") {
						if (value === undefined || value === null || value.length <= 0) {
							return L("error_no_name");
						}
					}
					
					if (key === "year_release") {
						if (value === undefined || value === null || isNaN(value) || value.toString().length !== 4) {
							return L("error_no_year_release");
						}	
					}
				}
			}
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};
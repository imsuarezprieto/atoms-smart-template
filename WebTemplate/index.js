
module.exports = {

    name: "Static Web template",

    directory: true,

    params: ["Name", "Section", "Title"],

    rules: function(config) {

        return({
            items: [
                { destinationFile: "index.html",                sourceTemplateFile: "index.template"      },
                { destinationFile: "css/common.css",            sourceTemplateFile: "css.template"        },
                { destinationFile: "js/main.js",                sourceTemplateFile: "js.template"         },
                { destinationFile: "deployment.config.json",    sourceTemplateFile: "deployment.template" },
                { destinationFile: "img/.delete",            sourceContentFile:  "img/someimage.jpg"   },
                { destinationFile: "css/reset.css",             sourceContentFile:  "css/reset.css"       }
            ]
        });

    }

}

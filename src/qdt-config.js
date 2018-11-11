module.exports = {
    platforms: {
        "*": {
            "source": "base",
            "libs": {
                // please disable libraries you don't need
                "jquery": true,
                "bootstrap_3": false,
                "angular": true,
                "angular_2": false,
                "underscore": true,
                "underscore.string": false,
                "mdi": true
            },
            "libs_data": {},
            // overwrite this paths in your platform
            "paths": {
                "root": false,
                "assets_root": false,
                "clean_paths": false
            },
            // add here libraries from node_modules
            "assets": [{
                "from": "resources/assets/**/*",
                "to": "assets"
            }, {
                "from": "../../node_modules/nanoscroller/bin/css/*",
                "to": "assets/dist/nanoscroller/css/"
            }, {
                "from": "../../node_modules/nanoscroller/bin/javascripts/*",
                "to": "assets/dist/nanoscroller/js/"
            }, {
                "from": "../../node_modules/@uirouter/angularjs/release/angular-ui-router.min.js",
                "to": "assets/dist/uirouter/"
            }, {
                "from": "../../node_modules/@uirouter/angularjs/release/angular-ui-router.min.js.map",
                "to": "assets/dist/uirouter/"
            }, {
                "from": "../../node_modules/qrcodejs/qrcode.js",
                "to": "assets/dist/qrcodejs"
            }, {
                "from": "../../node_modules/angularjs-datepicker/dist/angular-datepicker.min.js",
                "to": "assets/dist/angular-datepicker"
            }, {
                "from": "../../node_modules/angularjs-datepicker/dist/angular-datepicker.min.css",
                "to": "assets/dist/angular-datepicker"
            }, {
                "from": "../../node_modules/papaparse/papaparse.min.js",
                "to": "assets/dist/papaparse/"
            }, {
                "from": "../../node_modules/file-saver/FileSaver.min.js",
                "to": "assets/dist/file-saver"
            }, {
                "from": "../../node_modules/angular-translate/dist/angular-translate.min.js",
                "to": "assets/dist/angular-translate"
            }, {
                "from": "../../node_modules/angular-sanitize/angular-sanitize.min.js",
                "to": "assets/dist/angular-sanitize"
            }, {
                "from": "../../node_modules/angular-cookies/angular-cookies.min.js",
                "to": "assets/dist/angular-cookies"
            }, {
                "from": "../../node_modules/angular-translate-storage-cookie/angular-translate-storage-cookie.min.js",
                "to": "assets/dist/angular-translate-storage-cookie"
            }, {
                "from": "../../node_modules/angular-translate-storage-local/angular-translate-storage-local.min.js",
                "to": "assets/dist/angular-translate-storage-local"
            }, {
                "from": "../../node_modules/moment/min/moment-with-locales.min.js",
                "to": "assets/dist/moment"
            }, {
                "from": "../../node_modules/chart.js/dist/Chart.min.js",
                "to": "assets/dist/chart"
            }, {
                "from": "../../node_modules/progressbar.js/dist/progressbar.min.js",
                "to": "assets/dist/progressbar"
            }, {
                "from": "../../node_modules/@babel/polyfill/dist/polyfill.min.js",
                "to": "assets/dist/babel-polyfill"
            }],
            // browsersync configurations (ex: ip, port and path)
            "server": false,
            // tasks configs
            "tasks": {
                // disable tasks
                "disabled": {
                    "pug": false,
                    "js": false,
                    "assets": false
                },
                // tasks details, ex: source, destination, minify and etc. 
                "settings": {
                    "js": [{
                        "src": [
                            "app.js"
                        ],
                        "watch": [
                            "angular-1/**/**.js",
                        ],
                        "dest": "/",
                        "name": "app.js",
                        "minify": false,
                        "sourcemap": true,
                        "browserify": true
                    }, {
                        "src": [
                            // "raw/**/*.js"
                        ],
                        "dest": "/raw",
                        "path": "/raw",
                        "minify": true,
                        "sourcemap": false,
                        "browserify": false
                    }],
                    "scss": [{
                        "src": "style.scss",
                        "watch": [
                            "includes/**/*.scss",
                            "layouts/**/*.scss",
                        ],
                        "path": "/",
                        "name": "style.min.css",
                        "minify": true
                    }],
                    "pug": [{
                        "path": "/markup",
                        "src": ["/markup/*.pug"],
                        "watch": ["layout/**/*.pug"],
                    }]
                }
            }
        },
        "forus-webshop-nijmegen.panel": {
            "source": "forus-webshop-nijmegen",
            "paths": {
                "root": "../dist/forus-webshop-nijmegen.panel",
                "assets_root": "../dist/forus-webshop-nijmegen.panel/assets",
                "clean_paths": [
                    "../dist/forus-webshop-nijmegen.panel"
                ]
            },
            "server": {
                "path": "/",
                "port": 3000
            },
            // tasks configs
            "tasks": {
                // disable tasks
                "disabled": {
                    "pug": false,
                    "js": false,
                    "assets": false
                },
                // tasks details, ex: source, destination, minify and etc.
                "settings": {
                    "pug": [{
                        "path": "/webshop-panel",
                        "src": ["webshop-panel/index.pug"],
                        "watch": ["layout/**/*.pug"],
                    }, {
                        "path": "/tpl",
                        "src": ["tpl/**/*.pug"],
                        "dest": "/assets/tpl"
                    }]
                }
            }
        }
    }
};
let api_url = "https://dev.api.forus.link/api/v1";

module.exports = {
    // browsersync configs
    server: {
        enabled: true,
        // choose, which platform should be served
        // you can serve few platforms at the same time, 
        // but make sure each of them use unique port number
        platform: [
            "forus-webshop-nijmegen.panel"
        ],
        // browsersync reloads browser when watched files are modified,
        // here you can choose which platform besides "served" will make
        // browsersync to reload.
        // Sometimes "served" platform rely on foreign platform
        watch_platforms: "all"
    },
    platforms: {
        // choose which platforms will be enabled, otherwise completely ignored
        enabled: [
            "forus-webshop-nijmegen.panel"
        ]
    },
    platforms_data: {
        "forus-webshop-nijmegen.panel": {
            api_url: api_url,
            client_key: 'shop-nijmegen'
        }
    }
};
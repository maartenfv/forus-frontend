let BaseController = function(
    $rootScope,
    $scope,
    $state,
    IdentityService,
    AuthService,
    CredentialsService,
    RecordService,
    OrganizationService,
    ConfigService,
    appConfigs
) {
    $rootScope.$state = $state;

    $rootScope.popups = {
        auth: {
            show: false,
            screen: false,
            close: function() {
                this.show = false;
                this.screen = false;
            },
            open: function(screen) {
                this.show = true;
                this.screen = screen;
            }
        }
    };

    $rootScope.loadAuthUser = function() {
        AuthService.identity().then((res) => {
            let auth_user = res.data;

            RecordService.list().then((res) => {
                auth_user.records = res.data;
                auth_user.primary_email = res.data.filter((record) => {
                    return record.key == 'primary_email';
                })[0].value;
            });

            OrganizationService.list().then((res) => {
                auth_user.organizations = res.data.data;
                auth_user.organizationsMap = {};
                auth_user.organizationsIds = Object.values(res.data.data).map(function(organization) {
                    auth_user.organizationsMap[organization.id] = organization;
                    return organization.id;
                });
            });

            $rootScope.auth_user = auth_user;
        });
    };

    $rootScope.$on('organization-changed', (event) => {
        $rootScope.activeOrganization = OrganizationService.active();
    });

    $rootScope.$on('auth:update', (event) => {
        $rootScope.loadAuthUser();
    });

    $rootScope.activeOrganization = OrganizationService.active();  

    $rootScope.signOut = () => {
        AuthService.signOut();
        $state.go('home');
        $rootScope.auth_user = false;
    };

    $rootScope.appConfigs = appConfigs;
    $scope.appConfigs = appConfigs;

    if (AuthService.hasCredentials()) {
        $rootScope.loadAuthUser();
    }

    $scope.$watch(function() {
        return $state.$current.name
    }, function(newVal, oldVal) {
        if ($state.current.name == 'home' && appConfigs.panel_type != 'validator') {
            $rootScope.viewLayout = 'landing';
        } else {
            $rootScope.viewLayout = 'panel';
        }
    }) 

    ConfigService.get('dashboard').then((res) => {
        $rootScope.appConfigs.features = res.data;
    });
};

module.exports = [
    '$rootScope',
    '$scope',
    '$state',
    'IdentityService',
    'AuthService',
    'CredentialsService',
    'RecordService',
    'OrganizationService',
    'ConfigService',
    'appConfigs',
    BaseController
];
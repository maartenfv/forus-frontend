let ModalFundsAddDirective = function($scope) {};

module.exports = () => {
    return {
        scope: {
            modalCode: '=',
            modalIban: '=',
            closeModal: '='
        },
        restrict: "EA",
        replace: true,
        controller: [
            '$scope',
            ModalFundsAddDirective
        ],
        templateUrl: 'assets/tpl/directives/modal-funds-add.html' 
    };
};
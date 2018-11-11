let VoucherComponent = function(
    $rootScope,
    VoucherService
) {
    let $ctrl = this;

    $ctrl.$onInit = function() {
        let qrCodeEl = document.getElementById('voucher_qr');

        new QRCode(qrCodeEl, {
            text: JSON.stringify({
                type: 'voucher',
                value: $ctrl.voucher.address
            }),
            correctLevel: QRCode.CorrectLevel.L
        });

        qrCodeEl.removeAttribute('title');;

        $ctrl.voucherCard = VoucherService.composeCardData($ctrl.voucher);

        $ctrl.sendVoucherEmail = function(voucher) {
            VoucherService.sendToEmail(voucher.address).then(res => {
                $rootScope.popups.auth.open('voucher-email-sent')
            });
        };

        $ctrl.printVoucher = function(voucher) {
            function Popup(data) {
                var mywindow = window.open('', '', 'height=600,width=800');
                mywindow.document.write('<html><head><title>Print voucher</title>');
                /*optional stylesheet*/ //mywindow.document.write('<link rel="stylesheet" href="main.css" type="text/css" />');
                mywindow.document.write('</head><body >');
                mywindow.document.write(data);
                mywindow.document.write('</body></html>');

                mywindow.print();
                mywindow.close();

                return true;
            }

            Popup($(qrCodeEl).html());
        };
    };
};

module.exports = {
    bindings: {
        voucher: '<'
    },
    controller: [
        '$rootScope',
        'VoucherService',
        VoucherComponent
    ],
    templateUrl: 'assets/tpl/pages/voucher.html'
};
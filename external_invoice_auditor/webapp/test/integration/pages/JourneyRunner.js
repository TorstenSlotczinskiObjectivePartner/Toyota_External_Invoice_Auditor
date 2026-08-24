sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"externalinvoiceauditor/test/integration/pages/ExternalInvoiceHeadList.gen",
	"externalinvoiceauditor/test/integration/pages/ExternalInvoiceHeadObjectPage.gen",
	"externalinvoiceauditor/test/integration/pages/ExternalInvoiceItemObjectPage.gen"
], function (JourneyRunner, ExternalInvoiceHeadListGenerated, ExternalInvoiceHeadObjectPageGenerated, ExternalInvoiceItemObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('externalinvoiceauditor') + '/test/flp.html#app-preview',
        pages: {
			onTheExternalInvoiceHeadListGenerated: ExternalInvoiceHeadListGenerated,
			onTheExternalInvoiceHeadObjectPageGenerated: ExternalInvoiceHeadObjectPageGenerated,
			onTheExternalInvoiceItemObjectPageGenerated: ExternalInvoiceItemObjectPageGenerated
        },
        async: true
    });

    return runner;
});


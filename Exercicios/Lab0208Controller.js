var labApp = angular.module("labApp",['ngRoute']);
labApp.config(function($routeProvider) {
	$routeProvider

	/* route for the home page */
	.when('/', {
		templateUrl : 'html/home.html',
		controller  : 'mainController'
	})

	/* route for the about page */
	.when('/about', {
		templateUrl : 'html/about.html',
		controller  : 'aboutController'
	})

	/* route for the about page */
	.when('/products', {
		templateUrl : 'html/products.html',
		controller  : 'productController'
	})

	.when('/products/:id', {
		templateUrl : 'html/product_detail.html',
		controller  : 'productControllerDetail'
	})

	/* route for the contact page */
	.when('/contact', {
		templateUrl : 'html/contact.html',
		controller  : 'contactController'
	})

	.otherwise({
		redirectTo: '/'
	});
});

labApp.controller('labController', function($scope,$rootScope,$http) {
	$scope.message = "Bem vindo ao Lab 02 07";
	$rootScope.productsList = [{
		"id": 1,
		"imagem": "https://robohash.org/aliquidutdignissimos.bmp?size=150x150&set=set1",
		"preco": "$9.92",
		"nome": "Heparin Sodium"
	}, {
		"id": 2,
		"imagem": "https://robohash.org/iuretemporareprehenderit.png?size=150x150&set=set1",
		"preco": "$3.78",
		"nome": "TONYMOLY KISS KISS LIP ESSENCE BALM"
	}, {
		"id": 3,
		"imagem": "https://robohash.org/atquevoluptatestempore.png?size=150x150&set=set1",
		"preco": "$9.28",
		"nome": "Tinted Moisturizer SPF 20 Bisque"
	}, {
		"id": 4,
		"imagem": "https://robohash.org/dictaquisvoluptatem.jpg?size=150x150&set=set1",
		"preco": "$6.33",
		"nome": "equate nicotine"
	}, {
		"id": 5,
		"imagem": "https://robohash.org/remprovidentipsum.jpg?size=150x150&set=set1",
		"preco": "$2.26",
		"nome": "Regular Strength Aspirin EC"
	}, {
		"id": 6,
		"imagem": "https://robohash.org/omnisdistinctiocorrupti.png?size=150x150&set=set1",
		"preco": "$8.92",
		"nome": "rx act ibuprofen"
	}, {
		"id": 7,
		"imagem": "https://robohash.org/voluptasquamin.jpg?size=150x150&set=set1",
		"preco": "$1.64",
		"nome": "White Alder"
	}, {
		"id": 8,
		"imagem": "https://robohash.org/quodistinctioatque.bmp?size=150x150&set=set1",
		"preco": "$3.12",
		"nome": "HurriCaine"
	}, {
		"id": 9,
		"imagem": "https://robohash.org/quaeratautcorporis.bmp?size=150x150&set=set1",
		"preco": "$9.88",
		"nome": "Avar-e LS"
	}, {
		"id": 10,
		"imagem": "https://robohash.org/eiuseumquia.bmp?size=150x150&set=set1",
		"preco": "$8.79",
		"nome": "FOREVER LASTING PRECIOUS OIL ESSENCE"
	}, {
		"id": 11,
		"imagem": "https://robohash.org/quiquiaamet.jpg?size=150x150&set=set1",
		"preco": "$8.25",
		"nome": "retaine HPMC"
	}, {
		"id": 12,
		"imagem": "https://robohash.org/rerumrepudiandaedolore.png?size=150x150&set=set1",
		"preco": "$5.54",
		"nome": "Misoprostol"
	}, {
		"id": 13,
		"imagem": "https://robohash.org/quidoloremagnam.bmp?size=150x150&set=set1",
		"preco": "$2.93",
		"nome": "Mata Piojos"
	}, {
		"id": 14,
		"imagem": "https://robohash.org/sinteligendiet.bmp?size=150x150&set=set1",
		"preco": "$6.46",
		"nome": "Safe-T-Fresh Alcohol Free Hand Sanitizer"
	}, {
		"id": 15,
		"imagem": "https://robohash.org/nonquasiassumenda.jpg?size=150x150&set=set1",
		"preco": "$5.88",
		"nome": "Givenchy TEINT COUTURE Long Wearing Fluid Foundation with Sunscreen Broad Spectrum SPF 20 ELEGANT GINGER"
	}, {
		"id": 16,
		"imagem": "https://robohash.org/rationeomniset.jpg?size=150x150&set=set1",
		"preco": "$7.32",
		"nome": "CLARINS Ever Matte Broad Spectrum SPF 15 Tint 110"
	}, {
		"id": 17,
		"imagem": "https://robohash.org/rerumdeseruntfuga.bmp?size=150x150&set=set1",
		"preco": "$7.17",
		"nome": "Aspergillus niger"
	}, {
		"id": 18,
		"imagem": "https://robohash.org/isteetmolestias.jpg?size=150x150&set=set1",
		"preco": "$1.41",
		"nome": "Perrigo Hydroquinone"
	}, {
		"id": 19,
		"imagem": "https://robohash.org/magnamrepellendusnon.bmp?size=150x150&set=set1",
		"preco": "$4.10",
		"nome": "footlogix"
	}, {
		"id": 20,
		"imagem": "https://robohash.org/modidoloremiusto.png?size=150x150&set=set1",
		"preco": "$7.21",
		"nome": "Uri-Cleanse Rx"
	}, {
		"id": 21,
		"imagem": "https://robohash.org/liberositsed.png?size=150x150&set=set1",
		"preco": "$3.16",
		"nome": "Multi-Symptom Cold Relief"
	}, {
		"id": 22,
		"imagem": "https://robohash.org/suntipsaperspiciatis.bmp?size=150x150&set=set1",
		"preco": "$3.71",
		"nome": "Leader Premenstrual"
	}, {
		"id": 23,
		"imagem": "https://robohash.org/voluptatumvelitsint.png?size=150x150&set=set1",
		"preco": "$3.69",
		"nome": "Rifampin"
	}, {
		"id": 24,
		"imagem": "https://robohash.org/quidemnobisaut.jpg?size=150x150&set=set1",
		"preco": "$5.91",
		"nome": "Nitroglycerin"
	}, {
		"id": 25,
		"imagem": "https://robohash.org/delectusvoluptatemid.jpg?size=150x150&set=set1",
		"preco": "$7.49",
		"nome": "OXYCODONE HYDROCHLORIDE"
	}, {
		"id": 26,
		"imagem": "https://robohash.org/etfugitaut.jpg?size=150x150&set=set1",
		"preco": "$3.20",
		"nome": "Everyday Clean Dandruff"
	}, {
		"id": 27,
		"imagem": "https://robohash.org/etvoluptasvero.bmp?size=150x150&set=set1",
		"preco": "$5.93",
		"nome": "Aclaro PD"
	}, {
		"id": 28,
		"imagem": "https://robohash.org/quiaodioquam.png?size=150x150&set=set1",
		"preco": "$9.01",
		"nome": "Tineacide Physician Formula"
	}, {
		"id": 29,
		"imagem": "https://robohash.org/molestiaedignissimosnon.jpg?size=150x150&set=set1",
		"preco": "$9.56",
		"nome": "METFORMIN HYDROCHLORIDE"
	}, {
		"id": 30,
		"imagem": "https://robohash.org/debitisetaut.jpg?size=150x150&set=set1",
		"preco": "$5.93",
		"nome": "Hemorrhoid Care"
	}, {
		"id": 31,
		"imagem": "https://robohash.org/fugacommodiut.bmp?size=150x150&set=set1",
		"preco": "$6.07",
		"nome": "Albuterol Sulfate"
	}, {
		"id": 32,
		"imagem": "https://robohash.org/accusamusutad.bmp?size=150x150&set=set1",
		"preco": "$2.01",
		"nome": "tizanidine hydrochloride"
	}, {
		"id": 33,
		"imagem": "https://robohash.org/doloremmolestiaesimilique.bmp?size=150x150&set=set1",
		"preco": "$7.17",
		"nome": "chlorhexidine gluconate"
	}, {
		"id": 34,
		"imagem": "https://robohash.org/adnesciuntaut.bmp?size=150x150&set=set1",
		"preco": "$7.30",
		"nome": "Venlafaxine Hydrochloride"
	}, {
		"id": 35,
		"imagem": "https://robohash.org/inciduntquirecusandae.png?size=150x150&set=set1",
		"preco": "$3.98",
		"nome": "METHOTREXATE"
	}, {
		"id": 36,
		"imagem": "https://robohash.org/omnisliberosequi.png?size=150x150&set=set1",
		"preco": "$9.54",
		"nome": "Nicotine"
	}, {
		"id": 37,
		"imagem": "https://robohash.org/vitaepariaturaut.bmp?size=150x150&set=set1",
		"preco": "$3.83",
		"nome": "Finasteride"
	}, {
		"id": 38,
		"imagem": "https://robohash.org/autemquiavoluptas.png?size=150x150&set=set1",
		"preco": "$6.24",
		"nome": "Abstral"
	}, {
		"id": 39,
		"imagem": "https://robohash.org/vellaborumeos.png?size=150x150&set=set1",
		"preco": "$7.52",
		"nome": "Nitrofurantoin Macrocrystals"
	}, {
		"id": 40,
		"imagem": "https://robohash.org/officiacommodinihil.png?size=150x150&set=set1",
		"preco": "$1.63",
		"nome": "Foscarnet Sodium"
	}, {
		"id": 41,
		"imagem": "https://robohash.org/rerumeosarchitecto.jpg?size=150x150&set=set1",
		"preco": "$2.59",
		"nome": "MEIJER LUBRICATING EYE DROPS"
	}, {
		"id": 42,
		"imagem": "https://robohash.org/impeditnecessitatibusquos.jpg?size=150x150&set=set1",
		"preco": "$6.48",
		"nome": "Low Dose Aspirin"
	}, {
		"id": 43,
		"imagem": "https://robohash.org/optiovelsint.png?size=150x150&set=set1",
		"preco": "$9.53",
		"nome": "Cedar Elm"
	}, {
		"id": 44,
		"imagem": "https://robohash.org/distinctioinciduntexcepturi.jpg?size=150x150&set=set1",
		"preco": "$4.83",
		"nome": "Hydrochlorothiazide"
	}, {
		"id": 45,
		"imagem": "https://robohash.org/quisarchitectodolor.png?size=150x150&set=set1",
		"preco": "$3.35",
		"nome": "HYDROCODONE BITARTRATE AND ACETAMINOPHEN"
	}, {
		"id": 46,
		"imagem": "https://robohash.org/cupiditateaccusantiumvoluptatem.png?size=150x150&set=set1",
		"preco": "$6.09",
		"nome": "bethanechol chloride"
	}, {
		"id": 47,
		"imagem": "https://robohash.org/nobisquivelit.bmp?size=150x150&set=set1",
		"preco": "$5.78",
		"nome": "Hydrocodone Bitartrate and Acetaminophen"
	}, {
		"id": 48,
		"imagem": "https://robohash.org/praesentiumestoptio.jpg?size=150x150&set=set1",
		"preco": "$4.83",
		"nome": "Butalbital, Acetaminophen, and Caffeine"
	}, {
		"id": 49,
		"imagem": "https://robohash.org/idautemeos.png?size=150x150&set=set1",
		"preco": "$7.15",
		"nome": "Methscopolamine Bromide"
	}, {
		"id": 50,
		"imagem": "https://robohash.org/eumplaceatassumenda.jpg?size=150x150&set=set1",
		"preco": "$8.98",
		"nome": "MEDI-DERM"
	}, {
		"id": 51,
		"imagem": "https://robohash.org/aspernaturasperioresqui.bmp?size=150x150&set=set1",
		"preco": "$8.52",
		"nome": "SELZENTRY"
	}, {
		"id": 52,
		"imagem": "https://robohash.org/recusandaenostrumdicta.bmp?size=150x150&set=set1",
		"preco": "$0.38",
		"nome": "NEXT CHOICE"
	}, {
		"id": 53,
		"imagem": "https://robohash.org/nihiletvoluptate.jpg?size=150x150&set=set1",
		"preco": "$6.25",
		"nome": "GUNA-IGF"
	}, {
		"id": 54,
		"imagem": "https://robohash.org/rationehicat.jpg?size=150x150&set=set1",
		"preco": "$9.56",
		"nome": "NAFCILLIN"
	}, {
		"id": 55,
		"imagem": "https://robohash.org/adquamqui.png?size=150x150&set=set1",
		"preco": "$0.83",
		"nome": "Potassium Chloride"
	}, {
		"id": 56,
		"imagem": "https://robohash.org/occaecatiquisquamtempore.png?size=150x150&set=set1",
		"preco": "$3.05",
		"nome": "Acetaminophen 8 Hour"
	}, {
		"id": 57,
		"imagem": "https://robohash.org/voluptatequimaiores.png?size=150x150&set=set1",
		"preco": "$7.87",
		"nome": "Readi-Cat2"
	}, {
		"id": 58,
		"imagem": "https://robohash.org/praesentiumsuntquisquam.bmp?size=150x150&set=set1",
		"preco": "$0.11",
		"nome": "EARACHE DROPS"
	}, {
		"id": 59,
		"imagem": "https://robohash.org/exipsamsuscipit.png?size=150x150&set=set1",
		"preco": "$0.08",
		"nome": "DIETHYLPROPION HYDROCHLORIDE"
	}, {
		"id": 60,
		"imagem": "https://robohash.org/asperioresquosincidunt.bmp?size=150x150&set=set1",
		"preco": "$0.71",
		"nome": "A.H.C. C-TONER"
	}, {
		"id": 61,
		"imagem": "https://robohash.org/laudantiumdelenitiid.png?size=150x150&set=set1",
		"preco": "$9.80",
		"nome": "Atropine Sulfate"
	}, {
		"id": 62,
		"imagem": "https://robohash.org/veroquilaudantium.bmp?size=150x150&set=set1",
		"preco": "$7.70",
		"nome": "AUREOBASIDIUM PULLULANS VAR PULLULANS"
	}, {
		"id": 63,
		"imagem": "https://robohash.org/similiquequamipsam.jpg?size=150x150&set=set1",
		"preco": "$5.78",
		"nome": "Carbamazepine"
	}, {
		"id": 64,
		"imagem": "https://robohash.org/voluptateconsecteturillo.bmp?size=150x150&set=set1",
		"preco": "$2.25",
		"nome": "migraine formula"
	}, {
		"id": 65,
		"imagem": "https://robohash.org/voluptatemharumesse.bmp?size=150x150&set=set1",
		"preco": "$4.14",
		"nome": "ck one airlight pressed powder spf 15"
	}, {
		"id": 66,
		"imagem": "https://robohash.org/aliasipsumplaceat.png?size=150x150&set=set1",
		"preco": "$2.43",
		"nome": "Ticlopidine Hydrochloride"
	}, {
		"id": 67,
		"imagem": "https://robohash.org/harummaioresdoloremque.bmp?size=150x150&set=set1",
		"preco": "$5.00",
		"nome": "good neighbor pharmacy childrens ibuprofen"
	}, {
		"id": 68,
		"imagem": "https://robohash.org/temporibuslaboriosamminus.jpg?size=150x150&set=set1",
		"preco": "$6.30",
		"nome": "CLARINS Ever Matte Broad Spectrum SPF 15 Tint 111"
	}, {
		"id": 69,
		"imagem": "https://robohash.org/dolorumcorruptiaperiam.jpg?size=150x150&set=set1",
		"preco": "$7.34",
		"nome": "Eastern Cottonwood"
	}, {
		"id": 70,
		"imagem": "https://robohash.org/quisundequi.jpg?size=150x150&set=set1",
		"preco": "$0.58",
		"nome": "Darby"
	}, {
		"id": 71,
		"imagem": "https://robohash.org/facilisevenietillo.jpg?size=150x150&set=set1",
		"preco": "$2.73",
		"nome": "potassium chloride"
	}, {
		"id": 72,
		"imagem": "https://robohash.org/fugaearepellendus.bmp?size=150x150&set=set1",
		"preco": "$10.00",
		"nome": "sunmark miconazole 3"
	}, {
		"id": 73,
		"imagem": "https://robohash.org/nemoquisvoluptate.png?size=150x150&set=set1",
		"preco": "$7.19",
		"nome": "Quetiapine Fumarate"
	}, {
		"id": 74,
		"imagem": "https://robohash.org/sequiarchitectoiusto.jpg?size=150x150&set=set1",
		"preco": "$1.81",
		"nome": "CLARINS Ever Matte Broad Spectrum SPF 15 Tint 107"
	}, {
		"id": 75,
		"imagem": "https://robohash.org/blanditiisautemimpedit.jpg?size=150x150&set=set1",
		"preco": "$6.51",
		"nome": "North Burn Relief"
	}, {
		"id": 76,
		"imagem": "https://robohash.org/fugitearumtotam.jpg?size=150x150&set=set1",
		"preco": "$4.75",
		"nome": "Loratadine and Pseudoephedrine Sulfate"
	}, {
		"id": 77,
		"imagem": "https://robohash.org/quasiconsequaturprovident.jpg?size=150x150&set=set1",
		"preco": "$9.51",
		"nome": "Morphine Sulfate"
	}, {
		"id": 78,
		"imagem": "https://robohash.org/sequiquisaut.jpg?size=150x150&set=set1",
		"preco": "$5.48",
		"nome": "headache formula"
	}, {
		"id": 79,
		"imagem": "https://robohash.org/temporeconsequunturvelit.jpg?size=150x150&set=set1",
		"preco": "$6.59",
		"nome": "Oregano"
	}, {
		"id": 80,
		"imagem": "https://robohash.org/assumendaconsequaturfacere.bmp?size=150x150&set=set1",
		"preco": "$7.53",
		"nome": "Minipress"
	}, {
		"id": 81,
		"imagem": "https://robohash.org/autquiet.png?size=150x150&set=set1",
		"preco": "$0.85",
		"nome": "Sumatriptan Succinate"
	}, {
		"id": 82,
		"imagem": "https://robohash.org/velitrecusandaeaut.bmp?size=150x150&set=set1",
		"preco": "$2.55",
		"nome": "Hydrocodone Bitartrate and Ibuprofen"
	}, {
		"id": 83,
		"imagem": "https://robohash.org/oditaliasdignissimos.jpg?size=150x150&set=set1",
		"preco": "$5.62",
		"nome": "BuPROPion Hydrochloride"
	}, {
		"id": 84,
		"imagem": "https://robohash.org/suntperspiciatisin.jpg?size=150x150&set=set1",
		"preco": "$1.30",
		"nome": "Lunesta"
	}, {
		"id": 85,
		"imagem": "https://robohash.org/quosetquaerat.jpg?size=150x150&set=set1",
		"preco": "$8.04",
		"nome": "PROCHLORPERAZINE MALEATE"
	}, {
		"id": 86,
		"imagem": "https://robohash.org/voluptasindicta.png?size=150x150&set=set1",
		"preco": "$3.11",
		"nome": "Vaseline Intensive Care"
	}, {
		"id": 87,
		"imagem": "https://robohash.org/animieadolorem.png?size=150x150&set=set1",
		"preco": "$0.20",
		"nome": "Dr. Dream Advanced Facial Treatment Serum"
	}, {
		"id": 88,
		"imagem": "https://robohash.org/autvoluptatemeaque.bmp?size=150x150&set=set1",
		"preco": "$3.06",
		"nome": "Heparin Sodium"
	}, {
		"id": 89,
		"imagem": "https://robohash.org/rerumnonquasi.png?size=150x150&set=set1",
		"preco": "$7.24",
		"nome": "Hydroxyzine Hydrochloride"
	}, {
		"id": 90,
		"imagem": "https://robohash.org/pariaturmagnamnobis.jpg?size=150x150&set=set1",
		"preco": "$4.60",
		"nome": "allergy and cough"
	}, {
		"id": 91,
		"imagem": "https://robohash.org/noneaqueet.png?size=150x150&set=set1",
		"preco": "$3.97",
		"nome": "Viscum Crataegus"
	}, {
		"id": 92,
		"imagem": "https://robohash.org/repudiandaererumut.jpg?size=150x150&set=set1",
		"preco": "$8.10",
		"nome": "Diethylpropion HCl"
	}, {
		"id": 93,
		"imagem": "https://robohash.org/aerrorpossimus.bmp?size=150x150&set=set1",
		"preco": "$7.51",
		"nome": "Midazolam"
	}, {
		"id": 94,
		"imagem": "https://robohash.org/repellendusenimsit.bmp?size=150x150&set=set1",
		"preco": "$6.18",
		"nome": "Propranolol Hydrochloride"
	}, {
		"id": 95,
		"imagem": "https://robohash.org/ullamestvoluptatibus.png?size=150x150&set=set1",
		"preco": "$6.18",
		"nome": "clobetasol propionate"
	}, {
		"id": 96,
		"imagem": "https://robohash.org/debitisminimaratione.bmp?size=150x150&set=set1",
		"preco": "$8.86",
		"nome": "Cefadroxil"
	}, {
		"id": 97,
		"imagem": "https://robohash.org/magniilloquis.png?size=150x150&set=set1",
		"preco": "$9.65",
		"nome": "care one ibuprofen"
	}, {
		"id": 98,
		"imagem": "https://robohash.org/dolorlaudantiumaspernatur.bmp?size=150x150&set=set1",
		"preco": "$8.36",
		"nome": "Sugar Beet Pollen"
	}, {
		"id": 99,
		"imagem": "https://robohash.org/doloremqueexautem.bmp?size=150x150&set=set1",
		"preco": "$3.12",
		"nome": "SUBSYS"
	}, {
		"id": 100,
		"imagem": "https://robohash.org/molestiasconsequunturnihil.bmp?size=150x150&set=set1",
		"preco": "$2.76",
		"nome": "EQUUS CABALLUS SKIN"
	}]

})
/* create the controller and inject Angular's $scope */
labApp.controller('mainController', function($scope) {
	/* create a message to display in our view */
	$scope.message = 'Bem vindo a Home';
});

labApp.controller('aboutController', function($scope) {
	$scope.message = 'Pagina de Sobre';
});

labApp.controller('contactController', function($scope) {
	$scope.message = 'Pagina de Contato';
});

labApp.controller('productController', function($scope) {
	$scope.message = 'Pagina de Contato';
});

labApp.controller('productControllerDetail', function($scope,$rootScope,$routeParams) {
	$scope.produto = $rootScope.productsList[$routeParams.id];
});


const customerInfoData = {
    "lastRefreshDate":"06/04/2018",
    "customer": {
        "hubCustomerId":"034545465",
        "hasBankingProducts": true,
        "isPremier": true,
        "personalDetail": {
            "firstName":"STEAM",
            "middleName":"",
            "lastName":"TRAINE",
            "prefix":"MR",
            "fullName":"MR STEAM TRAINE",
            "mobilePhone":"0450289551",
            "overseasMobile":false,
            "homePhone":"4722077000",
            "overseasHomePhone":true,
           
            "email":"instant@update.com",
            "nationalities": {
                "hasMultipleNationalities":true,
                "nationalities":["AUS","HKG"]
            },
            "countryOfBirth":"FRA",
            "dateOfBirth":"01/02/1980"
        },
        "residentialAddress": {
            "refNumber":"096264601",
            "address": {
                "countryCode":"AUS",
                "addressLine1":"5 PITT SBWY",
                "addressLine2":"5 PITT SBWY",
                "addressLine3":"5 PITT SBWY",
                "unit": "12",
                "streetName": "street test",
                "streetNumber": "12",
                "streetType": "ST",
                "suburb": "5 PITT SBWY  SBWY SBWY SBWY SBWY SBWY",
                "state": "NSW",
                "zip": "2000",
                "residingSince":"01/03/2011"
            }
        },
        "permanentAddress": {
            "refNumber":"096264601",
            "address": {
                "countryCode":"AUS",
                "addressLine1":"Varsity Lakes QLD 4227",
            }
        },
        "previousAddress": {
            "refNumber":"096264601",
            "address": {
                "countryCode":"AFG",
                "addressLine1":"Address Line 1 - Work",
                "addressLine3":"Address Line 3 - Work",
            }
        },
        "mailingAddress": {
            'refNumber' : '002482628',
            'address' : {
                'suburb' : 'Ashfield',
                'state' : 'NSW',
                'countryCode' : 'AUS',
                'zip' : '2323',
                'addressLine1' : 'PO BOX 23',
                'gpoPoBox' : 'PO BOX 23',
            }
           
        },
        "accountsMailingAddresses":[
            {
                "acctProdCode":"MCCQFF",
                "accountTitle": "HSBC Premier World MasterCard test",
                'refNumber' : '4524872895435621',
                'address' : {
                    'suburb' : 'Ashfield',
                    'state' : 'NSW',
                    'countryCode' : 'AUS',
                    'zip' : '2323',
                    'addressLine1' : 'PO BOX 23',
                    'gpoPoBox' : 'PO BOX 23',
                }
            },
            {
                "acctProdCode":"VCPLGY",
                "accountTitle": "HSBC Platinum Credit Card",
                "refNumber":"45248789545621",
                "address": {
                    "countryCode":"AFG",
                    "addressLine1":"Address Line 1 - Work",
                    "addressLine3":"Address Line 3 - Work"
                }
            },
        ],
        "employment": {
            "occupation":"12",
            "jobTitle":"Superman",
            "industry":"01010",
            "income": "30000000000000",
            "incomeFrequency":"Y",
            "employerName":"Justice League",
            "employerAddress": {
                "refNumber":"096264601",
                "address": {
                    "countryCode":"AFG",
                    "addressLine1":"Address Line 1 - Work",
                    "addressLine3":"Address Line 3 - Work"
                }
            },
            "employerPhoneNum": "0450289551",
            "employerPhoneIntelFlag":false
        },
        "taxResidencyDetail": {
            "taxResidencies":[
                {
                    "countryTax":"AUS"
                },
                {
                    "countryTax":"AFG",
                    "reasonForNoTinCode":"RC3"
                }
            ],
            "countryMismatchExplanation":""
        }
    },
    "canView":true,
    "canEdit":true,
    "cmd":"getCustomerInfo",
    "responseStatus":"success"
};
exports.data = customerInfoData;
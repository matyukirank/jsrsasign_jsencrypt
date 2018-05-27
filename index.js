var r = require('./bin/jsrsasign');

var rs = r.KEYUTIL.version;

var pkcs8PEM = "-----BEGIN ENCRYPTED PRIVATE KEY-----MIICxjBABgkqhkiG9w0BBQ0wMzAbBgkqhkiG9w0BBQwwDgQIht6YGII076UCAggAMBQGCCqGSIb3DQMHBAjdtSD+t6EmwQSCAoDyd4+rEmRSHSwoXT8cPUixlwT0u1Ma+2LTf2ZGSrd2t+PlGCMvv+NgD+NZZIPyBbsyGlNfzzlhdkS5zXwErEtD5rEtkotdcuAK4QpYkOCfO+UFS3dmV+Ay3sdC/G2GYk4u1X/qQNLwiEW7OAkLfQhEehsOr2xRgTiZkuhvV9ga3Nn5VvkPzLkjK+2HRnoNaJPcH3H8KtEGYJJUX1uksGqmZtWk+zzciM6i17sQuR1xHsEaXZeHmbsz2F5yx6D87xJWv+BadtXG8K75k5coGAHLIWyZQPuTjPrTsrV4s7SWfS/w3QpFdwRC9Xqj09G/D3g/mlBa9QdBTkcPj5N6T2UQQXOWViachpoqK8uvBF/osA9+tn0etojFk1wkHJFQPeUsjK0EdSkDYycDYH88sajCzn/KMnmaTOeEyEYs+mduT02mHaVAgN8X3vhEvpzoMf28y49RZQXMiByuo9ZLB9BXu+My6CAFxg+4xOnlxM8dtS8TeF6F0cDLYbx3tpg0fIsMFcgIgorJR1DUVyGvJa7WuTxgit9vVBqGmSapxR0q1TAyoSagIQkwEq5ANxn1pWW9MgHbLHT+hxTuUPvCB2fbj0m/Li8m21T892hCTOBCVnUJk1G7lyHqd9/tCHjmDNRmmya4npWUiVTsxOxiTetCqvsESCeTExBqB6bqlZpwQq2o+vlj5d2mKIHk1n8bZfTOqoT8rqXpOKUKFvDBr0e5Hi70/3bBnog9sxS1l3ipxiFzsSLGlidUmOgiRNoVYPBKXJAChTgtsc4X1S46frfVfCebET+h+VzUF7TzkNeJsQYtw3pBLtvUGLdIg5PBaPE+OSooofK2tNwMUY0mVkgT-----END ENCRYPTED PRIVATE KEY-----";

var passcode = "passwd";

// openssl pkcs8 -in rsa_1024_priv.pem -topk8 -v2 des3 -out pksc8_1024_priv.pem -passout pass:passwd

//Not desired result 
// var key = r.KEYUTIL.getKeyFromEncryptedPKCS8PEM(pkcs8PEM, passcode);

// HEX 
var key = r.KEYUTIL._getPlainPKCS8HexFromEncryptedPKCS8PEM(pkcs8PEM, passcode);

var k = r.hextopem(key, "RSA PRIVATE KEY");
// var t = r.hextorstr(key, "DES-EDE3-CBC");

console.log(k);
const countryCodes = [
	'AD',
	'AE',
	'AF',
	'AG',
	'AI',
	'AL',
	'AM',
	'AO',
	'AQ',
	'AR',
	'AS',
	'AT',
	'AU',
	'AW',
	'AX',
	'AZ',
	'BA',
	'BB',
	'BD',
	'BE',
	'BF',
	'BG',
	'BH',
	'BI',
	'BJ',
	'BL',
	'BM',
	'BN',
	'BO',
	'BQ',
	'BR',
	'BS',
	'BT',
	'BV',
	'BW',
	'BY',
	'BZ',
	'CA',
	'CC',
	'CD',
	'CF',
	'CG',
	'CH',
	'CI',
	'CK',
	'CL',
	'CM',
	'CN',
	'CO',
	'CR',
	'CU',
	'CV',
	'CW',
	'CX',
	'CY',
	'CZ',
	'DE',
	'DJ',
	'DK',
	'DM',
	'DO',
	'DZ',
	'EC',
	'EE',
	'EG',
	'EH',
	'ER',
	'ES',
	'ET',
	'FI',
	'FJ',
	'FK',
	'FM',
	'FO',
	'FR',
	'GA',
	'GB',
	'GD',
	'GE',
	'GF',
	'GG',
	'GH',
	'GI',
	'GL',
	'GM',
	'GN',
	'GP',
	'GQ',
	'GR',
	'GS',
	'GT',
	'GU',
	'GW',
	'GY',
	'HK',
	'HM',
	'HN',
	'HR',
	'HT',
	'HU',
	'ID',
	'IE',
	'IL',
	'IM',
	'IN',
	'IO',
	'IQ',
	'IR',
	'IS',
	'IT',
	'JE',
	'JM',
	'JO',
	'JP',
	'KE',
	'KG',
	'KH',
	'KI',
	'KM',
	'KN',
	'KP',
	'KR',
	'KW',
	'KY',
	'KZ',
	'LA',
	'LB',
	'LC',
	'LI',
	'LK',
	'LR',
	'LS',
	'LT',
	'LU',
	'LV',
	'LY',
	'MA',
	'MC',
	'MD',
	'ME',
	'MF',
	'MG',
	'MH',
	'MK',
	'ML',
	'MM',
	'MN',
	'MO',
	'MP',
	'MQ',
	'MR',
	'MS',
	'MT',
	'MU',
	'MV',
	'MW',
	'MX',
	'MY',
	'MZ',
	'NA',
	'NC',
	'NE',
	'NF',
	'NG',
	'NI',
	'NL',
	'NO',
	'NP',
	'NR',
	'NU',
	'NZ',
	'OM',
	'PA',
	'PE',
	'PF',
	'PG',
	'PH',
	'PK',
	'PL',
	'PM',
	'PN',
	'PR',
	'PS',
	'PT',
	'PW',
	'PY',
	'QA',
	'RE',
	'RO',
	'RS',
	'RU',
	'RW',
	'SA',
	'SB',
	'SC',
	'SD',
	'SE',
	'SG',
	'SH',
	'SI',
	'SJ',
	'SK',
	'SL',
	'SM',
	'SN',
	'SO',
	'SR',
	'SS',
	'ST',
	'SV',
	'SX',
	'SY',
	'SZ',
	'TC',
	'TD',
	'TF',
	'TG',
	'TH',
	'TJ',
	'TK',
	'TL',
	'TM',
	'TN',
	'TO',
	'TR',
	'TT',
	'TV',
	'TW',
	'TZ',
	'UA',
	'UG',
	'UM',
	'US',
	'UY',
	'UZ',
	'VA',
	'VC',
	'VE',
	'VG',
	'VI',
	'VN',
	'VU',
	'WF',
	'WS',
	'YE',
	'YT',
	'ZA',
	'ZM',
	'ZW',
] as const;
export type CountryCode = typeof countryCodes[number];

export const countryNames = [
	'Andorra',
	'United Arab Emirates',
	'Afghanistan',
	'Antigua and Barbuda',
	'Anguilla',
	'Albania',
	'Armenia',
	'Angola',
	'Antarctica',
	'Argentina',
	'American Samoa',
	'Austria',
	'Australia',
	'Aruba',
	'Åland Islands',
	'Azerbaijan',
	'Bosnia and Herzegovina',
	'Barbados',
	'Bangladesh',
	'Belgium',
	'Burkina Faso',
	'Bulgaria',
	'Bahrain',
	'Burundi',
	'Benin',
	'Saint Barthélemy',
	'Bermuda',
	'Brunei Darussalam',
	'Bolivia',
	'Bonaire',
	'Brazil',
	'Bahamas',
	'Bhutan',
	'Bouvet Island',
	'Botswana',
	'Belarus',
	'Belize',
	'Canada',
	'Cocos (Keeling) Islands',
	'Congo',
	'Central African Republic',
	'Congo',
	'Switzerland',
	"Côte d'Ivoire",
	'Cook Islands',
	'Chile',
	'Cameroon',
	'China',
	'Colombia',
	'Costa Rica',
	'Cuba',
	'Cabo Verde',
	'Curaçao',
	'Christmas Island',
	'Cyprus',
	'Czechia',
	'Germany',
	'Djibouti',
	'Denmark',
	'Dominica',
	'Dominican Republic',
	'Algeria',
	'Ecuador',
	'Estonia',
	'Egypt',
	'Western Sahara',
	'Eritrea',
	'Spain',
	'Ethiopia',
	'Finland',
	'Fiji',
	'Falkland Islands (Malvinas)',
	'Micronesia',
	'Faroe Islands',
	'France',
	'Gabon',
	'United Kingdom',
	'Grenada',
	'Georgia',
	'French Guiana',
	'Guernsey',
	'Ghana',
	'Gibraltar',
	'Greenland',
	'Gambia',
	'Guinea',
	'Guadeloupe',
	'Equatorial Guinea',
	'Greece',
	'South Georgia and the South Sandwich Islands',
	'Guatemala',
	'Guam',
	'Guinea-Bissau',
	'Guyana',
	'Hong Kong',
	'Heard Island and McDonald Islands',
	'Honduras',
	'Croatia',
	'Haiti',
	'Hungary',
	'Indonesia',
	'Ireland',
	'Israel',
	'Isle of Man',
	'India',
	'British Indian Ocean Territory',
	'Iraq',
	'Iran',
	'Iceland',
	'Italy',
	'Jersey',
	'Jamaica',
	'Jordan',
	'Japan',
	'Kenya',
	'Kyrgyzstan',
	'Cambodia',
	'Kiribati',
	'Comoros',
	'Saint Kitts and Nevis',
	'Korea',
	'Korea',
	'Kuwait',
	'Cayman Islands',
	'Kazakhstan',
	"Lao People's Democratic Republic",
	'Lebanon',
	'Saint Lucia',
	'Liechtenstein',
	'Sri Lanka',
	'Liberia',
	'Lesotho',
	'Lithuania',
	'Luxembourg',
	'Latvia',
	'Libya',
	'Morocco',
	'Monaco',
	'Moldova',
	'Montenegro',
	'Saint Martin',
	'Madagascar',
	'Marshall Islands',
	'North Macedonia',
	'Mali',
	'Myanmar',
	'Mongolia',
	'Macao',
	'Northern Mariana Islands',
	'Martinique',
	'Mauritania',
	'Montserrat',
	'Malta',
	'Mauritius',
	'Maldives',
	'Malawi',
	'Mexico',
	'Malaysia',
	'Mozambique',
	'Namibia',
	'New Caledonia',
	'Niger',
	'Norfolk Island',
	'Nigeria',
	'Nicaragua',
	'Netherlands',
	'Norway',
	'Nepal',
	'Nauru',
	'Niue',
	'New Zealand',
	'Oman',
	'Panama',
	'Peru',
	'French Polynesia',
	'Papua New Guinea',
	'Philippines',
	'Pakistan',
	'Poland',
	'Saint Pierre and Miquelon',
	'Pitcairn',
	'Puerto Rico',
	'Palestine',
	'Portugal',
	'Palau',
	'Paraguay',
	'Qatar',
	'Réunion',
	'Romania',
	'Serbia',
	'Russia',
	'Rwanda',
	'Saudi Arabia',
	'Solomon Islands',
	'Seychelles',
	'Sudan',
	'Sweden',
	'Singapore',
	'Saint Helena',
	'Slovenia',
	'Svalbard and Jan Mayen',
	'Slovakia',
	'Sierra Leone',
	'San Marino',
	'Senegal',
	'Somalia',
	'Suriname',
	'South Sudan',
	'Sao Tome and Principe',
	'El Salvador',
	'Sint Maarten',
	'Syrian Arab Republic',
	'Eswatini',
	'Turks and Caicos Islands',
	'Chad',
	'French Southern Territories',
	'Togo',
	'Thailand',
	'Tajikistan',
	'Tokelau',
	'Timor-Leste',
	'Turkmenistan',
	'Tunisia',
	'Tonga',
	'Türkiye',
	'Trinidad and Tobago',
	'Tuvalu',
	'Taiwan',
	'Tanzania',
	'Ukraine',
	'Uganda',
	'United States Minor Outlying Islands',
	'United States',
	'Uruguay',
	'Uzbekistan',
	'Holy See',
	'Saint Vincent and the Grenadines',
	'Venezuela',
	'Virgin Islands',
	'Virgin Islands',
	'Viet Nam',
	'Vanuatu',
	'Wallis and Futuna',
	'Samoa',
	'Yemen',
	'Mayotte',
	'South Africa',
	'Zambia',
	'Zimbabwe',
] as const;
export type CountryName = typeof countryNames[number];

export const countryNameToCode: Record<CountryName, CountryCode> = {
	Andorra: 'AD',
	'United Arab Emirates': 'AE',
	Afghanistan: 'AF',
	'Antigua and Barbuda': 'AG',
	Anguilla: 'AI',
	Albania: 'AL',
	Armenia: 'AM',
	Angola: 'AO',
	Antarctica: 'AQ',
	Argentina: 'AR',
	'American Samoa': 'AS',
	Austria: 'AT',
	Australia: 'AU',
	Aruba: 'AW',
	'Åland Islands': 'AX',
	Azerbaijan: 'AZ',
	'Bosnia and Herzegovina': 'BA',
	Barbados: 'BB',
	Bangladesh: 'BD',
	Belgium: 'BE',
	'Burkina Faso': 'BF',
	Bulgaria: 'BG',
	Bahrain: 'BH',
	Burundi: 'BI',
	Benin: 'BJ',
	'Saint Barthélemy': 'BL',
	Bermuda: 'BM',
	'Brunei Darussalam': 'BN',
	Bolivia: 'BO',
	Bonaire: 'BQ',
	Brazil: 'BR',
	Bahamas: 'BS',
	Bhutan: 'BT',
	'Bouvet Island': 'BV',
	Botswana: 'BW',
	Belarus: 'BY',
	Belize: 'BZ',
	Canada: 'CA',
	'Cocos (Keeling) Islands': 'CC',
	Congo: 'CG',
	'Central African Republic': 'CF',
	Switzerland: 'CH',
	"Côte d'Ivoire": 'CI',
	'Cook Islands': 'CK',
	Chile: 'CL',
	Cameroon: 'CM',
	China: 'CN',
	Colombia: 'CO',
	'Costa Rica': 'CR',
	Cuba: 'CU',
	'Cabo Verde': 'CV',
	Curaçao: 'CW',
	'Christmas Island': 'CX',
	Cyprus: 'CY',
	Czechia: 'CZ',
	Germany: 'DE',
	Djibouti: 'DJ',
	Denmark: 'DK',
	Dominica: 'DM',
	'Dominican Republic': 'DO',
	Algeria: 'DZ',
	Ecuador: 'EC',
	Estonia: 'EE',
	Egypt: 'EG',
	'Western Sahara': 'EH',
	Eritrea: 'ER',
	Spain: 'ES',
	Ethiopia: 'ET',
	Finland: 'FI',
	Fiji: 'FJ',
	'Falkland Islands (Malvinas)': 'FK',
	Micronesia: 'FM',
	'Faroe Islands': 'FO',
	France: 'FR',
	Gabon: 'GA',
	'United Kingdom': 'GB',
	Grenada: 'GD',
	Georgia: 'GE',
	'French Guiana': 'GF',
	Guernsey: 'GG',
	Ghana: 'GH',
	Gibraltar: 'GI',
	Greenland: 'GL',
	Gambia: 'GM',
	Guinea: 'GN',
	Guadeloupe: 'GP',
	'Equatorial Guinea': 'GQ',
	Greece: 'GR',
	'South Georgia and the South Sandwich Islands': 'GS',
	Guatemala: 'GT',
	Guam: 'GU',
	'Guinea-Bissau': 'GW',
	Guyana: 'GY',
	'Hong Kong': 'HK',
	'Heard Island and McDonald Islands': 'HM',
	Honduras: 'HN',
	Croatia: 'HR',
	Haiti: 'HT',
	Hungary: 'HU',
	Indonesia: 'ID',
	Ireland: 'IE',
	Israel: 'IL',
	'Isle of Man': 'IM',
	India: 'IN',
	'British Indian Ocean Territory': 'IO',
	Iraq: 'IQ',
	Iran: 'IR',
	Iceland: 'IS',
	Italy: 'IT',
	Jersey: 'JE',
	Jamaica: 'JM',
	Jordan: 'JO',
	Japan: 'JP',
	Kenya: 'KE',
	Kyrgyzstan: 'KG',
	Cambodia: 'KH',
	Kiribati: 'KI',
	Comoros: 'KM',
	'Saint Kitts and Nevis': 'KN',
	Korea: 'KR',
	Kuwait: 'KW',
	'Cayman Islands': 'KY',
	Kazakhstan: 'KZ',
	"Lao People's Democratic Republic": 'LA',
	Lebanon: 'LB',
	'Saint Lucia': 'LC',
	Liechtenstein: 'LI',
	'Sri Lanka': 'LK',
	Liberia: 'LR',
	Lesotho: 'LS',
	Lithuania: 'LT',
	Luxembourg: 'LU',
	Latvia: 'LV',
	Libya: 'LY',
	Morocco: 'MA',
	Monaco: 'MC',
	Moldova: 'MD',
	Montenegro: 'ME',
	'Saint Martin': 'MF',
	Madagascar: 'MG',
	'Marshall Islands': 'MH',
	'North Macedonia': 'MK',
	Mali: 'ML',
	Myanmar: 'MM',
	Mongolia: 'MN',
	Macao: 'MO',
	'Northern Mariana Islands': 'MP',
	Martinique: 'MQ',
	Mauritania: 'MR',
	Montserrat: 'MS',
	Malta: 'MT',
	Mauritius: 'MU',
	Maldives: 'MV',
	Malawi: 'MW',
	Mexico: 'MX',
	Malaysia: 'MY',
	Mozambique: 'MZ',
	Namibia: 'NA',
	'New Caledonia': 'NC',
	Niger: 'NE',
	'Norfolk Island': 'NF',
	Nigeria: 'NG',
	Nicaragua: 'NI',
	Netherlands: 'NL',
	Norway: 'NO',
	Nepal: 'NP',
	Nauru: 'NR',
	Niue: 'NU',
	'New Zealand': 'NZ',
	Oman: 'OM',
	Panama: 'PA',
	Peru: 'PE',
	'French Polynesia': 'PF',
	'Papua New Guinea': 'PG',
	Philippines: 'PH',
	Pakistan: 'PK',
	Poland: 'PL',
	'Saint Pierre and Miquelon': 'PM',
	Pitcairn: 'PN',
	'Puerto Rico': 'PR',
	Palestine: 'PS',
	Portugal: 'PT',
	Palau: 'PW',
	Paraguay: 'PY',
	Qatar: 'QA',
	Réunion: 'RE',
	Romania: 'RO',
	Serbia: 'RS',
	Russia: 'RU',
	Rwanda: 'RW',
	'Saudi Arabia': 'SA',
	'Solomon Islands': 'SB',
	Seychelles: 'SC',
	Sudan: 'SD',
	Sweden: 'SE',
	Singapore: 'SG',
	'Saint Helena': 'SH',
	Slovenia: 'SI',
	'Svalbard and Jan Mayen': 'SJ',
	Slovakia: 'SK',
	'Sierra Leone': 'SL',
	'San Marino': 'SM',
	Senegal: 'SN',
	Somalia: 'SO',
	Suriname: 'SR',
	'South Sudan': 'SS',
	'Sao Tome and Principe': 'ST',
	'El Salvador': 'SV',
	'Sint Maarten': 'SX',
	'Syrian Arab Republic': 'SY',
	Eswatini: 'SZ',
	'Turks and Caicos Islands': 'TC',
	Chad: 'TD',
	'French Southern Territories': 'TF',
	Togo: 'TG',
	Thailand: 'TH',
	Tajikistan: 'TJ',
	Tokelau: 'TK',
	'Timor-Leste': 'TL',
	Turkmenistan: 'TM',
	Tunisia: 'TN',
	Tonga: 'TO',
	Türkiye: 'TR',
	'Trinidad and Tobago': 'TT',
	Tuvalu: 'TV',
	Taiwan: 'TW',
	Tanzania: 'TZ',
	Ukraine: 'UA',
	Uganda: 'UG',
	'United States Minor Outlying Islands': 'UM',
	'United States': 'US',
	Uruguay: 'UY',
	Uzbekistan: 'UZ',
	'Holy See': 'VA',
	'Saint Vincent and the Grenadines': 'VC',
	Venezuela: 'VE',
	'Virgin Islands': 'VI',
	'Viet Nam': 'VN',
	Vanuatu: 'VU',
	'Wallis and Futuna': 'WF',
	Samoa: 'WS',
	Yemen: 'YE',
	Mayotte: 'YT',
	'South Africa': 'ZA',
	Zambia: 'ZM',
	Zimbabwe: 'ZW',
};

export const countryCodeToName: Record<CountryCode, CountryName> = {
	AD: 'Andorra',
	AE: 'United Arab Emirates',
	AF: 'Afghanistan',
	AG: 'Antigua and Barbuda',
	AI: 'Anguilla',
	AL: 'Albania',
	AM: 'Armenia',
	AO: 'Angola',
	AQ: 'Antarctica',
	AR: 'Argentina',
	AS: 'American Samoa',
	AT: 'Austria',
	AU: 'Australia',
	AW: 'Aruba',
	AX: 'Åland Islands',
	AZ: 'Azerbaijan',
	BA: 'Bosnia and Herzegovina',
	BB: 'Barbados',
	BD: 'Bangladesh',
	BE: 'Belgium',
	BF: 'Burkina Faso',
	BG: 'Bulgaria',
	BH: 'Bahrain',
	BI: 'Burundi',
	BJ: 'Benin',
	BL: 'Saint Barthélemy',
	BM: 'Bermuda',
	BN: 'Brunei Darussalam',
	BO: 'Bolivia',
	BQ: 'Bonaire',
	BR: 'Brazil',
	BS: 'Bahamas',
	BT: 'Bhutan',
	BV: 'Bouvet Island',
	BW: 'Botswana',
	BY: 'Belarus',
	BZ: 'Belize',
	CA: 'Canada',
	CC: 'Cocos (Keeling) Islands',
	CD: 'Congo',
	CF: 'Central African Republic',
	CG: 'Congo',
	CH: 'Switzerland',
	CI: "Côte d'Ivoire",
	CK: 'Cook Islands',
	CL: 'Chile',
	CM: 'Cameroon',
	CN: 'China',
	CO: 'Colombia',
	CR: 'Costa Rica',
	CU: 'Cuba',
	CV: 'Cabo Verde',
	CW: 'Curaçao',
	CX: 'Christmas Island',
	CY: 'Cyprus',
	CZ: 'Czechia',
	DE: 'Germany',
	DJ: 'Djibouti',
	DK: 'Denmark',
	DM: 'Dominica',
	DO: 'Dominican Republic',
	DZ: 'Algeria',
	EC: 'Ecuador',
	EE: 'Estonia',
	EG: 'Egypt',
	EH: 'Western Sahara',
	ER: 'Eritrea',
	ES: 'Spain',
	ET: 'Ethiopia',
	FI: 'Finland',
	FJ: 'Fiji',
	FK: 'Falkland Islands (Malvinas)',
	FM: 'Micronesia',
	FO: 'Faroe Islands',
	FR: 'France',
	GA: 'Gabon',
	GB: 'United Kingdom',
	GD: 'Grenada',
	GE: 'Georgia',
	GF: 'French Guiana',
	GG: 'Guernsey',
	GH: 'Ghana',
	GI: 'Gibraltar',
	GL: 'Greenland',
	GM: 'Gambia',
	GN: 'Guinea',
	GP: 'Guadeloupe',
	GQ: 'Equatorial Guinea',
	GR: 'Greece',
	GS: 'South Georgia and the South Sandwich Islands',
	GT: 'Guatemala',
	GU: 'Guam',
	GW: 'Guinea-Bissau',
	GY: 'Guyana',
	HK: 'Hong Kong',
	HM: 'Heard Island and McDonald Islands',
	HN: 'Honduras',
	HR: 'Croatia',
	HT: 'Haiti',
	HU: 'Hungary',
	ID: 'Indonesia',
	IE: 'Ireland',
	IL: 'Israel',
	IM: 'Isle of Man',
	IN: 'India',
	IO: 'British Indian Ocean Territory',
	IQ: 'Iraq',
	IR: 'Iran',
	IS: 'Iceland',
	IT: 'Italy',
	JE: 'Jersey',
	JM: 'Jamaica',
	JO: 'Jordan',
	JP: 'Japan',
	KE: 'Kenya',
	KG: 'Kyrgyzstan',
	KH: 'Cambodia',
	KI: 'Kiribati',
	KM: 'Comoros',
	KN: 'Saint Kitts and Nevis',
	KP: 'Korea',
	KR: 'Korea',
	KW: 'Kuwait',
	KY: 'Cayman Islands',
	KZ: 'Kazakhstan',
	LA: "Lao People's Democratic Republic",
	LB: 'Lebanon',
	LC: 'Saint Lucia',
	LI: 'Liechtenstein',
	LK: 'Sri Lanka',
	LR: 'Liberia',
	LS: 'Lesotho',
	LT: 'Lithuania',
	LU: 'Luxembourg',
	LV: 'Latvia',
	LY: 'Libya',
	MA: 'Morocco',
	MC: 'Monaco',
	MD: 'Moldova',
	ME: 'Montenegro',
	MF: 'Saint Martin',
	MG: 'Madagascar',
	MH: 'Marshall Islands',
	MK: 'North Macedonia',
	ML: 'Mali',
	MM: 'Myanmar',
	MN: 'Mongolia',
	MO: 'Macao',
	MP: 'Northern Mariana Islands',
	MQ: 'Martinique',
	MR: 'Mauritania',
	MS: 'Montserrat',
	MT: 'Malta',
	MU: 'Mauritius',
	MV: 'Maldives',
	MW: 'Malawi',
	MX: 'Mexico',
	MY: 'Malaysia',
	MZ: 'Mozambique',
	NA: 'Namibia',
	NC: 'New Caledonia',
	NE: 'Niger',
	NF: 'Norfolk Island',
	NG: 'Nigeria',
	NI: 'Nicaragua',
	NL: 'Netherlands',
	NO: 'Norway',
	NP: 'Nepal',
	NR: 'Nauru',
	NU: 'Niue',
	NZ: 'New Zealand',
	OM: 'Oman',
	PA: 'Panama',
	PE: 'Peru',
	PF: 'French Polynesia',
	PG: 'Papua New Guinea',
	PH: 'Philippines',
	PK: 'Pakistan',
	PL: 'Poland',
	PM: 'Saint Pierre and Miquelon',
	PN: 'Pitcairn',
	PR: 'Puerto Rico',
	PS: 'Palestine',
	PT: 'Portugal',
	PW: 'Palau',
	PY: 'Paraguay',
	QA: 'Qatar',
	RE: 'Réunion',
	RO: 'Romania',
	RS: 'Serbia',
	RU: 'Russia',
	RW: 'Rwanda',
	SA: 'Saudi Arabia',
	SB: 'Solomon Islands',
	SC: 'Seychelles',
	SD: 'Sudan',
	SE: 'Sweden',
	SG: 'Singapore',
	SH: 'Saint Helena',
	SI: 'Slovenia',
	SJ: 'Svalbard and Jan Mayen',
	SK: 'Slovakia',
	SL: 'Sierra Leone',
	SM: 'San Marino',
	SN: 'Senegal',
	SO: 'Somalia',
	SR: 'Suriname',
	SS: 'South Sudan',
	ST: 'Sao Tome and Principe',
	SV: 'El Salvador',
	SX: 'Sint Maarten',
	SY: 'Syrian Arab Republic',
	SZ: 'Eswatini',
	TC: 'Turks and Caicos Islands',
	TD: 'Chad',
	TF: 'French Southern Territories',
	TG: 'Togo',
	TH: 'Thailand',
	TJ: 'Tajikistan',
	TK: 'Tokelau',
	TL: 'Timor-Leste',
	TM: 'Turkmenistan',
	TN: 'Tunisia',
	TO: 'Tonga',
	TR: 'Türkiye',
	TT: 'Trinidad and Tobago',
	TV: 'Tuvalu',
	TW: 'Taiwan',
	TZ: 'Tanzania',
	UA: 'Ukraine',
	UG: 'Uganda',
	UM: 'United States Minor Outlying Islands',
	US: 'United States',
	UY: 'Uruguay',
	UZ: 'Uzbekistan',
	VA: 'Holy See',
	VC: 'Saint Vincent and the Grenadines',
	VE: 'Venezuela',
	VG: 'Virgin Islands',
	VI: 'Virgin Islands',
	VN: 'Viet Nam',
	VU: 'Vanuatu',
	WF: 'Wallis and Futuna',
	WS: 'Samoa',
	YE: 'Yemen',
	YT: 'Mayotte',
	ZA: 'South Africa',
	ZM: 'Zambia',
	ZW: 'Zimbabwe',
};

export const SMM2CountryCodes: CountryCode[] = [
	'AE', 'AL', 'AR', 'AT', 'AU', 'BB', 'BE',
	'BG', 'BR', 'CA', 'CH', 'CL', 'CO', 'CY',
	'CZ', 'DE', 'DK', 'EC', 'EE', 'ES', 'FI',
	'FR', 'GB', 'GR', 'GT', 'HK', 'HR', 'HU',
	'IE', 'IL', 'IS', 'IT', 'JP', 'KR', 'KZ',
	'LT', 'LU', 'LV', 'MA', 'MG', 'MK', 'MN',
	'MT', 'MX', 'MZ', 'NL', 'NO', 'NZ', 'PE',
	'PH', 'PL', 'PT', 'RO', 'RU', 'SC', 'SE',
	'SI', 'SK', 'TN', 'TW', 'US', 'VE', 'ZA',
];

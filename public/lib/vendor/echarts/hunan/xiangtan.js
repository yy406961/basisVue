/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

;(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory)
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'))
    } else {
        // Browser globals
        factory({}, root.echarts)
    }
})(this, function(exports, echarts) {
    var log = function(msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg)
        }
    }
    if (!echarts) {
        log('ECharts is not Loaded')
        return
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded')
        return
    }
    echarts.registerMap('xiangtan', {
        type: 'FeatureCollection',
        features: [
            {
                type: "Feature",
                id: "430302",
                properties: {
                    name: "雨湖区",
                    cp: [
                        112.907427,
                        27.86077
                    ],
                    childNum: 7
                },
                geometry: {
                    type: "MultiPolygon",
                    coordinates: [
                        [
                            "@@B@BA@ACAICCAGGCICEAA@ABE@@BGAG@CBE@@@AA@A@EFEDADAFAD@B@BDBBBB@@B@B@BA@@@ABAB@BBD@B@DABCBAD@@@D@DHDJJFDFFFB@BD@DABCAAAA@CBCHEB@"
                        ],
                        [
                            "@@EBG@C@E@E@EDCB@FAFAHCFEDEDEDAB@BA@@@@@@B@D@B@FAF@DAD@BADABABCBABCBEBA@A@@B@BBH@DBD@@BBDBBBBB@B@DA@EDCDABCBC@GBA@IAECCAA@@BA@@B@BABABADABAH@D@B@BDBD@BAFCFAB@D@FBDFFJDBBDFJB@@AFED@BAD@B@@@@@JDF@D@D@B@DADED@FBFDDBFHBDBB@DBB@BF@DAB@DADAHCDADCDEBAB@BAD@D@D@DBDBDBBDBBB@BA@ABA@A@G@ABA@ABBF@D@JBJBB@FD@@F@@@@@@B@BBDBD@@DB@BB@@B@BB@L@AECMAGGKCEEGECCCUMOGoSIEGCECCCACCGAIAI@E@EBIDKDGDEDC"
                        ],
                        [
                            "@@@B@@@BBBAB@BBBDB@BBD@@BDBBB@FBFAD@BCAA@@CAA@C@CAAAA@@AB@@@J@BAB@@AAC@@C@@@A@@B@@@BA@@@A@C@A@A@AA@C@A@@AAA@AB@@@@"
                        ],
                        [
                            "@@@ABA@I@E@GAAAACAI@CAC@A@ABAB@HCNAB@DB@BDDBL@FBD@B@BABA"
                        ],
                        [
                            "@@BCBABA@AAAAAGACB@@ABCDCD@B@BB@BDFBF@B@@ABC@@"
                        ],
                        [
                            "@@@@BAAC@AC@A@C@@B@@@@A@@B@B@B@B@BB@B@@@@@B@D@BC"
                        ],
                        [
                            "@@F@B@BA@@AAA@GACCC@@@A@@B@@@D@DB@B@B@B@D@"
                        ]
                    ],
                    encodeOffsets: [
                        [
                            [
                                115584,
                                28645
                            ]
                        ],
                        [
                            [
                                115606,
                                28466
                            ]
                        ],
                        [
                            [
                                115408,
                                28516
                            ]
                        ],
                        [
                            [
                                115374,
                                28521
                            ]
                        ],
                        [
                            [
                                115388,
                                28505
                            ]
                        ],
                        [
                            [
                                115379,
                                28492
                            ]
                        ],
                        [
                            [
                                115366,
                                28488
                            ]
                        ]
                    ]
                }
            },
            {
                type: "Feature",
                id: "430382",
                properties: {
                    name: "韶山市",
                    cp: [
                        112.52848,
                        27.922682
                    ],
                    childNum: 1
                },
                geometry: {
                    type: "Polygon",
                    coordinates: [
                        "@@DCDAB@BAHCDCDABA@A@@@@EAC@AA@A@@ACAC@C@EBE@CBCBCBA@@AA@@BA@AB@D@B@BBB@D@D@F@DAFBB@DABA@@@CBC@C@E@ABA@C@@BABA@ABABA@@D@D@D@DABAB@B@DAD@DBBBB@BBBDBD@BBBB@BABA@CBC@A@ABCBAB@BADAB@D@@ABA@A@A@AAA@ABA@@BAB@BAD@B@D@B@B@F@DCFADADABA@ABA@A@A@A@AAAAC@AACCC@C@C@A@ABC@@BABCBABA@A@AAABA@ABCBAB@BA@BB@BB@@B@BA@@@C@EBC@A@@DADAB@@AAAAAAA@C@ABABAD@D@D@D@DAFCBADABABCBA@ABA@C@ABC@A@ABABABAF@F@@@@AACAC@A@ABC@A@IA@@@AAEAC@A@E@CAAA@A@CAEAACCAACAA@AECAAACB@BABABA@A@ABCBABA@CBEBI@A@@@@A@A@A@G@CAA@A@@A@ABCBCBABC@CBABABEBGBEBGDCFAFEHGDG@E@ABACC@BAA@KAKEGDMD[PONADQKCAQCBS@C@ETE[ICSUEIHURORA@AB@F@BADC@ABA@@BABAB@@ABEFADAD@N@B@@@DA@E@CACCEAA@CCE@AAA@@BAD@BADCH@B@BBBFFDF@B@FABCD@BBBDBFBF@FBFBFBBBDFDF@BFFBBBAB@@@BB@B@B@BA@A@A@A@C@@B@BB@@BBFAF@B@@@@CAA@@B@@@NB@@B@B@BAD@B@@B@B@@@B@BB@@@AAA@A@ABABA@@B@@BB@@B@@DDDBDD@@@@B@@CBA@@B@B@@BA@@FJHILPDJ@FBDABDFA@@@@BBAB@BAJ@JBLDHJLJFD@XT@@BF@DADBD@DBBFB@BBD@D@DBBDBBB"
                    ],
                    encodeOffsets: [
                        [
                            115202,
                            28702
                        ]
                    ]
                }
            },
            {
                type: "Feature",
                id: "430304",
                properties: {
                    name: "岳塘区",
                    cp: [
                        112.927707,
                        27.828854
                    ],
                    childNum: 1
                },
                geometry: {
                    type: "Polygon",
                    coordinates: [
                        "@@@@AAAAAAAA@@A@CBEEOIGQCMAOAICCCGGIIQAOAM@@@AGECCACAA@A@A@CBA@@DAB@@@@A@C@E@AFI@A@@@@BEKACCIGMIOKMKGKGGICyS{OSCI@CAK@K@IBGDIFGDCDCFCHCLAJ@F@FBJBJDHBDDDFDHDJFpTPHVNDDFDFHDFHLBHDNBFDNBFBBDDFHDJBFDFLHHBHBLFJHJJDH@HAJAHGF@@ADDBB@DDFHB@DBB@FABBD@BBDFBB@BCDAB@B@B@BB@BBD@FABABAAAAAAA@CBABABAB@D@DB@B@F@BCFCFCJ@DBB@@FDDFDDDHDB@@LBjFHBFABCBCHGHGFC@ABCBCBABA@AAAACEECCCCEAACC@AA@AAAAA@A@A@@BAB@BADBDA@@@A@ABABAB@DADBDBB@B@@A@@@CACAEAC@CACAC"
                    ],
                    encodeOffsets: [
                        [
                            115801,
                            28621
                        ]
                    ]
                }
            },
            {
                type: "Feature",
                id: "430321",
                properties: {
                    name: "湘潭县",
                    cp: [
                        112.952829,
                        27.778601
                    ],
                    childNum: 3
                },
                geometry: {
                    type: "MultiPolygon",
                    coordinates: [
                        [
                            "@@@@BBD@FAF@DCH@PAF@B@B@D@BADBB@DBBBB@DA@CACAA@AAC@C@ABABCHIHODCFABABABC@A@CAGAC@A@CBAB@DCFCF@D@DBB@BBB@B@BCDCBCFODCBCBA@CBC@E@A@AAE@AAC@A@A@@@AD@D@D@BEEAEEECIIGC@C@C@@BCDABA@C@AAC@ABABA@@B@@A@A@AA@AACA@A@ABCBEBCFCFEB@B@@B@@AF@DBHAH@@AF@BBBDFDJHHDBJDDB@BABA@TF@@BA@AB@D@B@BDBBBBDBF@D@BADABCBC@ABAB@B@BBDDDBDBBDD@D@BAB@DC@@D@B@HDBB@D@@C@ABA@@B@@DDHBF@BB@BB@@@BC@E@@@@D@@BBB@B@B@B@BADABAB@BA@C@C@GAA@@B@@@BBBDDDDBBBDBF@D@DADAD@BAD@@BBFDDBB@DABAFCDEBADGDGFEBCDADABA@@B@@@B@@@DCPKTKRKJGBALKBC@@HEBGBI@GCGIIIGKEGAGAKGCEAECIEGCCAAAECMK@A@@A@AA@@ACA@@ACAC@A@A@@@@E@@@ECA@IAIAC@E@AA@BAB@B@H@BAB@BABA@AAACCACACAC@C@C@ABA@ABCFCDCBGDCBCBA@CBE@@AAA@CAAACEGCAECEAC@CFCBA@C@C@E@IC@@@@A@C@ABC@EF@BA@EIACCAEICEEAC@A@EBEDABC@CA@A@A@CBGBABCBABA@A@AB@@AB@DBFDJBB@HAD@DABADCFCB@@C@AAAAACAAA@@AC@CAG@A@AB@B@FADABADABABABC@ABC@CBE@E@A@C@A@@@@B@@ABAFCFCFCDEBGBE@EDAFCF@F@D@H@FAHCJEHCJAL@L@DBJ@TD|PzTJDAAACAC@I@CBCBAD@BADADCB@B@@@BBBBB@D@B@JIHOHMFKBOCMEGCGBGFCLCNCRKFE@ADAB@@ACKAEEECGA@A@A@ABE@IAC@EAGBE@C@@@EICIGG@AAAACAAACCCACCCAAC@CAAAA@AAAACCA@AAAA@AAE@G@ABCBABABCBADC@ABAAC@AB@@AB@D@B@BBDDDBLHD@D@H@DABADABABCBA@CC@AAA@CA@ACG@ABCB@DABADCDAFCDEBCBABA@E@A@CCAKAAAC@C@AAA@@ACGAAA@A@C@CBIFCDEF@@ABA@A@CACACAAA@@@C@A@ABA@C@A@C@C@@@ADAHADABABA@A@A@AAC@@A@AAC@AAAC@AAECC@@AAGAA@ACCEAAAAAAC@A@A@CB@AAAOMAMDMDKBM@M@A@@@AAOEOEMFKHGL@LE@AAE@CAC@AAAAACAAAGCEEAA@EAAAA@AB@BADAAA@ABABAB@DAFBBBFB@@BA@ABAAC@E@A@I@IBA@CBCDAB@@@B@BABABC@A@C@AABMBSAmQGAWEQEKIEE@EAEBOBUBE@U@IBKCGEKA@C@CBEBG@GBEBC@CAE@EAEAEAGAC@C@C@E@C@C@AACAACAAA@CBCBC@CBEBE@C@C@CAEBE@C@CAA@ACAEAA@CAABABCBC@A@AA@C@E@E@C@C@ADADABA@@BCAAACACCAAC@A@ABABCDAB@BBBDBD@BB@D@D@DAB@D@BAF@D@@EBGDA@A@CCCAA@@@ABABCBADABCFADCBCBCBCB@B@BBB@D@DAF@DAB@DADAB@@A@ABEDCB@@CB@@@BAB@DABABAACCCCA@CAE@EBCBE@EBC@AAAACAAECAC@ABABCDADC@EDCBCBEDGBC@E@EACBC@A@C@CAEAA@A@@B@D@BAD@BCDCBCB@BADBB@B@DBB@D@DABBBB@@BBBDBBBDBBB@BBFBB@F@BBDBDBD@B@BAB@BA@E@E@C@EAE@A@@BAB@BA@A@C@C@AACCAACAA@A@ABABCBCBADCBADABB@@BABCBA@A@@@A@AA@@CC@AA@AAA@AB@BADA@ABAAA@A@@@AB@BABA@@@A@A@A@C@A@C@@@EDA@CA@@@A@@A@@CAECECACC@@C@CAE@E@CBCBAA@@AABA@EBCA@CAAACAAC@C@C@A@CAAAACAAAC@EBA@ADADABABABA@CBC@AACCCAECECECAA@ABA@@BC@C@@@@C@A@C@A@CCCCACAACACAABA@@BAD@DCBA@AB@B@B@D@BABA@A@C@EAC@ABEDCBEDABCBADAB@BGDGFIFKDQDGFGFEHAFALALGLEPGD@@AD@@A@GACACAC@ABADABA@C@AAABAB@BA@G@AB@BA@BBB@BBBBB@@B@B@@ABAD@B@DBF@@BBB@@ABCB@B@@BCDADCLABCDA@CBKDBD@@D@DBBBDJ@D@BAD@B@BDHAH@JANDFLDJCJAHAHDHFFFJDJBN@LBH@FHDDFJJHJFH@F@DEFIHCJAJ@N@JFFBFABCBE@I@MBABA@ABA@E@ABA@CB@BABADAB@BDDN@JBBB@@BDABABADAD@DDDBBBBB@@DA@@BA@@BAB@B@B@DBDBBB@DDJ@BB@D@BAD@DAFALAD@FBBBHBBB@B@BAB@BAB@B@DA@@F@HALILONKLMJELAJAPBPHJNBVHHF@DARCJKNILILEJ@HBFHFHBLATGRCJBFDFFFHBJAHCHGDEDEFELAH@@A@@FAJBJDPDLDD@@FBFDHBHBJ@F@F@HAD@@BAD@BAB@B@D@D@BCFAHABABABCBA@ABCJBB@@BBFDBB@B@B@BA@RFB@@@D@DDHBB@BB@@ABA@E@NF@A@AB@@@@@@AD@B@D@@BBDAB@@HLDAHBBBBB@BABABADhV@@@@BAB@BB@@@B@DBBB@B@D@B@@@B@@A@@@AB@@@D@@@BD@BA@ABI@@@A@@BB@BBDBD@B@DB@@BBADC@EBEAA@AAAC@@IABABA@C@EAK@CAACuT@BBBDBF@B@D@FBBB@@B@@J@BAD@B@BBDBD@B@@F@DBD@D@@@BBBDBD@D@D@D@D@BBDD@BB@B@B@BADABAB@DAFAD@D@B@D@BAD@@ABCEA@A@ABEDAB@B@BFJ@@@BDDBBBBDDBDBD@BBDDBF@D@B@BABADC@ADAFAD@DABADABADADADADAD@BA@@@AA@AAAAAAA@AA@AB@D@F@FBF@F@DBF@@@D@BBB@@@BALKBAD@H@D@D@FBJ@BBBB@B@@ABCBAB@@@B@BBDBB@BBB@@BAB@J@DBBBBB@@@BBD@D@DBB@FAB@D@DDDDFFFDFBDDDDDBDBD@D@B@BAB@BBDBD@D@DBDBBBDBBBB@DBD@B@D@DADAD@D@BD@BBBBBB@F@F@DBF@@FDF@HFBBADCDKH@D@B@B@BBBD@D@D@BCFAD@BBD@BADC@C@C@EBAB@F@DBH@D@BBDHDFBHCDED@@CDCDCBCDCBCBC@ABC@C@ABCDEHEH@DBDBF@B@B@B@B@BB@"
                        ],
                        [
                            "@@B@DBD@DBBDDB@DBF@BAB@@A@ABC@A@ABBB@@DBB@BB@BD@B@BA@@DADADEBCECAA@@@AD@D@DBB@BDB@B@D@B@BCAC@@AC@ACCACCAAAACAAAA@ABA@ASEA@GFAD@DBBBBADCBC@@AAF"
                        ],
                        [
                            "@@@@ABABC@G@C@EBCBC@ABA@GHA@A@GGACCECCCCCEEEEEECAAC@@DCL@H@BBBBBBBBDBB@B@BABABEBA@ABCDABEHCHADALAH@D@DD@BADADABAB@@@@BBB@D@H@B@B@B@@B@J@FADAB@BADABAB@B@BABA@ADABBDBBFB@DBBBDDBBBF@DvSA@@CBADM@GBABAB@D@DBJ@DBBBBB@H@F@JAB@BJAC@ACAAA@ABAAA@A@@@AgU@@AD@BA@E@EAACA@@A@ADCDCBA@@GKADC@A@@@@@A@A@@A@A@AMEC@A@A@A@A@@C@C@@@AQE"
                        ]
                    ],
                    encodeOffsets: [
                        [
                            [
                                115487,
                                28747
                            ]
                        ],
                        [
                            [
                                115574,
                                28659
                            ]
                        ],
                        [
                            [
                                115351,
                                28480
                            ]
                        ]
                    ]
                }
            },
            {
                type: "Feature",
                id: "430381",
                properties: {
                    name: "湘乡市",
                    cp: [
                        112.525217,
                        27.734918
                    ],
                    childNum: 1
                },
                geometry: {
                    type: "Polygon",
                    coordinates: [
                        "@@FBD@D@BA@@D@B@BBB@B@@@BA@ABAB@BBBBBDBBDBD@B@B@BBBBB@BBB@BA@AAGB@B@BB@@BB@DBB@@B@D@B@FABABB@@BBB@BBB@B@@BDHBBB@BABAB@B@DBBBB@BABABADAB@B@@AH@TIFAFADC@CBEDIBABABA@@D@D@D@D@D@FBFBFBB@D@DB@BBBBDBBLRDBBBHAB@BA@AACBA@CB@DBDBB@BBDAD@@@F@BBDB@D@DB@BB@@DBFBB@@B@BCDCD@DBDBDDDFDFDDBB@BABAB@@@BBAH@DB@@BB@HCBAD@B@BD@DAFBDLLDHDH@B@B@D@BBB@@BBBBBBBB@@B@BA@A@AAE@A@ABA@@B@@A@AB@B@B@D@BABA@ADCBAB@B@BBB@@BBB@@BBBBBDBB@BB@BB@@BB@BABAD@B@@BB@BB@B@B@B@BABA@ABA@A@ABA@A@ABAB@DBB@F@FBH@D@B@BAB@BAD@B@B@B@B@BABA@@D@B@D@B@DBBBRF^HFBDBDBD@F@HBDA@@BABEBABIDCBAD@B@BBLFDBFBD@DAB@BAFGDAB@D@D@D@DBBBHD@@@B@DBBBBD@B@DB@@DBB@DBJBD@BABABAF@FBD@@@BABC@AD@D@@@B@@ABA@ADBD@FBD@BBBBDBB@@ADCBABB@@CJ@BBBB@BAB@@A@C@G@@B@@@BB@F@D@DBB@BAB@B@D@FBBDNBH@B@@A@C@A@@@ABAD@BA@ABA@CAA@C@C@A@@BA@@B@D@B@BBBB@D@HAB@D@BD@B@DBDBDBDBBBBBBADADADAB@BBD@D@DABCDBBBDBD@D@BBBBDDDDBB@DABA@B@FBD@BDBFBFBBBD@F@D@BBFBBBB@J@DADCDCDADBDBHFFFFBD@D@D@DCBCDIBCBGDG@AFCFCJEDEFA@AAACAAA@C@CAC@AEAAA@CACBC@CAE@@WSC@IEIKCGAK@IBI@ABAAA@@@@EBACCBEAI@OCJKIG@EB@@AA@A@@@AB@DA@@@@@CCCACC@@@AA@@AA@@@ABAB@B@BBB@B@@AAA@@@A@A@@@@ABC@A@A@AA@@M@@@AB@DB@@@@@ABEAE@AA@@A@AD@B@B@B@B@@A@A@AAA@@A@ABAAEE@ACECEAAEAEAEAE@EACAAA@ADCBA@E@ACEEEAA@A@ADGBC@ABC@AB@BBF@DDB@FBDDDBF@B@@C@@@A@MBCBCFEBA@@BABA@AB@BAD@BC@A@EBAB@PQVQJGVFDT\\JSF@F@DATRDDBRLBCPM\\ONCHCLFLBB@ABD@BDBAF@H@HCFGBEDEHCFAHAFABABADA@C@CBGBKBCDGFGBADCBAB@FABABA@A@AAAACAAAAAA@A@GDK@CD@BBFDFFFFDFDDDDDFBDHHB@B@HGB@BAD@DAFAD@H@D@BABA@@B@@A@A@AAAECAA@@AADIBAB@DABABABABGDE@A@C@C@ABA@ABC@AC@GBE@E@I@GAGAECEA@@CCCKCOAIBI@EB@@@BGFKFEFCHCDGBGAIEGEEECIAQDSHKBGAGEAE@GFIJKJKLMDIBQ@CGEUGMAGIAOBOBIFKNILKPMJKBK@G@EB@@C@ABA@ABA@A@AAAGAAAEAC@KBEBCBC@ABC@A@@ACI@CAACACAA@A@A@AB@@AB@@CB@@AAAACACCC@CBABABCB@AA@AA@ICMACA@CBABABA@@DAB@B@FAB@BABAB@N@JAFADEBEAIEM@I@IBGDEJCFE@G@IEIGEICCEGG@KAM@IAICEEGEGCGBIBIDKCCEBM@IBGCG@A@ABC@A@CCIAACAC@@@ACA@E@CAEACAC@C@A@@ABABCAA@AAA@CAAE@@A@A@@@AAAA@@@@ABABABA@A@AAAAAA@E@C@A@AAAA@C@AB@BA@A@C@AAACACAE@C@A@AAACEAC@C@@@A@AAAAAAAA@AA@@AC@A@A@@BC@A@A@@@CDA@AB@@@BBB@B@@AD@@@@A@@@AC@@@@A@@@ABA@EAA@@@AJAH@@ABA@@@A@AACEA@@@A@A@CDA@A@@@AAGGAAAAA@A@@BAB@@@BBBB@BBB@@BA@EBABA@A@AAGECAA@C@A@CBC@@B@B@B@D@DADADA@@@A@A@@@@B@DBBBB@B@H@F@BBB@B@B@D@@DD@B@BAD@B@@BD@BDFBBHBBB@BDF@D@BBBRVJPDLBLBLAJCJBNCJEDEDIDKFKHSJONMLCJ@JDDJDPBRBJ@HDBF@D@H@JFDDHBJCJELMJINQNIBKCICKAK@IH@@GAEBGBCDADABC@C@A@@C@AAK@CCG@E@CACAA@@A@CBA@A@CAAA@A@C@GAAEGIGAAA@A@A@CL@@@@AAAA@@ECGCAA@@@ABA@A@ACM@CBE@A@A@@C@GDA@C@E@GCC@CAO@CAA@AB@@BD@BABEBEBEFABAACAAAAA@C@CAC@AAAC@CBCBABADAD@B@DADCFADCBC@C@C@AAAC@ACA@ABCBA@AAAAASQAAC@C@C@CBADAL@@A@A@AACAABA@ABC@CCEC@@@@GGEE@@AAA@A@GDA@MD@DAD@BABABABABABABC@A@AB@BBFDFBD@D@BADA@A@EAA@AB@B@D@H@@A@A@A@AB@BA@A@@A@AAA@AA@C@@@A@@@@BADA@@@A@@A@G@@A@A@@B@@@BBB@@@BAF@@@F@DBDDB@BFB@B@@@BCBCB@B@BBF@BABG@AB@B@BBDLLDDPDLDBDH@H@FAFABCBAD@F@HB@DABEBEBC@CB@@@DBDDBBD@B@D@BDBDBF@D@F@D@DCBA@E@C@A@AAA@C@CBABCDABBDB@DBFBTBLBBDDB@HDL@HDDB@B@@@@ILODEFCHGBEBMBA@AFDTHLDHDFABCRENIHGFI@MIGEGAEAE@GDGFEFIDIFAJCLEP@LAHAJEDECAGAMAEEAC@CDCDEFEJCN@L@LADBBBB@B@B@DADAFADADCFCHCJAD@DADABAD@F@BAB"
                    ],
                    encodeOffsets: [
                        [
                            114688,
                            28578
                        ]
                    ]
                }
            }
        ],
        UTF8Encoding: true
    })
})

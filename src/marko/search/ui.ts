import { Component, componentFactory, map } from "ivi";
import * as Events from "ivi-events";
import * as h from "ivi-html";

function Footer() {
  return h.footer("gh-w").attrs({ id: "glbfooter", role: "contentinfo" }).children(
    h.div().children(
      h.div().attrs({ id: "rtm_html_1650" }).children(
        h.div().attrs({ id: "rtm_html_1651" }),
        h.h2("gh-ar-hdn").children("Additional site navigation"),
        h.div("gffoot").attrs({ id: "gf-BIG" }).children(
          h.table("gf-t").children(
            h.tbody().children(
              h.tr().children(
                h.td().children(
                  h.ul().children(
                    h.li("gf-li").children(
                      h.h3("gf-bttl").children(
                        h.a("gf-bttl thrd").attrs({
                          href: "http://www.ebay.com/sch/allcategories/all-categories",
                          _sp: "m571.l3601",
                        }).children("Buy"),
                      ),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "http://pages.ebay.com/help/account/registration.html",
                        _sp: "m571.l2895",
                      }).children("Registration"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "http://pages.ebay.com/ebay-money-back-guarantee/",
                        _sp: "m571.l4539",
                      }).children("eBay Money Back Guarantee"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "http://pages.ebay.com/help/buy/basics.html",
                        _sp: "m571.l2897",
                      }).children("Bidding & buying help"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "http://stores.ebay.com",
                        _sp: "m571.l2899",
                      }).children("Stores"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "http://www.ebay.com/local",
                        _sp: "m571.l3221",
                      }).children("eBay Local"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "http://www.ebay.com/gds",
                        _sp: "m571.l5360",
                      }).children("eBay guides"),
                    ),
                  ),
                ),
                h.td().children(
                  h.ul().children(
                    h.li("gf-li").children(
                      h.h3("gf-bttl").children(
                        h.a("gf-bttl thrd").attrs({
                          href: "http://www.ebay.com/sl/sell",
                          _sp: "m571.l2903",
                        }).children("Sell"),
                      ),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "http://www.ebay.com/sl/sell",
                        _sp: "m571.l2904",
                      }).children("Start selling"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "http://pages.ebay.com/sellerinformation/howtosell/sellingbasics.html",
                        _sp: "m571.l2905",
                      }).children("Learn to sell"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "http://pages.ebay.com/sellerinformation/ebayforbusiness/essentials.html",
                        _sp: "m571.l2906",
                      }).children("Business sellers"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "https://www.ebaypartnernetwork.com/files/hub/en-US/index.html",
                        _exsp: "m571.l2921",
                      }).children("Affiliates"),
                    ),
                    h.li("gf-li").children(
                      h.h3("gf-bttl").children("Tools & apps"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "http://anywhere.ebay.com/mobile/",
                        _sp: "m571.l2944",
                      }).children("Mobile apps"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "http://anywhere.ebay.com",
                        _exsp: "m571.l2923",
                      }).children("Downloads"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "http://developer.ebay.com",
                        _exsp: "m571.l2924",
                      }).children("Developers"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "http://pages.ebay.com/securitycenter/index.html",
                        _sp: "m571.l2907",
                      }).children("Security center"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "http://viv.ebay.com/ws/eBayISAPI.dll?EbayTime",
                        _sp: "m571.l2908",
                      }).children("eBay official time"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "http://pages.ebay.com/sitemap.html",
                        _sp: "m571.l2909",
                      }).children("Site map"),
                    ),
                  ),
                ),
                h.td().children(
                  h.ul().children(
                    h.li("gf-li").children(
                      h.h3("gf-bttl").children("eBay companies"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "http://www.ebayclassifiedsgroup.com/",
                        _exsp: "m571.l2927",
                      }).children("eBay Classifieds"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "http://www.stubhub.com",
                        _exsp: "m571.l3208",
                      }).children("StubHub"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "https://www.close5.com",
                        _exsp: "m571.l3360",
                      }).children("Close5"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "https://www.ebayinc.com/our-company/our-other-businesses/",
                        _exsp: "m571.l2931",
                      }).children("See all companies"),
                    ),
                    h.li("gf-li").children(
                      h.h3("gf-bttl").children("Stay connected"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "http://www.ebay.com/stories/",
                        _sp: "m571.l2940",
                      }).children("eBay's Blogs"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd gf-i").attrs({
                        href: "https://www.facebook.com/eBay",
                        _exsp: "m571.l2942",
                      }).children(h.i("gspr icfbg").children("Facebook")),
                      h.i("gspr icfbg"),
                    ),
                    h.i("gspr icfbg").children(
                      h.li("gf-li").children(
                        h.a("thrd gf-i").attrs({
                          href: "http://twitter.com/#!/eBay",
                          _exsp: "m571.l2943",
                        }).children(h.i("gspr ictwg").children("Twitter")),
                        h.i("gspr ictwg"),
                      ),
                      h.i("gspr ictwg").children(
                        h.li("gf-li").children(
                          h.a("thrd gf-i").attrs({
                            href: "https://plus.google.com/+eBay/posts",
                            _exsp: "m571.l3223",
                          }).children(h.i("gspr icgpg").children("Google+")),
                          h.i("gspr icgpg"),
                        ),
                        h.i("gspr icgpg"),
                      ),
                    ),
                  ),
                  h.i("gspr icfbg").children(
                    h.i("gspr ictwg").children(h.i("gspr icgpg")),
                  ),
                ),
                h.td().children(
                  h.ul().children(
                    h.li("gf-li").children(
                      h.h3("gf-bttl").children(
                        h.a("gf-bttl thrd").attrs({
                          href: "http://www.ebayinc.com",
                          _exsp: "m571.l2932",
                        }).children("About eBay"),
                      ),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "https://www.ebayinc.com/our-company/",
                        _exsp: "m571.l2933",
                      }).children("Company info"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "https://www.ebayinc.com/stories/news/",
                        _exsp: "m571.l2934",
                      }).children("News"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "https://investors.ebayinc.com",
                        _exsp: "m571.l3269",
                      }).children("Investors"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "https://careers.ebayinc.com/",
                        _exsp: "m571.l2937",
                      }).children("Careers"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "http://www.ebaymainstreet.com",
                        _exsp: "m571.l2936",
                      }).children("Government relations"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "http://cc.ebay.com",
                        _exsp: "m571.l2938",
                      }).children("Advertise with us"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "http://pages.ebay.com/help/policies/overview.html",
                        _sp: "m571.l2910",
                      }).children("Policies"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "http://pages.ebay.com/help/policies/programs-vero-ov.html",
                        _sp: "m571.l3418",
                      }).children("Verified Rights Owner (VeRO) Program"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd gh-survey").attrs({
                        href: "http://qu.ebay.com/survey?srvName=globalheader+%28footer-US%29",
                        title: "opens in a new window or tab",
                      }).children("Tell us what you think"),
                    ),
                  ),
                ),
                h.td().children(
                  h.ul().children(
                    h.li("gf-li").children(
                      h.h3("gf-bttl").children(
                        h.a("gf-bttl thrd").attrs({
                          href: "http://ocs.ebay.com/ws/eBayISAPI.dll?CustomerSupport",
                          _sp: "m571.l1545",
                        }).children("Help & Contact"),
                      ),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "http://resolutioncenter.ebay.com/",
                        _sp: "m571.l1619",
                      }).children("Resolution Center"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "http://pages.ebay.com/sellerinformation/index.html",
                        _sp: "m571.l1613",
                      }).children("Seller Information Center"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "http://ocsnext.ebay.com/ocs/cuhome",
                        _sp: "m571.l2911",
                      }).children("Contact us"),
                    ),
                    h.li("gf-li").children(
                      h.h3("gf-bttl").children(
                        h.a("gf-bttl thrd").attrs({
                          href: "http://community.ebay.com",
                          _sp: "m571.l2912",
                        }).children("Community"),
                      ),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "http://announcements.ebay.com",
                        _sp: "m571.l2913",
                      }).children("Announcements"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "http://pages.ebay.com/community/answercenter/index.html",
                        _sp: "m571.l2914",
                      }).children("Answer center"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "http://forums.ebay.com",
                        _exsp: "m571.l2939",
                      }).children("Discussion boards"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "http://givingworks.ebay.com",
                        _exsp: "m571.l3271",
                      }).children("eBay Giving Works"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "http://givingworks.ebay.com/browse/celebrities",
                        _exsp: "m571.l3272",
                      }).children("eBay Celebrity"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "http://groups.ebay.com/groups/EbayGroups/1?redirected=1",
                        _exsp: "m571.l2941",
                      }).children("Groups"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd").attrs({
                        href: "http://www.ebay.com/ets/eBayTopShared",
                        _sp: "m571.l2916",
                      }).children("eBay top shared"),
                    ),
                    h.li("gf-li").children(
                      h.h3("gf-bttl").children("eBay Sites"),
                    ),
                    h.li("gf-li").children(
                      h.div("gf-flags-wpr").children(
                        h.a("thrd").attrs({
                          "aria-expanded": "false",
                          "aria-controls": "gf-f",
                          role: "button",
                          title: "eBay country sites",
                          _sp: "m571.l2586",
                          href: "http://www.ebay.com",
                          id: "gf-fbtn",
                        }).children(
                          "United States",
                          h.b("gf-if gspr flus"),
                          " ",
                          h.b("gh-sprRetina").attrs({ id: "gf-fbtn-arr" }),
                        ),
                        h.div().attrs({ id: "gf-f" }).children(
                          h.ul("gf-ful").attrs({ role: "navigation" }).children(
                            h.li("gf-f-li0").children(
                              h.a("gf-if-a").attrs({
                                href: "http://www.ebay.com.au",
                                title: "eBay Australia",
                              }).children(h.b("flau gf-if gspr"), "Australia"),
                            ),
                            h.li("gf-f-li0").children(
                              h.a("gf-if-a").attrs({
                                href: "http://www.ebay.at",
                                title: "eBay Austria",
                              }).children(h.b("flat gf-if gspr"), "Austria"),
                            ),
                            h.li("gf-f-li0").children(
                              h.a("gf-if-a").attrs({
                                href: "http://www.ebay.be",
                                title: "eBay Belgium",
                              }).children(h.b("flbe gf-if gspr"), "Belgium"),
                            ),
                            h.li("gf-f-li0").children(
                              h.a("gf-if-a").attrs({
                                href: "http://www.ebay.ca",
                                title: "eBay Canada",
                              }).children(h.b("flca gf-if gspr"), "Canada"),
                            ),
                            h.li("gf-f-li0").children(
                              h.a("gf-if-a").attrs({
                                href: "http://www.ebay.cn",
                                title: "eBay China",
                              }).children(h.b("flcn gf-if gspr"), "China"),
                            ),
                            h.li("gf-f-li0").children(
                              h.a("gf-if-a").attrs({
                                href: "http://www.ebay.fr",
                                title: "eBay France",
                              }).children(h.b("flfr gf-if gspr"), "France"),
                            ),
                            h.li("gf-f-li0").children(
                              h.a("gf-if-a").attrs({
                                href: "http://www.ebay.de",
                                title: "eBay Germany",
                              }).children(h.b("flde gf-if gspr"), "Germany"),
                            ),
                            h.li("gf-f-li1 gf-f-li-top").children(
                              h.a("gf-if-a").attrs({
                                href: "http://www.ebay.com.hk",
                                title: "eBay Hong Kong",
                              }).children(h.b("flhk gf-if gspr"), "Hong Kong"),
                            ),
                            h.li("gf-f-li1").children(
                              h.a("gf-if-a").attrs({
                                href: "http://www.ebay.in",
                                title: "eBay India",
                              }).children(h.b("flin gf-if gspr"), "India"),
                            ),
                            h.li("gf-f-li1").children(
                              h.a("gf-if-a").attrs({
                                href: "http://www.ebay.ie",
                                title: "eBay Ireland",
                              }).children(h.b("flie gf-if gspr"), "Ireland"),
                            ),
                            h.li("gf-f-li1").children(
                              h.a("gf-if-a").attrs({
                                href: "http://www.ebay.it",
                                title: "eBay Italy",
                              }).children(h.b("flit gf-if gspr"), "Italy"),
                            ),
                            h.li("gf-f-li1").children(
                              h.a("gf-if-a").attrs({
                                href: "http://www.ebay.co.jp",
                                title: "eBay Japan",
                              }).children(h.b("fljp gf-if gspr"), "Japan"),
                            ),
                            h.li("gf-f-li1").children(
                              h.a("gf-if-a").attrs({
                                href: "http://global.gmarket.co.kr/Home/Main",
                                title: "eBay Korea",
                              }).children(h.b("flkr gf-if gspr"), "Korea"),
                            ),
                            h.li("gf-f-li1").children(
                              h.a("gf-if-a").attrs({
                                href: "http://www.ebay.com.my",
                                title: "eBay Malaysia",
                              }).children(h.b("flmy gf-if gspr"), "Malaysia"),
                            ),
                            h.li("gf-f-li2 gf-f-li-top").children(
                              h.a("gf-if-a").attrs({
                                href: "http://www.ebay.nl",
                                title: "eBay Netherlands",
                              }).children(h.b("flnl gf-if gspr"), "Netherlands"),
                            ),
                            h.li("gf-f-li2").children(
                              h.a("gf-if-a").attrs({
                                href: "http://www.ebay.ph",
                                title: "eBay Philippines",
                              }).children(h.b("flph gf-if gspr"), "Philippines"),
                            ),
                            h.li("gf-f-li2").children(
                              h.a("gf-if-a").attrs({
                                href: "http://www.ebay.pl",
                                title: "eBay Poland",
                              }).children(h.b("flpl gf-if gspr"), "Poland"),
                            ),
                            h.li("gf-f-li2").children(
                              h.a("gf-if-a").attrs({
                                href: "http://www.ebay.com.sg",
                                title: "eBay Singapore",
                              }).children(h.b("flsg gf-if gspr"), "Singapore"),
                            ),
                            h.li("gf-f-li2").children(
                              h.a("gf-if-a").attrs({
                                href: "http://www.ebay.es",
                                title: "eBay Spain",
                              }).children(h.b("fles gf-if gspr"), "Spain"),
                            ),
                            h.li("gf-f-li2").children(
                              h.a("gf-if-a").attrs({
                                href: "http://www.ebay.se",
                                title: "eBay Sweden",
                              }).children(h.b("flse gf-if gspr"), "Sweden"),
                            ),
                            h.li("gf-f-li2").children(
                              h.a("gf-if-a").attrs({
                                href: "http://www.ebay.ch",
                                title: "eBay Switzerland",
                              }).children(h.b("flch gf-if gspr"), "Switzerland"),
                            ),
                            h.li("gf-f-li3 gf-f-li-top").children(
                              h.a("gf-if-a").attrs({
                                href: "http://www.ebay.com.tw",
                                title: "eBay Taiwan",
                              }).children(h.b("fltw gf-if gspr"), "Taiwan"),
                            ),
                            h.li("gf-f-li3").children(
                              h.a("gf-if-a").attrs({
                                href: "http://www.ebay.co.th",
                                title: "eBay Thailand",
                              }).children(h.b("flth gf-if gspr"), "Thailand"),
                            ),
                            h.li("gf-f-li3").children(
                              h.a("gf-if-a").attrs({
                                href: "http://www.gittigidiyor.com",
                                title: "eBay Turkey",
                              }).children(h.b("fltr gf-if gspr"), "Turkey"),
                            ),
                            h.li("gf-f-li3").children(
                              h.a("gf-if-a").attrs({
                                href: "http://www.ebay.co.uk",
                                title: "eBay United Kingdom",
                              }).children(
                                h.b("flgb gf-if gspr"), "United Kingdom"),
                            ),
                            h.li("gf-f-li3").children(
                              h.a("gf-if-a").attrs({
                                href: "http://www.ebay.vn",
                                title: "eBay Vietnam",
                              }).children(h.b("flvn gf-if gspr"), "Vietnam"),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
        h.div().attrs({ id: "gf-t-box" }).children(
          h.table("gf-t").children(
            h.tbody().children(
              h.tr().children(
                h.td().attrs({ colSpan: 2 }).children(
                  h.ul("gf-lb").attrs({ id: "gf-l" }).children(
                    h.li("gf-li").children(
                      h.a("thrd gf-bar-a").attrs({
                        href: "http://www.ebayinc.com",
                        _exsp: "m571.l2602",
                      }).children("About eBay"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd gf-bar-a").attrs({
                        href: "http://announcements.ebay.com",
                        _exsp: "m571.l2935",
                      }).children("Announcements"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd gf-bar-a").attrs({
                        href: "http://community.ebay.com",
                        _exsp: "m571.l1540",
                      }).children("Community"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd gf-bar-a").attrs({
                        href: "http://pages.ebay.com/securitycenter/index.html",
                        _exsp: "m571.l2616",
                      }).children("Security Center"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd gf-bar-a").attrs({
                        href: "http://resolutioncenter.ebay.com/",
                        _sp: "m571.l1619",
                      }).children("Resolution Center"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd gf-bar-a").attrs({
                        href: "http://pages.ebay.com/sellerinformation/index.html",
                        _exsp: "m571.l1613",
                      }).children("Seller Information Center"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd gf-bar-a").attrs({
                        href: "http://pages.ebay.com/help/policies/overview.html",
                        _exsp: "m571.l2604",
                      }).children("Policies"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd gf-bar-a").attrs({
                        href: "https://www.ebaypartnernetwork.com/files/hub/en-US/index.html",
                        _exsp: "m571.l3947",
                      }).children("Affiliates"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd gf-bar-a").attrs({
                        href: "http://ocs.ebay.com/ws/eBayISAPI.dll?CustomerSupport",
                        _sp: "m571.l1545",
                      }).children("Help & Contact"),
                    ),
                    h.li("gf-li").children(
                      h.a("thrd gf-bar-a").attrs({
                        href: "http://pages.ebay.com/sitemap.html",
                        _exsp: "m571.l2909",
                      }).children("Site Map"),
                    ),
                  ),
                ),
              ),
              h.tr().attrs({ valign: "top" }).children(
                h.td("gf-legal").children(
                  "Copyright © 1995-2016 eBay Inc. All Rights Reserved.",
                  h.a().attrs({
                    href: "http://pages.ebay.com/help/policies/user-agreement.html",
                  }).children("User Agreement"),
                  ",",
                  h.a().attrs({
                    href: "http://pages.ebay.com/help/policies/privacy-policy.html",
                  }).children("Privacy"),
                  ",",
                  h.a().attrs({
                    href: "http://pages.ebay.com/help/account/cookies-web-beacons.html",
                  }).children("Cookies"),
                  "and",
                  h.a().attrs({
                    href: "http://cgi6.ebay.com/ws/eBayISAPI.dll?AdChoiceLandingPage&partner=0",
                    id: "gf-AdChoice",
                  }).children("AdChoice"),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
  );
}
export const footer = componentFactory(Footer);

const PurchasedStyle = { "background-color": "#f1c40f" };
const BuyNowProps = { type: "button" };

class SearchResultsItem extends Component<any> {
  private purchased = false;
  private handleBuyButtonClick = Events.onClick((ev) => {
    this.purchased = true;
    this.invalidate();
  });

  render() {
    const item = this.props;

    return h.div("search-results-item").style(this.purchased === true ? PurchasedStyle : null).children(
      h.h2().children(item.title),
      h.div("lvpic pic img left").children(
        h.div("lvpicinner full-width picW").children(
          h.a("img imgWr2").attrs({ href: `/buy/${item.id}` }).children(
            h.img().attrs({ src: item.image, alt: item.title }),
          ),
        ),
      ),
      h.span("price").children(item.price),
      this.purchased === true ?
        h.div("purchased").children("Purchased!") :
        h.button("buy-now").attrs(BuyNowProps).events(this.handleBuyButtonClick).children("Buy now!"),
    );
  }
}

export const searchResultsItem = componentFactory(SearchResultsItem);

function MarkoSearchApp(searchResults: { items: any[] }) {
  return h.div("search-results").children(
    h.div().children(
      map(searchResults.items, (item, i) => (
        searchResultsItem(item).key(i)
      )),
    ),
    footer(),
  );
}
export const markoSearchApp = componentFactory(MarkoSearchApp);

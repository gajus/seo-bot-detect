////
//  Export Bot Detect Module
////
module.exports = function(request) {
	var BOT_REGEX = /bot|crawler|baiduspider|80legs|mediapartners-google|adsbot-google|008|ABACHOBot|Accoona-AI-Agent|AddSugarSpiderBot|AnyApexBot|Arachmo|B-l-i-t-z-B-O-T|Baiduspider|BecomeBot|BeslistBot|BillyBobBot|Bimbot|Bingbot|BlitzBOT|boitho.com-dc|boitho.com-robot|btbot|CatchBot|Cerberian Drtrs|Charlotte|ConveraCrawler|cosmos|Covario IDS|DataparkSearch|DiamondBot|Discobot|Dotbot|EmeraldShield.com |WebBot|EsperanzaBot|Exabot|FAST Enterprise Crawler|FAST-WebCrawler|FDSE robot|FindLinks|FurlBot|FyberSpider|g2crawler|Gaisbot|GalaxyBot|genieBot|Gigabot|Girafabot|Googlebot|Googlebot-Image|GurujiBot|HappyFunBot|hl_ftien_spider|Holmes|htdig|iaskspider|ia_archiver|iCCrawler|ichiro|igdeSpyder|IRLbot|IssueCrawler|Jaxified Bot|Jyxobot|KoepaBot|L.webis|LapozzBot|Larbin|LDSpider|LexxeBot|Linguee Bot|LinkWalker|lmspider|lwp-trivial|mabontland|magpie-crawler|Mediapartners-Google|MJ12bot|Mnogosearch|mogimogi|MojeekBot|Moreoverbot|Morning Paper|msnbot|MSRBot|MVAClient|mxbot|NetResearchServer|NetSeer Crawler|NewsGator|NG-Search|nicebot|noxtrumbot|Nusearch Spider|NutchCVS|Nymesis|obot|oegp|omgilibot|OmniExplorer_Bot|OOZBOT|Orbiter|PageBitesHyperBot|Peew|polybot|Pompos|PostPost|Psbot|PycURL|Qseero|Radian6|RAMPyBot|RufusBot|SandCrawler|SBIder|ScoutJet|Scrubby|SearchSight|Seekbot|semanticdiscovery|Sensis Web Crawler|SEOChat::Bot|SeznamBot|Shim-Crawler|ShopWiki|Shoula robot|silk|Sitebot|Snappy|sogou spider|Sosospider|Speedy Spider|Sqworm|StackRambler|suggybot|SurveyBot|SynooBot|Teoma|TerrawizBot|TheSuBot|Thumbnail.CZ robot|TinEye|truwoGPS|TurnitinBot|TweetedTimes Bot|TwengaBot|updated|Urlfilebot|Vagabondo|VoilaBot|Vortex|voyager|VYU2|webcollage|Websquash.com|wf84|WoFindeIch Robot|WomlpeFactory|Xaldon_WebSpider|yacy|Yahoo! Slurp|Yahoo! Slurp China|YahooSeeker|YahooSeeker-Testing|YandexBot|YandexImages|Yasaklibot|Yeti|YodaoBot|yoogliFetchAgent|YoudaoBot|Zao|Zealbot|zspider|ZyBorg/i;
	return BOT_REGEX.test(request.headers['user-agent'] || '');
}
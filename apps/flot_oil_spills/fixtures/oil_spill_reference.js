/*globals FlotOilSpills */

sc_require('models/oil_spill_reference');

FlotOilSpills.oil_spill_reference.FIXTURES = [
    { 'guid':  1,  'text': '"Oil leaks from tanker collision off Singapore". bbc.co.uk. May 25, 2010. Retrieved 25 May 2010.' },
    { 'guid':  2,  'text': '"Oil spill threatens Singapore coast". abc.net.au. May 25, 2010. Retrieved 25 May 2010.' },
    { 'guid':  3,  'text': '"Singapore closes popular beaches after oil spill hits coast". Retrieved 27 May 2010.' },
    { 'guid':  4,  'text': '"The Measure of a Disaster". The New York Times. 21. Retrieved 2 June 2010.' },
    { 'guid':  5,  'text': '"Flow Rate Group Provides Preliminary Best Estimate Of Oil Flowing from BP Oil Well" (press release). Deepwater Horizon Response - Official Site of the Deepwater Horizon Unified Command. Deepwater Horizon Incident - Joint Information Center. 2010-05-27. Retrieved 2010-05-29.' },
    { 'guid':  6,  'text': 'Joe Brock (18 May 2010). "Africa&#39;s oil spills are far from U.S. media glare". Reuters. Retrieved 29 May 2010. "100,000 bpd of oil had leaked for a week from a pipeline that has since been mended"' },
    { 'guid':  7,  'text': 'Vidal, John. "Nigeria&#39;s agony dwarfs the Gulf oil spill. The US and Europe ignore it.". The Observer. Retrieved 1 June 2010. "On 1 May this year a ruptured ExxonMobil pipeline in the state of Akwa Ibom spilled more than a million gallons into the delta over seven days before the leak was stopped."' },
    { 'guid':  8,  'text': '"Collision Causes Crude Oil Spill in Texas". The Wall Street Journal. 24 January 2010. Retrieved 24 January 2010.' },
    { 'guid':  9,  'text': '"WA oil spill &#39;one of Australia&#39;s worst&#39;". ABC News. August 24, 2009. Archived from the original on November 5, 2009. Retrieved November 5, 2009.' },
    { 'guid': 10,  'text': '"Oil leaking &#39;five times faster&#39; than thought". ABC News. October 22, 2009. Archived from the original on November 5, 2009. Retrieved November 5, 2009.' },
    { 'guid': 11,  'text': '"Reuters".' },
    { 'guid': 12,  'text': 'Kirkham, Chris; Ramon Antonio Vargas (July 24, 2008). "Oil spill shuts down 80 miles of river". New Orleans Times-Picayune: pp. A1.' },
    { 'guid': 13,  'text': 'Oil Spill in North Sea Off Norway http://news.bbc.co.uk/1/hi/world/europe/7140645.stm' },
    { 'guid': 14,  'text': '"Tanker oil spill off S Korea coast". Al Jazeera English. 2007-12-08. Retrieved 2008-11-16.' },
    { 'guid': 15,  'text': '"S Korea declares slick &#39;disaster&#39;". BBC News. 2007-12-09. Retrieved 2008-11-16.' },
    { 'guid': 16,  'text': '"Fuel spill disaster reported in waters near Russia". CNN International. 2007-11-11. Retrieved 2008-11-16.' },
    { 'guid': 17,  'text': '"Spill closes bay beaches as oil spreads, kills wildlife". San Francisco Chronicle. 2007-11-09. Retrieved 2008-11-16.' },
    { 'guid': 18,  'text': 'Usumacinta and Kab 101 Blowout' },
    { 'guid': 19,  'text': 'a b "Oil spills - Philippines, Indian Ocean and Lebanon". Greenpeace. 2006-08-18. Retrieved 2008-11-16.' },
    { 'guid': 20,  'text': '"CITGO Oil Spill" (PDF). Louisiana Department of Environmental Quality. 2006-07-25. Retrieved 2008-11-16.' },
    { 'guid': 21,  'text': '"Oil spill is the North Slope&#39;s biggest ever". Anchorage Daily News. 2006-03-10. Retrieved 2008-11-16.' },
    { 'guid': 22,  'text': '"Oil Spill History". The Mariner Group. Retrieved 2008-11-02.' },
    { 'guid': 23,  'text': 'Response and Prevention Branch Oil Team (May 2006) (.PDF). Murphy Oil USA Refinery Spill, Chalmette & Meraux, LA Presentation. U.S. Environmental Protection Agency, Region 6. Retrieved 27 May 2010.' },
    { 'guid': 24,  'text': 'University of Delaware Sea Grant Program. "Athos 1 Oil Spill". Retrieved 31 May 2010.' },
    { 'guid': 25,  'text': 'ITOPF Case History: Tasman Spirit' },
    { 'guid': 26,  'text': 'WWF: August 2003 - Karachi oil spill, Pakistan' },
    { 'guid': 27,  'text': 'Overview of the Bouchard 120 oil spill from the Buzzards Bay National Estuary Program' },
    { 'guid': 28,  'text': '"Major Oil Spills". International Tanker Owners Pollution Federation. Retrieved 2008-11-02.' },
    { 'guid': 29,  'text': '[http://assets.panda.org/downloads/finalprestige.pdf WWF: The Prestige: one year on, a continuing disaster], November, 2003' },
    { 'guid': 30,  'text': 'Oil spills at Guanabara Bay' },
    { 'guid': 31,  'text': 'http://www.solcomhouse.com/trans.htm' },
    { 'guid': 32,  'text': '"Petrobras P-36". Oil Rig Disasters. Monday, 14 April 2008. Retrieved 21 May 2010.' },
    { 'guid': 33,  'text': 'Cabinet frees Greek crew at the Taipei Times' },
    { 'guid': 34,  'text': '"Major Oil Spills". Retrieved 2008-11-02.' },
    { 'guid': 35,  'text': 'Oil Spills at thinkquest.org' },
    { 'guid': 36,  'text': '"Nakhodka". Centre de Documentation de Recherche et d&#39;Expérimentations. Retrieved 2010-06-01.' },
    { 'guid': 37,  'text': 'How do oil spills impact Casco Bay? report by the Casco Bay Estuary Partnership' },
    { 'guid': 38,  'text': 'Rhode Island Oil Spill Is More Serious Than Initially Thought, New York Times, January 22, 1996' },
    { 'guid': 39,  'text': '"Fact Sheet: Morris J. Berman Oil Spill". Retrieved 5 January 2010.' },
    { 'guid': 40,  'text': 'Major Oil Spills in Australia: Kirki, Western Australia, 21 July 1991 from the Australian Maritime Safety Authority' },
    { 'guid': 41,  'text': '"M/V Mega Borg". National Oceanic and Atmospheric Administration. Retrieved 2009-10-28.' },
    { 'guid': 42,  'text': 'American Trader Oil Spill, California Office of Spill Prevention and Response' },
    { 'guid': 43,  'text': 'Cruel, Crude at sprol.com&#39;s "Worst Places in the World"' },
    { 'guid': 44,  'text': 'Oil Spills report from the Air and Waste Management Association' },
    { 'guid': 45,  'text': 'Nightmare on The Monongahela, Time Magazine, January 18, 1988' },
    { 'guid': 46,  'text': 'University of Delaware Sea Grant Program. "1985 Grand Eagle Oil Spill". Retrieved 31 May 2010.' },
    { 'guid': 47,  'text': '"Oil Spills and Disasters". Retrieved 2008-11-16.' },
    { 'guid': 48,  'text': 'ITOPF: TANIO (France, 1980)' },
    { 'guid': 49,  'text': '"Burmah Agate". National Oceanic and Atmospheric Administration. Retrieved 2008-11-16.' },
    { 'guid': 50,  'text': '"Atlantic Empress". Centre de Documentation de Recherche et d&#39;Expérimentations. Retrieved 2008-11-10.' },
    { 'guid': 51,  'text': '"Tanker Incidents". Retrieved 2009-07-19.' },
    { 'guid': 52,  'text': '"IXTOC I". National Oceanic and Atmospheric Administration. Retrieved 2008-11-03.' },
    { 'guid': 53,  'text': '"Ixtoc 1 oil spill: flaking of surface mousse in the Gulf of Mexico". Nature Publishing Group. Retrieved 2008-11-03.' },
    { 'guid': 54,  'text': '"Betelgeuse". Centre de Documentation de Recherche et d&#39;Expérimentations. Retrieved 15 March 2009.' },
    { 'guid': 55,  'text': '"Amoco Cadiz". National Oceanic and Atmospheric Administration. Retrieved 2008-11-16.' },
    { 'guid': 56,  'text': '[1]' },
    { 'guid': 57,  'text': '"Amoco Cadiz". National Oceanic and Atmospheric Administration. Retrieved 2010-05-22.' },
    { 'guid': 58,  'text': '"Ekofisk Bravo". Oil Rig Disasters. Monday, 14 April 2008. Retrieved 28 May 2010.' },
    { 'guid': 59,  'text': 'ITOPF: ARGO MERCHANT (USA, 1976)' },
    { 'guid': 60,  'text': '"Argo Merchant". National Oceanic and Atmospheric Administration. Retrieved 2008-11-16.' },
    { 'guid': 61,  'text': '"Albert T. McKINNEY v. US - 30 April 1979= 2009-07-01".' },
    { 'guid': 62,  'text': '"Save The River Report= 2009-07-01".' },
    { 'guid': 63,  'text': 'ITOPF: METULA (Chile, 1974)' },
    { 'guid': 64,  'text': '"After 30 years, tankers safer but spills still a threat". The Associated Press. Friday January 19, 2001. Retrieved 28 May 2010.' },
    { 'guid': 65,  'text': 'Wood, Roger Holmes (2006). When Tankers Collide, a Preview. AuthorHouse. ISBN 9781425955984. Retrieved 28 May 2010.' },
    { 'guid': 66,  'text': 'Brief Oil and Gas History of Santa Barbara County from the County of Santa Barbara, California' },
    { 'guid': 67,  'text': '"The African Queen Shipwreck". ShipwreckExpo. 2010. Retrieved 2010-04-28.' },
    { 'guid': 68,  'text': 'Howard (Delmar, Delaware) (Sunday, December 30, 2007). "African Queen". Delmar DustPan. Retrieved 2010-05-05.' },
    { 'guid': 69,  'text': 'Russell Berman (Sunday, 18 November 2005). "Greenpoint, Maspeth Residents Lobby To Get 55-Year-Old Oil Spill Cleaned Up". TheNew York Sun. Retrieved 2 June 2010.' },
    { 'guid': 70,  'text': 'Harry R. Carter (2003). "Oil and California’s Seabirds: An Overview" (PDF). Marine Ornithology 31: p. 2. Retrieved 2 June 2010.' },
    { 'guid': 71,  'text': '"Presidente Rivera Spill – June 24, 1989". University of Delaware Sea Grant Program. 2004. Retrieved 2 June 2010.' },
    { 'guid': 72,  'text': 'Rintoul, William; Hodgson, Susan F. (1990). Drilling Through Time: 75 Years with California&#39;s Division of Oil and Gas. Sacramento: Department of Conservation, Division of Oil and Gas. pp. 13-15. ISBN 096271240X.' }
    ];

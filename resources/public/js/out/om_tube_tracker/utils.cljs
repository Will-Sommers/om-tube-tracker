(ns om-tube-tracker.utils)

(defn resp-text []
	"<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<query xmlns:yahoo=\"http://www.yahooapis.com/v1/base.rng\" yahoo:count=\"1\" yahoo:created=\"2014-03-15T20:22:55Z\" yahoo:lang=\"en-US\"><results><ROOT xmlns=\"http://trackernet.lul.co.uk\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">
  <Disclaimer>This system is an INFORMATION ONLY system, relying entirely on
				information received from the relevant Operational Railway Control System(s). It is NOT
				considered a safety related system in the Railway Engineering sense. However,
				the information reported may trigger user intervention by staff regarding possible
				incidents on the railway, and confirmation of the situation observed should be obtained prior
				to any corrective action being taken.</Disclaimer>
  <WhenCreated>15 Mar 2014 20:22:32</WhenCreated>
  <Line>M</Line>
  <LineName>Metropolitan Line</LineName>
  <S Code=\"ALD\" CurTime=\"20:22:32\" Mess=\"\" N=\"Aldgate.\">
    <P N=\"Eastbound - Platform 1\" Num=\"1\" TrackCode=\"TJXB/XCALD\">
      <T DepartInterval=\"327\" DepartTime=\"20:22:19\" Departed=\"0\" DestCode=\"103\" Destination=\"Circle Line\" Direction=\"0\" IsStalled=\"0\" LCID=\"2003937\" LN=\"H\" Location=\"Left Barbican\" Order=\"0\" SecondsTo=\"327\" SetNo=\"203\" TimeTo=\"5:00\" TrackCode=\"TJ227C\" TripNo=\"15\"/>
      <T DepartInterval=\"910\" DepartTime=\"20:22:17\" Departed=\"0\" DestCode=\"103\" Destination=\"Circle Line\" Direction=\"0\" IsStalled=\"0\" LCID=\"2003956\" LN=\"H\" Location=\"At Great Portland Street Platform 2\" Order=\"0\" SecondsTo=\"910\" SetNo=\"204\" TimeTo=\"15:00\" TrackCode=\"TJ187\" TripNo=\"17\"/>
      <T DepartInterval=\"1275\" DepartTime=\"20:22:03\" Departed=\"0\" DestCode=\"518\" Destination=\"Check Front of Train\" Direction=\"0\" IsStalled=\"0\" LCID=\"1059340\" LN=\"H\" Location=\"Left Edgware Road\" Order=\"0\" SecondsTo=\"1275\" SetNo=\"000\" TimeTo=\"21:00\" TrackCode=\"TJBHEDG\" TripNo=\"0\"/>
    </P>
    <P N=\"Northbound - Platform 2\" Num=\"2\" TrackCode=\"TJTB/TEALD\">
      <T DepartInterval=\"158\" DepartTime=\"20:21:54\" Departed=\"0\" DestCode=\"12\" Destination=\"Aldgate\" Direction=\"0\" IsStalled=\"0\" LCID=\"1059119\" LN=\"M\" Location=\"At Liverpool Street Platform 1\" Order=\"0\" SecondsTo=\"158\" SetNo=\"432\" TimeTo=\"3:00\" TrackCode=\"TJS:T\" TripNo=\"33\"/>
      <T DepartInterval=\"761\" DepartTime=\"20:22:11\" Departed=\"0\" DestCode=\"12\" Destination=\"Aldgate\" Direction=\"0\" IsStalled=\"0\" LCID=\"1059174\" LN=\"M\" Location=\"Between Euston Square and King's Cross\" Order=\"0\" SecondsTo=\"761\" SetNo=\"433\" TimeTo=\"13:00\" TrackCode=\"TJ201A\" TripNo=\"33\"/>
      <T DepartInterval=\"1159\" DepartTime=\"20:22:25\" Departed=\"0\" DestCode=\"12\" Destination=\"Aldgate\" Direction=\"0\" IsStalled=\"0\" LCID=\"1059217\" LN=\"M\" Location=\"Approaching Baker Street\" Order=\"0\" SecondsTo=\"1159\" SetNo=\"421\" TimeTo=\"19:00\" TrackCode=\"TJ889B_2\" TripNo=\"34\"/>
      <T DepartInterval=\"1715\" DepartTime=\"20:22:19\" Departed=\"0\" DestCode=\"12\" Destination=\"Aldgate\" Direction=\"0\" IsStalled=\"0\" LCID=\"1059275\" LN=\"M\" Location=\"Left Neasden\" Order=\"0\" SecondsTo=\"1715\" SetNo=\"422\" TimeTo=\"29:00\" TrackCode=\"TJDJNEA\" TripNo=\"34\"/>
    </P>
    <P N=\"Northbound - Platform 3\" Num=\"3\" TrackCode=\"TJSB/SCALD\">
      <T DepartInterval=\"0\" DepartTime=\"20:19:03\" Departed=\"0\" DestCode=\"471\" Destination=\"Wembley Park\" Direction=\"0\" IsStalled=\"0\" LCID=\"1059084\" LN=\"M\" Location=\"At Platform\" Order=\"0\" SecondsTo=\"0\" SetNo=\"431\" TimeTo=\"-\" TrackCode=\"TJSB/SCALD\" TripNo=\"31\"/>
      <T DepartInterval=\"166\" DepartTime=\"20:21:54\" Departed=\"0\" DestCode=\"12\" Destination=\"Aldgate\" Direction=\"0\" IsStalled=\"0\" LCID=\"1059119\" LN=\"M\" Location=\"At Liverpool Street Platform 1\" Order=\"0\" SecondsTo=\"166\" SetNo=\"432\" TimeTo=\"3:00\" TrackCode=\"TJS:T\" TripNo=\"33\"/>
      <T DepartInterval=\"769\" DepartTime=\"20:22:11\" Departed=\"0\" DestCode=\"12\" Destination=\"Aldgate\" Direction=\"0\" IsStalled=\"0\" LCID=\"1059174\" LN=\"M\" Location=\"Between Euston Square and King's Cross\" Order=\"0\" SecondsTo=\"769\" SetNo=\"433\" TimeTo=\"13:00\" TrackCode=\"TJ201A\" TripNo=\"33\"/>
      <T DepartInterval=\"1167\" DepartTime=\"20:22:25\" Departed=\"0\" DestCode=\"12\" Destination=\"Aldgate\" Direction=\"0\" IsStalled=\"0\" LCID=\"1059217\" LN=\"M\" Location=\"Approaching Baker Street\" Order=\"0\" SecondsTo=\"1167\" SetNo=\"421\" TimeTo=\"19:00\" TrackCode=\"TJ889B_2\" TripNo=\"34\"/>
      <T DepartInterval=\"1723\" DepartTime=\"20:22:19\" Departed=\"0\" DestCode=\"12\" Destination=\"Aldgate\" Direction=\"0\" IsStalled=\"0\" LCID=\"1059275\" LN=\"M\" Location=\"Left Neasden\" Order=\"0\" SecondsTo=\"1723\" SetNo=\"422\" TimeTo=\"29:00\" TrackCode=\"TJDJNEA\" TripNo=\"34\"/>
    </P>
    <P N=\"Westbound - Platform 4\" Num=\"4\" TrackCode=\"TJRBALD\">
      <T DepartInterval=\"840\" DepartTime=\"20:22:07\" Departed=\"0\" DestCode=\"102\" Destination=\"Circle Line\" Direction=\"0\" IsStalled=\"0\" LCID=\"2003980\" LN=\"H\" Location=\"Between St. James's Park and Westminster\" Order=\"0\" SecondsTo=\"840\" SetNo=\"213\" TimeTo=\"14:00\" TrackCode=\"TD791A.B\" TripNo=\"0\"/>
      <T DepartInterval=\"1215\" DepartTime=\"20:22:28\" Departed=\"0\" DestCode=\"102\" Destination=\"Circle Line\" Direction=\"0\" IsStalled=\"0\" LCID=\"1059323\" LN=\"H\" Location=\"Left South Kensington\" Order=\"0\" SecondsTo=\"1215\" SetNo=\"214\" TimeTo=\"20:00\" TrackCode=\"TDJBSOK\" TripNo=\"0\"/>
    </P>
  </S>
</ROOT></results></query><!-- total: 1150 -->
<!-- engine4.yql.bf1.yahoo.com -->")

(resp-text)

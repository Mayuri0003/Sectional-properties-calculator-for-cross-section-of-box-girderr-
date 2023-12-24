function calculateProperties() {
    

    //INPUT VARIABLES
    const Totaldepthofstructure = parseFloat(document.getElementById('Total depth of structure').value);
    const TotaldepthofstructureatL2 = parseFloat(document.getElementById('Total depth of structure at L/2').value);
    const Widthofthebottomflange = parseFloat(document.getElementById('Width of the bottom flange').value);
    const WidthofthebottomflangeatL2 = parseFloat(document.getElementById('Width of the bottom flange at L/2').value);
    const Widthoftopflange = parseFloat(document.getElementById('Width of top flange').value);
    const WidthoftopflangeatL2 = parseFloat(document.getElementById('Width of top flange at L/2').value);
    const Widthofoverhangonleftside = parseFloat(document.getElementById('Width of overhang (on left side)').value);
    const WidthofoverhangonleftsideatL2 = parseFloat(document.getElementById('Width of overhang (on left side) at L/2').value);
    const Widthofoverhangonrightside = parseFloat(document.getElementById('Width of overhang (on right side)').value);
    const WidthofoverhangonrightsideatL2 = parseFloat(document.getElementById('Width of overhang (on right side) at L/2').value);
    const Thicknessoftopflange = parseFloat(document.getElementById('Thickness of top flange').value);
    const ThicknessoftopflangeatL2 = parseFloat(document.getElementById('Thickness of top flange at L/2').value);
    const Thicknessofbottomflange = parseFloat(document.getElementById('Thickness of bottom flange').value);
    const ThicknessofbottomflangeatL2 = parseFloat(document.getElementById('Thickness of bottom flange at L/2').value);
    const Thicknessofweb = parseFloat(document.getElementById('Thickness of web').value);
    const ThicknessofwebatL2 = parseFloat(document.getElementById('Thickness of web at L/2').value);
    const Thicknessofoverhangonleftsideattheend = parseFloat(document.getElementById('Thickness of overhang (on left side) at the end').value);
    const ThicknessofoverhangonleftsideattheendatL2 = parseFloat(document.getElementById('Thickness of overhang (on left side) at the end at L/2').value);
    const Thicknessofoverhangonleftsideatwebjunction = parseFloat(document.getElementById('Thickness of overhang (on left side) at web junction').value);
    const ThicknessofoverhangonleftsideatwebjunctionatL2 = parseFloat(document.getElementById('Thickness of overhang (on left side) at web junction at L/2').value);
    const Thicknessofoverhangonrightsideattheend = parseFloat(document.getElementById('Thickness of overhang  (on right side) at the end').value);
    const ThicknessofoverhangonrightsideattheendatL2 = parseFloat(document.getElementById('Thickness of overhang  (on right side) at the end at L/2').value);
    const Thicknessofoverhangonrightsideatwebjunction = parseFloat(document.getElementById('Thickness of overhang (on right side) at web junction').value);
    const ThicknessofoverhangonrightsideatwebjunctionatL2 = parseFloat(document.getElementById('Thickness of overhang (on right side) at web junction at L/2').value);
    const Thicknessofedgeprojectingbeyondboxgirderattheend = parseFloat(document.getElementById('Thickness of edge projecting beyond box girder at the end').value);
    const Thicknessofcantileverprojectionatsupport = parseFloat(document.getElementById('Thickness of cantilever projection at support').value);
    const Widthofchamfer = parseFloat(document.getElementById('Width of chamfer').value);
    const Heightofchamfer = parseFloat(document.getElementById('Height of chamfer').value);
    const Widthofopeningindiaphragm = parseFloat(document.getElementById('Width of opening in diaphragm').value);
    const Heightofopeningindiaphragm = parseFloat(document.getElementById('Height of opening in diaphragm').value);
    const Widthofchamferindiaphragm = parseFloat(document.getElementById('Width of chamfer in diaphragm').value);
    const Heightoofchamferindiaphragm = parseFloat(document.getElementById('Height of chamfer in diaphragm').value);


    //  ***********************AT SUPPORT SECTION ABOUT X-X AXIS************************

    //DERIVED VARIABLES
    const depthhollow = (Totaldepthofstructure - Thicknessoftopflange - Thicknessofbottomflange);
    const widthhollow = (Widthofthebottomflange - 2 * Thicknessofweb);

    //CALCULATING THE CROSS SECTIONAL AREA BY DIVIDING THE WHOLE CROSS SECTION INTO PARTS
    const totarea = Widthofthebottomflange * Totaldepthofstructure;
    const topbtmchamfarea = Widthofchamfer * Heightofchamfer;
    const holloarea = (Widthofthebottomflange - 2 * Thicknessofweb) * (Totaldepthofstructure - Thicknessoftopflange - Thicknessofbottomflange);
    const OHleftrect = Widthofoverhangonleftside * Thicknessofoverhangonleftsideattheend;
    const OHlefttri = 0.5 * Widthofoverhangonleftside * (Thicknessofoverhangonleftsideatwebjunction - Thicknessofoverhangonleftsideattheend);
    const OHrightrect = Widthofoverhangonrightside * Thicknessofoverhangonrightsideattheend;
    const OHrighttri = 0.5 * Widthofoverhangonrightside * (Thicknessofoverhangonrightsideatwebjunction - Thicknessofoverhangonrightsideattheend);

    //CALCULATING Y ABOUT SOFFIT
    const YabtTOt = Totaldepthofstructure/2;
    const YabtBotChamf = Thicknessofbottomflange + Heightofchamfer /3;
    const YabtTopChamf = Totaldepthofstructure - Thicknessoftopflange - Heightofchamfer/3;
    const YabtHoll = Thicknessofbottomflange + (Totaldepthofstructure - Thicknessoftopflange - Thicknessofbottomflange)/2;
    const YabtOHleftrec = Totaldepthofstructure - Thicknessofoverhangonleftsideattheend /2;
    const YabtOHlefttri = Totaldepthofstructure - Thicknessofoverhangonleftsideattheend - (Thicknessofoverhangonleftsideatwebjunction - Thicknessofoverhangonleftsideattheend)/3;
    const YabtOHrightrec = Totaldepthofstructure - Thicknessofoverhangonrightsideattheend/2;
    const YabtOHrighttri = Totaldepthofstructure - Thicknessofoverhangonrightsideattheend - (Thicknessofoverhangonrightsideatwebjunction - Thicknessofoverhangonrightsideattheend)/3;

    //CALCULATING AY
    const TotalAY = (totarea * YabtTOt) + (topbtmchamfarea * YabtBotChamf) + (topbtmchamfarea * YabtTopChamf)
                    - (holloarea * YabtHoll) + (OHleftrect * YabtOHleftrec) + (OHlefttri * YabtOHlefttri)
                    + (OHrightrect * YabtOHrightrec) + (OHrighttri * YabtOHrighttri)

    // CALCULATING CROSS SECTIONAL ABOUT XX AXIS
    const areaabtXxatsup = ((Widthofthebottomflange * Totaldepthofstructure) + 
                2 * (Widthofchamfer * Heightofchamfer) +
                (Widthofoverhangonleftside * Thicknessofoverhangonleftsideattheend) + 
                (Widthofoverhangonrightside * Thicknessofoverhangonrightsideattheend) + 
                0.5 * Widthofoverhangonleftside * (Thicknessofoverhangonleftsideatwebjunction - Thicknessofoverhangonleftsideattheend)+ 
                0.5 * Widthofoverhangonrightside * (Thicknessofoverhangonrightsideatwebjunction - Thicknessofoverhangonrightsideattheend)-
                ((Widthofthebottomflange - 2 * Thicknessofweb) * (Totaldepthofstructure - Thicknessoftopflange - Thicknessofbottomflange)));

    //CALCULATING CG
    const cgofsecfrombottom = TotalAY / areaabtXxatsup;
    const cgofsecfromtop = Totaldepthofstructure - cgofsecfrombottom;

    //DEFINING FUNCTIONS FOR CALCULATING OTHER PROPERTIES
    function YabtCG(x,cgofsec) {
      return Math.abs(x - cgofsec);
    }
    function MomofInertiarect(width,height){
      return (width * Math.pow(height, 3)) / 12;

    }
    function MomentofinertiaTriangle(width, height) {
      return (width * Math.pow(height, 3)) / 36;
    }

    function AY2(area1,yabtCG1){
      return (area1* Math.pow(yabtCG1,2));
    }

    function IXX(MOI,ay2){
      return MOI + ay2;

    }

    //CALCULATING I self
    const Iselftot = MomofInertiarect(Widthofthebottomflange, Totaldepthofstructure);
    const Iselfbotchamf = 2 * MomentofinertiaTriangle(Widthofchamfer, Heightofchamfer);
    const Iselftopchamf = 2 * MomentofinertiaTriangle(Widthofchamfer, Heightofchamfer);
    const Iselfhollow = MomofInertiarect(widthhollow, depthhollow);
    const IselfOHleftrect = MomofInertiarect(Widthofoverhangonleftside, Thicknessofoverhangonleftsideattheend);
    const IselfOHlefttri = MomentofinertiaTriangle(Widthofoverhangonleftside, (Thicknessofoverhangonleftsideatwebjunction - Thicknessofoverhangonleftsideattheend));
    const IselfOHrightrect = MomofInertiarect(Widthofoverhangonrightside, Thicknessofoverhangonrightsideattheend);
    const IselfOHrighttri = MomentofinertiaTriangle(Widthofoverhangonrightside, (Thicknessofoverhangonrightsideatwebjunction - Thicknessofoverhangonrightsideattheend));

    //CALCULATING A*y^2
    const AY2tot = AY2(totarea, YabtCG(YabtTOt, cgofsecfrombottom));
    const AY2botchamf = AY2(topbtmchamfarea, YabtCG(YabtBotChamf, cgofsecfrombottom));
    const AY2topchamf = AY2(topbtmchamfarea, YabtCG(YabtTopChamf, cgofsecfrombottom));
    const AY2hollow = AY2(holloarea, YabtCG(YabtHoll, cgofsecfrombottom));
    const AY2OHleftrect = AY2(OHleftrect, YabtCG(YabtOHleftrec, cgofsecfrombottom));
    const AY2OHlefttri = AY2(OHlefttri, YabtCG(YabtOHlefttri, cgofsecfrombottom));
    const AY2OHrightrect = AY2(OHrightrect, YabtCG(YabtOHrightrec, cgofsecfrombottom));
    const AY2OHrighttri = AY2(OHrighttri, YabtCG(YabtOHrighttri, cgofsecfrombottom));

    //CALCULATING MOMENT OF INERTIA ABOUT XX AXIS
    const IXXtot = IXX(Iselftot, AY2tot);
    const IXXbotchamf = IXX(Iselfbotchamf, AY2botchamf);
    const IXXtopchamf = IXX(Iselftopchamf, AY2topchamf);
    const IXXhollow = IXX(Iselfhollow, AY2hollow);
    const IXXOHleftrect = IXX(IselfOHleftrect, AY2OHleftrect);
    const IXXOHlefttri = IXX(IselfOHlefttri, AY2OHlefttri);
    const IXXOHrightrect = IXX(IselfOHrightrect, AY2OHrightrect);
    const IXXOHrighttri = IXX(IselfOHrighttri, AY2OHrighttri);


    //CALCULATING Z VALUES AND TOTAL MOMENT OF INERTIA
    const momentOfInertia = IXXtot + IXXbotchamf + IXXtopchamf -IXXhollow + IXXOHleftrect + IXXOHlefttri + IXXOHrightrect + IXXOHrighttri;
    const Ztopofthegirder = momentOfInertia / cgofsecfromtop;
    const Zbotofthegirder = momentOfInertia / cgofsecfrombottom;



  //  ***********************AT MID SECTION ABOUT X-X AXIS************************
  //DERIVED VARIABLES
  const depthhollowatL2 = (TotaldepthofstructureatL2 - ThicknessoftopflangeatL2 - ThicknessofbottomflangeatL2);
  const widthhollowatL2 = (WidthofthebottomflangeatL2 - 2 * ThicknessofwebatL2);

  //CALCULATING THE CROSS SECTIONAL AREA
  const totareaMID = WidthofthebottomflangeatL2 * TotaldepthofstructureatL2;
  const topchamfareaMID = Widthofchamfer * Heightofchamfer;
  const btmchamfareaMID = Widthofchamfer * Heightofchamfer;
  const holloareaMID = (WidthofthebottomflangeatL2 - 2 * ThicknessofwebatL2) * (TotaldepthofstructureatL2 - ThicknessoftopflangeatL2 - ThicknessofbottomflangeatL2);
  const OHleftrectMID = WidthofoverhangonleftsideatL2 * ThicknessofoverhangonleftsideattheendatL2;
  const OHlefttriMID = 0.5 * WidthofoverhangonleftsideatL2 * (ThicknessofoverhangonleftsideatwebjunctionatL2 - ThicknessofoverhangonleftsideattheendatL2);
  const OHrightrectMID = WidthofoverhangonrightsideatL2 * ThicknessofoverhangonrightsideattheendatL2;
  const OHrighttriMID = 0.5 * WidthofoverhangonrightsideatL2 * (ThicknessofoverhangonrightsideatwebjunctionatL2 - ThicknessofoverhangonrightsideattheendatL2);

  //CALCULATING TOTAL CROSS SECTIONAL AREA
  const totalcrosssectionalareamid = totareaMID + topchamfareaMID + btmchamfareaMID - holloareaMID
                                    + OHleftrectMID + OHlefttriMID + OHrightrectMID + OHrighttriMID;

  //CALCULATING Y ABOUT SOFFIT
  const YabtTOtMID = TotaldepthofstructureatL2 / 2;
  const YabtBotChamfMID = ThicknessofbottomflangeatL2 + Heightofchamfer / 3;
  const YabtTopChamfMID = TotaldepthofstructureatL2 - ThicknessoftopflangeatL2 - Heightofchamfer / 3;
  const YabtHollMID = ThicknessofbottomflangeatL2 + (TotaldepthofstructureatL2 - ThicknessoftopflangeatL2 - ThicknessofbottomflangeatL2) / 2;
  const YabtOHleftrecMID = TotaldepthofstructureatL2 - ThicknessofoverhangonleftsideattheendatL2 / 2;
  const YabtOHlefttriMID = TotaldepthofstructureatL2 - ThicknessofoverhangonleftsideattheendatL2 - (ThicknessofoverhangonleftsideatwebjunctionatL2 - ThicknessofoverhangonleftsideattheendatL2) / 3;
  const YabtOHrightrecMID = TotaldepthofstructureatL2 - ThicknessofoverhangonrightsideattheendatL2 / 2;
  const YabtOHrighttriMID = TotaldepthofstructureatL2 - ThicknessofoverhangonrightsideattheendatL2 - (ThicknessofoverhangonrightsideatwebjunctionatL2 - ThicknessofoverhangonrightsideattheendatL2) / 3;
  
  //CALCULATING TOTAL AY
  const TotalAYmid = (totareaMID * YabtTOtMID) + (topchamfareaMID * YabtBotChamfMID) + (btmchamfareaMID * YabtTopChamfMID) - (holloareaMID * YabtHollMID) 
                      + (OHleftrectMID * YabtOHleftrecMID) + (OHlefttriMID * YabtOHlefttriMID) + (OHrightrectMID * YabtOHrightrecMID) + (OHrighttriMID * YabtOHrighttriMID);
  //CALCULATING CENTER OF GRAVITY

  const CgfromBTMmid=TotalAYmid/totalcrosssectionalareamid;
  const CgfromTopmid = Totaldepthofstructure - CgfromBTMmid;

  //CALCULATING I self
  const IselfTotMid = MomofInertiarect(WidthofthebottomflangeatL2, TotaldepthofstructureatL2);
  const IselfBotChamfMid = 2 * MomentofinertiaTriangle(Widthofchamfer, Heightofchamfer);
  const IselfTopChamfMid = 2 * MomentofinertiaTriangle(Widthofchamfer, Heightofchamfer);
  const IselfHollowMid = MomofInertiarect(widthhollowatL2, depthhollowatL2);
  const IselfOHleftrectMid = MomofInertiarect(WidthofoverhangonleftsideatL2, ThicknessofoverhangonleftsideattheendatL2);
  const IselfOHlefttriMid = MomentofinertiaTriangle(WidthofoverhangonleftsideatL2, (ThicknessofoverhangonleftsideatwebjunctionatL2 - ThicknessofoverhangonleftsideattheendatL2));
  const IselfOHrightrectMid = MomofInertiarect(WidthofoverhangonrightsideatL2, ThicknessofoverhangonrightsideattheendatL2);
  const IselfOHrighttriMid = MomentofinertiaTriangle(WidthofoverhangonrightsideatL2, (ThicknessofoverhangonrightsideatwebjunctionatL2 - ThicknessofoverhangonrightsideattheendatL2));

  //CALCULATING A*y^2
  const AY2totMid = AY2(totareaMID, YabtCG(YabtTOtMID, CgfromBTMmid));
  const AY2botchamfMid = AY2(topchamfareaMID, YabtCG(YabtBotChamfMID, CgfromBTMmid));
  const AY2topchamfMid = AY2(btmchamfareaMID, YabtCG(YabtTopChamfMID, CgfromBTMmid));
  const AY2hollowMid = AY2(holloareaMID, YabtCG(YabtHollMID, CgfromBTMmid));
  const AY2OHleftrectMid = AY2(OHleftrectMID, YabtCG(YabtOHleftrecMID, CgfromBTMmid));
  const AY2OHlefttriMid = AY2(OHlefttriMID, YabtCG(YabtOHlefttriMID, CgfromBTMmid));
  const AY2OHrightrectMid = AY2(OHrightrectMID, YabtCG(YabtOHrightrecMID, CgfromBTMmid));
  const AY2OHrighttriMid = AY2(OHrighttriMID, YabtCG(YabtOHrighttriMID, CgfromBTMmid));

  //CALCULATING MOMENT OF INERTIA ABOUT XX AXIS
  const IXXtotMID = IXX(IselfTotMid, AY2totMid);
  const IXXbotchamfMID = IXX(IselfBotChamfMid, AY2botchamfMid);
  const IXXtopchamfMID = IXX(IselfTopChamfMid, AY2topchamfMid);
  const IXXhollowMID = IXX(IselfHollowMid, AY2hollowMid);
  const IXXOHleftrectMID = IXX(IselfOHleftrectMid, AY2OHleftrectMid);
  const IXXOHlefttriMID = IXX(IselfOHlefttriMid, AY2OHlefttriMid);
  const IXXOHrightrectMID = IXX(IselfOHrightrectMid, AY2OHrightrectMid);
  const IXXOHrighttriMID = IXX(IselfOHrighttriMid, AY2OHrighttriMid);

  //CALCULATING Z VALUES AND TOTAL MOMENT OF INERTIA
  const momentOfInertiaMid = IXXtotMID + IXXbotchamfMID + IXXtopchamfMID - IXXhollowMID + IXXOHleftrectMID + IXXOHlefttriMID + IXXOHrightrectMID + IXXOHrighttriMID;
  const ZtopofthegirderMid = momentOfInertiaMid / CgfromTopmid;
  const ZbotofthegirderMid = momentOfInertiaMid / CgfromBTMmid;

  //  ***********************AT SUPPORT SECTION ABOUT Y-Y AXIS************************


  //area of each cross section and total area is same about XX and YY axis

  //CALCULATING X ABOUT LEFTEND
  const XAbtLeftEndTot = Widthofthebottomflange / 2 + Widthofoverhangonleftside;
  const XAbtLeftEndLeftchamf = Widthofoverhangonleftside+Thicknessofweb+Widthofchamfer/3;
  const XAbtLeftEndRightchamf= Widthoftopflange-Widthofoverhangonrightside-Thicknessofweb-Widthofchamfer/3;
  const XAbtLeftEndHollow = Widthofoverhangonleftside + Thicknessofweb + widthhollow/2;
  const XAbtLeftEndOHLeftRect = WidthofoverhangonleftsideatL2/2;
  const XAbtLeftEndOHLeftTri = Widthofoverhangonleftside*2/3;
  const XAbtLeftEndOHRightRect = Widthoftopflange - Widthofoverhangonrightside/2;                                                                                                                                                                                                                                                                                                                                                                                                                                                               
  const XAbtLeftEndOHRightTri = Widthoftopflange - 2 * Widthofoverhangonrightside/3;

  //CALCULATING AX
  const TotalAX = (totarea * XAbtLeftEndTot) + (topbtmchamfarea * XAbtLeftEndLeftchamf) + (topbtmchamfarea * XAbtLeftEndRightchamf)
    - (holloarea * XAbtLeftEndHollow) + (OHleftrect * XAbtLeftEndOHLeftRect) + (OHlefttri * XAbtLeftEndOHLeftTri)
    + (OHrightrect * XAbtLeftEndOHRightRect) + (OHrighttri * XAbtLeftEndOHRightTri)

  const CGofSectionFromLeftEndofGirderXLeftEnd = TotalAX / areaabtXxatsup;
  const CGofSectionFromLeftEndofGirderXRightEnd = Widthoftopflange - CGofSectionFromLeftEndofGirderXLeftEnd;
  const CGOfTheSectionFromCenterOfTheBox = XAbtLeftEndTot - CGofSectionFromLeftEndofGirderXLeftEnd;
  const CGofSectionFromLeftEndOfGirderXLeftEndofBox = Widthofthebottomflange / 2 - CGOfTheSectionFromCenterOfTheBox;
  const CGofSectionFromRightEndOfGirderXRightEndofBox = Widthofthebottomflange / 2 + CGOfTheSectionFromCenterOfTheBox;

  //CALCULATING I self
  const IselftotabtYY = MomofInertiarect(Totaldepthofstructure,Widthofthebottomflange);
  const IselfbotchamfabtYY = 2 * MomentofinertiaTriangle(Heightofchamfer,Widthofchamfer);
  const IselftopchamfabtYY = 2 * MomentofinertiaTriangle(Heightofchamfer,Widthofchamfer);
  const IselfhollowabtYY = MomofInertiarect(depthhollow,widthhollow);
  const IselfOHleftrectabtYY = MomofInertiarect(Thicknessofoverhangonleftsideattheend,Widthofoverhangonleftside);
  const IselfOHlefttriabtYY = MomentofinertiaTriangle ((Thicknessofoverhangonleftsideatwebjunction - Thicknessofoverhangonleftsideattheend),Widthofoverhangonleftside);
  const IselfOHrightrectabtYY = MomofInertiarect(Thicknessofoverhangonrightsideattheend,Widthofoverhangonrightside);
  const IselfOHrighttriabtYY = MomentofinertiaTriangle((Thicknessofoverhangonrightsideatwebjunction - Thicknessofoverhangonrightsideattheend),Widthofoverhangonrightside);

  //CALCULATING A*X^2
  const AX2tot = AY2(totarea, YabtCG(XAbtLeftEndTot,CGofSectionFromLeftEndofGirderXLeftEnd ));
  const AX2botchamf = AY2(topbtmchamfarea, YabtCG(XAbtLeftEndLeftchamf,CGofSectionFromLeftEndofGirderXLeftEnd ));
  const AX2topchamf = AY2(topbtmchamfarea, YabtCG(XAbtLeftEndRightchamf,CGofSectionFromLeftEndofGirderXLeftEnd ));
  const AX2hollow = AY2(holloarea, YabtCG(XAbtLeftEndHollow,CGofSectionFromLeftEndofGirderXLeftEnd ));
  const AX2OHleftrect = AY2(OHleftrect, YabtCG(XAbtLeftEndOHLeftRect,CGofSectionFromLeftEndofGirderXLeftEnd ));
  const AX2OHlefttri = AY2(OHlefttri, YabtCG(XAbtLeftEndOHLeftTri,CGofSectionFromLeftEndofGirderXLeftEnd ));
  const AX2OHrightrect = AY2(OHrightrect, YabtCG(XAbtLeftEndOHRightRect,CGofSectionFromLeftEndofGirderXLeftEnd ));
  const AX2OHrighttri = AY2(OHrighttri, YabtCG(XAbtLeftEndOHRightTri,CGofSectionFromLeftEndofGirderXLeftEnd ));

  //CALCULATING MOMENT OF INERTIA ABOUT YY AXIS
  const IYYtot = IXX(IselftotabtYY, AX2tot);
  const IYYbotchamf = IXX(IselfbotchamfabtYY, AX2botchamf);
  const IYYtopchamf = IXX(IselftopchamfabtYY, AX2topchamf);
  const IYYhollow = IXX(IselfhollowabtYY, AX2hollow);
  const IYYOHleftrect = IXX(IselfOHleftrectabtYY, AX2OHleftrect);
  const IYYOHlefttri = IXX(IselfOHlefttriabtYY, AX2OHlefttri);
  const IYYOHrightrect = IXX(IselfOHrightrectabtYY, AX2OHrightrect);
  const IYYOHrighttri = IXX(IselfOHrighttriabtYY, AX2OHrighttri);

  //CALCULATING Z VALUES AND TOTAL MOMENT OF INERTIA
  const momentOfInertiaabtYY = IYYtot + IYYbotchamf + IYYtopchamf - IYYhollow + IYYOHleftrect + IYYOHlefttri + IYYOHrightrect + IYYOHrighttri;
  const SectionModulusZleftLeftEndOfCrossSectionTop = momentOfInertiaabtYY / CGofSectionFromLeftEndofGirderXLeftEnd;
  const SectionModulusZRightRightEndOfCrossSectionTop = momentOfInertiaabtYY / CGofSectionFromLeftEndofGirderXRightEnd;
  const SectionModulusZLeftLeftEndofBoxBottom = momentOfInertiaabtYY / (Widthofthebottomflange * 0.5 - CGOfTheSectionFromCenterOfTheBox);
  const SectionModulusZRightRightEndofBoxBottom = momentOfInertiaabtYY / CGofSectionFromRightEndOfGirderXRightEndofBox;

  //  ***********************AT SUPPORT SECTION ABOUT Y-Y AXIS************************

  //area of each cross section and total area at MID Section is same about XX and YY axis

  //CALCULATING X ABOUT LEFTEND
  const XAbtLeftEndTotatMidSection = WidthofthebottomflangeatL2 / 2 + WidthofoverhangonleftsideatL2;
  const XAbtLeftEndLeftchamfatMidSection = WidthofoverhangonleftsideatL2 + ThicknessofwebatL2 + Widthofchamfer / 3;
  const XAbtLeftEndRightchamfatMidSection = WidthoftopflangeatL2 - WidthofoverhangonrightsideatL2 - ThicknessofwebatL2 - Widthofchamfer / 3;
  const XAbtLeftEndHollowatMidSection = WidthofoverhangonleftsideatL2 + ThicknessofwebatL2 + widthhollowatL2 / 2;
  const XAbtLeftEndOHLeftRectatMidSection = WidthofoverhangonleftsideatL2 / 2;
  const XAbtLeftEndOHLeftTriatMidSection = WidthofoverhangonleftsideatL2 * 2 / 3;
  const XAbtLeftEndOHRightRectatMidSection = WidthoftopflangeatL2 - WidthofoverhangonrightsideatL2 / 2;
  const XAbtLeftEndOHRightTriatMidSection = WidthoftopflangeatL2 - 2 * WidthofoverhangonrightsideatL2 / 3;

  //CALCULATING AX at MidSection
  const TotalAXatMid = (totareaMID * XAbtLeftEndTotatMidSection) + (topchamfareaMID * XAbtLeftEndLeftchamfatMidSection) + (btmchamfareaMID * XAbtLeftEndRightchamfatMidSection)
    - (holloareaMID * XAbtLeftEndHollowatMidSection) + (OHleftrectMID * XAbtLeftEndOHLeftRectatMidSection) + (OHlefttriMID * XAbtLeftEndOHLeftTriatMidSection)
    + (OHrightrectMID * XAbtLeftEndOHRightRectatMidSection) + (OHrighttriMID * XAbtLeftEndOHRightTriatMidSection)

  //CALCULATING CENTRE OF GRAVITY

  const CGofSectionFromLeftEndofGirderXLeftEndatMidSection = TotalAXatMid / totalcrosssectionalareamid;
  const CGofSectionFromLeftEndofGirderXRightEndatMidSection = WidthoftopflangeatL2 - CGofSectionFromLeftEndofGirderXLeftEndatMidSection;
  const CGOfTheSectionFromCenterOfTheBoxatMidSection = XAbtLeftEndTot - CGofSectionFromLeftEndofGirderXLeftEndatMidSection;
  const CGofSectionFromLeftEndOfGirderXLeftEndofBoxatMidSection = WidthofthebottomflangeatL2 / 2 - CGOfTheSectionFromCenterOfTheBoxatMidSection;
  const CGofSectionFromRightEndOfGirderXRightEndofBoxatMidSection = WidthofthebottomflangeatL2 / 2 + CGOfTheSectionFromCenterOfTheBoxatMidSection;

  //CALCULATING I self
  const IselftotabtYYatMid = MomofInertiarect(TotaldepthofstructureatL2, WidthofthebottomflangeatL2);
  const IselfbotchamfabtYYatMid = 2 * MomentofinertiaTriangle(Heightofchamfer, Widthofchamfer);
  const IselftopchamfabtYYatMid = 2 * MomentofinertiaTriangle(Heightofchamfer, Widthofchamferindiaphragm);
  const IselfhollowabtYYatMid = MomofInertiarect(depthhollowatL2, widthhollowatL2);
  const IselfOHleftrectabtYYatMid = MomofInertiarect(ThicknessofoverhangonleftsideattheendatL2, WidthofoverhangonleftsideatL2);
  const IselfOHlefttriabtYYatMid = MomentofinertiaTriangle((ThicknessofoverhangonleftsideatwebjunctionatL2 - ThicknessofoverhangonleftsideattheendatL2), WidthofoverhangonleftsideatL2);
  const IselfOHrightrectabtYYatMid = MomofInertiarect(ThicknessofoverhangonrightsideattheendatL2, WidthofoverhangonrightsideatL2);
  const IselfOHrighttriabtYYatMid = MomentofinertiaTriangle((ThicknessofoverhangonrightsideatwebjunctionatL2 - ThicknessofoverhangonrightsideattheendatL2), WidthofoverhangonrightsideatL2);

  //CALCULATING A*X^2
  const AX2totatMid = AY2(totareaMID, YabtCG(XAbtLeftEndTotatMidSection, CGofSectionFromLeftEndofGirderXLeftEnd));
  const AX2botchamfatMid = AY2(topchamfareaMID, YabtCG(XAbtLeftEndLeftchamfatMidSection, CGofSectionFromLeftEndofGirderXLeftEnd));
  const AX2topchamfatMid = AY2(topchamfareaMID, YabtCG(XAbtLeftEndRightchamfatMidSection, CGofSectionFromLeftEndofGirderXLeftEnd));
  const AX2hollowatMid = AY2(holloareaMID, YabtCG(XAbtLeftEndHollowatMidSection, CGofSectionFromLeftEndofGirderXLeftEnd));
  const AX2OHleftrectatMid = AY2(OHleftrectMID, YabtCG(XAbtLeftEndOHLeftRectatMidSection, CGofSectionFromLeftEndofGirderXLeftEnd));
  const AX2OHlefttriatMid = AY2(OHlefttriMID, YabtCG(XAbtLeftEndOHLeftTriatMidSection, CGofSectionFromLeftEndofGirderXLeftEnd));
  const AX2OHrightrectatMid = AY2(OHrightrectMID, YabtCG(XAbtLeftEndOHRightRectatMidSection, CGofSectionFromLeftEndofGirderXLeftEnd));
  const AX2OHrighttriatMid = AY2(OHrighttriMID, YabtCG(XAbtLeftEndOHRightTriatMidSection, CGofSectionFromLeftEndofGirderXLeftEnd));

  //CALCULATING MOMENT OF INERTIA ABOUT YY AXIS
  const IYYtotatMid = IXX(IselftotabtYYatMid, AX2totatMid);
  const IYYbotchamfatMid = IXX(IselfbotchamfabtYYatMid, AX2botchamfatMid);
  const IYYtopchamfatMid = IXX(IselftopchamfabtYYatMid, AX2topchamfatMid);
  const IYYhollowatMid = IXX(IselfhollowabtYYatMid, AX2hollowatMid);
  const IYYOHleftrectatMid = IXX(IselfOHleftrectabtYYatMid, AX2OHleftrectatMid);
  const IYYOHlefttriatMid = IXX(IselfOHlefttriabtYYatMid, AX2OHlefttriatMid);
  const IYYOHrightrectatMid = IXX(IselfOHrightrectabtYYatMid, AX2OHrightrectatMid);
  const IYYOHrighttriatMid = IXX(IselfOHrighttriabtYYatMid, AX2OHrighttriatMid);

  //CALCULATING Z VALUES AND TOTAL MOMENT OF INERTIA
  const momentOfInertiaabtYYatMid = IYYtotatMid + IYYbotchamfatMid + IYYtopchamfatMid - IYYhollowatMid + IYYOHleftrectatMid + IYYOHlefttriatMid + IYYOHrightrectatMid + IYYOHrighttriatMid;
  const SectionModulusZleftLeftEndOfCrossSectionTopatMid = momentOfInertiaabtYYatMid / CGofSectionFromLeftEndofGirderXLeftEndatMidSection;
  const SectionModulusZRightRightEndOfCrossSectionTopatMid = momentOfInertiaabtYYatMid / CGofSectionFromLeftEndofGirderXRightEndatMidSection;
  const SectionModulusZLeftLeftEndofBoxBottomatMid = momentOfInertiaabtYYatMid / CGofSectionFromLeftEndOfGirderXLeftEndofBoxatMidSection;
  const SectionModulusZRightRightEndofBoxBottomatMid = momentOfInertiaabtYYatMid / CGofSectionFromRightEndOfGirderXRightEndofBoxatMidSection;

  //*******************************SECTION PROPERTIES OF END DIAPHRAM******************************************

  //DERIVED VARIABLES
  const ThicknessofBottomFlangeatEnd=(Totaldepthofstructure-Thicknessoftopflange-Thicknessofbottomflange-Heightofopeningindiaphragm)/2+Thicknessofbottomflange;


  //CALCULATING THE CROSS SECTIONAL AREA BY DIVIDING THE WHOLE CROSS SECTION INTO PARTS
  const totareaatEnd = Widthofthebottomflange * Totaldepthofstructure;
  const topbtmchamfareaatEnd = Widthofchamferindiaphragm * Heightoofchamferindiaphragm;
  const holloareaatEnd = Widthofopeningindiaphragm * Heightofopeningindiaphragm;
  const OHleftrectatEnd = Widthofoverhangonleftside * Thicknessofoverhangonleftsideattheend;
  const OHlefttriatEnd = 0.5 * Widthofoverhangonleftside * (Thicknessofoverhangonleftsideatwebjunction - Thicknessofoverhangonleftsideattheend);
  const OHrightrectatEnd = Widthofoverhangonrightside * Thicknessofoverhangonrightsideattheend;
  const OHrighttriatEnd = 0.5 * Widthofoverhangonrightside * (Thicknessofoverhangonrightsideatwebjunction - Thicknessofoverhangonrightsideattheend);

  //CALCULATING TOTAL AREA
  const AreaTotatEnd = totareaatEnd + 2*topbtmchamfareaatEnd - holloareaatEnd + OHleftrectatEnd + OHlefttriatEnd + OHrightrectatEnd + OHrighttriatEnd;

  //CALCULATING Y ABOUT SOFFIT
  const YabtTOtatEnd = Totaldepthofstructure / 2;
  const YabtBotChamfatEnd = ThicknessofBottomFlangeatEnd + Heightoofchamferindiaphragm / 3;
  const YabtTopChamfatEnd = Totaldepthofstructure - ThicknessofBottomFlangeatEnd - Heightoofchamferindiaphragm / 3;
  const YabtHollatEnd = Thicknessofbottomflange + (Totaldepthofstructure - Thicknessoftopflange - Thicknessofbottomflange) / 2;
  const YabtOHleftrecatEnd = Totaldepthofstructure - Thicknessofoverhangonleftsideattheend / 2;
  const YabtOHlefttriatEnd = Totaldepthofstructure - Thicknessofoverhangonleftsideattheend - (Thicknessofoverhangonleftsideatwebjunction - Thicknessofoverhangonleftsideattheend) / 3;
  const YabtOHrightrecatEnd = Totaldepthofstructure - Thicknessofoverhangonrightsideattheend / 2;
  const YabtOHrighttriatEnd = Totaldepthofstructure - Thicknessofoverhangonrightsideattheend - (Thicknessofoverhangonrightsideatwebjunction - Thicknessofoverhangonrightsideattheend) / 3;
 
  //CALCULATING AY
  const TotalAYatEnd = (totareaatEnd * YabtTOtatEnd) + (topbtmchamfareaatEnd * YabtBotChamfatEnd) + (topbtmchamfareaatEnd * YabtTopChamfatEnd)
    - (holloareaatEnd * YabtHollatEnd) + (OHleftrectatEnd * YabtOHleftrecatEnd) + (OHlefttriatEnd * YabtOHlefttriatEnd)
    + (OHrightrectatEnd * YabtOHrightrecatEnd) + (OHrighttriatEnd * YabtOHrighttriatEnd)

  //CALCULATING Centre of Gravity
  const cgofsecfrombottomatEnd = TotalAYatEnd / AreaTotatEnd;
  const cgofsecfromtopatEnd = Totaldepthofstructure - cgofsecfrombottomatEnd;

  //CALCULATING I self
  const IselftotatEND = MomofInertiarect(Widthofthebottomflange, Totaldepthofstructure);
  const IselfbotchamfatEND = 2 * MomentofinertiaTriangle(Widthofchamferindiaphragm, Heightoofchamferindiaphragm);
  const IselftopchamfatEND = 2 * MomentofinertiaTriangle(Widthofchamferindiaphragm, Heightoofchamferindiaphragm);
  const IselfhollowatEND= MomofInertiarect(Widthofopeningindiaphragm, Heightofopeningindiaphragm);
  const IselfOHleftrectatEND = MomofInertiarect(Widthofoverhangonleftside, Thicknessofoverhangonleftsideattheend);
  const IselfOHlefttriatEND = MomentofinertiaTriangle(Widthofoverhangonleftside, (Thicknessofoverhangonleftsideatwebjunction - Thicknessofoverhangonleftsideattheend));
  const IselfOHrightrectatEND = MomofInertiarect(Widthofoverhangonrightside, Thicknessofoverhangonrightsideattheend);
  const IselfOHrighttriatEND = MomentofinertiaTriangle(Widthofoverhangonrightside, (Thicknessofoverhangonrightsideatwebjunction - Thicknessofoverhangonrightsideattheend));

  //CALCULATING A*y^2
  const AY2totatEND = AY2(totareaatEnd, YabtCG(YabtTOtatEnd, cgofsecfrombottom));
  const AY2botchamfatEND = AY2(topbtmchamfareaatEnd, YabtCG(YabtBotChamfatEnd, cgofsecfrombottomatEnd));
  const AY2topchamfatEND = AY2(topbtmchamfareaatEnd, YabtCG(YabtTopChamfatEnd, cgofsecfrombottomatEnd));
  const AY2hollowatEND = AY2(holloareaatEnd, YabtCG(YabtHollatEnd, cgofsecfrombottomatEnd));
  const AY2OHleftrectatEND = AY2(OHleftrectatEnd, YabtCG(YabtOHleftrecatEnd, cgofsecfrombottom));
  const AY2OHlefttriatEND = AY2(OHlefttriatEnd, YabtCG(YabtOHlefttriatEnd, cgofsecfrombottom));
  const AY2OHrightrectatEND = AY2(OHrightrectatEnd, YabtCG(YabtOHrightrecatEnd, cgofsecfrombottom));
  const AY2OHrighttriatEND = AY2(OHrighttriatEnd, YabtCG(YabtOHrighttriatEnd, cgofsecfrombottom));

  //CALCULATING MOMENT OF INERTIA ABOUT XX AXIS
  const IXXtotatEnd = IXX(IselftotatEND, AY2totatEND);
  const IXXbotchamfatEnd = IXX(IselfbotchamfatEND, AY2botchamfatEND);
  const IXXtopchamfatEnd = IXX(IselftopchamfatEND, AY2topchamfatEND);
  const IXXhollowatEnd = IXX(IselfhollowatEND, AY2hollowatEND);
  const IXXOHleftrectatEnd = IXX(IselfOHleftrectatEND, AY2OHleftrectatEND);
  const IXXOHlefttriatEnd = IXX(IselfOHlefttriatEND, AY2OHlefttriatEND);
  const IXXOHrightrectatEnd = IXX(IselfOHrightrectatEND, AY2OHrightrectatEND);
  const IXXOHrighttriatEnd = IXX(IselfOHrighttriatEND, AY2OHrighttriatEND);

  //CALCULATING Z VALUES AND TOTAL MOMENT OF INERTIA
  const momentOfInertiaatEnd = IXXtotatEnd + IXXbotchamfatEnd + IXXtopchamfatEnd - IXXhollowatEnd + IXXOHleftrectatEnd + IXXOHlefttriatEnd + IXXOHrightrectatEnd + IXXOHrighttriatEnd;
  const ZtopofthegirderatEnd = momentOfInertiaatEnd / cgofsecfromtopatEnd;
  const ZbotofthegirderatEnd = momentOfInertiaatEnd / cgofsecfrombottomatEnd;


  
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
    <p>Sectional Properties about X-X axis: <\p>
    <div class="container" align="center">
      <table border="1" cellpadding="3" id="printTable">
        <tbody><tr>
            <th>Description</th>
            <th>Units</th>      
            <th>At Support</th>
            <th>At L/2</th>
            <th>Tapered</th>
        </tr>
        <tr>
            <td>Area of the section</td>
            <td>m^2</td>      
            <td> ${areaabtXxatsup.toFixed(3)}</td>
            <td>${totalcrosssectionalareamid.toFixed(3)}</td>
            <td>${((totalcrosssectionalareamid + areaabtXxatsup) / 2).toFixed(3)}</td>
        </tr>
        <tr>
            <td>CG of the section from bottom</td>
            <td>m</td>        
            <td>${cgofsecfrombottom.toFixed(3)}</td>
            <td>${CgfromBTMmid.toFixed(3)}</td>
            <td>${((CgfromBTMmid + cgofsecfrombottom) / 2).toFixed(3)}</td>
        </tr>
        <tr>
            <td>CG of the section from top</td>
            <td>m</td>        
            <td>${cgofsecfromtop.toFixed(3)} </td>
            <td>${CgfromTopmid.toFixed(3)} </td>
            <td>${((CgfromTopmid + cgofsecfromtop) / 2).toFixed(3)}</td>
        </tr>
        <tr>
            <td>Moment of inertia Ixx</td>
            <td>m^4</td>        
            <td>${momentOfInertia.toFixed(3)}</td>
            <td>${momentOfInertiaMid.toFixed(3)}</td>
            <td>${((momentOfInertiaMid + momentOfInertia) / 2).toFixed(3)}</td>
        </tr>
        <tr>
            <td>Ztop of the girder</td>
            <td>m^3</td>        
            <td> ${Ztopofthegirder.toFixed(3)}</td>
            <td>${ZtopofthegirderMid.toFixed(3)}</td>
            <td>${((ZtopofthegirderMid + Ztopofthegirder) / 2).toFixed(3)} </td>
        </tr>
        <tr>
            <td>Z bottom of the girder</td>
            <td>m^3</td>        
            <td>${Zbotofthegirder.toFixed(3)}</td>
            <td>${ZbotofthegirderMid.toFixed(3)}</td>
            <td>${((ZbotofthegirderMid + Zbotofthegirder) / 2).toFixed(3)} </td>
        </tr>
        <tr>
            <td>Total A*Y</td>
            <td>m^3</td>
            <td>${TotalAY.toFixed(3)}</td>
            <td>${TotalAYmid.toFixed(3)}</td>
            <td>${((TotalAYmid + TotalAY) / 2).toFixed(3)} </td>
        </tr>
        
    </tbody></table>
  <\div>
  <div align="left"><p>Sectional Properties about Y-Y axis: <\p><\div>

  <div class="container" align="center">

    <table border="1" cellpadding="3" id="printTable">
        <tbody><tr>
            <th>Description</th>
            <th>Units</th>      
            <th>At Support</th>
            <th>At L/2</th>
            
        </tr>
        <tr>
            <td>Area of the section</td>
            <td>m^2</td>
            <td>${areaabtXxatsup.toFixed(3)}</td>
            <td>${totalcrosssectionalareamid.toFixed(3)}</td>
            
        </tr>
        <tr>
            <td>CG of the section from Left end of the girder (X-left end)</td>
            <td>m</td>
            <td>${CGofSectionFromLeftEndofGirderXLeftEnd.toFixed(3)}</td>
            <td>${CGofSectionFromLeftEndofGirderXLeftEndatMidSection.toFixed(3)}</td>
            
        </tr>
        <tr>
            <td>CG of the section from right end of the girder (X-right end)</td>
            <td>m</td>
            <td> ${CGofSectionFromLeftEndofGirderXRightEnd.toFixed(3)}</td>
            <td> ${CGofSectionFromLeftEndofGirderXRightEndatMidSection.toFixed(3)}</td>
            
        </tr>
        <tr>
            <td>CG of the section from Left end of the girder (X-left end of box)</td>
            <td>m</td>
            <td>${CGofSectionFromLeftEndOfGirderXLeftEndofBox.toFixed(3)}</td>
            <td>${CGofSectionFromLeftEndOfGirderXLeftEndofBoxatMidSection.toFixed(3)}</td>
            
        </tr>
        <tr>
            <td>CG of the section from right end of the girder (X-right end of box)</td>
            <td>m</td>
            <td>${CGofSectionFromRightEndOfGirderXRightEndofBox.toFixed(3)}</td>
            <td>${CGofSectionFromRightEndOfGirderXRightEndofBoxatMidSection.toFixed(3)}</td>
            
        </tr>
        <tr>
            <td>CG of the section from Center of the box</td>
            <td>m</td>
            <td>${CGOfTheSectionFromCenterOfTheBox.toFixed(3)}</td>
            <td>${CGOfTheSectionFromCenterOfTheBoxatMidSection.toFixed(3)}</td>
            
        </tr>
        <tr>
            <td>Moment of inertia Iyy</td>
            <td>m^4</td>
            <td>${momentOfInertiaabtYY.toFixed(3)}</td>
            <td>${momentOfInertiaabtYYatMid.toFixed(3)}</td>
            
        </tr>
        <tr>
            <td>Section Modulus - Zleft left end of the cross section – Top</td>
            <td>m3</td>
            <td>${SectionModulusZleftLeftEndOfCrossSectionTop.toFixed(3)}</td>
            <td>${SectionModulusZleftLeftEndOfCrossSectionTopatMid.toFixed(3)}</td>
            
        </tr>
        <tr>
            <td>Section Modulus – Zright right end of the cross section -Top</td>
            <td>m3</td>
            <td>${SectionModulusZRightRightEndOfCrossSectionTop.toFixed(3)}</td>
            <td>${SectionModulusZRightRightEndOfCrossSectionTopatMid.toFixed(3)}</td>
            
        </tr>
        <tr>
            <td>Section Modulus - Zleft left end of the box – Bottom</td>
            <td>m3</td>
            <td>${SectionModulusZLeftLeftEndofBoxBottom.toFixed(3)}</td>
            <td>${SectionModulusZLeftLeftEndofBoxBottomatMid.toFixed(3)}</td>
            
        </tr>
        <tr>
            <td>Section Modulus – Zright right end ot the box – Bottom</td>
            <td>m3</td>
            <td>${SectionModulusZRightRightEndofBoxBottom.toFixed(3)}</td>
            <td>${SectionModulusZRightRightEndofBoxBottomatMid.toFixed(3)}</td>
            
        </tr>
        <tr>
            <td>Total A*X</td>
            <td>m3</td>
            <td>${TotalAX.toFixed(3)}</td>
            <td>${TotalAXatMid.toFixed(3)}</td>
            
        </tr>
    </tbody></table>
  <\div>
  <div align="left"><p>Sectional Properties about X-X axis at End Section: <\p><\div>
  <div class="container" align="center">
    
    <table border="1" cellpadding="3" id="printTable">
        <tbody><tr>
            <th>Description</th>
            <th>Units</th>      
            <th>At Support</th>
            
        </tr>
        <tr>
            <td>Area of the section</td>
            <td>m2</td>
            <td>${AreaTotatEnd.toFixed(3)}</td>
          
            
        </tr>
        <tr>
            <td>CG of the section from bottom</td>
            <td>m</td>
            <td>${cgofsecfrombottomatEnd.toFixed(3)}</td>
            
            
        </tr>
        <tr>
            <td>CG of the section from top</td>
            <td>m</td>
            <td>${cgofsecfromtopatEnd.toFixed(3)}</td>
            
            
        </tr>
        <tr>
            <td>Moment of inertia Ixx</td>
            <td>m4</td>
            <td>${momentOfInertiaatEnd.toFixed(3)}</td>
            
            
        </tr>
        <tr>
            <td>Ztop of the girder</td>
            <td>m3</td>
            <td>${ZtopofthegirderatEnd.toFixed(3)}</td>
            
            
        </tr>
        <tr>
            <td>Z bottom of the girder</td>
            <td>m3</td>
            <td>${ZbotofthegirderatEnd.toFixed(3)}</td>
            
            
        </tr>
        <tr>
            <td>Total A*Y</td>
            <td>m3</td>
            <td>${TotalAYatEnd.toFixed(3)}</td>
            
            
        </tr>
    </tbody></table>
  </div>

    

     `;
}

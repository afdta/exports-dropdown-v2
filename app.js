//export nation 2017
function exportNationProfiles(){
	var wrap = document.getElementById("export-nation-2017-profiles");
		wrap.className = "c-fix";

	//var boxLink = document.getElementById("box-link");
	var rackspace = "https://c24215cec6c97b637db6-9c0895f07c3474f6636f95b6bf3db172.ssl.cf1.rackcdn.com/interactives/2017/export-nation-profiles/assets/";

	var selectWrap = wrap.appendChild(document.createElement("div"));
		selectWrap.className = "select-wrap c-fix";

	var select = selectWrap.appendChild(document.createElement("select"));
		select.style="min-width:260px; padding: 5px 5px 5px 5px; float:left; font-size:15px; line-height:25px; font-family:Arial, sans;";

	var gobutton = selectWrap.appendChild(document.createElement("div"));
		gobutton.style = "min-height:1em; width:auto; min-width:50px; background-color:#dc2a2a; float:right;";

	var profile_link = document.createElement("a");
		profile_link.appendChild(document.createTextNode("Download profile »"));
		profile_link.setAttribute("target", "_blank");
		profile_link.style = "border:none; text-decoration: none; color:#ffffff;";
		
	var profile_link_wrap = gobutton.appendChild(document.createElement("p"));
		profile_link_wrap.style = "font-size:15px; padding:5px; line-height:25px; margin:0px 5px; font-family:Arial, sans;";

		profile_link_wrap.appendChild(profile_link);


	//var firstOption = select.appendChild(document.createElement("option"));
	//	firstOption.innerHTML = "Select a profile";
	//	firstOption.value = "NA";
	//	firstOption.setAttribute("disabled","1");

	var metro_optgroup = select.appendChild(document.createElement("optgroup"));
		metro_optgroup.setAttribute("label","Metropolitan areas");
	var state_optgroup = select.appendChild(document.createElement("optgroup"));
		state_optgroup.setAttribute("label","States");
	var region_optgroup = select.appendChild(document.createElement("optgroup"));
		region_optgroup.setAttribute("label","U.S. and Regions");

	var file_names = {"metro":[{"name":"Akron","file":"Akron.pdf"},{"name":"Albany","file":"Albany.pdf"},{"name":"Albuquerque","file":"Albuquerque.pdf"},{"name":"Allentown","file":"Allentown.pdf"},{"name":"Atlanta","file":"Atlanta.pdf"},{"name":"Augusta","file":"Augusta.pdf"},{"name":"Austin","file":"Austin.pdf"},{"name":"Bakersfield","file":"Bakersfield.pdf"},{"name":"Baltimore","file":"Baltimore.pdf"},{"name":"Baton Rouge","file":"Baton Rouge.pdf"},{"name":"Birmingham","file":"Birmingham.pdf"},{"name":"Boise City","file":"Boise City.pdf"},{"name":"Boston","file":"Boston.pdf"},{"name":"Bridgeport","file":"Bridgeport.pdf"},{"name":"Buffalo","file":"Buffalo.pdf"},{"name":"Cape Coral","file":"Cape Coral.pdf"},{"name":"Charleston","file":"Charleston.pdf"},{"name":"Charlotte","file":"Charlotte.pdf"},{"name":"Chattanooga","file":"Chattanooga.pdf"},{"name":"Chicago","file":"Chicago.pdf"},{"name":"Cincinnati","file":"Cincinnati.pdf"},{"name":"Cleveland","file":"Cleveland.pdf"},{"name":"Colorado Springs","file":"Colorado Springs.pdf"},{"name":"Columbia","file":"Columbia.pdf"},{"name":"Columbus","file":"Columbus.pdf"},{"name":"Dallas","file":"Dallas.pdf"},{"name":"Dayton","file":"Dayton.pdf"},{"name":"Deltona","file":"Deltona.pdf"},{"name":"Denver","file":"Denver.pdf"},{"name":"Des Moines","file":"Des Moines.pdf"},{"name":"Detroit","file":"Detroit.pdf"},{"name":"El Paso","file":"El Paso.pdf"},{"name":"Fresno","file":"Fresno.pdf"},{"name":"Grand Rapids","file":"Grand Rapids.pdf"},{"name":"Greensboro","file":"Greensboro.pdf"},{"name":"Greenville","file":"Greenville.pdf"},{"name":"Harrisburg","file":"Harrisburg.pdf"},{"name":"Hartford","file":"Hartford.pdf"},{"name":"Houston","file":"Houston.pdf"},{"name":"Indianapolis","file":"Indianapolis.pdf"},{"name":"Jackson","file":"Jackson.pdf"},{"name":"Jacksonville","file":"Jacksonville.pdf"},{"name":"Kansas City","file":"Kansas City.pdf"},{"name":"Knoxville","file":"Knoxville.pdf"},{"name":"Lakeland","file":"Lakeland.pdf"},{"name":"Las Vegas","file":"Las Vegas.pdf"},{"name":"Little Rock","file":"Little Rock.pdf"},{"name":"Los Angeles","file":"Los Angeles.pdf"},{"name":"Louisville","file":"Louisville.pdf"},{"name":"Madison","file":"Madison.pdf"},{"name":"McAllen","file":"McAllen.pdf"},{"name":"Memphis","file":"Memphis.pdf"},{"name":"Miami","file":"Miami.pdf"},{"name":"Milwaukee","file":"Milwaukee.pdf"},{"name":"Minneapolis","file":"Minneapolis.pdf"},{"name":"Nashville","file":"Nashville.pdf"},{"name":"New Haven","file":"New Haven.pdf"},{"name":"New Orleans","file":"New Orleans.pdf"},{"name":"New York","file":"New York.pdf"},{"name":"North Port","file":"North Port.pdf"},{"name":"Ogden","file":"Ogden.pdf"},{"name":"Oklahoma City","file":"Oklahoma City.pdf"},{"name":"Omaha","file":"Omaha.pdf"},{"name":"Orlando","file":"Orlando.pdf"},{"name":"Oxnard","file":"Oxnard.pdf"},{"name":"Palm Bay","file":"Palm Bay.pdf"},{"name":"Philadelphia","file":"Philadelphia.pdf"},{"name":"Phoenix","file":"Phoenix.pdf"},{"name":"Pittsburgh","file":"Pittsburgh.pdf"},{"name":"Portland","file":"Portland.pdf"},{"name":"Providence","file":"Providence.pdf"},{"name":"Provo","file":"Provo.pdf"},{"name":"Raleigh","file":"Raleigh.pdf"},{"name":"Richmond","file":"Richmond.pdf"},{"name":"Riverside","file":"Riverside.pdf"},{"name":"Rochester","file":"Rochester.pdf"},{"name":"Sacramento","file":"Sacramento.pdf"},{"name":"Salt Lake City","file":"Salt Lake City.pdf"},{"name":"San Antonio","file":"San Antonio.pdf"},{"name":"San Diego","file":"San Diego.pdf"},{"name":"San Francisco","file":"San Francisco.pdf"},{"name":"San Jose","file":"San Jose.pdf"},{"name":"Scranton","file":"Scranton.pdf"},{"name":"Seattle","file":"Seattle.pdf"},{"name":"Spokane","file":"Spokane.pdf"},{"name":"Springfield","file":"Springfield.pdf"},{"name":"St. Louis","file":"St. Louis.pdf"},{"name":"Stockton","file":"Stockton.pdf"},{"name":"Syracuse","file":"Syracuse.pdf"},{"name":"Tampa","file":"Tampa.pdf"},{"name":"Toledo","file":"Toledo.pdf"},{"name":"Tucson","file":"Tucson.pdf"},{"name":"Tulsa","file":"Tulsa.pdf"},{"name":"Urban Honolulu","file":"Urban Honolulu.pdf"},{"name":"Virginia Beach","file":"Virginia Beach.pdf"},{"name":"Washington","file":"Washington.pdf"},{"name":"Wichita","file":"Wichita.pdf"},{"name":"Winston-Salem","file":"Winston-Salem.pdf"},{"name":"Worcester","file":"Worcester.pdf"},{"name":"Youngstown","file":"Youngstown.pdf"}],"state":[{"usps":"AK","name":"Alaska","file":"AK.pdf"},{"usps":"AL","name":"Alabama","file":"AL.pdf"},{"usps":"AR","name":"Arkansas","file":"AR.pdf"},{"usps":"AZ","name":"Arizona","file":"AZ.pdf"},{"usps":"CA","name":"California","file":"CA.pdf"},{"usps":"CO","name":"Colorado","file":"CO.pdf"},{"usps":"CT","name":"Connecticut","file":"CT.pdf"},{"usps":"DC","name":"District of Columbia","file":"DC.pdf"},{"usps":"DE","name":"Delaware","file":"DE.pdf"},{"usps":"FL","name":"Florida","file":"FL.pdf"},{"usps":"GA","name":"Georgia","file":"GA.pdf"},{"usps":"HI","name":"Hawaii","file":"HI.pdf"},{"usps":"IA","name":"Iowa","file":"IA.pdf"},{"usps":"ID","name":"Idaho","file":"ID.pdf"},{"usps":"IL","name":"Illinois","file":"IL.pdf"},{"usps":"IN","name":"Indiana","file":"IN.pdf"},{"usps":"KS","name":"Kansas","file":"KS.pdf"},{"usps":"KY","name":"Kentucky","file":"KY.pdf"},{"usps":"LA","name":"Louisiana","file":"LA.pdf"},{"usps":"MA","name":"Massachusetts","file":"MA.pdf"},{"usps":"MD","name":"Maryland","file":"MD.pdf"},{"usps":"ME","name":"Maine","file":"ME.pdf"},{"usps":"MI","name":"Michigan","file":"MI.pdf"},{"usps":"MN","name":"Minnesota","file":"MN.pdf"},{"usps":"MO","name":"Missouri","file":"MO.pdf"},{"usps":"MS","name":"Mississippi","file":"MS.pdf"},{"usps":"MT","name":"Montana","file":"MT.pdf"},{"usps":"NC","name":"North Carolina","file":"NC.pdf"},{"usps":"ND","name":"North Dakota","file":"ND.pdf"},{"usps":"NE","name":"Nebraska","file":"NE.pdf"},{"usps":"NH","name":"New Hampshire","file":"NH.pdf"},{"usps":"NJ","name":"New Jersey","file":"NJ.pdf"},{"usps":"NM","name":"New Mexico","file":"NM.pdf"},{"usps":"NV","name":"Nevada","file":"NV.pdf"},{"usps":"NY","name":"New York","file":"NY.pdf"},{"usps":"OH","name":"Ohio","file":"OH.pdf"},{"usps":"OK","name":"Oklahoma","file":"OK.pdf"},{"usps":"OR","name":"Oregon","file":"OR.pdf"},{"usps":"PA","name":"Pennsylvania","file":"PA.pdf"},{"usps":"RI","name":"Rhode Island","file":"RI.pdf"},{"usps":"SC","name":"South Carolina","file":"SC.pdf"},{"usps":"SD","name":"South Dakota","file":"SD.pdf"},{"usps":"TN","name":"Tennessee","file":"TN.pdf"},{"usps":"TX","name":"Texas","file":"TX.pdf"},{"usps":"UT","name":"Utah","file":"UT.pdf"},{"usps":"VA","name":"Virginia","file":"VA.pdf"},{"usps":"VT","name":"Vermont","file":"VT.pdf"},{"usps":"WA","name":"Washington","file":"WA.pdf"},{"usps":"WI","name":"Wisconsin","file":"WI.pdf"},{"usps":"WV","name":"West Virginia","file":"WV.pdf"},{"usps":"WY","name":"Wyoming","file":"WY.pdf"}],"region":[{"name":"Midwest","file":"Midwest.pdf"},{"name":"Northeast","file":"Northeast.pdf"},{"name":"South","file":"South.pdf"},{"name":"United States","file":"United States.pdf"},{"name":"West","file":"West.pdf"}]};

	var metros = file_names.metro;
	var states = file_names.state;
	var regions = file_names.region;

	metros.sort(function(a,b){return a.name <= b.name ? -1 : 1;});
	states.sort(function(a,b){return a.name <= b.name ? -1 : 1;});
	regions.sort(function(a,b){
		if(a.name=="United States"){
			return 1;
		}
		else if(b.name=="United States"){
			return -1;
		}
		else{
			return a.name <= b.name ? -1 : 1;
		}
	});

	var appendOption = function(d, subfolder, optgroup){
		var o = optgroup.appendChild(document.createElement("option"));
		o.value = encodeURI(rackspace + subfolder + "/" + d.file);
		o.innerHTML = d.name;
		return o.value;
	}

	//add metro links
	var m =-1;
	while(++m < metros.length){
		if(m===0){
			//on first one, set link
			profile_link.setAttribute("href", appendOption(metros[m], "Metros", metro_optgroup));
		}
		else{
			appendOption(metros[m], "Metros", metro_optgroup);
		}
	}

	//add state links
	var s =-1;
	while(++s < states.length){
		appendOption(states[s], "States", state_optgroup);
	}	

	//add region links
	var r =-1;
	while(++r < regions.length){
		appendOption(regions[r], "US + Regions", region_optgroup);
	}		

	select.addEventListener("change", function(){
		var val = select.value;
		if(val !== "NA"){
			//window.open(val, "_blank");
			profile_link.setAttribute("href", val);
		}
	});

	//make sure the "go" button fills the entire height of container
	var go_height = 0;
	var resize_go = function(){
		var sw_box = selectWrap.getBoundingClientRect();
		var sw_height = sw_box.bottom-sw_box.top;

		if(sw_height != go_height){
			go_height = sw_height;
			gobutton.style.height = sw_height+"px";
		}
	}

	setTimeout(resize_go, 50);
}

//on load, kick off the app
document.addEventListener("DOMContentLoaded", function(){
	exportNationProfiles();
});
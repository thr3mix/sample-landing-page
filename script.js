var apiKey = "75xudtkb6ks3aw";
var authCode;
var client_secret = "SKybWS55LKRA0GVp";
var user_token;

function connectLinkedInUser()
{

	window.location.href = "https://www.linkedin.com/uas/oauth2/authorization?response_type=code"
	+"&client_id=" + apiKey
	+"&scope=r_basicprofile%20r_fullprofile%20r_emailaddress%20r_network%20rw_groups"
	+"&state=DCEEFWF45453sdffef424&redirect_uri=http://thr3mix.github.io/sample-landing-page/authorized_user";
	
}

function reqAccessToken()
{
	var params = location.search.split("&");
	var authCodeString = params[0];
	var authCodeS = authCodeString.split("=");
	
	authCode = authCodeS[1];
	console.log(authCode);
	
	$.getJSON("https://www.linkedin.com/uas/oauth2/accessToken?grant_type=authorization_code&code=" + authCode 
	+"&redirect_uri=http://thr3mix.github.io/sample-landing-page/authorized_user"
	+"&client_id=" + apiKey
	+"&client_secret=" + client_secret, function(data) {
    		console.log(data);
	});
	
	


	
	
}

function getProfile()
{
	window.location.href = "https://api.linkedin.com/v1/people/~";
}



function setFuckingText(index)
{
	var fucking_text = new Array();
	fucking_text[0] = "Get the fuck up and exercise!";
	fucking_text[1] = "Fuck the Seahawks";
	fucking_text[2] = "Make every fucking day count";
	fucking_text[3] = "Stop fucking comb-overs";
	fucking_text[4] = "No one gives a fuck, so stop thinking they do";
	fucking_text[5] = "Stop fucking having expectations and just live";
	fucking_text[6] = "Stop being a fucking afraid";
	fucking_text[7] = "Stop fucking following the status quo";
	fucking_text[8] = "Fucking stop swag";
	fucking_text[9] = "Don't raise your voice, improve your fucking argument";
	fucking_text[10] = "Stop fucking procrastinating";
	fucking_text[11] = "Life is your attitude, not your fucking situation";
	fucking_text[12] = "Don't blame others for their mistakes, it makes you fucking weak";
	fucking_text[13] = "Don't try to be the best, it makes you fucking arrogant";
	fucking_text[14] = "Late people never fucking win";
	fucking_text[15] = "Fucking no ragrets";
	
	document.getElementById('bigfuckingtext').innerHTML = fucking_text[index];

}

/*function loadText()
{
	var index = gup("p");
	
	if( index == "" )
	{
		changeFuckingText();
	}
	else
	{
		var num = parseInt(index);
		if( num < 16 )
		{
			setFuckingText(num);
		}
		else
		{
			changeFuckingText();
		}
	}
}*/

function changeFuckingText()
{
	var i = Math.floor(16*Math.random());
	setFuckingText(i);
}

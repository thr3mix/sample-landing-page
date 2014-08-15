

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

function loadText()
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
}

function changeFuckingText()
{
	var i = Math.floor(16*Math.random());
	setFuckingText(i);
}
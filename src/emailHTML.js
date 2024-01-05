const generateEmailHTML = (venue, spot1, spot2, spot3) => `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title></title>
        <style type="text/css">
            @import url('https://fonts.googleapis.com/css?family=Roboto:500');
            /* /\/\/\/\/\/\/\/\/ RESET STYLES /\/\/\/\/\/\/\/\/ */
            body {
                margin: 0;
                padding: 0;
                color: black;
            }
        
            img {
                border: 0 none;
                height: auto;
                line-height: 100%;
                outline: none;
                text-decoration: none;
            }
        
            a img {
                border: 0 none;
            }
        
            .imageFix {
                display: block;
            }
        
            table, td {
                border-collapse: collapse;
            }
        
            #bodyTable {
                height: 100% !important;
                margin: 0;
                padding: 0;
                width: 100% !important;
            }
             /* END OF /\/\/\/\/ RESET STYLES /\/\/\/\/\/\/\/\/ */
        </style>
    </head>
    <body style="background-color: rgb(200, 200, 200);">
        <table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable" style="background-color: rgb(200, 200, 200);">
            <tr>
                <td align="center" valign="top">
                    <table border="0" cellpadding="20" cellspacing="0" width="600" id="emailContainer">
                        <tr>
                            <td align="center" valign="top" style="background-color: rgb(232, 209, 255); border-radius: 20px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
                                <table border="0" cellpadding="20" cellspacing="0" width="100%" id="emailBody">
                                    <tr>
                                        <td  align="center" valign="top">
                                            <img src="https://s3-us-west-1.amazonaws.com/unicornicopia/images/badge5.png" alt="Unicornicopia Logo"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left" valign="top" style="font-family: 'Roboto', Ariel, sans-serif; font-weight: 500;">
                                            Hi${venue.contact ? ` ${venue.contact}` : ''},
                                            <br><br>
                                            I'm the guitarist for the Bay Area based rock band Unicornicopia.<br>
                                            ${venue.played ?
                                            `We had a blast last time we played ${venue.name} and we'd love to do it again.` :
                                            `We'd love to play a show at ${venue.name}.`}
                                            <br><br>
                                            We've played at a number of other venues around the Bay Area, including ${spot1}, &nbsp; ${spot2}, &nbsp; and &nbsp; ${spot3}. &nbsp; 
                                            On a typical weeknight, we can comfortably draw 20+ people. &nbsp; 
                                            On a typical Friday or Saturday, we can comfortably draw 40+ people. &nbsp; 
                                            We have relationships with a number of other bands in the area and can easily put together a full night of music if you'd prefer.
                                            <br><br>
                                            We don't have any professional recordings (we're working on them!) but you can check out some live/work in progress tracks at:
                                            <br><br>
                                            <a href="https://soundcloud.com/user-520605937" target="_blank" rel="noopener" style="text-decoration: none; color: purple;">SoundCloud</a><br>
                                            <a href="https://www.youtube.com/channel/UCaCKeeDyCmPUY8dr7ItSS6g" target="_blank" rel="noopener" style="text-decoration: none; color: purple;">YouTube</a>
                                            <br><br>
                                            Looking forward to playing at ${venue.name} soon.<br>Thanks!
                                            <br><br>
                                            -Theo
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
</html>
`;

console.log(generateEmailHTML({ name: 'Lucky Venue', }, ...['Venue1', 'Venue2', 'Venue3']));

module.exports = {
    generateEmailHTML,
};

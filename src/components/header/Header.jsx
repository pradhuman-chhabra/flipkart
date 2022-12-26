// we can easily change the css of material ui using the styled componenet
import {AppBar,Toolbar,Typography, styled,Box} from '@mui/material';

// whatever changes we want to make in the appbar we can do so using this styled component , we just stored this in a variable named StyledHeader and then we will use this StyledHeader in place we were about to use the AppBar
const StyledHeader = styled(AppBar)
`
// the css we wnat to override in the premade componenet is written in this is written inside this
background: #2874f0;
height:55px;
`
// we just added css to the box element which is the react equivalent of div in HTML we did this so as to put the flipkart logo image a little centrally placed han it was before 
const Component =styled(Box)`
    margin-left:12%;
    line-height:0;
`

// react hooks were intorduced in v 16.8
// we will be using function based Components
// we'll also be using hooks with the react function based componenets
// This is a function based componenet

const Header = () =>{

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    // the above is the image we have storeed the address in a variable
    return(
        <StyledHeader>
            {/* here we have imported the app bar from material ui */}
            <Toolbar>
                {/* here div(HTML) ise replaced by box(MUI) component */}
                <Component>
                    <img src={logoURL} alt="logo" style={{ width:75 }}/>
                    {/* react mein ham variables ko curly braces ke andar store karte hain */}
                    {/* Jo bhie css ham styled ke saath use karenge woh smallcase aur hyphen ke saath honge and jo css ham style ke saath use karenge woh camelcased honge like in the above line example  */}
                    {/* here the style is also a variable so variable is put in curly braces but here we put styke in an object then that's why we are using    */}
                    <Box>
                        <Typography>
                        {/* the react equivalent of p in HTML is typograpgy */}
                        Explore
                        </Typography>
                    </Box>

                </Component>
            </Toolbar>
        </StyledHeader>

    )
}

export default Header;
// yeh hamne header ko export kar diya hai , aur ab app.js mein import karenge
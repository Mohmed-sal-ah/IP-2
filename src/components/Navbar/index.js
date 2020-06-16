import React, { Component } from 'react'
import * as STYLED from './style'
import { ThemeProvider } from 'styled-components'

class NavBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mobileNav: false
        }
    }
    ToggleMobileNav = (event) => {
        event.preventDefault();
        if (this.state.mobileNav) {
            this.setState({ mobileNav: false })
        } else {
            this.setState({ mobileNav: true })
        }
    }
    render() {
        const percentVaule = this.state.mobileNav ? '100' : '0';
        const clicked = this.state.mobileNav ? 'clicked' : '';
        let mainColorValue;
        let backgroundColorValue;
        let borderColorValue;
        if (this.props.pageTheme === 'dark') {
            mainColorValue = 'ffffff';
            backgroundColorValue = '2d2d2d';
            borderColorValue = 'D9D9D9';
        } else {
            mainColorValue = '000000';
            backgroundColorValue = 'ffffff';
            borderColorValue = '333333'
        }
        const theme = {
            mainColor: `#${mainColorValue}`,
            backgroundColor: `#${backgroundColorValue}`,
            borderColor: `#${borderColorValue}`,
            toggle: `${percentVaule}%`
        };

        return (
            <ThemeProvider theme={theme}>
                <STYLED.FullNav>

                    <STYLED.NavFlex>
                        <STYLED.TitleLink to='/' >Mohamed-sal-ah</STYLED.TitleLink>
                        <STYLED.ULNav>
                            <STYLED.TopListItem>
                                <STYLED.LinkItem activeClassName='active-link' to='/about'>About</STYLED.LinkItem>
                            </STYLED.TopListItem>
                            <STYLED.TopListItem>
                                <STYLED.LinkItem activeClassName='active-link' to='/projects'>Projects</STYLED.LinkItem>
                            </STYLED.TopListItem>
                            <STYLED.TopListItem>
                                <STYLED.LinkItem activeClassName='active-link' to='/contact'>Contact</STYLED.LinkItem>
                            </STYLED.TopListItem>
                            <STYLED.TopListItem>
                                <STYLED.AdjustTheme onClick={this.props.changeTheme} />
                            </STYLED.TopListItem>
                            <STYLED.TopListItem>
                                <STYLED.BarItems className={clicked} onClick={this.ToggleMobileNav}>
                                    <STYLED.Bar />
                                    <STYLED.Bar />
                                    <STYLED.Bar />
                                </STYLED.BarItems>
                            </STYLED.TopListItem>
                        </STYLED.ULNav>
                    </STYLED.NavFlex>
                    <STYLED.MobileNav >
                        <STYLED.MobileUL>
                            <STYLED.MobileListItem>
                                <STYLED.LinkItem activeClassName='active-link' to='/about'>About</STYLED.LinkItem>
                            </STYLED.MobileListItem>
                            <STYLED.MobileListItem>
                                <STYLED.LinkItem activeClassName='active-link' to='/projects'>Projects</STYLED.LinkItem>
                            </STYLED.MobileListItem>
                            <STYLED.MobileListItem>
                                <STYLED.LinkItem activeClassName='active-link' to='/contact'>Contact</STYLED.LinkItem>
                            </STYLED.MobileListItem>
                        </STYLED.MobileUL>
                    </STYLED.MobileNav>
                </STYLED.FullNav>
            </ThemeProvider>

        )
    }

}

export default NavBar
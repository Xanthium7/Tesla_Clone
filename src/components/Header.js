import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// import {selectCars} from '../features/car/carSlice';
// import { useSelector } from 'react-redux';


function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    // const cars = useSelector(selectCars)
  return (
    <Container>
        <a href='/'>
            <img src="/images/logo.svg" alt="" />

        </a>
        <Menu>
            {/* {cars && cars.map((car, index) => (
                <a key={index} href="">{car}</a>
            ))} */}
            <a href="#ms">Model S</a>
            <a href="#m3">Model 3</a>
            <a href="#mx">Model x</a>
            <a href="#my">Model y</a>

        </Menu>

        <RightMenu>
            <a href="#">Shop</a>
            <a href="#">Tesla Account</a>
            {/* <IconButton>
            <MenuIcon/>
            </IconButton> */}
            <IconButton>
            <CustomMenu onClick={() =>setBurgerStatus(true)} />
            </IconButton>
        </RightMenu>

        <BurgerNav show={burgerStatus}>
            <CloseWrapper>
                <IconButton>
            <CustomClose onClick={() =>setBurgerStatus(false)}/>
            </IconButton>
            </CloseWrapper>
            {/* {cars && cars.map((car, index) => (
                <li key={index}><a href="">{car}</a></li>
            ))} */}

            <li><a href="#ms">Model S</a></li>
            <li><a href="#m3">Model 3</a></li>
            <li><a href="#mx">Model X</a></li>
            <li><a href="#my">Model Y</a></li>

            <li><a href="#">Exisiting Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade In</a></li>
            <li><a href="#">Cyber Truck</a></li>
            <li><a href="#">Roadster</a></li>
            <li><a href="#a">Accessories</a></li>
            <li><a href="#p">Panels</a></li>
            <li><a href="#r">Roofing</a></li>

            
        </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

`

const Menu = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;

    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
        
        border-radius: 10px;
        padding: 10px;

        &:hover {
            background-color: #0101012c;
            transition: all 0.4s;
            
        }
    }
    @media (max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a{
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
        flex-wrap: nowrap;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'traslateX(0)': 'translateX(100%)'};
    transition: transform 0.5s ;
    
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,0.2);
        padding-left: 20px;
        border-radius: 8px;
        &:hover {
            transition: all 0.4s;
            background-color: #00000012;
        }
        

        a {
            font-weight: 600;
            
            
            
        }
    }

`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;

`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

import styled from 'styled-components'

export const AppHeaderWrapper = styled.div`
    height: 75px;
    background-color: #242424;
    font-size: 14px;

    .content{
        display: flex;
        justify-content: space-between;
    }

    .divider{
        height: 5px;
        background-color: #C20C0C;
    }


`

export const headerLeft = styled.div`
    display: flex;
    
    .logo{
        display: block;
        width: 176px;
        height: 70px;
        background-position: 0 0;
        text-indent: -9999px; 
    }


`

export const headerRight = styled.div`
   
`
import styled from 'styled-components'

export const HomeWrapper =styled.div`
    width:960px;
    margin: 0 auto;
    margin-top:30px;
`
export const HomeLeft = styled.div`
    width: 640px
    float:left;
    padding-left:15px;
    .pic{
        width:100%;
        height:270px;
        padding-bottom:30px;
        border-bottom:1px solid #ccc;
    }
`

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`

export const  ItemWrapper = styled.div`
    display:flex;
    flex-direction:row;
    img{
        width:150px;
        height:100px;
    }
    padding:20px 0;
    border-bottom:1px solid #ccc;
`

export const ItemInfo = styled.div`
    width:623px;
    padding-right:10px;
    .title{
        margin: -7px 0 4px;
        display: inherit;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
        color:#333;
    }
    .cont{
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`
export const LoadMore = styled.div`
    margin:20px 0;
    width: 100%;
    border-radius: 20px;
    background-color: #a5a5a5;
    text-align:center;
    padding:14px 0;
    :hover{
        background-color:#c9b3b3
    }
`
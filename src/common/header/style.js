import styled from 'styled-components';
import  logo from '../../static/img/logo.png'

export const Header = styled.div`
    height:56px;
    width:100%;
    border-bottom:1px solid #ccc;
`

export const HeaderWrapper = styled.div`
    min-width: 768px;
    max-width: 1440px;
    margin: 0 auto;
`

export const LeftArea = styled.div`
    float:left;
    display:flex;
    align-items:center;
`

export const Logo = styled.div`
    background: url(${logo});
	display: inline-block;
	width: 100px;
    height: 56px;
    background-size:contain;
`
export const SearchArea = styled.div`
    position: relative;
    margin-left:20px;
    i {
        position:absolute;
        right:10px;
        top:5px;
        padding:6px;
        border-radius:50%;
        &.active{
            color:#fff;
            background:#969696;
        }
    }
`
export const SearchInput = styled.input.attrs({
	placeholder: '搜索'
})`
    padding: 0 40px 0 20px;
    width: 160px;
    height: 38px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background:#eee;
    &.active{
        width:300px;
    }
`
export const Triangle = styled.div`
    position:absolute;
    width:18px;
    height:18px;
    top:54px;
    left:12px;
    transform:rotate(225deg);
    z-index:1;
    background:#fff
    box-shadow:2px 2px 2px rgba(0,0,0,.2);
`

export const SearchTip = styled.div`
    z-index:0;
    width:300px;
    height:100px;
    box-shadow:0 0 8px rgba(0,0,0,.2);
    position: absolute;
    top:60px;
    background:#fff;
    padding:14px;
`

export const SearchTrendItem = styled.div`
    display:inline-block;
    padding: 2px 6px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
    margin:14px 12px 0 0;
`

export const RightArea = styled.div`
    float:right
`

export const LoginBtn = styled.div`
    display:inline-block;
    color: #969696;
    font-szie:15px;
    margin: 11px 6px 0 10px;
`

export const SignUpBtn = styled.div`
    display:inline-block;
    width: 80px;
    height: 38px;
    line-height: 38px;
    margin: 9px 5px 0 15px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    font-size: 15px;
    color: #ea6f5a;
    background-color: transparent;
    text-align:center
`;

export const WriteBtn = styled.a`
    display:inline-block;
    width: 100px;
    height: 40px;
    line-height: 40px;
    margin: 8px 15px 0;
    border-radius: 20px;
    font-size: 15px;
    color: #fff;
    background-color: #ea6f5a;
    i{
        padding-left:12px;
        padding-right:6px;
    }
`

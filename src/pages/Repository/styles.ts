import styled, {css} from 'styled-components';

export const Header  = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #a8a8b3;
        transition: color 0.2s;

        &:hover {
            color: #666;
        }
    }

    a svg {
        margin-right: 4px
    }
`;

export const RepositoryInfo = styled.section`
    margin-top: 80px;

    header {
        display: flex;
        align-items: center;
    }

    header img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }

    header div {
        margin-left: 24px;
    }

    header div strong {
        font-size: 36px;
        color: #3d3d4d;
    }

    header div p {
        font-size: 18px;
        color: #737389;
        margin-top: 4px;
    }

    ul {
        display: flex;
        margin-top: 40px;
    }

    ul li + li {
        margin-left: 80px;
    }

    ul li strong{
        display: block;
        font-size: 36px;
        color: #3d3d4d;
    }

    ul li span {
        display: block;
        margin: 4px;
        color: #6c6c80;
    }
`;


export const Issues = styled.div`
    margin-top: 80px;

    a + a {
        margin-top: 16px;
    }

    a {
        background: #fff;
        border-radius:5px;
        width: 100%;
        padding: 24px;
        display: flex;
        text-decoration: none;
        align-items: center;
        transition: transform 0.2s;

        &:hover {
            transform: translateX(10px);
        }
    }

    a div {
        margin: 0 16px;
        flex: 1;
    }

    a div strong {
        font-size: 20px;
        color: #3d3d4d;
    }
    a div p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
    }

    a svg {
        margin-left: auto;
        color: #cbcbd6;
    }
`;

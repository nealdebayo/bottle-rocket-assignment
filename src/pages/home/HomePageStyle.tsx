import styled from 'styled-components';

export const HomePageStyle = styled.div`
    padding-top: 4rem;

    .app__header {
        background-color: #43e895;
        padding: 1rem 10px;
        display: flex;
        flex-direction: row;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;

        img {
            width: 35px;
            height: 35px;
        }

        .app__header-left__nav {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;

            img {
                width: 20px;
                height: 30px;
                cursor: pointer;
            }
        }

        .app__header-title {
            flex: 2;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            .title {
                font-size: 17px;
                color: #fff;
                text-align: center;
            }
        }

        .app__header-right__nav {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
        }
    }

    .app__footer {
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: #2a2a2a;
        padding: 10px;
        display: flex;
        flex-direction: row;

        img {
            width: 25px;
            height: 25px;
        }

        .tab {
            flex: 1;
            flex-direction: column;
            align-items: center;
            text-align: center;
            justify-content: center;

            span.active {
                color: #ffffff !important;
                font-size: 10px;
                display: block;
            }

            span {
                color: #979797 !important;
                font-size: 10px;
                display: block;
            }
        }
    }

    .load__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 50px;

        p {
            color: #000;
            text-align: center;
        }
    }

    @media (max-width: 600px) {
        .app__content {
            display: flex;
            flex-direction: column;
        }
    }

    @media (min-width: 600px) {
        .app__content {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
        }
    }

    @media (min-width: 900px) {
        .app__content {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        }
    }
`;

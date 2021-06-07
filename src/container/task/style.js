import Styled from 'styled-components';

const SidebarWrap = Styled.div`
    .sDash_taskApp-sidebar{
        background-color: #fff;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(${({ theme }) => theme['gray-color']},.03);
        min-height: 300px;
        .sDash_btn-add{
            width: 100%;
            font-size: 14px;
            font-weight: 500;
            border-radius: 22px;
            height: 44px;
            margin-bottom: 20px;
        }
    }
    .sDash_taskApp-sidebar__nav{
        width: calc(100% + 30px);
        position: relative;
        ${({ theme }) => (theme.rtl ? 'right' : 'left')}: -15px;
        .sDash_taskApp-sidebar__nav--item{
            display: block;
            .sDash_taskApp-sidebar__nav--link{
                display: flex;
                align-items: center;
                font-size: 14px;
                border-radius: 4px;
                color: ${({ theme }) => theme['gray-color']};
                padding: 8px 15px;
                &:hover{
                    color: ${({ theme }) => theme['primary-color']};
                    background-color: ${({ theme }) => theme['primary-color']}10;
                    .nav-item-icon{
                        i,
                        svg{
                            color: ${({ theme }) => theme['primary-color']};
                        }
                    }
                }
                &.active{
                    color: ${({ theme }) => theme['primary-color']};
                    background-color: ${({ theme }) => theme['primary-color']}10;
                    .nav-item-icon{
                        i,
                        svg{
                            color: ${({ theme }) => theme['primary-color']};
                        }
                    }
                }
                .nav-item-icon{
                    line-height: 1;
                    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 12px;
                    i,
                    svg{
                        width: 16px;
                        color: #ADB4D2;
                    }
                }
            }
        }
    }
`;
const TaskListWrap = Styled.div`
    .sDash_tasklist-wrap{
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(#9299B8,.03);
    }
    .sDash_tasklist-head{
        .sDash_task-list-title{
            font-size: 16px;
            font-weight: 500;
            padding: 15px 30px;
            margin-bottom: 0;
            border-bottom: 1px solid ${({ theme }) => theme['border-color-light']};
        }
    }
    .sDash_tasklist-body{
        padding-bottom: 25px;
        .sDash_tasks{
            .sDash_tasks-item{
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 15px 30px;
                &:not(:last-child){
                    border-bottom: 1px solid ${({ theme }) => theme['border-color-light']};
                }
                @media only screen and (max-width: 575px){
                    padding: 15px 20px;
                    flex-direction: column;
                    align-items: flex-start;
                }
            }
            .sDash_tasks-item__title{
                font-size: 16px;
                margin-bottom: 10px;
                color: ${({ theme }) => theme['dark-color']};
                .ant-checkbox + span{
                    ${({ theme }) => (theme.rtl ? 'padding-right' : 'padding-left')}: 10px;
                }
                .ant-checkbox-wrapper{
                    &:hover{
                        .ant-checkbox-inner{
                            border-color: ${({ theme }) => theme['success-color']};
                        }
                    }
                    .ant-checkbox-input{
                        &:focus + .ant-checkbox-inner{
                            border-color: ${({ theme }) => theme['success-color']};
                        }
                    }
                    .ant-checkbox-inner{
                        width: 18px;
                        height: 18px;
                        &:after{
                            width: 5.51428571px;
                            height: 10px;
                            top: 45%;
                        }
                    }
                    .ant-checkbox-checked{
                        &:after{
                            border-color: ${({ theme }) => theme['success-color']};
                        }
                        .ant-checkbox-inner{
                            background-color: ${({ theme }) => theme['success-color']};
                            border-color: ${({ theme }) => theme['success-color']};
                        }
                    }
                }
            }
            .sDash_tasks-item__text{
                p{
                    font-size: 12px;
                    font-weight: 400;
                    color: ${({ theme }) => theme['gray-color']};
                    &:last-child{
                        margin-bottom: 0;
                    }
                }
            }
            .sDash_tasks-item__action{
                display: flex;
                align-items: center;
                @media only screen and (max-width: 575px){
                    margin-top: 20px;
                }
                svg,
                i{
                    color: ${({ theme }) => theme['extra-light-color']};
                }
                .task-favourite{
                    line-height: 1;
                    ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 20px;
                    &.active{
                        svg,
                        i{
                            color: ${({ theme }) => theme['warning-color']}; 
                        }
                    }
                }
                .ant-dropdown-trigger {
                    line-height: 1;
                }
                .task-favourite{
                    cursor: pointer;
                }
            }
        }
        .sDash_empty-task{
            min-height: 215px;
            display: flex;
            align-items: center;
            justify-content: center;
            span{
                font-size: 18px;
                font-weight: 500;
                color: ${({ theme }) => theme['light-color']}; 
            }
        }
    }
`;
const FixedSidebar = Styled.div`
    position: fixed;
    top: 0;
    ${({ theme }) => (theme.rtl ? 'right' : 'left')}: 0px;
    width: 280px;
    height: 100vh;
    z-index: 9999;
    background-color: #fff;
    overflow-y: auto;
    transition: all .3s ease;
    &.show{
        transform: translateX(0px);
    }
    &.hide{
        transform: translateX(-280px);
    }
    .trigger-close{
        float: right;
        margin-top: 15px;
        ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 15px;
        svg,
        i{
            color: ${({ theme }) => theme['danger-color']}; 
        }
    }
    .sDash_taskApp-sidebar{
        padding-top: 60px;
    }
`;

export { SidebarWrap, TaskListWrap, FixedSidebar };
